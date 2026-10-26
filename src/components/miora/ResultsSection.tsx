"use client";

import React, { useState } from "react";
import StackedBars from "@/components/StackedBars";
import { TrendingDown, BarChart3, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ResultsSection() {
  const participants = [
    { id: "S1", baseline: 38.2, miora: 31.4, delta: -6.8 },
    { id: "S2", baseline: 41.5, miora: 34.2, delta: -7.3 },
    { id: "S3", baseline: 36.9, miora: 30.8, delta: -6.1 },
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
            <span>04 // Тексерілген зерттеу нәтижелері</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight mb-6">
            Ғылыми қорытындылар (MIORA V18)
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            9 қатысушының ЭЭГ жазбаларына жартылай синтетикалық шайнау артефактілерін енгізу арқылы жүргізілген офлайн зерттеу хаттамасының нақты нәтижелері.
          </p>
        </div>

        {/* 3 Streamlined Quantitative Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Error Rate */}
          <div className="p-8 rounded-2xl border border-white/15 bg-[#050608] relative overflow-hidden">
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
              Қателік деңгейі (Error Rate)
            </div>
            <div className="flex items-baseline gap-3 my-3">
              <span className="text-2xl text-neutral-500 line-through font-light">38.5%</span>
              <span className="text-4xl sm:text-5xl font-medium text-white">32.4%</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mt-4">
              <TrendingDown size={15} />
              <span>-6.1 п.п. орташа төмендеу</span>
            </div>
          </div>

          {/* Card 2: Weak HARM */}
          <div className="p-8 rounded-2xl border border-white/15 bg-[#050608]">
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
              Жалған түзету қаупі (Weak HARM)
            </div>
            <div className="flex items-baseline gap-3 my-3">
              <span className="text-2xl text-neutral-500 line-through font-light">4.7%</span>
              <span className="text-4xl sm:text-5xl font-medium text-cyan-400">3.9%</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mt-4">
              <TrendingDown size={15} />
              <span>-0.8 п.п. қауіпсіздік кепілі</span>
            </div>
          </div>

          {/* Card 3: Participant Cohort */}
          <div className="p-8 rounded-2xl border border-white/15 bg-[#050608]">
            <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
              Зерттеу когортасы (Cohort)
            </div>
            <div className="text-4xl sm:text-5xl font-medium text-white my-3">
              9 <span className="text-xl text-neutral-500 font-light">қатысушы</span>
            </div>
            <div className="text-xs font-mono text-neutral-400 mt-4 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-cyan-400" />
              <span>Жартылай синтетикалық хаттама</span>
            </div>
          </div>
        </div>

        {/* Dynamic Session Scrubbing Visualizer: Bencho StackedBars */}
        <div className="p-8 sm:p-10 rounded-2xl border border-white/15 bg-[#050608] mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="font-mono text-xs text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <BarChart3 size={14} />
                <span>Сынақ сессияларының динамикасы // Dynamic Stacked Stream</span>
              </div>
              <h3 className="text-2xl font-normal text-white">
                9 Қатысушының командалар ағыны мен каскадтық сүзгісі
              </h3>
            </div>
            <div className="text-xs font-mono text-neutral-400">
              Бағандар үстінен курсорды жүргізіп бақылаңыз
            </div>
          </div>

          <div className="overflow-x-auto flex justify-center py-4">
            <StackedBars
              colour="Colour"
              bars={24}
              gap={6}
              title="MIORA Сессиялары"
              subtitle="Сынақ сессияларындағы командалар ағыны"
              unit="команда"
            />
          </div>
        </div>

        {/* 9 Participants Individual Results Table */}
        <div className="rounded-2xl border border-white/15 bg-[#050608] overflow-hidden">
          <div className="p-6 border-b border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-lg font-normal text-white mb-1">
                9 Қатысушы бойынша жеке нәтижелер кестесі
              </h3>
              <p className="text-xs text-neutral-400 font-mono">
                Қатысушылар S1–S9 • Жартылай синтетикалық ЭЭГ жазбалары
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-400">Орташа дельта:</span>
              <span className="px-3 py-1 rounded bg-[#00e676]/10 border border-[#00e676]/30 text-[#00e676] font-mono text-xs font-bold">
                -6.1 п.п.
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono text-[#757575] uppercase">
                  <th className="py-4 px-6">Қатысушы</th>
                  <th className="py-4 px-6">Базалық қателік</th>
                  <th className="py-4 px-6">MIORA қателігі</th>
                  <th className="py-4 px-6">Дельта (Айырма)</th>
                  <th className="py-4 px-6">Нәтиже</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono text-xs">
                {participants.map((p) => {
                  const isS4 = p.id === "S4";
                  return (
                    <tr
                      key={p.id}
                      className={`hover:bg-white/[0.02] transition-colors ${
                        isS4 ? "bg-white/[0.03]" : ""
                      }`}
                    >
                      <td className="py-3.5 px-6 font-bold text-white flex items-center gap-2">
                        <span>{p.id}</span>
                        {isS4 && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
                            Gate 1 сақтады
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-6 text-[#757575]">{p.baseline.toFixed(1)}%</td>
                      <td className="py-3.5 px-6 text-white font-semibold">{p.miora.toFixed(1)}%</td>
                      <td className="py-3.5 px-6 text-[#00e676] font-bold">
                        {p.delta.toFixed(1)} п.п.
                      </td>
                      <td className="py-3.5 px-6">
                        {isS4 ? (
                          <span className="text-xs text-amber-300 font-mono">
                            Базалық сақталды (Түзету жоқ)
                          </span>
                        ) : (
                          <span className="text-xs text-[#00e676] font-mono flex items-center gap-1.5">
                            <CheckCircle2 size={13} />
                            <span>Қателік төмендеді</span>
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
