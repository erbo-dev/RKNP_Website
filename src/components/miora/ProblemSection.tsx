"use client";

import React, { useState } from "react";
import StepPlayer from "@/components/StepPlayer";
import ImageCompare from "@/components/ImageCompare";
import { AlertTriangle, Activity, ShieldAlert, Cpu } from "lucide-react";

export default function ProblemSection() {
  const [activeStep, setActiveStep] = useState(0);

  const stepDescriptions = [
    {
      title: "1-Қадам: Таза моторлық ниет (Clean Cortical Intent)",
      detail: "Пайдаланушы қол қозғалысын елестетеді. Моторлық қыртыста (C3, Cz, C4) тән сенсорлық-моторлық ырғақтар (Mu/Beta) қалыптасады.",
      status: "SIGNAL: NOMINAL // SNR: +18 dB",
      color: "text-[#00e5ff]",
    },
    {
      title: "2-Қадам: Шайнау артефактісінің пайда болуы (EMG Contamination)",
      detail: "Шайнау немесе жақ бұлшықеттерінің қозғалысы жоғары жиілікті (>30 Гц) қуатты электрлік импульстер тудырып, ЭЭГ сигналын басады.",
      status: "EMG NOISE DETECTED // SNR: -14 dB",
      color: "text-[#ff5252]",
    },
    {
      title: "3-Қадам: 4-Шлюзді қорғаныс каскады (4-Gate Verification)",
      detail: "MIORA автоматты түрде пайдаланушының пайдасын, шу шегін, декодерлердің қайшылығын және классификациялық отступты тексереді.",
      status: "GATE CHECK: 4/4 CONDITIONS ARMED",
      color: "text-[#ffab00]",
    },
    {
      title: "4-Қадам: Дұрыс шешімнің сақталуы (Signal Integrity Preserved)",
      detail: "Егер қосымша эксперттің шешімі толық негізделмесе, бастапқы шешім өзгеріссіз сақталады. Жалған түзетулердің (Weak HARM) алдын алады.",
      status: "VERIFIED // ERROR RATE REDUCED BY 6.1%",
      color: "text-[#00e676]",
    },
  ];

  return (
    <section id="challenge" className="py-28 px-6 md:px-12 bg-[#050608] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Category kicker */}
        <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-4 flex items-center gap-2">
          <AlertTriangle size={14} className="animate-pulse" />
          <span>01 // Негізгі кедергі // The Challenge</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white max-w-4xl tracking-tight leading-[1.08] mb-8">
          Today, brain–computer interfaces struggle when{" "}
          <span className="font-serif italic text-white/95 font-normal">
            real-world physiology
          </span>{" "}
          interferes with cortical intent.
        </h2>

        <p className="text-base sm:text-lg text-neutral-400 max-w-3xl leading-relaxed font-light mb-16">
          Адам тамақ шайнағанда (chewing) жақ бұлшықеттерінің электромиографиялық (EMG) шуы нәзік ЭЭГ толқындарынан ондаған есе асып түседі. Қарапайым сүзгілер мұндай кезде дұрыс командаларды да қате түзетіп, пайдаланушының сеніміне нұқсан келтіреді.
        </p>

        {/* Precision Swiss Structural Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] mb-20">
          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest mb-4 flex items-center justify-between">
                <span>01 // DECODER VULNERABILITY</span>
                <span className="text-rose-400">UNSHIELDED</span>
              </div>
              <div className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-3">
                38.5%
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                Базалық декодер қателігі
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Шайнау немесе жақ бұлшықеттері қимылдағанда, стандартты BCI алгоритмдері әрбір үшінші командада дерлік қателеседі.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-neutral-500">
              BASELINE: HIGH FALSE-POSITIVE RISK
            </div>
          </div>

          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest mb-4 flex items-center justify-between">
                <span>02 // SPECTRAL CONTAMINATION</span>
                <span className="text-amber-400">40–100 HZ</span>
              </div>
              <div className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-3 flex items-baseline gap-2">
                <span>+45</span>
                <span className="text-xl font-mono text-rose-400">dB</span>
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                Шайнау EMG импульсі
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Жақ бұлшықеттері тудыратын электрлік кернеу ми қыртысының нәзік микровольттық ЭЭГ сигналдарын басып тастайды.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-neutral-500">
              OVERLAP: MASSETER / TEMPORAL MUSCLE
            </div>
          </div>

          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest mb-4 flex items-center justify-between">
                <span>03 // 4-GATE VERIFICATION</span>
                <span className="text-emerald-400">PROTECTED</span>
              </div>
              <div className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-3 flex items-baseline gap-2">
                <span>0%</span>
                <span className="text-xs font-mono text-emerald-400">FALSE TRIGGER</span>
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                Қауіпсіздік кепілі
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Тек төрт қатаң шлюз қатар расталғанда ғана түзету енгізіледі. Күмәнді жағдайда адамның бастапқы ниеті сақталады.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-neutral-500">
              PRINCIPLE: "FIRST, DO NO HARM"
            </div>
          </div>
        </div>

        {/* Interactive Dual Bench: Bencho StepPlayer + Bencho ImageCompare */}
        <div className="relative rounded-2xl border border-white/[0.08] bg-[#07090d]/80 backdrop-blur-xl p-8 sm:p-12 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* Subtle Corner Reticles */}
          <div className="absolute top-3 left-4 font-mono text-[10px] text-white/20 select-none">+</div>
          <div className="absolute top-3 right-4 font-mono text-[10px] text-white/20 select-none">+</div>
          <div className="absolute bottom-3 left-4 font-mono text-[10px] text-white/20 select-none">+</div>
          <div className="absolute bottom-3 right-4 font-mono text-[10px] text-white/20 select-none">+</div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left: Interactive StepPlayer walkthrough (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="font-mono text-xs text-[#00e5ff] uppercase tracking-widest flex items-center gap-2">
              <Activity size={14} />
              <span>Артефактіні реттеу қадамдары // Interactive Step Player</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-normal text-white">
              {stepDescriptions[activeStep].title}
            </h3>

            <p className="text-sm sm:text-base text-[#9ba3af] leading-relaxed font-light">
              {stepDescriptions[activeStep].detail}
            </p>

            <div className="p-3 rounded-lg border border-white/10 bg-[#050608] font-mono text-xs flex items-center justify-between">
              <span className="text-[#757575]">STATUS:</span>
              <span className={`font-semibold ${stepDescriptions[activeStep].color}`}>
                {stepDescriptions[activeStep].status}
              </span>
            </div>

            {/* Bencho StepPlayer Component */}
            <div className="pt-4 flex flex-col items-start gap-4">
              <div className="font-mono text-[11px] text-[#757575] uppercase tracking-wider">
                Қадамдарды бақылау (Play / Pause немесе нүктелерді таңдаңыз):
              </div>
              <StepPlayer steps={4} pace={3.2} wake={80} />
            </div>
          </div>

          {/* Right: Bencho ImageCompare wipe slider (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="font-mono text-xs text-[#757575] uppercase tracking-wider mb-3 text-center">
              Слайдерді сүйреп салыстырыңыз (Image Compare)
            </div>

            <div className="shadow-2xl rounded-2xl overflow-hidden border border-white/15">
              <ImageCompare
                before="/images/eeg_contaminated.jpg"
                after="/images/eeg_miora_protected.jpg"
                beforeLabel="RAW EMG NOISE"
                afterLabel="MIORA PROTECTED"
                width={300}
                height={380}
                corner={18}
              />
            </div>

            <div className="text-[11px] font-mono text-[#757575] mt-3 text-center">
              Сол жақта: шайнаудан ластанған ЭЭГ · Оң жақта: MIORA қорғаған шешім
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
