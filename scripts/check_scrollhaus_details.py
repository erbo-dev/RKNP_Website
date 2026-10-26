from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe', headless=True)
    page = browser.new_page()
    page.goto('https://scrollhaus.ai/templates/3d/plasma-orb/', wait_until='networkidle', timeout=30000)
    page.wait_for_timeout(3000)
    
    links = page.eval_on_selector_all('a', 'els => els.map(e => ({ text: e.innerText.trim(), href: e.href }))')
    with open('research/raw_dumps/scrollhaus_plasma_links.txt', 'w', encoding='utf-8') as f:
        for l in links:
            f.write(f"{l['text']} -> {l['href']}\n")
            
    text = page.inner_text('body')
    with open('research/raw_dumps/scrollhaus_plasma_text.txt', 'w', encoding='utf-8') as f:
        f.write(text)
        
    browser.close()
    print("Saved scrollhaus plasma info")

