import urllib.request
import os

os.makedirs('public/videos', exist_ok=True)

videos = {
    'hero_bg.mp4': 'https://cdn.sanity.io/files/883wn8od/production/528144f95ab279093cf975d826a2600c193b164f.mp4',
    'layer7_array.mp4': 'https://cdn.sanity.io/files/883wn8od/production/21fdb74416ed3a90f6b24c7c241760cdd73d7218.mp4',
    'patient_chair.webm': 'https://cdn.sanity.io/files/883wn8od/production/8e04c71fd9e9ca3efeab1f4cb1d0a9c5648f8165.webm',
    'patient_chair.mov': 'https://cdn.sanity.io/files/883wn8od/production/ce62031cbb4edc45406dcc5476d96a34582fd835.mov',
    'brain_expansion.mp4': 'https://cdn.sanity.io/files/883wn8od/production/8251d1f7954620b7ad5d82719013d50691f57818.mp4'
}

for name, url in videos.items():
    dst = os.path.join('public/videos', name)
    if not os.path.exists(dst) or os.path.getsize(dst) < 1000:
        print(f"Downloading {name}...")
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as resp, open(dst, 'wb') as f:
                f.write(resp.read())
            print(f"Saved {dst} ({os.path.getsize(dst)} bytes)")
        except Exception as e:
            print(f"Failed {name}: {e}")
    else:
        print(f"Already exists: {name}")

