"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Play,
  Pause,
  RefreshCw,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Shield,
  ShieldAlert,
  Activity,
  Sliders,
  Zap,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { computeMioraDecision } from "@/lib/miora/simulation";
import { getCompactGateStatuses } from "@/lib/miora/gateFlowController";
import {
  PRESET_SCENARIOS,
  DEFAULT_SIMULATION_STATE,
  identifyScenario,
} from "@/lib/miora/scenarios";
import { MotorIntent, UserProfile, ProtectionMode, PresetScenarioId } from "@/lib/miora/types";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function InteractiveDemo() {
  const { lang, t } = useLanguage();

  // Simulation Parameters State
  const [chewingActive, setChewingActive] = useState<boolean>(true);
  const [noiseLevel, setNoiseLevel] = useState<number>(70);
  const [userProfile, setUserProfile] = useState<UserProfile>("calibrated");
  const [selectedIntent, setSelectedIntent] = useState<MotorIntent>("left");
  const [protectionMode, setProtectionMode] = useState<ProtectionMode>("miora_cascade");
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState<boolean>(false);

  // Typographically split presentation labels for primary and secondary language equivalents
  const intentPresentation = useMemo(() => {
    return {
      left: {
        primary: lang === "kk" ? "Сол қол қозғалысы" : "Left Hand Movement",
        secondary: lang === "kk" ? "Left Hand Motor Imagery" : "Сол қол моторикасы",
      },
      right: {
        primary: lang === "kk" ? "Оң қол қозғалысы" : "Right Hand Movement",
        secondary: lang === "kk" ? "Right Hand Motor Imagery" : "Оң қол моторикасы",
      },
      rest: {
        primary: lang === "kk" ? "Тыныштық күйі" : "Rest State",
        secondary: lang === "kk" ? "Baseline Rest Imagery" : "Базалық тыныштық",
      },
    };
  }, [lang]);

  // Full intent labels for ARIA accessibility and backward compatibility
  const intentLabels = useMemo(() => {
    return lang === "kk"
      ? {
          left: "Сол қол қозғалысы (Left Hand)",
          right: "Оң қол қозғалысы (Right Hand)",
          rest: "Тыныштық күйі (Rest State)",
        }
      : {
          left: "Left Hand Movement",
          right: "Right Hand Movement",
          rest: "Rest State",
        };
  }, [lang]);

  // Compute decision using deterministic pure engine
  const simulationResult = useMemo(() => {
    return computeMioraDecision({
      chewingActive,
      noiseLevel,
      userProfile,
      selectedIntent,
      protectionMode,
    });
  }, [chewingActive, noiseLevel, userProfile, selectedIntent, protectionMode]);

  const activeScenarioId = useMemo(() => {
    return identifyScenario({
      chewingActive,
      noiseLevel,
      userProfile,
      selectedIntent,
      protectionMode,
    });
  }, [chewingActive, noiseLevel, userProfile, selectedIntent, protectionMode]);

  // Load a preset scenario
  const applyPreset = (presetId: Exclude<PresetScenarioId, "custom">) => {
    const s = PRESET_SCENARIOS[presetId].state;
    setChewingActive(s.chewingActive);
    setNoiseLevel(s.noiseLevel);
    setUserProfile(s.userProfile);
    setSelectedIntent(s.selectedIntent);
    setProtectionMode(s.protectionMode);
  };

  // Reset to canonical nominal state
  const handleReset = () => {
    const s = DEFAULT_SIMULATION_STATE;
    setChewingActive(s.chewingActive);
    setNoiseLevel(s.noiseLevel);
    setUserProfile(s.userProfile);
    setSelectedIntent(s.selectedIntent);
    setProtectionMode(s.protectionMode);
  };

  // Animated Waveform path state
  const [waveOffset, setWaveOffset] = useState<number>(0);

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
        y +=
          (Math.sin(t * 0.45) * 12 +
            Math.sin(t * 0.95 + x) * 10 +
            (((x * 13) % 17) - 8.5) * 1.5) *
          noiseFactor;
      }

      points.push(`${x === 0 ? "M" : "L"} ${x} ${y.toFixed(1)}`);
    }

    return points.join(" ");
  };

  const {
    effectiveNoise,
    baselinePrediction,
    expertPrediction,
    marginDelta,
    gate1,
    gate2,
    gate3,
    gate4,
    allGatesPassed,
    finalCommand,
    isOverrideApplied,
    decisionSource,
  } = simulationResult;

  return (
    <section
      id="demo"
      aria-labelledby="demo-heading"
      className="py-24 px-4 sm:px-6 md:px-12 bg-[#050608] border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-3 flex items-center gap-2">
              <Activity size={14} className="animate-pulse" />
              <span>{t.demo.kicker}</span>
            </div>
            <h2
              id="demo-heading"
              className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.08] mb-3"
            >
              {t.demo.headline} {t.demo.headlineEmphasis}.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              {t.demo.description}
            </p>
          </div>

          <div className="px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-950/20 text-[11px] font-mono text-cyan-300 flex items-center gap-2 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>{t.demo.badgeSimulated}</span>
          </div>
        </div>

        {/* Master Unified Simulation Workbench */}
        <div className="rounded-3xl border border-white/10 bg-[#07090e] shadow-[0_30px_90px_rgba(0,0,0,0.85)] overflow-hidden">

          {/* Top Scenario Selector Ribbon */}
          <div className="p-3.5 sm:p-5 border-b border-white/10 bg-[#050608]/90">
            <div className="flex items-center justify-between gap-4 mb-2.5">
              <span className="font-sans text-xs font-semibold text-neutral-300 uppercase tracking-wider flex items-center gap-2">
                <Sparkles size={14} className="text-cyan-400" />
                <span>{t.demo.scenariosTitle}</span>
              </span>
              <span className="font-mono text-[11px] text-neutral-500 hidden sm:inline">
                {lang === "kk" ? "Шлюздер логикасын лезде салыстыру" : "Instant 4-gate verification"}
              </span>
            </div>

            {/* Desktop Selector Grid (sm+) */}
            <div className="hidden sm:grid grid-cols-3 gap-3">
              {(Object.keys(PRESET_SCENARIOS) as Array<Exclude<PresetScenarioId, "custom">>).map((pid) => {
                const p = PRESET_SCENARIOS[pid];
                const isSelected = activeScenarioId === pid;
                return (
                  <button
                    key={pid}
                    type="button"
                    data-scenario={pid}
                    onClick={() => applyPreset(pid)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "border-cyan-400/80 bg-cyan-950/25 text-white shadow-[0_0_20px_rgba(0,229,255,0.12)]"
                        : "border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-sans font-medium text-xs text-white">
                        {lang === "kk" ? p.titleKz : p.titleEn}
                      </span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00e5ff]" />
                      )}
                    </div>
                    <p className="text-[11px] font-sans text-neutral-400 line-clamp-2 leading-relaxed">
                      {lang === "kk" ? p.descriptionKz : p.descriptionEn}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Mobile Ultra-Compact Selector (< sm) */}
            <div className="sm:hidden space-y-2">
              <div className="grid grid-cols-3 gap-1.5">
                {(Object.keys(PRESET_SCENARIOS) as Array<Exclude<PresetScenarioId, "custom">>).map((pid, idx) => {
                  const p = PRESET_SCENARIOS[pid];
                  const isSelected = activeScenarioId === pid;
                  const shortTitlesKz = ["1. Таза", "2. Шу (Bypass)", "3. MIORA"];
                  const shortTitlesEn = ["1. Clean", "2. Noise (Bypass)", "3. MIORA"];
                  return (
                    <button
                      key={pid}
                      type="button"
                      data-scenario={pid}
                      onClick={() => applyPreset(pid)}
                      className={`py-2.5 px-1 rounded-lg border text-center transition-all text-xs font-sans font-medium ${
                        isSelected
                          ? "border-cyan-400 bg-cyan-950/40 text-cyan-200 font-semibold shadow-[0_0_12px_rgba(0,229,255,0.2)]"
                          : "border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white"
                      }`}
                    >
                      {lang === "kk" ? shortTitlesKz[idx] : shortTitlesEn[idx]}
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] font-sans text-neutral-400 leading-tight px-1">
                {activeScenarioId !== "custom" && (
                  lang === "kk" ? PRESET_SCENARIOS[activeScenarioId].descriptionKz : PRESET_SCENARIOS[activeScenarioId].descriptionEn
                )}
              </p>
            </div>
          </div>

          {/* Main Dual-Column Live Working Area: Waveform (left) & Executed Command (right) */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 border-b border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10">

            {/* Executed Command Result Card (Mobile: order-1, Desktop: order-2 / 5 cols) */}
            <div className="order-1 lg:order-2 lg:col-span-5 p-5 sm:p-7 bg-[#06080d] flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5 flex items-center justify-between">
                  <span>{lang === "kk" ? "Қорытынды қабылданған команда:" : "Final Executed Command:"}</span>
                  <span className="text-[10px] text-cyan-400 font-mono">INTENT ENGINE</span>
                </div>

                <div className="flex items-start gap-3.5 my-2.5">
                  <div className="pt-0.5 shrink-0" aria-hidden="true">
                    {decisionSource === "protected_override" ? (
                      <ShieldCheck size={28} className="text-emerald-400" />
                    ) : decisionSource === "bypass_baseline" ? (
                      <ShieldAlert size={28} className="text-amber-400" />
                    ) : (
                      <Shield size={28} className="text-cyan-400" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div
                      data-testid="final-command-text"
                      className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight leading-snug"
                    >
                      {intentPresentation[finalCommand].primary}
                    </div>
                    <div className="text-xs font-mono text-neutral-400 tracking-wide mt-0.5">
                      {intentPresentation[finalCommand].secondary}
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <span
                    className={`inline-block font-mono text-xs px-3 py-1 rounded-md font-semibold tracking-wider ${
                      decisionSource === "protected_override"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : decisionSource === "bypass_baseline"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                        : "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    }`}
                  >
                    {decisionSource === "protected_override"
                      ? lang === "kk"
                        ? "ҚОРҒАЛҒАН ТҮЗЕТУ"
                        : "PROTECTED OVERRIDE"
                      : decisionSource === "bypass_baseline"
                      ? lang === "kk"
                        ? "ҚОРҒАНЫССЫЗ БАЙПАС"
                        : "UNPROTECTED BYPASS"
                      : lang === "kk"
                      ? "БАЗАЛЫҚ КОМАНДА САҚТАЛДЫ"
                      : "BASELINE PRESERVED"}
                  </span>
                </div>

                <p className="font-sans text-xs sm:text-sm text-neutral-300 mt-3 leading-relaxed">
                  {lang === "kk" ? simulationResult.reasonKz : simulationResult.reasonEn}
                </p>
              </div>

              {/* Decoders Confidence Summary Chips */}
              <div className="pt-4 mt-4 border-t border-white/[0.08] grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] text-neutral-500 uppercase">Базалық декодер</div>
                  <div className="font-semibold text-white mt-0.5">{baselinePrediction.confidence}%</div>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] text-cyan-400 uppercase">Сарапшы маржасы</div>
                  <div className="font-semibold text-cyan-300 mt-0.5">Δ {marginDelta >= 0 ? `+${marginDelta}` : marginDelta} p.p.</div>
                </div>
              </div>
            </div>

            {/* Waveform Oscilloscope (Mobile: order-2, Desktop: order-1 / 7 cols) */}
            <div className="order-2 lg:order-1 lg:col-span-7 p-5 sm:p-7 bg-[#05070a] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-sans font-medium text-neutral-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>
                      {lang === "kk"
                        ? "СИМУЛЯЦИЯЛАНҒАН ОСЦИЛЛОГРАММА (C3/C4 250 HZ)"
                        : "SIMULATED EEG OSCILLOGRAM (C3/C4 250 HZ)"}
                    </span>
                  </span>

                  <button
                    type="button"
                    data-testid="waveform-freeze-btn"
                    onClick={() => setIsRunning(!isRunning)}
                    className="px-2.5 py-1 rounded border border-white/10 bg-white/[0.04] text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono cursor-pointer"
                  >
                    {isRunning ? (
                      <>
                        <Pause size={12} />
                        <span>{lang === "kk" ? "ТОҚТАТУ" : "FREEZE"}</span>
                      </>
                    ) : (
                      <>
                        <Play size={12} />
                        <span>{lang === "kk" ? "ЖАЛҒАСТЫРУ" : "RESUME"}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Live Waveform Canvas / SVG Container */}
                <div className="h-28 sm:h-36 w-full bg-[#040608] rounded-xl border border-white/[0.08] flex items-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                  <svg viewBox="0 0 640 90" className="w-full h-full stroke-cyan-400 fill-none relative z-10" preserveAspectRatio="none">
                    <path d={generateSimWave()} strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Bottom Signal Telemetry Metadata */}
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-3">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>ДИСКРЕТТЕУ: 250 S/s</span>
                </span>
                <span className={effectiveNoise >= 35 ? "text-rose-400 font-semibold" : "text-neutral-400"}>
                  ШУ ДЕҢГЕЙІ: {effectiveNoise}%
                </span>
              </div>
            </div>

          </div>

          {/* Compact 4-Gate Telemetry Ribbon (Sleek Simulator Bar) */}
          <div className="py-3.5 px-5 sm:px-7 border-b border-white/10 bg-[#050608]/90 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{lang === "kk" ? "ШЛЮЗДЕР КАСКАДЫ:" : "4-GATE CASCADE:"}</span>
              </span>

              {getCompactGateStatuses(simulationResult, protectionMode === "baseline_bypass").map((g) => (
                <div
                  key={g.id}
                  className={`px-2.5 py-1 rounded-md border text-[11px] flex items-center gap-1.5 transition-all ${
                    protectionMode === "baseline_bypass"
                      ? "border-white/10 bg-white/[0.02] text-neutral-500"
                      : g.passed
                      ? "border-emerald-500/40 bg-emerald-950/30 text-emerald-300 font-semibold shadow-[0_0_8px_rgba(16,185,129,0.15)]"
                      : "border-white/10 bg-white/[0.02] text-neutral-400"
                  }`}
                >
                  <span className="text-neutral-500 font-bold">{g.id}:</span>
                  <span className="font-sans font-medium">{lang === "kk" ? g.labelKz : g.labelEn}</span>
                  <span
                    className={`text-[9px] px-1 py-0.2 rounded font-bold ${
                      protectionMode === "baseline_bypass"
                        ? "bg-white/10 text-neutral-400"
                        : g.passed
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "bg-white/5 text-neutral-400"
                    }`}
                  >
                    {g.statusText}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#cascade"
              className="text-[11px] text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 group font-sans font-medium"
            >
              <span>{lang === "kk" ? "Шлюздер архитектурасы толығырақ" : "Explore Full 4-Gate Route"}</span>
              <span className="group-hover:translate-x-0.5 transition-transform font-mono">→</span>
            </a>
          </div>

          {/* Collapsible Advanced Manual Workbench Drawer */}
          <div className="bg-[#06080c]">
            <button
              type="button"
              onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
              className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors font-sans text-xs sm:text-sm text-neutral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Sliders size={14} className="text-cyan-400" />
                <span className="font-medium">
                  {lang === "kk"
                    ? "Қосымша параметрлер мен декодерлерді баптау"
                    : "Advanced Parameter Tuning & Decoders"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400 text-xs font-sans">
                <span>
                  {isAdvancedOpen
                    ? lang === "kk"
                      ? "Жасыру"
                      : "Collapse"
                    : lang === "kk"
                    ? "Ашу"
                    : "Expand"}
                </span>
                {isAdvancedOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </button>

          {isAdvancedOpen && (
            <div className="p-5 sm:p-8 border-t border-white/[0.08] space-y-8 bg-[#06080c]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Controls (6 cols) */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Architecture Mode Toggle */}
                  <div>
                    <label className="text-xs font-mono text-neutral-400 block mb-2 flex items-center justify-between">
                      <span>{lang === "kk" ? "Қорғаныс архитектурасы:" : "Protection Architecture:"}</span>
                      <span
                        className={
                          protectionMode === "miora_cascade"
                            ? "text-emerald-400 font-semibold"
                            : "text-amber-400 font-semibold"
                        }
                      >
                        {protectionMode === "miora_cascade" ? "MIORA 4-GATE" : "STANDARD BYPASS"}
                      </span>
                    </label>
                    <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                      <button
                        type="button"
                        onClick={() => setProtectionMode("miora_cascade")}
                        className={`py-2.5 px-3 rounded-xl border text-left transition-all ${
                          protectionMode === "miora_cascade"
                            ? "border-emerald-500/60 bg-emerald-950/30 text-white shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                            : "border-white/10 bg-[#050608] text-neutral-500 hover:text-white hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 font-bold text-emerald-400 text-xs">
                          <ShieldCheck size={14} />
                          <span>MIORA 4-ШЛЮЗ</span>
                        </div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">Қауіпсіз тексеру</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setProtectionMode("baseline_bypass")}
                        className={`py-2.5 px-3 rounded-xl border text-left transition-all ${
                          protectionMode === "baseline_bypass"
                            ? "border-amber-500/60 bg-amber-950/30 text-white shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                            : "border-white/10 bg-[#050608] text-neutral-500 hover:text-white hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 font-bold text-amber-400 text-xs">
                          <ShieldAlert size={14} />
                          <span>ҚОРҒАНЫССЫЗ</span>
                        </div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">Базалық декодер</div>
                      </button>
                    </div>
                  </div>

                  {/* Chewing Toggle */}
                  <div>
                    <label className="text-xs font-mono text-neutral-400 block mb-2">
                      {lang === "kk" ? "1. Шайнау қимылы (EMG Noise):" : "1. Jaw Muscle Contraction (EMG):"}
                    </label>
                    <button
                      type="button"
                      onClick={() => setChewingActive(!chewingActive)}
                      className={`w-full py-3 px-4 rounded-xl border font-mono text-xs tracking-wider transition-all flex items-center justify-between ${
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
                        <span>
                          {chewingActive
                            ? lang === "kk"
                              ? "ШАЙНАУ БЕЛСЕНДІ (КЕДЕРГІ БАР)"
                              : "CHEWING ACTIVE (EMG BURST)"
                            : lang === "kk"
                            ? "ТЫНЫШТЫҚ (ТАЗА ЭЭГ)"
                            : "QUIET EEG (NO CHEWING)"}
                        </span>
                      </span>
                      <span className="text-[10px] opacity-75">{chewingActive ? "ON" : "OFF"}</span>
                    </button>
                  </div>

                  {/* Noise Slider */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-neutral-400">
                        {lang === "kk" ? "2. Шудың қуаттылығы:" : "2. Noise Amplitude Level:"}
                      </span>
                      <span
                        className={`font-medium ${
                          noiseLevel >= 35 && chewingActive ? "text-rose-400" : "text-white"
                        }`}
                      >
                        {chewingActive ? `${noiseLevel}%` : "0%"}
                      </span>
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
                      <span className="text-cyan-400 font-semibold">Шек: ≥ 35%</span>
                      <span>100% (Макс)</span>
                    </div>
                  </div>

                  {/* User Profile */}
                  <div>
                    <label className="text-xs font-mono text-neutral-400 block mb-2">
                      {lang === "kk" ? "3. Қолданушының бейімделуі:" : "3. Participant Calibration:"}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setUserProfile("calibrated")}
                        className={`p-3 rounded-xl border text-xs font-mono text-left transition-all ${
                          userProfile === "calibrated"
                            ? "border-cyan-500/50 bg-cyan-950/20 text-white"
                            : "border-white/10 bg-[#050608] text-neutral-500 hover:border-white/20"
                        }`}
                      >
                        <div className="font-medium text-white mb-0.5">
                          {lang === "kk" ? "Калибрленген" : "Calibrated"}
                        </div>
                        <div className="text-[10px] text-cyan-400">
                          {lang === "kk" ? "Сарапшы рұқсат" : "Expert verified"}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setUserProfile("uncalibrated")}
                        className={`p-3 rounded-xl border text-xs font-mono text-left transition-all ${
                          userProfile === "uncalibrated"
                            ? "border-cyan-500/50 bg-cyan-950/20 text-white"
                            : "border-white/10 bg-[#050608] text-neutral-500 hover:border-white/20"
                        }`}
                      >
                        <div className="font-medium text-white mb-0.5">
                          {lang === "kk" ? "Жаңа қолданушы" : "Uncalibrated"}
                        </div>
                        <div className="text-[10px] text-amber-400">
                          {lang === "kk" ? "Сақтық режимі" : "Fail-safe hold"}
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Motor Intent */}
                  <div>
                    <label className="text-xs font-mono text-neutral-400 block mb-2">
                      {lang === "kk" ? "4. Адамның нақты ми ниеті:" : "4. Target Cortical Intent:"}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(["left", "right", "rest"] as const).map((intent) => (
                        <button
                          key={intent}
                          type="button"
                          onClick={() => setSelectedIntent(intent)}
                          className={`py-2 px-3 rounded-lg border text-xs font-mono text-center transition-all ${
                            selectedIntent === intent
                              ? "border-white bg-white text-black font-semibold shadow-sm"
                              : "border-white/10 bg-[#050608] text-neutral-400 hover:text-white hover:border-white/20"
                          }`}
                        >
                          {intent === "left"
                            ? lang === "kk"
                              ? "Сол қол"
                              : "Left"
                            : intent === "right"
                            ? lang === "kk"
                              ? "Оң қол"
                              : "Right"
                            : lang === "kk"
                            ? "Тыныштық"
                            : "Rest"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Reset Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      data-testid="simulator-reset-btn"
                      onClick={handleReset}
                      className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <RefreshCw size={12} />
                      <span>{lang === "kk" ? "Бастапқы күйге қайтару (Reset)" : "Reset to Default"}</span>
                    </button>
                  </div>
                </div>

                {/* Right Details & Telemetry (6 cols) */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    {lang === "kk" ? "Декодерлердің ішкі деректері:" : "Internal Decoder Predictions:"}
                  </div>

                  <div className="p-4 rounded-xl border border-white/[0.08] bg-[#050608]">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1.5 flex items-center justify-between">
                      <span>{lang === "kk" ? "Базалық декодер болжамы" : "Baseline Decoder"}</span>
                      <span className={baselinePrediction.isCorrect ? "text-emerald-400" : "text-rose-400"}>
                        {baselinePrediction.isCorrect ? "CORRECT" : "CORRUPTED"}
                      </span>
                    </div>
                    <div className="text-base font-medium text-white mb-0.5">
                      {intentPresentation[baselinePrediction.command].primary}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-400 mb-1">
                      {intentPresentation[baselinePrediction.command].secondary}
                    </div>
                    <div className="text-xs font-mono text-neutral-400">
                      {lang === "kk" ? "Сенімділік:" : "Confidence:"}{" "}
                      <span className="text-white font-semibold">{baselinePrediction.confidence}%</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-white/[0.08] bg-[#050608]">
                    <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Zap size={12} />
                        <span>{lang === "kk" ? "Қосымша сарапшы ұсынысы" : "Auxiliary Expert"}</span>
                      </span>
                      <span className="text-cyan-300 font-mono">
                        Δ = {marginDelta >= 0 ? `+${marginDelta}` : marginDelta} p.p.
                      </span>
                    </div>
                    <div className="text-base font-medium text-white mb-0.5">
                      {intentPresentation[expertPrediction.command].primary}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-400 mb-1">
                      {intentPresentation[expertPrediction.command].secondary}
                    </div>
                    <div className="text-xs font-mono text-neutral-400">
                      {lang === "kk" ? "Сенімділік:" : "Confidence:"}{" "}
                      <span className="text-cyan-300 font-semibold">{expertPrediction.confidence}%</span>
                    </div>
                  </div>

                  {/* Explanatory Note */}
                  <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] text-xs font-mono text-neutral-400 leading-relaxed">
                    <div className="text-white font-semibold mb-1">
                      {lang === "kk" ? "Шешім қабылдау механизмі:" : "Decision Architecture Rationale:"}
                    </div>
                    <p>
                      {lang === "kk"
                        ? "MIORA тек төрт критерий қатар расталғанда ғана эксперттің түзетуін қабылдайды. Белгісіздік кезінде базалық шешім өзгеріссіз сақталады («First, do no harm» қағидасы)."
                        : "MIORA permits expert override only when all 4 conditions are satisfied. Under ambiguity, the baseline command is safely preserved to prevent false interventions."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
