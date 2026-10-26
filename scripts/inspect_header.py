import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

req = urllib.request.Request(
    'https://www.precisionneuro.io/',
    headers={'User-Agent': 'Mozilla/5.0'}
)
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

header_match = re.search(r'<header[^>]*>.*?</header>', html, re.DOTALL)
if header_match:
    h = header_match.group(0)
    print("Header found! Length:", len(h))
    links = re.findall(r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', h, re.DOTALL)
    for href, text in links:
        clean = re.sub(r'<[^>]+>', ' ', text).strip()
        print(f"Link: {href} -> '{clean}'")
    
    classes = re.findall(r'class=["\']([^"\']+)["\']', h)
    print("Classes sample:", classes[:10])
else:
    print("Header not found by regex.")

