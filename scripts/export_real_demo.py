# -*- coding: utf-8 -*-
"""Export a real-signal MIORA demo for the website (AI assistant Claude, 29.10.2026).

What it does
  * Recipient: one person of BCI Competition IV 2a, session T only (session E and the T-new donors,
    which MIORA-2 opens once, are NOT touched). Runs 1-4 = fit (96 trials), run 5 = calibration, run 6 = demo.
  * Donors: real chewing windows from DONOR_BANK_V18_REBUILT.npz (OpenNeuro ds006386, scenario P4).
    Calibration uses the old bank (P01-P06); the demo uses the new bank (18 persons), so the
    calibration never sees the demo donors.
  * Models are trained with the project code MIORA2_RUN/code/miora2.py: CSPLDA('B0') = main classifier C,
    Expert(gamma=0) = second classifier, q = q_clean, guard = 4 checks. tau = median(q clean fit+cal) + delta,
    (delta, kappa) chosen on calibration from the preregistered grid; enabled = rule helps on calibration.
  * The browser recomputes everything from closed-form terms (power = A + 2*lam*B + lam^2*C), exactly
    like miora2.proj_power, so any SNR works.

Usage
  python export_real_demo.py --mat A03T.mat --bank DONOR_BANK_V18_REBUILT.npz --code MIORA2_RUN/code \
         --out real_demo.json --ref real_demo_reference.json --subject 3
"""
import argparse, base64, json, os, sys, hashlib
import numpy as np

ap = argparse.ArgumentParser()
ap.add_argument('--mat', required=True)
ap.add_argument('--bank', required=True)
ap.add_argument('--code', required=True)
ap.add_argument('--out', required=True)
ap.add_argument('--ref', required=True)
ap.add_argument('--subject', type=int, default=3)
ap.add_argument('--wave_ch', default='C3')
args = ap.parse_args()
sys.path.insert(0, os.path.abspath(args.code))
import miora2 as m2
import miora_pv as pv
from miora2_data import load_bank

COMMON19 = ['Fz', 'FC3', 'FC1', 'FCz', 'FC2', 'FC4', 'C5', 'C3', 'C1', 'Cz', 'C2', 'C4', 'C6',
            'CP3', 'CP1', 'CP2', 'CP4', 'Pz', 'POz']
WCH = COMMON19.index(args.wave_ch)


def sha(p):
    return hashlib.sha256(open(p, 'rb').read()).hexdigest()


def b64f32(a):
    return base64.b64encode(np.ascontiguousarray(a, dtype='<f4').tobytes()).decode()


def b64wave(a):
    a = np.asarray(a, float)
    s = float(np.max(np.abs(a))) / 32000 or 1.0
    return {'scale': s, 'data': base64.b64encode(np.round(a / s).astype('<i2').tobytes()).decode()}


KNOWN_SHA = {  # MAT_SHA256.csv of the MIORA-2 package
    'A03T.mat': '7e731ee8b681d5da6ecb11ae1d4e64b1653c7f15aad5d6b7620b25ce53141e80'}
_s = sha(args.mat)
if os.path.basename(args.mat) in KNOWN_SHA and KNOWN_SHA[os.path.basename(args.mat)] != _s:
    sys.exit(f'SHA256 mismatch for {args.mat}: {_s}')
R = pv.load_recipient(args.mat)
y = R['y']
assert len(y) == 144, f'expected 144 left/right trials in session T, got {len(y)}'
run = np.arange(144) // 24
sub = lambda S, idx: {k: S[k][idx] for k in ('decoder', 'high', 'bands')}
i_fit, i_cal, i_demo = np.where(run <= 3)[0], np.where(run == 4)[0], np.where(run == 5)[0]
Hfit, Hcal, Hdemo = sub(R, i_fit), sub(R, i_cal), sub(R, i_demo)

C = m2.CSPLDA('B0', 0.0, False).fit(Hfit, y[i_fit], None, None, None)
E = m2.Expert(0.0).fit(Hfit, y[i_fit], None)

BANK, NEW, OLD = load_bank(args.bank)
dstack = lambda ids: {k: np.stack([BANK[i]['P4'][k] for i in ids]) for k in ('decoder', 'high', 'bands')}
SNR = np.asarray(m2.SNR, float)
WEAK = SNR >= 6


def terms(H, D):
    """All closed-form terms for trials H and donor windows D."""
    tc = C.terms(H, D)[0]                                     # B0: one band, 8 filters
    te = E.terms(H, D)                                        # 2 bands, (T,4,8) blocks
    tq = m2.q_terms(H, D)                                     # identity projection: high, decoder
    return tc, te, tq


def scores(tc, te, tq, lam):
    """v, p, q for all trial x donor pairs at mixing weights lam (Wn,)."""
    v = C.score_mix([tc], lam) / C.sd
    p = E.score_mix(te, lam) / E.sd
    q = m2.q_mix(tq, lam)
    return v, p, q


def evaluate(H, yy, D, ids, tau, kappa, enabled):
    tc, te, tq = terms(H, D)
    rms = np.array([BANK[i]['rms20'] for i in ids])
    vc = C.score_clean(H) / C.sd
    clean_ok = (vc > 0) == (yy == 1)
    out = {'C': [], 'M': []}
    for snr in SNR:
        v, p, q = scores(tc, te, tq, m2.lam_of(rms, snr))
        m, _ = m2.guard(v, p, q, tau, kappa, enabled)
        out['C'].append((v > 0) == (yy[:, None] == 1)); out['M'].append((m > 0) == (yy[:, None] == 1))
    res = {}
    for k in out:
        ok = np.stack(out[k], -1)                             # (T, Wn, 9)
        res[k] = (100 * np.mean(~ok), 100 * np.mean((clean_ok[:, None, None] & ~ok)[..., WEAK]))
    return res


# ---- calibration on run 5 with the old donor bank (prereg grid for delta and kappa) ----
q_ref = np.concatenate([m2.q_clean(Hfit), m2.q_clean(Hcal)])
med = float(np.median(q_ref))
Dold = dstack(OLD)
grid = []
for delta in m2.DELTAS:
    for kappa in m2.KAPPAS:
        r = evaluate(Hcal, y[i_cal], Dold, OLD, med + delta, kappa, True)
        grid.append({'delta': delta, 'kappa': kappa, 'errC': r['C'][0], 'errM': r['M'][0], 'harmC': r['C'][1], 'harmM': r['M'][1]})
ok = [g for g in grid if g['harmM'] <= g['harmC'] + 1e-12]
best = min(ok or grid, key=lambda g: (g['errM'], g['kappa'], -g['delta']))
enabled = bool(ok) and best['errM'] < best['errC']
tau, kappa = med + best['delta'], best['kappa']

# ---- demo: run 6 with the new donor bank ----
Dnew = dstack(NEW)
tc, te, tq = terms(Hdemo, Dnew)
yd = y[i_demo]
# reference values for the browser parity test
ref = {'snr': SNR.tolist(), 'v': [], 'p': [], 'q': []}
rms = np.array([BANK[i]['rms20'] for i in NEW])
for snr in SNR:
    v, p, q = scores(tc, te, tq, m2.lam_of(rms, snr))
    ref['v'].append(v.tolist()); ref['p'].append(p.tolist()); ref['q'].append(q.tolist())
ref['clean_v'] = (C.score_clean(Hdemo) / C.sd).tolist()
ref['clean_p'] = (E.score_clean(Hdemo) / E.sd).tolist()
ref['clean_q'] = m2.q_clean(Hdemo).tolist()
summary = evaluate(Hdemo, yd, Dnew, NEW, tau, kappa, enabled)
ref['summary'] = summary

Td, Wn = len(yd), len(NEW)
demo = {
    'meta': {
        'subject': args.subject, 'session': 'T', 'fit_runs': [1, 2, 3, 4], 'cal_run': 5, 'demo_run': 6,
        'n_fit': int(len(i_fit)), 'n_cal': int(len(i_cal)), 'n_demo': int(Td),
        'cal_donors': OLD, 'demo_donors': NEW, 'wave_channel': args.wave_ch,
        'labels': '0 = left hand, 1 = right hand (BCI IV 2a classes 1 and 2)',
        'mat_sha256': sha(args.mat), 'bank_sha256': sha(args.bank),
        'code_sha256': sha(os.path.join(args.code, 'miora2.py')),
        'made_by': 'export_real_demo.py (AI assistant Claude, 29.10.2026)',
    },
    'snr_levels': SNR.tolist(), 'ref_rms': 4.4, 'fs': 250,
    'model': {
        'C': {'coef': C.lda.coef_.ravel().tolist(), 'intercept': float(C.lda.intercept_[0]), 'sd': C.sd},
        'E': {'coef': E.lda.coef_.ravel().tolist(), 'intercept': float(E.lda.intercept_[0]), 'sd': E.sd},
        'tau': tau, 'kappa': kappa, 'delta': best['delta'], 'median_q': med, 'enabled': enabled, 'calibration': grid,
    },
    'trials': [{'y': int(yd[t]),
                'A_C': b64f32(tc[0][t]), 'A_E': b64f32(np.concatenate([te[k][0][t].ravel() for k in (0, 1)])),
                'A_qh': b64f32(tq[0][0][t]), 'A_qd': b64f32(tq[1][0][t]),
                'wave_dec': b64wave(Hdemo['decoder'][t, WCH]), 'wave_high': b64wave(Hdemo['high'][t, WCH])}
               for t in range(Td)],
    'donors': [{'id': NEW[j], 'rms20': BANK[NEW[j]]['rms20'],
                'C_C': b64f32(tc[2][j]), 'C_E': b64f32(np.concatenate([te[k][2][j].ravel() for k in (0, 1)])),
                'C_qh': b64f32(tq[0][2][j]), 'C_qd': b64f32(tq[1][2][j]),
                'wave_dec': b64wave(Dnew['decoder'][j, WCH]), 'wave_high': b64wave(Dnew['high'][j, WCH])}
               for j in range(Wn)],
    # cross terms, flattened [trial][donor][feature]
    'B_C': b64f32(tc[1]), 'B_E': b64f32(np.concatenate([te[k][1].reshape(Td, Wn, -1) for k in (0, 1)], -1)),
    'B_qh': b64f32(tq[0][1]), 'B_qd': b64f32(tq[1][1]),
    'dims': {'T': Td, 'D': Wn, 'fC': 8, 'fE': 64, 'ch': 19},
    'summary_python': summary,
}
np_default = lambda o: o.item() if hasattr(o, 'item') else o.tolist()
json.dump(demo, open(args.out, 'w'), default=np_default)
json.dump(ref, open(args.ref, 'w'), default=np_default)
print('enabled', enabled, 'tau', round(tau, 4), 'kappa', kappa, 'delta', round(best['delta'], 4))
print('demo summary (24 trials x', Wn, 'donor windows x 9 SNR):', {k: [round(x, 2) for x in v] for k, v in summary.items()})
print('sizes:', os.path.getsize(args.out), os.path.getsize(args.ref))
