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
        <div className="font-mono text-xs tracking-[0.25em] text-[#757575] uppercase mb-4">
          01 // The Core Challenge
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white max-w-4xl tracking-tight leading-tight mb-8">
          Today, brain–computer interfaces struggle when real-world physiology interferes with cortical signals.
        </h2>

        <p className="text-base sm:text-lg text-[#9ba3af] max-w-3xl leading-relaxed font-light mb-16">
          Адам тамақ шайнағанда (chewing) жақ бұлшықеттерінің электромиографиялық (EMG) шуы нәзік ЭЭГ толқындарынан ондаған есе асып түседі. Қарапайым сүзгілер мұндай кезде дұрыс командаларды да қате түзетіп, пайдаланушының сеніміне нұқсан келтіреді.
        </p>

        {/* Precision 3-Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-8 rounded-xl border border-white/10 bg-[#0c0e12]">
            <div className="text-4xl font-light text-white mb-2">38.5%</div>
            <div className="font-mono text-xs text-[#757575] uppercase tracking-wider mb-4">
              Базалық декодер қателігі
            </div>
            <p className="text-sm text-[#9ba3af] leading-relaxed">
              Шайнау артефактілері бар сынақтарда қарапайым BCI алгоритмдері әрбір үшінші командада дерлік қателеседі.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-white/10 bg-[#0c0e12]">
            <div className="text-4xl font-light text-[#ff5252] mb-2">EMG Spikes</div>
            <div className="font-mono text-xs text-[#757575] uppercase tracking-wider mb-4">
              Бұлшықет кедергісі
            </div>
            <p className="text-sm text-[#9ba3af] leading-relaxed">
              Жақ бұлшықеттерінің белсенділігі 30-100 Гц жиілікті электрлік кернеу тудырып, ЭЭГ спектрограммасын бұрмалайды.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-white/10 bg-[#0c0e12]">
            <div className="text-4xl font-light text-[#00e5ff] mb-2">4-Gate</div>
            <div className="font-mono text-xs text-[#757575] uppercase tracking-wider mb-4">
              Каскадты шешім қорғанысы
            </div>
            <p className="text-sm text-[#9ba3af] leading-relaxed">
              Жүйе тек төрт шарт қатар орындалғанда ғана түзетуді мақұлдап, «зиян келтірмеу» қағидасын қамтамасыз етеді.
            </p>
          </div>
        </div>

        {/* Interactive Dual Bench: Bencho StepPlayer + Bencho ImageCompare */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-2xl border border-white/10 bg-[#0c0e12]">
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
    </section>
  );
}
