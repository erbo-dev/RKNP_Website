"use client";

import React from "react";
import { ShieldCheck, Cpu, Layers, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function IntroducingSection() {
  return (
    <section id="reveal" className="py-32 px-6 md:px-12 bg-[#0c0e12] border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Category kicker */}
        <div className="font-mono text-xs tracking-[0.25em] text-[#757575] uppercase mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>02 // Технологиялық серпіліс</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white max-w-4xl tracking-tight leading-[1.08] mb-16">
          MIORA сигналды себепсіз өзгертпейді.{" "}
          <span className="font-serif italic text-white/95 font-normal">
            Ол адамның бастапқы ниетін қорғайды.
          </span>
        </h2>

        {/* Dual column: Dark 3D Neural Architecture Video + Modern Decision Flow Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Dark 3D Neural Topology Video */}
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#050608] group shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[460px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700 opacity-85 filter grayscale contrast-125"
              src="/videos/brain_expansion.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-[#9ba3af] border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-white">NEURAL SYNAPSE TOPOLOGY</span>
              </div>
              <span className="text-[#757575]">CORTICAL MAPPING // 3D</span>
            </div>
          </div>

          {/* Right: Technical Explanation & Modern Decision Flow Visualizer */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6 text-[#9ba3af] text-base sm:text-lg leading-relaxed font-light">
              <p>
                Дәстүрлі BCI сүзгілері сигналды үнемі агрессивті тазалауға немесе кез келген ауытқу кезінде команданы бірден қайта жазуға тырысады. Бұл жиі дұрыс командалардың өзін бұзып, қауіпті жалған түзетулерге (Weak HARM) соқтырады.
              </p>
              <p>
                <strong className="text-white font-medium">MIORA каскадының принципі:</strong> Егер қосымша сарапшы белгіленген 4 қатаң критерийдің бәрін толық қанағаттандырмаса, жүйе базалық шешімді өзгеріссіз сақтайды.
              </p>
            </div>

            {/* High-Tech Decision Verification Pipeline Visualizer */}
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#050608]/90 backdrop-blur-md">
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-white font-medium">Шешім қабылдау тізбегі</span>
                </span>
                <span className="text-white/40 font-mono text-[10px]">V18 OFFLINE PROTOCOL</span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500">01</span>
                    <span className="text-neutral-300">Бастапқы ЭЭГ сигналы</span>
                  </div>
                  <span className="text-cyan-400">CH1-CH4 // 250Hz</span>
                </div>

                <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500">02</span>
                    <span className="text-neutral-300">ЭМГ Шуын анықтау</span>
                  </div>
                  <span className="text-cyan-400">Шек: &gt; 35%</span>
                </div>

                <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500">03</span>
                    <span className="text-neutral-300">Сарапшы маржасы</span>
                  </div>
                  <span className="text-emerald-400">Δ &ge; 15% Сенімді</span>
                </div>

                <div className="p-3 rounded-xl border border-cyan-500/30 bg-cyan-950/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-cyan-400" />
                    <span className="text-white font-medium">Ниеттің сақталуы</span>
                  </div>
                  <span className="text-cyan-400 font-bold">Сигнал қауіпсіз</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Engineering Pillars (Replacing the redundant 4 gate cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.08] mt-24 pt-12 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          <div className="pr-0 md:pr-10 pb-8 md:pb-0">
            <div className="font-mono text-[11px] text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>PILLAR 01 // PRINCIPLE</span>
            </div>
            <h3 className="text-xl font-normal text-white mb-2">Нөлдік өкініш қағидасы</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              «Зиян келтірмеу» принципі: егер жасанды интеллект 100% сенімді болмаса, команданы күшпен қайта жазуға тыйым салынады. Адамның алғашқы шешімі қаз-қалпында сақталады.
            </p>
          </div>

          <div className="px-0 md:px-10 py-8 md:py-0">
            <div className="font-mono text-[11px] text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>PILLAR 02 // PERSONALIZATION</span>
            </div>
            <h3 className="text-xl font-normal text-white mb-2">Жеке анатомияға бейімделу</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Әр адамның бас сүйегінің қалыңдығы мен самай бұлшықеттерінің белсенділігі қайталанбас. Сүзгі параметрлері әр қолданушының нақты физиологиясына дербес бейімделеді.
            </p>
          </div>

          <div className="pl-0 md:pl-10 pt-8 md:pt-0">
            <div className="font-mono text-[11px] text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>PILLAR 03 // LATENCY</span>
            </div>
            <h3 className="text-xl font-normal text-white mb-2">Ультра-төмен кідіріс (&lt; 2.4 мс)</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Каскадты шешім қабылдау логикасы аппараттық деңгейде 2.4 миллисекунд ішінде есептеледі, пайдаланушы қозғалысты кідіріссіз басқарады.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
