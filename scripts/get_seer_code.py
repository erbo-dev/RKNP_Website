import sys
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding='utf-8')

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe', headless=True)
    page = browser.new_page()
    
    # 1. Waves
    page.goto('https://seer-js.com/customize.html?effect=waves', wait_until='networkidle')
    page.wait_for_timeout(2000)
    # Check pre or code element or textarea
    pre_text = page.eval_on_selector_all('pre, code, textarea', 'els => els.map(e => e.innerText || e.value)')
    print("Waves code text count:", len(pre_text))
    if pre_text:
        print("Waves code sample:", pre_text[0][:300])
        with open('research/raw_dumps/seer_waves_code.txt', 'w', encoding='utf-8') as f:
            f.write(pre_text[0])
            
    # 2. Harmonic
    page.goto('https://seer-js.com/customize.html?effect=harmonic', wait_until='networkidle')
    page.wait_for_timeout(2000)
    pre_text = page.eval_on_selector_all('pre, code, textarea', 'els => els.map(e => e.innerText || e.value)')
    print("Harmonic code text count:", len(pre_text))
    if pre_text:
        print("Harmonic code sample:", pre_text[0][:300])
        with open('research/raw_dumps/seer_harmonic_code.txt', 'w', encoding='utf-8') as f:
            f.write(pre_text[0])

    browser.close()

