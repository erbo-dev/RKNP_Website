from bs4 import BeautifulSoup

with open('research/raw_dumps/precisionneuro.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

links = soup.find_all('link', rel='stylesheet')
for l in links:
    print("Stylesheet:", l.get('href'))

styles = soup.find_all('style')
print("Inline style tags count:", len(styles))

# Check font imports
for s in styles:
    if '@font-face' in s.text:
        print("Font face found in style tag!")
        for line in s.text.split('\n'):
            if 'font-family' in line or 'src:' in line:
                print("   ", line.strip()[:80])
