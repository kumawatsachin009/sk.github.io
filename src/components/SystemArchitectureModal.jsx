import React, { useState } from 'react';
import { IconX, IconServer, IconActivity, IconShield, IconGitBranch, IconZap, IconDatabase } from './Icons';

const SystemArchitectureModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('payout-engine');

  if (!isOpen) return null;

  const tabs = [
    { id: 'payout-engine', label: 'Distributed Payout Engine', icon: IconServer },
    { id: 'fsm-lifecycle', label: 'Deterministic FSM & Idempotency', icon: IconGitBranch },
    { id: 'health-failover', label: 'Circuit Breaker & Bank Health', icon: IconActivity },
    { id: 'vba-attribution', label: '3-Tier VBA Attribution Engine', icon: IconShield },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: 'rgba(5, 8, 15, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '960px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-accent)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(99, 102, 241, 0.2)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.5rem 2rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
              <span className="section-tag" style={{ margin: 0, padding: '0.2rem 0.6rem', fontSize: '0.72rem' }}>
                System Architecture Deep-Dive
              </span>
              <span className="badge badge-emerald">Production Grade</span>
            </div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700 }}>
              High-Throughput Financial Systems Blueprint
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              borderRadius: '8px',
              padding: '0.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconX size={20} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '0.5rem 1.5rem',
            gap: '0.5rem',
            background: 'rgba(8, 12, 20, 0.5)',
          }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  border: isActive ? '1px solid var(--border-accent)' : '1px solid transparent',
                  background: isActive ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                  color: isActive ? '#a5b4fc' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div style={{ padding: '2rem', overflowY: 'auto', flex: 1 }}>
          {activeTab === 'payout-engine' && (
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Distributed Payout Gateway & Banking Orchestration
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Consolidated legacy payout runtimes across 4 microservices into a single event-driven architecture that manages multi-bank routing, wallet locking/unlocking, and end-to-end reconciliation.
              </p>

              {/* Architecture Diagram Visualization */}
              <div
                style={{
                  background: 'rgba(10, 15, 26, 0.9)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', textAlign: 'center' }}>
                  <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid var(--border-accent)', padding: '1rem', borderRadius: '8px' }}>
                    <div className="mono" style={{ fontSize: '0.75rem', color: '#a5b4fc', marginBottom: '0.25rem' }}>INGRESS & API</div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Access Gateway</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Eligibility & Rate Limits</div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
                    ➔
                  </div>

                  <div style={{ background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)', padding: '1rem', borderRadius: '8px' }}>
                    <div className="mono" style={{ fontSize: '0.75rem', color: '#67e8f9', marginBottom: '0.25rem' }}>ORCHESTRATION & FSM</div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Core Engine</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>FSM, CAS & Ledger Lock</div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                    ➔
                  </div>

                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--border-emerald)', padding: '1rem', borderRadius: '8px' }}>
                    <div className="mono" style={{ fontSize: '0.75rem', color: '#6ee7b7', marginBottom: '0.25rem' }}>BANKING LAYER</div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Connector Mesh</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>AU · PNB · Equitas · InstantPay</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                  <h4 style={{ fontSize: '0.92rem', color: '#a5b4fc', marginBottom: '0.4rem' }}>Zero Double-Spend Invariants</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Enforced strict poll-only states for in-flight transactions (`attempted`), preventing duplicate payouts during webhook drops or gateway timeouts.
                  </p>
                </div>
                <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                  <h4 style={{ fontSize: '0.92rem', color: '#67e8f9', marginBottom: '0.4rem' }}>Transactional Outbox Pattern</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Synchronized relational database state changes with distributed Apache Kafka events to guarantee zero orphaned balance locks.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fsm-lifecycle' && (
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                17-State Deterministic FSM & CAS Concurrency
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Eliminated concurrency races between async banking webhooks, active polling crons, and manual admin operations using Compare-And-Swap (CAS) state transitions.
              </p>

              <div style={{ background: 'rgba(10, 15, 26, 0.9)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.5rem' }}>
                <div className="mono" style={{ fontSize: '0.82rem', color: '#a5b4fc', lineHeight: 1.8 }}>
                  [INITIATED] ➔ [VALIDATED] ➔ [WALLET_LOCKED] ➔ [ROUTED] ➔ [ATTEMPTED (Poll Only)]<br />
                  &nbsp;&nbsp;↳ Success Webhook / Poll Match ➔ [COMPLETED] ➔ Kafka Event: Terminal Wallet Debit<br />
                  &nbsp;&nbsp;↳ Hard Bank Failure ➔ [FAILED] ➔ Kafka Event: Terminal Wallet Unlock & Revert<br />
                  &nbsp;&nbsp;↳ Degraded Gateway ➔ [AUTO_RETRY / RE_BANK] ➔ Reschedule Next Available Rail
                </div>
              </div>

              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li><strong>Strict Concurrency Isolation:</strong> Optimistic locking with version counters prevents concurrent worker updates.</li>
                <li><strong>Zero Manual DB Surgeries:</strong> Self-healing retry loops and idempotent reconcilers eliminate manual interventions.</li>
                <li><strong>Proto Contract Freezes:</strong> All API boundaries strictly governed via gRPC Protocol Buffers with backwards-compatibility validation.</li>
              </ul>
            </div>
          )}

          {activeTab === 'health-failover' && (
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                Automated Bank Health Breaker & Dynamic Routing
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Replaced static bank selection with real-time reactive health telemetry, automated circuit breakers, and load redistribution.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                <div className="glass-card" style={{ padding: '1.25rem' }}>
                  <div className="mono gradient-text-accent" style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                    Failure Threshold Breaker
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Monitors rolling 5-minute terminal error rates. If error percentage exceeds threshold, the bank rail trips to CLOSED state.
                  </p>
                </div>
                <div className="glass-card" style={{ padding: '1.25rem' }}>
                  <div className="mono gradient-text-emerald" style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                    Zero-Impact Traffic Rerouting
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Payout volume dynamically redistributes to healthy tier-1 partners (AU, PNB, Equitas, InstantPay) without dropping requests.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vba-attribution' && (
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                3-Tier VBA Deposit Normalization & Attribution Engine
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Resolved critical Virtual Bank Account (VBA) deposit misattribution defects and eliminated erroneous auto-refunds across AU & Indian Bank networks.
              </p>

              <div style={{ background: 'rgba(10, 15, 26, 0.9)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span className="badge badge-accent mono">Tier 1</span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>Strict Anchor: VBA Owner Identity Anchor (Anchors callback strictly to destination VBA account owner).</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span className="badge badge-cyan mono">Tier 2</span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>Active Account Filter: Excludes soft-deleted bank accounts to prevent cross-user account number collisions.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span className="badge badge-emerald mono">Tier 3</span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>Bidirectional Normalization: Exact match ➔ Leading-zero strip ➔ Non-digit normalization.</span>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '8px', border: '1px solid var(--border-emerald)' }}>
                <p style={{ fontSize: '0.85rem', color: '#6ee7b7' }}>
                  <strong>Impact:</strong> Achieved 100% correct deposit attribution and eliminated high-risk production refund regressions with real-time Datadog telemetry verification.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SystemArchitectureModal;
