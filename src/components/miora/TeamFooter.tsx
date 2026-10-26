"use client";

import React from "react";
import { GraduationCap, Award, Shield, ArrowUpRight, Github, Mail, Globe } from "lucide-react";

export default function TeamFooter() {
  return (
    <footer id="team" className="bg-[#050608] border-t border-white/10 text-[#d7e2e9]">
      {/* Team Cards Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 border-b border-white/10">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs tracking-[0.25em] text-[#757575] uppercase mb-4 flex items-center gap-2">
            <GraduationCap size={14} className="text-brand-secondary" />
            <span>08 // Зерттеу тобы және жетекшілік</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight mb-4">
            Жоба авторлары және ғылыми жетекші
          </h2>
          <p className="text-sm sm:text-base text-[#9ba3af]">
            Назарбаев Зияткерлік мектебінде әзірленген нейротехнологиялық зерттеу бастамасы.
          </p>
        </div>

        {/* 3 Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Author 1 */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#0c0e12] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center font-mono font-bold text-white mb-6">
                ҚБ
              </div>
              <div className="font-mono text-[10px] text-brand-secondary uppercase tracking-widest mb-1">
                Жоба авторы // Researcher
              </div>
              <h3 className="text-2xl font-medium text-white mb-2">
                Қыдырбек Бекарыс
              </h3>
              <p className="text-sm text-[#9ba3af] leading-relaxed mb-4">
                BCI жүйелері, ЭЭГ сигналдарын цифрлық өңдеу (DSP) және 4-шлюздік каскадты шешім қабылдау логикасының авторы.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 font-mono text-xs text-[#757575]">
              NIS Almaty–Nauryzbay
            </div>
          </div>

          {/* Author 2 */}
          <div className="p-8 rounded-2xl border border-white/10 bg-[#0c0e12] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center font-mono font-bold text-white mb-6">
                ШЕ
              </div>
              <div className="font-mono text-[10px] text-brand-secondary uppercase tracking-widest mb-1">
                Жоба авторы // Engineer
              </div>
              <h3 className="text-2xl font-medium text-white mb-2">
                Шәймардан Ербосын
              </h3>
              <p className="text-sm text-[#9ba3af] leading-relaxed mb-4">
                Машиналық оқыту модельдері, жартылай синтетикалық ЭМГ артефактілерін модельдеу және эксперименталды бағалау.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 font-mono text-xs text-[#757575]">
              NIS Almaty–Nauryzbay
            </div>
          </div>

          {/* Supervisor */}
          <div className="p-8 rounded-2xl border border-brand-secondary/30 bg-[#0c0e12] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl border border-brand-secondary/30 bg-brand-secondary/10 flex items-center justify-center font-mono font-bold text-brand-secondary mb-6">
                ҚҚ
              </div>
              <div className="font-mono text-[10px] text-brand-success uppercase tracking-widest mb-1">
                Ғылыми жетекші // Scientific Supervisor
              </div>
              <h3 className="text-2xl font-medium text-white mb-2">
                Қабылбек Қалима
              </h3>
              <p className="text-sm text-[#9ba3af] leading-relaxed mb-4">
                Ғылыми әдіснама, эксперименттердің дұрыстығын верификациялау және академиялық хаттамаларды сараптау.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 font-mono text-xs text-[#757575]">
              Педагог-сарапшы • NIS Almaty–Nauryzbay
            </div>
          </div>
        </div>

        {/* Institution Badge */}
        <div className="p-8 rounded-2xl border border-white/10 bg-[#050608] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-mono font-bold">
              NIS
            </div>
            <div>
              <div className="text-white font-medium text-base">
                Назарбаев Зияткерлік мектебі (NIS Almaty–Nauryzbay)
              </div>
              <div className="text-xs font-mono text-[#757575]">
                Химия-биология бағытындағы Назарбаев Зияткерлік мектебі, Алматы қ.
              </div>
            </div>
          </div>
          <a
            href="#demo"
            className="px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs font-semibold hover:bg-brand-secondary transition-colors"
          >
            Интерактивті симуляторды сынау
          </a>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-xs font-mono text-[#757575]">
        <div>
          <div className="flex items-center gap-2 text-white font-semibold text-sm mb-2">
            <span className="w-2 h-2 rounded-full bg-brand-secondary" />
            <span>MIORA — Neural Signal Integrity</span>
          </div>
          <p className="max-w-md text-[11px] leading-relaxed">
            Protecting the signal. Preserving the intent. An experimental decision-protection layer for reliable brain-computer interfaces.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 text-xs">
          <a href="#hero" className="hover:text-white transition-colors">
            Басты бет
          </a>
          <a href="#problem" className="hover:text-white transition-colors">
            ЭМГ Кедергісі
          </a>
          <a href="#cascade" className="hover:text-white transition-colors">
            4 Шлюз
          </a>
          <a href="#demo" className="hover:text-white transition-colors">
            Демо
          </a>
          <a href="#results" className="hover:text-white transition-colors">
            Нәтижелер (V18)
          </a>
          <a href="#research" className="hover:text-white transition-colors">
            Әдіснама
          </a>
        </div>
      </div>

      {/* Bottom Legal Disclaimer */}
      <div className="border-t border-white/5 bg-[#030405] py-6 px-6 md:px-12 text-[10px] font-mono text-[#49555c] text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <span>© 2026 MIORA Research Group. Барлық құқықтар қорғалған.</span>
          <span>RESEARCH PROTOTYPE. NOT AN FDA-CLEARED MEDICAL DEVICE. FOR SCIENTIFIC EVALUATION ONLY.</span>
        </div>
      </div>
    </footer>
  );
}
