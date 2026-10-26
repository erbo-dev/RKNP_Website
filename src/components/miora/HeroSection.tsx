"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-16 overflow-hidden bg-[#050608]"
    >
      {/* 1. Cinematic Background Video with Pure Monochromatic Obsidian Grading */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 scale-105 filter grayscale contrast-125 brightness-75 transition-opacity duration-1000"
          src="/videos/hero_bg.mp4"
        />
        {/* Deep surgical dark gradient overlays - eliminates any warm or sepia cast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050608] via-transparent to-[#050608]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-transparent to-[#050608]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_15%,_#050608_85%)]" />
      </div>

      {/* Modern Architectural Corner Crosshairs (+) */}
      <div className="absolute top-24 left-8 sm:left-12 z-10 text-white/20 font-mono text-sm select-none pointer-events-none hidden md:block">
        +
      </div>
      <div className="absolute top-24 right-8 sm:right-12 z-10 text-white/20 font-mono text-sm select-none pointer-events-none hidden md:block">
        +
      </div>
      <div className="absolute bottom-10 left-8 sm:left-12 z-10 text-white/20 font-mono text-sm select-none pointer-events-none hidden md:block">
        +
      </div>
      <div className="absolute bottom-10 right-8 sm:right-12 z-10 text-white/20 font-mono text-sm select-none pointer-events-none hidden md:block">
        +
      </div>

      {/* 2. Top Precision Protocol Badge */}
      <div className="relative z-10 mb-6 mt-4 sm:mt-0">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-[#090b10]/80 backdrop-blur-md text-[11px] font-mono tracking-[0.2em] text-neutral-300 uppercase shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff] animate-pulse" />
          <span className="text-white font-medium">MIORA</span>
          <span className="text-white/20">/</span>
          <span className="text-neutral-400">NEURAL SIGNAL INTEGRITY</span>
        </div>
      </div>

      {/* 3. Central Monumental Editorial Statement */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-medium tracking-[-0.04em] text-white leading-[1.03] mb-6 max-w-5xl">
          The brain-computer interface that protects intent.
        </h1>

        <div className="text-lg sm:text-2xl text-neutral-200 font-light tracking-tight max-w-2xl mb-5">
          Protecting the signal. Preserving human intent.
        </div>

        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed font-normal mb-10">
          Адам шайнағанда пайда болатын бұлшықет кедергілерінен (EMG) ми сигналдарын қорғайтын және жалған командалардың алдын алатын 4 деңгейлі қорғаныс каскады.
        </p>

        {/* Dual High-Contrast CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#challenge"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black text-xs font-semibold tracking-wider hover:bg-neutral-200 active:scale-95 transition-all shadow-[0_4px_24px_rgba(255,255,255,0.2)]"
          >
            ЗЕРТТЕУМЕН ТАНЫСУ
          </a>
          <a
            href="#cascade"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-xs font-medium tracking-wider hover:bg-white/10 hover:border-white/35 active:scale-95 transition-all"
          >
            4-GATE КАСКАД КӨРУ
          </a>
        </div>
      </div>

      {/* 4. Elegant Minimal Corner Decors (Replacing the clunky bottom strip completely) */}
      <div className="absolute bottom-8 left-8 sm:left-12 z-10 hidden md:flex items-center gap-3 text-[11px] font-mono text-neutral-500 tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-neutral-400">RESEARCH PROTOCOL: OFFLINE-V18</span>
        <span className="text-white/10">|</span>
        <span className="text-neutral-500">SAMPLING: 250HZ // 4-GATE CASCADE</span>
      </div>

      <a
        href="#challenge"
        className="absolute bottom-8 right-8 sm:right-12 z-10 hidden md:flex items-center gap-3 text-[11px] font-mono tracking-widest text-neutral-400 hover:text-white transition-colors group"
      >
        <span>EXPLORE ARCHITECTURE</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-white/40 transition-colors">
          <div className="w-1 h-2 rounded-full bg-[#00e5ff] animate-bounce" />
        </div>
      </a>
    </section>
  );
}
