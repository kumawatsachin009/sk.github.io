import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { IconCpu, IconServer, IconActivity, IconAward, IconDatabase, IconZap, IconCheckCircle } from './Icons';

// Sachin Kumawat's Engineering Knowledge & Skills Topology Nodes
const SKILL_NODES = [
  // Distributed Systems
  { id: 'fsm', label: '17-State FSM', category: 'distributed', size: 1.4, desc: 'Deterministic state machine with CAS concurrency & zero double-debit', metric: '17 Transitions' },
  { id: 'kafka', label: 'Apache Kafka', category: 'distributed', size: 1.3, desc: 'Event-driven streaming for terminal wallet debits & async workflows', metric: '10K+ msg/mo' },
  { id: 'circuit_breaker', label: 'Circuit Breaker', category: 'distributed', size: 1.2, desc: 'Automated partner rail health breach detection & dynamic failover', metric: '99.9% Uptime' },
  { id: 'grpc', label: 'gRPC & Protobuf', category: 'distributed', size: 1.1, desc: 'Strict API contract freezes & cross-service RPC communication', metric: 'Sub-ms RPC' },
  { id: 'idempotency', label: 'Idempotency & Outbox', category: 'distributed', size: 1.2, desc: 'Transactional outbox pattern guaranteeing zero orphaned locks', metric: 'Zero Loss' },

  // Backend & Languages
  { id: 'go', label: 'Go (Golang)', category: 'backend', size: 1.4, desc: 'High-throughput microservices and concurrent payout pipelines', metric: 'Core Stack' },
  { id: 'rails', label: 'Ruby on Rails', category: 'backend', size: 1.3, desc: 'Core business engines, API gateways, and account normalization', metric: 'Production' },
  { id: 'nodejs', label: 'Node.js', category: 'backend', size: 1.2, desc: 'Support platforms, profile APIs, and MCP automation tooling', metric: 'Microservices' },
  { id: 'python', label: 'Python', category: 'backend', size: 1.1, desc: 'NLP pipelines (spaCy/NLTK) & automated document parsing', metric: '92% F1' },
  { id: 'mcp', label: 'Model Context Protocol', category: 'backend', size: 1.2, desc: 'Agentic AI tool-calling infrastructure for on-ramp & off-ramp flows', metric: '10+ Flows' },

  // Data & Caching
  { id: 'postgres', label: 'PostgreSQL', category: 'data', size: 1.3, desc: 'Relational data modeling, ACID transactions, and query optimization', metric: 'Primary DB' },
  { id: 'redis', label: 'Redis', category: 'data', size: 1.4, desc: 'Distributed caching, session locking, and real-time health states', metric: '<5ms Cache' },
  { id: 'elasticsearch', label: 'Elasticsearch', category: 'data', size: 1.1, desc: 'Optimized search queries for high-volume entity indexing', metric: '-50% Latency' },

  // Production Scale & Impact
  { id: 'scale_p95', label: 'Sub-200ms P95', category: 'impact', size: 1.5, desc: 'Consistently optimized API latency with Datadog & Grafana telemetry', metric: 'P95 < 200ms' },
  { id: 'scale_ops', label: '16K+ Ops/mo Automated', category: 'impact', size: 1.4, desc: 'Streamlined profile verification workflows reducing operational cost by 40%', metric: '40% Savings' },
  { id: 'scale_queries', label: '10K+ Monthly Queries', category: 'impact', size: 1.3, desc: 'High-availability customer support & payment platform processing scale', metric: '99.9% SLA' },

  // Academic & Honors
  { id: 'iit_ropar', label: 'IIT Ropar (B.Tech)', category: 'honors', size: 1.3, desc: 'Computer Science coursework & strong engineering foundations', metric: '2018–2022' },
  { id: 'whale_award', label: 'Whale of the Quarter', category: 'honors', size: 1.4, desc: 'CoinDCX top engineering & leadership recognition', metric: 'Q2 2024' },
];

const CATEGORIES = [
  { id: 'all', label: 'Full Engineering DNA', color: '#818cf8' },
  { id: 'distributed', label: 'Distributed Systems', color: '#6366f1' },
  { id: 'backend', label: 'Backend & Languages', color: '#38bdf8' },
  { id: 'data', label: 'Databases & Caching', color: '#06b6d4' },
  { id: 'impact', label: 'Production Scale & Impact', color: '#10b981' },
  { id: 'honors', label: 'Honors & Education', color: '#f59e0b' },
];

const DataPortrait = () => {
  const mountRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedNode, setSelectedNode] = useState(SKILL_NODES[0]);
  const [hoveredNode, setHoveredNode] = useState(null);

  const activeCategoryRef = useRef(activeCategory);
  useEffect(() => {
    activeCategoryRef.current = activeCategory;
  }, [activeCategory]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 460;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for nodes and connection lines
    const group = new THREE.Group();
    scene.add(group);

    // Create 3D Nodes based on SKILL_NODES
    const nodeMeshes = [];
    const numNodes = SKILL_NODES.length;

    SKILL_NODES.forEach((node, idx) => {
      // Golden spiral distribution on sphere
      const phi = Math.acos(-1 + (2 * idx) / numNodes);
      const theta = Math.sqrt(numNodes * Math.PI) * phi;
      const radius = 1.45;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      const colorMap = {
        distributed: 0x6366f1,
        backend: 0x38bdf8,
        data: 0x06b6d4,
        impact: 0x10b981,
        honors: 0xf59e0b,
      };

      const baseColor = colorMap[node.category] || 0x818cf8;

      const geo = new THREE.SphereGeometry(0.06 * node.size, 16, 16);
      const mat = new THREE.MeshBasicMaterial({
        color: baseColor,
        transparent: true,
        opacity: 0.9,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.userData = { ...node, originalColor: baseColor };

      group.add(mesh);
      nodeMeshes.push(mesh);
    });

    // Create dynamic interconnection lines between related nodes
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.25,
    });

    const lineGeo = new THREE.BufferGeometry();
    const linePositions = [];

    for (let i = 0; i < nodeMeshes.length; i++) {
      for (let j = i + 1; j < nodeMeshes.length; j++) {
        const p1 = nodeMeshes[i].position;
        const p2 = nodeMeshes[j].position;
        const dist = p1.distanceTo(p2);

        // Connect if close or in same category
        if (dist < 1.3 || nodeMeshes[i].userData.category === nodeMeshes[j].userData.category) {
          linePositions.push(p1.x, p1.y, p1.z);
          linePositions.push(p2.x, p2.y, p2.z);
        }
      }
    }

    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeo, lineMaterial);
    group.add(lines);

    // Mouse Raycasting & Interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let targetRotX = 0;
    let targetRotY = 0;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotY = mouse.x * 0.5;
      targetRotX = -mouse.y * 0.5;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);

      if (intersects.length > 0) {
        const hit = intersects[0].object.userData;
        setHoveredNode(hit);
        container.style.cursor = 'pointer';
      } else {
        setHoveredNode(null);
        container.style.cursor = 'grab';
      }
    };

    const handleClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);
      if (intersects.length > 0) {
        setSelectedNode(intersects[0].object.userData);
      }
    };

    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('click', handleClick);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 460;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth auto-rotation with mouse influence
      group.rotation.y = elapsedTime * 0.12 + targetRotY;
      group.rotation.x = Math.sin(elapsedTime * 0.08) * 0.1 + targetRotX;

      // Update node opacities based on active category
      const currentCat = activeCategoryRef.current;
      nodeMeshes.forEach((mesh) => {
        const isMatch = currentCat === 'all' || mesh.userData.category === currentCat;
        mesh.material.opacity = isMatch ? 0.95 : 0.2;
        mesh.scale.setScalar(isMatch ? 1 : 0.6);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  const displayNode = hoveredNode || selectedNode;

  return (
    <section id="portrait" className="section" style={{ padding: '4.5rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-tag">
            <IconZap size={14} />
            Engineering Topology
          </span>
          <h2 className="section-title">
            Interactive <span className="gradient-text-accent">Skills & Impact Constellation</span>
          </h2>
          <p className="section-subtitle">
            An interactive 3D map of my core engineering competencies, production scale milestones, and backend architectures. Click or hover any node to inspect details.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: activeCategory === cat.id ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
                background: activeCategory === cat.id ? 'var(--accent-primary-soft)' : 'rgba(255, 255, 255, 0.02)',
                color: activeCategory === cat.id ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div
          className="glass-card"
          style={{
            padding: '1.75rem',
            border: '1px solid var(--border-subtle)',
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 1.2fr) minmax(320px, 1fr)',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="constellation-grid"
        >
          {/* 3D Interactive Constellation Canvas */}
          <div style={{ position: 'relative' }}>
            <div
              ref={mountRef}
              style={{
                width: '100%',
                height: '420px',
                position: 'relative',
              }}
            />
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
              ✦ Drag or move cursor to rotate constellation · Click nodes to inspect
            </div>
          </div>

          {/* Node Inspector Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="badge badge-accent mono" style={{ textTransform: 'uppercase', fontSize: '0.75rem' }}>
                {displayNode.category}
              </span>
              <span className="badge badge-emerald mono" style={{ fontSize: '0.78rem' }}>
                {displayNode.metric}
              </span>
            </div>

            <div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                {displayNode.label}
              </h3>
              <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {displayNode.desc}
              </p>
            </div>

            {/* Quick Milestones Checklist */}
            <div style={{ padding: '1rem', background: 'rgba(0, 0, 0, 0.25)', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                Verified Production Context
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-emerald)' }}>✓</span>
                  <span>Integrated in High-Throughput Microservices</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-cyan)' }}>✓</span>
                  <span>Sub-200ms P95 & High Availability SLA</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-primary)' }}>✓</span>
                  <span>CoinDCX & IntelleWings Production Verified</span>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div>
              <a href="#experience" className="btn btn-secondary" style={{ width: '100%', fontSize: '0.85rem' }}>
                View in Experience Timeline →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .constellation-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DataPortrait;
