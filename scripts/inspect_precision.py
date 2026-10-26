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

matches = list(re.finditer(r'<video[^>]*>.*?</video>', html, re.DOTALL))
for i, m in enumerate(matches):
    start = max(0, m.start() - 1500)
    end = min(len(html), m.end() + 1500)
    context = html[start:end]
    src = re.findall(r'src=["\']([^"\']+)["\']', m.group(0))
    poster = re.findall(r'poster=["\']([^"\']+)["\']', m.group(0))
    h_tags = re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', context)
    p_tags = re.findall(r'<p[^>]*>(.*?)</p>', context)
    print(f"\n==================== Video {i+1} ====================")
    print("Src:", src)
    print("Poster:", poster)
    print("Headings nearby:", [re.sub(r'<[^>]+>', '', h).strip() for h in h_tags])
    print("Paragraphs nearby:", [re.sub(r'<[^>]+>', '', p).strip() for p in p_tags[:3]])
