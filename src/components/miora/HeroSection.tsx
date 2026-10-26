"use client";

import React from "react";
import { ChevronDown, Shield, Activity, Cpu } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center px-6 pt-32 pb-12 overflow-hidden bg-[#050608]"
    >
      {/* 1. Cinematic Background Video (Precision Neuroscience Style) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-45 scale-105 transition-opacity duration-1000"
          src="/videos/hero_bg.mp4"
        />
        {/* Film grain and atmospheric gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050608] via-transparent to-[#050608]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608]/80 via-transparent to-[#050608]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#050608_80%)]" />
      </div>

      {/* 2. Top Kicker Telemetry Badge */}
      <div className="relative z-10 pt-4">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/15 bg-[#0c0e12]/80 backdrop-blur-md text-[11px] font-mono tracking-[0.2em] text-[#d7e2e9] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
          <span>MIORA // NEURAL SIGNAL INTEGRITY</span>
          <span className="text-white/20">|</span>
          <span className="text-[#9ba3af]">V18 OFFLINE PROTOCOL</span>
        </div>
      </div>

      {/* 3. Central Monumental Editorial Statement */}
      <div className="relative z-10 max-w-6xl mx-auto my-auto text-center flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[-0.035em] text-white leading-[1.02] mb-8 max-w-5xl">
          The brain-computer interface that protects intent.
        </h1>

        <div className="text-lg sm:text-xl md:text-2xl text-[#d7e2e9] font-light tracking-tight max-w-3xl mb-6">
          “Protecting the signal. Preserving the intent.”
        </div>

        <p className="text-sm sm:text-base text-[#9ba3af] max-w-2xl leading-relaxed font-light mb-10">
          Адам шайнағанда пайда болатын бұлшықет кедергілерінен (EMG) ми сигналдарын қорғайтын және жалған түзетулердің алдын алатын 4 деңгейлі шешім қорғанысы.
        </p>

        {/* Dual CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#challenge"
            className="px-7 py-3.5 rounded-full bg-white text-black text-xs font-mono tracking-wider font-semibold hover:bg-[#d7e2e9] transition-all shadow-xl"
          >
            ЗЕРТТЕУМЕН ТАНЫСУ
          </a>
          <a
            href="#cascade"
            className="px-7 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-xs font-mono tracking-wider hover:bg-white/10 transition-all"
          >
            4-GATE CASCADE КӨРУ
          </a>
        </div>
      </div>

      {/* 4. Bottom Scientific Metrics Strip & Scroll Cue */}
      <div className="relative z-10 w-full max-w-7xl mx-auto border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#9ba3af] tracking-wider uppercase">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">9 ҚАТЫСУШЫ</span>
            <span className="text-[#757575]">(ЭЭГ зерттеуі)</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <span className="text-[#00e5ff] font-medium">-6.1 П.П.</span>
            <span className="text-[#757575]">(Қателіктердің төмендеуі)</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <span className="text-[#00e676] font-medium">4.7% → 3.9%</span>
            <span className="text-[#757575]">(Weak HARM төмендеуі)</span>
          </div>
        </div>

        <a
          href="#challenge"
          className="flex items-center gap-2 text-[#757575] hover:text-white transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
