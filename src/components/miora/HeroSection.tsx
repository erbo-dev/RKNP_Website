"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[86vh] sm:min-h-screen flex flex-col justify-center items-center px-6 pt-20 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#050608]"
    >
      {/* Skip Link for Keyboard Accessibility */}
      <a href="#challenge" className="skip-link">
        {t.hero.skipLink}
      </a>

      {/* Cinematic Background Video with Pure Monochromatic Obsidian Grading */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-[center_30%] sm:object-center opacity-65 sm:opacity-50 scale-100 filter grayscale contrast-115 brightness-95 sm:brightness-90 transition-opacity duration-1000"
          src="/videos/hero_bg.mp4"
        />
        {/* Soft radial dampener behind central text zone + vertical vignettes */}
        <div className="absolute inset-0 bg-[#050608]/30 sm:bg-[#050608]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,#050608_30%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/80 via-transparent to-[#050608]" />
      </div>

      {/* Modern Architectural Corner Crosshairs (+) */}
      <div className="absolute top-24 left-8 sm:left-12 z-10 text-white/20 font-mono text-sm select-none pointer-events-none hidden md:block" aria-hidden="true">
        +
      </div>
      <div className="absolute top-24 right-8 sm:right-12 z-10 text-white/20 font-mono text-sm select-none pointer-events-none hidden md:block" aria-hidden="true">
        +
      </div>
      <div className="absolute bottom-12 left-8 sm:left-12 z-10 text-white/20 font-mono text-sm select-none pointer-events-none hidden md:block" aria-hidden="true">
        +
      </div>
      <div className="absolute bottom-12 right-8 sm:right-12 z-10 text-white/20 font-mono text-sm select-none pointer-events-none hidden md:block" aria-hidden="true">
        +
      </div>

      {/* Top Precision Protocol Badge */}
      <div className="relative z-10 mb-5 sm:mb-6 mt-0">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-[#090b10]/85 backdrop-blur-md text-[11px] font-mono tracking-[0.2em] text-neutral-300 uppercase shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00e5ff] animate-pulse" />
          <span className="text-white font-medium">MIORA</span>
          <span className="text-white/20">/</span>
          <span className="text-neutral-400">{t.hero.kicker}</span>
        </div>
      </div>

      {/* Central Monumental Editorial Statement */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <h1
          id="hero-heading"
          className="font-sans text-5xl sm:text-7xl lg:text-8xl xl:text-[92px] font-light tracking-[-0.035em] leading-[0.98] mb-6 text-white"
        >
          <span>{t.hero.titleRegular}</span>
          <span className="font-serif italic text-white/95 font-normal tracking-normal block sm:inline">
            {t.hero.titleEmphasis}.
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-xl leading-relaxed font-normal mb-8">
          {t.hero.description}
        </p>

        {/* Dual High-Contrast CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5">
          <a
            href="#demo"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black text-xs font-semibold tracking-wider hover:bg-neutral-200 active:scale-95 transition-all shadow-[0_4px_24px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            <span>{t.hero.ctaDemo}</span>
            <ArrowUpRight size={13} />
          </a>
          <a
            href="#challenge"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-xs font-medium tracking-wider hover:bg-white/10 hover:border-white/35 active:scale-95 transition-all flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            {t.hero.ctaResearch}
          </a>
        </div>
      </div>

      {/* Surgical Swiss Technical Telemetry Rail */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.08] bg-[#050608]/85 backdrop-blur-md px-6 md:px-12 py-3.5 hidden md:flex items-center justify-between text-[11px] font-mono tracking-wider text-neutral-400">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-white">{t.hero.metaProtocol}</span>
          </div>
          <span className="text-white/10">|</span>
          <div><span className="text-neutral-300">{t.hero.metaSignal}</span></div>
          <span className="text-white/10">|</span>
          <div><span className="text-emerald-400">{t.hero.metaFilter}</span></div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-neutral-400">
            ERR REDUCTION: <span className="text-white font-medium">-6.1 p.p. (38.5% → 32.4%)</span>
          </div>
          <span className="text-white/10">|</span>
          <a
            href="#research"
            className="flex items-center gap-1.5 text-cyan-400 hover:text-white transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded"
          >
            <span>{t.hero.metaPrinciple}</span>
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
