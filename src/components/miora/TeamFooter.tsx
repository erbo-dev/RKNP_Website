"use client";

import React from "react";
import { GraduationCap, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function TeamFooter() {
  const { lang, t } = useLanguage();

  return (
    <footer id="team" aria-labelledby="team-heading" className="bg-[#050608] border-t border-white/[0.08] text-[#d7e2e9]">
      {/* Team Cards Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 border-b border-white/[0.08]">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs tracking-[0.25em] text-neutral-400 uppercase mb-4 flex items-center gap-2">
            <GraduationCap size={14} className="text-cyan-400" />
            <span>{t.team.kicker}</span>
          </div>
          <h2 id="team-heading" className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08] mb-4">
            {t.team.headline} {t.team.headlineEmphasis}.
          </h2>
          <p className="text-base text-neutral-400 font-light leading-relaxed">
            {t.team.description}
          </p>
        </div>

        {/* 3 Team Monolithic Swiss Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] mb-16">
          {/* Author 1 */}
          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center font-mono font-medium text-white mb-6">
                BQ
              </div>
              <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mb-1.5">
                {lang === "kk" ? "Жоба авторы // Researcher" : "Project Author // Researcher"}
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-medium text-white mb-3">
                {t.team.author1Name}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
                {t.team.author1Bio}
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
                ES
              </div>
              <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mb-1.5">
                {lang === "kk" ? "Жоба авторы // Engineer" : "Project Author // Engineer"}
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-medium text-white mb-3">
                {t.team.author2Name}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
                {t.team.author2Bio}
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
                KQ
              </div>
              <div className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest mb-1.5">
                {lang === "kk" ? "Ғылыми жетекші // Supervisor" : "Scientific Supervisor"}
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-medium text-white mb-3">
                {t.team.supervisorName}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
                {t.team.supervisorBio}
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-neutral-500">
              EDUCATOR-EXPERT • NIS ALMATY–NAURYZBAY
            </div>
          </div>
        </div>

        {/* Institution Console Strip */}
        <div className="p-8 sm:p-10 border border-white/[0.08] bg-[#07090d]/80 backdrop-blur-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white font-mono font-medium text-sm">
              NIS
            </div>
            <div>
              <div className="text-white font-medium text-base">
                Назарбаев Зияткерлік мектебі (NIS Almaty–Nauryzbay)
              </div>
              <div className="text-xs font-mono text-neutral-500 mt-0.5">
                {lang === "kk"
                  ? "Химия-биология бағытындағы Назарбаев Зияткерлік мектебі, Алматы қ."
                  : "Nazarbayev Intellectual School of Chemistry and Biology, Almaty"}
              </div>
            </div>
          </div>
          <a
            href="#demo"
            className="px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-semibold hover:bg-neutral-200 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            <span>{t.nav.tryDemo}</span>
            <ArrowUpRight size={13} />
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

        <div className="flex flex-wrap gap-6 sm:gap-8 text-xs">
          <a href="#hero" className="hover:text-white transition-colors">
            {lang === "kk" ? "Басты бет" : "Overview"}
          </a>
          <a href="#challenge" className="hover:text-white transition-colors">
            {t.nav.challenge}
          </a>
          <a href="#cortex" className="hover:text-white transition-colors">
            {t.nav.cortex}
          </a>
          <a href="#cascade" className="hover:text-white transition-colors">
            {t.nav.cascade}
          </a>
          <a href="#demo" className="hover:text-white transition-colors">
            {t.nav.demo}
          </a>
          <a href="#specs" className="hover:text-white transition-colors">
            {t.nav.specs}
          </a>
          <a href="#research" className="hover:text-white transition-colors">
            {t.nav.research}
          </a>
        </div>
      </div>

      {/* Bottom Legal Disclaimer */}
      <div className="border-t border-white/[0.05] bg-[#030405] py-6 px-6 md:px-12 text-[10px] font-mono text-neutral-500 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <span>© 2026 MIORA Research Group. {lang === "kk" ? "Барлық құқықтар қорғалған." : "All rights reserved."}</span>
          <span className="text-neutral-400">{t.team.footerDisclaimer}</span>
        </div>
      </div>
    </footer>
  );
}
