"use client";

import React from "react";
import { ShieldCheck, Cpu, Layers, CheckCircle2, Zap } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function IntroducingSection() {
  const { lang } = useLanguage();

  return (
    <section id="reveal" aria-labelledby="reveal-heading" className="py-32 px-6 md:px-12 bg-[#0c0e12] border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Category kicker */}
        <div className="font-mono text-xs tracking-[0.25em] text-neutral-400 uppercase mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>
            {lang === "kk" ? "02 // Технологиялық серпіліс" : "02 // Technological Breakthrough"}
          </span>
        </div>

        <h2 id="reveal-heading" className="text-3xl sm:text-5xl md:text-6xl font-light text-white max-w-4xl tracking-tight leading-[1.08] mb-16">
          {lang === "kk" ? (
            <>
              <span className="text-neutral-400">MIORA сигналды себепсіз өзгертпейді.</span>{" "}
              <span className="text-white">Ол адамның бастапқы ниетін қорғайды.</span>
            </>
          ) : (
            <>
              <span className="text-neutral-400">MIORA never alters signal arbitrarily.</span>{" "}
              <span className="text-white">It safeguards original human intent.</span>
            </>
          )}
        </h2>

        {/* Dual column: 3D Neural Architecture Video + Modern Decision Flow Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: 3D Neural Topology Video */}
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#050608] group shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[460px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700 opacity-85 filter grayscale contrast-125"
              src="/videos/brain_expansion.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-neutral-400 border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-white">NEURAL SYNAPSE TOPOLOGY</span>
              </div>
              <span className="text-neutral-500">CORTICAL MAPPING // 3D</span>
            </div>
          </div>

          {/* Right: Technical Explanation & Modern Decision Flow Visualizer */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
              <p>
                {lang === "kk"
                  ? "Дәстүрлі BCI сүзгілері сигналды үнемі агрессивті тазалауға немесе кез келген ауытқу кезінде команданы бірден қайта жазуға тырысады. Бұл жиі дұрыс командалардың өзін бұзып, қауіпті жалған түзетулерге (Weak HARM) соқтырады."
                  : "Conventional BCI pipelines often attempt aggressive blind filtering or instantly override commands upon the slightest noise. This frequently corrupts valid user intent, creating dangerous false interventions (Weak HARM)."}
              </p>
              <p>
                <strong className="text-white font-medium">
                  {lang === "kk" ? "MIORA каскадының принципі:" : "MIORA Cascade Principle:"}
                </strong>{" "}
                {lang === "kk"
                  ? "Егер қосымша сарапшы белгіленген 4 қатаң критерийдің бәрін толық қанағаттандырмаса, жүйе базалық шешімді өзгеріссіз сақтайды."
                  : "Unless the auxiliary expert meets all four stringent gating criteria simultaneously, the system strictly preserves the baseline decision."}
              </p>
            </div>

            {/* High-Tech Decision Verification Pipeline Visualizer */}
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#050608]/90 backdrop-blur-md">
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-white font-medium">
                    {lang === "kk" ? "Шешім қабылдау тізбегі" : "Decision Verification Pipeline"}
                  </span>
                </span>
                <span className="text-white/40 font-mono text-[10px]">V18 OFFLINE PROTOCOL</span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500">01</span>
                    <span className="text-neutral-300">
                      {lang === "kk" ? "Бастапқы ЭЭГ сигналы" : "Raw EEG Signal Acquisition"}
                    </span>
                  </div>
                  <span className="text-cyan-400">CH1-CH4 // 250Hz</span>
                </div>

                <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500">02</span>
                    <span className="text-neutral-300">
                      {lang === "kk" ? "ЭМГ Шуын анықтау" : "EMG Artifact Detection"}
                    </span>
                  </div>
                  <span className="text-cyan-400">
                    {lang === "kk" ? "Шек: ≥ 35%" : "Threshold: ≥ 35%"}
                  </span>
                </div>

                <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500">03</span>
                    <span className="text-neutral-300">
                      {lang === "kk" ? "Сарапшы маржасы" : "Expert Margin Delta"}
                    </span>
                  </div>
                  <span className="text-emerald-400">Δ ≥ 15% Verified</span>
                </div>

                <div className="p-3 rounded-xl border border-cyan-500/30 bg-cyan-950/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-cyan-400" />
                    <span className="text-white font-medium">
                      {lang === "kk" ? "Ниеттің сақталуы" : "Intent Verification"}
                    </span>
                  </div>
                  <span className="text-cyan-400 font-bold">
                    {lang === "kk" ? "Сигнал қауіпсіз" : "Signal Secured"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.08] mt-24 pt-12 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          <div className="pr-0 md:pr-10 pb-8 md:pb-0">
            <div className="font-mono text-[11px] text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>PILLAR 01 // PRINCIPLE</span>
            </div>
            <h3 className="text-xl font-normal text-white mb-2">
              {lang === "kk" ? "Нөлдік өкініш қағидасы" : "Zero-Regret Principle"}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              {lang === "kk"
                ? "«Зиян келтірмеу» принципі: егер жасанды интеллект 100% сенімді болмаса, команданы күшпен қайта жазуға тыйым салынады. Адамның алғашқы шешімі қаз-қалпында сақталады."
                : "First, do no harm: unless the auxiliary system meets all criteria with verified statistical margin, the baseline human command remains untouched."}
            </p>
          </div>

          <div className="px-0 md:px-10 py-8 md:py-0">
            <div className="font-mono text-[11px] text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>PILLAR 02 // PERSONALIZATION</span>
            </div>
            <h3 className="text-xl font-normal text-white mb-2">
              {lang === "kk" ? "Жеке анатомияға бейімделу" : "Individual Calibration"}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              {lang === "kk"
                ? "Әр адамның бас сүйегінің қалыңдығы мен самай бұлшықеттерінің белсенділігі қайталанбас. Сүзгі параметрлері әр қолданушының нақты физиологиясына дербес бейімделеді."
                : "Skull conductivity and temporalis muscle dynamics vary by individual. The individual-benefit gate verifies that the expert genuinely benefits this specific user before engaging."}
            </p>
          </div>

          <div className="pl-0 md:pl-10 pt-8 md:pt-0">
            <div className="font-mono text-[11px] text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>PILLAR 03 // COMPLEXITY</span>
            </div>
            <h3 className="text-xl font-normal text-white mb-2">
              {lang === "kk" ? "Төмен есептеу кідірісі (< 3 мс)" : "Low Algorithmic Overhead (< 3 ms)"}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              {lang === "kk"
                ? "Каскадты бағалау логикасы әр 250 Гц сигнал терезесінде 3 миллисекундтан аз уақыт ішінде есептеледі, болашақ нақты уақытты ағындық BCI жүйелері үшін өте жеңіл."
                : "Decision gating logic computes in under 3 milliseconds per 250 Hz epoch, providing lightweight overhead for next-generation embedded real-time microcontrollers."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
