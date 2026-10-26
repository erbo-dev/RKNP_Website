from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe', headless=True)
    page = browser.new_page()
    page.goto('https://scrollhaus.ai/templates/3d/plasma-orb/', wait_until='domcontentloaded')
    page.wait_for_timeout(3000)
    buttons = page.eval_on_selector_all('button, a', 'elements => elements.map(e => ({ text: e.innerText.trim(), href: e.href || "" }))')
    for b in buttons:
        t = b['text'].lower()
        if any(w in t for w in ['buy', 'price', '$', 'get', 'download', 'purchase', 'clone', 'template', 'access']):
            print(b['text'].encode('ascii', 'ignore').decode(), '-->', b['href'])
    
    # Also get general page text
    text = page.inner_text('body')
    for line in text.split('\n'):
        line = line.strip()
        if any(w in line.lower() for w in ['$', 'purchase', 'license', 'usd', 'eur']):
            print('PRICE/LICENSE:', line.encode('ascii', 'ignore').decode())
            
    browser.close()

