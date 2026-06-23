'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    name: 'NorthStar Consulting',
    industry: 'B2B Consulting',
    metric: '+47%',
    metricLabel: 'Conversion Rate',
    description:
      'Complete site overhaul focused on trust signals and lead capture. Doubled qualified monthly inquiries within 60 days of launch.',
    color: '#AAFF00',
  },
  {
    name: 'Vertex Software',
    industry: 'SaaS / Tech',
    metric: '3.2x',
    metricLabel: 'Demo Bookings',
    description:
      'Redesigned product landing page with clearer value prop and frictionless demo flow. Pipeline grew by over 300% in Q1.',
    color: '#AAFF00',
  },
  {
    name: 'CoreEdge Logistics',
    industry: 'Logistics & Supply Chain',
    metric: '-62%',
    metricLabel: 'Bounce Rate',
    description:
      'Rebuilt brand identity and web presence from scratch. Retained 3 enterprise clients who previously disengaged at the awareness stage.',
    color: '#AAFF00',
  },
];

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="results" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#AAFF00] text-xs font-semibold uppercase tracking-widest mb-3">
            Case Studies
          </p>
          <h2
            className="text-3xl lg:text-5xl font-black text-white"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Results That Speak
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="group relative rounded-2xl border border-white/8 bg-[#111111] overflow-hidden cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                transition: 'border-color 0.2s ease',
                borderColor: hovered === i ? 'rgba(170,255,0,0.4)' : 'rgba(255,255,255,0.08)',
              }}
            >
              {/* Screenshot placeholder */}
              <div className="relative h-48 bg-[#0A0A0A] overflow-hidden">
                <div
                  className="absolute inset-0 dot-pattern opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-4xl font-black"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      color: 'rgba(170,255,0,0.15)',
                    }}
                  >
                    {cs.name.split(' ')[0].toUpperCase()}
                  </span>
                </div>

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-[#0A0A0A]/90 flex items-center justify-center p-6"
                >
                  <p className="text-[#888888] text-sm text-center leading-relaxed">
                    {cs.description}
                  </p>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">{cs.name}</h3>
                    <p className="text-[#888888] text-xs uppercase tracking-wider">{cs.industry}</p>
                  </div>
                  <ArrowUpRight size={16} className="text-[#888888] group-hover:text-[#AAFF00] transition-colors duration-200 mt-1" />
                </div>

                <div className="flex items-baseline gap-2">
                  <span
                    className="text-3xl font-black text-[#AAFF00]"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {cs.metric}
                  </span>
                  <span className="text-sm text-[#888888]">{cs.metricLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
