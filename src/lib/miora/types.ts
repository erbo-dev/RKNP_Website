/**
 * Core Types for MIORA Simulation & Electrophysiology
 */

export type MotorIntent = "left" | "right" | "rest";

export type UserProfile = "calibrated" | "uncalibrated";

export type ProtectionMode = "baseline_bypass" | "miora_cascade";

export type PresetScenarioId = "clean_signal" | "noise_bypass" | "noise_protected" | "custom";

export interface SimulationInput {
  chewingActive: boolean;
  noiseLevel: number; // 0 to 100%
  userProfile: UserProfile;
  selectedIntent: MotorIntent;
  protectionMode: ProtectionMode;
}

export interface GateResult {
  passed: boolean;
  id: "GATE_01" | "GATE_02" | "GATE_03" | "GATE_04";
  nameKz: string;
  nameEn: string;
  conditionKz: string;
  conditionEn: string;
  statusKz: string;
  statusEn: string;
  detail: string;
}

export interface DecoderPrediction {
  command: MotorIntent;
  confidence: number; // Percentage (0 - 100)
  isCorrect: boolean;
}

export interface ExpertPrediction {
  command: MotorIntent;
  confidence: number; // Percentage (0 - 100)
}

export interface SimulationResult {
  effectiveNoise: number;
  baselinePrediction: DecoderPrediction;
  expertPrediction: ExpertPrediction;
  marginDelta: number; // Percentage points difference: Expert - Baseline
  gate1: GateResult;
  gate2: GateResult;
  gate3: GateResult;
  gate4: GateResult;
  allGatesPassed: boolean;
  finalCommand: MotorIntent;
  isOverrideApplied: boolean;
  decisionSource: "baseline_preserved" | "protected_override" | "bypass_baseline";
  reasonKz: string;
  reasonEn: string;
}

export interface PresetScenario {
  id: PresetScenarioId;
  titleKz: string;
  titleEn: string;
  descriptionKz: string;
  descriptionEn: string;
  state: SimulationInput;
}

