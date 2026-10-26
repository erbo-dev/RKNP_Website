"use client";

import React from "react";
import HeroBrain3D from "./HeroBrain3D";
import { ChevronDown, ShieldCheck, Cpu, Activity, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex flex-col justify-between items-center text-center px-6 pt-28 pb-12 overflow-hidden border-b border-white/10"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-secondary/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-brand-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Top telemetry badge */}
      <div className="relative z-10 pt-4">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md text-[11px] font-mono tracking-widest text-[#d7e2e9] uppercase">
          <span className="w-2 h-2 rounded-full bg-brand-secondary animate-ping" />
          <span>MIORA // NEURAL SIGNAL INTEGRITY</span>
        </div>
      </div>

      {/* Central Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto my-auto flex flex-col items-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-[-0.04em] text-white leading-[0.95] mb-6">
          MIORA
        </h1>

        <div className="text-xl sm:text-2xl md:text-3xl text-brand-primary font-light tracking-tight max-w-3xl mb-4">
          Protecting the signal. Preserving the intent.
        </div>

        <p className="text-xs sm:text-sm md:text-base text-[#9ba3af] font-mono max-w-2xl leading-relaxed mb-6">
          Ми-компьютер интерфейстерінің (BCI) сенімділігін қамтамасыз ететін эксперименттік шешімді қорғау деңгейі.
        </p>

        {/* 3D Brain Canvas */}
        <div className="w-full max-w-3xl relative">
          <HeroBrain3D />

          {/* Floating HUD Badges */}
          <div className="absolute top-6 left-2 sm:left-6 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-[#0c0e12]/80 backdrop-blur-md text-[11px] font-mono text-[#9ba3af]">
            <Activity size={12} className="text-brand-secondary" />
            <span>EEG SAMPLING: 250 HZ</span>
          </div>

          <div className="absolute top-6 right-2 sm:right-6 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-[#0c0e12]/80 backdrop-blur-md text-[11px] font-mono text-[#9ba3af]">
            <ShieldCheck size={12} className="text-brand-success" />
            <span>4-GATE CASCADE: ARMED</span>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#050608]/80 backdrop-blur-md text-[10px] font-mono text-[#757575] uppercase tracking-widest">
            <span>Курсормен 3D модельді айналдырыңыз</span>
          </div>
        </div>
      </div>

      {/* Bottom status & scroll cue */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs font-mono text-[#757575] tracking-wider uppercase">
        <div className="flex items-center gap-4">
          <span>9 PARTICIPANTS TESTED</span>
          <span className="hidden sm:inline">•</span>
          <span>-6.1% ERROR REDUCTION</span>
        </div>

        <a
          href="#problem"
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <span>Төмен қарай жылжыңыз</span>
          <ChevronDown size={14} className="animate-bounce text-brand-secondary" />
        </a>

        <div className="flex items-center gap-2 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
          <span>RESEARCH PROTOTYPE (NOT A MEDICAL DEVICE)</span>
        </div>
      </div>
    </section>
  );
}
