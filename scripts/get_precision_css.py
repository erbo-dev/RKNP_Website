import urllib.request, ssl, re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

base = "https://www.precisionneuro.io"
css_urls = [
    "/_next/static/chunks/e2aa0ffdae0a698e.css",
    "/_next/static/chunks/f580b54c7e9400e3.css",
    "/_next/static/chunks/1fa3ae94d60e394d.css"
]

all_css = ""
for u in css_urls:
    try:
        req = urllib.request.Request(base + u, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10, context=ctx) as r:
            content = r.read().decode('utf-8', errors='ignore')
            all_css += "\n" + content
            print(f"Downloaded {u} ({len(content)} bytes)")
    except Exception as e:
        print(f"Error {u}: {e}")

with open('research/raw_dumps/precision_combined.css', 'w', encoding='utf-8') as f:
    f.write(all_css)

# Extract font families
fonts = set(re.findall(r'font-family:\s*([^;\}]+)', all_css))
print("\nFonts detected:", fonts)

# Extract root variables (colors, spacing, etc.)
vars_found = set(re.findall(r'--[a-zA-Z0-9_-]+:\s*[^;\}]+', all_css))
print(f"\nCSS variables count: {len(vars_found)}")
print("Sample CSS variables:", list(vars_found)[:25])
