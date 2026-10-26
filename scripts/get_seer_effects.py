import urllib.request, ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = "https://seer-js.com/assets/effects-YEbK8Qit.js"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10, context=ctx) as r:
        js = r.read().decode('utf-8', errors='ignore')
        with open('research/raw_dumps/seer_effects_bundle.js', 'w', encoding='utf-8') as f:
            f.write(js)
        print("Downloaded Seer effects bundle, length:", len(js))
        import re
        files = re.findall(r'seer\.[a-z0-9\.]+\.js', js)
        print("Seer files referenced:", set(files))
except Exception as e:
    print("Error:", e)

