import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact – Momentum Labs',
  description: 'Book a free 30-minute strategy call with Momentum Labs. We help B2B companies turn their website into their best salesperson.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />

      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="dot-pattern absolute inset-0 opacity-100" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(170,255,0,0.10) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/5 text-xs text-[#888888] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AAFF00] inline-block" />
              Get in Touch
            </div>
            <h1
              className="text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-6"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Let&apos;s talk about your <span className="text-[#AAFF00]">growth</span>
            </h1>
            <p className="text-[#888888] leading-relaxed mb-10">
              Book a free 30-minute strategy call. We'll look at your current site, identify the biggest conversion gaps, and outline exactly what we'd do differently.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { label: 'Email', value: 'businessecomthijmen@gmail.com', href: 'mailto:businessecomthijmen@gmail.com' },
                { label: 'Strategy Call', value: 'calendly.com/businessecomthijmen', href: 'https://calendly.com/businessecomthijmen/30min' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="text-xs text-[#AAFF00] tracking-widest uppercase">{item.label}</span>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#AAFF00] transition-colors"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right — CTA card */}
          <div className="border border-white/10 rounded-2xl p-8 bg-[#0f0f0f]">
            <h2
              className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Free Strategy Call
            </h2>
            <p className="text-sm text-[#888888] mb-6 leading-relaxed">
              30 minutes. No pitch. Just honest feedback on your website and a clear picture of what a high-converting B2B site would look like for your business.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                'Website audit & conversion gap analysis',
                'Competitor positioning review',
                'Custom growth roadmap',
                'Zero obligation',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#aaaaaa]">
                  <span className="text-[#AAFF00] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://calendly.com/businessecomthijmen/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-8 py-4 text-[#0A0A0A] bg-[#AAFF00] font-semibold rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.97] text-sm tracking-wide"
              style={{ boxShadow: '0 0 20px rgba(170,255,0,0.4)' }}
            >
              Book Your Free Call
            </a>
            <p className="text-xs text-[#555] text-center mt-4">Only 2 spots available this month</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
