"use client";

import React, { useState } from "react";
import { UserCheck, Activity, Split, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CascadeSection() {
  const [activeGate, setActiveGate] = useState<number | null>(null);

  const gates = [
    {
      num: "01",
      icon: UserCheck,
      question: "Бұл сізге шынымен көмектесе ме?",
      rule: "«Пайдасы жоқ па — тиіспе»",
      simpleText:
        "Әр адамның ми құрылымы әртүрлі. Жүйе алдымен сіздің ми ерекшелігіңізді зерттейді. Егер жаңа алгоритм сізге нақты көмек бермесе, ол өшіп тұрады — босқа тиісіп қате жібермейді.",
      result: "Тек пайдасы расталған жағдайда ғана қосылады",
    },
    {
      num: "02",
      icon: Activity,
      question: "Шынымен кедергі пайда болды ма?",
      rule: "«Шу жоқ па — сигнал таза»",
      simpleText:
        "Сіз тамақ шайнағанда немесе жақ бұлшықеттеріңіз қимылдағанда ғана жүйе дабыл қағады. Егер ми сигналы таза болса, қорғаныс үнсіз қалады — сигналға ешкім қол сұқпайды.",
      result: "Шайнау шуы тіркелгенде ғана оянады",
    },
    {
      num: "03",
      icon: Split,
      question: "Екі бағдарлама дауласып қалды ма?",
      rule: "«Қайшылық болғанда ғана тексеру»",
      simpleText:
        "Негізгі бағдарлама мен сарапшы жасанды интеллект екі түрлі команда ұсынғанда ғана шешім қайта қаралады. Егер екеуі бірдей ойлап тұрса, артық түзету жасалмайды.",
      result: "Екі түрлі болжам болғанда ғана қаралады",
    },
    {
      num: "04",
      icon: ShieldCheck,
      question: "Жаңа шешімге 100% сенім бар ма?",
      rule: "«Күмән болса — адамның өз таңдауы сақталады»",
      simpleText:
        "Сарапшы модель өзінің жаңа болжамына әбден көзі жеткенде ғана команданы түзетеді. Кішкене күмән немесе сенімсіздік болса, өзгертуге тыйым салынып, адамның алғашқы ниеті сақталады.",
      result: "Күмәнді түзетулерге қатаң тыйым салынады",
    },
  ];

  return (
    <section id="cascade" className="py-28 px-6 md:px-12 bg-[#0c0e12] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-4 flex items-center gap-2">
            <ShieldCheck size={14} />
            <span>04 // 4 Қорғаныс Шлюзі</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight mb-6">
            Жүйе адамның ниетін қалай сақтап қалады?
          </h2>
          <p className="text-base text-neutral-300 leading-relaxed font-light">
            MIORA қарапайым ережемен жұмыс істейді: егер команданы өзгерту қауіпті немесе күмәнді болса — адамның алғашқы шешімі қаз-қалпында сақталады. Түзету енгізу үшін төмендегі 4 сүзгінің барлығы бірдей рұқсат беруі керек.
          </p>
        </div>

        {/* 4 Clean Gate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gates.map((gate, index) => {
            const Icon = gate.icon;
            return (
              <div
                key={gate.num}
                className="p-8 sm:p-10 rounded-2xl border border-white/10 bg-[#050608] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-950/40 transition-colors">
                        <Icon size={20} />
                      </div>
                      <span className="font-mono text-xs text-neutral-400 tracking-wider">
                        ШЛЮЗ {gate.num}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400">
                      МІНДЕТТІ ҚАДАМ
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-normal text-white mb-2 leading-snug">
                    {gate.question}
                  </h3>

                  <div className="text-xs font-mono text-cyan-400 font-medium mb-4">
                    {gate.rule}
                  </div>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-6">
                    {gate.simpleText}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 size={15} />
                  <span>{gate.result}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
