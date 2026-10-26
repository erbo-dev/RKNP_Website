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
    page.wait_for_timeout(5000)
    
    print("Capturing desktop screenshot...")
    page.screenshot(path=f"{OUTPUT_DIR}/screenshots/precision_desktop_full.png", full_page=True)
    
    print("Saving HTML...")
    with open(f"{OUTPUT_DIR}/raw_dumps/precisionneuro.html", "w", encoding="utf-8") as f:
        f.write(page.content())
        
    print("Capturing mobile screenshot...")
    page.set_viewport_size({"width": 390, "height": 844})
    page.wait_for_timeout(3000)
    page.screenshot(path=f"{OUTPUT_DIR}/screenshots/precision_mobile_full.png", full_page=True)
    
    # Extract structure details: headings, sections, layout
    sections = page.eval_on_selector_all("section, header, footer, div[class*='section'], main > div", """
        elements => elements.map((el, i) => ({
            index: i,
            tagName: el.tagName,
            id: el.id,
            className: el.className,
            textExcerpt: el.innerText ? el.innerText.slice(0, 150).replace(/\\n/g, ' ') : '',
            rect: el.getBoundingClientRect()
        }))
    """)
    import json
    with open(f"{OUTPUT_DIR}/raw_dumps/precision_sections.json", "w", encoding="utf-8") as f:
        json.dump(sections, f, indent=2)
        
    browser.close()
    print("Precision inspection complete!")

