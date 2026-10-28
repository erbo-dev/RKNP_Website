/**
 * Deterministic Simulation Engine for MIORA Decision-Protection Cascade
 * Implements pure evaluation logic with honest scientific thresholds.
 */

import {
  SimulationInput,
  SimulationResult,
  GateResult,
  DecoderPrediction,
  ExpertPrediction,
  MotorIntent,
} from "./types";

export const NOISE_THRESHOLD = 35; // Empirically calibrated EMG threshold (%)
export const MARGIN_THRESHOLD = 15; // Required expert confidence margin delta (percentage points)

/**
 * Computes deterministic baseline decoder prediction under simulated noise.
 */
export function computeBaselineDecoder(
  intent: MotorIntent,
  effectiveNoise: number
): DecoderPrediction {
  if (effectiveNoise < NOISE_THRESHOLD) {
    // Clean signal: accurate classification with high baseline confidence
    const confidence = Math.max(82, Math.round(92 - effectiveNoise * 0.2));
    return {
      command: intent,
      confidence,
      isCorrect: true,
    };
  }

  // Corrupted by high-frequency EMG bursts: systematic misclassification
  let corruptedCommand: MotorIntent;
  if (intent === "left") {
    corruptedCommand = "right";
  } else if (intent === "right") {
    corruptedCommand = "left";
  } else {
    // intent === "rest" -> distorted into false motor activation
    corruptedCommand = "right";
  }

  // Confidence drops as noise increases
  const confidence = Math.max(50, Math.round(82 - effectiveNoise * 0.35));

  return {
    command: corruptedCommand,
    confidence,
    isCorrect: corruptedCommand === intent,
  };
}

/**
 * Computes auxiliary expert prediction for calibrated vs uncalibrated users.
 */
export function computeAuxiliaryExpert(
  intent: MotorIntent,
  userProfile: "calibrated" | "uncalibrated"
): ExpertPrediction {
  if (userProfile === "calibrated") {
    // Validated personalized model: correctly identifies intent with high confidence
    return {
      command: intent,
      confidence: 91,
    };
  }

  // Uncalibrated user profile: low generalizability, low confidence
  // Default fallback prediction
  const fallbackCommand: MotorIntent = intent === "left" ? "right" : "left";
  return {
    command: fallbackCommand,
    confidence: 58,
  };
}

/**
 * Main evaluation function of the MIORA Decision-Protection Cascade.
 * Deterministic and free of side-effects.
 */
export function computeMioraDecision(input: SimulationInput): SimulationResult {
  const { chewingActive, noiseLevel, userProfile, selectedIntent, protectionMode } = input;

  // 1. Effective EMG noise power
  const effectiveNoise = chewingActive ? Math.max(0, Math.min(100, noiseLevel)) : 0;

  // 2. Decoder predictions
  const baselinePrediction = computeBaselineDecoder(selectedIntent, effectiveNoise);
  const expertPrediction = computeAuxiliaryExpert(selectedIntent, userProfile);

  // 3. Margin Delta in percentage points (Expert Confidence - Baseline Confidence)
  const marginDelta = expertPrediction.confidence - baselinePrediction.confidence;

  // 4. Evaluate the 4 Cascade Gates
  const gate1Passed = userProfile === "calibrated";
  const gate2Passed = effectiveNoise >= NOISE_THRESHOLD;
  const gate3Passed = baselinePrediction.command !== expertPrediction.command;
  const gate4Passed = marginDelta >= MARGIN_THRESHOLD;

  const allGatesPassed = gate1Passed && gate2Passed && gate3Passed && gate4Passed;

  // Gate details for UI presentation
  const gate1: GateResult = {
    id: "GATE_01",
    passed: gate1Passed,
    nameKz: "Шлюз 01: Жеке пайда",
    nameEn: "Gate 01: Individual Fit",
    conditionKz: gate1Passed ? "Расталған (Калибрленген)" : "Тексерілмеген (Сақтық режимі)",
    conditionEn: gate1Passed ? "Authorized (Calibrated)" : "Unverified (Caution Mode)",
    statusKz: gate1Passed ? "ӨТТІ (PASS)" : "БҰҒАТТАЛДЫ",
    statusEn: gate1Passed ? "PASS" : "BLOCKED",
    detail: "Gain(Expert) > Threshold",
  };

  const gate2: GateResult = {
    id: "GATE_02",
    passed: gate2Passed,
    nameKz: "Шлюз 02: Шу шегі",
    nameEn: "Gate 02: Noise Threshold",
    conditionKz: `${effectiveNoise}% тіркелді (Шек: ≥ 35%)`,
    conditionEn: `${effectiveNoise}% detected (Floor: ≥ 35%)`,
    statusKz: gate2Passed ? "ӨТТІ (PASS)" : "БҰҒАТТАЛДЫ",
    statusEn: gate2Passed ? "PASS" : "BLOCKED",
    detail: "Power_HF(40-100Hz) ≥ θ_noise",
  };

  const gate3: GateResult = {
    id: "GATE_03",
    passed: gate3Passed,
    nameKz: "Шлюз 03: Декодерлер қайшылығы",
    nameEn: "Gate 03: Disagreement Check",
    conditionKz: gate3Passed ? "Екі түрлі команда ұсынылды" : "Екі алгоритм келісіп тұр",
    conditionEn: gate3Passed ? "Conflicting predictions" : "Decoders in consensus",
    statusKz: gate3Passed ? "ӨТТІ (PASS)" : "БҰҒАТТАЛДЫ",
    statusEn: gate3Passed ? "PASS" : "BLOCKED",
    detail: "Prediction_base ≠ Prediction_expert",
  };

  const gate4: GateResult = {
    id: "GATE_04",
    passed: gate4Passed,
    nameKz: "Шлюз 04: Сенімділік маржасы",
    nameEn: "Gate 04: Confidence Margin",
    conditionKz: `Δ = ${marginDelta >= 0 ? "+" : ""}${marginDelta} п.п. (Шек: ≥ +15 п.п.)`,
    conditionEn: `Δ = ${marginDelta >= 0 ? "+" : ""}${marginDelta} p.p. (Threshold: ≥ +15 p.p.)`,
    statusKz: gate4Passed ? "ӨТТІ (PASS)" : "БҰҒАТТАЛДЫ",
    statusEn: gate4Passed ? "PASS" : "BLOCKED",
    detail: "Margin(Expert) - Margin(Base) ≥ Δ_margin",
  };

  // 5. Final Decision Determination
  if (protectionMode === "baseline_bypass") {
    return {
      effectiveNoise,
      baselinePrediction,
      expertPrediction,
      marginDelta,
      gate1,
      gate2,
      gate3,
      gate4,
      allGatesPassed,
      finalCommand: baselinePrediction.command,
      isOverrideApplied: false,
      decisionSource: "bypass_baseline",
      reasonKz: "Қорғаныс өшірулі (Bypass): команда тікелей базалық декодерден қабылданды.",
      reasonEn: "Protection bypassed: command emitted directly from baseline decoder.",
    };
  }

  // Protection is active: MIORA Cascade
  if (allGatesPassed) {
    return {
      effectiveNoise,
      baselinePrediction,
      expertPrediction,
      marginDelta,
      gate1,
      gate2,
      gate3,
      gate4,
      allGatesPassed: true,
      finalCommand: expertPrediction.command,
      isOverrideApplied: true,
      decisionSource: "protected_override",
      reasonKz: "4 Шлюз түгел расталды: сарапшы түзетуі қауіпсіз енгізілді.",
      reasonEn: "All 4 gates passed: expert correction securely applied.",
    };
  }

  // At least one gate failed -> Fail-safe baseline preservation
  return {
    effectiveNoise,
    baselinePrediction,
    expertPrediction,
    marginDelta,
    gate1,
    gate2,
    gate3,
    gate4,
    allGatesPassed: false,
    finalCommand: baselinePrediction.command,
    isOverrideApplied: false,
    decisionSource: "baseline_preserved",
    reasonKz: "Шлюз толық өтпеді: бастапқы шешім қаз-қалпында сақталды (Baseline Preserved).",
    reasonEn: "Gate condition failed: baseline command preserved (Fail-safe).",
  };
}

