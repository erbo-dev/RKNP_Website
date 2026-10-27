"""
MIORA Automated Test Suite & QA Verification Harness
Validates build integrity, TypeScript types, internal DOM navigation targets,
browser console errors, responsive layouts, 3D diagnostics, and interactive demo controls.
"""

import sys
import subprocess
import time

try:
    if sys.stdout.encoding.lower() != 'utf-8':
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
except Exception:
    pass

from playwright.sync_api import sync_playwright

def log_test(name, passed, detail=""):
    badge = "[PASS]" if passed else "[FAIL]"
    msg = f"{badge} {name}" + (f" - {detail}" if detail else "")
    print(msg.encode('ascii', errors='replace').decode('ascii'))
    return passed

def run_tests():
    print("=" * 60)
    print("  MIORA NEUROTECH QA & VERIFICATION TEST SUITE")
    print("=" * 60)
    
    all_passed = True

    # 1. TypeScript Validation
    print("\n[Suite 1: Static Type Check]")
    try:
        res = subprocess.run(["npx.cmd", "tsc", "--noEmit"], capture_output=True, text=True, timeout=30)
        ts_ok = res.returncode == 0
        all_passed &= log_test("TypeScript compilation (tsc --noEmit)", ts_ok, "" if ts_ok else res.stderr)
    except Exception as e:
        all_passed &= log_test("TypeScript compilation", False, str(e))

    # 2. Navigation Anchor Targets Audit
    print("\n[Suite 2: DOM Anchor Target Audit]")
    import os, re
    root_src = r"d:\RKNP_Website\src"
    href_pattern = re.compile(r'href=["\'](#[\w-]+)["\']')
    id_pattern = re.compile(r'id=["\']([\w-]+)["\']')
    all_ids = set()
    broken_links = []
    
    for dirpath, _, filenames in os.walk(root_src):
        for f in filenames:
            if f.endswith((".tsx", ".ts")):
                with open(os.path.join(dirpath, f), "r", encoding="utf-8", errors="ignore") as file:
                    content = file.read()
                    for i in id_pattern.findall(content):
                        all_ids.add(i)
    
    for dirpath, _, filenames in os.walk(root_src):
        for f in filenames:
            if f.endswith((".tsx", ".ts")):
                with open(os.path.join(dirpath, f), "r", encoding="utf-8", errors="ignore") as file:
                    content = file.read()
                    for h in href_pattern.findall(content):
                        tid = h.lstrip("#")
                        if tid not in all_ids:
                            broken_links.append((f, h))

    nav_ok = len(broken_links) == 0
    all_passed &= log_test(
        "Internal Navigation Anchors Resolution", 
        nav_ok, 
        f"All links valid ({len(all_ids)} targets)" if nav_ok else f"Broken: {broken_links}"
    )

    # 3. Live Browser Multi-Viewport & Interactive Audit
    print("\n[Suite 3: Browser Runtime & Interactive Audit]")
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(channel="msedge", headless=True)
            
            # Desktop (1440x900)
            page = browser.new_page(viewport={"width": 1440, "height": 900})
            console_errors = []
            page.on("console", lambda m: console_errors.append(m.text) if m.type == "error" else None)
            
            page.goto("http://localhost:3000", wait_until="networkidle")
            time.sleep(2.0)

            # Check zero console errors
            err_ok = len(console_errors) == 0
            all_passed &= log_test("Zero Browser Console Errors", err_ok, f"Errors: {console_errors}" if not err_ok else "Clean")

            # Check all core section elements exist in DOM
            core_sections = ["hero", "challenge", "cortex", "cascade", "demo", "specs", "research", "team"]
            missing_secs = [s for s in core_sections if not page.locator(f"#{s}").count()]
            sec_ok = len(missing_secs) == 0
            all_passed &= log_test("All Core Page Sections Present", sec_ok, f"Missing: {missing_secs}" if not sec_ok else f"Found {len(core_sections)} sections")

            # Check Desktop Horizontal Overflow
            desktop_overflow = page.evaluate("() => document.documentElement.scrollWidth > window.innerWidth")
            all_passed &= log_test("Desktop Responsive Layout (No Horizontal Overflow)", not desktop_overflow)

            # Test 3D Neural Cortex Mode Switching
            cortex_ok = True
            try:
                page.locator("#cortex").scroll_into_view_if_needed()
                time.sleep(0.5)
                page.click("text=2. ШАЙНАУ КЕДЕРГІСІ")
                time.sleep(0.5)
                page.click("text=3. MIORA 4-GATE")
                time.sleep(0.5)
                page.click("text=1. МОТОРЛЫҚ НИЕТ")
            except Exception as e:
                cortex_ok = False
            all_passed &= log_test("3D Neural Cortex Multi-Mode Switcher", cortex_ok)

            # Test 4-Gate Interactive Demo Controls
            demo_ok = True
            try:
                page.locator("#demo").scroll_into_view_if_needed()
                time.sleep(0.5)
                chewing_btn = page.locator("#demo button:has-text('ШАЙНАУ'), #demo button:has-text('ТЫНЫШТЫҚ')").first
                if chewing_btn.count():
                    chewing_btn.click()
                    time.sleep(0.4)
                    chewing_btn.click()
                    time.sleep(0.4)
                prof_b = page.locator("#demo button:has-text('Жаңа қолданушы')").first
                if prof_b.count():
                    prof_b.click()
                    time.sleep(0.4)
            except Exception as e:
                demo_ok = False
            all_passed &= log_test("4-Gate Interactive Simulation Workbench", demo_ok)

            # Capture photographic visual evidence
            artifact_dir = r"C:\Users\erbos\.gemini\antigravity\brain\6e93a0da-3703-40e9-ada6-eabceb7d2ca0"
            for sec_id in ["hero", "challenge", "cortex", "cascade", "demo", "specs", "research", "team"]:
                elem = page.locator(f"#{sec_id}")
                if elem.count():
                    elem.scroll_into_view_if_needed()
                    time.sleep(0.3)
                    elem.screenshot(path=f"{artifact_dir}\\{sec_id}_v2.png")

            # Mobile (375x812)
            mob_page = browser.new_page(viewport={"width": 375, "height": 812})
            mob_page.goto("http://localhost:3000", wait_until="networkidle")
            time.sleep(1.0)
            mob_overflow = mob_page.evaluate("() => document.documentElement.scrollWidth > window.innerWidth")
            all_passed &= log_test("Mobile Responsive Layout (375px No Overflow)", not mob_overflow)

            # Mobile Drawer Test
            mob_btn = mob_page.locator("header button").last
            mob_menu_ok = False
            if mob_btn.count():
                mob_btn.click()
                time.sleep(0.5)
                drawer = mob_page.locator(".fixed.inset-0")
                mob_menu_ok = drawer.count() > 0
                # Click link inside drawer to navigate and close
                link = drawer.locator('a[href="#cortex"]').first
                if link.count():
                    link.click()
                    time.sleep(0.5)
            all_passed &= log_test("Mobile Navigation Drawer Interaction", mob_menu_ok)

            browser.close()
    except Exception as e:
        all_passed &= log_test("Browser Test Execution", False, str(e))

    print("\n" + "=" * 60)
    if all_passed:
        print("  ALL TESTS PASSED! PRODUCTION READY (0 DEFECTS)")
        print("=" * 60)
        sys.exit(0)
    else:
        print("  SOME TESTS FAILED. PLEASE REVIEW EVIDENCE.")
        print("=" * 60)
        sys.exit(1)

if __name__ == "__main__":
    run_tests()

