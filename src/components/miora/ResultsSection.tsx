"use client";

import React, { useState } from "react";
import { BarChart3, TrendingDown, Users, ShieldAlert, FileText, CheckCircle2 } from "lucide-react";

export default function ResultsSection() {
  const [selectedMetric, setSelectedMetric] = useState<"error" | "harm">("error");

  const participants = [
    { id: "S1", baseline: 36.2, miora: 29.8, delta: -6.4 },
    { id: "S2", baseline: 41.0, miora: 34.1, delta: -6.9 },
    { id: "S3", baseline: 39.5, miora: 33.0, delta: -6.5 },
    { id: "S4", baseline: 37.8, miora: 36.9, delta: -0.9 }, // Filtered by gate 1
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
            <BarChart3 size={14} className="text-brand-secondary" />
            <span>06 // Эксперименттік нәтижелер</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight mb-6">
            MIORA V18 Нақты ғылыми қорытындылары
          </h2>
          <p className="text-sm sm:text-base text-[#9ba3af] leading-relaxed">
            9 қатысушының ЭЭГ жазбаларына жартылай синтетикалық шайнау артефактілерін енгізу арқылы жүргізілген офлайн зерттеу хаттамасының тексерілген көрсеткіштері.
          </p>
        </div>

        {/* 4 Key Milestone Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Metric 1 */}
          <div className="p-8 rounded-2xl border border-brand-secondary/30 bg-[#050608] relative overflow-hidden">
            <div className="font-mono text-xs text-[#757575] uppercase mb-2">
              Қателік деңгейі (Error Rate)
            </div>
            <div className="flex items-baseline gap-3 my-2">
              <span className="text-2xl text-[#757575] line-through font-light">38.5%</span>
              <span className="text-4xl sm:text-5xl font-bold text-white">32.4%</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-brand-success mt-4">
              <TrendingDown size={14} />
              <span>-6.1 пайыздық тармаққа төмендеді</span>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#050608]">
            <div className="font-mono text-xs text-[#757575] uppercase mb-2">
              Қате түзетулер (Weak HARM)
            </div>
            <div className="flex items-baseline gap-3 my-2">
              <span className="text-2xl text-[#757575] line-through font-light">4.7%</span>
              <span className="text-4xl sm:text-5xl font-bold text-white">3.9%</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-brand-success mt-4">
              <TrendingDown size={14} />
              <span>-0.8 п.т. қауіпті түзету қысқарды</span>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#050608]">
            <div className="font-mono text-xs text-[#757575] uppercase mb-2">
              Сынақ көлемі (Cohort)
            </div>
            <div className="text-4xl sm:text-5xl font-bold text-white my-2">
              9
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#9ba3af] mt-4">
              <Users size={14} />
              <span>Тексерілген ЭЭГ қатысушылары</span>
            </div>
          </div>

          {/* Metric 4 */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#050608]">
            <div className="font-mono text-xs text-[#757575] uppercase mb-2">
              Артефакт түрі
            </div>
            <div className="text-2xl sm:text-3xl font-medium text-white my-2">
              Жартылай синтетикалық
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#757575] mt-4">
              <span>Semi-synthetic EMG contamination</span>
            </div>
          </div>
        </div>

        {/* Participant Data Breakdown */}
        <div className="p-8 rounded-2xl border border-white/10 bg-[#050608] mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h3 className="text-xl font-medium text-white mb-1">
                9 Қатысушы бойынша жеке нәтижелер
              </h3>
              <p className="text-xs font-mono text-[#757575]">
                Офлайн сынақ барысында әр субъектідегі базалық және MIORA қателіктерінің айырмашылығы
              </p>
            </div>
            <div className="px-3 py-1 rounded bg-[#0c0e12] border border-white/10 text-xs font-mono text-brand-secondary">
              V18 OFFLINE DATASET
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-white/10 text-[#757575]">
                  <th className="py-3 px-4">ҚАТЫСУШЫ</th>
                  <th className="py-3 px-4">БАЗАЛЫҚ ҚАТЕЛІК</th>
                  <th className="py-3 px-4">MIORA ҚАТЕЛІГІ</th>
                  <th className="py-3 px-4">ТИІМДІЛІК (DELTA)</th>
                  <th className="py-3 px-4">ҚОРҒАНЫС СТАТУСЫ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {participants.map((p) => (
                  <tr key={p.id} className="hover:bg-white/[0.02]">
                    <td className="py-3.5 px-4 font-bold text-white">{p.id}</td>
                    <td className="py-3.5 px-4 text-[#9ba3af]">{p.baseline.toFixed(1)}%</td>
                    <td className="py-3.5 px-4 text-white font-semibold">{p.miora.toFixed(1)}%</td>
                    <td className="py-3.5 px-4 text-brand-success font-bold">{p.delta.toFixed(1)}%</td>
                    <td className="py-3.5 px-4 text-[11px]">
                      {p.id === "S4" ? (
                        <span className="text-[#757575]">Шлюз 1 бұғаттады (Тұрақты)</span>
                      ) : (
                        <span className="text-brand-secondary">Каскад толық орындалды</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scientific Limitations Disclosure */}
        <div className="p-6 rounded-xl border border-white/10 bg-[#0c0e12] flex items-start gap-4">
          <ShieldAlert size={20} className="text-[#757575] shrink-0 mt-0.5" />
          <div className="text-xs font-mono text-[#757575] leading-relaxed">
            <strong className="text-white">Зерттеу шектеулері мен ғылыми адалдық:</strong> MIORA V18 нәтижелері 9 қатысушыдан тұратын офлайн протокол шеңберінде алынған. Жүйе нақты уақыт режимінде (real-time stream) толық клиникалық тексерістен өтпеген және сертификатталған медициналық құрылғы болып саналмайды.
          </div>
        </div>
      </div>
    </section>
  );
}
