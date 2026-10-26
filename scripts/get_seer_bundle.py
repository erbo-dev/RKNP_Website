import urllib.request, ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

req = urllib.request.Request("https://seer-js.com/assets/customize-Dn89dG3N.js", headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10, context=ctx) as r:
        js = r.read().decode('utf-8', errors='ignore')
        with open('research/raw_dumps/seer_customize_bundle.js', 'w', encoding='utf-8') as f:
            f.write(js)
        print("Downloaded Seer bundle, length:", len(js))
        # Look for shader code or waves/harmonic implementation
        if "waves" in js.lower():
            print("Found 'waves' in bundle!")
        if "harmonic" in js.lower():
            print("Found 'harmonic' in bundle!")
except Exception as e:
    print("Error:", e)

