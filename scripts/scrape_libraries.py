import json
import os
import time
from playwright.sync_api import sync_playwright

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
OUTPUT_DIR = r"d:\RKNP_Website\research"

def inspect_all():
    os.makedirs(f"{OUTPUT_DIR}/raw_dumps", exist_ok=True)
    os.makedirs(f"{OUTPUT_DIR}/screenshots", exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=CHROME_PATH, headless=True)
        context = browser.new_context(viewport={"width": 1440, "height": 900})

        # 1. Inspect Morphin Registry
        print("--- Inspecting Morphin Registry ---")
        try:
            page = context.new_page()
            page.goto("https://registry.morphin.dev/", timeout=30000)
            page.wait_for_timeout(2000)
            morphin_text = page.content()
            with open(f"{OUTPUT_DIR}/raw_dumps/morphin_registry.html", "w", encoding="utf-8") as f:
                f.write(morphin_text)
            page.close()
        except Exception as e:
            print("Morphin Registry error:", e)

        # 2. Inspect Bencho
        print("--- Inspecting Bencho ---")
        try:
            page = context.new_page()
            page.goto("https://bencho.dev/", timeout=30000)
            page.wait_for_timeout(3000)
            # Find all links and component cards
            links = page.eval_on_selector_all("a", "elements => elements.map(e => ({ href: e.href, text: e.innerText.trim() }))")
            with open(f"{OUTPUT_DIR}/raw_dumps/bencho_links.json", "w", encoding="utf-8") as f:
                json.dump(links, f, indent=2)
            page.screenshot(path=f"{OUTPUT_DIR}/screenshots/bencho_home.png", full_page=True)
            page.close()
        except Exception as e:
            print("Bencho error:", e)

        # 3. Inspect Morphin dev
        print("--- Inspecting Morphin dev ---")
        try:
            page = context.new_page()
            page.goto("https://morphin.dev/", timeout=30000)
            page.wait_for_timeout(3000)
            links = page.eval_on_selector_all("a", "elements => elements.map(e => ({ href: e.href, text: e.innerText.trim() }))")
            with open(f"{OUTPUT_DIR}/raw_dumps/morphin_links.json", "w", encoding="utf-8") as f:
                json.dump(links, f, indent=2)
            page.screenshot(path=f"{OUTPUT_DIR}/screenshots/morphin_home.png", full_page=True)
            page.close()
        except Exception as e:
            print("Morphin error:", e)

        # 4. Inspect Libraries.dev
        print("--- Inspecting Libraries.dev ---")
        try:
            page = context.new_page()
            page.goto("https://libraries.dev/", timeout=30000)
            page.wait_for_timeout(3000)
            links = page.eval_on_selector_all("a", "elements => elements.map(e => ({ href: e.href, text: e.innerText.trim() }))")
            with open(f"{OUTPUT_DIR}/raw_dumps/libraries_dev_links.json", "w", encoding="utf-8") as f:
                json.dump(links, f, indent=2)
            page.screenshot(path=f"{OUTPUT_DIR}/screenshots/libraries_dev_home.png", full_page=True)
            page.close()
        except Exception as e:
            print("Libraries.dev error:", e)

        # 5. Inspect React Bits
        print("--- Inspecting React Bits ---")
        try:
            page = context.new_page()
            page.goto("https://www.reactbits.dev/", timeout=30000)
            page.wait_for_timeout(3000)
            links = page.eval_on_selector_all("a", "elements => elements.map(e => ({ href: e.href, text: e.innerText.trim() }))")
            with open(f"{OUTPUT_DIR}/raw_dumps/reactbits_links.json", "w", encoding="utf-8") as f:
                json.dump(links, f, indent=2)
            page.screenshot(path=f"{OUTPUT_DIR}/screenshots/reactbits_home.png", full_page=True)
            page.close()
        except Exception as e:
            print("React Bits error:", e)

        # 6. Inspect Precision Neuroscience
        print("--- Inspecting Precision Neuroscience ---")
        try:
            page = context.new_page()
            page.goto("https://www.precisionneuro.io/", timeout=30000)
            page.wait_for_timeout(4000)
            # Desktop screenshot
            page.screenshot(path=f"{OUTPUT_DIR}/screenshots/precision_desktop_full.png", full_page=True)
            # Mobile screenshot
            page.set_viewport_size({"width": 390, "height": 844})
            page.wait_for_timeout(2000)
            page.screenshot(path=f"{OUTPUT_DIR}/screenshots/precision_mobile_full.png", full_page=True)
            # Dump HTML
            html = page.content()
            with open(f"{OUTPUT_DIR}/raw_dumps/precisionneuro.html", "w", encoding="utf-8") as f:
                f.write(html)
            page.close()
        except Exception as e:
            print("Precision error:", e)

        # 7. Inspect Seer.js
        print("--- Inspecting Seer.js ---")
        try:
            page = context.new_page()
            page.goto("https://seer-js.com/", timeout=30000)
            page.wait_for_timeout(3000)
            page.screenshot(path=f"{OUTPUT_DIR}/screenshots/seer_home.png", full_page=True)
            links = page.eval_on_selector_all("a", "elements => elements.map(e => ({ href: e.href, text: e.innerText.trim() }))")
            with open(f"{OUTPUT_DIR}/raw_dumps/seer_links.json", "w", encoding="utf-8") as f:
                json.dump(links, f, indent=2)
            page.close()
        except Exception as e:
            print("Seer error:", e)

        # 8. Inspect ShaderGradient
        print("--- Inspecting ShaderGradient ---")
        try:
            page = context.new_page()
            page.goto("https://shadergradient.co/", timeout=30000)
            page.wait_for_timeout(3000)
            page.screenshot(path=f"{OUTPUT_DIR}/screenshots/shadergradient_home.png", full_page=True)
            html = page.content()
            with open(f"{OUTPUT_DIR}/raw_dumps/shadergradient.html", "w", encoding="utf-8") as f:
                f.write(html)
            page.close()
        except Exception as e:
            print("ShaderGradient error:", e)

        # 9. Inspect Scrollhaus
        print("--- Inspecting Scrollhaus ---")
        try:
            page = context.new_page()
            page.goto("https://scrollhaus.ai/templates/3d/", timeout=30000)
            page.wait_for_timeout(3000)
            page.screenshot(path=f"{OUTPUT_DIR}/screenshots/scrollhaus_templates.png", full_page=True)
            links = page.eval_on_selector_all("a", "elements => elements.map(e => ({ href: e.href, text: e.innerText.trim() }))")
            with open(f"{OUTPUT_DIR}/raw_dumps/scrollhaus_links.json", "w", encoding="utf-8") as f:
                json.dump(links, f, indent=2)
            page.close()
        except Exception as e:
            print("Scrollhaus error:", e)

        browser.close()
        print("Initial reconnaissance complete.")

if __name__ == "__main__":
    inspect_all()

