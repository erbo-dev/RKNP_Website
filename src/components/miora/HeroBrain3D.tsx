"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroBrain3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 5.5);

    // 2. Renderer with transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Procedural Cortical Brain Geometry (Dual Hemispheres with Sulci & Gyri)
    const brainGroup = new THREE.Group();
    scene.add(brainGroup);

    const particleCount = 2400;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const basePositions: THREE.Vector3[] = [];

    const colorCyan = new THREE.Color("#00e5ff");
    const colorSilver = new THREE.Color("#d7e2e9");
    const colorSlate = new THREE.Color("#49555c");

    let pIndex = 0;
    for (let i = 0; i < particleCount; i++) {
      // Hemisphere distribution: left (sign -1) or right (sign +1)
      const hemisphere = i % 2 === 0 ? 1 : -1;
      const u = Math.random();
      const v = Math.random();

      // Ellipsoidal parametric mapping with brain proportions
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      // Anatomical shape deformation
      let x = 1.35 * Math.sin(phi) * Math.cos(theta) * 0.9;
      let y = 1.05 * Math.sin(phi) * Math.sin(theta) * 0.85;
      let z = 1.65 * Math.cos(phi);

      // Separate hemispheres slightly along X
      x = x + hemisphere * 0.22;

      // Add cortical folding (gyri/sulci modulation)
      const fold = Math.sin(x * 6.0) * Math.cos(y * 6.0) * Math.sin(z * 4.0) * 0.12;
      x += fold;
      y += fold;
      z += fold;

      // Flatten bottom slightly (ventral surface)
      if (y < -0.4) {
        y *= 0.75;
      }

      positions[pIndex * 3] = x;
      positions[pIndex * 3 + 1] = y;
      positions[pIndex * 3 + 2] = z;

      basePositions.push(new THREE.Vector3(x, y, z));

      // Color gradient: cyan for frontal/active, platinum silver for body, slate for lower
      const lerpVal = (z + 1.6) / 3.2;
      const pointColor = colorSilver.clone().lerp(colorCyan, Math.pow(lerpVal, 1.8));
      if (y < -0.3) {
        pointColor.lerp(colorSlate, 0.5);
      }

      colors[pIndex * 3] = pointColor.r;
      colors[pIndex * 3 + 1] = pointColor.g;
      colors[pIndex * 3 + 2] = pointColor.b;

      pIndex++;
    }

    const brainGeometry = new THREE.BufferGeometry();
    brainGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    brainGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle Material with Soft Glow Sprite
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.2, "rgba(0,229,255,0.85)");
    gradient.addColorStop(0.6, "rgba(0,229,255,0.15)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    const particleTexture = new THREE.CanvasTexture(canvas);

    const brainMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const brainPoints = new THREE.Points(brainGeometry, brainMaterial);
    brainGroup.add(brainPoints);

    // 4. Neural Synaptic Network Lines (Connecting nearest nodes)
    const lineIndices: number[] = [];
    const maxDistance = 0.38;
    for (let i = 0; i < particleCount; i += 3) {
      for (let j = i + 1; j < Math.min(i + 25, particleCount); j++) {
        const d = basePositions[i].distanceTo(basePositions[j]);
        if (d < maxDistance) {
          lineIndices.push(i, j);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    lineGeometry.setIndex(lineIndices);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });

    const neuralLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    brainGroup.add(neuralLines);

    // 5. Synaptic Electrical Pulse Ring (Scanning Action Potentials)
    const ringGeo = new THREE.TorusGeometry(1.85, 0.015, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const scanRing = new THREE.Mesh(ringGeo, ringMat);
    scanRing.rotation.x = Math.PI / 2;
    brainGroup.add(scanRing);

    // 6. Interactive Mouse Tracking
    let targetRotationX = 0.2;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      targetRotationY = x * 0.75;
      targetRotationX = 0.2 - y * 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 7. Responsive Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // 8. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth idle rotation + mouse lerp
      brainGroup.rotation.y += (targetRotationY + elapsedTime * 0.12 - brainGroup.rotation.y) * 0.05;
      brainGroup.rotation.x += (targetRotationX - brainGroup.rotation.x) * 0.05;

      // Pulse ring vertical oscillation (mimicking EEG scanning band)
      scanRing.position.y = Math.sin(elapsedTime * 1.5) * 1.1;
      scanRing.scale.setScalar(1 + Math.sin(elapsedTime * 3.0) * 0.05);

      // Subtle breathing motion for particles
      const posAttr = brainGeometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i += 6) {
        const base = basePositions[i];
        const pulse = 1.0 + Math.sin(elapsedTime * 2.5 + base.z * 2.0) * 0.035;
        posAttr.setXYZ(i, base.x * pulse, base.y * pulse, base.z * pulse);
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      brainGeometry.dispose();
      brainMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      ringGeo.dispose();
      ringMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] cursor-grab active:cursor-grabbing flex items-center justify-center pointer-events-auto"
      aria-label="Interactive 3D Neural Cortex Interface"
    />
  );
}
