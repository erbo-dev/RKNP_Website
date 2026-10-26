"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Play, Pause, RefreshCw, CheckCircle2, XCircle, ShieldCheck, Activity, AlertCircle, Info } from "lucide-react";

export default function InteractiveDemo() {
  // Simulator State
  const [chewingActive, setChewingActive] = useState(true);
  const [noiseLevel, setNoiseLevel] = useState(70);
  const [userProfile, setUserProfile] = useState<"S1" | "S4">("S1"); // S1: expert authorized, S4: expert not authorized
  const [selectedIntent, setSelectedIntent] = useState<"left" | "right" | "rest">("left");
  const [isRunning, setIsRunning] = useState(true);

  // Intent descriptions in Kazakh
  const intentLabels = {
    left: "Сол қол қимылы (Left Hand)",
    right: "Оң қол қимылы (Right Hand)",
    rest: "Тыныштық күйі (Rest State)",
  };

  // Determine baseline decoder prediction (prone to noise distortion)
  const baselinePrediction = useMemo(() => {
    if (!chewingActive || noiseLevel < 30) {
      return { command: selectedIntent, confidence: 88, isCorrect: true };
    }
    // High noise causes misclassification
    const corrupted = selectedIntent === "left" ? "right" : "rest";
    return {
      command: corrupted,
      confidence: Math.max(52, 85 - noiseLevel * 0.4),
      isCorrect: false,
    };
  }, [chewingActive, noiseLevel, selectedIntent]);

  // Determine auxiliary expert suggestion
  const expertPrediction = useMemo(() => {
    // If user is S1, expert is well-calibrated and proposes correct intent
    if (userProfile === "S1") {
      return { command: selectedIntent, confidence: 91, deltaMargin: 24 };
    }
    // If S4, expert has poor generalization
    return { command: "right", confidence: 55, deltaMargin: 5 };
  }, [userProfile, selectedIntent]);

  // 4 Gate Checks logic
  const gate1Passed = userProfile === "S1"; // Authorized for S1, not for S4
  const gate2Passed = chewingActive && noiseLevel >= 35; // Noise threshold
  const gate3Passed = baselinePrediction.command !== expertPrediction.command; // Disagreement
  const gate4Passed = expertPrediction.deltaMargin >= 15; // Confidence margin threshold

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
    }, 50);
    return () => clearInterval(interval);
  }, [isRunning]);

  const generateSimWave = () => {
    const points: string[] = [];
    const width = 600;
    const height = 100;
    const mid = height / 2;

    for (let x = 0; x <= width; x += 4) {
      const t = x + waveOffset;
      // Pure signal component
      let y = mid + Math.sin(t * 0.05) * 18 + Math.cos(t * 0.02) * 8;

      if (chewingActive) {
        // High frequency EMG bursts
        const noiseFactor = noiseLevel / 100;
        y += (Math.sin(t * 0.5) * 14 + (Math.random() - 0.5) * 26) * noiseFactor;
      }

      points.push(`${x === 0 ? "M" : "L"} ${x} ${y.toFixed(1)}`);
    }

    return points.join(" ");
  };

  return (
    <section id="demo" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <div className="font-mono text-xs tracking-[0.25em] text-brand-secondary uppercase mb-3 flex items-center gap-2">
            <Activity size={14} />
            <span>05 // Функционалды симулятор</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal text-white tracking-tight">
            MIORA Қорғаныс каскадының интерактивті демосы
          </h2>
        </div>

        <div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[11px] font-mono text-[#757575] flex items-center gap-2">
          <Info size={13} className="text-brand-secondary" />
          <span>Көрнекі мысал (Deterministic Research Simulation)</span>
        </div>
      </div>

      {/* Simulator Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column (4 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#0c0e12] flex flex-col justify-between space-y-6">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-white mb-6 border-b border-white/10 pb-3">
              Параметрлерді басқару
            </h3>

            {/* 1. Chewing toggle */}
            <div className="mb-6">
              <label className="text-xs font-mono text-[#9ba3af] block mb-2">
                1. Шайнау артефактісі (EMG Noise Injection)
              </label>
              <button
                onClick={() => setChewingActive(!chewingActive)}
                className={`w-full py-3 px-4 rounded-xl border font-mono text-xs tracking-wider transition-all flex items-center justify-between ${
                  chewingActive
                    ? "border-brand-accent/50 bg-brand-accent/10 text-brand-accent font-semibold"
                    : "border-white/10 bg-[#050608] text-[#757575]"
                }`}
              >
                <span>Жақ белсенділігі: {chewingActive ? "ҚОСУЛЫ (ШАЙНАУ БАР)" : "ӨШІРУЛІ (ТАЗА)"}</span>
                <span className={`w-3 h-3 rounded-full ${chewingActive ? "bg-brand-accent animate-ping" : "bg-[#49555c]"}`} />
              </button>
            </div>

            {/* 2. Noise slider */}
            <div className="mb-6">
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-[#9ba3af]">2. ЭМГ Шуының қуаты (Power)</span>
                <span className="text-white font-bold">{noiseLevel}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                disabled={!chewingActive}
                value={noiseLevel}
                onChange={(e) => setNoiseLevel(Number(e.target.value))}
                className="w-full accent-brand-secondary cursor-pointer disabled:opacity-30"
              />
              <div className="flex justify-between font-mono text-[10px] text-[#757575] mt-1">
                <span>0% (Таза сигнал)</span>
                <span>Шек: 35%</span>
                <span>100% (Максималды)</span>
              </div>
            </div>

            {/* 3. User profile selection */}
            <div className="mb-6">
              <label className="text-xs font-mono text-[#9ba3af] block mb-2">
                3. Пайдаланушы бейіні (Personalization)
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setUserProfile("S1")}
                  className={`p-3 rounded-xl border text-xs font-mono text-left transition-all ${
                    userProfile === "S1"
                      ? "border-brand-secondary bg-brand-secondary/10 text-white"
                      : "border-white/10 bg-[#050608] text-[#757575]"
                  }`}
                >
                  <div className="font-bold">Профиль A (Стандартты)</div>
                  <div className="text-[10px] text-brand-secondary">Сарапшы рұқсат етілген</div>
                </button>

                <button
                  onClick={() => setUserProfile("S4")}
                  className={`p-3 rounded-xl border text-xs font-mono text-left transition-all ${
                    userProfile === "S4"
                      ? "border-brand-secondary bg-brand-secondary/10 text-white"
                      : "border-white/10 bg-[#050608] text-[#757575]"
                  }`}
                >
                  <div className="font-bold">Профиль B (Сезімтал)</div>
                  <div className="text-[10px] text-brand-accent">Сарапшы шектелген (Қауіпсіздік)</div>
                </button>
              </div>
            </div>

            {/* 4. Intended motor command */}
            <div>
              <label className="text-xs font-mono text-[#9ba3af] block mb-2">
                4. Нақты ми ниеті (Ground Truth Intent)
              </label>
              <div className="space-y-2">
                {(["left", "right", "rest"] as const).map((intent) => (
                  <button
                    key={intent}
                    onClick={() => setSelectedIntent(intent)}
                    className={`w-full py-2.5 px-4 rounded-lg border text-xs font-mono text-left transition-all ${
                      selectedIntent === intent
                        ? "border-white text-white bg-white/10 font-medium"
                        : "border-white/5 bg-[#050608] text-[#757575] hover:text-white"
                    }`}
                  >
                    {intentLabels[intent]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-[#757575]">
            <button
              onClick={() => {
                setChewingActive(true);
                setNoiseLevel(70);
                setUserProfile("S1");
                setSelectedIntent("left");
              }}
              className="flex items-center gap-1.5 hover:text-white"
            >
              <RefreshCw size={12} />
              <span>Бастапқы күйге қайтару</span>
            </button>
            <span>REAL-TIME PIPELINE</span>
          </div>
        </div>

        {/* Display & 4 Gates Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Waveform monitor */}
          <div className="p-6 rounded-2xl border border-white/10 bg-[#050608]">
            <div className="flex justify-between items-center mb-3 text-xs font-mono">
              <span className="text-[#9ba3af] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
                ЭЭГ ОСЦИЛЛОГРАММАСЫ (CH_01: 250 Hz)
              </span>
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="text-[#757575] hover:text-white"
              >
                {isRunning ? <Pause size={14} /> : <Play size={14} />}
              </button>
            </div>

            <div className="h-28 w-full bg-[#0c0e12] rounded-xl border border-white/5 flex items-center overflow-hidden px-2">
              <svg viewBox="0 0 600 100" className="w-full h-full stroke-brand-secondary fill-none">
                <path d={generateSimWave()} strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Decoders comparison */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-white/10 bg-[#0c0e12]">
              <div className="text-[10px] font-mono text-[#757575] uppercase mb-1">
                Базалық декодер болжамы
              </div>
              <div className="text-lg font-medium text-white mb-1">
                {intentLabels[baselinePrediction.command as keyof typeof intentLabels]}
              </div>
              <div className="text-xs font-mono text-[#9ba3af]">
                Сенімділік: {baselinePrediction.confidence.toFixed(0)}%
              </div>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-[#0c0e12]">
              <div className="text-[10px] font-mono text-[#757575] uppercase mb-1">
                Қосымша сарапшы ұсынысы
              </div>
              <div className="text-lg font-medium text-brand-secondary mb-1">
                {intentLabels[expertPrediction.command as keyof typeof intentLabels]}
              </div>
              <div className="text-xs font-mono text-[#9ba3af]">
                Сенімділік: {expertPrediction.confidence}% (Маржа: +{expertPrediction.deltaMargin}%)
              </div>
            </div>
          </div>

          {/* 4 Gates Real-Time Audit */}
          <div className="p-6 rounded-2xl border border-white/10 bg-[#0c0e12]">
            <div className="font-mono text-xs uppercase tracking-wider text-white mb-4">
              4 Қорғаныс шлюзінің нақты уақыттағы жағдайы:
            </div>

            <div className="space-y-3 font-mono text-xs">
              {/* Gate 1 */}
              <div className="p-3 rounded-lg border border-white/5 bg-[#050608] flex items-center justify-between">
                <span className="text-[#9ba3af]">
                  Шлюз 1: Жеке авторландыру ({userProfile === "S1" ? "Пайдалы" : "Тиімсіз"})
                </span>
                <span className={`flex items-center gap-1 font-semibold ${gate1Passed ? "text-brand-success" : "text-[#757575]"}`}>
                  {gate1Passed ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                  {gate1Passed ? "PASS" : "BLOCKED"}
                </span>
              </div>

              {/* Gate 2 */}
              <div className="p-3 rounded-lg border border-white/5 bg-[#050608] flex items-center justify-between">
                <span className="text-[#9ba3af]">
                  Шлюз 2: Шу шегі (&gt; 35% тіркелді: {chewingActive ? `${noiseLevel}%` : "0%"})
                </span>
                <span className={`flex items-center gap-1 font-semibold ${gate2Passed ? "text-brand-success" : "text-[#757575]"}`}>
                  {gate2Passed ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                  {gate2Passed ? "PASS" : "BLOCKED"}
                </span>
              </div>

              {/* Gate 3 */}
              <div className="p-3 rounded-lg border border-white/5 bg-[#050608] flex items-center justify-between">
                <span className="text-[#9ba3af]">
                  Шлюз 3: Декодерлердің сәйкессіздігі ({baselinePrediction.command !== expertPrediction.command ? "Әртүрлі" : "Бірдей"})
                </span>
                <span className={`flex items-center gap-1 font-semibold ${gate3Passed ? "text-brand-success" : "text-[#757575]"}`}>
                  {gate3Passed ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                  {gate3Passed ? "PASS" : "BLOCKED"}
                </span>
              </div>

              {/* Gate 4 */}
              <div className="p-3 rounded-lg border border-white/5 bg-[#050608] flex items-center justify-between">
                <span className="text-[#9ba3af]">
                  Шлюз 4: Сенімділік маржасы (Δ ≥ 15%: {expertPrediction.deltaMargin}%)
                </span>
                <span className={`flex items-center gap-1 font-semibold ${gate4Passed ? "text-brand-success" : "text-[#757575]"}`}>
                  {gate4Passed ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                  {gate4Passed ? "PASS" : "BLOCKED"}
                </span>
              </div>
            </div>
          </div>

          {/* Final Output Banner */}
          <div
            className={`p-6 rounded-2xl border transition-all ${
              isProtectedOverride
                ? "border-brand-success/50 bg-brand-success/10"
                : "border-white/20 bg-white/[0.03]"
            }`}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="text-[11px] font-mono text-[#9ba3af] uppercase mb-1">
                  Қорытынды қабылданған команда:
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <ShieldCheck size={24} className={isProtectedOverride ? "text-brand-success" : "text-[#9ba3af]"} />
                  <span>{intentLabels[finalCommand as keyof typeof intentLabels]}</span>
                </div>
              </div>

              <div className="text-right">
                <div className="font-mono text-xs font-bold text-white uppercase">
                  {isProtectedOverride
                    ? "ҚОРҒАЛҒАН ТҮЗЕТУ ЕНГІЗІЛДІ"
                    : "БАЗАЛЫҚ КОМАНДА САҚТАЛДЫ"}
                </div>
                <div className="font-mono text-[11px] text-[#757575]">
                  {isProtectedOverride
                    ? "4 Шлюз түгел өтті → Сарапшы қолданылды"
                    : "Шарт толық емес → Түзету шектелді"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
