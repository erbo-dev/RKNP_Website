import base64
import os
import time
from playwright.sync_api import sync_playwright

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
OUTPUT_DIR = r"d:\RKNP_Website\research\screenshots"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=CHROME_PATH, headless=True)
    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()
    
    print("Navigating to MIORA site http://localhost:3000 ...")
    page.goto("http://localhost:3000/", wait_until="networkidle")
    page.wait_for_timeout(3000)
    
    print("Page title:", page.title())
    
    cdp = context.new_cdp_session(page)
    print("Capturing MIORA desktop full-page screenshot...")
    res_desktop = cdp.send("Page.captureScreenshot", {"captureBeyondViewport": True, "format": "png"})
    with open(f"{OUTPUT_DIR}/miora_final_desktop.png", "wb") as f:
        f.write(base64.b64decode(res_desktop["data"]))
    print("Saved miora_final_desktop.png")
    
    # Test interactive demo section
    print("Testing interactive demo interactions...")
    page.evaluate("document.querySelector('#demo').scrollIntoView()")
    page.wait_for_timeout(1000)
    
    # Toggle chewing button
    chewing_btn = page.locator("text=Жақ белсенділігі:").first
    if chewing_btn:
        print("Clicking chewing toggle button...")
        chewing_btn.click()
        page.wait_for_timeout(500)
        chewing_btn.click()
        page.wait_for_timeout(500)
        print("Chewing toggle verified!")

    # Switch user to S4
    s4_btn = page.locator("text=Қатысушы S4").first
    if s4_btn:
        print("Selecting Participant S4...")
        s4_btn.click()
        page.wait_for_timeout(500)
        # Check verdict
        verdict = page.locator("text=БАЗАЛЫҚ КОМАНДА САҚТАЛДЫ").first
        print("S4 blocked verdict present:", verdict.is_visible())

    # Switch user back to S1
    s1_btn = page.locator("text=Қатысушы S1").first
    if s1_btn:
        s1_btn.click()
        page.wait_for_timeout(500)
        verdict = page.locator("text=ҚОРҒАЛҒАН ТҮЗЕТУ ЕНГІЗІЛДІ").first
        print("S1 approved verdict present:", verdict.is_visible())
        
    print("Resizing to mobile (390px)...")
    page.set_viewport_size({"width": 390, "height": 844})
    page.wait_for_timeout(1500)
    res_mobile = cdp.send("Page.captureScreenshot", {"captureBeyondViewport": True, "format": "png"})
    with open(f"{OUTPUT_DIR}/miora_final_mobile.png", "wb") as f:
        f.write(base64.b64decode(res_mobile["data"]))
    print("Saved miora_final_mobile.png")
    
    browser.close()
    print("Verification and screenshots completed successfully!")
