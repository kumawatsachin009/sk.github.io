import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { IconCpu, IconActivity, IconZap, IconLayers } from './Icons';

const DataPortrait = () => {
  const mountRef = useRef(null);
  const [computeMode, setComputeMode] = useState('harmonic'); // 'harmonic' | 'vector' | 'attractor'
  const [turbulence, setTurbulence] = useState(0.5);
  const [resonance, setResonance] = useState(0.4);
  const [stats, setStats] = useState({ computeTime: '0.28ms', fps: 60, particleCount: 3600 });

  // Refs for animation loop access without re-creating scene
  const paramsRef = useRef({ computeMode: 'harmonic', turbulence: 0.5, resonance: 0.4 });

  useEffect(() => {
    paramsRef.current = { computeMode, turbulence, resonance };
  }, [computeMode, turbulence, resonance]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 450;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Geometry & Simulation Setup
    const COUNT = 3600;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const basePositions = new Float32Array(COUNT * 3);

    // Generate base mathematical distribution
    for (let i = 0; i < COUNT; i++) {
      const u = Math.random() * Math.PI * 2;
      const v = (Math.random() - 0.5) * Math.PI;

      // Base sphere distribution
      const r = 1.4 + (Math.random() - 0.5) * 0.3;
      const x = r * Math.cos(v) * Math.cos(u);
      const y = r * Math.cos(v) * Math.sin(u);
      const z = r * Math.sin(v);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = y;
      basePositions[i * 3 + 2] = z;

      // Soothing gradient colors: soft indigo to sky cyan
      const ratio = i / COUNT;
      colors[i * 3] = 0.38 + 0.25 * Math.sin(ratio * Math.PI * 2); // R
      colors[i * 3 + 1] = 0.55 + 0.35 * Math.cos(ratio * Math.PI); // G
      colors[i * 3 + 2] = 0.95; // B (cyan/indigo dominant)
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture / soft point material
    const material = new THREE.PointsMaterial({
      size: 0.042,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 450;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation & Math Compute Loop
    let animationFrameId;
    let clock = new THREE.Clock();
    let frameCount = 0;
    let lastStatsUpdate = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const startTime = performance.now();
      const elapsedTime = clock.getElapsedTime();
      const { computeMode: mode, turbulence: turb, resonance: res } = paramsRef.current;

      const pos = geometry.attributes.position.array;

      // In-browser mathematical vector transformation
      for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3;
        const bx = basePositions[i3];
        const by = basePositions[i3 + 1];
        const bz = basePositions[i3 + 2];

        if (mode === 'harmonic') {
          // Harmonic Torus & Spherical Harmonics
          const freq = 2.5 * res + 1.0;
          const wave = Math.sin(elapsedTime * 1.5 + bx * freq) * Math.cos(elapsedTime * 1.2 + by * freq);
          const warp = 1 + wave * (0.25 * turb);

          pos[i3] = bx * warp + Math.sin(elapsedTime * 0.8 + bz) * (0.15 * turb);
          pos[i3 + 1] = by * warp + Math.cos(elapsedTime * 0.9 + bx) * (0.15 * turb);
          pos[i3 + 2] = bz * warp;
        } else if (mode === 'vector') {
          // Vector Field & Flow Curl Deformation
          const theta = elapsedTime * 0.6 + Math.sqrt(bx * bx + by * by) * (3.0 * res);
          const curlX = Math.sin(theta) * (0.35 * turb);
          const curlY = Math.cos(theta) * (0.35 * turb);

          pos[i3] = bx + curlX;
          pos[i3 + 1] = by + curlY;
          pos[i3 + 2] = bz + Math.sin(elapsedTime + bx) * (0.2 * turb);
        } else if (mode === 'attractor') {
          // Parametric Lorenz/Clifford Attractor Field
          const a = 1.6 + res;
          const b = -0.6 * turb;
          const c = 1.5;
          const d = 0.7;

          const nx = Math.sin(a * by) + c * Math.cos(a * bx);
          const ny = Math.sin(b * bx) + d * Math.cos(b * by);

          pos[i3] = bx * 0.6 + nx * 0.45;
          pos[i3 + 1] = by * 0.6 + ny * 0.45;
          pos[i3 + 2] = bz * 0.8 + Math.cos(elapsedTime * 1.2 + i) * (0.15 * turb);
        }
      }

      geometry.attributes.position.needsUpdate = true;

      // Smooth camera interpolation towards mouse
      targetRotationY += (mouseX * 0.6 - targetRotationY) * 0.05;
      targetRotationX += (mouseY * 0.6 - targetRotationX) * 0.05;

      particleSystem.rotation.y = elapsedTime * 0.15 + targetRotationY;
      particleSystem.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1 + targetRotationX;

      renderer.render(scene, camera);

      const endTime = performance.now();
      const computeDuration = (endTime - startTime).toFixed(2);

      frameCount++;
      if (endTime - lastStatsUpdate > 600) {
        setStats({
          computeTime: `${computeDuration}ms`,
          fps: Math.round((frameCount * 1000) / (endTime - lastStatsUpdate)),
          particleCount: COUNT,
        });
        frameCount = 0;
        lastStatsUpdate = endTime;
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section id="portrait" className="section" style={{ padding: '4.5rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-tag">
            <IconCpu size={14} />
            In-Browser Mathematical Simulation
          </span>
          <h2 className="section-title">
            Interactive <span className="gradient-text-accent">Data Portrait</span>
          </h2>
          <p className="section-subtitle">
            A real-time procedural vector field and harmonic particle topology calculated on-the-fly in your browser. Move your cursor to interact with the compute field.
          </p>
        </div>

        <div
          className="glass-card"
          style={{
            padding: '1.5rem',
            border: '1px solid var(--border-accent)',
            background: 'linear-gradient(135deg, rgba(14, 20, 34, 0.8) 0%, rgba(10, 14, 23, 0.9) 100%)',
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1fr) 2fr minmax(240px, 1fr)',
            gap: '1.5rem',
            alignItems: 'center',
          }}
          className="data-portrait-container"
        >
          {/* Left Telemetry HUD */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Live Compute Telemetry
            </div>

            <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Matrix Compute Latency</span>
                <span className="badge badge-emerald mono" style={{ fontSize: '0.72rem' }}>Sub-ms</span>
              </div>
              <div className="mono gradient-text-emerald" style={{ fontSize: '1.4rem', fontWeight: 700 }}>
                {stats.computeTime}
              </div>
            </div>

            <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Render Performance</span>
                <span className="badge badge-cyan mono" style={{ fontSize: '0.72rem' }}>WebGL</span>
              </div>
              <div className="mono" style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {stats.fps} <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>FPS</span>
              </div>
            </div>

            <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Active Vector Nodes</span>
                <span className="badge badge-accent mono" style={{ fontSize: '0.72rem' }}>Points</span>
              </div>
              <div className="mono" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#c7d2fe' }}>
                {stats.particleCount.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Center 3D Mathematical Canvas */}
          <div
            ref={mountRef}
            style={{
              width: '100%',
              height: '420px',
              position: 'relative',
              cursor: 'crosshair',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />

          {/* Right Interactive Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Mathematical Controls
            </div>

            {/* Topology Mode Buttons */}
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>
                Equation Topology
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  { id: 'harmonic', label: 'Harmonic Torus Knot' },
                  { id: 'vector', label: 'Vector Field Deformation' },
                  { id: 'attractor', label: 'Clifford / Attractor' },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setComputeMode(mode.id)}
                    style={{
                      padding: '0.5rem 0.8rem',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      textAlign: 'left',
                      cursor: 'pointer',
                      border: computeMode === mode.id ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
                      background: computeMode === mode.id ? 'var(--accent-primary-soft)' : 'rgba(255, 255, 255, 0.02)',
                      color: computeMode === mode.id ? '#ffffff' : 'var(--text-secondary)',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Turbulence Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                <span>Vector Turbulence</span>
                <span className="mono">{turbulence.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.05"
                value={turbulence}
                onChange={(e) => setTurbulence(parseFloat(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
              />
            </div>

            {/* Resonance Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                <span>Harmonic Frequency</span>
                <span className="mono">{resonance.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.05"
                value={resonance}
                onChange={(e) => setResonance(parseFloat(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-cyan)', cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .data-portrait-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DataPortrait;
