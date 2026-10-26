import sys
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding='utf-8')

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe', headless=True)
    page = browser.new_page()
    page.goto('https://community.spline.design/', wait_until='domcontentloaded')
    page.wait_for_timeout(3000)
    
    # Check search input
    inputs = page.eval_on_selector_all('input', 'els => els.map(e => e.placeholder)')
    print("Spline inputs:", inputs)
    
    links = page.eval_on_selector_all('a', 'els => els.map(e => ({ text: e.innerText.trim(), href: e.href }))')
    brain_links = [l for l in links if any(k in l['href'].lower() or k in l['text'].lower() for k in ['brain', 'neuro', 'cyber', 'network', 'ai'])]
    print("Spline relevant links found:", len(brain_links))
    for l in brain_links[:10]:
        print(l['text'], "->", l['href'])
        
    browser.close()

