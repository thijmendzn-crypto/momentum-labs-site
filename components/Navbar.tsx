'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On homepage: anchor links. On other pages: route to homepage anchors.
  function href(anchor: string) {
    return isHome ? `#${anchor}` : `/#${anchor}`;
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/8'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <img src="/logo.png" alt="Momentum Labs" style={{ height: 28, width: 'auto' }} />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-sm text-[#888888] hover:text-white transition-colors duration-200">
            Services
          </Link>
          <a href={href('results')} className="text-sm text-[#888888] hover:text-white transition-colors duration-200">
            Results
          </a>
          <a href={href('about')} className="text-sm text-[#888888] hover:text-white transition-colors duration-200">
            About
          </a>
          <Link href="/contact" className="text-sm text-[#888888] hover:text-white transition-colors duration-200">
            Contact
          </Link>
          <a
            href="https://calendly.com/businessecomthijmen/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-[#0A0A0A] bg-[#AAFF00] rounded-md transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ boxShadow: '0 0 20px rgba(170,255,0,0.4)' }}
          >
            Book a Call
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white p-2">
          <div className="w-5 h-px bg-white mb-1.5" />
          <div className="w-5 h-px bg-white mb-1.5" />
          <div className="w-5 h-px bg-white" />
        </button>
      </div>
    </motion.nav>
  );
}
