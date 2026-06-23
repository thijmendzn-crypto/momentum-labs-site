'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Layers, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Lead Generation Websites',
    description:
      'Conversion-first design that turns visitors into leads. Every element is engineered to drive action — not just look good.',
  },
  {
    icon: Layers,
    title: 'Brand Identity & Design',
    description:
      'Sharp visual systems built for credibility and trust. A brand that commands attention and closes deals before you say a word.',
  },
  {
    icon: TrendingUp,
    title: 'CRO & Optimization',
    description:
      'Data-driven improvements to turn traffic into revenue. We test, iterate, and compound — until your site works as hard as you do.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });

  return (
    <section id="services" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#AAFF00] text-xs font-semibold uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2
            className="text-3xl lg:text-5xl font-black text-white"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            What We Build
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                className="group relative p-8 rounded-2xl border border-white/8 bg-[#111111] cursor-default transition-all duration-200 hover:border-[#AAFF00]/40"
                style={{
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    '0 0 30px rgba(170,255,0,0.08), inset 0 0 30px rgba(170,255,0,0.02)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(170,255,0,0.1)' }}
                >
                  <Icon size={22} className="text-[#AAFF00]" />
                </div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#888888] leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Accent corner */}
                <div
                  className="absolute top-0 right-0 w-16 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: 'linear-gradient(90deg, transparent, #AAFF00)' }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
