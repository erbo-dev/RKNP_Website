"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Cpu, Sparkles, Activity, Layers, ZoomIn, RotateCcw } from "lucide-react";

export default function NeuralCortex3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [activeLobe, setActiveLobe] = useState<string>("Motor Cortex (C3-Cz-C4)");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050608, 0.015);

    const width = container.clientWidth;
    const height = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2.5, 18);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. High-Tech Studio Lighting
    const ambientLight = new THREE.AmbientLight(0x0d1b2a, 2.5);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00e5ff, 5.0, 60);
    cyanLight.position.set(10, 15, 15);
    scene.add(cyanLight);

    const emeraldLight = new THREE.PointLight(0x00e676, 3.5, 60);
    emeraldLight.position.set(-12, -5, -10);
    scene.add(emeraldLight);

    const blueRimLight = new THREE.PointLight(0x0077ff, 4.0, 50);
    blueRimLight.position.set(0, -10, 12);
    scene.add(blueRimLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 2.2);
    topLight.position.set(5, 20, 15);
    scene.add(topLight);

    // 3. Particles Spark System surrounding the brain
    const sparkCount = 350;
    const sparkGeometry = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparkCount * 3);

    for (let i = 0; i < sparkCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const rad = 7.5 + Math.random() * 5.0;

      sparkPositions[i * 3] = rad * Math.sin(phi) * Math.cos(theta);
      sparkPositions[i * 3 + 1] = rad * Math.sin(phi) * Math.sin(theta) + 0.5;
      sparkPositions[i * 3 + 2] = rad * Math.cos(phi);
    }
    sparkGeometry.setAttribute("position", new THREE.BufferAttribute(sparkPositions, 3));

    const sparkMaterial = new THREE.PointsMaterial({
      size: 0.12,
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const sparks = new THREE.Points(sparkGeometry, sparkMaterial);
    scene.add(sparks);

    // 4. Load Real Anatomical GLB Brain Model
    let brainGroup = new THREE.Group();
    scene.add(brainGroup);

    const loader = new GLTFLoader();
    loader.load(
      "/brain.glb",
      (gltf) => {
        const model = gltf.scene;

        // Collect meshes first to avoid infinite recursion in traverse
        const meshes: THREE.Mesh[] = [];
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            meshes.push(child as THREE.Mesh);
          }
        });

        // Apply ultra-sleek surgical neural material to each anatomical lobe
        meshes.forEach((mesh) => {
          mesh.material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0x041828),
            emissive: new THREE.Color(0x00e5ff),
            emissiveIntensity: 0.22,
            roughness: 0.18,
            metalness: 0.85,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            wireframe: false,
          });
        });

        // Auto-center and normalize size using a pivot group
        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        box.getCenter(center);
        const size = new THREE.Vector3();
        box.getSize(size);

        model.position.set(-center.x, -center.y, -center.z);

        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 13.5 / maxDim;

        const pivot = new THREE.Group();
        pivot.add(model);
        pivot.scale.set(scale, scale, scale);

        // Anatomical Upright Rotation:
        // In the raw GLB: Z is superior (up), -Y is anterior (front).
        // Rotate X by -90 deg (-Math.PI/2) to orient Z to +Y (up) and -Y to +Z (front)
        pivot.rotation.x = -Math.PI / 2;
        // Slight natural 3/4 hero presentation angle:
        pivot.rotation.z = Math.PI; // Face front
        pivot.rotation.y = 0.35; // 3/4 perspective

        brainGroup.add(pivot);

        setLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading brain model:", error);
        setLoading(false);
      }
    );

    // 6. Interactive Drag & Momentum Controls
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let velocity = { x: 0, y: 0 };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - prevMouse.x;
        const deltaY = e.clientY - prevMouse.y;

        velocity = { x: deltaY * 0.005, y: deltaX * 0.005 };
        brainGroup.rotation.y += velocity.y;
        brainGroup.rotation.x += velocity.x;

        prevMouse = { x: e.clientX, y: e.clientY };
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // Zoom via wheel
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z = THREE.MathUtils.clamp(camera.position.z + e.deltaY * 0.015, 10, 26);
    };
    dom.addEventListener("wheel", onWheel, { passive: false });

    // 7. Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Gentle auto-rotation
      if (!isDragging) {
        brainGroup.rotation.y += 0.003;
        velocity.x *= 0.95;
        velocity.y *= 0.95;
        brainGroup.rotation.x += velocity.x;
      }

      // Rotate background sparks slowly
      sparks.rotation.y = time * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 600;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      dom.removeEventListener("pointerdown", onPointerDown);
      dom.removeEventListener("wheel", onWheel);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("resize", onResize);

      sparkGeometry.dispose();
      sparkMaterial.dispose();
      renderer.dispose();
      if (container.contains(dom)) {
        container.removeChild(dom);
      }
    };
  }, []);

  return (
    <section id="cortex" className="py-28 px-6 md:px-12 bg-[#050608] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 uppercase mb-3 flex items-center justify-center gap-2">
            <Cpu size={14} className="animate-pulse" />
            <span>03 // Анатомиялық 3D Нейрондық Модель</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight mb-4">
            Адам миының нақты 3D құрылымы
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-light max-w-2xl mx-auto">
            Моторлық қыртыс (Motor Cortex), самай және маңдай бөліктерінің толықтай нақты анатомиялық 3D моделі. Тышқанмен еркін бұрап, зерттеңіз.
          </p>
        </div>

        {/* 3D WebGL Canvas Container */}
        <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#080d14] to-[#050608] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Loading Indicator */}
          {loading && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#050608]/90 backdrop-blur-md">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                <span className="font-mono text-xs text-cyan-400 tracking-wider">
                  3D АНАТОМИЯЛЫҚ МОДЕЛЬ ЖҮКТЕЛУДЕ...
                </span>
              </div>
            </div>
          )}

          {/* WebGL Canvas Mount */}
          <div
            ref={containerRef}
            className="w-full h-[540px] md:h-[660px] cursor-grab active:cursor-grabbing relative z-10"
          />

          {/* Top-Left Telemetry HUD */}
          <div className="absolute top-6 left-6 z-20 flex flex-col gap-2 pointer-events-none">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-[#050608]/85 backdrop-blur-md text-xs font-mono text-white">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>PRIMARY MOTOR CORTEX // C3-Cz-C4</span>
            </div>
            <div className="text-[11px] font-mono text-neutral-400 hidden sm:block">
              ANATOMICAL SCAN: COMPLETE CEREBRAL HEMISPHERES
            </div>
          </div>

          {/* Top-Right Interactive Hint */}
          <div className="absolute top-6 right-6 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-[#050608]/85 backdrop-blur-md text-xs font-mono text-cyan-400 pointer-events-none">
            <Sparkles size={13} className="animate-spin" />
            <span>ТЫШҚАНМЕН 360° БҰРАП ҚАРАҢЫЗ</span>
          </div>

          {/* Bottom-Left Real-time Latency */}
          <div className="absolute bottom-6 left-6 z-20 hidden sm:flex items-center gap-4 text-xs font-mono text-neutral-400 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-white">КІДІРІС: &lt; 2.1 МС</span>
            </div>
            <span className="text-white/20">|</span>
            <span>СИГНАЛ ЖИІЛІГІ: 250 HZ</span>
          </div>

          {/* Bottom-Right Lobe Selector Badge */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 pointer-events-none">
            <span className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[11px] font-mono text-neutral-300">
              GYRI & SULCI
            </span>
            <span className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-[11px] font-mono text-cyan-400">
              1,024 ЭЛЕКТРОД ОРНЫ
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
