import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services – Momentum Labs',
  description: 'B2B web design services that convert visitors into pipeline. Strategy, design, and development for serious B2B companies.',
};

const services = [
  {
    number: '01',
    title: 'Strategy & Positioning',
    description:
      'Before any pixel is placed, we map your ICP, study competitors, and define the exact message that makes enterprise buyers stop scrolling. Most agencies skip this. We don\'t.',
    bullets: ['ICP & buyer journey mapping', 'Competitive positioning audit', 'Messaging framework & copy direction'],
  },
  {
    number: '02',
    title: 'Conversion-Focused Design',
    description:
      'Every layout decision is driven by one question: will this move a qualified buyer closer to a call? We design for trust, clarity, and action — not awards.',
    bullets: ['Custom UI/UX design (Figma)', 'Mobile-first, pixel-perfect execution', 'CTA hierarchy & trust signal placement'],
  },
  {
    number: '03',
    title: 'Development & Launch',
    description:
      'Fast, clean code. No bloated page builders. Your site loads in under 2 seconds, scores 95+ on Lighthouse, and works on every device.',
    bullets: ['Next.js or static HTML/CSS build', 'Performance & Core Web Vitals optimised', 'Netlify / Vercel deployment'],
  },
  {
    number: '04',
    title: 'CRO & Iteration',
    description:
      'Launch is day one, not the finish line. We track heatmaps, form completions, and scroll depth — then iterate until your pipeline proves the numbers.',
    bullets: ['Heatmap & session recording setup', 'A/B testing on key pages', 'Monthly conversion report'],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        <div className="dot-pattern absolute inset-0 opacity-100" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(170,255,0,0.10) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/5 text-xs text-[#888888] tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#AAFF00] inline-block" />
            What We Do
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Everything you need to <span className="text-[#AAFF00]">win online</span>
          </h1>
          <p className="text-lg text-[#888888] max-w-xl mx-auto leading-relaxed">
            Four focused services. One goal: a website that generates qualified pipeline for your B2B company.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="px-6 pb-32 max-w-5xl mx-auto">
        <div className="flex flex-col gap-6">
          {services.map((s) => (
            <div
              key={s.number}
              className="group border border-white/8 rounded-2xl p-8 bg-[#0f0f0f] hover:border-[#AAFF00]/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div
                  className="text-5xl font-black text-[#AAFF00]/20 group-hover:text-[#AAFF00]/40 transition-colors shrink-0"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  {s.number}
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[#888888] leading-relaxed mb-5">{s.description}</p>
                  <ul className="flex flex-col gap-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-[#aaaaaa]">
                        <span className="text-[#AAFF00]">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-6 pb-32 max-w-3xl mx-auto text-center">
        <div className="border border-[#AAFF00]/20 rounded-2xl p-12 bg-[#0f0f0f]">
          <h2
            className="text-3xl font-black text-white mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Ready to start?
          </h2>
          <p className="text-[#888888] mb-8">
            We take on 2–3 new clients per month. Book a free 30-minute strategy call to see if we're a fit.
          </p>
          <a
            href="https://calendly.com/businessecomthijmen/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-[#0A0A0A] bg-[#AAFF00] font-semibold rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.97] text-sm tracking-wide"
            style={{ boxShadow: '0 0 20px rgba(170,255,0,0.4)' }}
          >
            Book a Free Strategy Call
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
