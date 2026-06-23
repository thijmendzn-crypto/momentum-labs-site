'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Calendly: { initPopupWidget: (opts: { url: string }) => void };
  }
}

function openCal() {
  if (typeof window !== 'undefined' && window.Calendly) {
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/businessecomthijmen/30min' });
  } else {
    window.open('https://calendly.com/businessecomthijmen/30min', '_blank');
  }
}

const pains = [
  'Traffic hits your site — nobody books a call',
  'Your homepage looks "fine" but explains nothing',
  'Competitors with worse services are winning more deals',
  'You\'re sending paid ads to a page that doesn\'t convert',
];

const gains = [
  { icon: '⚡', title: 'Live in 14 days', desc: 'Not months. A fully custom, conversion-ready site shipped fast.' },
  { icon: '🎯', title: 'Built to convert', desc: 'Every section is engineered to move your ICP from visitor to booked call.' },
  { icon: '📈', title: '3x average ROI', desc: 'Across 12+ B2B clients. The site pays for itself — fast.' },
  { icon: '🔒', title: 'Zero fluff', desc: 'No bloated Webflow templates. Clean code, real strategy, measurable results.' },
];

const results = [
  { company: 'NorthStar Consulting', result: '2 enterprise deals closed within 30 days of launch', initials: 'MR', name: 'Mark R.', role: 'CEO' },
  { company: 'Vertex Software', result: 'Demo request rate tripled after redesign', initials: 'SL', name: 'Sophie L.', role: 'Head of Growth' },
  { company: 'CoreEdge Logistics', result: 'From zero leads to trusted brand — in weeks', initials: 'DV', name: 'Dirk V.', role: 'Director' },
];

export default function LandingPage() {
  const calLoaded = useRef(false);

  useEffect(() => {
    if (calLoaded.current) return;
    calLoaded.current = true;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main style={{ background: '#080808', color: '#fff', fontFamily: "'Inter', sans-serif", minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Inter:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080808; }
        .lp-btn-main {
          display: inline-block;
          padding: 1.1rem 2.75rem;
          background: #AAFF00;
          color: #080808;
          font-weight: 700;
          font-size: 1rem;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          box-shadow: 0 0 40px rgba(170,255,0,0.4);
          transition: all 0.2s;
          letter-spacing: 0.01em;
          text-decoration: none;
          font-family: inherit;
        }
        .lp-btn-main:hover { opacity: 0.88; transform: translateY(-1px); box-shadow: 0 0 55px rgba(170,255,0,0.55); }
        .lp-btn-ghost {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: transparent;
          color: #AAFF00;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 10px;
          border: 1px solid rgba(170,255,0,0.35);
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .lp-btn-ghost:hover { background: rgba(170,255,0,0.08); border-color: rgba(170,255,0,0.6); }
        .dot-bg {
          background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .gain-card {
          background: #0f0f0f;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 1.75rem;
          transition: border-color 0.3s;
        }
        .gain-card:hover { border-color: rgba(170,255,0,0.3); }
        .testi-card {
          background: #0f0f0f;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 1.75rem;
        }
        @media (max-width: 640px) {
          .hero-h1 { font-size: 2.1rem !important; }
          .gains-grid { grid-template-columns: 1fr !important; }
          .testi-grid { grid-template-columns: 1fr !important; }
          .stats-row { gap: 2rem !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="dot-bg" style={{ position: 'relative', padding: '5rem 1.5rem 5rem', textAlign: 'center' }}>
        {/* green glow */}
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: 700, height: 420, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center top, rgba(170,255,0,0.13) 0%, transparent 68%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto' }}>
          {/* Logo */}
          <div style={{ marginBottom: '2.5rem' }}>
            <img src="/logo.png" alt="Momentum Labs" style={{ height: 30, width: 'auto' }} />
          </div>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', borderRadius: 99,
            border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)',
            fontSize: '0.68rem', color: '#888', letterSpacing: '0.2em', textTransform: 'uppercase',
            marginBottom: '1.75rem',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#AAFF00', display: 'inline-block' }} />
            Only 2 client spots open this month
          </div>

          {/* H1 */}
          <h1 className="hero-h1" style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 'clamp(2rem, 5.5vw, 3.4rem)',
            fontWeight: 900,
            lineHeight: 1.12,
            letterSpacing: '-0.01em',
            marginBottom: '1.5rem',
          }}>
            Your B2B website is costing you<br />
            <span style={{ color: '#AAFF00' }}>deals you don't even know about</span>
          </h1>

          <p style={{ color: '#888', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 540, margin: '0 auto 2.5rem' }}>
            We build conversion-focused websites for B2B companies that need their site to actually generate pipeline — not just look good.
          </p>

          {/* CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <button className="lp-btn-main" onClick={openCal}>
              Get My Free Website Audit →
            </button>
            <span style={{ color: '#444', fontSize: '0.78rem' }}>30 min call · No pitch · Zero obligation</span>
          </div>

          {/* Stats */}
          <div className="stats-row" style={{ display: 'flex', justifyContent: 'center', gap: '3.5rem', flexWrap: 'wrap', marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              { n: '12+', l: 'B2B Clients' },
              { n: '94%', l: 'Retention rate' },
              { n: '3x', l: 'Average ROI' },
              { n: '14d', l: 'Time to live' },
            ].map(s => (
              <div key={s.n} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '2rem', fontWeight: 900, color: '#AAFF00', marginBottom: 4 }}>{s.n}</div>
                <div style={{ color: '#555', fontSize: '0.78rem', letterSpacing: '0.05em' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: 680, margin: '0 auto' }}>
        <p style={{ color: '#AAFF00', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem', textAlign: 'center' }}>Sound familiar?</p>
        <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, textAlign: 'center', marginBottom: '2.5rem', lineHeight: 1.25 }}>
          Why your current site isn't working
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {pains.map(p => (
            <div key={p} style={{
              display: 'flex', alignItems: 'flex-start', gap: '1rem',
              background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 12, padding: '1.1rem 1.25rem',
            }}>
              <span style={{ color: '#ff4444', fontSize: '1.1rem', marginTop: 1 }}>✗</span>
              <span style={{ color: '#bbb', fontSize: '0.95rem', lineHeight: 1.6 }}>{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section style={{ padding: '2rem 1.5rem 5rem', maxWidth: 900, margin: '0 auto' }}>
        <p style={{ color: '#AAFF00', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem', textAlign: 'center' }}>The fix</p>
        <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, textAlign: 'center', marginBottom: '3rem', lineHeight: 1.25 }}>
          A website that works as hard as you do
        </h2>
        <div className="gains-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {gains.map(g => (
            <div key={g.title} className="gain-card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.875rem' }}>{g.icon}</div>
              <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{g.title}</h3>
              <p style={{ color: '#777', fontSize: '0.875rem', lineHeight: 1.7 }}>{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '2rem 1.5rem 5rem', maxWidth: 960, margin: '0 auto' }}>
        <p style={{ color: '#AAFF00', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1rem', textAlign: 'center' }}>Client results</p>
        <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, textAlign: 'center', marginBottom: '3rem', lineHeight: 1.25 }}>
          Real companies, real results
        </h2>
        <div className="testi-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          {results.map(r => (
            <div key={r.company} className="testi-card">
              <div style={{ color: '#AAFF00', fontSize: '1rem', marginBottom: '0.875rem', letterSpacing: 2 }}>★★★★★</div>
              <p style={{ color: '#ccc', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>"{r.result}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(170,255,0,0.15)', border: '1px solid rgba(170,255,0,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.7rem', fontWeight: 700, color: '#AAFF00', flexShrink: 0,
                }}>{r.initials}</div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fff' }}>{r.name}</div>
                  <div style={{ fontSize: '0.72rem', color: '#555' }}>{r.role} · {r.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: '2rem 1.5rem 6rem', textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
        <div style={{
          background: '#0f0f0f',
          border: '1px solid rgba(170,255,0,0.2)',
          borderRadius: 20,
          padding: '3.5rem 2rem',
          boxShadow: '0 0 60px rgba(170,255,0,0.06)',
        }}>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.2 }}>
            Ready to turn your site into a <span style={{ color: '#AAFF00' }}>lead machine?</span>
          </h2>
          <p style={{ color: '#777', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            Book a free 30-minute call. We'll audit your site live, show you exactly what's leaking leads, and give you a custom growth roadmap — no strings attached.
          </p>
          <button className="lp-btn-main" onClick={openCal} style={{ width: '100%', textAlign: 'center' }}>
            Book My Free Strategy Call →
          </button>
          <p style={{ color: '#333', fontSize: '0.72rem', marginTop: '1rem' }}>30 min · Completely free · Only 2 spots left</p>
        </div>
      </section>

      {/* Footer */}
      <div style={{ textAlign: 'center', paddingBottom: '2rem' }}>
        <img src="/logo.png" alt="Momentum Labs" style={{ height: 22, opacity: 0.4, marginBottom: '0.5rem' }} />
        <p style={{ color: '#333', fontSize: '0.7rem' }}>
          © 2025 Momentum Labs · <a href="/" style={{ color: '#444', textDecoration: 'none' }}>Back to main site</a>
        </p>
      </div>
    </main>
  );
}
