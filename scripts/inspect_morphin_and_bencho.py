import urllib.request
import json
import base64
import os
import ssl
from playwright.sync_api import sync_playwright

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
OUTPUT_DIR = r"d:\RKNP_Website\research"

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# 1. First probe Morphin registry via direct HTTP to see content/API
try:
    req = urllib.request.Request("https://registry.morphin.dev/", headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
        text = resp.read().decode('utf-8', errors='ignore')
        with open(f"{OUTPUT_DIR}/raw_dumps/registry_morphin_raw.txt", "w", encoding="utf-8") as f:
            f.write(text)
        print("Direct fetch registry.morphin.dev length:", len(text))
except Exception as e:
    print("Direct fetch registry.morphin.dev error:", e)

# 2. Use Playwright + CDP for bencho.dev and registry.morphin.dev
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=CHROME_PATH, headless=True)
    context = browser.new_context(viewport={"width": 1440, "height": 900})

    # Bencho
    try:
        print("Navigating to Bencho...")
        page = context.new_page()
        page.goto("https://bencho.dev/", wait_until="domcontentloaded", timeout=40000)
        page.wait_for_timeout(3000)
        cdp = context.new_cdp_session(page)
        res = cdp.send("Page.captureScreenshot", {"captureBeyondViewport": True, "format": "png"})
        with open(f"{OUTPUT_DIR}/screenshots/bencho_home.png", "wb") as f:
            f.write(base64.b64decode(res["data"]))
        
        # Save HTML
        with open(f"{OUTPUT_DIR}/raw_dumps/bencho_home.html", "w", encoding="utf-8") as f:
            f.write(page.content())
            
        # Extract links
        links = page.eval_on_selector_all("a", "elements => elements.map(e => ({ href: e.href, text: e.innerText.trim() }))")
        with open(f"{OUTPUT_DIR}/raw_dumps/bencho_links.json", "w", encoding="utf-8") as f:
            json.dump(links, f, indent=2)
        print("Bencho captured successfully, links count:", len(links))
        page.close()
    except Exception as e:
        print("Bencho capture error:", e)

    # Morphin Registry
    try:
        print("Navigating to Morphin Registry...")
        page = context.new_page()
        page.goto("https://registry.morphin.dev/", wait_until="domcontentloaded", timeout=40000)
        page.wait_for_timeout(3000)
        cdp = context.new_cdp_session(page)
        res = cdp.send("Page.captureScreenshot", {"captureBeyondViewport": True, "format": "png"})
        with open(f"{OUTPUT_DIR}/screenshots/morphin_registry.png", "wb") as f:
            f.write(base64.b64decode(res["data"]))
        with open(f"{OUTPUT_DIR}/raw_dumps/morphin_registry.html", "w", encoding="utf-8") as f:
            f.write(page.content())
        print("Morphin Registry captured successfully")
        page.close()
    except Exception as e:
        print("Morphin Registry capture error:", e)

    browser.close()

