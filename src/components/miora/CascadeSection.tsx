"use client";

import React, { useState } from "react";
import { UserCheck, Activity, Split, TrendingUp, Check, X, ArrowDown } from "lucide-react";

export default function CascadeSection() {
  const [activeGate, setActiveGate] = useState<number | null>(null);

  const gates = [
    {
      num: "01",
      id: "GATE_01_PERSONALIZED",
      icon: UserCheck,
      title: "Жеке бейімделген авторландыру",
      subtitle: "Personalized Authorization",
      condition: "Қосымша сарапшы моделі осы пайдаланушының оқыту деректерінде нақты пайда әкелген жағдайда ғана рұқсат етіледі.",
      logicFormula: "Gain(Expert, User_i) > Threshold_gain",
      rationale: "Әр адамның ми құрылымы мен шайнау бұлшықеттерінің белсенділігі жеке. Егер сарапшы бұл қатысушыға пайда бермесе, ол белсендірілмейді.",
    },
    {
      num: "02",
      id: "GATE_02_NOISE_ENERGY",
      icon: Activity,
      title: "Жоғары жиілікті шу шегі",
      subtitle: "Noise Energy Threshold",
      condition: "Байқалған жоғары жиілікті ЭМГ шуы (40–100 Гц) берілген шекті мәннен асып түсуі тиіс.",
      logicFormula: "Power_HF(40-100Hz) > Noise_Floor_θ",
      rationale: "Таза ЭЭГ кезінде сарапшыны қосудың қажеті жоқ. Тек айтарлықтай бұлшықет артефактісі тіркелгенде ғана қорғаныс кезеңі ашылады.",
    },
    {
      num: "03",
      id: "GATE_03_DISAGREEMENT",
      icon: Split,
      title: "Декодерлердің сәйкессіздігі",
      subtitle: "Decoder Disagreement",
      condition: "Базалық декодер мен қосымша сарапшы мүлдем басқа екі команда ұсынуы қажет.",
      logicFormula: "Prediction_base ≠ Prediction_expert",
      rationale: "Егер екі алгоритм де бірдей команданы болжап тұрса, бастапқы шешімді өзгертудің және қосымша есептеулер жүргізудің мәні жоқ.",
    },
    {
      num: "04",
      id: "GATE_04_CONFIDENCE_MARGIN",
      icon: TrendingUp,
      title: "Сарапшының сенімділік маржасы",
      subtitle: "Expert Confidence Margin",
      condition: "Қосымша сарапшының сенімділік маржасы базалық декодерден анық басым болуы шарт.",
      logicFormula: "Margin(Expert) - Margin(Base) ≥ Δ_margin",
      rationale: "Егер сарапшы өз шешіміне жеткілікті сенімді болмаса, күмәнді түзету енгізуге тыйым салынады және базалық команда сақталады.",
    },
  ];

  return (
    <section id="cascade" className="py-32 px-6 md:px-12 bg-[#0c0e12] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs tracking-[0.25em] text-[#757575] uppercase mb-4">
            04 // Архитектуралық логика
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight mb-6">
            Төрт қорғаныс шлюзі: Жүйе қалай жұмыс істейді?
          </h2>
          <p className="text-sm sm:text-base text-[#9ba3af] leading-relaxed">
            Команданы өзгерту үшін төмендегі 4 шарттың <strong>барлығы бірдей</strong> орындалуы міндетті. Егер тіпті біреуі орындалмаса — жүйе бастапқы шешімді сақтайды.
          </p>
        </div>

        {/* 4 Gates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {gates.map((gate, idx) => {
            const Icon = gate.icon;
            const isHovered = activeGate === idx;

            return (
              <div
                key={gate.id}
                onMouseEnter={() => setActiveGate(idx)}
                onMouseLeave={() => setActiveGate(null)}
                className={`p-8 sm:p-10 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                  isHovered
                    ? "border-brand-secondary bg-[#050608] shadow-[0_0_30px_rgba(0,229,255,0.15)]"
                    : "border-white/10 bg-[#050608]/70 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-brand-secondary">
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-[#757575] uppercase tracking-widest">
                          {gate.id}
                        </span>
                        <div className="font-mono text-xs text-brand-secondary font-semibold">
                          ШЛЮЗ {gate.num}
                        </div>
                      </div>
                    </div>

                    <div className="px-2.5 py-1 rounded border border-white/10 text-[10px] font-mono text-[#757575]">
                      МІНДЕТТІ ШАРТ
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-medium text-white mb-1">
                    {gate.title}
                  </h3>
                  <div className="font-mono text-xs text-[#757575] mb-4">
                    {gate.subtitle}
                  </div>

                  <p className="text-sm text-[#9ba3af] leading-relaxed mb-6">
                    {gate.condition}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-3">
                  <div className="p-3 rounded-lg bg-[#0c0e12] border border-white/5 font-mono text-xs text-brand-primary flex items-center justify-between">
                    <span className="text-[#757575]">Формула:</span>
                    <span className="text-brand-secondary font-bold">{gate.logicFormula}</span>
                  </div>
                  <p className="text-xs text-[#757575] leading-relaxed">
                    {gate.rationale}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fallback Principle Banner */}
        <div className="p-6 sm:p-8 rounded-2xl border border-brand-accent/30 bg-brand-accent/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-accent/15 border border-brand-accent/40 flex items-center justify-center text-brand-accent shrink-0">
              <Check size={24} />
            </div>
            <div>
              <div className="text-white font-medium text-base sm:text-lg mb-1">
                Қауіпсіздік кепілі: Егер шарттар орындалмаса не болады?
              </div>
              <p className="text-xs sm:text-sm text-[#9ba3af]">
                Егер 4 шлюздің біреуі болсын сәтсіз өтсе, бастапқы декодердің командасы қаз-қалпында сақталады. Бұл қате түзетулер қаупін (HARM) 4.7%-дан 3.9%-ға дейін азайтты.
              </p>
            </div>
          </div>
          <div className="font-mono text-xs px-4 py-2 rounded-lg bg-black border border-white/15 text-white whitespace-nowrap">
            DEFAULT: PRESERVE BASELINE
          </div>
        </div>
      </div>
    </section>
  );
}
