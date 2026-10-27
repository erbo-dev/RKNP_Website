"use client";

import React, { useState } from "react";
import { UserCheck, Activity, Split, ShieldCheck } from "lucide-react";

export default function CascadeSection() {
  const [hoveredGate, setHoveredGate] = useState<number | null>(null);

  const gates = [
    {
      num: "01",
      id: "GATE 01 // INDIVIDUAL FIT",
      icon: UserCheck,
      question: "Бұл адамға жүйе шынымен көмектесе ме?",
      rule: "Пайдасы болмаса — босқа араласпайды",
      simpleText:
        "Әр адамның ми құрылымы мен бұлшықет қимылы әртүрлі. Қосымша сүзгі осы адамның сигналына нақты көмек беретіні расталса ғана қосылады. Пайдасы жоқ болса — өшірулі қалады.",
      status: "PASS ON BENEFIT",
    },
    {
      num: "02",
      id: "GATE 02 // NOISE DETECTION",
      icon: Activity,
      question: "Шынымен шайнау кедергісі бар ма?",
      rule: "Шу болмаса — сигнал өзгермейді",
      simpleText:
        "Адам тамақ шайнағанда немесе жағын қимылдатқанда ғана сүзгі іске қосылады. Ми сигналы таза болған кезде жүйе ешқандай өзгеріс енгізбейді.",
      status: "TRIGGER ON EMG",
    },
    {
      num: "03",
      id: "GATE 03 // DISAGREEMENT CHECK",
      icon: Split,
      question: "Екі алгоритмде қайшылық бар ма?",
      rule: "Екеуі келісіп тұрса — артық түзету жасалмайды",
      simpleText:
        "Негізгі декодер мен қосымша модель екі бөлек команда көрсеткенде ғана тексеру басталады. Егер екеуінің болжамы бірдей болса — шешім бірден мақұлданады.",
      status: "RESOLVE CONFLICT",
    },
    {
      num: "04",
      id: "GATE 04 // CONFIDENCE MARGIN",
      icon: ShieldCheck,
      question: "Жаңа шешімге толық сенімдіміз бе?",
      rule: "Күмән болса — алғашқы ниет бұзылмайды",
      simpleText:
        "Қосымша модель жаңа нұсқаға толық көзі жеткенде ғана команда түзеледі. Кішкене күмән немесе белгісіздік болса, адамның алғашқы ниеті өзгеріссіз сақталады.",
      status: "SECURED INTENT",
    },
  ];

  return (
    <section id="cascade" className="py-28 px-6 md:px-12 bg-[#050608] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-4 flex items-center gap-2">
            <ShieldCheck size={14} className="animate-pulse" />
            <span>04 // 4 Қорғаныс Шлюзі</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08] mb-6">
            Жүйе адамның ниетін{" "}
            <span className="font-serif italic text-white/95 font-normal">
              қалай қорғап қалады?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-light">
            MIORA нөлдік қате қағидасымен жұмыс істейді: егер қандай да бір күмән туса — адамның алғашқы ниеті бұзылмай сақталады. Команданы түзету үшін төмендегі 4 сүзгіден қатар сүрінбей өтуі қажет.
          </p>
        </div>

        {/* Continuous 4-Gate Architectural Pipeline Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-white/[0.08] divide-y lg:divide-y-0 md:divide-x divide-white/[0.08]">
          {gates.map((gate, index) => {
            const Icon = gate.icon;
            const isHovered = hoveredGate === index;
            return (
              <div
                key={gate.num}
                onMouseEnter={() => setHoveredGate(index)}
                onMouseLeave={() => setHoveredGate(null)}
                className={`p-8 sm:p-10 flex flex-col justify-between transition-colors duration-300 ${
                  isHovered ? "bg-white/[0.02]" : "bg-transparent"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-2xl font-light text-neutral-600">
                      /{gate.num}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400">
                      {gate.status}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-400 mb-6">
                    <Icon size={18} />
                  </div>

                  <div className="font-mono text-[10px] text-neutral-500 tracking-wider uppercase mb-2">
                    {gate.id}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-normal text-white mb-3 leading-snug">
                    {gate.question}
                  </h3>

                  <div className="text-xs font-mono text-cyan-300 mb-4 bg-cyan-950/20 px-3 py-1.5 rounded-lg border border-cyan-500/20 inline-block">
                    «{gate.rule}»
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
                    {gate.simpleText}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>ШАРТ САҚТАЛУЫ</span>
                  <span className="text-emerald-400">МІНДЕТТІ</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
