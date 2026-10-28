"use client";

import React from "react";
import { GraduationCap, ArrowUpRight, Award, Compass, Microscope } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export interface TeamMember {
  initials: string;
  roleKz: string;
  roleEn: string;
  name: string;
  bioKz: string;
  bioEn: string;
  institutionKz: string;
  institutionEn: string;
  isSupervisor?: boolean;
  mediaSlot?: React.ReactNode;
}

export default function TeamFooter() {
  const { lang, t } = useLanguage();

  const members: TeamMember[] = [
    {
      initials: "BQ",
      roleKz: "Жоба авторы // Бас зерттеуші",
      roleEn: "Project Author // Lead Researcher",
      name: t.team.author1Name,
      bioKz: t.team.author1Bio,
      bioEn: t.team.author1Bio,
      institutionKz: "NIS ALMATY–NAURYZBAY // ХББ НЗМ",
      institutionEn: "NIS ALMATY–NAURYZBAY",
    },
    {
      initials: "ES",
      roleKz: "Жоба авторы // Инженер-бағдарламашы",
      roleEn: "Project Author // Systems Engineer",
      name: t.team.author2Name,
      bioKz: t.team.author2Bio,
      bioEn: t.team.author2Bio,
      institutionKz: "NIS ALMATY–NAURYZBAY // ХББ НЗМ",
      institutionEn: "NIS ALMATY–NAURYZBAY",
    },
    {
      initials: "KQ",
      roleKz: "Ғылыми жетекші // Ғылым магистрі",
      roleEn: "Scientific Supervisor // Educator-Expert",
      name: t.team.supervisorName,
      bioKz: t.team.supervisorBio,
      bioEn: t.team.supervisorBio,
      institutionKz: "EDUCATOR-EXPERT • NIS ALMATY–NAURYZBAY",
      institutionEn: "EDUCATOR-EXPERT • NIS ALMATY–NAURYZBAY",
      isSupervisor: true,
    },
  ];

  return (
    <footer id="team" aria-labelledby="team-heading" className="bg-[#050608] border-t border-white/[0.08] text-[#d7e2e9] relative">
      {/* Team Cards Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 border-b border-white/[0.08]">
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-4 flex items-center gap-2">
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
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] mb-12">
          {members.map((member) => (
            <div
              key={member.initials}
              className={`p-8 sm:p-10 flex flex-col justify-between transition-colors ${
                member.isSupervisor ? "bg-white/[0.015]" : "bg-transparent"
              }`}
            >
              <div>
                {/* Monogram or Optional Media Slot */}
                {member.mediaSlot ? (
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 mb-6">
                    {member.mediaSlot}
                  </div>
                ) : (
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center font-mono font-medium text-sm mb-6 ${
                      member.isSupervisor
                        ? "border-cyan-500/40 bg-gradient-to-br from-cyan-950/40 to-cyan-900/10 text-cyan-300 shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                        : "border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] text-white"
                    }`}
                  >
                    {member.initials}
                  </div>
                )}

                <div className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  {member.isSupervisor && <Award size={12} className="text-cyan-400" />}
                  <span>{lang === "kk" ? member.roleKz : member.roleEn}</span>
                </div>

                <h3 className="font-sans text-xl sm:text-2xl font-medium text-white mb-3">
                  {member.name}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
                  {lang === "kk" ? member.bioKz : member.bioEn}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-neutral-500 flex items-center justify-between">
                <span>{lang === "kk" ? member.institutionKz : member.institutionEn}</span>
                <span className="text-[10px] text-neutral-600">RESEARCH</span>
              </div>
            </div>
          ))}
        </div>

        {/* Research Context & Institution Strip */}
        <div className="p-8 sm:p-10 border border-white/[0.08] bg-[#07090d]/80 backdrop-blur-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white font-mono font-bold text-sm shrink-0">
              NIS
            </div>
            <div>
              <div className="text-white font-medium text-base">
                {lang === "kk"
                  ? "Алматы қаласындағы химия-биология бағытындағы Назарбаев Зияткерлік мектебі"
                  : "Nazarbayev Intellectual School of Chemistry and Biology, Almaty (Nauryzbay)"}
              </div>
              <div className="text-xs font-mono text-neutral-400 mt-1 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1 text-cyan-400">
                  <Microscope size={12} />
                  <span>{lang === "kk" ? "Ғылыми-зерттеу зертханасы" : "Neuro-engineering Research Lab"}</span>
                </span>
                <span className="text-neutral-600">•</span>
                <span>{lang === "kk" ? "Оқушылар жобасы" : "Student-led BCI Innovation"}</span>
              </div>
            </div>
          </div>

          <a
            href="#demo"
            className="px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-semibold hover:bg-neutral-200 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 shrink-0"
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
          <a href="#team" className="hover:text-white transition-colors">
            {t.nav.team}
          </a>
        </div>
      </div>
    </footer>
  );
}
