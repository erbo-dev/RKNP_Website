"use client";

import React, { useState } from "react";
import RollingCounter from "@/components/RollingCounter";
import StackedBars from "@/components/StackedBars";
import { BarChart3, TrendingDown, Users, ShieldAlert, FileText, CheckCircle2, Sliders } from "lucide-react";

export default function ResultsSection() {
  const [interactiveError, setInteractiveError] = useState(32);

  const participants = [
    { id: "S1", baseline: 36.2, miora: 29.8, delta: -6.4 },
    { id: "S2", baseline: 41.0, miora: 34.1, delta: -6.9 },
    { id: "S3", baseline: 39.5, miora: 33.0, delta: -6.5 },
    { id: "S4", baseline: 37.8, miora: 36.9, delta: -0.9 }, // Gate 1 preserved baseline
    { id: "S5", baseline: 38.4, miora: 31.5, delta: -6.9 },
    { id: "S6", baseline: 40.2, miora: 33.8, delta: -6.4 },
    { id: "S7", baseline: 35.6, miora: 29.2, delta: -6.4 },
    { id: "S8", baseline: 39.1, miora: 32.7, delta: -6.4 },
    { id: "S9", baseline: 38.7, miora: 30.6, delta: -8.1 },
  ];

  return (
    <section id="results" className="py-32 px-6 md:px-12 bg-[#0c0e12] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs tracking-[0.25em] text-[#757575] uppercase mb-4 flex items-center gap-2">
            <BarChart3 size={14} className="text-[#00e5ff]" />
            <span>04 // Verified Research Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight mb-6">
            Тексерілген ғылыми қорытындылар (MIORA V18)
          </h2>
          <p className="text-sm sm:text-base text-[#9ba3af] leading-relaxed font-light">
            9 қатысушының ЭЭГ жазбаларына жартылай синтетикалық шайнау артефактілерін енгізу арқылы жүргізілген офлайн зерттеу хаттамасының нақты нәтижелері.
          </p>
        </div>

        {/* 4 Quantitative Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: Error Rate */}
          <div className="p-8 rounded-2xl border border-white/15 bg-[#050608] relative overflow-hidden">
            <div className="font-mono text-xs text-[#757575] uppercase mb-2">
              Қателік деңгейі (Error Rate)
            </div>
            <div className="flex items-baseline gap-3 my-2">
              <span className="text-2xl text-[#757575] line-through font-light">38.5%</span>
              <span className="text-4xl sm:text-5xl font-normal text-white">32.4%</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#00e676] mt-4">
              <TrendingDown size={14} />
              <span>-6.1 п.п. төмендеу</span>
            </div>
          </div>

          {/* Card 2: Weak HARM */}
          <div className="p-8 rounded-2xl border border-white/15 bg-[#050608]">
            <div className="font-mono text-xs text-[#757575] uppercase mb-2">
              Жалған түзету қаупі (Weak HARM)
            </div>
            <div className="flex items-baseline gap-3 my-2">
              <span className="text-2xl text-[#757575] line-through font-light">4.7%</span>
              <span className="text-4xl sm:text-5xl font-normal text-[#00e5ff]">3.9%</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#00e676] mt-4">
              <TrendingDown size={14} />
              <span>-0.8 п.п. сақтану</span>
            </div>
          </div>

          {/* Card 3: Participant Cohort */}
          <div className="p-8 rounded-2xl border border-white/15 bg-[#050608]">
            <div className="font-mono text-xs text-[#757575] uppercase mb-2">
              Сынақ көлемі (Cohort)
            </div>
            <div className="text-4xl sm:text-5xl font-normal text-white my-2">
              9 <span className="text-xl text-[#757575] font-light">адам</span>
            </div>
            <div className="text-xs font-mono text-[#9ba3af] mt-4">
              Жартылай синтетикалық хаттама
            </div>
          </div>

          {/* Card 4: Status */}
          <div className="p-8 rounded-2xl border border-white/15 bg-[#050608]">
            <div className="font-mono text-xs text-[#757575] uppercase mb-2">
              Прототип мәртебесі
            </div>
            <div className="text-3xl sm:text-4xl font-normal text-white my-2">
              V18 Offline
            </div>
            <div className="text-xs font-mono text-[#757575] mt-4">
              Ғылыми зерттеу хаттамасы
            </div>
          </div>
        </div>

        {/* Interactive Dual Bench: Bencho RollingCounter + Bencho StackedBars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left: Bencho RollingCounter Card (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-2xl border border-white/15 bg-[#050608] flex flex-col justify-between h-full">
            <div>
              <div className="font-mono text-xs text-[#00e5ff] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Sliders size={14} />
                <span>Интерактивті есептегіш // Rolling Counter</span>
              </div>
              <h3 className="text-2xl font-normal text-white mb-4">
                Дәлдік көрсеткішін тексеріңіз
              </h3>
              <p className="text-sm text-[#9ba3af] leading-relaxed mb-6 font-light">
                Түймелерді басып немесе санды жоғары/төмен сүйреп, одометр тәрізді серіппелі сандық анимацияны бақылаңыз.
              </p>
            </div>

            <div className="py-6 flex flex-col items-center justify-center border-y border-white/10 my-4">
              <RollingCounter
                start={32}
                bounce={45}
                stagger={45}
                blur={50}
                corner={16}
                onChange={(val) => setInteractiveError(val)}
              />
              <div className="text-xs font-mono text-[#757575] mt-4 uppercase">
                Ағымдағы қателік деңгейі: {interactiveError}% (Baseline: 38.5%)
              </div>
            </div>

            <div className="text-xs font-mono text-[#9ba3af] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00e676]" />
              <span>Шешім қабылдаудың қауіпсіздік каскады белсенді</span>
            </div>
          </div>

          {/* Right: Bencho StackedBars Card (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-2xl border border-white/15 bg-[#050608]">
            <div className="font-mono text-xs text-[#00e5ff] uppercase tracking-wider mb-2 flex items-center gap-2">
              <BarChart3 size={14} />
              <span>Сынақ сессияларының динамикасы // Stacked Bars</span>
            </div>
            <h3 className="text-2xl font-normal text-white mb-4">
              9 Қатысушының сессиялық деректері
            </h3>
            <p className="text-sm text-[#9ba3af] leading-relaxed mb-6 font-light">
              Бағандарды тышқанмен сызып (scrub), әрбір сессиядағы сигналдардың таралуын және каскадпен сүзілген командаларды бақылаңыз.
            </p>

            <div className="overflow-x-auto flex justify-center py-2">
              <StackedBars
                colour="Colour"
                bars={20}
                gap={6}
                title="MIORA Сессиялары"
                subtitle="Сынақ сессияларындағы командалар ағыны"
                unit="команда"
              />
            </div>
          </div>
        </div>

        {/* 9 Participants Detailed Data Table */}
        <div className="rounded-2xl border border-white/10 bg-[#050608] p-8 mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-xl font-normal text-white">
                9 Қатысушы бойынша жеке нәтижелер кестесі
              </h3>
              <p className="text-xs font-mono text-[#757575] mt-1">
                Қатысушылар S1–S9 · Жартылай синтетикалық ЭЭГ жазбалары
              </p>
            </div>
            <div className="flex items-center gap-4 font-mono text-xs">
              <span className="text-[#9ba3af]">Орташа дельта:</span>
              <span className="px-3 py-1 rounded-full bg-[#00e676]/10 border border-[#00e676]/30 text-[#00e676] font-semibold">
                -6.1 п.п.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {participants.map((p) => (
              <div
                key={p.id}
                className="p-4 rounded-xl border border-white/10 bg-[#0c0e12] flex flex-col items-center text-center"
              >
                <div className="font-mono text-xs text-white font-bold mb-2">
                  {p.id}
                </div>
                <div className="text-[11px] font-mono text-[#757575] line-through">
                  {p.baseline}%
                </div>
                <div className="text-sm font-mono text-white font-semibold my-1">
                  {p.miora}%
                </div>
                <div
                  className={`text-[11px] font-mono font-medium ${
                    p.delta < -5 ? "text-[#00e676]" : "text-[#00e5ff]"
                  }`}
                >
                  {p.delta} п.п.
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Transparency & Disclaimer Banner */}
        <div className="p-6 rounded-xl border border-white/15 bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileText size={18} className="text-[#9ba3af] flex-shrink-0" />
            <p className="text-xs text-[#9ba3af] leading-relaxed">
              <strong className="text-white">Ғылыми шектеу:</strong> Бұл көрсеткіштер нақты офлайн-протоколға (semi-synthetic chewing artifacts) қатысты. MIORA нақты уақыттағы клиникалық құрылғы ретінде сертификатталмаған.
            </p>
          </div>
          <span className="px-3 py-1 rounded border border-white/15 font-mono text-[10px] text-[#757575] uppercase whitespace-nowrap">
            OFFLINE RESEARCH PROTOTYPE
          </span>
        </div>
      </div>
    </section>
  );
}
