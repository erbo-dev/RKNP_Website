import time
import shutil
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe', headless=True)
    page = browser.new_page(viewport={'width': 1600, 'height': 900})
    page.goto('http://localhost:3000', wait_until='networkidle')
    time.sleep(1)

    sections = [
        ('challenge', 'section_challenge.png'),
        ('human', 'section_human.png'),
        ('cascade', 'section_cascade.png'),
        ('demo', 'section_demo.png'),
        ('results', 'section_results.png'),
    ]

    for sec_id, filename in sections:
        page.locator(f'#{sec_id}').scroll_into_view_if_needed()
        time.sleep(0.8)
        filepath = f'scripts/{filename}'
        page.screenshot(path=filepath)
        shutil.copy(filepath, rf'C:\Users\erbos\.gemini\antigravity\brain\6e93a0da-3703-40e9-ada6-eabceb7d2ca0\{filename}')

    browser.close()
print('All sections successfully captured!')
