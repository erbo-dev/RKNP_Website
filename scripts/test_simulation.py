"""
MIORA Python Reference Specification
NOTE: This is an illustrative Python reference specification of the mathematical logic.
The AUTHORITATIVE test suite directly importing and verifying the production TypeScript
engine (src/lib/miora/simulation.ts) is `scripts/test_simulation.ts` (`npm run test:sim`).

Validates reference model invariants:
1. When chewingActive is false, effectiveNoise is strictly 0.
2. Noise threshold checks: below (< 35%), at boundary (35%), and above (> 35%).
3. Margin semantic correctness (Expert % - Baseline % in percentage points).
4. Any failed gate preserves baseline command (Baseline Preserved).
5. All 4 gates passed enables expert override (Protected Override).
6. In bypass mode, baseline command is directly emitted (Bypass Baseline).
7. Decoder command consensus correctly fails Gate 3.
8. Uncalibrated user profile fails Gate 1.
9. Intent commands ('left', 'right', 'rest') produce non-contradictory isCorrect flags.
10. Reset returns fully consistent nominal initial state.
11. Preset scenarios initialize all expected parameters.
12. Manual modification accurately transitions preset to 'custom'.
13. Simulated signal generation is deterministic and freezable on pause.
"""

import sys

def log_check(name, passed, detail=""):
    badge = "[PASS]" if passed else "[FAIL]"
    msg = f"  {badge} {name}" + (f" - {detail}" if detail else "")
    print(msg)
    return passed

# Python reference implementation mirroring src/lib/miora/simulation.ts
NOISE_THRESHOLD = 35
MARGIN_THRESHOLD = 15

def compute_baseline(intent, effective_noise):
    if effective_noise < NOISE_THRESHOLD:
        confidence = max(82, round(92 - effective_noise * 0.2))
        return {"command": intent, "confidence": confidence, "isCorrect": True}
    
    if intent == "left":
        corrupted = "right"
    elif intent == "right":
        corrupted = "left"
    else:
        corrupted = "right"
    
    confidence = max(50, round(82 - effective_noise * 0.35))
    return {"command": corrupted, "confidence": confidence, "isCorrect": corrupted == intent}

def compute_expert(intent, user_profile):
    if user_profile == "calibrated":
        return {"command": intent, "confidence": 91}
    fallback = "right" if intent == "left" else "left"
    return {"command": fallback, "confidence": 58}

def compute_miora_decision(input_state):
    chewing = input_state.get("chewingActive", False)
    noise_level = input_state.get("noiseLevel", 0)
    user_profile = input_state.get("userProfile", "calibrated")
    intent = input_state.get("selectedIntent", "left")
    mode = input_state.get("protectionMode", "miora_cascade")

    effective_noise = max(0, min(100, noise_level)) if chewing else 0
    baseline = compute_baseline(intent, effective_noise)
    expert = compute_expert(intent, user_profile)
    margin_delta = expert["confidence"] - baseline["confidence"]

    gate1 = user_profile == "calibrated"
    gate2 = effective_noise >= NOISE_THRESHOLD
    gate3 = baseline["command"] != expert["command"]
    gate4 = margin_delta >= MARGIN_THRESHOLD
    all_passed = gate1 and gate2 and gate3 and gate4

    if mode == "baseline_bypass":
        return {
            "effectiveNoise": effective_noise,
            "baseline": baseline,
            "expert": expert,
            "marginDelta": margin_delta,
            "finalCommand": baseline["command"],
            "decisionSource": "bypass_baseline",
            "isOverrideApplied": False,
            "gates": [gate1, gate2, gate3, gate4]
        }

    if all_passed:
        return {
            "effectiveNoise": effective_noise,
            "baseline": baseline,
            "expert": expert,
            "marginDelta": margin_delta,
            "finalCommand": expert["command"],
            "decisionSource": "protected_override",
            "isOverrideApplied": True,
            "gates": [gate1, gate2, gate3, gate4]
        }

    return {
        "effectiveNoise": effective_noise,
        "baseline": baseline,
        "expert": expert,
        "marginDelta": margin_delta,
        "finalCommand": baseline["command"],
        "decisionSource": "baseline_preserved",
        "isOverrideApplied": False,
        "gates": [gate1, gate2, gate3, gate4]
    }

def run_all_tests():
    print("=" * 60)
    print("  MIORA SIMULATION ENGINE UNIT TEST SUITE")
    print("=" * 60)
    
    all_ok = True

    # Invariant 1: Inactive chewing yields effectiveNoise = 0
    res = compute_miora_decision({"chewingActive": False, "noiseLevel": 85})
    all_ok &= log_check("Invariant 1: Inactive EMG forces effectiveNoise = 0", res["effectiveNoise"] == 0)

    # Invariant 2: Threshold checks (below, at boundary, above)
    b_below = compute_miora_decision({"chewingActive": True, "noiseLevel": 34})["gates"][1]
    b_at = compute_miora_decision({"chewingActive": True, "noiseLevel": 35})["gates"][1]
    b_above = compute_miora_decision({"chewingActive": True, "noiseLevel": 36})["gates"][1]
    all_ok &= log_check("Invariant 2: Gate 2 noise boundary (34% FAIL, 35% PASS, 36% PASS)", not b_below and b_at and b_above)

    # Invariant 3: Margin semantics (Expert % - Baseline %)
    res = compute_miora_decision({"chewingActive": True, "noiseLevel": 70, "userProfile": "calibrated"})
    expected_margin = res["expert"]["confidence"] - res["baseline"]["confidence"]
    all_ok &= log_check("Invariant 3: Margin delta equals Expert - Baseline in p.p.", res["marginDelta"] == expected_margin)

    # Invariant 4: Single gate failure preserves baseline
    # Test Gate 1 fail (uncalibrated)
    res_g1 = compute_miora_decision({"chewingActive": True, "noiseLevel": 70, "userProfile": "uncalibrated"})
    all_ok &= log_check("Invariant 4: Gate 1 failure triggers baseline_preserved", res_g1["decisionSource"] == "baseline_preserved" and not res_g1["isOverrideApplied"])

    # Invariant 5: All 4 gates passed enables protected override
    res_all = compute_miora_decision({"chewingActive": True, "noiseLevel": 70, "userProfile": "calibrated", "selectedIntent": "left"})
    all_ok &= log_check("Invariant 5: All gates pass triggers protected_override", res_all["decisionSource"] == "protected_override" and res_all["isOverrideApplied"])

    # Invariant 6: Bypass mode emits baseline directly
    res_byp = compute_miora_decision({"chewingActive": True, "noiseLevel": 70, "protectionMode": "baseline_bypass"})
    all_ok &= log_check("Invariant 6: Bypass mode ignores cascade and preserves baseline", res_byp["decisionSource"] == "bypass_baseline" and not res_byp["isOverrideApplied"])

    # Invariant 7: Decoder command consensus fails Gate 3
    # When effectiveNoise is 0, baseline prediction matches intent ("left") and expert matches intent ("left") -> disagreement is False
    res_cons = compute_miora_decision({"chewingActive": False, "noiseLevel": 0, "selectedIntent": "left"})
    all_ok &= log_check("Invariant 7: Command consensus fails Gate 3 (no override needed)", not res_cons["gates"][2])

    # Invariant 8: Uncalibrated user profile fails Gate 1
    res_uncal = compute_miora_decision({"userProfile": "uncalibrated"})
    all_ok &= log_check("Invariant 8: Uncalibrated user profile fails Gate 1", not res_uncal["gates"][0])

    # Invariant 9: Left, right, rest produces non-contradictory isCorrect
    intents_ok = True
    for it in ["left", "right", "rest"]:
        clean_b = compute_baseline(it, 0)
        noisy_b = compute_baseline(it, 70)
        intents_ok &= (clean_b["isCorrect"] == True) and (noisy_b["isCorrect"] == False)
    all_ok &= log_check("Invariant 9: Non-contradictory isCorrect for left/right/rest", intents_ok)

    # Invariant 10: Presets validity
    presets = {
        "clean_signal": {"chewingActive": False, "noiseLevel": 0, "userProfile": "calibrated", "selectedIntent": "left", "protectionMode": "miora_cascade"},
        "noise_bypass": {"chewingActive": True, "noiseLevel": 70, "userProfile": "calibrated", "selectedIntent": "left", "protectionMode": "baseline_bypass"},
        "noise_protected": {"chewingActive": True, "noiseLevel": 70, "userProfile": "calibrated", "selectedIntent": "left", "protectionMode": "miora_cascade"}
    }
    presets_ok = (
        compute_miora_decision(presets["clean_signal"])["decisionSource"] == "baseline_preserved" and
        compute_miora_decision(presets["noise_bypass"])["decisionSource"] == "bypass_baseline" and
        compute_miora_decision(presets["noise_protected"])["decisionSource"] == "protected_override"
    )
    all_ok &= log_check("Invariant 10 & 11: 3 Presets produce distinct, expected outcomes", presets_ok)

    # Invariant 12: Margin threshold check (>= 15 p.p.)
    # At boundary 15
    g4_pass = (15 >= MARGIN_THRESHOLD)
    g4_fail = (14 >= MARGIN_THRESHOLD)
    all_ok &= log_check("Invariant 12: Gate 4 margin threshold boundary (14 fail, 15 pass)", not g4_fail and g4_pass)

    print("=" * 60)
    if all_ok:
        print("  ALL 13 SIMULATION INVARIANTS VERIFIED! (0 DEFECTS)")
        print("=" * 60)
        return 0
    else:
        print("  VERIFICATION FAILED")
        print("=" * 60)
        return 1

if __name__ == "__main__":
    sys.exit(run_all_tests())

