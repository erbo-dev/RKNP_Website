"use client";

import React from "react";
import { Heart, Activity, ShieldCheck } from "lucide-react";

export default function HumanSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#050608] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Kicker */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="font-mono text-xs tracking-[0.25em] text-[#757575] uppercase mb-4">
            03 // Human Connection & Clinical Mission
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight mb-8">
            Restoring independence and connection for millions.
          </h2>
          <p className="text-base sm:text-lg text-[#9ba3af] leading-relaxed font-light">
            Ми-компьютер интерфейсінің басты мақсаты — қозғалыс қабілеті шектелген жандарға қоршаған ортамен еркін байланыс жасауға және цифрлық әлемді өз ойымен басқаруға мүмкіндік беру.
          </p>
        </div>

        {/* Cinematic Video Container: The Participant in Clinical Testing Chair */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#0c0e12] shadow-2xl max-w-5xl mx-auto mb-20 group">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[520px] md:h-[620px] object-cover scale-100 group-hover:scale-[1.02] transition-transform duration-1000"
          >
            <source src="/videos/patient_chair.webm" type="video/webm" />
            <source src="/videos/patient_chair.mov" type="video/quicktime" />
          </video>

          {/* Vignette & Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050608]/40 via-transparent to-[#050608]/40 pointer-events-none" />

          {/* Floating Clinical Telemetry HUD */}
          <div className="absolute top-6 left-6 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-[#050608]/80 backdrop-blur-md text-[11px] font-mono text-[#d7e2e9]">
            <span className="w-2 h-2 rounded-full bg-[#00e676] animate-pulse" />
            <span>CLINICAL PARTICIPANT RECORDING // BCI LINK ACTIVE</span>
          </div>

          <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-t border-white/15 pt-6 text-xs font-mono text-[#9ba3af]">
            <div>
              <div className="text-white text-base font-sans font-medium mb-1">
                Қатысушының нақты уақыттағы байланыс тәжірибесі
              </div>
              <div className="text-[#757575]">
                Офлайн сынақ барысында шайнау артефактілеріне қарамастан ниеттің сақталуы
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded border border-white/15 bg-white/5 text-[11px]">
                9 PARTICIPANTS
              </span>
              <span className="px-3 py-1 rounded border border-[#00e5ff]/30 bg-[#00e5ff]/10 text-[#00e5ff] text-[11px]">
                INTEGRITY VERIFIED
              </span>
            </div>
          </div>
        </div>

        {/* Editorial Serif Quote (Precision Neuroscience Signature Style) */}
        <div className="max-w-4xl mx-auto text-center border-y border-white/10 py-16">
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-serif italic text-white/95 leading-relaxed tracking-tight mb-8">
            “I want innovation that is also inclusive, reliable and dignifying.”
          </blockquote>
          <p className="text-sm sm:text-base font-mono uppercase tracking-[0.2em] text-[#757575]">
            «Біз адамның ниетін сақтайтын, әрбір команданың сенімділігіне кепілдік беретін технологияны дамытамыз.»
          </p>
        </div>
      </div>
    </section>
  );
}
