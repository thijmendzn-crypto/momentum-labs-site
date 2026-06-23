'use client';

import { useState } from 'react';

export default function LandingPage() {
  const [opened, setOpened] = useState(false);

  function openCal() {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/businessecomthijmen/30min',
      });
    } else {
      window.open('https://calendly.com/businessecomthijmen/30min', '_blank');
    }
    setOpened(true);
  }

  const bullets = [
    'A conversion audit of your current website (live on the call)',
    'The #1 reason B2B visitors leave without contacting you',
    'A custom roadmap to turn your site into a lead machine',
    'Pricing & timeline — completely transparent, zero fluff',
  ];

  const results = [
    { metric: '3x', label: 'Average ROI' },
    { metric: '94%', label: 'Client retention' },
    { metric: '14d', label: 'Average time to live' },
  ];

  return (
    <>
      {/* Calendly widget */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <script
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />

      <main
        className="min-h-screen text-white flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden"
        style={{ background: '#080808', fontFamily: "'Inter', sans-serif" }}
      >
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Background dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Green glow top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(170,255,0,0.12) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-2xl w-full mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <img src="/logo.png" alt="Momentum Labs" style={{ height: 32, width: 'auto' }} />
          </div>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full text-xs tracking-wider uppercase"
            style={{
              border: '1px solid rgba(255,255,255,0.10)',
              background: 'rgba(255,255,255,0.04)',
              color: '#888',
            }}
          >
            <span
              className="inline-block rounded-full"
              style={{ width: 6, height: 6, background: '#AAFF00' }}
            />
            Limited spots — only 2 available this month
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 'clamp(1.8rem, 5vw, 3rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              marginBottom: '1.25rem',
            }}
          >
            Your website should be your <span style={{ color: '#AAFF00' }}>best salesperson</span>
          </h1>

          <p style={{ color: '#888', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1.05rem' }}>
            We build conversion-focused websites for B2B companies. Get a free 30-minute call where we show you exactly what's costing you leads — and how to fix it.
          </p>

          {/* CTA button */}
          <button
            onClick={openCal}
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              background: '#AAFF00',
              color: '#080808',
              fontWeight: 700,
              fontSize: '1rem',
              borderRadius: 10,
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 30px rgba(170,255,0,0.45)',
              transition: 'opacity 0.2s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Book My Free Strategy Call →
          </button>
          <p style={{ color: '#444', fontSize: '0.75rem', marginTop: '0.75rem' }}>
            30 min · No obligation · 100% free
          </p>

          {/* Divider */}
          <div
            style={{
              margin: '3rem auto',
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 50%, transparent)',
            }}
          />

          {/* What you'll get */}
          <h2
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '1rem',
              fontWeight: 700,
              color: '#AAFF00',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            What you'll get on the call
          </h2>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 3rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              textAlign: 'left',
            }}
          >
            {bullets.map((b) => (
              <li
                key={b}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  color: '#bbb',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: '#AAFF00', fontWeight: 700, marginTop: 2 }}>✓</span>
                {b}
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '3rem',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            {results.map((r) => (
              <div key={r.metric} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: '#AAFF00',
                    marginBottom: 4,
                  }}
                >
                  {r.metric}
                </div>
                <div style={{ color: '#666', fontSize: '0.8rem', letterSpacing: '0.05em' }}>{r.label}</div>
              </div>
            ))}
          </div>

          {/* Second CTA */}
          <button
            onClick={openCal}
            style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              background: 'transparent',
              color: '#AAFF00',
              fontWeight: 600,
              fontSize: '0.9rem',
              borderRadius: 10,
              border: '1px solid rgba(170,255,0,0.35)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(170,255,0,0.08)';
              e.currentTarget.style.borderColor = 'rgba(170,255,0,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(170,255,0,0.35)';
            }}
          >
            Yes, I want more leads from my website →
          </button>

          {/* Footer note */}
          <p style={{ color: '#333', fontSize: '0.72rem', marginTop: '3rem' }}>
            Momentum Labs · B2B Web Design Agency ·{' '}
            <a href="/" style={{ color: '#555', textDecoration: 'none' }}>
              momentumlabs.com
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
