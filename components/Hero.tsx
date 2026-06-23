'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const stats = [
    { value: 12, suffix: '+', label: 'Clients' },
    { value: 94, suffix: '%', label: 'Retention' },
    { value: 3, suffix: 'x', label: 'Avg. ROI' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-100" />
      {/* Radial glow top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center top, rgba(170,255,0,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-white/10 bg-white/5 text-xs text-[#888888] tracking-wider uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#AAFF00] inline-block animate-pulse" />
          B2B Web Design Agency
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Websites that grow your{' '}
          <span className="text-[#AAFF00]">business</span>,<br />
          not just impress people
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg text-[#888888] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Momentum Labs builds conversion-focused websites for B2B companies serious about growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="px-8 py-4 text-[#0A0A0A] bg-[#AAFF00] font-semibold rounded-lg cursor-pointer transition-all duration-200 hover:opacity-90 active:scale-[0.97] text-sm tracking-wide"
            style={{ boxShadow: '0 0 20px rgba(170,255,0,0.4)' }}
          >
            Book a Free Strategy Call
          </a>
          <a
            href="#results"
            className="px-8 py-4 text-white font-semibold rounded-lg cursor-pointer transition-all duration-200 border border-white/20 hover:border-white/40 hover:bg-white/5 active:scale-[0.97] text-sm tracking-wide"
          >
            See Our Work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 pb-20"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl font-black text-[#AAFF00] mb-1"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-[#888888] tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#888888] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#888888] to-transparent" />
      </motion.div>
    </section>
  );
}
