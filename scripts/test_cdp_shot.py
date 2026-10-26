import base64
import os
from playwright.sync_api import sync_playwright

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
OUTPUT_DIR = r"d:\RKNP_Website\research"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=CHROME_PATH, headless=True)
    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()
    
    print("Navigating to Precision Neuroscience...")
    page.goto("https://www.precisionneuro.io/", wait_until="domcontentloaded", timeout=45000)
    page.wait_for_timeout(3000)
    
    cdp = context.new_cdp_session(page)
    print("Capturing desktop full page screenshot via CDP...")
    result = cdp.send("Page.captureScreenshot", {"captureBeyondViewport": True, "format": "png"})
    with open(f"{OUTPUT_DIR}/screenshots/precision_desktop_full.png", "wb") as f:
        f.write(base64.b64decode(result["data"]))
    print("Saved desktop screenshot!")

    print("Resizing to mobile...")
    page.set_viewport_size({"width": 390, "height": 844})
    page.wait_for_timeout(2000)
    result_mobile = cdp.send("Page.captureScreenshot", {"captureBeyondViewport": True, "format": "png"})
    with open(f"{OUTPUT_DIR}/screenshots/precision_mobile_full.png", "wb") as f:
        f.write(base64.b64decode(result_mobile["data"]))
    print("Saved mobile screenshot!")
    
    browser.close()
    print("CDP screenshot test successful!")

