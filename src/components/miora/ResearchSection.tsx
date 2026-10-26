"use client";

import React from "react";
import { BookOpen, Layers, GitBranch, ArrowRight, Database, Terminal, Milestone } from "lucide-react";

export default function ResearchSection() {
  return (
    <section id="research" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="font-mono text-xs tracking-[0.25em] text-brand-secondary uppercase mb-4 flex items-center gap-2">
          <BookOpen size={14} />
          <span>07 // Ғылыми негіз және әдіснама</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight mb-6">
          Ашық деректер, қатаң математика және болашақ қадамдар
        </h2>
        <p className="text-sm sm:text-base text-[#9ba3af] leading-relaxed">
          MIORA жобасы жасанды мәліметтерді емес, рецензияланған ашық ғылыми базаларды және тексерілетін алгоритмдік архитектураны басшылыққа алады.
        </p>
      </div>

      {/* 3 Research Methodology Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="p-8 rounded-2xl border border-white/10 bg-[#0c0e12] flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-secondary mb-6">
              <Database size={18} />
            </div>
            <div className="font-mono text-xs text-[#757575] uppercase mb-2">01 // Ашық ЭЭГ деректері</div>
            <h3 className="text-xl text-white font-medium mb-3">
              Ашық ғылыми когорталар
            </h3>
            <p className="text-sm text-[#9ba3af] leading-relaxed">
              Зерттеу BCI Competition және PhysioNet халықаралық репозиторийлеріндегі моторлы елестету (Motor Imagery) ЭЭГ деректерін пайдаланады.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-white/5 font-mono text-xs text-[#757575]">
            9 Субъект • 64-арналы жазбалар
          </div>
        </div>

        <div className="p-8 rounded-2xl border border-white/10 bg-[#0c0e12] flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-secondary mb-6">
              <Layers size={18} />
            </div>
            <div className="font-mono text-xs text-[#757575] uppercase mb-2">02 // Жартылай синтетикалық ластану</div>
            <h3 className="text-xl text-white font-medium mb-3">
              ЭМГ шуын модельдеу
            </h3>
            <p className="text-sm text-[#9ba3af] leading-relaxed">
              Нақты шайнау бұлшықеттерінен (m. masseter, m. temporalis) жазылған электромиограммалар таза ЭЭГ-ге сигнал-шу қатынасын (SNR) басқара отырып қосылды.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-white/5 font-mono text-xs text-[#757575]">
            40–100 Гц жоғары жиілікті спектр
          </div>
        </div>

        <div className="p-8 rounded-2xl border border-white/10 bg-[#0c0e12] flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-secondary mb-6">
              <Terminal size={18} />
            </div>
            <div className="font-mono text-xs text-[#757575] uppercase mb-2">03 // Қос декодерлік эксперттер</div>
            <h3 className="text-xl text-white font-medium mb-3">
              Ансамбльдік шешім қабылдау
            </h3>
            <p className="text-sm text-[#9ba3af] leading-relaxed">
              Базалық CSP + LDA классификаторы және шуға төзімді қосымша сарапшы модель параллельді түрде жұмыс істеп, классификациялық маржаны салыстырады.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-white/5 font-mono text-xs text-[#757575]">
            Adaptive Decision Margin Cascade
          </div>
        </div>
      </div>

      {/* MIORA-2 Future Roadmap */}
      <div className="p-8 sm:p-12 rounded-2xl border border-brand-secondary/30 bg-gradient-to-r from-[#0c0e12] to-[#050608]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-brand-secondary/10 border border-brand-secondary/30 font-mono text-[10px] text-brand-secondary uppercase mb-4">
              <Milestone size={12} />
              <span>Болашақ бағыт // Roadmap</span>
            </div>
            <h3 className="text-2xl sm:text-3xl text-white font-medium mb-3">
              MIORA-2: Real-Time BCI Streaming Pipeline
            </h3>
            <p className="text-sm sm:text-base text-[#9ba3af] max-w-2xl leading-relaxed">
              Келесі кезеңде біз офлайн хаттаманы ультра-төмен кідірісті (&lt; 20 мс) нақты уақыттағы ағындық конвейерге айналдырып, роботталған протездерді тікелей басқаруға бейімдейміз.
            </p>
          </div>

          <div className="flex flex-col gap-3 font-mono text-xs text-white">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
              <span>Тікелей бұлшықет сенсорларын интеграциялау</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
              <span>Edge-AI микроконтроллерлеріне оңтайландыру</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
              <span>Ашық бастапқы кодты ғылыми кітапхана</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
