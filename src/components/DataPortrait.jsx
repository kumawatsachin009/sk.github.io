import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { IconCpu, IconServer, IconActivity, IconAward, IconDatabase, IconZap } from './Icons';

// Sachin Kumawat's Real Engineering Stack & Measurable Impact Nodes
const SKILL_NODES = [
  // Measurable Production Scale
  { id: 'queries', label: '10K+ Queries/mo', category: 'impact', size: 1.5, desc: 'Processed monthly queries on event-driven microservices platform with 99.9% uptime', metric: '99.9% Uptime' },
  { id: 'latency', label: 'Sub-200ms P95', category: 'impact', size: 1.5, desc: 'Engineered high-performance RESTful APIs monitored continuously via Datadog & Grafana', metric: 'P95 < 200ms' },
  { id: 'automation', label: '16K+ Ops/mo Automated', category: 'impact', size: 1.4, desc: 'Automated user verification & profile workflows, reducing operational costs by 40%', metric: '40% Cost Drop' },
  { id: 'velocity', label: '60% Deployment Velocity', category: 'impact', size: 1.3, desc: 'Accelerated team release cycles through CI/CD governance and cross-functional leadership', metric: '+60% Speed' },
  { id: 'throughput', label: '3x Throughput Boost', category: 'impact', size: 1.3, desc: 'Optimized caching & connection pooling to scale concurrent capacity under peak load', metric: '3x Throughput' },

  // Languages & Core Backend
  { id: 'nodejs', label: 'Node.js', category: 'backend', size: 1.4, desc: 'Customer support platforms, automation services, and MCP tool-calling workflows', metric: 'Core Backend' },
  { id: 'rails', label: 'Ruby on Rails', category: 'backend', size: 1.3, desc: 'Core platform logic, high-throughput APIs, and data normalization engines', metric: 'Production' },
  { id: 'go', label: 'Go (Golang)', category: 'backend', size: 1.3, desc: 'Concurrent microservices, high-efficiency RPC services, and background workers', metric: 'High-Throughput' },
  { id: 'python', label: 'Python', category: 'backend', size: 1.2, desc: 'Production NLP pipelines (92% F1), distributed data extraction, and document processing', metric: '92% F1 NER' },
  { id: 'mcp', label: 'Model Context Protocol', category: 'backend', size: 1.2, desc: 'Standardized tool-calling infrastructure supporting 10+ automated business workflows', metric: '10+ Flows' },

  // Distributed Systems & Messaging
  { id: 'kafka', label: 'Apache Kafka', category: 'distributed', size: 1.4, desc: 'Distributed event streaming for asynchronous decoupled service architecture', metric: 'Event Bus' },
  { id: 'redis', label: 'Redis Cache & Locks', category: 'distributed', size: 1.4, desc: 'Multi-tier distributed caching, session locking, and sub-5ms lookup speeds', metric: '<5ms Lookup' },
  { id: 'aws', label: 'AWS Infrastructure', category: 'distributed', size: 1.2, desc: 'Cloud deployment across EC2, Lambda, Amazon SQS, and S3 object storage', metric: 'AWS Cloud' },

  // Databases & Optimization
  { id: 'postgres', label: 'PostgreSQL', category: 'data', size: 1.3, desc: 'Relational schema design, ACID transactions, complex triggers, and query indexing', metric: 'Primary DB' },
  { id: 'elasticsearch', label: 'Elasticsearch', category: 'data', size: 1.2, desc: 'Optimized entity search queries, cutting search response latency by 50%', metric: '-50% Latency' },
  { id: 'mongodb', label: 'MongoDB', category: 'data', size: 1.1, desc: 'Document metadata storage and flexible schema management', metric: 'NoSQL' },

  // Education & Honors
  { id: 'iit_ropar', label: 'IIT Ropar (B.Tech)', category: 'honors', size: 1.4, desc: 'Bachelor of Technology from premier Indian Institute of Technology (2018–2022)', metric: 'B.Tech CS' },
  { id: 'whale_award', label: 'Whale of the Quarter', category: 'honors', size: 1.4, desc: 'Recognized for exceptional engineering contributions and technical leadership (Q2 2024)', metric: 'CoinDCX Award' },
];

const CATEGORIES = [
  { id: 'all', label: 'All Developer DNA', color: '#818cf8' },
  { id: 'impact', label: 'Production Scale & Numbers', color: '#10b981' },
  { id: 'backend', label: 'Languages & Frameworks', color: '#38bdf8' },
  { id: 'distributed', label: 'Event-Driven & Cloud', color: '#6366f1' },
  { id: 'data', label: 'Databases & Storage', color: '#06b6d4' },
  { id: 'honors', label: 'Education & Honors', color: '#f59e0b' },
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
    const height = container.clientHeight || 440;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const nodeMeshes = [];
    const numNodes = SKILL_NODES.length;

    SKILL_NODES.forEach((node, idx) => {
      const phi = Math.acos(-1 + (2 * idx) / numNodes);
      const theta = Math.sqrt(numNodes * Math.PI) * phi;
      const radius = 1.45;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      const colorMap = {
        impact: 0x10b981,
        backend: 0x38bdf8,
        distributed: 0x6366f1,
        data: 0x06b6d4,
        honors: 0xf59e0b,
      };

      const baseColor = colorMap[node.category] || 0x818cf8;

      const geo = new THREE.SphereGeometry(0.065 * node.size, 16, 16);
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

    // Connection Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.22,
    });

    const lineGeo = new THREE.BufferGeometry();
    const linePositions = [];

    for (let i = 0; i < nodeMeshes.length; i++) {
      for (let j = i + 1; j < nodeMeshes.length; j++) {
        const p1 = nodeMeshes[i].position;
        const p2 = nodeMeshes[j].position;
        const dist = p1.distanceTo(p2);

        if (dist < 1.35 || nodeMeshes[i].userData.category === nodeMeshes[j].userData.category) {
          linePositions.push(p1.x, p1.y, p1.z);
          linePositions.push(p2.x, p2.y, p2.z);
        }
      }
    }

    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeo, lineMaterial);
    group.add(lines);

    // Mouse Interactions
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let targetRotX = 0;
    let targetRotY = 0;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotY = mouse.x * 0.45;
      targetRotX = -mouse.y * 0.45;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);

      if (intersects.length > 0) {
        setHoveredNode(intersects[0].object.userData);
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
      const h = container.clientHeight || 440;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      group.rotation.y = elapsedTime * 0.12 + targetRotY;
      group.rotation.x = Math.sin(elapsedTime * 0.08) * 0.08 + targetRotX;

      const currentCat = activeCategoryRef.current;
      nodeMeshes.forEach((mesh) => {
        const isMatch = currentCat === 'all' || mesh.userData.category === currentCat;
        mesh.material.opacity = isMatch ? 0.95 : 0.2;
        mesh.scale.setScalar(isMatch ? 1 : 0.65);
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
            An interactive 3D map of verified developer competencies, production metrics, and tech stack. Click or hover any node to inspect.
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
              ✦ Move cursor to rotate constellation · Click nodes to inspect
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

            {/* Numbers & Verification Box */}
            <div style={{ padding: '1rem', background: 'rgba(0, 0, 0, 0.25)', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                Production Scale & Impact
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-emerald)' }}>✓</span>
                  <span>10,000+ monthly processed queries with 99.9% uptime</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-cyan)' }}>✓</span>
                  <span>Sub-200ms P95 latency with Datadog & Grafana APM</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-primary)' }}>✓</span>
                  <span>16,000+ operations/mo automated (40% cost reduction)</span>
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
