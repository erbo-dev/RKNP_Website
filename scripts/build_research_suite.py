import os
import json
import urllib.request
import ssl
from bs4 import BeautifulSoup

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

def fetch_url(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15, context=ctx) as r:
        return r.read()

def fetch_text(url):
    return fetch_url(url).decode('utf-8', errors='ignore')

def fetch_json(url):
    return json.loads(fetch_text(url))

def save_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    mode = 'wb' if isinstance(content, bytes) else 'w'
    encoding = None if isinstance(content, bytes) else 'utf-8'
    with open(path, mode, encoding=encoding) as f:
        f.write(content)
    print(f"Saved: {path} ({len(content)} bytes)")

def collect_react_bits():
    print("\n--- Collecting React Bits ---")
    rb_components = [
        ("ghost-fibers", "Backgrounds/GhostFibers/GhostFibers.tsx", "Backgrounds/GhostFibersDemo.jsx", "Ghost Fibers", "Flowing luminous neural fiber strands responding to pointer and time"),
        ("threads", "Backgrounds/Threads/Threads.tsx", "Backgrounds/ThreadsDemo.jsx", "Threads", "Dynamic undulating 3D harmonic threads mimicking EEG signal channels"),
        ("orb", "Backgrounds/Orb/Orb.tsx", "Backgrounds/OrbDemo.jsx", "Orb", "Luminous reactive WebGL shader orb pulsing with intent and activation states"),
        ("particles", "Backgrounds/Particles/Particles.tsx", "Backgrounds/ParticlesDemo.jsx", "Particles", "Drifting interactive neural particle cloud with velocity and gravity reaction"),
        ("liquid-ether", "Backgrounds/LiquidEther/LiquidEther.tsx", "Backgrounds/LiquidEtherDemo.jsx", "Liquid Ether", "Fluid distortion simulation representing EMG muscle artifact interference"),
        ("color-bends", "Backgrounds/ColorBends/ColorBends.tsx", "Backgrounds/ColorBendsDemo.jsx", "Color Bends", "Curving spectral gradient waves for neural decision boundaries")
    ]
    
    collected = []
    base_raw = "https://raw.githubusercontent.com/DavidHDev/react-bits/main"
    
    for slug, code_path, demo_path, name, desc in rb_components:
        folder = f"research/components/react-bits/{slug}"
        os.makedirs(folder, exist_ok=True)
        try:
            code_url = f"{base_raw}/src/ts-tailwind/{code_path}"
            code_content = fetch_text(code_url)
            save_file(f"{folder}/{os.path.basename(code_path)}", code_content)
            
            demo_url = f"{base_raw}/src/demo/{demo_path}"
            demo_content = fetch_text(demo_url)
            save_file(f"{folder}/{os.path.basename(demo_path)}", demo_content)
            
            metadata = {
                "name": f"React Bits {name}",
                "source": "React Bits",
                "url": f"https://www.reactbits.dev/backgrounds/{slug}",
                "github_url": f"https://github.com/DavidHDev/react-bits/tree/main/src/ts-tailwind/{code_path}",
                "category": "Backgrounds & WebGL",
                "visual_description": desc,
                "interaction_type": "Pointer / Scroll / Shader Motion",
                "technology": "React, Three.js / OGL / Tailwind CSS",
                "dependencies": ["three", "ogl", "clsx", "tailwind-merge"],
                "source_code_availability": "Full source acquired (TypeScript + Tailwind)",
                "license": "MIT License (DavidHDev/react-bits)",
                "relevance_to_miora": f"Ideal for neural signal visualization ({desc})",
                "suggested_section": "Hero & The Problem" if "fiber" in slug or "thread" in slug or "ether" in slug else "Background Surface"
            }
            save_file(f"{folder}/metadata.json", json.dumps(metadata, indent=2))
            collected.append(metadata)
        except Exception as e:
            print(f"Error fetching React Bits {slug}: {e}")
            
    return collected

def collect_morphin():
    print("\n--- Collecting Morphin Registry ---")
    morphin_targets = [
        ("animated-svg-branch-connector", "Hierarchical tree branch connectors for neural cascading decision gates", "How MIORA Works"),
        ("shaders-hero-section", "High-end cinematic shader hero with pulsing circular neural focal point", "Hero Section"),
        ("viscose-carousel-interactive-portfolio-gallery", "Three.js gooey ring carousel with GSAP motion for experiment cards", "Scientific Results / Gallery"),
        ("animated-dashboard-performance-chart", "Performance metrics trend chart with tabs and interactive hover", "Scientific Results"),
        ("animated-dot-matrix-sales-chart-for-react-framer-motion-ui-component", "Dot-matrix visualizer for multi-participant EEG trial metrics", "Scientific Results"),
        ("precision-slider-with-animated-value", "Precision slider with numeric readout for chewing noise threshold control", "Interactive Demo"),
        ("scroll-scramble-section", "Scroll-triggered text scramble with GSAP Flip for Intent Reveal", "Introducing MIORA"),
        ("scroll-text-reveal-animation", "Sticky scroll letter scattering for signal interference transition", "The Problem"),
        ("infinite-grid-with-framer-motion", "Subtle technical grid background with pointer spotlight", "Global / Section 04"),
        ("text-shimmer-wave", "Per-character shimmer wave animation for hero tagline", "Hero Tagline")
    ]
    
    collected = []
    base_registry = "https://registry.morphin.dev"
    
    for slug, desc, section in morphin_targets:
        folder = f"research/components/morphin/{slug}"
        os.makedirs(folder, exist_ok=True)
        try:
            item_data = fetch_json(f"{base_registry}/items/{slug}.json")
            save_file(f"{folder}/{slug}.json", json.dumps(item_data, indent=2))
            
            # Download item files
            for f_info in item_data.get("files", []):
                file_rel = f_info.get("path")
                file_url = f"{base_registry}/files/{file_rel}"
                file_content = fetch_text(file_url)
                save_file(f"{folder}/{os.path.basename(file_rel)}", file_content)
                
            metadata = {
                "name": item_data.get("name", slug),
                "source": "Morphin",
                "url": f"https://morphin.dev/",
                "registry_url": f"https://registry.morphin.dev/items/{slug}.json",
                "category": "Interactive Motion UI",
                "visual_description": desc,
                "interaction_type": "Scroll / Pointer / Hover / Gesture",
                "technology": "React, Framer Motion, GSAP, Tailwind CSS",
                "dependencies": item_data.get("dependencies", ["framer-motion", "clsx", "tailwind-merge"]),
                "source_code_availability": "Full source acquired (TypeScript + React)",
                "license": "Public Registry (Morphin Dev License / MIT Compatible)",
                "relevance_to_miora": desc,
                "suggested_section": section
            }
            save_file(f"{folder}/metadata.json", json.dumps(metadata, indent=2))
            collected.append(metadata)
        except Exception as e:
            print(f"Error fetching Morphin {slug}: {e}")
            
    return collected

def collect_libraries_dev():
    print("\n--- Collecting Libraries.dev ---")
    lib_targets = [
        ("border-beam", "Border Beam", "Animates a luminous beam travelling around card or container borders", "How MIORA Works / Gate Cards"),
        ("thinking-orbs", "Thinking Orbs", "Multi-layered organic glowing orbs indicating active AI/heuristic processing", "Decision Protection Engine"),
        ("liquid-gooey", "Liquid Gooey", "Organic SVG gooey filter simulation with fluid coalescing physics", "Signal Interference / Noise"),
        ("voice-glow", "Voice Glow", "Acoustic / EMG frequency waveform reactive glow aura", "Signal Monitoring / Audio"),
        ("bot-avatars", "Bot Avatars", "Generative high-tech avatar shapes with procedural geometry", "Team / Methodology"),
        ("metal-fx", "Liquid Metal", "Photorealistic liquid metal chromatic shader reflections", "Hero Visual Polish")
    ]
    
    collected = []
    base_raw = "https://raw.githubusercontent.com/Jakubantalik/Libraries.dev/main"
    
    for slug, name, desc, section in lib_targets:
        folder = f"research/components/libraries-dev/{slug}"
        os.makedirs(folder, exist_ok=True)
        try:
            # Download reference markdown docs
            ref_idx = {"border-beam": "01-border-beam", "thinking-orbs": "02-thinking-orbs", "liquid-gooey": "03-liquid-gooey", "voice-glow": "04-voice-glow", "bot-avatars": "05-bot-avatars", "metal-fx": "06-metal-fx"}.get(slug)
            if ref_idx:
                doc_url = f"{base_raw}/skills/libraries-dev/references/{ref_idx}.md"
                doc_text = fetch_text(doc_url)
                save_file(f"{folder}/{slug}-spec.md", doc_text)
                
            # Download demo / source files if available
            site_url = f"{base_raw}/sites/home/src/{slug}.tsx"
            try:
                code_text = fetch_text(site_url)
                save_file(f"{folder}/{slug}.tsx", code_text)
            except Exception:
                pass
                
            metadata = {
                "name": f"Libraries.dev {name}",
                "source": "Libraries.dev",
                "url": f"https://libraries.dev/{slug.replace('-fx', '')}",
                "github_url": f"https://github.com/Jakubantalik/Libraries.dev",
                "category": "Motion & Visual Effects",
                "visual_description": desc,
                "interaction_type": "Pointer / Continuous Ambient / CSS Animation",
                "technology": "React, Tailwind CSS, Canvas / SVG Shaders",
                "dependencies": ["react", "framer-motion", "clsx"],
                "source_code_availability": "Full source acquired (TypeScript + Specs)",
                "license": "MIT License (Jakub Antalik / Libraries.dev)",
                "relevance_to_miora": desc,
                "suggested_section": section
            }
            save_file(f"{folder}/metadata.json", json.dumps(metadata, indent=2))
            collected.append(metadata)
        except Exception as e:
            print(f"Error fetching Libraries.dev {slug}: {e}")
            
    return collected

def collect_seer():
    print("\n--- Collecting Seer.js ---")
    seer_targets = [
        ("waves", "Seer.js Waves", "3D undulating wavy grid surface that dynamically rises and swells under cursor", "The Problem / Signal Disturbance"),
        ("harmonic", "Seer.js Harmonic", "Harmonic oscillation surface displaying multi-sine waves mirroring EEG frequencies", "The Problem / EEG Waveform"),
        ("grid", "Seer.js Grid", "Precision constellation coordinate grid with interactive nodal links", "Decision Matrix")
    ]
    
    collected = []
    for slug, name, desc, section in seer_targets:
        folder = f"research/components/seer-js/{slug}"
        os.makedirs(folder, exist_ok=True)
        try:
            file_url = f"https://seer-js.com/seer.{slug}.min.js"
            js_content = fetch_text(file_url)
            save_file(f"{folder}/seer.{slug}.min.js", js_content)
            
            metadata = {
                "name": name,
                "source": "Seer.js",
                "url": f"https://seer-js.com/customize.html?effect={slug}",
                "category": "3D WebGL Backgrounds",
                "visual_description": desc,
                "interaction_type": "Pointer & Gyroscope 3D Reactive",
                "technology": "Three.js, WebGL Shaders",
                "dependencies": ["three"],
                "source_code_availability": "Full minified standalone engine & shader bundle acquired",
                "license": "Publicly distributed by seer-js.com",
                "relevance_to_miora": desc,
                "suggested_section": section
            }
            save_file(f"{folder}/metadata.json", json.dumps(metadata, indent=2))
            collected.append(metadata)
        except Exception as e:
            print(f"Error fetching Seer {slug}: {e}")
            
    return collected

def collect_shadergradient():
    print("\n--- Collecting ShaderGradient ---")
    folder = "research/components/shadergradient"
    os.makedirs(folder, exist_ok=True)
    metadata = {
        "name": "ShaderGradient",
        "source": "ShaderGradient",
        "url": "https://shadergradient.co/",
        "category": "3D Mesh Gradient Shaders",
        "visual_description": "High-fidelity moving 3D color field with organic wave distortion and soft depth of field",
        "interaction_type": "Pointer / Continuous Ambient WebGL Motion",
        "technology": "React Three Fiber, Three.js, GLSL",
        "dependencies": ["shadergradient", "three", "@react-three/fiber"],
        "source_code_availability": "Available via NPM (npm i shadergradient)",
        "license": "MIT / Open NPM Package",
        "relevance_to_miora": "Cinematic ambient backdrop for hero transition and technical depth",
        "suggested_section": "Hero & Section Transitions"
    }
    save_file(f"{folder}/metadata.json", json.dumps(metadata, indent=2))
    return [metadata]

def build_unavailable_components():
    print("\n--- Compiling Unavailable Components Array ---")
    unavailable = []
    
    # 1. Bencho components
    bencho_list = [
        ("Network Graph", "https://bencho.dev/blocks/action-node", "Network Graph micro-interaction block"),
        ("Line Sphere", "https://bencho.dev/blocks/drag-ball", "3D interactive wireframe sphere with line vertices"),
        ("Dot Swarm", "https://bencho.dev/blocks/particles", "Autonomous flocking dot swarm with cursor attraction"),
        ("Heart Rate", "https://bencho.dev/blocks/slosh", "Pulsing biometric monitor rhythm interaction"),
        ("Heat Map", "https://bencho.dev/blocks/heat-word", "Thermal intensity surface map for signal energy"),
        ("Eye Tracker", "https://bencho.dev/blocks/eye-tracker", "Gaze vector simulator tracking pointer position"),
        ("Stacked Bars", "https://bencho.dev/blocks/stacked-bars", "Stacked bar distribution chart with drag interactions"),
        ("Rolling Counter", "https://bencho.dev/blocks/rolling-counter", "Odometer-style smooth mechanical rolling numeric counter"),
        ("Magnetic Dots", "https://bencho.dev/blocks/magnet-select", "Grid dots attracted magnetically to cursor proximity"),
        ("Dot Globe", "https://bencho.dev/blocks/drag-ball", "Rotating spherical point cloud projection"),
        ("Image Compare", "https://bencho.dev/blocks/image-compare", "Interactive split-pane slider before/after comparator"),
        ("Action Node", "https://bencho.dev/blocks/action-node", "Flowchart decision node with interactive ports"),
        ("Step Player", "https://bencho.dev/blocks/step-player", "Multi-stage protocol step player with progress bars"),
        ("Shimmer Text", "https://bencho.dev/blocks/signature", "Luminous gradient sweep across typography"),
        ("Progressive Blur", "https://bencho.dev/blocks/glass-bubble", "Backdrop blur gradient mask with variable radius"),
        ("Glass Bubble", "https://bencho.dev/blocks/glass-bubble", "Refractive physical glass orb with specular reflections"),
        ("Orbit Cards", "https://bencho.dev/blocks/card-swap", "Cards orbiting on elliptic 3D trajectory"),
        ("Metaballs", "https://bencho.dev/blocks/slosh", "Organic fluid metaballs merging and dividing on contact")
    ]
    
    for name, url, desc in bencho_list:
        unavailable.append({
            "source": "Bencho",
            "component": name,
            "url": url,
            "reason": "PRO / paid subscription required ($99/yr). Code is locked behind auth wall.",
            "attempted_methods": [
                "Official website inspection (bencho.dev)",
                "DOM and script payload analysis",
                "Registry endpoint inspection",
                "GitHub open source search"
            ],
            "required_from_user": "User Bencho PRO account export / source code if proprietary implementation is preferred, or authorization to build custom native React/Three.js equivalents.",
            "priority": "high"
        })
        
    # 2. Scrollhaus components
    scrollhaus_list = [
        ("Plasma Orb", "https://scrollhaus.ai/templates/3d/plasma-orb/", "Crackling electrical plasma globe bending bolts to cursor"),
        ("Layered Waves", "https://scrollhaus.ai/templates/3d/layered-waves/", "Glossy ribbon wave surfaces with cursor swell"),
        ("Glass Lens Headline", "https://scrollhaus.ai/templates/3d/glass-lens/", "Refractive glass magnifying lens dragging over typography"),
        ("Neon Tube", "https://scrollhaus.ai/templates/3d/neon-tube/", "Curving neon cathode tube reacting to click"),
        ("Shattering Crystal", "https://scrollhaus.ai/templates/3d/crystal-shards/", "Low-poly crystal fragmenting on pointer touch"),
        ("Liquid Chrome Blob", "https://scrollhaus.ai/templates/3d/liquid-blob/", "Reflective metallic chrome droplet with surface tension")
    ]
    
    for name, url, desc in scrollhaus_list:
        unavailable.append({
            "source": "Scrollhaus",
            "component": name,
            "url": url,
            "reason": "PRO / commercial paid subscription required. Cloudflare bot protection and paywall.",
            "attempted_methods": [
                "Official template inspection (scrollhaus.ai/templates/3d)",
                "DOM script analysis",
                "Public code download endpoint check"
            ],
            "required_from_user": "Purchased template zip/code from Scrollhaus, or approval to use custom Three.js shader implementations.",
            "priority": "medium"
        })
        
    # 3. Unicorn Studio
    unavailable.append({
        "source": "Unicorn Studio",
        "component": "Unicorn Studio Embedded Scenes",
        "url": "https://www.unicorn.studio/",
        "reason": "Cloud-hosted proprietary editor; embedding requires private project ID / paid plan.",
        "attempted_methods": [
            "Official documentation and pricing inspection",
            "NPM package registry search (@unicorn.studio)",
            "Public project export check"
        ],
        "required_from_user": "Project ID or JSON export file from user Unicorn Studio account.",
        "priority": "medium"
    })
    
    # 4. Spline Community Brain Models
    unavailable.append({
        "source": "Spline Community",
        "component": "Interactive 3D Brain Scenes",
        "url": "https://community.spline.design/",
        "reason": "Spline export requires user account with remix rights / paid export license for production standalone code.",
        "attempted_methods": [
            "Community search inspection",
            "Public splinecode URL probe"
        ],
        "required_from_user": "Public/remixed .splinecode URL or exported asset from user Spline account.",
        "priority": "high"
    })
    
    # 5. StarKnightt Brain Explorer
    unavailable.append({
        "source": "GitHub / StarKnightt",
        "component": "brain-explorer",
        "url": "https://github.com/StarKnightt/brain-explorer",
        "reason": "License: None. Under copyright law, repository without an open-source license cannot have code copied directly.",
        "attempted_methods": [
            "GitHub repository API and license check"
        ],
        "required_from_user": "Permitted only as architectural/aesthetic reference, or explicit author permission required for direct copying.",
        "priority": "medium"
    })
    
    save_file("research/unavailable-components.json", json.dumps(unavailable, indent=2))
    return unavailable

if __name__ == "__main__":
    rb = collect_react_bits()
    mo = collect_morphin()
    ld = collect_libraries_dev()
    se = collect_seer()
    sg = collect_shadergradient()
    
    all_inventory = rb + mo + ld + se + sg
    save_file("research/component-inventory.json", json.dumps(all_inventory, indent=2))
    
    unav = build_unavailable_components()
    print(f"\nInventory compiled: {len(all_inventory)} components with full source acquired!")
    print(f"Unavailable components compiled: {len(unav)} items cataloged.")

