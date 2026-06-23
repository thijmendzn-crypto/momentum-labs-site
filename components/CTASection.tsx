'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CalendarDays } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });

  return (
    <section id="contact" className="py-24 lg:py-32 px-6 relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(170,255,0,0.10) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#AAFF00] text-xs font-semibold uppercase tracking-widest mb-4">
            Let's Talk
          </p>
          <h2
            className="text-4xl lg:text-6xl font-black text-white mb-6"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Ready to grow?
          </h2>
          <p className="text-[#888888] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Book a free strategy call. No obligations — just concrete insights for your business.
          </p>

          <motion.a
            href="mailto:businessecomthijmen@gmail.com?subject=Strategy Call Request&body=Hi Thijmen, I'd like to book a free strategy call."
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 text-[#0A0A0A] bg-[#AAFF00] font-bold rounded-xl text-base cursor-pointer transition-all duration-200"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              boxShadow: '0 0 40px rgba(170,255,0,0.4)',
            }}
          >
            <CalendarDays size={20} />
            Schedule a Call
          </motion.a>

          <p className="text-[#888888] text-xs mt-6 tracking-wide">
            Prefer email?{' '}
            <a
              href="mailto:businessecomthijmen@gmail.com"
              className="text-[#AAFF00] hover:underline transition-colors"
            >
              businessecomthijmen@gmail.com
            </a>
          </p>
        </motion.div>
      </div>

      {/* Decorative border top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(170,255,0,0.4))' }}
      />
    </section>
  );
}
