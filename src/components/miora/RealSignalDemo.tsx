"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Activity, CheckCircle2, XCircle, Shuffle, Cpu, Database } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  prepare,
  evaluate,
  summarize,
  decodeWave,
  RealDemo,
  RealDemoData,
  RealResult,
  RealSummary,
} from "@/lib/miora/realEngine";

type Kind = "fixed" | "protected" | "broke" | "random";

const fmt = (x: number, d = 2) => (x >= 0 ? "+" : "−") + Math.abs(x).toFixed(d);
const pct = (x: number) => x.toFixed(1) + "%";

function Trace({ data, color, height = 70, label }: { data: Float32Array[]; color: string[]; height?: number; label: string }) {
  const W = 640;
  const all = data.flatMap((d) => Array.from(d));
  const m = Math.max(1e-9, ...all.map((v) => Math.abs(v)));
  return (
    <div>
      <div className="text-[10px] font-mono text-neutral-500 mb-1">{label}</div>
      <svg viewBox={`0 0 ${W} ${height}`} className="w-full h-auto" preserveAspectRatio="none" role="img" aria-label={label}>
        <line x1={0} x2={W} y1={height / 2} y2={height / 2} stroke="#ffffff14" />
        {data.map((d, k) => {
          const step = d.length / W;
          let path = "";
          for (let x = 0; x < W; x++) {
            const v = d[Math.floor(x * step)];
            path += `${x === 0 ? "M" : "L"}${x} ${(height / 2 - (v / m) * (height / 2 - 3)).toFixed(1)}`;
          }
          return <path key={k} d={path} fill="none" stroke={color[k]} strokeWidth={1.1} opacity={k === 0 && data.length > 1 ? 0.55 : 1} />;
        })}
      </svg>
    </div>
  );
}

function Score({ name, value, sub }: { name: string; value: number; sub: string }) {
  const w = Math.min(100, (Math.abs(value) / 3) * 50);
  return (
    <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02]">
      <div className="flex justify-between text-[11px] font-mono text-neutral-400">
        <span>{name}</span>
        <span className="text-white">{fmt(value)}</span>
      </div>
      <div className="relative h-2 mt-2 rounded bg-white/5">
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/30" />
        <div
          className={`absolute top-0 bottom-0 rounded ${value > 0 ? "bg-cyan-400" : "bg-fuchsia-400"}`}
          style={value > 0 ? { left: "50%", width: `${w}%` } : { right: "50%", width: `${w}%` }}
        />
      </div>
      <div className="text-[11px] text-neutral-400 mt-1.5">{sub}</div>
    </div>
  );
}

export default function RealSignalDemo() {
  const { lang } = useLanguage();
  const kk = lang === "kk";
  const [demo, setDemo] = useState<RealDemo | null>(null);
  const [failed, setFailed] = useState(false);
  const [trial, setTrial] = useState(0);
  const [donor, setDonor] = useState(0);
  const [snrIdx, setSnrIdx] = useState(1); // index into [clean, ...snr_levels]
  const [summary, setSummary] = useState<RealSummary | null>(null);

  useEffect(() => {
    fetch("/miora/real_demo.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((raw: RealDemoData) => {
        const d = prepare(raw);
        setDemo(d);
        setSummary(summarize(d));
      })
      .catch(() => setFailed(true));
  }, []);

  const levels = useMemo(() => (demo ? [null, ...demo.raw.snr_levels] : [null]), [demo]);
  const snr = levels[Math.min(snrIdx, levels.length - 1)] as number | null;
  const res: RealResult | null = useMemo(() => (demo ? evaluate(demo, trial, donor, snr) : null), [demo, trial, donor, snr]);

  const waves = useMemo(() => {
    if (!demo || !res) return null;
    const t = demo.raw.trials[trial], d = demo.raw.donors[donor];
    const hd = decodeWave(t.wave_dec), dd = decodeWave(d.wave_dec), hh = decodeWave(t.wave_high), dh = decodeWave(d.wave_high);
    const mixD = hd.map((v, i) => v + res.lam * dd[i]);
    const mixH = hh.map((v, i) => v + res.lam * dh[i]);
    return { hd, mixD, hh, mixH };
  }, [demo, res, trial, donor]);

  const pick = (kind: Kind) => {
    if (!demo) return;
    const { T, D } = demo.raw.dims;
    const cands: [number, number, number][] = [];
    demo.raw.snr_levels.forEach((s, si) => {
      for (let t = 0; t < T; t++) for (let j = 0; j < D; j++) {
        if (kind === "random") { cands.push([t, j, si + 1]); continue; }
        const r = evaluate(demo, t, j, s);
        const okC = r.v > 0 === (r.truth === 1), okM = r.final > 0 === (r.truth === 1), okP = r.p > 0 === (r.truth === 1);
        if (kind === "fixed" && r.switched && okM && !okC) cands.push([t, j, si + 1]);
        if (kind === "protected" && !r.switched && okC && !okP) cands.push([t, j, si + 1]);
        if (kind === "broke" && r.switched && !okM && okC) cands.push([t, j, si + 1]);
      }
    });
    if (!cands.length) return;
    const [t, j, si] = cands[Math.floor(Math.random() * cands.length)];
    setTrial(t); setDonor(j); setSnrIdx(si);
  };

  const side = (x: number) => (x > 0 ? (kk ? "ОҢ қол" : "RIGHT hand") : (kk ? "СОЛ қол" : "LEFT hand"));
  const truthTxt = (y: number) => (y === 1 ? (kk ? "ОҢ қол" : "RIGHT hand") : (kk ? "СОЛ қол" : "LEFT hand"));

  return (
    <section id="real-demo" aria-labelledby="real-demo-heading" className="py-24 px-4 sm:px-6 md:px-12 bg-[#050608] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-3 flex items-center gap-2">
              <Activity size={14} className="animate-pulse" />
              <span>{kk ? "Нақты сигналдар" : "Real signals"}</span>
            </div>
            <h2 id="real-demo-heading" className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.08] mb-3">
              {kk ? "MIORA нақты ЭЭГ-де, сіздің браузеріңізде." : "MIORA on real EEG, in your browser."}
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              {kk
                ? "Адамның нақты ми сигналы (BCI Competition IV 2a) және басқа адамның нақты шайнау жазбасы (OpenNeuro ds006386). Сынаманы, шайнау жазбасын және оның күшін таңдаңыз: екі классификатор, шайнау датчигі q және 4 тексеріс осы жерде, браузерде есептеледі."
                : "A real brain recording (BCI Competition IV 2a) and a real chewing recording of another person (OpenNeuro ds006386). Pick a trial, a chewing window and its strength: both classifiers, the chewing sensor q and the 4 checks are computed right here in the browser."}
            </p>
          </div>
          <div className="px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-[11px] font-mono text-emerald-300 flex items-center gap-2 shrink-0">
            <Cpu size={12} />
            <span>{kk ? "НАҚТЫ ДЕРЕКТЕР · БРАУЗЕРДЕ ЕСЕПТЕЛЕДІ" : "REAL DATA · COMPUTED IN BROWSER"}</span>
          </div>
        </div>

        {failed && (
          <div className="p-6 rounded-2xl border border-amber-500/30 bg-amber-950/20 text-amber-200 text-sm">
            {kk ? "Деректер файлы (/miora/real_demo.json) жүктелмеді." : "The data file (/miora/real_demo.json) could not be loaded."}
          </div>
        )}
        {!demo && !failed && (
          <div className="p-6 text-sm font-mono text-cyan-400">{kk ? "Нақты сигналдар жүктелуде..." : "Loading real signals..."}</div>
        )}

        {demo && res && waves && (
          <div className="rounded-3xl border border-white/10 bg-[#07090e] overflow-hidden">
            {/* controls */}
            <div className="p-4 sm:p-6 border-b border-white/10 grid gap-4 md:grid-cols-3">
              <label className="text-xs text-neutral-400 font-mono">
                {kk ? "Ми сигналы: сынама" : "Brain signal: trial"} ({demo.raw.dims.T})
                <select className="mt-1.5 w-full bg-black/40 border border-white/15 rounded-lg p-2 text-white" value={trial} onChange={(e) => setTrial(+e.target.value)}>
                  {demo.raw.trials.map((t, i) => (
                    <option key={i} value={i}>
                      #{i + 1} · {kk ? "адам ойлады:" : "intended:"} {truthTxt(t.y)}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-xs text-neutral-400 font-mono">
                {kk ? "Шайнау жазбасы (басқа адам)" : "Chewing window (another person)"} ({demo.raw.dims.D})
                <select className="mt-1.5 w-full bg-black/40 border border-white/15 rounded-lg p-2 text-white" value={donor} onChange={(e) => setDonor(+e.target.value)}>
                  {demo.raw.donors.map((d, i) => (
                    <option key={i} value={i}>{d.id.replace(/_/g, " ")}</option>
                  ))}
                </select>
              </label>
              <label className="text-xs text-neutral-400 font-mono">
                {kk ? "Шайнау күші" : "Chewing strength"}:{" "}
                <span className="text-white">{snr === null ? (kk ? "шайнау жоқ" : "no chewing") : `SNR ${snr} dB`}</span>
                <input type="range" min={0} max={levels.length - 1} value={snrIdx} onChange={(e) => setSnrIdx(+e.target.value)}
                  className="mt-3 w-full accent-cyan-400" aria-label="SNR" />
                <div className="flex justify-between text-[10px] text-neutral-500"><span>{kk ? "таза" : "clean"}</span><span>{kk ? "өте күшті" : "very strong"}</span></div>
              </label>
            </div>
            <div className="px-4 sm:px-6 py-3 border-b border-white/10 flex flex-wrap gap-2">
              {([
                ["fixed", kk ? "MIORA қатені түзеткен мысал" : "MIORA fixed an error"],
                ["protected", kk ? "MIORA дұрыс команданы сақтаған мысал" : "MIORA kept a correct command"],
                ["broke", kk ? "MIORA қателескен мысал" : "MIORA made it worse"],
                ["random", kk ? "Кездейсоқ мысал" : "Random example"],
              ] as [Kind, string][]).map(([k, l]) => (
                <button key={k} type="button" onClick={() => pick(k)}
                  className="text-[11px] font-mono px-3 py-1.5 rounded-lg border border-white/15 text-neutral-300 hover:border-cyan-400/60 hover:text-white flex items-center gap-1.5">
                  {k === "random" && <Shuffle size={12} />}{l}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {/* signals */}
              <div className="lg:col-span-7 p-4 sm:p-6 space-y-4">
                <Trace data={[waves.hd, waves.mixD]} color={["#7dd3fc", "#ffffff"]}
                  label={`${demo.raw.meta.wave_channel} · 8-32 Hz · ${kk ? "көк: таза, ақ: шайнау қосылған (классификатор көретін сигнал)" : "blue: clean, white: with chewing (what the classifiers see)"}`} />
                <Trace data={[waves.hh, waves.mixH]} color={["#7dd3fc", "#f0abfc"]}
                  label={`${demo.raw.meta.wave_channel} · 40-80 Hz · ${kk ? "бұлшықет аймағы: шайнаса өседі" : "muscle band: grows with chewing"}`} />
                <div className="grid sm:grid-cols-3 gap-3">
                  <Score name={kk ? "v · негізгі (CSP+LDA)" : "v · main (CSP+LDA)"} value={res.v} sub={side(res.v)} />
                  <Score name={kk ? "p · екінші (8 бөлік)" : "p · second (8 blocks)"} value={res.p} sub={side(res.p)} />
                  <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02]">
                    <div className="flex justify-between text-[11px] font-mono text-neutral-400">
                      <span>{kk ? "q · шайнау датчигі" : "q · chewing sensor"}</span><span className="text-white">{fmt(res.q)}</span>
                    </div>
                    <div className="text-[11px] text-neutral-400 mt-3">
                      {kk ? "шек τ" : "threshold τ"} = {fmt(demo.raw.model.tau)} · {res.checks.noise ? (kk ? "шайнау бар" : "chewing detected") : (kk ? "шайнау жоқ" : "no chewing")}
                    </div>
                  </div>
                </div>
              </div>

              {/* decision */}
              <div className="lg:col-span-5 p-4 sm:p-6 space-y-4">
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">{kk ? "4 тексеріс" : "4 checks"}</div>
                <ul className="space-y-2 text-sm">
                  {([
                    [res.checks.enabled, kk ? "1. Бұл адамда калибровкада пайдалы болды" : "1. Helped this person on calibration"],
                    [res.checks.noise, (kk ? "2. Шайнау бар: q > τ" : "2. Chewing: q > τ") + ` (${fmt(res.q)} vs ${fmt(demo.raw.model.tau)})`],
                    [res.checks.disagree, kk ? "3. Екі классификатор әртүрлі жауап берді" : "3. The classifiers disagree"],
                    [res.checks.confident, (kk ? "4. Екіншісі κ есе сенімді" : "4. Second is κ times surer") + ` (|p| ${Math.abs(res.p).toFixed(2)} ≥ ${demo.raw.model.kappa}·${Math.abs(res.v).toFixed(2)})`],
                  ] as [boolean, string][]).map(([ok, txt], i) => (
                    <li key={i} className="flex items-start gap-2">
                      {ok ? <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" /> : <XCircle size={16} className="text-neutral-500 mt-0.5 shrink-0" />}
                      <span className={ok ? "text-white" : "text-neutral-400"}>{txt}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 rounded-2xl border border-white/10 bg-black/30">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">{kk ? "Қорытынды команда" : "Final command"}</div>
                  <div className="text-2xl text-white">{side(res.final)}</div>
                  <div className="text-xs text-neutral-400 mt-1">
                    {res.switched ? (kk ? "Төрт шарт орындалды: екіншінің жауабы алынды." : "All four checks passed: the second answer was taken.") : (kk ? "Кемінде бір шарт орындалмады: негізгінің жауабы қалды." : "At least one check failed: the main answer was kept.")}
                  </div>
                  <div className="mt-3 text-sm flex items-center gap-2">
                    {res.final > 0 === (res.truth === 1) ? <CheckCircle2 size={16} className="text-emerald-400" /> : <XCircle size={16} className="text-rose-400" />}
                    <span className="text-neutral-300">{kk ? "Адам шын мәнінде ойлады:" : "The person actually intended:"} <b className="text-white">{truthTxt(res.truth)}</b></span>
                  </div>
                  <div className="mt-1 text-xs text-neutral-500">
                    {kk ? "MIORA-сыз (тек негізгі):" : "Without MIORA (main only):"} {side(res.v)} {res.v > 0 === (res.truth === 1) ? "✓" : "✗"}
                  </div>
                </div>
              </div>
            </div>

            {/* summary */}
            {summary && (
              <div className="p-4 sm:p-6 border-t border-white/10">
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Database size={12} />
                  {kk ? `Барлық комбинация: ${demo.raw.dims.T} сынама × ${demo.raw.dims.D} шайнау терезесі × 9 деңгей = ${summary.n}` : `All combinations: ${demo.raw.dims.T} trials × ${demo.raw.dims.D} chewing windows × 9 levels = ${summary.n}`}
                </div>
                <div className="grid sm:grid-cols-3 gap-3 text-sm">
                  {([
                    [kk ? "Тек негізгі классификатор" : "Main classifier only", summary.errC, summary.harmC],
                    ["MIORA", summary.errM, summary.harmM],
                    [kk ? "Екіншіге әрқашан сену" : "Always trust the second", summary.errExpert, summary.harmExpert],
                  ] as [string, number, number][]).map(([n, e, h]) => (
                    <div key={n} className="p-3 rounded-xl border border-white/10 bg-white/[0.02]">
                      <div className="text-neutral-300">{n}</div>
                      <div className="font-mono text-white mt-1">{kk ? "қате" : "error"} {pct(e)} · {kk ? "зиян" : "harm"} {pct(h)}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-neutral-500 mt-3 leading-relaxed">
                  {kk
                    ? `Бұл бір адамның (BCI IV 2a, ${demo.raw.meta.subject}-адам, T сессиясы) шағын мысалы, жобаның негізгі нәтижесі емес: негізгі нәтиже 9 адам мен 162 профиль бойынша есептелген (38,55% → 32,40%). Модельдер жобаның кодымен (miora2.py) осы адамның 1-4 прогондарында (${demo.raw.meta.n_fit} сынама) үйретілді; τ, κ және 1-шарт 5-прогонда басқа донорлармен (P01-P06) таңдалды; мұндағы 6-прогон мен шайнау жазбалары үйретуге қатыспаған. Зиян = әлсіз шайнауда (6-30 дБ) таза сигналда дұрыс команданың бұзылуы.`
                    : `A small example for one person (BCI IV 2a, subject ${demo.raw.meta.subject}, session T), not the project's main result, which covers 9 people and 162 profiles (38.55% → 32.40%). Models were trained with the project code (miora2.py) on runs 1-4 of this person (${demo.raw.meta.n_fit} trials); τ, κ and check 1 were chosen on run 5 with other donors (P01-P06); run 6 and the chewing windows shown here were not used for training. Harm = a command that was correct on the clean signal is broken under weak chewing (6-30 dB).`}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
