"use client";

import React, { useState } from "react";
import { AlertTriangle, Zap, Volume2, ShieldAlert } from "lucide-react";

export default function ProblemSection() {
  const [noiseLevel, setNoiseLevel] = useState(65);

  // Generate SVG path points based on noise slider
  const generateWavePath = (isContaminated: boolean) => {
    const points: string[] = [];
    const width = 800;
    const height = 140;
    const midY = height / 2;

    for (let x = 0; x <= width; x += 4) {
      // Base EEG mu rhythm (10-12 Hz approx)
      const baseWave = Math.sin(x * 0.045) * 26 + Math.sin(x * 0.09) * 12;

      let y = midY + baseWave;

      if (isContaminated) {
        // High-frequency, high-amplitude EMG burst depending on noiseLevel
        const noiseFactor = noiseLevel / 100;
        const emgSpike =
          (Math.sin(x * 0.45) * 18 +
            Math.cos(x * 0.78) * 14 +
            (Math.random() - 0.5) * 35) *
          noiseFactor;
        y += emgSpike;
      }

      points.push(`${x === 0 ? "M" : "L"} ${x} ${y.toFixed(2)}`);
    }

    return points.join(" ");
  };

  return (
    <section id="problem" className="py-28 px-6 md:px-12 bg-[#0c0e12] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#757575] uppercase mb-4">
          <AlertTriangle size={14} className="text-brand-accent" />
          <span>02 // Мәселе: Шайнау артефактілері</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white max-w-4xl tracking-tight leading-tight mb-8">
          Адам тамақ шайнаған кезде, жақ бұлшықеттері ми сигналын толықтай бұрмалайды.
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-[#9ba3af] max-w-3xl leading-relaxed mb-12">
          Brain–Computer Interfaces (BCI) жүйелері адамның қозғалыс ниетін тануға арналған. Алайда қарапайым шайнау немесе тісті қысу кезінде туындайтын электромиографиялық (ЭМГ) кедергілер ЭЭГ сигналын басып озады да, құрылғылар қате командалар орындай бастайды.
        </p>

        {/* Interactive Waveform Visualizer */}
        <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#050608] my-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-white/10">
            <div>
              <div className="font-mono text-xs text-white uppercase tracking-wider flex items-center gap-2">
                <Zap size={14} className="text-brand-secondary" />
                <span>ЭЭГ Сигналының динамикалық салыстыруы</span>
              </div>
              <span className="text-[11px] font-mono text-[#757575]">
                Көрнекі мысал: Сигналдың шайнау әсерінен бұрмалануы
              </span>
            </div>

            {/* Slider control */}
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <span className="font-mono text-xs text-[#9ba3af] whitespace-nowrap">
                ЭМГ шу деңгейі: {noiseLevel}%
              </span>
              <input
                type="range"
                min="0"
                max="100"
                value={noiseLevel}
                onChange={(e) => setNoiseLevel(Number(e.target.value))}
                className="w-36 sm:w-48 accent-brand-secondary cursor-pointer"
                aria-label="ЭМГ шу деңгейінің реттегіші"
              />
            </div>
          </div>

          {/* Waveforms */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Clean EEG */}
            <div className="p-5 rounded-xl border border-white/5 bg-[#0c0e12] flex flex-col justify-between">
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-xs text-brand-secondary">
                  [CH_01: ТАЗА ЭЭГ СИГНАЛЫ]
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-secondary/10 text-brand-secondary">
                  ҚАЛЫПТЫ ЖАҒДАЙ
                </span>
              </div>
              <div className="h-32 sm:h-36 w-full flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 800 140" className="w-full h-full stroke-brand-secondary fill-none">
                  <path d={generateWavePath(false)} strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="font-mono text-[11px] text-[#757575] mt-2">
                Жиілік: 8-13 Гц (мю-ырғақ) • Базалық декодер сенімділігі: 88%
              </div>
            </div>

            {/* Contaminated EEG */}
            <div className="p-5 rounded-xl border border-white/5 bg-[#0c0e12] flex flex-col justify-between">
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-xs text-brand-accent flex items-center gap-1.5">
                  <AlertTriangle size={12} />
                  [CH_01: ШАЙНАУ КЕДЕРГІСІ ҚОСЫЛҒАН]
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-accent/15 text-brand-accent">
                  ЭМГ ШУЫ {noiseLevel}%
                </span>
              </div>
              <div className="h-32 sm:h-36 w-full flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 800 140" className="w-full h-full stroke-brand-accent fill-none">
                  <path d={generateWavePath(true)} strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="font-mono text-[11px] text-[#757575] mt-2">
                Жоғары жиілік: 40-100 Гц • Базалық декодер қателігі: 38.5%
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Analytical Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-8 rounded-xl border border-white/10 bg-[#050608]">
            <div className="font-mono text-xs text-[#757575] uppercase mb-3">
              01 // Спектрлік қабаттасу
            </div>
            <h3 className="text-lg text-white font-medium mb-3">
              Бұлшықет импульстерінің күші
            </h3>
            <p className="text-sm text-[#9ba3af] leading-relaxed">
              Шайнау кезіндегі бұлшықет потенциалы (100–500 мкВ) мидың нәзік биопотенциалдарынан (10–50 мкВ) 10 есеге дейін асып түседі.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-white/10 bg-[#050608]">
            <div className="font-mono text-xs text-[#757575] uppercase mb-3">
              02 // Базалық декодер қатесі
            </div>
            <h3 className="text-lg text-white font-medium mb-3">
              38.5% Қателік деңгейі
            </h3>
            <p className="text-sm text-[#9ba3af] leading-relaxed">
              Қалыпты декодерлер артефакт кезінде пайдаланушының ниетін дұрыс танымай, қате немесе қауіпті қозғалыс пәрмендерін тудырады.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-white/10 bg-[#050608]">
            <div className="font-mono text-xs text-brand-accent uppercase mb-3 flex items-center gap-1.5">
              <ShieldAlert size={12} />
              <span>03 // Қате түзету қаупі (Weak HARM)</span>
            </div>
            <h3 className="text-lg text-white font-medium mb-3">
              Кездейсоқ түзетудің зияны
            </h3>
            <p className="text-sm text-[#9ba3af] leading-relaxed">
              Тіпті артефактіні сүзетін жүйелердің өзі кейде бастапқы дұрыс командаларды қате өзгертіп, жүйеге кері әсерін тигізеді.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
