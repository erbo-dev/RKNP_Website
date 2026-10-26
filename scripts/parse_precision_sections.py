from bs4 import BeautifulSoup
import json

with open('research/raw_dumps/precisionneuro.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

main = soup.find('main')
elements = []

if main:
    for i, child in enumerate(main.find_all('div', recursive=False)):
        headings = [h.get_text().strip().replace('\n', ' ') for h in child.find_all(['h1', 'h2', 'h3', 'h4', 'h5'])]
        paragraphs = [p.get_text().strip().replace('\n', ' ') for p in child.find_all('p')]
        buttons = [b.get_text().strip() for b in child.find_all(['button', 'a']) if b.get_text().strip()]
        elements.append({
            'index': i,
            'classes': child.get('class', []),
            'headings': headings,
            'paragraphs': paragraphs[:3],
            'buttons': buttons[:4]
        })

print(f"Direct children of main: {len(elements)}")
for el in elements:
    print(f"Child {el['index']}: Classes={el['classes']}")
    print(f"   Headings: {el['headings']}")
    print(f"   Paragraphs preview: {el['paragraphs'][:1]}")
    print(f"   Buttons: {el['buttons']}")
    print("-" * 50)

with open('research/raw_dumps/precision_detailed_sections.json', 'w', encoding='utf-8') as f:
    json.dump(elements, f, indent=2)
