"use client";

import React from "react";
import { BookOpen, Layers, Database, Terminal, Milestone, ArrowUpRight } from "lucide-react";

export default function ResearchSection() {
  return (
    <section id="research" className="py-28 px-6 md:px-12 bg-[#050608] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-4 flex items-center gap-2">
            <BookOpen size={14} className="animate-pulse" />
            <span>07 // Ғылыми негіз және әдіснама</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08] mb-6">
            Ашық ғылыми деректер және{" "}
            <span className="font-serif italic text-white/95 font-normal">
              қатаң математика
            </span>
            .
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            MIORA халықаралық рецензияланған ашық ғылыми репозиторийлерді (PhysioNet, BCI Competition) және қатаң математикалық шешім қабылдау логикасын басшылыққа алады.
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
                01 // Ашық ЭЭГ базалары
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-white mb-3">
                Академиялық когорталар
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
                Зерттеу BCI Competition және PhysioNet халықаралық репозиторийлеріндегі моторлы елестету (Motor Imagery) ЭЭГ деректерін пайдаланады.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-neutral-500">
              МОТОРЛЫҚ КОРТЕКС • 64-АРНАЛЫ ЖАЗБАЛАР
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 mb-6">
                <Layers size={18} />
              </div>
              <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-2">
                02 // Шуды модельдеу
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-white mb-3">
                ЭМГ физиологиялық шуы
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
                Нақты шайнау бұлшықеттерінен (m. masseter, m. temporalis) жазылған электромиограммалар таза ЭЭГ-ге сигнал-шу қатынасын (SNR) басқара отырып қосылды.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-neutral-500">
              40–100 ГЦ СПЕКТРЛІК ДИАПАЗОН
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 mb-6">
                <Terminal size={18} />
              </div>
              <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-2">
                03 // Қос декодерлік эксперт
              </div>
              <h3 className="text-xl sm:text-2xl font-normal text-white mb-3">
                Ансамбльдік шешім
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
                Базалық кеңістіктік классификатор (CSP + LDA) және шуға төзімді эксперттік модель параллель жұмыс істеп, классификациялық маржаны салыстырады.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-neutral-500">
              DECISION MARGIN CASCADE PIPELINE
            </div>
          </div>
        </div>

        {/* MIORA-2 Future Roadmap — Minimalist Surgical Console */}
        <div className="p-8 sm:p-12 border border-white/[0.08] bg-[#07090d]/80 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 font-mono text-[10px] text-cyan-400 uppercase mb-4 tracking-wider">
                <Milestone size={12} />
                <span>Болашақ бағыт // Engineering Roadmap</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-white mb-3 tracking-tight">
                MIORA-2: Real-Time BCI Streaming Pipeline
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
                Келесі кезеңде біз алгоритмдік конвейерді ультра-төмен кідірісті (&lt; 20 мс) нақты уақыттағы ағындық микроконтроллерлерге енгізіп, биондық протездер мен көмекші интерфейстерге бейімдейміз.
              </p>
            </div>

            <div className="flex flex-col gap-3.5 font-mono text-xs text-neutral-300">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Тікелей бұлшықет сенсорларын интеграциялау</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Edge-AI микроконтроллерлеріне оңтайландыру</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Ашық бастапқы кодты BCI кітапханасы</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
