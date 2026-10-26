import json
from bs4 import BeautifulSoup

with open('research/raw_dumps/precisionneuro.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

print("Title:", soup.title.string if soup.title else "")

# Analyze sections
sections = soup.find_all(['section', 'header', 'footer', 'div'])
meaningful_sections = []

for s in soup.find_all(['section', 'header', 'footer']):
    classes = s.get('class', [])
    s_id = s.get('id', '')
    h = s.find(['h1', 'h2', 'h3', 'h4'])
    h_text = h.get_text().strip().replace('\n', ' ') if h else ""
    p = s.find('p')
    p_text = p.get_text().strip().replace('\n', ' ')[:100] if p else ""
    meaningful_sections.append({
        'tag': s.name,
        'id': s_id,
        'classes': " ".join(classes) if isinstance(classes, list) else str(classes),
        'heading': h_text,
        'preview': p_text
    })

print(f"Total main blocks: {len(meaningful_sections)}")
for i, m in enumerate(meaningful_sections):
    print(f"[{i+1}] <{m['tag']}> id='{m['id']}' class='{m['classes'][:40]}' | Heading: '{m['heading']}'")

