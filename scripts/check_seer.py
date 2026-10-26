import urllib.request, ssl
from bs4 import BeautifulSoup

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

req = urllib.request.Request("https://seer-js.com/docs.html", headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10, context=ctx) as r:
        html = r.read().decode('utf-8', errors='ignore')
        soup = BeautifulSoup(html, 'html.parser')
        with open('research/raw_dumps/seer_docs.txt', 'w', encoding='utf-8') as f:
            f.write(soup.get_text())
        print("Seer docs saved!")
        for code in soup.find_all(['code', 'pre']):
            print("Seer code snippet:", code.text[:120].replace('\n', ' '))
except Exception as e:
    print("Seer docs error:", e)

