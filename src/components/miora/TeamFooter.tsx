"use client";

import React from "react";
import { GraduationCap, Award, Shield, ArrowUpRight, Github, Mail, Globe } from "lucide-react";

export default function TeamFooter() {
  return (
    <footer id="team" className="bg-[#050608] border-t border-white/[0.08] text-[#d7e2e9]">
      {/* Team Cards Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 border-b border-white/[0.08]">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase mb-4 flex items-center gap-2">
            <GraduationCap size={14} className="text-cyan-400" />
            <span>08 // Зерттеу тобы және жетекшілік</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08] mb-4">
            Жоба авторлары және{" "}
            <span className="font-serif italic text-white/95 font-normal">
              ғылыми жетекші
            </span>
            .
          </h2>
          <p className="text-base text-neutral-400 font-light leading-relaxed">
            Назарбаев Зияткерлік мектебінде әзірленген нейротехнологиялық зерттеу бастамасы.
          </p>
        </div>

        {/* 3 Team Monolithic Swiss Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] mb-16">
          {/* Author 1 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center font-mono font-medium text-white mb-6">
                ҚБ
              </div>
              <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mb-1.5">
                Жоба авторы // Researcher
              </div>
              <h3 className="font-serif text-2xl font-normal text-white mb-3">
                Қыдырбек Бекарыс
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
                BCI жүйелері, ЭЭГ сигналдарын цифрлық өңдеу (DSP) және 4-шлюздік каскадты шешім қабылдау логикасының авторы.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-neutral-500">
              NIS ALMATY–NAURYZBAY
            </div>
          </div>

          {/* Author 2 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center font-mono font-medium text-white mb-6">
                ШЕ
              </div>
              <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mb-1.5">
                Жоба авторы // Engineer
              </div>
              <h3 className="font-serif text-2xl font-normal text-white mb-3">
                Шәймардан Ербосын
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
                Машиналық оқыту модельдері, жартылай синтетикалық ЭМГ артефактілерін модельдеу және эксперименталды бағалау.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-neutral-500">
              NIS ALMATY–NAURYZBAY
            </div>
          </div>

          {/* Supervisor */}
          <div className="p-8 sm:p-10 flex flex-col justify-between bg-white/[0.01]">
            <div>
              <div className="w-12 h-12 rounded-xl border border-cyan-500/30 bg-cyan-950/20 flex items-center justify-center font-mono font-medium text-cyan-400 mb-6">
                ҚҚ
              </div>
              <div className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest mb-1.5">
                Ғылыми жетекші // Scientific Supervisor
              </div>
              <h3 className="font-serif text-2xl font-normal text-white mb-3">
                Қабылбек Қалима
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
                Ғылыми әдіснама, эксперименттердің дұрыстығын верификациялау және академиялық хаттамаларды сараптау.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-neutral-500">
              ПЕДАГОГ-САРАПШЫ • NIS ALMATY–NAURYZBAY
            </div>
          </div>
        </div>

        {/* Institution Console Strip */}
        <div className="p-8 sm:p-10 border border-white/[0.08] bg-[#07090d]/80 backdrop-blur-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white font-mono font-medium text-sm">
              NIS
            </div>
            <div>
              <div className="text-white font-medium text-base">
                Назарбаев Зияткерлік мектебі (NIS Almaty–Nauryzbay)
              </div>
              <div className="text-xs font-mono text-neutral-500 mt-0.5">
                Химия-биология бағытындағы Назарбаев Зияткерлік мектебі, Алматы қ.
              </div>
            </div>
          </div>
          <a
            href="#demo"
            className="px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-semibold hover:bg-neutral-200 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
          >
            СИМУЛЯТОРДЫ СЫНАУ
          </a>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-xs font-mono text-neutral-500">
        <div>
          <div className="flex items-center gap-2 text-white font-medium text-sm mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>MIORA — Neural Signal Integrity</span>
          </div>
          <p className="max-w-md text-[11px] text-neutral-400 leading-relaxed font-light">
            Protecting the signal. Preserving human intent. An experimental decision-protection layer for reliable brain-computer interfaces.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 text-xs">
          <a href="#hero" className="hover:text-white transition-colors">
            Басты бет
          </a>
          <a href="#challenge" className="hover:text-white transition-colors">
            ЭМГ Кедергісі
          </a>
          <a href="#cortex" className="hover:text-white transition-colors">
            3D Сканер
          </a>
          <a href="#cascade" className="hover:text-white transition-colors">
            4 Шлюз
          </a>
          <a href="#demo" className="hover:text-white transition-colors">
            Симулятор
          </a>
          <a href="#specs" className="hover:text-white transition-colors">
            Спецификация
          </a>
          <a href="#research" className="hover:text-white transition-colors">
            Әдіснама
          </a>
        </div>
      </div>

      {/* Bottom Legal Disclaimer */}
      <div className="border-t border-white/[0.05] bg-[#030405] py-6 px-6 md:px-12 text-[10px] font-mono text-neutral-600 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <span>© 2026 MIORA Research Group. Барлық құқықтар қорғалған.</span>
          <span>RESEARCH PROTOTYPE. NOT AN FDA-CLEARED MEDICAL DEVICE. FOR SCIENTIFIC EVALUATION ONLY.</span>
        </div>
      </div>
    </footer>
  );
}
