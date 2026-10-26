import base64
import os
from playwright.sync_api import sync_playwright

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
OUTPUT_DIR = r"d:\RKNP_Website\research\screenshots"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=CHROME_PATH, headless=True)
    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()
    
    print("Navigating to local baseline http://localhost:3000 ...")
    page.goto("http://localhost:3000/", wait_until="networkidle")
    page.wait_for_timeout(2000)
    
    cdp = context.new_cdp_session(page)
    print("Capturing desktop baseline full page...")
    res_desktop = cdp.send("Page.captureScreenshot", {"captureBeyondViewport": True, "format": "png"})
    with open(f"{OUTPUT_DIR}/baseline_desktop.png", "wb") as f:
        f.write(base64.b64decode(res_desktop["data"]))
    print("Saved baseline_desktop.png")
    
    print("Resizing to mobile (390px)...")
    page.set_viewport_size({"width": 390, "height": 844})
    page.wait_for_timeout(1000)
    res_mobile = cdp.send("Page.captureScreenshot", {"captureBeyondViewport": True, "format": "png"})
    with open(f"{OUTPUT_DIR}/baseline_mobile.png", "wb") as f:
        f.write(base64.b64decode(res_mobile["data"]))
    print("Saved baseline_mobile.png")
    
    browser.close()
    print("Precision baseline screenshots captured successfully!")
