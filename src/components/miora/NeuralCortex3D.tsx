"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sparkles, Radio, Cpu, RefreshCw, Eye } from "lucide-react";

export default function NeuralCortex3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNodesCount, setActiveNodesCount] = useState(1024);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050608, 0.035);

    const width = container.clientWidth;
    const height = container.clientHeight || 560;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 24;
    camera.position.y = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Generate Anatomical 3D Neural Cortex Particles
    const particleCount = 750;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const basePositions: THREE.Vector3[] = [];

    const cyanColor = new THREE.Color(0x00e5ff);
    const slateColor = new THREE.Color(0x8fa3b8);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      // Shape particles into two cortical hemispheres with brain stem indent
      const isLeft = Math.random() > 0.5;
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI - Math.PI / 2;

      // Brain proportions
      const xRadius = 6.8 + (Math.sin(u * 3) * Math.cos(v * 2)) * 0.9;
      const yRadius = 5.2 + Math.cos(v * 3) * 0.7;
      const zRadius = 8.5 + Math.sin(v * 2) * 0.8;

      let x = Math.cos(v) * Math.cos(u) * xRadius;
      let y = Math.sin(v) * yRadius;
      let z = Math.cos(v) * Math.sin(u) * zRadius;

      // Hemisphere separation groove (longitudinal fissure)
      if (isLeft) {
        x = -Math.abs(x) - 0.45;
      } else {
        x = Math.abs(x) + 0.45;
      }

      // Flatten bottom slightly for anatomical shape
      if (y < -2) y *= 0.7;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      basePositions.push(new THREE.Vector3(x, y, z));

      // Color distribution: most slate, some glowing cyan
      const isSignal = Math.random() > 0.75;
      const c = isSignal ? cyanColor : slateColor;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // High quality circle particle texture
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.3, "rgba(0,229,255,0.8)");
      grad.addColorStop(0.7, "rgba(0,229,255,0.2)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.75,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 3. Synaptic Connections (Axon network lines)
    const linePositions: number[] = [];
    const lineColors: number[] = [];
    const maxDistance = 2.8;

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dist = basePositions[i].distanceTo(basePositions[j]);
        if (dist < maxDistance) {
          linePositions.push(basePositions[i].x, basePositions[i].y, basePositions[i].z);
          linePositions.push(basePositions[j].x, basePositions[j].y, basePositions[j].z);

          // Faint lines
          const alpha = (1 - dist / maxDistance) * 0.45;
          lineColors.push(0, 0.8, 1 * alpha);
          lineColors.push(0, 0.8, 1 * alpha);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.Float32BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // 4. Interactive Mouse Rotation & Synapse Lighting
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = { x: 0.003, y: 0.005 };

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        particles.rotation.y += deltaX * 0.007;
        lines.rotation.y += deltaX * 0.007;
        particles.rotation.x += deltaY * 0.007;
        lines.rotation.x += deltaY * 0.007;

        rotationVelocity = { x: deltaY * 0.0005, y: deltaX * 0.0005 };
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    // 5. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Gentle auto-rotation
      if (!isDragging) {
        particles.rotation.y += 0.0035;
        lines.rotation.y += 0.0035;
        particles.rotation.x = Math.sin(elapsedTime * 0.4) * 0.08;
        lines.rotation.x = Math.sin(elapsedTime * 0.4) * 0.08;
      }

      // Synapse firing wave effect (pulse colors)
      const colorAttr = geometry.attributes.color as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        const y = basePositions[i].y;
        const wave = Math.sin(elapsedTime * 3 + y * 0.6);
        if (wave > 0.8) {
          colorAttr.setXYZ(i, 1.0, 1.0, 1.0); // White flash
        } else if (wave > 0.2) {
          colorAttr.setXYZ(i, 0.0, 0.9, 1.0); // Cyan glow
        } else {
          colorAttr.setXYZ(i, 0.2, 0.35, 0.45); // Slate resting
        }
      }
      colorAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Resize handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 560;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("resize", handleResize);

      geometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      if (container.contains(domElement)) {
        container.removeChild(domElement);
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
            <span>03 // Интерактивті 3D Нейрондық Модель</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight mb-4">
            Адам миының цифрлық моделі
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-2xl mx-auto">
            Қозғалыс ниеті моторлық қыртыста (Motor Cortex) қалай туындайтынын және MIORA алгоритмі оны қалай қорғайтынын 3D кеңістікте көріңіз.
          </p>
        </div>

        {/* 3D WebGL Canvas Container */}
        <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#0c0e12] to-[#050608] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* WebGL Canvas Mount */}
          <div
            ref={containerRef}
            className="w-full h-[520px] md:h-[620px] cursor-grab active:cursor-grabbing relative z-10"
          />

          {/* Top-Left Telemetry HUD */}
          <div className="absolute top-6 left-6 z-20 flex flex-col gap-2 pointer-events-none">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-[#050608]/85 backdrop-blur-md text-xs font-mono text-white">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>3D CORTEX // 1,024 ЭЛЕКТРОД АРНАСЫ</span>
            </div>
            <div className="text-[11px] font-mono text-neutral-400 hidden sm:block">
              SENSORIMOTOR RHYTHM: 12.4 HZ // ACTIVE
            </div>
          </div>

          {/* Top-Right Interactive Hint */}
          <div className="absolute top-6 right-6 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-[#050608]/85 backdrop-blur-md text-xs font-mono text-cyan-400 pointer-events-none">
            <Sparkles size={13} className="animate-spin" />
            <span>ТЫШҚАНМЕН БҰРАП ЗЕРТТЕҢІЗ</span>
          </div>

          {/* Bottom-Left Real-time Latency */}
          <div className="absolute bottom-6 left-6 z-20 hidden sm:flex items-center gap-4 text-xs font-mono text-neutral-400 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-white">КІДІРІС: &lt; 2.1 МС</span>
            </div>
            <span className="text-white/20">|</span>
            <span>ЖИІЛІК: 250 HZ</span>
          </div>

          {/* Bottom-Right 3-Pillar Quick Feature Tags */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 pointer-events-none">
            <span className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[11px] font-mono text-neutral-300">
              C3 / Cz / C4
            </span>
            <span className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-[11px] font-mono text-cyan-400">
              OFFLINE PIPELINE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
