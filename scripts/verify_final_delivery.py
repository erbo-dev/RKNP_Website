import time
import shutil
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe', headless=True)
    page = browser.new_page(viewport={'width': 1600, 'height': 900})
    page.goto('http://localhost:3000', wait_until='networkidle')
    time.sleep(1)

    # 1. Hero
    page.screenshot(path='scripts/hero_final.png')

    # 2. Reveal
    page.locator('#reveal').scroll_into_view_if_needed()
    time.sleep(0.8)
    page.screenshot(path='scripts/reveal_final.png')

    # 3. Human
    page.locator('#human').scroll_into_view_if_needed()
    time.sleep(0.8)
    page.screenshot(path='scripts/human_final.png')

    # 4. Cascade
    page.locator('#cascade').scroll_into_view_if_needed()
    time.sleep(0.8)
    page.screenshot(path='scripts/cascade_final.png')

    # 5. Results
    page.locator('#results').scroll_into_view_if_needed()
    time.sleep(0.8)
    page.screenshot(path='scripts/results_final.png')

    browser.close()

files = ['hero_final.png', 'reveal_final.png', 'human_final.png', 'cascade_final.png', 'results_final.png']
for f in files:
    shutil.copy(f'scripts/{f}', rf'C:\Users\erbos\.gemini\antigravity\brain\6e93a0da-3703-40e9-ada6-eabceb7d2ca0\{f}')

print('All final verification screenshots captured successfully!')

