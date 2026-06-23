'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Analyze',
    description: "We audit your current presence and identify what's costing you leads.",
  },
  {
    number: '02',
    title: 'Strategize',
    description: 'We design a conversion blueprint tailored to your market and goals.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'We craft every pixel with purpose — speed, clarity, and conversion in mind.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We ship, track, and optimise — because launch is just the beginning.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });

  return (
    <section className="py-24 lg:py-32 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-[#AAFF00] text-xs font-semibold uppercase tracking-widest mb-3">
            Our Approach
          </p>
          <h2
            className="text-3xl lg:text-5xl font-black text-white"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            How We Work
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-white/8 z-0" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                {/* Number bubble */}
                <div
                  className="w-16 h-16 rounded-full border-2 border-[#AAFF00] flex items-center justify-center mb-6 bg-[#111111] relative"
                  style={{ boxShadow: '0 0 20px rgba(170,255,0,0.2)' }}
                >
                  <span
                    className="text-[#AAFF00] font-black text-sm"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
