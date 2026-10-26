from bs4 import BeautifulSoup
import json

with open('research/raw_dumps/precisionneuro.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

container = soup.find('div', class_=lambda c: c and 'sections-module-scss-module__fUt1Xq__container' in c)
sections = []

if container:
    for i, child in enumerate(container.find_all('div', recursive=False)):
        h = [x.get_text().strip().replace('\n', ' ') for x in child.find_all(['h1', 'h2', 'h3', 'h4'])]
        p = [x.get_text().strip().replace('\n', ' ') for x in child.find_all('p')]
        classes = child.get('class', [])
        sections.append({
            'index': i,
            'classes': classes,
            'headings': h,
            'paragraphs': p[:2]
        })

print(f"Total sections inside container: {len(sections)}")
for s in sections:
    print(f"Section {s['index']}: class={s['classes']}")
    print(f"   Headings: {s['headings']}")
    print(f"   P sample: {s['paragraphs'][:1]}")
    print("=" * 60)

with open('research/raw_dumps/precision_subsections.json', 'w', encoding='utf-8') as f:
    json.dump(sections, f, indent=2)
