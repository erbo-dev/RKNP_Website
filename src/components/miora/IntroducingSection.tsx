"use client";

import React from "react";
import { Shield, CheckCircle2, Lock, Cpu, Sparkles } from "lucide-react";

export default function IntroducingSection() {
  return (
    <section id="reveal" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      {/* Category header */}
      <div className="font-mono text-xs tracking-[0.25em] text-brand-secondary uppercase mb-6 flex items-center gap-2">
        <Sparkles size={14} />
        <span>03 // MIORA шешімі</span>
      </div>

      <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal text-white max-w-5xl tracking-tight leading-[1.05] mb-12">
        MIORA сигналды себепсіз өзгертпейді. Ол шешімнің дұрыстығын қорғайды.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6 text-[#9ba3af] text-base sm:text-lg leading-relaxed font-light">
          <p>
            Дәстүрлі тәсілдер сигналды үнемі сүзуге немесе күдікті командаларды автоматты түрде қайта жазуға тырысады. Алайда мұндай агрессивті араласу жиі дұрыс командаларды да бұзып, BCI сенімділігін төмендетеді.
          </p>
          <p>
            <strong className="text-white font-medium">MIORA философиясы:</strong> Егер қосымша сарапшының түзетуі қатаң 4 критерийге сай келмесе, жүйе базалық шешімді қол сұқпай сол күйінде қалдырады. Бұл «зиян келтірмеу» қағидасын қамтамасыз етеді.
          </p>
        </div>

        {/* Conceptual Diagram Card */}
        <div className="p-8 sm:p-10 rounded-2xl border border-brand-secondary/30 bg-gradient-to-br from-brand-secondary/10 via-[#0c0e12] to-[#050608] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-brand-secondary/20 border border-brand-secondary/40 flex items-center justify-center text-brand-secondary">
              <Shield size={20} />
            </div>
            <div>
              <div className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
                Decision Protection Layer
              </div>
              <div className="text-[11px] font-mono text-[#757575]">
                Шешім қабылдаудың қорғаныс каскады
              </div>
            </div>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-lg border border-white/10 bg-[#050608]/80 flex justify-between items-center">
              <span className="text-[#9ba3af]">Бастапқы декодер:</span>
              <span className="text-white font-semibold">Негізгі қозғалыс ниеті</span>
            </div>

            <div className="text-center text-brand-secondary text-[11px]">
              ↓ ШАЙНАУ КЕДЕРГІСІ ТІРКЕЛДІ
            </div>

            <div className="p-3 rounded-lg border border-brand-secondary/30 bg-brand-secondary/5 flex justify-between items-center text-white">
              <span className="text-brand-secondary">MIORA 4-Шлюздік тексерісі:</span>
              <span className="text-brand-success font-semibold">Тек толық негізделсе ғана</span>
            </div>

            <div className="text-center text-brand-success text-[11px]">
              ↓ ҚАУІПСІЗ НӘТИЖЕ
            </div>

            <div className="p-3 rounded-lg border border-brand-success/30 bg-brand-success/10 flex justify-between items-center text-brand-success">
              <span>Қорғалған команда:</span>
              <span className="font-bold">Қателіктер -6.1% төмендеді</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
