"use client";

import React, { useState, useEffect } from "react";
import { Activity, ShieldCheck, Cpu, Terminal, Radio } from "lucide-react";

export default function HumanSection() {
  const [waveOffset, setWaveOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveOffset((prev) => (prev + 2) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Generate dynamic neural SVG path
  const generateWave = (offset: number) => {
    const points = [];
    const width = 280;
    const height = 40;
    const mid = height / 2;

    for (let x = 0; x <= width; x += 4) {
      const rad = ((x + offset) * Math.PI) / 60;
      const y = mid + Math.sin(rad) * 12 + Math.cos(rad * 2.3) * 4;
      points.push(`${x === 0 ? "M" : "L"} ${x} ${y.toFixed(1)}`);
    }
    return points.join(" ");
  };

  return (
    <section id="human" className="py-32 px-6 md:px-12 bg-[#050608] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Kicker */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="font-mono text-xs tracking-[0.25em] text-[#757575] uppercase mb-4 flex items-center justify-center gap-2">
            <Radio size={14} className="text-cyan-400 animate-pulse" />
            <span>03 // Клиникалық миссия және адам тәжірибесі</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight mb-8">
            Ми сигналдарының дербестігін қорғау.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            Ми-компьютер интерфейсінің басты мақсаты — қозғалыс қабілеті шектелген жандарға қоршаған ортамен еркін байланыс жасауға және цифрлық әлемді өз ниетімен басқаруға толық сенімділік беру.
          </p>
        </div>

        {/* Cinematic Video Container with Dynamic BCI Neural HUD Overlay */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#0c0e12] shadow-2xl max-w-5xl mx-auto mb-20 group">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[520px] md:h-[620px] object-cover scale-100 group-hover:scale-[1.02] transition-transform duration-1000 filter brightness-90 contrast-110"
          >
            <source src="/videos/patient_chair.webm" type="video/webm" />
            <source src="/videos/patient_chair.mov" type="video/quicktime" />
          </video>

          {/* Vignette & Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-[#050608]/40 opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050608]/50 via-transparent to-[#050608]/50 pointer-events-none" />

          {/* Live High-Tech BCI Telemetry HUD Overlay (Top-Left) */}
          <div className="absolute top-6 left-6 flex flex-col gap-2">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-[#050608]/85 backdrop-blur-md text-[11px] font-mono text-[#d7e2e9]">
              <span className="w-2 h-2 rounded-full bg-[#00e676] animate-pulse" />
              <span>CLINICAL PARTICIPANT // BCI LINK ACTIVE</span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#050608]/70 backdrop-blur-md text-[10px] font-mono text-neutral-400">
              <span className="text-cyan-400">CHANNEL:</span> C3, Cz, C4 (250 Hz)
            </div>
          </div>

          {/* Dynamic Animated EEG Waveform HUD (Top-Right) */}
          <div className="absolute top-6 right-6 hidden md:flex flex-col items-end gap-1 px-4 py-2.5 rounded-2xl border border-white/10 bg-[#050608]/85 backdrop-blur-md">
            <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400">
              <Activity size={12} className="animate-pulse" />
              <span>LIVE EEG MU-RHYTHM (8–13 HZ)</span>
            </div>
            <svg width="220" height="32" className="overflow-visible mt-1">
              <path
                d={generateWave(waveOffset)}
                fill="none"
                stroke="#00e5ff"
                strokeWidth="1.75"
                strokeLinecap="round"
                className="opacity-90"
              />
            </svg>
          </div>

          {/* Bottom Telemetry Footer */}
          <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-t border-white/15 pt-6 text-xs font-mono text-[#9ba3af]">
            <div>
              <div className="text-white text-base font-sans font-medium mb-1">
                Қатысушының нақты уақыттағы байланыс сессиясы
              </div>
              <div className="text-neutral-400">
                Офлайн сынақ барысында шайнау кедергілеріне қарамастан адам ниетінің бұрмаланбай сақталуы
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="px-3 py-1 rounded border border-white/15 bg-white/5 text-[11px] text-white">
                9 ҚАТЫСУШЫ
              </span>
              <span className="px-3 py-1 rounded border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-[11px] font-medium">
                INTEGRITY 99.8%
              </span>
            </div>
          </div>
        </div>

        {/* Editorial Statement (Precision Style) */}
        <div className="max-w-4xl mx-auto text-center border-y border-white/10 py-16">
          <p className="text-2xl sm:text-3xl md:text-4xl font-normal text-white leading-relaxed tracking-tight mb-6">
            «Біз адамның ниетін сақтайтын, әрбір команданың сенімділігіне кепілдік беретін сенімді BCI архитектурасын жасаймыз.»
          </p>
          <div className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase">
            // MIORA CLINICAL RESEARCH INITIATIVE
          </div>
        </div>
      </div>
    </section>
  );
}
