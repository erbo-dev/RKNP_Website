"use client";

import React from "react";
import { BookOpen, Layers, Database, Terminal, Milestone } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ResearchSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="research" aria-labelledby="research-heading" className="py-28 px-6 md:px-12 bg-[#050608] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-4 flex items-center gap-2">
            <BookOpen size={14} className="animate-pulse" />
            <span>{t.research.kicker}</span>
          </div>
          <h2 id="research-heading" className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08] mb-6">
            {t.research.headline} {t.research.headlineEmphasis}.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            {t.research.description}
          </p>
        </div>

        {/* Continuous 3-Column Swiss Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] mb-16">
          {/* Card 1 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 mb-6">
                <Database size={18} />
              </div>
              <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-2">
                01 // {lang === "kk" ? "Академиялық базалар" : "Academic Cohorts"}
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-white mb-3">
                {lang === "kk" ? "BCI IV-2a және PhysioNet" : "BCI IV-2a & PhysioNet"}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
                {lang === "kk"
                  ? "Зерттеу BCI Competition және PhysioNet халықаралық репозиторийлеріндегі моторлы елестету (Motor Imagery, 9 қатысушы) ЭЭГ деректерін пайдаланады."
                  : "Validation utilizes standard motor imagery benchmarks (BCI Competition IV-2a, 9 participants) across 4-channel motor cortex recordings."}
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-neutral-500">
              MOTOR CORTEX • 250 HZ ACQUISITION
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 mb-6">
                <Layers size={18} />
              </div>
              <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-2">
                02 // {lang === "kk" ? "Шуды модельдеу" : "Noise Modeling"}
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-white mb-3">
                {lang === "kk" ? "ЭМГ физиологиялық шуы" : "Physiological EMG Noise"}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
                {lang === "kk"
                  ? "Нақты шайнау бұлшықеттерінен (m. masseter, m. temporalis) жазылған электромиограммалар таза ЭЭГ-ге сигнал-шу қатынасын (SNR) басқара отырып қосылды."
                  : "Realistic temporalis and masseter EMG recordings superimposed onto clean EEG trials at varying signal-to-noise ratios (SNR from +18 to -24 dB)."}
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-neutral-500">
              40–100 HZ SPECTRAL CONTAMINATION
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 mb-6">
                <Terminal size={18} />
              </div>
              <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-2">
                03 // {lang === "kk" ? "Қос декодерлік сарапшы" : "Dual-Decoder Verification"}
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-white mb-3">
                {lang === "kk" ? "Шешім маржасының каскады" : "Decision Margin Cascade"}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
                {lang === "kk"
                  ? "Базалық кеңістіктік классификатор (CSP + LDA) және шуға төзімді сарапшылық модель қатар бағаланып, классификациялық маржа тексеріледі."
                  : "A standard spatial CSP + LDA baseline evaluates alongside an auxiliary expert model, requiring a verifiable margin delta (Δ ≥ 15 p.p.) before overriding."}
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-neutral-500">
              DECISION MARGIN CASCADE PIPELINE
            </div>
          </div>
        </div>

        {/* MIORA-2 Future Roadmap — Minimalist Surgical Console */}
        <div className="p-8 sm:p-12 border border-white/[0.08] bg-[#07090d]/80 backdrop-blur-xl rounded-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 font-mono text-[10px] text-cyan-400 uppercase mb-4 tracking-wider">
                <Milestone size={12} />
                <span>{lang === "kk" ? "Болашақ бағыт // Engineering Roadmap" : "Future Trajectory // Engineering Roadmap"}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-white mb-3 tracking-tight">
                MIORA-2: Real-Time BCI Streaming Pipeline
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
                {lang === "kk"
                  ? "Келесі кезеңде біз алгоритмдік конвейерді ультра-төмен кідірісті (< 20 мс) нақты уақыттағы ағындық микроконтроллерлерге енгізіп, биондық протездер мен көмекші интерфейстерге бейімдейміз."
                  : "The next phase targets porting the validated cascade to low-power embedded microcontrollers (< 20 ms end-to-end loop) for real-time robotic neuro-prosthetics."}
              </p>
            </div>

            <div className="flex flex-col gap-3.5 font-mono text-xs text-neutral-300">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{lang === "kk" ? "Тікелей бұлшықет сенсорларын интеграциялау" : "Dedicated temporal EMG sensor fusion"}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{lang === "kk" ? "Edge-AI микроконтроллерлеріне оңтайландыру" : "Edge-AI embedded microchip acceleration"}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{lang === "kk" ? "Ашық бастапқы кодты BCI кітапханасы" : "Open-source Python & C++ DSP library"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
