import time
import shutil
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe', headless=True)
    page = browser.new_page(viewport={'width': 1600, 'height': 900})
    page.goto('http://localhost:3000', wait_until='networkidle')
    time.sleep(1.5)

    # 1. 3D Cortex section
    page.locator('#cortex').scroll_into_view_if_needed()
    time.sleep(1.2)
    page.screenshot(path='scripts/cortex_3d_final.png')

    # 2. 4-Gate Cascade in simple words
    page.locator('#cascade').scroll_into_view_if_needed()
    time.sleep(1.0)
    page.screenshot(path='scripts/cascade_simple_final.png')

    # 3. Product Specs section
    page.locator('#specs').scroll_into_view_if_needed()
    time.sleep(1.0)
    page.screenshot(path='scripts/specs_final.png')

    # 4. Top header
    page.evaluate('window.scrollTo(0, 0)')
    time.sleep(0.5)
    page.screenshot(path='scripts/header_updated.png')

    browser.close()

files = ['cortex_3d_final.png', 'cascade_simple_final.png', 'specs_final.png', 'header_updated.png']
for f in files:
    shutil.copy(f'scripts/{f}', rf'C:\Users\erbos\.gemini\antigravity\brain\6e93a0da-3703-40e9-ada6-eabceb7d2ca0\{f}')

print('All transformation screenshots captured and copied!')

