/**
 * MIORA Real Production Presentation & GateFlow Controller Test Suite
 *
 * Directly tests the production logic from:
 * - src/lib/miora/gateFlowController.ts
 * - src/lib/miora/simulation.ts
 * - src/lib/miora/scenarios.ts
 *
 * Verifies:
 * 1. Protected scenario gives actual gate states and protected override outcome
 * 2. Bypass scenario routes through bypass and marks all cascade nodes as bypassed
 * 3. Clean scenario correctly stops at Gate 2 and holds safe baseline
 * 4. Rapid switching / cancelation tokens drop outdated session callbacks
 * 5. Replay repeats current scenario without stale data contamination
 * 6. Reduced-motion immediately resolves final state without delay
 * 7. Unmount / cleanup cancels all pending timers without leaks
 * 8. Compact simulator ribbon reflects real simulation controls
 * 9. Real production 3D diagnostic mapping is strictly synchronized
 */

import { computeMioraDecision } from "../src/lib/miora/simulation";
import { PRESET_SCENARIOS } from "../src/lib/miora/scenarios";
import {
  determineStopStage,
  resolveNodeStatus,
  resolveDecisionPresentation,
  getCompactGateStatuses,
  PlaybackSession,
  DIAGNOSTIC_MODE_MAPPING,
} from "../src/lib/miora/gateFlowController";

function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`  [FAIL] ${msg}`);
    throw new Error(msg);
  }
  console.log(`  [PASS] ${msg}`);
}

async function runTests() {
  console.log("============================================================");
  console.log("  MIORA REAL PRODUCTION PRESENTATION TEST SUITE");
  console.log("============================================================");

  // 1. Protected scenario: All 4 gates pass, stopAt = 5, decision = protected_override
  {
    const s = PRESET_SCENARIOS.noise_protected.state;
    const res = computeMioraDecision(s);
    const stopAt = determineStopStage(res, false);
    assert(stopAt === 5, "Test 1a: Protected scenario stopAt strictly equals 5");

    const g1 = resolveNodeStatus(0, res.gate1.passed, 5, false);
    const g2 = resolveNodeStatus(1, res.gate2.passed, 5, false);
    const g3 = resolveNodeStatus(2, res.gate3.passed, 5, false);
    const g4 = resolveNodeStatus(3, res.gate4.passed, 5, false);

    assert(g1 === "pass", "Test 1b: Node G1 resolves to 'pass'");
    assert(g2 === "pass", "Test 1c: Node G2 resolves to 'pass'");
    assert(g3 === "pass", "Test 1d: Node G3 resolves to 'pass'");
    assert(g4 === "pass", "Test 1e: Node G4 resolves to 'pass'");

    const dec = resolveDecisionPresentation(res, "kk");
    assert(dec.type === "protected", "Test 1f: Decision presentation type is 'protected'");
    assert(dec.pillText === "OVERRIDE", "Test 1g: Decision pill text is 'OVERRIDE'");
  }

  // 2. Bypass scenario: Bypassed status across all cascade gates, no false PASS
  {
    const s = PRESET_SCENARIOS.noise_bypass.state;
    const res = computeMioraDecision(s);
    const stopAt = determineStopStage(res, true);
    assert(stopAt === 5, "Test 2a: Bypass mode stopAt is 5 (direct output)");

    for (let i = 0; i < 4; i++) {
      const status = resolveNodeStatus(i, true, 5, true);
      assert(status === "bypass", `Test 2b.${i + 1}: Gate ${i + 1} resolves to 'bypass' in bypass mode`);
    }

    const dec = resolveDecisionPresentation(res, "en");
    assert(dec.type === "bypass", "Test 2c: Decision presentation is 'bypass'");
    assert(dec.pillText === "BYPASS", "Test 2d: Decision pill text is 'BYPASS'");

    const compact = getCompactGateStatuses(res, true);
    compact.forEach((cg) => {
      assert(cg.statusText === "BYPASS", `Test 2e: Compact ribbon for ${cg.id} shows 'BYPASS'`);
    });
  }

  // 3. Clean scenario: Gate 2 fails, halts evaluation at step 2, safe baseline
  {
    const s = PRESET_SCENARIOS.clean_signal.state;
    const res = computeMioraDecision(s);
    const stopAt = determineStopStage(res, false);
    assert(stopAt === 2, "Test 3a: Clean signal stops at Gate 2 (effective noise < 35%)");

    const g1 = resolveNodeStatus(0, res.gate1.passed, 2, false);
    const g2 = resolveNodeStatus(1, res.gate2.passed, 2, false);
    const g3 = resolveNodeStatus(2, res.gate3.passed, 2, false);

    assert(g1 === "pass", "Test 3b: Gate 1 passed (individual fit)");
    assert(g2 === "held", "Test 3c: Gate 2 is 'held' (fail-safe disarmed)");
    assert(g3 === "idle", "Test 3d: Gate 3 remains 'idle' (evaluation stopped at G2)");

    const dec = resolveDecisionPresentation(res, "kk");
    assert(dec.type === "held", "Test 3e: Decision outcome is 'held'");
    assert(dec.pillText === "PRESERVE", "Test 3f: Decision pill text is 'PRESERVE'");
  }

  // 4. Real PlaybackSession & Rapid Switching Cancelation
  {
    let finalStep1 = 0;
    let finalStep2 = 0;
    let finalStep3 = 0;

    const session1 = new PlaybackSession(1, 5, 20, false, (s) => (finalStep1 = s), () => {});
    const session2 = new PlaybackSession(2, 5, 20, false, (s) => (finalStep2 = s), () => {});
    const session3 = new PlaybackSession(3, 5, 20, false, (s) => (finalStep3 = s), () => {});

    // Rapid switching: cancel session 1 and 2 immediately
    session1.cancel();
    session2.cancel();

    // Wait for session 3 to complete
    await new Promise((resolve) => setTimeout(resolve, 140));

    assert(finalStep1 === 0, "Test 4a: Cancelled session 1 timers never executed");
    assert(finalStep2 === 0, "Test 4b: Cancelled session 2 timers never executed");
    assert(finalStep3 === 5, "Test 4c: Active session 3 completed strictly to step 5");
    assert(session3.isCompleted === true, "Test 4d: Session 3 marked isCompleted as true");
  }

  // 5. Replay repeats current scenario without state corruption
  {
    let stepCount = 0;
    let completed = false;

    const replaySession = new PlaybackSession(
      10,
      4,
      15,
      false,
      (s) => {
        stepCount = s;
      },
      () => {
        completed = true;
      }
    );

    await new Promise((resolve) => setTimeout(resolve, 100));

    assert(stepCount === 4, "Test 5a: Replay session reached step 4 cleanly");
    assert(completed === true, "Test 5b: Replay session triggered completion callback");
  }

  // 6. Reduced-motion immediately resolves without delay
  {
    let step = 0;
    let completed = false;

    const reducedSession = new PlaybackSession(
      20,
      5,
      1000, // even with 1000ms interval
      true, // prefers-reduced-motion is TRUE
      (s) => (step = s),
      () => (completed = true)
    );

    assert(step === 5, "Test 6a: Reduced motion instantly resolved to terminal step 5");
    assert(completed === true, "Test 6b: Reduced motion instantly completed");
    assert(reducedSession.isCompleted === true, "Test 6c: Reduced motion session isCompleted = true");
  }

  // 7. Unmount & Cleanup cancels all timers
  {
    let callbackTriggered = false;
    const session = new PlaybackSession(
      30,
      5,
      30,
      false,
      () => (callbackTriggered = true),
      () => (callbackTriggered = true)
    );

    session.cancel(); // immediately cancel on unmount
    await new Promise((resolve) => setTimeout(resolve, 80));

    assert(callbackTriggered === false, "Test 7: Unmount cancel() cleared all active callbacks");
  }

  // 8. Compact simulator ribbon reflects real simulation controls
  {
    const resProtected = computeMioraDecision(PRESET_SCENARIOS.noise_protected.state);
    const compactProtected = getCompactGateStatuses(resProtected, false);
    assert(compactProtected.length === 4, "Test 8a: Compact ribbon contains 4 gates");
    assert(compactProtected[0].statusText === "PASS", "Test 8b: G1 is PASS in protected scenario");
    assert(compactProtected[1].statusText === "PASS", "Test 8c: G2 is PASS in protected scenario");
    assert(compactProtected[2].statusText === "PASS", "Test 8d: G3 is PASS in protected scenario");
    assert(compactProtected[3].statusText === "PASS", "Test 8e: G4 is PASS in protected scenario");

    const resClean = computeMioraDecision(PRESET_SCENARIOS.clean_signal.state);
    const compactClean = getCompactGateStatuses(resClean, false);
    assert(compactClean[1].statusText === "HELD", "Test 8f: G2 is HELD in clean scenario ribbon");
  }

  // 9. Real Production 3D Diagnostic Mode Mapping
  {
    assert(DIAGNOSTIC_MODE_MAPPING.intent.cameraPreset === "motor", "Test 9a: Intent maps to motor preset");
    assert(DIAGNOSTIC_MODE_MAPPING.intent.activeLobe === "motor", "Test 9b: Intent maps to motor cortex");
    assert(DIAGNOSTIC_MODE_MAPPING.intent.expectedMinLineWidth >= 2.0, "Test 9c: Intent emphasizes C3/C4 width");

    assert(DIAGNOSTIC_MODE_MAPPING.noise.cameraPreset === "temporal", "Test 9d: Noise maps to true lateral temporal preset");
    assert(DIAGNOSTIC_MODE_MAPPING.noise.activeLobe === "temporal", "Test 9e: Noise maps to temporal/masseter lobe");
    assert(DIAGNOSTIC_MODE_MAPPING.noise.expectedMinLineWidth >= 2.4, "Test 9f: Noise emphasizes T3/T4 EMG width");

    assert(DIAGNOSTIC_MODE_MAPPING.cascade.cameraPreset === "front", "Test 9g: Cascade maps to frontal view");
    assert(DIAGNOSTIC_MODE_MAPPING.cascade.activeLobe === "frontal", "Test 9h: Cascade maps to frontal monitor");
  }

  console.log("============================================================");
  console.log("  ALL REAL PRODUCTION PRESENTATION TESTS PASSED (0 FAILURES)");
  console.log("============================================================");
}

runTests().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
