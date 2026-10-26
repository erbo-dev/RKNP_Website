import sys
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding='utf-8')

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe', headless=True)
    page = browser.new_page()
    page.goto('https://www.unicorn.studio/', wait_until='domcontentloaded')
    page.wait_for_timeout(3000)
    
    scripts = page.eval_on_selector_all('script', 'els => els.map(e => e.src).filter(Boolean)')
    print("Unicorn scripts:", scripts[:10])
    
    text = page.inner_text('body')
    for line in text.split('\n'):
        line = line.strip()
        if any(w in line.lower() for w in ['embed', 'export', 'code', 'pricing', 'free', 'pro', 'plan']):
            print("Unicorn info:", line[:120])
            
    browser.close()

