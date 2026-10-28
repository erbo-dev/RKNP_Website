"use client";

import React, { useState } from "react";
import { UserCheck, Activity, Split, ShieldCheck, CheckCircle2, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CascadeSection() {
  const { lang, t } = useLanguage();
  const [hoveredGate, setHoveredGate] = useState<number | null>(null);

  const gates = lang === "kk" ? [
    {
      num: "01",
      id: "GATE 01 // INDIVIDUAL FIT",
      icon: UserCheck,
      question: "Бұл адамға жүйе шынымен көмектесе ме?",
      rule: "Пайдасы болмаса — босқа араласпайды",
      simpleText:
        "Әр адамның ми құрылымы мен бұлшықет қимылы әртүрлі. Қосымша сарапшы осы адамның сигналына нақты көмек беретіні расталса ғана қосылады. Пайдасы жоқ болса — өшірулі қалады.",
      status: "PASS ON BENEFIT",
    },
    {
      num: "02",
      id: "GATE 02 // NOISE DETECTION",
      icon: Activity,
      question: "Шынымен шайнау кедергісі бар ма?",
      rule: "Шу болмаса — сигнал өзгермейді",
      simpleText:
        "Адам тамақ шайнағанда немесе жағын қимылдатқанда ғана сүзгі іске қосылады (Шу шегі ≥ 35%). Ми сигналы таза болған кезде жүйе ешқандай өзгеріс енгізбейді.",
      status: "TRIGGER ON EMG",
    },
    {
      num: "03",
      id: "GATE 03 // DISAGREEMENT CHECK",
      icon: Split,
      question: "Екі алгоритмде қайшылық бар ма?",
      rule: "Екеуі келісіп тұрса — артық түзету жасалмайды",
      simpleText:
        "Негізгі декодер мен қосымша сарапшы екі бөлек команда көрсеткенде ғана тексеру басталады. Егер екеуінің болжамы бірдей болса — шешім бірден мақұлданады.",
      status: "RESOLVE CONFLICT",
    },
    {
      num: "04",
      id: "GATE 04 // CONFIDENCE MARGIN",
      icon: ShieldCheck,
      question: "Жаңа шешімге толық сенімдіміз бе?",
      rule: "Күмән болса — алғашқы ниет бұзылмайды",
      simpleText:
        "Қосымша сарапшы базалық модельден кемінде 15% артық сенімділікке (Δ ≥ 15 p.p.) ие болғанда ғана команда түзеледі. Кішкене күмән болса, бастапқы шешім сақталады.",
      status: "SECURED INTENT",
    },
  ] : [
    {
      num: "01",
      id: "GATE 01 // INDIVIDUAL FIT",
      icon: UserCheck,
      question: "Does this user verifiably benefit from the expert?",
      rule: "No benefit — No intervention",
      simpleText:
        "Neuroanatomy and jaw muscle dynamics vary across individuals. The auxiliary expert engages only if verified to improve decoding for this specific participant's profile.",
      status: "PASS ON BENEFIT",
    },
    {
      num: "02",
      id: "GATE 02 // NOISE DETECTION",
      icon: Activity,
      question: "Is severe EMG muscle interference active?",
      rule: "Clean signal — Zero alteration",
      simpleText:
        "Active only when high-frequency jaw muscle activity exceeds the 35% threshold. During quiet clean EEG periods, the cascade remains completely disarmed.",
      status: "TRIGGER ON EMG",
    },
    {
      num: "03",
      id: "GATE 03 // DISAGREEMENT CHECK",
      icon: Split,
      question: "Do baseline and expert decoders conflict?",
      rule: "Consensus — Instant bypass",
      simpleText:
        "Intervention is only considered when the baseline decoder and the expert suggest conflicting motor intentions. If both agree, no modification is needed.",
      status: "RESOLVE CONFLICT",
    },
    {
      num: "04",
      id: "GATE 04 // CONFIDENCE MARGIN",
      icon: ShieldCheck,
      question: "Does the expert clear the statistical margin?",
      rule: "In doubt — Baseline preserved",
      simpleText:
        "The expert must exceed baseline confidence by at least 15 percentage points (Δ ≥ 15 p.p.). Any borderline prediction causes the system to safely hold the baseline command.",
      status: "SECURED INTENT",
    },
  ];

  return (
    <section id="cascade" aria-labelledby="cascade-heading" className="py-28 px-6 md:px-12 bg-[#050608] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-4 flex items-center gap-2">
            <ShieldCheck size={14} className="animate-pulse" />
            <span>{t.cascade.kicker}</span>
          </div>
          <h2 id="cascade-heading" className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08] mb-6">
            {t.cascade.headline} {t.cascade.headlineEmphasis}.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-light">
            {t.cascade.description}
          </p>
        </div>

        {/* Continuous 4-Gate Architectural Pipeline Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-white/[0.08] divide-y lg:divide-y-0 md:divide-x divide-white/[0.08] mb-12">
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
                  <span>{lang === "kk" ? "ШАРТ САҚТАЛУЫ" : "EVALUATION"}</span>
                  <span className="text-emerald-400">{lang === "kk" ? "МІНДЕТТІ" : "STRICT AND"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Decision Bifurcation Visualizer */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#07090d]/90 backdrop-blur-xl p-8 sm:p-10">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-6 flex items-center justify-between border-b border-white/[0.06] pb-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>{lang === "kk" ? "Каскадтың екі жақты шешім тармағы" : "Cascade Decision Bifurcation Architecture"}</span>
            </span>
            <span className="text-[10px] text-neutral-500 font-mono">DETERMINISTIC EVALUATION</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: All 4 Pass */}
            <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-950/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2">
                  <CheckCircle2 size={16} />
                  <span>{t.cascade.passOutcomeTitle}</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed font-light">
                  {t.cascade.passOutcomeDesc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-500/20 font-mono text-xs text-emerald-300 flex items-center justify-between">
                <span>CONDITION: Gate 1 ∧ Gate 2 ∧ Gate 3 ∧ Gate 4</span>
                <span className="font-bold">→ OVERRIDE</span>
              </div>
            </div>

            {/* Right: Any Fail */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-neutral-300 font-mono text-xs uppercase tracking-wider mb-2">
                  <ShieldAlert size={16} className="text-amber-400" />
                  <span>{t.cascade.blockOutcomeTitle}</span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  {t.cascade.blockOutcomeDesc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-xs text-neutral-400 flex items-center justify-between">
                <span>CONDITION: ¬(Gate 1 ∧ Gate 2 ∧ Gate 3 ∧ Gate 4)</span>
                <span className="font-semibold text-white">→ PRESERVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
