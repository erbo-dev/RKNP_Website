import os
import time
from playwright.sync_api import sync_playwright

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
OUTPUT_DIR = r"d:\RKNP_Website\research"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=CHROME_PATH, headless=True)
    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()
    
    print("Navigating to Precision Neuroscience...")
    page.goto("https://www.precisionneuro.io/", wait_until="domcontentloaded", timeout=45000)
    page.wait_for_timeout(4000)
    
    # Save HTML first
    html = page.content()
    with open(f"{OUTPUT_DIR}/raw_dumps/precisionneuro.html", "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Saved HTML ({len(html)} bytes)")
    
    # Take screenshot with animations disabled and timeout
    try:
        page.screenshot(path=f"{OUTPUT_DIR}/screenshots/precision_desktop_full.png", full_page=True, animations="disabled", timeout=15000)
        print("Desktop full screenshot saved!")
    except Exception as e:
        print("Full page screenshot timed out, taking viewport screenshot:", e)
        page.screenshot(path=f"{OUTPUT_DIR}/screenshots/precision_desktop_hero.png")

    # Mobile
    page.set_viewport_size({"width": 390, "height": 844})
    page.wait_for_timeout(2000)
    try:
        page.screenshot(path=f"{OUTPUT_DIR}/screenshots/precision_mobile_full.png", full_page=True, animations="disabled", timeout=15000)
        print("Mobile full screenshot saved!")
    except Exception as e:
        print("Mobile screenshot error:", e)
        page.screenshot(path=f"{OUTPUT_DIR}/screenshots/precision_mobile_hero.png")
        
    browser.close()
    print("Done")

