/**
 * Authoritative TypeScript Unit Test Suite for MIORA Simulation Engine
 * Directly imports and validates production TypeScript modules:
 * - src/lib/miora/simulation.ts
 * - src/lib/miora/scenarios.ts
 *
 * Runs via tsx without intermediate mock translations or Python copies.
 */

import {
  computeMioraDecision,
  computeBaselineDecoder,
  computeAuxiliaryExpert,
  NOISE_THRESHOLD,
  MARGIN_THRESHOLD,
} from "../src/lib/miora/simulation";
import {
  PRESET_SCENARIOS,
  DEFAULT_SIMULATION_STATE,
  identifyScenario,
} from "../src/lib/miora/scenarios";
import { SimulationInput, MotorIntent } from "../src/lib/miora/types";

let passedCount = 0;
let failedCount = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  if (condition) {
    passedCount++;
    console.log(`  [PASS] ${testName}`);
  } else {
    failedCount++;
    console.error(`  [FAIL] ${testName}${detail ? ` - ${detail}` : ""}`);
  }
}

console.log("============================================================");
console.log("  MIORA PRODUCTION TYPESCRIPT SIMULATION TEST SUITE");
console.log("============================================================");

// 1. Inactive EMG forces effectiveNoise = 0 regardless of slider
{
  const res1 = computeMioraDecision({
    chewingActive: false,
    noiseLevel: 85,
    userProfile: "calibrated",
    selectedIntent: "left",
    protectionMode: "miora_cascade",
  });
  assert(
    res1.effectiveNoise === 0,
    "Invariant 1: Inactive chewing forces effectiveNoise = 0 regardless of noiseLevel",
    `Expected 0, got ${res1.effectiveNoise}`
  );
  assert(
    res1.gate2.passed === false,
    "Invariant 1b: Gate 2 is disarmed (false) when chewing is inactive"
  );
}

// 2. Gate 2 noise boundary (34% FAIL, 35% PASS, 36% PASS)
{
  const baseInput: SimulationInput = {
    chewingActive: true,
    noiseLevel: 34,
    userProfile: "calibrated",
    selectedIntent: "left",
    protectionMode: "miora_cascade",
  };
  const at34 = computeMioraDecision({ ...baseInput, noiseLevel: 34 });
  const at35 = computeMioraDecision({ ...baseInput, noiseLevel: 35 });
  const at36 = computeMioraDecision({ ...baseInput, noiseLevel: 36 });

  assert(
    at34.gate2.passed === false && at35.gate2.passed === true && at36.gate2.passed === true,
    "Invariant 2: Gate 2 noise boundary respects threshold >= 35 (34 fail, 35 pass, 36 pass)",
    `34: ${at34.gate2.passed}, 35: ${at35.gate2.passed}, 36: ${at36.gate2.passed}`
  );
}

// 3. Margin delta equals Expert - Baseline in percentage points
{
  const res = computeMioraDecision({
    chewingActive: true,
    noiseLevel: 70,
    userProfile: "calibrated",
    selectedIntent: "left",
    protectionMode: "miora_cascade",
  });
  const expectedDelta = res.expertPrediction.confidence - res.baselinePrediction.confidence;
  assert(
    res.marginDelta === expectedDelta,
    "Invariant 3: Margin delta strictly equals (Expert - Baseline) in percentage points",
    `Expected ${expectedDelta}, got ${res.marginDelta}`
  );

  // Gate 4 threshold boundary check
  const at14 = computeMioraDecision({
    chewingActive: true,
    noiseLevel: 10,
    userProfile: "calibrated",
    selectedIntent: "left",
    protectionMode: "miora_cascade",
  });
  assert(
    at14.gate4.passed === false,
    "Invariant 3b: Gate 4 strictly requires marginDelta >= 15 p.p."
  );
}

// 4. In bypass mode, result is always baseline and override is never applied
{
  const bypassRes = computeMioraDecision({
    chewingActive: true,
    noiseLevel: 70,
    userProfile: "calibrated",
    selectedIntent: "left",
    protectionMode: "baseline_bypass",
  });
  assert(
    bypassRes.finalCommand === bypassRes.baselinePrediction.command &&
      bypassRes.isOverrideApplied === false &&
      bypassRes.decisionSource === "bypass_baseline",
    "Invariant 4: Bypass mode always outputs baseline prediction without cascade override"
  );
}

// 5. In MIORA mode, any gate failure preserves baseline (fail-safe)
{
  // Fail Gate 1: uncalibrated user
  const failG1 = computeMioraDecision({
    chewingActive: true,
    noiseLevel: 70,
    userProfile: "uncalibrated",
    selectedIntent: "left",
    protectionMode: "miora_cascade",
  });
  assert(
    failG1.gate1.passed === false &&
      failG1.decisionSource === "baseline_preserved" &&
      failG1.isOverrideApplied === false &&
      failG1.finalCommand === failG1.baselinePrediction.command,
    "Invariant 5: Gate 1 failure triggers safe baseline preservation"
  );

  // Fail Gate 2: clean signal under MIORA mode
  const failG2 = computeMioraDecision({
    chewingActive: false,
    noiseLevel: 0,
    userProfile: "calibrated",
    selectedIntent: "left",
    protectionMode: "miora_cascade",
  });
  assert(
    failG2.gate2.passed === false &&
      failG2.decisionSource === "baseline_preserved" &&
      failG2.finalCommand === failG2.baselinePrediction.command,
    "Invariant 5b: Gate 2 failure (clean signal) safely preserves baseline"
  );
}

// 6. When all 4 gates pass, expert override is applied
{
  const allPass = computeMioraDecision({
    chewingActive: true,
    noiseLevel: 70,
    userProfile: "calibrated",
    selectedIntent: "left",
    protectionMode: "miora_cascade",
  });
  assert(
    allPass.gate1.passed &&
      allPass.gate2.passed &&
      allPass.gate3.passed &&
      allPass.gate4.passed &&
      allPass.allGatesPassed === true &&
      allPass.decisionSource === "protected_override" &&
      allPass.isOverrideApplied === true &&
      allPass.finalCommand === allPass.expertPrediction.command,
    "Invariant 6: All 4 gates passing arms protected expert override"
  );
}

// 7. Command consensus (baseline === expert) properly fails Gate 3
{
  const cleanInput: SimulationInput = {
    chewingActive: false,
    noiseLevel: 0,
    userProfile: "calibrated",
    selectedIntent: "left",
    protectionMode: "miora_cascade",
  };
  const res = computeMioraDecision(cleanInput);
  assert(
    res.baselinePrediction.command === res.expertPrediction.command &&
      res.gate3.passed === false,
    "Invariant 7: When baseline and expert agree, Gate 3 fails (no conflict to resolve)"
  );
}

// 8. Uncalibrated profile blocks Gate 1
{
  const expertUncal = computeAuxiliaryExpert("right", "uncalibrated");
  assert(
    expertUncal.confidence < 70,
    "Invariant 8: Uncalibrated user profile has low expert confidence (<70%)"
  );
}

// 9. Left, right, and rest intents do not create contradictory correctness flags
{
  const intents: MotorIntent[] = ["left", "right", "rest"];
  let nonContradictory = true;

  for (const intent of intents) {
    const clean = computeBaselineDecoder(intent, 0);
    if (!clean.isCorrect || clean.command !== intent) {
      nonContradictory = false;
    }
    const noisy = computeBaselineDecoder(intent, 75);
    if (noisy.isCorrect) {
      nonContradictory = false;
    }
  }

  assert(
    nonContradictory,
    "Invariant 9: Baseline decoder produces consistent, non-contradictory isCorrect for left/right/rest"
  );
}

// 10. Presets set consistent state and expected mode
{
  const p1 = PRESET_SCENARIOS.clean_signal;
  const p2 = PRESET_SCENARIOS.noise_bypass;
  const p3 = PRESET_SCENARIOS.noise_protected;

  const res1 = computeMioraDecision(p1.state);
  const res2 = computeMioraDecision(p2.state);
  const res3 = computeMioraDecision(p3.state);

  assert(
    res1.decisionSource === "baseline_preserved" &&
      res2.decisionSource === "bypass_baseline" &&
      res3.decisionSource === "protected_override",
    "Invariant 10: The 3 preset scenarios produce mutually distinct, expected decision outcomes"
  );
}

// 11. Manual modification is detected as "custom"
{
  const customInput: SimulationInput = {
    chewingActive: true,
    noiseLevel: 42, // Non-preset value
    userProfile: "calibrated",
    selectedIntent: "left",
    protectionMode: "miora_cascade",
  };
  const scenarioId = identifyScenario(customInput);
  assert(
    scenarioId === "custom",
    "Invariant 11: Manual deviation from presets is correctly identified as 'custom'",
    `Got ${scenarioId}`
  );
}

// 12. Reset state verification
{
  const resetState = DEFAULT_SIMULATION_STATE;
  const resetScenario = identifyScenario(resetState);
  const resetRes = computeMioraDecision(resetState);

  assert(
    resetScenario === "noise_protected" &&
      resetRes.decisionSource === "protected_override" &&
      resetState.chewingActive === true &&
      resetState.noiseLevel === 70,
    "Invariant 12: Default reset state restores canonical 'noise_protected' configuration"
  );
}

console.log("============================================================");
console.log(`  SUMMARY: ${passedCount} PASSED, ${failedCount} FAILED`);
console.log("============================================================");

if (failedCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}

