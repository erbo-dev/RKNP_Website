"use client";

import React, { useState } from "react";
import StepPlayer from "@/components/StepPlayer";
import ImageCompare from "@/components/ImageCompare";
import { AlertTriangle, Activity, ShieldAlert, Cpu } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ProblemSection() {
  const { lang, t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const stepDescriptions = lang === "kk" ? [
    {
      title: "1-Қадам: Таза моторлық ниет (Clean Cortical Intent)",
      detail: "Пайдаланушы қол қозғалысын елестетеді. Моторлық қыртыста (C3, Cz, C4) тән сенсорлық-моторлық ырғақтар (Mu/Beta) қалыптасады.",
      status: "SIGNAL: NOMINAL // SNR: +18 dB",
      color: "text-cyan-400",
    },
    {
      title: "2-Қадам: Шайнау артефактісінің пайда болуы (EMG Contamination)",
      detail: "Шайнау немесе жақ бұлшықеттерінің қозғалысы жоғары жиілікті (>30 Гц) қуатты электрлік импульстер тудырып, ЭЭГ сигналын басады.",
      status: "EMG NOISE DETECTED // SNR: -14 dB",
      color: "text-rose-400",
    },
    {
      title: "3-Қадам: 4-Шлюзді қорғаныс каскады (4-Gate Verification)",
      detail: "MIORA автоматты түрде пайдаланушының пайдасын, шу шегін, декодерлердің қайшылығын және классификациялық маржаны тексереді.",
      status: "GATE CHECK: 4/4 CONDITIONS ARMED",
      color: "text-amber-400",
    },
    {
      title: "4-Қадам: Дұрыс шешімнің сақталуы (Signal Integrity Preserved)",
      detail: "Егер қосымша сарапшының шешімі толық негізделмесе, бастапқы шешім өзгеріссіз сақталады. Жалған түзетулердің (Weak HARM) алдын алады.",
      status: "VERIFIED // ERROR RATE REDUCED BY 6.1%",
      color: "text-emerald-400",
    },
  ] : [
    {
      title: "Step 1: Clean Cortical Intent",
      detail: "The user imagines motor movement. Sensorimotor rhythms (Mu/Beta bands, 8–24 Hz) originate across the primary motor cortex (C3, Cz, C4).",
      status: "SIGNAL: NOMINAL // SNR: +18 dB",
      color: "text-cyan-400",
    },
    {
      title: "Step 2: Jaw EMG Contamination",
      detail: "Chewing or clenching generates intense high-frequency (>30 Hz) muscle potentials that drown out faint cortical microvolt potentials.",
      status: "EMG NOISE DETECTED // SNR: -14 dB",
      color: "text-rose-400",
    },
    {
      title: "Step 3: 4-Gate Algorithmic Verification",
      detail: "MIORA evaluates individual benefit, noise threshold, decoder disagreement, and expert confidence margin simultaneously.",
      status: "GATE CHECK: 4/4 CONDITIONS ARMED",
      color: "text-amber-400",
    },
    {
      title: "Step 4: Preserving Human Intent",
      detail: "Unless the expert is verifiably superior on all 4 criteria, the baseline is preserved to avoid dangerous erroneous overrides.",
      status: "VERIFIED // ERROR RATE REDUCED BY 6.1%",
      color: "text-emerald-400",
    },
  ];

  return (
    <section id="challenge" aria-labelledby="challenge-heading" className="py-28 px-6 md:px-12 bg-[#050608] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Category kicker */}
        <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-4 flex items-center gap-2">
          <AlertTriangle size={14} className="animate-pulse" />
          <span>{t.problem.kicker}</span>
        </div>

        {/* Section Heading */}
        <h2 id="challenge-heading" className="text-3xl sm:text-5xl md:text-6xl font-light text-white max-w-4xl tracking-tight leading-[1.08] mb-8">
          {t.problem.headline} {t.problem.headlineEmphasis}.
        </h2>

        <p className="text-base sm:text-lg text-neutral-400 max-w-3xl leading-relaxed font-light mb-16">
          {t.problem.description}
        </p>

        {/* Precision Swiss Structural Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] mb-20">
          {/* Metric 1 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest mb-4 flex items-center justify-between">
                <span>01 // DECODER VULNERABILITY</span>
                <span className="text-rose-400">UNSHIELDED</span>
              </div>
              <div className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-3">
                {t.problem.metric1Value}
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                {t.problem.metric1Title}
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                {t.problem.metric1Detail}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-neutral-500">
              BASELINE: HIGH FALSE-POSITIVE RISK
            </div>
          </div>

          {/* Metric 2 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest mb-4 flex items-center justify-between">
                <span>02 // SPECTRAL CONTAMINATION</span>
                <span className="text-amber-400">{t.problem.metric2Unit}</span>
              </div>
              <div className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-3 flex items-baseline gap-2">
                <span>{t.problem.metric2Value.replace(" dB", "")}</span>
                <span className="text-xl font-mono text-rose-400">dB</span>
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                {t.problem.metric2Title}
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                {t.problem.metric2Detail}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-neutral-500">
              OVERLAP: MASSETER / TEMPORALIS MUSCLE
            </div>
          </div>

          {/* Metric 3 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest mb-4 flex items-center justify-between">
                <span>03 // 4-GATE VERIFICATION</span>
                <span className="text-emerald-400">PROTECTED</span>
              </div>
              <div className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-3 flex items-baseline gap-2">
                <span>{t.problem.metric3Value}</span>
                <span className="text-xs font-mono text-emerald-400">{t.problem.metric3Unit}</span>
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                {t.problem.metric3Title}
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                {t.problem.metric3Detail}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-neutral-500">
              PRINCIPLE: "FIRST, DO NO HARM"
            </div>
          </div>
        </div>

        {/* Interactive Dual Bench: StepPlayer + ImageCompare */}
        <div className="relative rounded-2xl border border-white/[0.08] bg-[#07090d]/80 backdrop-blur-xl p-8 sm:p-12 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* Subtle Corner Reticles */}
          <div className="absolute top-3 left-4 font-mono text-[10px] text-white/20 select-none" aria-hidden="true">+</div>
          <div className="absolute top-3 right-4 font-mono text-[10px] text-white/20 select-none" aria-hidden="true">+</div>
          <div className="absolute bottom-3 left-4 font-mono text-[10px] text-white/20 select-none" aria-hidden="true">+</div>
          <div className="absolute bottom-3 right-4 font-mono text-[10px] text-white/20 select-none" aria-hidden="true">+</div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left: Interactive StepPlayer walkthrough (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Activity size={14} />
                <span>{t.problem.stepTitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-normal text-white">
                {stepDescriptions[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                {stepDescriptions[activeStep].detail}
              </p>

              <div className="p-3.5 rounded-lg border border-white/10 bg-[#050608] font-mono text-xs flex items-center justify-between">
                <span className="text-neutral-500">STATUS:</span>
                <span className={`font-semibold ${stepDescriptions[activeStep].color}`}>
                  {stepDescriptions[activeStep].status}
                </span>
              </div>

              {/* StepPlayer Component synced with activeStep */}
              <div className="pt-4 flex flex-col items-start gap-3">
                <div className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
                  {lang === "kk" ? "Қадамдарды бақылау (Play / Pause немесе нүктелерді шертіңіз):" : "Step controls (Press Play / Pause or click dots to inspect):"}
                </div>
                <StepPlayer
                  steps={4}
                  activeStep={activeStep}
                  onChange={setActiveStep}
                  pace={3.5}
                  wake={80}
                />
              </div>
            </div>

            {/* Right: ImageCompare wipe slider (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-3 text-center">
                {lang === "kk" ? "Слайдерді сүйреп салыстырыңыз (Image Compare)" : "Drag slider to compare raw vs protected EEG"}
              </div>

              <div className="shadow-2xl rounded-2xl overflow-hidden border border-white/15 max-w-full">
                <ImageCompare
                  before="/images/eeg_contaminated.jpg"
                  after="/images/eeg_miora_protected.jpg"
                  beforeLabel={lang === "kk" ? "ШАЙНАУ ШУЫ" : "RAW EMG NOISE"}
                  afterLabel={lang === "kk" ? "MIORA ҚОРҒАҒАН" : "MIORA PROTECTED"}
                  width={320}
                  height={380}
                  corner={16}
                />
              </div>

              <div className="text-[11px] font-mono text-neutral-500 mt-3 text-center">
                {lang === "kk"
                  ? "Сол жақта: шайнаудан ластанған ЭЭГ · Оң жақта: MIORA қорғаған шешім"
                  : "Left: contaminated EEG · Right: MIORA protected decision"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
