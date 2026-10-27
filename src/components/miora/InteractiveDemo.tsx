"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Play, Pause, RefreshCw, CheckCircle2, XCircle, ShieldCheck, Activity, Sliders, Zap } from "lucide-react";

export default function InteractiveDemo() {
  // Simulator State
  const [chewingActive, setChewingActive] = useState(true);
  const [noiseLevel, setNoiseLevel] = useState(70);
  const [userProfile, setUserProfile] = useState<"calibrated" | "uncalibrated">("calibrated");
  const [selectedIntent, setSelectedIntent] = useState<"left" | "right" | "rest">("left");
  const [isRunning, setIsRunning] = useState(true);

  // Intent descriptions in Kazakh
  const intentLabels = {
    left: "Сол қол қозғалысы (Left Hand)",
    right: "Оң қол қозғалысы (Right Hand)",
    rest: "Тыныштық күйі (Rest State)",
  };

  // Determine baseline decoder prediction (corrupted under EMG noise)
  const baselinePrediction = useMemo(() => {
    if (!chewingActive || noiseLevel < 35) {
      return { command: selectedIntent, confidence: 89, isCorrect: true };
    }
    // High noise causes false command
    const corrupted = selectedIntent === "left" ? "right" : "rest";
    return {
      command: corrupted,
      confidence: Math.max(54, Math.round(86 - noiseLevel * 0.4)),
      isCorrect: false,
    };
  }, [chewingActive, noiseLevel, selectedIntent]);

  // Determine auxiliary expert suggestion
  const expertPrediction = useMemo(() => {
    if (userProfile === "calibrated") {
      return { command: selectedIntent, confidence: 92, deltaMargin: 26 };
    }
    return { command: "right", confidence: 58, deltaMargin: 6 };
  }, [userProfile, selectedIntent]);

  // 4 Gate Checks logic
  const gate1Passed = userProfile === "calibrated";
  const gate2Passed = chewingActive && noiseLevel >= 35;
  const gate3Passed = baselinePrediction.command !== expertPrediction.command;
  const gate4Passed = expertPrediction.deltaMargin >= 15;

  const allGatesPassed = gate1Passed && gate2Passed && gate3Passed && gate4Passed;

  // Final Protected Decision
  const finalCommand = allGatesPassed ? expertPrediction.command : baselinePrediction.command;
  const isProtectedOverride = allGatesPassed;

  // Animated Waveform path state
  const [waveOffset, setWaveOffset] = useState(0);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setWaveOffset((prev) => (prev + 3) % 400);
    }, 40);
    return () => clearInterval(interval);
  }, [isRunning]);

  const generateSimWave = () => {
    const points: string[] = [];
    const width = 640;
    const height = 90;
    const mid = height / 2;

    for (let x = 0; x <= width; x += 4) {
      const t = x + waveOffset;
      let y = mid + Math.sin(t * 0.05) * 16 + Math.cos(t * 0.02) * 8;

      if (chewingActive) {
        const noiseFactor = noiseLevel / 100;
        y += (Math.sin(t * 0.45) * 12 + (Math.random() - 0.5) * 24) * noiseFactor;
      }

      points.push(`${x === 0 ? "M" : "L"} ${x} ${y.toFixed(1)}`);
    }

    return points.join(" ");
  };

  return (
    <section id="demo" className="py-28 px-6 md:px-12 bg-[#050608] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-4 flex items-center gap-2">
              <Activity size={14} className="animate-pulse" />
              <span>05 // Тікелей симулятор</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.08] mb-4">
              4-Шлюздің жұмысын{" "}
              <span className="font-serif italic text-white/95 font-normal">
                өзіңіз сынап көріңіз
              </span>
              .
            </h2>
            <p className="text-base text-neutral-400 font-light leading-relaxed">
              Шайнау кедергісін қосып көріңіз немесе шудың күшін өзгертіңіз. Жүйенің әр қадамын және адам ниетінің қалай қорғалатынын нақты уақытта бақылаңыз.
            </p>
          </div>

          <div className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[11px] font-mono text-neutral-400 flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>REAL-TIME NEURAL STREAM</span>
          </div>
        </div>

        {/* Monolithic Console Master Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/[0.08] bg-[#07090d]/90 backdrop-blur-xl">
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-between space-y-8">
            <div className="space-y-8">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-white uppercase">
                  <Sliders size={14} className="text-cyan-400" />
                  <span>Басқару панелі</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">INPUT CONTROLS</span>
              </div>

              {/* 1. Chewing toggle */}
              <div>
                <label className="text-xs font-mono text-neutral-400 block mb-2.5">
                  1. Шайнау қимылы (EMG Noise)
                </label>
                <button
                  type="button"
                  onClick={() => setChewingActive(!chewingActive)}
                  className={`w-full py-3.5 px-4 rounded-xl border font-mono text-xs tracking-wider transition-all flex items-center justify-between ${
                    chewingActive
                      ? "border-rose-500/50 bg-rose-950/20 text-rose-300 font-medium shadow-[0_0_20px_rgba(244,63,94,0.15)]"
                      : "border-white/10 bg-[#050608] text-neutral-400 hover:border-white/20"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        chewingActive ? "bg-rose-400 animate-pulse" : "bg-neutral-600"
                      }`}
                    />
                    <span>{chewingActive ? "ШАЙНАУ БЕЛСЕНДІ (КЕДЕРГІ БАР)" : "ТЫНЫШТЫҚ (ТАЗА ЭЭГ)"}</span>
                  </span>
                  <span className="text-[10px] opacity-75">{chewingActive ? "ON" : "OFF"}</span>
                </button>
              </div>

              {/* 2. Noise slider */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-neutral-400">2. Шудың қуаттылығы</span>
                  <span className="text-white font-medium">{noiseLevel}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  disabled={!chewingActive}
                  value={noiseLevel}
                  onChange={(e) => setNoiseLevel(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer disabled:opacity-30 h-1.5 bg-white/10 rounded-lg appearance-none"
                />
                <div className="flex justify-between font-mono text-[10px] text-neutral-500 mt-2">
                  <span>0% (Таза)</span>
                  <span className="text-neutral-400">Шек: 35%</span>
                  <span>100% (Макс)</span>
                </div>
              </div>

              {/* 3. User profile selection */}
              <div>
                <label className="text-xs font-mono text-neutral-400 block mb-2.5">
                  3. Қолданушының бейімделуі
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setUserProfile("calibrated")}
                    className={`p-3.5 rounded-xl border text-xs font-mono text-left transition-all ${
                      userProfile === "calibrated"
                        ? "border-cyan-500/50 bg-cyan-950/20 text-white"
                        : "border-white/10 bg-[#050608] text-neutral-500 hover:border-white/20"
                    }`}
                  >
                    <div className="font-medium text-white mb-0.5">Калибрленген</div>
                    <div className="text-[10px] text-cyan-400">Сүзгі рұқсат етілген</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setUserProfile("uncalibrated")}
                    className={`p-3.5 rounded-xl border text-xs font-mono text-left transition-all ${
                      userProfile === "uncalibrated"
                        ? "border-cyan-500/50 bg-cyan-950/20 text-white"
                        : "border-white/10 bg-[#050608] text-neutral-500 hover:border-white/20"
                    }`}
                  >
                    <div className="font-medium text-white mb-0.5">Жаңа қолданушы</div>
                    <div className="text-[10px] text-amber-400">Сақтық режимі</div>
                  </button>
                </div>
              </div>

              {/* 4. Intended motor command */}
              <div>
                <label className="text-xs font-mono text-neutral-400 block mb-2.5">
                  4. Адамның нақты ми ниеті
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["left", "right", "rest"] as const).map((intent) => (
                    <button
                      key={intent}
                      type="button"
                      onClick={() => setSelectedIntent(intent)}
                      className={`py-2.5 px-3 rounded-lg border text-xs font-mono text-center transition-all ${
                        selectedIntent === intent
                          ? "border-white bg-white text-black font-semibold shadow-sm"
                          : "border-white/10 bg-[#050608] text-neutral-400 hover:text-white hover:border-white/20"
                      }`}
                    >
                      {intent === "left" ? "Сол қол" : intent === "right" ? "Оң қол" : "Тыныштық"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex justify-between items-center text-xs font-mono text-neutral-500">
              <button
                type="button"
                onClick={() => {
                  setChewingActive(true);
                  setNoiseLevel(70);
                  setUserProfile("calibrated");
                  setSelectedIntent("left");
                }}
                className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
              >
                <RefreshCw size={12} />
                <span>Бастапқы күйге қайтару</span>
              </button>
              <span className="text-[10px]">SAMPLING: 250 HZ</span>
            </div>
          </div>

          {/* Telemetry & 4 Gates Column (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-8">
            {/* Oscilloscope Visualizer */}
            <div className="p-6 rounded-xl border border-white/[0.08] bg-[#050608] relative overflow-hidden">
              <div className="flex justify-between items-center mb-3 text-xs font-mono">
                <span className="text-neutral-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>LIVE EEG OSCILLOSCOPE (C3/C4 250 HZ)</span>
                </span>
                <button
                  type="button"
                  onClick={() => setIsRunning(!isRunning)}
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  {isRunning ? <Pause size={13} /> : <Play size={13} />}
                </button>
              </div>

              {/* Waveform Canvas */}
              <div className="h-24 w-full bg-[#080a0e] rounded-lg border border-white/[0.05] flex items-center overflow-hidden px-2 relative">
                {/* Background grid reticles */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <svg viewBox="0 0 640 90" className="w-full h-full stroke-cyan-400 fill-none relative z-10">
                  <path d={generateSimWave()} strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Decoders Dual Readout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-white/[0.08] bg-[#050608]">
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">
                  Базалық декодер болжамы
                </div>
                <div className="text-base sm:text-lg font-medium text-white mb-1">
                  {intentLabels[baselinePrediction.command as keyof typeof intentLabels]}
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  Сенімділік: <span className="text-white">{baselinePrediction.confidence}%</span>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-white/[0.08] bg-[#050608]">
                <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Zap size={12} />
                  <span>Қосымша сарапшы ұсынысы</span>
                </div>
                <div className="text-base sm:text-lg font-medium text-white mb-1">
                  {intentLabels[expertPrediction.command as keyof typeof intentLabels]}
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  Сенімділік: <span className="text-cyan-300">{expertPrediction.confidence}%</span> (+{expertPrediction.deltaMargin}% маржа)
                </div>
              </div>
            </div>

            {/* 4 Gates Live Status Table */}
            <div className="space-y-2.5">
              <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3 flex items-center justify-between">
                <span>4 Шлюздің тікелей шешімі:</span>
                <span className="text-[10px] text-neutral-500">CASCADE AUDIT</span>
              </div>

              {/* Gate 1 */}
              <div className="p-3.5 rounded-lg border border-white/[0.06] bg-[#050608] flex items-center justify-between font-mono text-xs">
                <span className="text-neutral-400">
                  Шлюз 1: Жеке пайда ({userProfile === "calibrated" ? "Расталған" : "Тексерілмеген"})
                </span>
                <span
                  className={`flex items-center gap-1.5 font-medium ${
                    gate1Passed ? "text-emerald-400" : "text-neutral-500"
                  }`}
                >
                  {gate1Passed ? <CheckCircle2 size={13} /> : <XCircle size={13} />}
                  <span>{gate1Passed ? "ӨТТІ (PASS)" : "ТОҚТАТЫЛДЫ"}</span>
                </span>
              </div>

              {/* Gate 2 */}
              <div className="p-3.5 rounded-lg border border-white/[0.06] bg-[#050608] flex items-center justify-between font-mono text-xs">
                <span className="text-neutral-400">
                  Шлюз 2: Шу шегі (&gt; 35% тіркелді: {chewingActive ? `${noiseLevel}%` : "0%"})
                </span>
                <span
                  className={`flex items-center gap-1.5 font-medium ${
                    gate2Passed ? "text-emerald-400" : "text-neutral-500"
                  }`}
                >
                  {gate2Passed ? <CheckCircle2 size={13} /> : <XCircle size={13} />}
                  <span>{gate2Passed ? "ӨТТІ (PASS)" : "ТОҚТАТЫЛДЫ"}</span>
                </span>
              </div>

              {/* Gate 3 */}
              <div className="p-3.5 rounded-lg border border-white/[0.06] bg-[#050608] flex items-center justify-between font-mono text-xs">
                <span className="text-neutral-400">
                  Шлюз 3: Декодерлер қайшылығы ({baselinePrediction.command !== expertPrediction.command ? "Әртүрлі" : "Бірдей"})
                </span>
                <span
                  className={`flex items-center gap-1.5 font-medium ${
                    gate3Passed ? "text-emerald-400" : "text-neutral-500"
                  }`}
                >
                  {gate3Passed ? <CheckCircle2 size={13} /> : <XCircle size={13} />}
                  <span>{gate3Passed ? "ӨТТІ (PASS)" : "ТОҚТАТЫЛДЫ"}</span>
                </span>
              </div>

              {/* Gate 4 */}
              <div className="p-3.5 rounded-lg border border-white/[0.06] bg-[#050608] flex items-center justify-between font-mono text-xs">
                <span className="text-neutral-400">
                  Шлюз 4: Сенімділік маржасы ({expertPrediction.deltaMargin}% &ge; 15%)
                </span>
                <span
                  className={`flex items-center gap-1.5 font-medium ${
                    gate4Passed ? "text-emerald-400" : "text-neutral-500"
                  }`}
                >
                  {gate4Passed ? <CheckCircle2 size={13} /> : <XCircle size={13} />}
                  <span>{gate4Passed ? "ӨТТІ (PASS)" : "ТОҚТАТЫЛДЫ"}</span>
                </span>
              </div>
            </div>

            {/* Monolithic Final Protected Output Display */}
            <div
              className={`p-6 rounded-xl border transition-all ${
                isProtectedOverride
                  ? "border-emerald-500/40 bg-emerald-950/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5">
                    Қорытынды қабылданған команда:
                  </div>
                  <div className="text-xl sm:text-2xl font-light text-white flex items-center gap-3">
                    <ShieldCheck
                      size={24}
                      className={isProtectedOverride ? "text-emerald-400" : "text-neutral-400"}
                    />
                    <span>{intentLabels[finalCommand as keyof typeof intentLabels]}</span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                    {isProtectedOverride
                      ? "ҚОРҒАЛҒАН ТҮЗЕТУ ЕНГІЗІЛДІ"
                      : "БАЗАЛЫҚ КОМАНДА САҚТАЛДЫ"}
                  </div>
                  <div className="font-mono text-[11px] text-neutral-400 mt-0.5">
                    {isProtectedOverride
                      ? "4 Шлюз түгел өтті → Сарапшы қолданылды"
                      : "Күдік туды → Алғашқы шешім сақталды"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
