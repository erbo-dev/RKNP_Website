import base64
import os
import sys
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding='utf-8')

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
OUTPUT_DIR = r"d:\RKNP_Website\research\screenshots"
os.makedirs(OUTPUT_DIR, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=CHROME_PATH, headless=True)
    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()

    print("Navigating to http://localhost:3000...")
    page.goto("http://localhost:3000", wait_until="networkidle")
    page.wait_for_timeout(2500)

    # Check key components
    spl = page.query_selector(".spl")
    cmp = page.query_selector(".cmp")
    rct = page.query_selector(".rct")
    stb = page.query_selector(".stb")
    nod = page.query_selector(".nod")
    videos = page.query_selector_all("video")

    print(f"StepPlayer found: {spl is not None}")
    print(f"ImageCompare found: {cmp is not None}")
    print(f"RollingCounter found: {rct is not None}")
    print(f"StackedBars found: {stb is not None}")
    print(f"ActionNode found: {nod is not None}")
    print(f"Videos count on page: {len(videos)}")

    # Check headings
    h1 = page.inner_text("h1")
    print(f"H1 Title: {h1}")

    # Capture Desktop Fullpage
    print("Capturing desktop screenshot...")
    cdp = context.new_cdp_session(page)
    desktop_bytes = cdp.send("Page.captureScreenshot", {"format": "png", "captureBeyondViewport": True})
    with open(f"{OUTPUT_DIR}/miora_precision_tier_desktop.png", "wb") as f:
        f.write(base64.b64decode(desktop_bytes["data"]))
    print(f"Saved {OUTPUT_DIR}/miora_precision_tier_desktop.png")

    # Capture Mobile Viewport
    print("Capturing mobile screenshot...")
    page.set_viewport_size({"width": 390, "height": 844})
    page.wait_for_timeout(1000)
    mobile_bytes = cdp.send("Page.captureScreenshot", {"format": "png", "captureBeyondViewport": True})
    with open(f"{OUTPUT_DIR}/miora_precision_tier_mobile.png", "wb") as f:
        f.write(base64.b64decode(mobile_bytes["data"]))
    print(f"Saved {OUTPUT_DIR}/miora_precision_tier_mobile.png")

    browser.close()
    print("Verification completed successfully!")
