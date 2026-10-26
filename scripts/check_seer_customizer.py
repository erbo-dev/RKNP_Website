import sys
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding='utf-8')

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe', headless=True)
    page = browser.new_page()
    page.goto('https://seer-js.com/customize.html?effect=waves', wait_until='networkidle')
    page.wait_for_timeout(2000)
    
    buttons = page.eval_on_selector_all('button, a', 'els => els.map(e => ({ text: e.innerText.trim(), id: e.id, className: e.className, href: e.href || "" }))')
    for b in buttons:
        print(f"Btn: {b['text']} | id={b['id']} | href={b['href']}")
        
    inputs = page.eval_on_selector_all('input, select', 'els => els.map(e => ({ id: e.id, name: e.name, type: e.type, value: e.value }))')
    print("Inputs count:", len(inputs))
    for inp in inputs[:10]:
        print("Input:", inp)
        
    browser.close()

