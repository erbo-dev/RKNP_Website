"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import {
  ShieldCheck,
  ShieldAlert,
  Shield,
  Activity,
  UserCheck,
  Split,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Info,
  CheckCircle2,
  XCircle,
  LucideIcon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { SimulationResult, ProtectionMode, PresetScenarioId } from "@/lib/miora/types";
import {
  determineStopStage,
  resolveNodeStatus,
  resolveDecisionPresentation,
  PlaybackSession,
  NodeStage,
} from "@/lib/miora/gateFlowController";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export interface GateFlowProps {
  result: SimulationResult;
  protectionMode: ProtectionMode;
  activeScenarioId?: PresetScenarioId;
  onSelectScenario?: (presetId: Exclude<PresetScenarioId, "custom">) => void;
  showScenarioSelector?: boolean;
  compact?: boolean;
  className?: string;
}

interface GateNodeMeta {
  num: string;
  key: "gate1" | "gate2" | "gate3" | "gate4";
  icon: LucideIcon;
  nameKz: string;
  nameEn: string;
  shortKz: string;
  shortEn: string;
  ruleKz: string;
  ruleEn: string;
  detailKz: string;
  detailEn: string;
  metricLabelKz: string;
  metricLabelEn: string;
}

const GATE_METAS: GateNodeMeta[] = [
  {
    num: "01",
    key: "gate1",
    icon: UserCheck,
    nameKz: "G1 // Жеке сәйкестік",
    nameEn: "G1 // Individual Fit",
    shortKz: "Жеке сәйкестік",
    shortEn: "Individual Fit",
    ruleKz: "Сарапшы сенімі ≥ 70% және калибрленген бейін",
    ruleEn: "Expert Confidence ≥ 70% & calibrated profile",
    detailKz: "Әр адамның нейроанатомиясы ерекше. Қосымша сарапшы нақты осы қолданушының ми сигналына көмектесетіні расталғанда ғана қосылады.",
    detailEn: "Engages only if verified to improve decoding for this specific participant's neuroanatomy and muscle profile.",
    metricLabelKz: "Сарапшы сенімділігі",
    metricLabelEn: "Expert Confidence",
  },
  {
    num: "02",
    key: "gate2",
    icon: Activity,
    nameKz: "G2 // Шайнау шуы",
    nameEn: "G2 // Noise Floor",
    shortKz: "Шу шегі",
    shortEn: "Noise Floor",
    ruleKz: "ЭМГ кедергісі ≥ 35% шегінен асқанда",
    ruleEn: "Active EMG interference ≥ 35% floor",
    detailKz: "Жақ бұлшықеттері қимылдап, жоғары жиілікті шайнау кедергісі болғанда ғана сүзгі іске қосылады. Таза кезде жүйе араласпайды.",
    detailEn: "Triggers only during severe muscle interference. In quiet clean signal periods, the cascade disarms completely.",
    metricLabelKz: "Нақты шу күші",
    metricLabelEn: "Effective Noise",
  },
  {
    num: "03",
    key: "gate3",
    icon: Split,
    nameKz: "G3 // Қайшылық тексерісі",
    nameEn: "G3 // Disagreement",
    shortKz: "Қайшылық",
    shortEn: "Conflict Check",
    ruleKz: "Базалық декодер мен сарапшы шешімі қарама-қайшы",
    ruleEn: "Baseline decoder ≠ Expert prediction",
    detailKz: "Егер екі алгоритм бір команданы көрсетіп тұрса — түзетудің қажеті жоқ. Тек екеуі екі жаққа тартқанда ғана тексеру жалғасады.",
    detailEn: "Intervention is only considered when baseline and expert conflict. Consensus bypasses instantly.",
    metricLabelKz: "Шешімдер қайшылығы",
    metricLabelEn: "Decoder Disagreement",
  },
  {
    num: "04",
    key: "gate4",
    icon: ShieldCheck,
    nameKz: "G4 // Сенімділік маржасы",
    nameEn: "G4 // Margin Delta",
    shortKz: "Маржа (Δ)",
    shortEn: "Statistical Margin",
    ruleKz: "Сарапшы маржасы Δ ≥ 15 пайыздық тармақ",
    ruleEn: "Expert Margin Δ ≥ 15 percentage points",
    detailKz: "Қосымша сарапшы базалық модельден кемінде 15% артық сенімділік көрсеткенде ғана шешім ауыстырылады. Кішкене күмән болса — бастапқы ниет сақталады.",
    detailEn: "Expert must statistically exceed baseline by at least 15 p.p. Borderline calls safely preserve baseline.",
    metricLabelKz: "Сенім маржасы Δ",
    metricLabelEn: "Confidence Margin Δ",
  },
];

export default function GateFlow({
  result,
  protectionMode,
  activeScenarioId,
  onSelectScenario,
  showScenarioSelector = false,
  compact = false,
  className = "",
}: GateFlowProps) {
  const { lang } = useLanguage();

  const isBypass = protectionMode === "baseline_bypass";
  const [animStep, setAnimStep] = useState<number>(5);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [expandedGate, setExpandedGate] = useState<number | null>(null);

  const runIdRef = useRef<number>(0);

  // Check for reduced motion preference
  const isReducedMotion = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Sequential evaluation animation playback
  const triggerPlayback = useCallback(() => {
    if (isReducedMotion()) {
      setAnimStep(5);
      setIsAnimating(false);
      return;
    }

    const currentRunId = ++runIdRef.current;
    setIsAnimating(true);
    setAnimStep(0);

    const stopAt = determineStopStage(result, isBypass);
    const stepInterval = 180; // 180ms per checkpoint (~0.9s total)
    const timers: NodeJS.Timeout[] = [];

    if (isBypass) {
      // Direct Bypass Route playback
      const bypassTimer = setTimeout(() => {
        if (runIdRef.current === currentRunId) {
          setAnimStep(5);
          setIsAnimating(false);
        }
      }, 700);
      return () => clearTimeout(bypassTimer);
    }

    const session = new PlaybackSession(
      currentRunId,
      stopAt,
      stepInterval,
      isReducedMotion(),
      (step) => {
        if (runIdRef.current === currentRunId) {
          setAnimStep(step);
        }
      },
      () => {
        if (runIdRef.current === currentRunId) {
          setIsAnimating(false);
        }
      }
    );

    return () => session.cancel();
  }, [isBypass, isReducedMotion, result]);

  // Trigger playback when inputs change
  useEffect(() => {
    const cleanup = triggerPlayback();
    return () => {
      runIdRef.current++;
      if (cleanup) cleanup();
    };
  }, [
    result.finalCommand,
    result.effectiveNoise,
    result.decisionSource,
    protectionMode,
    activeScenarioId,
    triggerPlayback,
  ]);

  // Decision outcome presentation
  const decisionPresentation = useMemo(() => {
    return resolveDecisionPresentation(result, lang);
  }, [result, lang]);

  // Calculate bus line progress percentage (0 to 100%)
  const lineProgressPercent = useMemo(() => {
    if (isBypass) return 0; // bypassed line uses top arc
    const stopAt = determineStopStage(result, isBypass);
    const activeStep = Math.min(animStep, stopAt);
    return Math.min(100, Math.round((activeStep / 5) * 100));
  }, [isBypass, animStep, result]);

  // Coordinates for the 6 nodes along the horizontal SVG bus:
  // 0: Input (8%)
  // 1: G1 (24%)
  // 2: G2 (40%)
  // 3: G3 (56%)
  // 4: G4 (72%)
  // 5: Decision (92%)
  const nodePositions = [8, 24, 40, 56, 72, 92];

  return (
    <div className={`w-full ${className}`}>
      {/* Optional Preset Selector Ribbon inside #cascade */}
      {showScenarioSelector && onSelectScenario && (
        <div className="mb-6 p-4 rounded-xl border border-white/10 bg-[#06080d]/90 backdrop-blur-md">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-sans font-medium text-neutral-300 uppercase tracking-wider flex items-center gap-2">
              <Sparkles size={14} className="text-cyan-400" />
              <span>{lang === "kk" ? "Шлюздер логикасын сынау сценарийлері:" : "Evaluate Cascade Scenarios:"}</span>
            </span>
            <span className="text-[11px] font-mono text-neutral-400">
              Input ── G1 ── G2 ── G3 ── G4 ── Decision
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              {
                id: "clean_signal" as const,
                titleKz: "1. Таза сигнал (Clean)",
                titleEn: "1. Clean Signal",
                subKz: "Шу жоқ → G2 өтпейді → Базалық ниет сақталады",
                subEn: "No noise → G2 held → Safe baseline held",
              },
              {
                id: "noise_bypass" as const,
                titleKz: "2. ЭМГ Шуы (Bypass)",
                titleEn: "2. Noise (Bypass)",
                subKz: "Қорғаныс өшірулі → Шлюздер айналып өтіледі",
                subEn: "Protection off → Cascade safely bypassed",
              },
              {
                id: "noise_protected" as const,
                titleKz: "3. MIORA Қорғауы",
                titleEn: "3. MIORA Protected",
                subKz: "Шайнау шуы (70%) → 4/4 шлюз өтеді → Түзетілген",
                subEn: "Chewing noise (70%) → 4/4 pass → Override armed",
              },
            ].map((p) => {
              const isSelected = activeScenarioId === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  data-scenario={p.id}
                  onClick={() => onSelectScenario(p.id)}
                  className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "border-cyan-400 bg-cyan-950/30 text-white shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                      : "border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div className="font-sans text-xs font-semibold text-white flex items-center justify-between mb-0.5">
                    <span>{lang === "kk" ? p.titleKz : p.titleEn}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400 leading-snug">
                    {lang === "kk" ? p.subKz : p.subEn}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Single Architectural Schematic Surface */}
      <div className="rounded-2xl border border-white/15 bg-[#06080d]/95 backdrop-blur-xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
        {/* Fine background engineering coordinates */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Top Header & Replay Controls */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.08] mb-6">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#00e5ff]" />
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-white flex items-center gap-2">
                <span>{lang === "kk" ? "ТІЗБЕКТІ 4-ШЛЮЗДІК СӘУЛЕЛІК МАРШРУТ" : "SEQUENTIAL 4-GATE CIRCUIT ROUTE"}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-neutral-400 font-mono">
                  {isBypass ? "BYPASS ACTIVE" : "DETERMINISTIC EVALUATION"}
                </span>
              </div>
              <div className="text-[11px] font-sans text-neutral-400 mt-0.5 font-light">
                {lang === "kk"
                  ? "Сигнал қадамдап тексеріледі. Бағыт сызығы нақты шешімнің қабылдану траекториясын көрсетеді."
                  : "Continuous decision pipeline. The route highlights the verifiable path from raw EEG input to output."}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={triggerPlayback}
              disabled={isAnimating}
              className="px-3.5 py-1.5 rounded-lg border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 cursor-pointer disabled:opacity-50"
              title={lang === "kk" ? "Тізбекті қайта көрсету" : "Replay Pipeline Sequence"}
            >
              <RotateCcw size={12} className={isAnimating ? "animate-spin" : ""} />
              <span>{lang === "kk" ? "Қайта көрсету" : "Replay Flow"}</span>
            </button>
          </div>
        </div>

        {/* DESKTOP ROUTE-FIRST SCHEMATIC (Visible on md+: 768px - 1920px) */}
        <div className="hidden md:block relative z-10 py-6">
          
          {/* Main SVG Circuit Line Container */}
          <div className="relative w-full h-32 flex items-center">
            
            {/* SVG Connecting Tracks & Impulse */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              viewBox="0 0 1000 120"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Glow Filter for Active Circuit Line */}
                <filter id="circuit-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="bypass-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#fbbf24" stopOpacity="1" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* 1. Base Inactive Horizontal Route Track */}
              <line
                x1="80"
                y1="60"
                x2="920"
                y2="60"
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* 2. Active Evaluated Segment (Main Route) */}
              {!isBypass && lineProgressPercent > 0 && (
                <line
                  x1="80"
                  y1="60"
                  x2={80 + (840 * (lineProgressPercent / 100))}
                  y2="60"
                  stroke={result.decisionSource === "protected_override" ? "#10b981" : "#00e5ff"}
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#circuit-glow)"
                  className="transition-all duration-300"
                />
              )}

              {/* 3. Dedicated Curved BYPASS Route Arc (Input -> Decision in Bypass Mode) */}
              <path
                d="M 80,60 C 250,-10 750,-10 920,60"
                fill="none"
                stroke={isBypass ? "url(#bypass-grad)" : "rgba(255, 255, 255, 0.05)"}
                strokeWidth={isBypass ? "3" : "1.5"}
                strokeDasharray={isBypass ? "none" : "5,5"}
                className="transition-all duration-500"
                filter={isBypass ? "url(#circuit-glow)" : undefined}
              />

              {/* 4. Bypass Active Pulse Animation (traverses arc during playback) */}
              {isBypass && (
                <g>
                  <circle r="4" fill="#fbbf24">
                    <animateMotion
                      path="M 80,60 C 250,-10 750,-10 920,60"
                      dur="0.8s"
                      repeatCount="1"
                      fill="freeze"
                    />
                  </circle>
                  <text x="500" y="16" fill="#f59e0b" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                    [ BYPASS TRACK: DIRECT DECODER OUTPUT ]
                  </text>
                </g>
              )}

              {/* 5. Main Route Traveling Impulse Dot */}
              {!isBypass && isAnimating && (
                <circle
                  cx={80 + (840 * (Math.min(animStep, 5) / 5))}
                  cy="60"
                  r="5"
                  fill="#00e5ff"
                  className="shadow-lg transition-all duration-200"
                />
              )}
            </svg>

            {/* Checkpoint Nodes positioned along the line */}
            
            {/* STAGE 0: INPUT NODE (8% anchor) */}
            <div
              className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center -translate-x-1/2"
              style={{ left: "8%" }}
            >
              <div className="font-mono text-[10px] text-neutral-400 mb-1.5 uppercase tracking-wider">
                INPUT
              </div>
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all bg-[#070a12] ${
                  isBypass
                    ? "border-amber-400/80 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.3)]"
                    : "border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(0,229,255,0.3)]"
                }`}
              >
                <Activity size={18} />
              </div>
              <div className="font-sans text-[11px] font-semibold text-white mt-2">
                {lang === "kk" ? "Шикі сигнал" : "Raw Input"}
              </div>
              <div className="text-[10px] font-mono text-neutral-400">
                {result.effectiveNoise > 0 ? `${result.effectiveNoise}% EMG` : "Таза EEG"}
              </div>
            </div>

            {/* STAGES 1 to 4: 4 GATE CHECKPOINTS */}
            {GATE_METAS.map((meta, idx) => {
              const Icon = meta.icon;
              const gateResult = result[meta.key];
              const stage = resolveNodeStatus(idx, gateResult.passed, animStep, isBypass);
              const isPassed = stage === "pass";
              const isHeld = stage === "held";
              const isGateBypass = stage === "bypass";
              const isExpanded = expandedGate === idx;

              return (
                <div
                  key={meta.key}
                  className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center -translate-x-1/2 group cursor-pointer"
                  style={{ left: `${nodePositions[idx + 1]}%` }}
                  onClick={() => setExpandedGate(isExpanded ? null : idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setExpandedGate(isExpanded ? null : idx)}
                  aria-expanded={isExpanded}
                >
                  {/* Gate Label on top of line */}
                  <div className="font-sans text-[11px] font-medium text-neutral-300 mb-1.5 flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                    <span className="font-mono text-neutral-500 font-semibold">{meta.num}</span>
                    <span>{lang === "kk" ? meta.shortKz : meta.shortEn}</span>
                  </div>

                  {/* Compact Circular Checkpoint Node */}
                  <div
                    className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all bg-[#070a12] ${
                      isPassed
                        ? "border-emerald-500 bg-emerald-950/40 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                        : isHeld
                        ? "border-rose-500 bg-rose-950/40 text-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.3)]"
                        : isGateBypass
                        ? "border-white/15 bg-white/[0.02] text-neutral-500 opacity-60"
                        : "border-white/20 bg-white/[0.04] text-neutral-400"
                    }`}
                  >
                    <Icon size={16} />
                  </div>

                  {/* Status Pill below line */}
                  <div className="mt-2">
                    <span
                      className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                        isPassed
                          ? "border-emerald-500/40 bg-emerald-950/40 text-emerald-300"
                          : isHeld
                          ? "border-rose-500/40 bg-rose-950/40 text-rose-300"
                          : isGateBypass
                          ? "border-white/10 bg-white/[0.02] text-neutral-500"
                          : "border-white/10 bg-white/[0.04] text-neutral-400"
                      }`}
                    >
                      {isPassed ? "PASS" : isHeld ? "HELD" : isGateBypass ? "BYPASS" : "IDLE"}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* STAGE 5: DECISION OUTPUT (92% anchor) */}
            <div
              className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center -translate-x-1/2"
              style={{ left: "92%" }}
            >
              <div className="font-mono text-[10px] text-neutral-400 mb-1.5 uppercase tracking-wider">
                DECISION
              </div>

              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all bg-[#070a12] ${
                  result.decisionSource === "protected_override"
                    ? "border-emerald-400 text-emerald-400 shadow-[0_0_16px_rgba(16,185,129,0.4)]"
                    : result.decisionSource === "bypass_baseline"
                    ? "border-amber-400 text-amber-400 shadow-[0_0_16px_rgba(245,158,11,0.4)]"
                    : "border-cyan-400 text-cyan-400 shadow-[0_0_16px_rgba(0,229,255,0.4)]"
                }`}
              >
                {result.decisionSource === "protected_override" ? (
                  <ShieldCheck size={20} />
                ) : result.decisionSource === "bypass_baseline" ? (
                  <ShieldAlert size={20} />
                ) : (
                  <Shield size={20} />
                )}
              </div>

              <div className="font-sans text-[11px] font-semibold text-white mt-2">
                {result.decisionSource === "protected_override"
                  ? lang === "kk"
                    ? "Түзетілген"
                    : "Override"
                  : result.decisionSource === "bypass_baseline"
                  ? "Bypass"
                  : lang === "kk"
                  ? "Сақталған"
                  : "Preserved"}
              </div>

              <div className="mt-1">
                <span
                  className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                    result.decisionSource === "protected_override"
                      ? "border-emerald-500/40 bg-emerald-950/40 text-emerald-300"
                      : result.decisionSource === "bypass_baseline"
                      ? "border-amber-500/40 bg-amber-950/40 text-amber-300"
                      : "border-cyan-500/40 bg-cyan-950/40 text-cyan-300"
                  }`}
                >
                  {decisionPresentation.pillText}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* MOBILE FALLBACK (Retained for standard responsive safety) */}
        <div className="md:hidden relative z-10 space-y-2">
          {/* Mobile Input */}
          <div className="p-3 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Activity size={14} />
              </div>
              <div>
                <div className="font-sans text-xs font-semibold text-white">
                  {lang === "kk" ? "Input: Шикі сигнал" : "Input: Raw Signal"}
                </div>
                <div className="text-[10px] font-mono text-neutral-400">
                  {result.effectiveNoise > 0 ? `Шу: ${result.effectiveNoise}%` : "Шусыз таза"} · 250 S/s
                </div>
              </div>
            </div>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
              ACTIVE
            </span>
          </div>

          {/* Mobile 4 Gates */}
          {GATE_METAS.map((meta, idx) => {
            const Icon = meta.icon;
            const gateResult = result[meta.key];
            const stage = resolveNodeStatus(idx, gateResult.passed, animStep, isBypass);
            const isPassed = stage === "pass";
            const isHeld = stage === "held";
            const isGateBypass = stage === "bypass";

            return (
              <div
                key={meta.key}
                onClick={() => setExpandedGate(expandedGate === idx ? null : idx)}
                className={`p-3 rounded-lg border transition-all cursor-pointer ${
                  isPassed
                    ? "border-emerald-500/40 bg-emerald-950/20"
                    : isHeld
                    ? "border-rose-500/40 bg-rose-950/15"
                    : isGateBypass
                    ? "border-white/10 bg-white/[0.01] opacity-50"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-7 h-7 rounded-lg border flex items-center justify-center ${
                        isPassed
                          ? "border-emerald-500/30 bg-emerald-950/30 text-emerald-400"
                          : isHeld
                          ? "border-rose-500/30 bg-rose-950/30 text-rose-400"
                          : "border-white/10 bg-white/[0.03] text-neutral-400"
                      }`}
                    >
                      <Icon size={14} />
                    </div>
                    <div>
                      <div className="font-sans text-xs font-semibold text-white">
                        {lang === "kk" ? meta.nameKz : meta.nameEn}
                      </div>
                      <div className="text-[10px] font-mono text-neutral-400 line-clamp-1">
                        {lang === "kk" ? meta.ruleKz : meta.ruleEn}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded shrink-0 ${
                      isPassed
                        ? "bg-emerald-500/20 text-emerald-300"
                        : isHeld
                        ? "bg-rose-500/20 text-rose-300"
                        : isGateBypass
                        ? "bg-white/10 text-neutral-400"
                        : "bg-white/5 text-neutral-500"
                    }`}
                  >
                    {isPassed ? "PASS" : isHeld ? "HELD" : isGateBypass ? "BYPASS" : "IDLE"}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Mobile Final Output */}
          <div
            className={`p-3.5 rounded-lg border flex items-center justify-between ${
              result.decisionSource === "protected_override"
                ? "border-emerald-500/50 bg-emerald-950/30"
                : result.decisionSource === "bypass_baseline"
                ? "border-amber-500/50 bg-amber-950/30"
                : "border-cyan-500/40 bg-cyan-950/20"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center">
                <ShieldCheck size={16} className="text-cyan-400" />
              </div>
              <div>
                <div className="font-sans text-xs font-semibold text-white">
                  {lang === "kk" ? "Қорытынды шешім" : "Final Decision Output"}
                </div>
                <div className="text-[10px] font-mono text-neutral-300">
                  {decisionPresentation.badgeText}
                </div>
              </div>
            </div>

            <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-white/10 text-white">
              {decisionPresentation.pillText}
            </span>
          </div>
        </div>

        {/* Expandable Gate Deep Dive Drawer (Opens below the line on click/focus) */}
        {expandedGate !== null && (
          <div className="relative z-10 mt-6 p-4 rounded-xl border border-cyan-500/30 bg-[#05080f]/95 text-xs animate-fadeIn">
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-cyan-400 font-semibold text-sm">
                  {lang === "kk" ? GATE_METAS[expandedGate].nameKz : GATE_METAS[expandedGate].nameEn}
                </span>
                <span className="text-[10px] font-mono text-neutral-400">
                  {lang === "kk" ? "Шлюздің нақты шарттары" : "Strict Gate Threshold"}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setExpandedGate(null)}
                className="text-[11px] font-mono text-neutral-400 hover:text-white cursor-pointer px-2 py-0.5 rounded hover:bg-white/10"
              >
                ✕ {lang === "kk" ? "Жабу" : "Close"}
              </button>
            </div>

            <p className="text-neutral-300 leading-relaxed font-light mb-3">
              {lang === "kk" ? GATE_METAS[expandedGate].detailKz : GATE_METAS[expandedGate].detailEn}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px] font-mono">
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="text-neutral-500 block mb-0.5">
                  {lang === "kk" ? "Қатаң ереже:" : "Strict Rule Condition:"}
                </span>
                <span className="text-white font-medium">
                  {lang === "kk" ? GATE_METAS[expandedGate].ruleKz : GATE_METAS[expandedGate].ruleEn}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="text-neutral-500 block mb-0.5">
                  {lang === "kk" ? "Ағымдағы нәтиже:" : "Live Evaluation State:"}
                </span>
                <span
                  className={
                    result[GATE_METAS[expandedGate].key].passed
                      ? "text-emerald-400 font-bold"
                      : "text-rose-400 font-bold"
                  }
                >
                  {result[GATE_METAS[expandedGate].key].passed
                    ? lang === "kk"
                      ? "ШАРТ ОРЫНДАЛДЫ (PASS)"
                      : "CONDITION MET (PASS)"
                    : lang === "kk"
                    ? "БӨГЕТ ҚОЙЫЛДЫ (HELD)"
                    : "CONDITION BLOCKED (HELD)"}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Consolidated Outcome Legend (Replaces the 2 redundant giant cards) */}
        <div className="relative z-10 mt-6 pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-neutral-500 uppercase tracking-wider text-[10px]">
              {lang === "kk" ? "ҚОС ТАРМАҚТЫ ЕРЕЖЕ:" : "BIFURCATION RULES:"}
            </span>

            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>G1 ∧ G2 ∧ G3 ∧ G4 → <strong className="text-emerald-400">OVERRIDE</strong></span>
            </span>

            <span className="text-neutral-600">|</span>

            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>¬(G1 ∧ G2 ∧ G3 ∧ G4) → <strong className="text-cyan-400">SAFE HOLD</strong></span>
            </span>
          </div>

          <div className="text-[11px] text-neutral-400">
            {lang === "kk" ? result.reasonKz : result.reasonEn}
          </div>
        </div>
      </div>
    </div>
  );
}
