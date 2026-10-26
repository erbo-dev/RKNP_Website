import urllib.request
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

targets = [
    ("Bencho", "https://bencho.dev/"),
    ("Morphin", "https://morphin.dev/"),
    ("Morphin Registry", "https://registry.morphin.dev/"),
    ("Libraries.dev", "https://libraries.dev/"),
    ("Libraries.dev Beam", "https://libraries.dev/beam"),
    ("React Bits", "https://www.reactbits.dev/"),
    ("React Bits Ghost Fibers", "https://www.reactbits.dev/backgrounds/ghost-fibers"),
    ("React Bits Threads", "https://www.reactbits.dev/backgrounds/threads"),
    ("Spline Community", "https://community.spline.design/"),
    ("ShaderGradient", "https://shadergradient.co/"),
    ("Seer.js", "https://seer-js.com/"),
    ("Unicorn Studio", "https://www.unicorn.studio/"),
    ("Scrollhaus", "https://scrollhaus.ai/templates/3d/"),
    ("Brain Explorer GitHub", "https://api.github.com/repos/StarKnightt/brain-explorer"),
    ("Precision Neuroscience", "https://www.precisionneuro.io/")
]

for name, url in targets:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=10, context=ctx) as response:
            code = response.getcode()
            print(f"[{code}] {name} ({url})")
    except Exception as e:
        print(f"[ERR] {name} ({url}): {e}")

