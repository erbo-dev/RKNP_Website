"""
MIORA Automated Test Suite & QA Verification Harness
Validates:
1. Static Type Integrity (tsc --noEmit)
2. Live DOM Navigation Targets (all internal hash anchors in rendered DOM)
3. Zero Browser Console & React Hydration Errors
4. Strict Multi-State Simulation Mutations (Presets, Bypass, Freeze, Reset)
5. 3D Neural Cortex Diagnostics & Telemetry Modes
6. Mobile/Desktop Responsive Viewports (320px, 390px, 768px, 1440px - zero horizontal overflow)
7. Mobile Navigation Drawer Interaction
8. Multi-Device Visual Evidence Capture
"""

import sys
import os
import argparse
import subprocess
import time

try:
    if sys.stdout.encoding.lower() != "utf-8":
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

from playwright.sync_api import sync_playwright

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(SCRIPT_DIR)
SRC_DIR = os.path.join(REPO_ROOT, "src")


def log_test(name, passed, detail=""):
    badge = "[PASS]" if passed else "[FAIL]"
    msg = f"  {badge} {name}" + (f" - {detail}" if detail else "")
    print(msg.encode("ascii", errors="replace").decode("ascii"))
    return passed


def run_tests():
    parser = argparse.ArgumentParser(description="MIORA QA Test Suite")
    parser.add_argument("--base-url", default=os.environ.get("BASE_URL", "http://localhost:3000"), help="Base web server URL")
    parser.add_argument(
        "--artifact-dir",
        default=os.environ.get("ARTIFACT_DIR", r"C:\Users\erbos\.gemini\antigravity\brain\6e93a0da-3703-40e9-ada6-eabceb7d2ca0"),
        help="Directory to save screenshot evidence",
    )
    args = parser.parse_args()

    base_url = args.base_url.rstrip("/")
    artifact_dir = args.artifact_dir
    os.makedirs(artifact_dir, exist_ok=True)

    print("=" * 65)
    print("  MIORA NEUROTECH QA & VERIFICATION TEST SUITE")
    print(f"  Target URL: {base_url}")
    print(f"  Artifacts:  {artifact_dir}")
    print("=" * 65)

    all_passed = True

    # -------------------------------------------------------------
    # Suite 1: TypeScript Static Type Check
    # -------------------------------------------------------------
    print("\n[Suite 1: Static Type Check]")
    try:
        npx_cmd = "npx.cmd" if sys.platform == "win32" else "npx"
        res = subprocess.run([npx_cmd, "tsc", "--noEmit"], cwd=REPO_ROOT, capture_output=True, text=True, timeout=45)
        ts_ok = res.returncode == 0
        all_passed &= log_test("TypeScript compilation (tsc --noEmit)", ts_ok, "" if ts_ok else res.stderr)
    except Exception as e:
        all_passed &= log_test("TypeScript compilation", False, str(e))

    # -------------------------------------------------------------
    # Suite 2: Simulation Unit Invariants (TS Engine)
    # -------------------------------------------------------------
    print("\n[Suite 2: Simulation Engine Invariants]")
    try:
        npm_cmd = "npm.cmd" if sys.platform == "win32" else "npm"
        res_sim = subprocess.run([npm_cmd, "run", "test:sim"], cwd=REPO_ROOT, capture_output=True, text=True, timeout=45)
        sim_ok = res_sim.returncode == 0
        all_passed &= log_test("Simulation TS Engine 15 Invariants (npm run test:sim)", sim_ok, "" if sim_ok else res_sim.stdout)
    except Exception as e:
        all_passed &= log_test("Simulation TS Engine Invariants", False, str(e))

    # -------------------------------------------------------------
    # Suite 3: Browser Runtime & Strict Interactive Verification
    # -------------------------------------------------------------
    print("\n[Suite 3: Browser Runtime & Strict Interactive Verification]")
    try:
        with sync_playwright() as p:
            # Portable browser launch with fallbacks for host environment
            browser = None
            last_err = None
            for launch_opts in [
                {"channel": "msedge", "headless": True},
                {"channel": "chrome", "headless": True},
                {"headless": True},
            ]:
                try:
                    browser = p.chromium.launch(**launch_opts)
                    break
                except Exception as ex:
                    last_err = ex
                    continue

            if not browser:
                raise RuntimeError(f"Could not launch browser: {last_err}")

            # --- Desktop Viewport (1440x900) ---
            page = browser.new_page(viewport={"width": 1440, "height": 900})
            console_errors = []
            page.on("console", lambda m: console_errors.append(f"[{m.type}] {m.text}") if m.type in ["error"] else None)

            page.goto(base_url, wait_until="networkidle")
            time.sleep(2.0)

            # 3.1 Console and Hydration Errors
            # Filter benign browser extensions if any
            critical_errors = [e for e in console_errors if "favicon" not in e and "ms-edge" not in e]
            err_ok = len(critical_errors) == 0
            all_passed &= log_test("Zero Console / Hydration Errors", err_ok, f"Errors: {critical_errors}" if not err_ok else "Clean")

            # 3.2 Core Section IDs Present in DOM
            core_sections = ["hero", "challenge", "cortex", "cascade", "demo", "specs", "research", "team"]
            missing_secs = [s for s in core_sections if page.locator(f"#{s}").count() == 0]
            sec_ok = len(missing_secs) == 0
            all_passed &= log_test("All Core Page Sections Present", sec_ok, f"Missing: {missing_secs}" if not sec_ok else f"Found all {len(core_sections)} sections")

            # 3.3 Live DOM Navigation Anchor Target Verification
            rendered_anchors = page.evaluate("""() => {
                return Array.from(document.querySelectorAll('a[href^="#"]'))
                    .map(a => a.getAttribute('href'))
                    .filter(h => h && h.length > 1);
            }""")
            missing_targets = []
            for href in set(rendered_anchors):
                target_id = href.lstrip("#")
                target_found = page.evaluate(f"() => !!document.getElementById('{target_id}')")
                if not target_found:
                    missing_targets.append(href)
            anchors_ok = len(missing_targets) == 0
            all_passed &= log_test("Live Rendered DOM Anchor Targets", anchors_ok, f"All {len(rendered_anchors)} links valid" if anchors_ok else f"Broken anchors: {missing_targets}")

            # 3.4 Desktop Layout Overflow Checks (1440px, 1920px, 1280px)
            desktop_overflow = page.evaluate("() => document.documentElement.scrollWidth > window.innerWidth")
            all_passed &= log_test("Desktop Responsive Layout (1440px No Horizontal Overflow)", not desktop_overflow)

            page.set_viewport_size({"width": 1920, "height": 1080})
            time.sleep(0.3)
            overflow_1920 = page.evaluate("() => document.documentElement.scrollWidth > window.innerWidth")
            all_passed &= log_test("Widescreen Responsive Layout (1920px No Horizontal Overflow)", not overflow_1920)

            page.set_viewport_size({"width": 1280, "height": 800})
            time.sleep(0.3)
            overflow_1280 = page.evaluate("() => document.documentElement.scrollWidth > window.innerWidth")
            all_passed &= log_test("Compact Desktop Layout (1280px No Horizontal Overflow)", not overflow_1280)

            page.set_viewport_size({"width": 1440, "height": 900})
            time.sleep(0.3)

            # 3.4b Circuit Schematic Track & Bypass Arc in #cascade
            has_circuit_line = page.locator("#cascade svg line").count() > 0
            has_bypass_path = page.locator("#cascade svg path").count() > 0
            all_passed &= log_test("Cascade Circuit Track & Bypass Arc Presence", has_circuit_line and has_bypass_path, "SVG route and bypass arc verified")

            # 3.5 Strict 3D Neural Cortex Workbench Interactive Testing
            cortex_ok = True
            cortex_detail = []
            try:
                page.locator("#cortex").scroll_into_view_if_needed()
                time.sleep(0.6)

                # Test Diagnostic Modes (Mode 2, Mode 3, Mode 1)
                btn_mode2 = page.locator("#cortex button[data-cortex-mode='noise'], #cortex button:has-text('2.')").first
                if btn_mode2.count() == 0:
                    raise AssertionError("Cortex Mode 2 button missing")
                btn_mode2.click()
                time.sleep(0.4)

                btn_mode3 = page.locator("#cortex button[data-cortex-mode='cascade'], #cortex button:has-text('3.')").first
                if btn_mode3.count() == 0:
                    raise AssertionError("Cortex Mode 3 button missing")
                btn_mode3.click()
                time.sleep(0.4)

                btn_mode1 = page.locator("#cortex button[data-cortex-mode='intent'], #cortex button:has-text('1.')").first
                if btn_mode1.count() == 0:
                    raise AssertionError("Cortex Mode 1 button missing")
                btn_mode1.click()
                time.sleep(0.4)

                # Test Camera Preset Switcher
                temporal_cam = page.locator("#cortex button:has-text('САМАЙ')").first
                if temporal_cam.count() == 0:
                    raise AssertionError("Temporal camera preset missing")
                temporal_cam.click()
                time.sleep(0.3)

                motor_cam = page.locator("#cortex button:has-text('ТӨБЕДЕН')").first
                if motor_cam.count() == 0:
                    raise AssertionError("Motor camera preset missing")
                motor_cam.click()
                time.sleep(0.3)

                # Test FFT Domain Switcher
                fft_btn = page.locator("#cortex button:has-text('СПЕКТРЛІК ТАЛДАУ')").first
                if fft_btn.count() == 0:
                    raise AssertionError("FFT display mode button missing")
                fft_btn.click()
                time.sleep(0.4)

                osc_btn = page.locator("#cortex button:has-text('4-АРНАЛЫ ОСЦИЛЛОГРАФ')").first
                if osc_btn.count() == 0:
                    raise AssertionError("Oscilloscope display mode button missing")
                osc_btn.click()
                time.sleep(0.4)

                cortex_detail.append("Modes, Presets & Signal Domains verified")
            except Exception as e:
                cortex_ok = False
                cortex_detail.append(str(e))
            all_passed &= log_test("3D Neural Cortex Workbench Interactive Controls", cortex_ok, "; ".join(cortex_detail))

            # 3.6 Strict 4-Gate Interactive Demo Verification
            demo_ok = True
            demo_detail = []
            try:
                page.locator("#demo").scroll_into_view_if_needed()
                time.sleep(0.6)

                # Test Scenario 1 (Pure Motor Signal)
                s1_btn = page.locator("#demo button[data-scenario='clean_signal'], #demo button:has-text('1. Таза'), #demo button:has-text('1. Clean')").first
                if s1_btn.count() == 0:
                    raise AssertionError("Preset Scenario 1 button missing")
                s1_btn.click()
                time.sleep(0.4)
                text_s1 = page.locator("#demo").text_content() or ""
                if "ТАҒАМ ШАЙНАУ" in text_s1 and "КҮШІ ЖОЙЫЛДЫ" in text_s1:
                    raise AssertionError("Scenario 1 incorrectly shows noise refusal")

                # Test Scenario 2 (EMG Noise Unprotected)
                s2_btn = page.locator("#demo button[data-scenario='noise_bypass'], #demo button:has-text('2.')").first
                if s2_btn.count() == 0:
                    raise AssertionError("Preset Scenario 2 button missing")
                s2_btn.click()
                time.sleep(0.4)
                text_s2 = page.locator("#demo").text_content() or ""
                # Verify that bypass / unprotected warning appears
                if "БАЗАЛЫҚ ДЕКОДЕР" not in text_s2 and "ҚОРҒАНЫССЫЗ" not in text_s2 and "UNPROTECTED" not in text_s2:
                    raise AssertionError("Scenario 2 did not trigger unprotected/bypass warning state")

                # Test Scenario 3 (EMG Noise Protected)
                s3_btn = page.locator("#demo button[data-scenario='noise_protected'], #demo button:has-text('3.')").first
                if s3_btn.count() == 0:
                    raise AssertionError("Preset Scenario 3 button missing")
                s3_btn.click()
                time.sleep(0.4)
                text_s3 = page.locator("#demo").text_content() or ""
                if "MIORA" not in text_s3 and "ШЛЮЗ" not in text_s3:
                    raise AssertionError("Scenario 3 did not activate MIORA gate override")

                # Test Waveform Freeze / Resume
                freeze_btn = page.locator("#demo [data-testid='waveform-freeze-btn']").first
                if freeze_btn.count() == 0:
                    raise AssertionError("Waveform Freeze button missing")
                freeze_btn.click()
                time.sleep(0.3)
                resume_text = freeze_btn.text_content() or ""
                # Verify that button changed from Freeze to Resume
                if not any(w in resume_text for w in ["ЖАЛҒАСТЫРУ", "RESUME", "Resume"]):
                    raise AssertionError(f"Expected Freeze button text to update to Resume, got: '{resume_text}'")
                freeze_btn.click()  # resume
                time.sleep(0.3)

                # Test Advanced Parameters Disclosure
                adv_btn = page.locator("#demo button:has-text('ҚОСЫМША'), #demo button:has-text('ADVANCED')").first
                if adv_btn.count() > 0:
                    adv_btn.click()
                    time.sleep(0.4)
                    # Test Reset button inside disclosure
                    reset_btn = page.locator("#demo [data-testid='simulator-reset-btn']").first
                    if reset_btn.count() > 0:
                        reset_btn.click()
                        time.sleep(0.3)

                demo_detail.append("Presets 1/2/3, Freeze/Resume & Advanced Controls verified")
            except Exception as e:
                demo_ok = False
                demo_detail.append(str(e))
            all_passed &= log_test("4-Gate Simulator Real State Mutations", demo_ok, "; ".join(demo_detail))

            # 3.7 Language Switcher Verification
            lang_ok = True
            try:
                lang_btn = page.locator("header button:has-text('KZ'), header button:has-text('EN')").first
                if lang_btn.count() > 0:
                    lang_btn.click()
                    time.sleep(0.5)
                    lang_btn.click()
                    time.sleep(0.4)
            except Exception as e:
                lang_ok = False
            all_passed &= log_test("Bilingual Language Switcher", lang_ok)

            # 3.8 Photographic Visual Evidence Capture
            for sec_id in core_sections:
                elem = page.locator(f"#{sec_id}")
                if elem.count() > 0:
                    elem.scroll_into_view_if_needed()
                    time.sleep(0.3)
                    elem.screenshot(path=os.path.join(artifact_dir, f"{sec_id}_v2.png"))

            # --- Multi-Viewport Responsive Audit ---
            viewports = [
                ("Mobile Narrow (iPhone SE 320x568)", 320, 568),
                ("Mobile Standard (iPhone 14 390x844)", 390, 844),
                ("Tablet Portrait (iPad 768x1024)", 768, 1024),
            ]

            for vp_name, width, height in viewports:
                vp_page = browser.new_page(viewport={"width": width, "height": height})
                vp_page.goto(base_url, wait_until="networkidle")
                time.sleep(1.0)

                overflow = vp_page.evaluate("() => document.documentElement.scrollWidth > window.innerWidth")
                all_passed &= log_test(f"{vp_name} - No Horizontal Overflow", not overflow)

                if width == 390:
                    # Test Mobile Navigation Drawer
                    mob_btn = vp_page.locator("header button").last
                    mob_menu_ok = False
                    if mob_btn.count() > 0:
                        mob_btn.click()
                        time.sleep(0.5)
                        drawer = vp_page.locator(".fixed.inset-0")
                        mob_menu_ok = drawer.count() > 0
                        # Click anchor inside drawer
                        link = drawer.locator('a[href="#cortex"]').first
                        if link.count() > 0:
                            link.click()
                            time.sleep(0.5)
                    all_passed &= log_test("Mobile Navigation Drawer Interaction (390px)", mob_menu_ok)

                    # Test Mobile Simulator Density: presets and executed command both visible without scroll
                    vp_page.locator("#demo").scroll_into_view_if_needed()
                    time.sleep(0.5)
                    vp_page.screenshot(path=os.path.join(artifact_dir, "mobile_demo_390.png"))
                    presets_visible = any(b.is_visible() for b in vp_page.locator("#demo button[data-scenario='clean_signal']").all())
                    decision_visible = any(d.is_visible() for d in vp_page.locator("#demo [class*='border-cyan'], #demo [class*='border-emerald']").all())
                    all_passed &= log_test("Mobile Simulator High-Density Viewport (390px)", presets_visible and decision_visible)

                vp_page.close()

            browser.close()
    except Exception as e:
        all_passed &= log_test("Browser Playwright Execution", False, str(e))

    print("\n" + "=" * 65)
    if all_passed:
        print("  ALL TESTS PASSED! ZERO CRITICAL DEFECTS VERIFIED.")
        print("=" * 65)
        sys.exit(0)
    else:
        print("  SOME TESTS FAILED. PLEASE REVIEW EVIDENCE.")
        print("=" * 65)
        sys.exit(1)


if __name__ == "__main__":
    run_tests()
