import React, { useState } from 'react';
import { IconX, IconServer, IconActivity, IconShield, IconGitBranch } from './Icons';

const SystemArchitectureModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('payout-engine');

  if (!isOpen) return null;

  const tabs = [
    { id: 'payout-engine', label: 'Distributed Payout Engine', icon: IconServer },
    { id: 'fsm-lifecycle', label: 'Deterministic FSM & Concurrency', icon: IconGitBranch },
    { id: 'health-failover', label: 'Circuit Breaker & Partner Health', icon: IconActivity },
    { id: 'deposit-attribution', label: '3-Tier Deposit Attribution', icon: IconShield },
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
        padding: '1.25rem',
        backgroundColor: 'rgba(8, 12, 20, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '920px',
          maxHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-accent)',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.6)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span className="section-tag" style={{ margin: 0, padding: '0.15rem 0.55rem', fontSize: '0.72rem' }}>
                Architecture Blueprint
              </span>
              <span className="badge badge-emerald">Production Grade</span>
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
              Distributed Financial Engine Architecture
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              borderRadius: '6px',
              padding: '0.45rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconX size={18} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '0.4rem 1.25rem',
            gap: '0.4rem',
            background: 'rgba(8, 12, 20, 0.4)',
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
                  gap: '0.45rem',
                  padding: '0.55rem 0.9rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  border: isActive ? '1px solid var(--border-accent)' : '1px solid transparent',
                  background: isActive ? 'var(--accent-primary-soft)' : 'transparent',
                  color: isActive ? '#c7d2fe' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div style={{ padding: '1.75rem', overflowY: 'auto', flex: 1 }}>
          {activeTab === 'payout-engine' && (
            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Distributed Payout Gateway & Banking Orchestration
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.92rem' }}>
                Consolidated disparate legacy payout services into a unified event-driven architecture managing multi-bank routing, wallet locking/unlocking, and end-to-end status reconciliation.
              </p>

              {/* Architecture Topology */}
              <div
                style={{
                  background: 'rgba(10, 14, 23, 0.8)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem', textAlign: 'center' }}>
                  <div style={{ background: 'rgba(99, 102, 241, 0.08)', border: '1px solid var(--border-accent)', padding: '0.85rem', borderRadius: '6px' }}>
                    <div className="mono" style={{ fontSize: '0.72rem', color: '#a5b4fc', marginBottom: '0.2rem' }}>LAYER 1</div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>API Gateway</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Eligibility & Rate Limits</div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', fontSize: '1.2rem' }}>
                    ➔
                  </div>

                  <div style={{ background: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.25)', padding: '0.85rem', borderRadius: '6px' }}>
                    <div className="mono" style={{ fontSize: '0.72rem', color: '#7dd3fc', marginBottom: '0.2rem' }}>LAYER 2</div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Orchestration Core</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>FSM, CAS & Ledger Lock</div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)', fontSize: '1.2rem' }}>
                    ➔
                  </div>

                  <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid var(--border-emerald)', padding: '0.85rem', borderRadius: '6px' }}>
                    <div className="mono" style={{ fontSize: '0.72rem', color: '#6ee7b7', marginBottom: '0.2rem' }}>LAYER 3</div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Banking Wire Layer</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Partner Cryptography & Wire</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.85rem' }}>
                <div style={{ padding: '0.9rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <h4 style={{ fontSize: '0.88rem', color: '#c7d2fe', marginBottom: '0.3rem' }}>Zero Double-Debit Invariant</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    Enforced strict poll-only states for in-flight transactions, preventing duplicate payouts during webhook drops or gateway retries.
                  </p>
                </div>
                <div style={{ padding: '0.9rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                  <h4 style={{ fontSize: '0.88rem', color: '#7dd3fc', marginBottom: '0.3rem' }}>Transactional Outbox Pattern</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    Synchronized database state changes with distributed Apache Kafka events to guarantee zero orphaned balance locks.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fsm-lifecycle' && (
            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                17-State Deterministic FSM & CAS Concurrency
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.92rem' }}>
                Eliminated concurrency races between async banking webhooks, active polling crons, and manual admin operations using Compare-And-Swap (CAS) state transitions.
              </p>

              <div style={{ background: 'rgba(10, 14, 23, 0.8)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1.25rem' }}>
                <div className="mono" style={{ fontSize: '0.8rem', color: '#c7d2fe', lineHeight: 1.7 }}>
                  [INITIATED] ➔ [VALIDATED] ➔ [WALLET_LOCKED] ➔ [ROUTED] ➔ [ATTEMPTED (Poll Only)]<br />
                  &nbsp;&nbsp;↳ Success Webhook / Poll Match ➔ [COMPLETED] ➔ Kafka Event: Terminal Wallet Debit<br />
                  &nbsp;&nbsp;↳ Hard Bank Failure ➔ [FAILED] ➔ Kafka Event: Terminal Wallet Unlock & Revert<br />
                  &nbsp;&nbsp;↳ Degraded Gateway ➔ [AUTO_RETRY] ➔ Reschedule Next Available Rail
                </div>
              </div>

              <ul style={{ paddingLeft: '1.1rem', color: 'var(--text-secondary)', fontSize: '0.86rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                <li><strong>Strict Concurrency Isolation:</strong> Optimistic locking with version counters prevents concurrent worker updates.</li>
                <li><strong>Self-Healing Reconcilers:</strong> Automated retry loops and idempotent reconcilers eliminate manual interventions.</li>
                <li><strong>Standardized API Contracts:</strong> All microservices boundaries governed via gRPC Protocol Buffers with backwards compatibility.</li>
              </ul>
            </div>
          )}

          {activeTab === 'health-failover' && (
            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Automated Partner Health & Circuit Breaker
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.92rem' }}>
                Replaced static partner selection with real-time reactive health telemetry, automated circuit breakers, and traffic redistribution.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.85rem' }}>
                <div className="glass-card" style={{ padding: '1.1rem' }}>
                  <div className="mono" style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    Threshold Breaker
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    Monitors rolling 5-minute terminal error rates. If error percentage exceeds threshold, the partner rail is isolated.
                  </p>
                </div>
                <div className="glass-card" style={{ padding: '1.1rem' }}>
                  <div className="mono gradient-text-emerald" style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                    Zero-Impact Failover
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    Payout volume dynamically redistributes to healthy banking partners without dropping user requests.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'deposit-attribution' && (
            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                3-Tier Deposit Attribution & Normalization Engine
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '0.92rem' }}>
                Resolved critical deposit misattribution defects and eliminated erroneous auto-refunds across virtual banking networks.
              </p>

              <div style={{ background: 'rgba(10, 14, 23, 0.8)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span className="badge badge-accent mono">Tier 1</span>
                    <span style={{ fontSize: '0.84rem', color: 'var(--text-primary)' }}>Strict Anchor: Destination account owner identity anchor.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span className="badge badge-cyan mono">Tier 2</span>
                    <span style={{ fontSize: '0.84rem', color: 'var(--text-primary)' }}>Active Account Filter: Excludes soft-deleted bank accounts to prevent collisions.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span className="badge badge-emerald mono">Tier 3</span>
                    <span style={{ fontSize: '0.84rem', color: 'var(--text-primary)' }}>Bidirectional Normalization: Exact match ➔ Leading-zero strip ➔ Non-digit sanitization.</span>
                  </div>
                </div>
              </div>

              <div style={{ padding: '0.85rem', background: 'var(--accent-emerald-soft)', borderRadius: '6px', border: '1px solid var(--border-emerald)' }}>
                <p style={{ fontSize: '0.82rem', color: '#6ee7b7' }}>
                  <strong>Impact:</strong> Achieved 100% correct deposit attribution and eliminated refund regressions with real-time telemetry verification.
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
