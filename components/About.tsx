'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '94%', label: 'Client Satisfaction' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });

  return (
    <section id="about" className="py-24 lg:py-32 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#AAFF00] text-xs font-semibold uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2
              className="text-3xl lg:text-5xl font-black text-white mb-6"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Built for Growth
            </h2>
            <p className="text-[#888888] leading-relaxed mb-6">
              Momentum Labs was built with one obsession: helping B2B businesses turn their website into their best sales asset. We don't do fluffy design. We engineer systems — methodical, tested, and built around one goal: more clients.
            </p>
            <p className="text-[#888888] leading-relaxed mb-8">
              Every site we build starts with strategy, not aesthetics. We study your market, your competitors, and your buyers — then we build something that converts.
            </p>

            <div
              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-white/8 bg-[#0A0A0A]"
            >
              <div
                className="w-10 h-10 rounded-full bg-[#AAFF00]/10 border border-[#AAFF00]/30 flex items-center justify-center text-[#AAFF00] font-bold text-sm"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                TJ
              </div>
              <div>
                <p className="text-white text-sm font-medium">Thijmen</p>
                <p className="text-[#888888] text-xs">Founder · Entrepreneur & Digital Growth Specialist</p>
              </div>
            </div>
          </motion.div>

          {/* Right stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="p-6 rounded-2xl border border-white/8 bg-[#0A0A0A] text-center"
              >
                <p
                  className="text-3xl font-black text-[#AAFF00] mb-2"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-[#888888] text-xs leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
