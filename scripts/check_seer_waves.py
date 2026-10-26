import urllib.request, ssl
from bs4 import BeautifulSoup

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = "https://seer-js.com/customize.html?effect=waves"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10, context=ctx) as r:
        html = r.read().decode('utf-8', errors='ignore')
        soup = BeautifulSoup(html, 'html.parser')
        scripts = [s.get('src') for s in soup.find_all('script') if s.get('src')]
        print("Scripts on waves page:", scripts)
        # Check download or export buttons
        for a in soup.find_all(['a', 'button']):
            print("Action on waves page:", a.text.strip(), a.get('href'))
except Exception as e:
    print("Error:", e)

