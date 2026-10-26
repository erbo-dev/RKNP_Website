import json
import os
import re
from bs4 import BeautifulSoup

OUTPUT_DIR = r"d:\RKNP_Website\research"

print("--- 1. Bencho Links ---")
try:
    with open(f"{OUTPUT_DIR}/raw_dumps/bencho_links.json", "r", encoding="utf-8") as f:
        bencho_links = json.load(f)
        component_links = [l for l in bencho_links if "/components/" in l.get("href", "") or l.get("href", "").startswith("https://bencho.dev/")]
        print(f"Total Bencho links: {len(bencho_links)}")
        print("Sample Bencho links:", json.dumps(component_links[:10], indent=2))
except Exception as e:
    print("Bencho error:", e)

print("\n--- 2. Morphin Registry Dump ---")
try:
    with open(f"{OUTPUT_DIR}/raw_dumps/morphin_registry.html", "r", encoding="utf-8") as f:
        content = f.read()
        print(f"Morphin registry length: {len(content)}")
        # Check if json or html
        if content.strip().startswith("{") or content.strip().startswith("["):
            print("Morphin registry is JSON!")
        else:
            soup = BeautifulSoup(content, "html.parser")
            print("Morphin registry page title:", soup.title.string if soup.title else "No title")
            print("Text sample:", soup.get_text()[:300].replace("\n", " "))
except Exception as e:
    print("Morphin registry error:", e)

print("\n--- 3. Libraries.dev Links ---")
try:
    with open(f"{OUTPUT_DIR}/raw_dumps/libraries_dev_links.json", "r", encoding="utf-8") as f:
        lib_links = json.load(f)
        print(f"Libraries.dev links count: {len(lib_links)}")
        print("Sample:", json.dumps(lib_links[:10], indent=2))
except Exception as e:
    print("Libraries.dev error:", e)

print("\n--- 4. React Bits Links ---")
try:
    with open(f"{OUTPUT_DIR}/raw_dumps/reactbits_links.json", "r", encoding="utf-8") as f:
        rb_links = json.load(f)
        print(f"React Bits links count: {len(rb_links)}")
        print("Sample:", json.dumps(rb_links[:15], indent=2))
except Exception as e:
    print("React Bits error:", e)

print("\n--- 5. Scrollhaus Links ---")
try:
    with open(f"{OUTPUT_DIR}/raw_dumps/scrollhaus_links.json", "r", encoding="utf-8") as f:
        sh_links = json.load(f)
        print(f"Scrollhaus links count: {len(sh_links)}")
        print("Sample:", json.dumps(sh_links[:10], indent=2))
except Exception as e:
    print("Scrollhaus error:", e)

print("\n--- 6. Seer Links ---")
try:
    with open(f"{OUTPUT_DIR}/raw_dumps/seer_links.json", "r", encoding="utf-8") as f:
        seer_links = json.load(f)
        print(f"Seer links count: {len(seer_links)}")
        print("Sample:", json.dumps(seer_links[:10], indent=2))
except Exception as e:
    print("Seer error:", e)

