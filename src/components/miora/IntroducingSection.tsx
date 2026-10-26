"use client";

import React from "react";
import ActionNode from "@/components/ActionNode";
import { ShieldCheck, Cpu, Layers, Sparkles } from "lucide-react";

export default function IntroducingSection() {
  return (
    <section id="reveal" className="py-32 px-6 md:px-12 bg-[#0c0e12] border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Category kicker */}
        <div className="font-mono text-xs tracking-[0.25em] text-[#757575] uppercase mb-4">
          02 // Technological Breakthrough
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white max-w-4xl tracking-tight leading-[1.08] mb-16">
          MIORA сигналды себепсіз өзгертпейді. Ол адамның бастапқы ниетін қорғайды.
        </h2>

        {/* Dual column: 3D Cortical Hardware Video + Bencho ActionNode */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Cortical Array Video Loop */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#050608] group">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[440px] object-cover scale-105 group-hover:scale-100 transition-transform duration-700 opacity-80"
              src="/videos/layer7_array.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-[#9ba3af] border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
                <span className="text-white">CORTICAL ARRAY INTERFACE</span>
              </div>
              <span className="text-[#757575]">MICRO-ELECTRODE SURFACE</span>
            </div>
          </div>

          {/* Right: Technical Explanation & Bencho ActionNode */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6 text-[#9ba3af] text-base sm:text-lg leading-relaxed font-light">
              <p>
                Дәстүрлі BCI сүзгілері сигналды үнемі агрессивті тазалауға немесе кез келген ауытқу кезінде команданы бірден қайта жазуға тырысады. Бұл жиі дұрыс командалардың өзін бұзып, қауіпті жалған түзетулерге (Weak HARM) соқтырады.
              </p>
              <p>
                <strong className="text-white font-medium">MIORA каскадының принципі:</strong> Егер қосымша эксперт белгіленген 4 қатаң критерийдің бәрін толық қанағаттандырмаса, жүйе базалық шешімді өзгеріссіз сақтайды.
              </p>
            </div>

            {/* Embedded Bencho Action Node interactive widget */}
            <div className="pt-4 flex flex-col items-start">
              <div className="font-mono text-xs text-[#757575] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Cpu size={14} className="text-[#00e5ff]" />
                <span>Интерактивті түйін (Action Node): басқару батырмаларын ашу үшін курсорды жақындатыңыз</span>
              </div>

              <div className="p-4 rounded-2xl border border-white/10 bg-[#050608]">
                <ActionNode
                  node="Cascade Gate 01 // Decision Node"
                  description="Төрт қорғаныс критерийі толық орындалғанда ғана түзетуге рұқсат беретін сәулелі түйін."
                  count={4}
                  bounce={25}
                  corner={20}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4-Gate Feature Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-16 border-t border-white/10">
          <div className="p-6 rounded-xl border border-white/10 bg-[#050608]/60">
            <div className="font-mono text-xs text-[#00e5ff] uppercase tracking-widest mb-3">
              Gate 01
            </div>
            <h3 className="text-lg font-normal text-white mb-2">User Benefit Gate</h3>
            <p className="text-xs text-[#9ba3af] leading-relaxed">
              Қосымша сарапшы осы нақты қолданушының оқыту деректерінде қателікті азайтқаны математикалық түрде расталған.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-[#050608]/60">
            <div className="font-mono text-xs text-[#00e5ff] uppercase tracking-widest mb-3">
              Gate 02
            </div>
            <h3 className="text-lg font-normal text-white mb-2">Noise Threshold</h3>
            <p className="text-xs text-[#9ba3af] leading-relaxed">
              ЭЭГ спектрінде байқалған жоғары жиілікті бұлшықет шуының қуаты белгіленген шекті деңгейден асқан жағдайда ғана іске қосылады.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-[#050608]/60">
            <div className="font-mono text-xs text-[#00e5ff] uppercase tracking-widest mb-3">
              Gate 03
            </div>
            <h3 className="text-lg font-normal text-white mb-2">Decoder Disagreement</h3>
            <p className="text-xs text-[#9ba3af] leading-relaxed">
              Базалық декодер мен қосымша эксперт бір-бірінен өзгеше командаларды ұсынғанда ғана каскад тексерісі жалғасады.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-white/10 bg-[#050608]/60">
            <div className="font-mono text-xs text-[#00e5ff] uppercase tracking-widest mb-3">
              Gate 04
            </div>
            <h3 className="text-lg font-normal text-white mb-2">Classification Margin</h3>
            <p className="text-xs text-[#9ba3af] leading-relaxed">
              Қосымша эксперттің шешім қабылдау сенімділігі базалық декодерге қарағанда жеткілікті үлкен отступпен басым болуы тиіс.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
