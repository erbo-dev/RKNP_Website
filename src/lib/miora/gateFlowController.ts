/**
 * Production Presentation Controller for GateFlow Architecture
 *
 * Manages deterministic sequence steps, node presentation states,
 * cancelation tokens, bypass routing, and reduced-motion adaptation.
 */

import { SimulationResult, GateResult } from "./types";

export type NodeStage = "idle" | "active" | "pass" | "held" | "bypass";

export interface NodePresentationState {
  stage: NodeStage;
  isCurrentPulse: boolean;
  isTerminal: boolean;
}

/**
 * Calculates the final stopping step along the 5-stage sequential route.
 * Step 0: Input
 * Step 1: Gate 1
 * Step 2: Gate 2
 * Step 3: Gate 3
 * Step 4: Gate 4
 * Step 5: Decision Output
 */
export function determineStopStage(result: SimulationResult, isBypass: boolean): number {
  if (isBypass) {
    // In bypass mode, cascade is bypassed and output is reached directly
    return 5;
  }

  // Sequential fail-safe: stop at the first gate that does not pass
  if (!result.gate1.passed) return 1;
  if (!result.gate2.passed) return 2;
  if (!result.gate3.passed) return 3;
  if (!result.gate4.passed) return 4;

  return 5;
}

/**
 * Resolves the presentation state of an individual gate node based on animation progress.
 */
export function resolveNodeStatus(
  gateIndex: number, // 0 for G1, 1 for G2, 2 for G3, 3 for G4
  gatePassed: boolean,
  currentStep: number,
  isBypass: boolean
): NodeStage {
  if (isBypass) return "bypass";
  if (currentStep < gateIndex + 1) return "idle";
  return gatePassed ? "pass" : "held";
}

/**
 * Deterministic presentation outcome metadata.
 */
export function resolveDecisionPresentation(result: SimulationResult, lang: "kk" | "en") {
  if (result.decisionSource === "protected_override") {
    return {
      type: "protected" as const,
      badgeText: lang === "kk" ? "4/4 ШЛЮЗ АШЫЛДЫ → ТҮЗЕТУ ЕНГІЗІЛДІ" : "ALL 4 GATES PASSED → OVERRIDE ARMED",
      pillText: "OVERRIDE",
      colorClass: "emerald",
      accentHex: "#10b981",
    };
  }
  if (result.decisionSource === "bypass_baseline") {
    return {
      type: "bypass" as const,
      badgeText: lang === "kk" ? "ҚОРҒАНЫССЫЗ ТІКЕЛЕЙ ШЫҒЫС (BYPASS)" : "DIRECT BASELINE (BYPASS ACTIVE)",
      pillText: "BYPASS",
      colorClass: "amber",
      accentHex: "#f59e0b",
    };
  }
  return {
    type: "held" as const,
    badgeText: lang === "kk" ? "БАСТАПҚЫ НИЕТ САҚТАЛДЫ (FAIL-SAFE)" : "BASELINE INTENT HELD (FAIL-SAFE)",
    pillText: "PRESERVE",
    colorClass: "cyan",
    accentHex: "#00e5ff",
  };
}

/**
 * Compact Gate status summary for the simulator ribbon.
 */
export interface CompactGateStatus {
  id: string;
  num: string;
  labelKz: string;
  labelEn: string;
  passed: boolean;
  statusText: string;
}

export function getCompactGateStatuses(result: SimulationResult, isBypass: boolean): CompactGateStatus[] {
  const gates: Array<{ id: string; num: string; kz: string; en: string; gate: GateResult }> = [
    { id: "G1", num: "01", kz: "Жеке сәйкестік", en: "Individual Fit", gate: result.gate1 },
    { id: "G2", num: "02", kz: "Шу шегі", en: "Noise Floor", gate: result.gate2 },
    { id: "G3", num: "03", kz: "Қайшылық", en: "Disagreement", gate: result.gate3 },
    { id: "G4", num: "04", kz: "Маржа (Δ)", en: "Margin Delta", gate: result.gate4 },
  ];

  return gates.map((g) => ({
    id: g.id,
    num: g.num,
    labelKz: g.kz,
    labelEn: g.en,
    passed: g.gate.passed,
    statusText: isBypass ? "BYPASS" : g.gate.passed ? "PASS" : "HELD",
  }));
}

/**
 * Production Playback Session Controller with deterministic step timers and cancelation
 */
export class PlaybackSession {
  public runId: number;
  public isCompleted: boolean = false;
  public currentStep: number = 0;
  private timerIds: any[] = [];

  constructor(
    runId: number,
    stopAt: number,
    stepIntervalMs: number,
    isReducedMotion: boolean,
    onStep: (step: number) => void,
    onComplete: () => void
  ) {
    this.runId = runId;
    if (isReducedMotion) {
      this.currentStep = stopAt;
      this.isCompleted = true;
      onStep(stopAt);
      onComplete();
      return;
    }

    for (let step = 1; step <= stopAt; step++) {
      const delay = step * stepIntervalMs;
      const t = setTimeout(() => {
        this.currentStep = step;
        onStep(step);
        if (step >= stopAt) {
          this.isCompleted = true;
          onComplete();
        }
      }, delay);
      this.timerIds.push(t);
    }
  }

  public cancel(): void {
    this.timerIds.forEach(clearTimeout);
    this.timerIds = [];
  }
}

/**
 * 3D Diagnostic Mode Presentation Mapping
 */
export interface DiagnosticModeDefinition {
  cameraPreset: "motor" | "temporal" | "front";
  activeLobe: "motor" | "temporal" | "frontal";
  emphasizedChannelName: string;
  expectedMinLineWidth: number;
}

export const DIAGNOSTIC_MODE_MAPPING: Record<"intent" | "noise" | "cascade", DiagnosticModeDefinition> = {
  intent: {
    cameraPreset: "motor",
    activeLobe: "motor",
    emphasizedChannelName: "C3/C4",
    expectedMinLineWidth: 2.2,
  },
  noise: {
    cameraPreset: "temporal",
    activeLobe: "temporal",
    emphasizedChannelName: "T3/T4",
    expectedMinLineWidth: 2.4,
  },
  cascade: {
    cameraPreset: "front",
    activeLobe: "frontal",
    emphasizedChannelName: "MIORA СҮЗГІЛЕНГЕН НИЕТ",
    expectedMinLineWidth: 2.4,
  },
};

