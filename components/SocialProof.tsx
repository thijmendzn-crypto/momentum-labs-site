'use client';

import { motion } from 'framer-motion';

const logos = [
  'Acme Corp',
  'NorthStar',
  'Vertex Co',
  'BuildFlow',
  'Solara Inc',
  'CoreEdge',
];

export default function SocialProof() {
  return (
    <section className="py-16 border-y border-white/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm text-[#888888] uppercase tracking-widest">
          Trusted by growing businesses
        </p>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ width: 'max-content' }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-36 h-10 shrink-0"
              >
                <span
                  className="text-base font-semibold tracking-widest"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: 'rgba(255,255,255,0.2)',
                    letterSpacing: '0.15em',
                  }}
                >
                  {logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
