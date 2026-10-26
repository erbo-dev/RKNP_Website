from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe', headless=True)
    page = browser.new_page()
    page.goto('https://scrollhaus.ai/templates/3d/plasma-orb/', wait_until='domcontentloaded')
    page.wait_for_timeout(3000)
    print("Title:", page.title())
    print("URL:", page.url)
    print("Content preview:", page.content()[:600].encode('ascii', 'ignore').decode())
    elements = page.eval_on_selector_all('*', 'els => els.map(e => e.tagName).filter((v, i, a) => a.indexOf(v) === i)')
    print("Tags present:", elements)
    text = page.inner_text('body')
    print("Body text preview:", text[:400].encode('ascii', 'ignore').decode())
    browser.close()

