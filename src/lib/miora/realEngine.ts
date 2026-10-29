/**
 * MIORA on real signals, computed in the browser.
 *
 * Data: public/miora/real_demo.json, made by scripts/export_real_demo.py from the project code
 * (MIORA2_RUN/code/miora2.py): main classifier C = CSP + LDA, second classifier = Expert
 * (2 bands x 4 CSP x 8 time blocks = 64 features + LDA), chewing sensor q, and the 4-check guard.
 *
 * For a mixture x = h + lam * d the power of any filter output is A + 2*lam*B + lam^2*C
 * (A from the brain trial, C from the chewing window, B their cross term). This is the same
 * closed form as miora2.proj_power, so the browser reproduces the Python numbers for any SNR.
 */

export interface Wave {
  scale: number;
  data: string; // base64 int16
}

export interface RealTrial {
  y: number; // 0 = left hand, 1 = right hand
  A_C: string;
  A_E: string;
  A_qh: string;
  A_qd: string;
  wave_dec: Wave;
  wave_high: Wave;
}

export interface RealDonor {
  id: string;
  rms20: number;
  C_C: string;
  C_E: string;
  C_qh: string;
  C_qd: string;
  wave_dec: Wave;
  wave_high: Wave;
}

export interface CalibRow {
  delta: number;
  kappa: number;
  errC: number;
  errM: number;
  harmC: number;
  harmM: number;
}

export interface RealDemoData {
  meta: Record<string, unknown> & {
    subject: number;
    n_fit: number;
    n_cal: number;
    n_demo: number;
    wave_channel: string;
    cal_donors: string[];
    demo_donors: string[];
  };
  snr_levels: number[];
  ref_rms: number;
  fs: number;
  model: {
    C: { coef: number[]; intercept: number; sd: number };
    E: { coef: number[]; intercept: number; sd: number };
    tau: number;
    kappa: number;
    delta: number;
    median_q: number;
    enabled: boolean;
    calibration: CalibRow[];
  };
  trials: RealTrial[];
  donors: RealDonor[];
  B_C: string;
  B_E: string;
  B_qh: string;
  B_qd: string;
  dims: { T: number; D: number; fC: number; fE: number; ch: number };
}

function b64bytes(s: string): Uint8Array {
  if (typeof atob === "function") {
    const bin = atob(s);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  // Node (tests)
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return new Uint8Array((globalThis as any).Buffer.from(s, "base64"));
}

function f32(s: string): Float32Array {
  const b = b64bytes(s);
  return new Float32Array(b.buffer, b.byteOffset, b.byteLength / 4);
}

export function decodeWave(w: Wave): Float32Array {
  const b = b64bytes(w.data);
  const i16 = new Int16Array(b.buffer, b.byteOffset, b.byteLength / 2);
  const out = new Float32Array(i16.length);
  for (let i = 0; i < i16.length; i++) out[i] = i16[i] * w.scale;
  return out;
}

/** Decoded arrays, ready for fast evaluation. */
export interface RealDemo {
  raw: RealDemoData;
  A_C: Float32Array[];
  A_E: Float32Array[];
  A_qh: Float32Array[];
  A_qd: Float32Array[];
  C_C: Float32Array[];
  C_E: Float32Array[];
  C_qh: Float32Array[];
  C_qd: Float32Array[];
  B_C: Float32Array;
  B_E: Float32Array;
  B_qh: Float32Array;
  B_qd: Float32Array;
}

export function prepare(raw: RealDemoData): RealDemo {
  return {
    raw,
    A_C: raw.trials.map((t) => f32(t.A_C)),
    A_E: raw.trials.map((t) => f32(t.A_E)),
    A_qh: raw.trials.map((t) => f32(t.A_qh)),
    A_qd: raw.trials.map((t) => f32(t.A_qd)),
    C_C: raw.donors.map((d) => f32(d.C_C)),
    C_E: raw.donors.map((d) => f32(d.C_E)),
    C_qh: raw.donors.map((d) => f32(d.C_qh)),
    C_qd: raw.donors.map((d) => f32(d.C_qd)),
    B_C: f32(raw.B_C),
    B_E: f32(raw.B_E),
    B_qh: f32(raw.B_qh),
    B_qd: f32(raw.B_qd),
  };
}

/** lam_of in miora2.py: lam = 4.4 / (rms20 * 10^(SNR/20)). */
export function lamOf(demo: RealDemo, donor: number, snr: number): number {
  return demo.raw.ref_rms / (demo.raw.donors[donor].rms20 * Math.pow(10, snr / 20));
}

function lda(
  A: Float32Array,
  B: Float32Array,
  bOff: number,
  C: Float32Array,
  lam: number,
  w: { coef: number[]; intercept: number; sd: number }
): number {
  let s = w.intercept;
  for (let f = 0; f < w.coef.length; f++) {
    const p = A[f] + (lam ? 2 * lam * B[bOff + f] + lam * lam * C[f] : 0);
    s += w.coef[f] * Math.log(p);
  }
  return s / w.sd;
}

export interface RealResult {
  lam: number;
  v: number; // main classifier: sign = command (+ right, - left), size = confidence
  p: number; // second classifier
  q: number; // chewing sensor
  checks: { enabled: boolean; noise: boolean; disagree: boolean; confident: boolean };
  switched: boolean;
  final: number; // the score that becomes the command
  truth: number; // 0 left, 1 right
}

/** One trial t mixed with donor window j at the given SNR (snr = null: clean signal). */
export function evaluate(demo: RealDemo, t: number, j: number, snr: number | null): RealResult {
  const { model, dims } = demo.raw;
  const lam = snr === null ? 0 : lamOf(demo, j, snr);
  const pair = t * dims.D + j;
  const v = lda(demo.A_C[t], demo.B_C, pair * dims.fC, demo.C_C[j], lam, model.C);
  const p = lda(demo.A_E[t], demo.B_E, pair * dims.fE, demo.C_E[j], lam, model.E);
  let q = 0;
  for (let c = 0; c < dims.ch; c++) {
    const bo = pair * dims.ch + c;
    const ph = demo.A_qh[t][c] + (lam ? 2 * lam * demo.B_qh[bo] + lam * lam * demo.C_qh[j][c] : 0);
    const pd = demo.A_qd[t][c] + (lam ? 2 * lam * demo.B_qd[bo] + lam * lam * demo.C_qd[j][c] : 0);
    q += Math.log(ph / pd);
  }
  q /= dims.ch;
  const checks = {
    enabled: model.enabled,
    noise: q > model.tau,
    disagree: v > 0 !== p > 0,
    confident: Math.abs(p) >= model.kappa * Math.abs(v),
  };
  const switched = checks.enabled && checks.noise && checks.disagree && checks.confident;
  return { lam, v, p, q, checks, switched, final: switched ? p : v, truth: demo.raw.trials[t].y };
}

export interface RealSummary {
  n: number;
  errC: number;
  errM: number;
  errExpert: number;
  harmC: number;
  harmM: number;
  harmExpert: number;
  switches: number;
}

/** Error and weak-noise harm over all trials x donor windows x SNR levels (same definitions as demo_check.py). */
export function summarize(demo: RealDemo): RealSummary {
  const { dims, snr_levels } = demo.raw;
  let n = 0, eC = 0, eM = 0, eX = 0, nW = 0, hC = 0, hM = 0, hX = 0, sw = 0;
  for (let t = 0; t < dims.T; t++) {
    const clean = evaluate(demo, t, 0, null);
    const cleanOk = clean.v > 0 === (clean.truth === 1);
    for (let j = 0; j < dims.D; j++) {
      for (const snr of snr_levels) {
        const r = evaluate(demo, t, j, snr);
        const okC = r.v > 0 === (r.truth === 1);
        const okM = r.final > 0 === (r.truth === 1);
        const okX = r.p > 0 === (r.truth === 1);
        n++; eC += +!okC; eM += +!okM; eX += +!okX; sw += +r.switched;
        if (snr >= 6) {
          nW++;
          hC += +(cleanOk && !okC); hM += +(cleanOk && !okM); hX += +(cleanOk && !okX);
        }
      }
    }
  }
  return {
    n,
    errC: (100 * eC) / n, errM: (100 * eM) / n, errExpert: (100 * eX) / n,
    harmC: (100 * hC) / nW, harmM: (100 * hM) / nW, harmExpert: (100 * hX) / nW,
    switches: sw,
  };
}
