'use client';

import { X, Link2, Globe } from 'lucide-react';

const navLinks = ['Services', 'Results', 'About', 'Contact'];

const socials = [
  { icon: X, href: '#', label: 'X / Twitter' },
  { icon: Link2, href: '#', label: 'LinkedIn' },
  { icon: Globe, href: '#', label: 'Website' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-full bg-[#AAFF00] inline-block mr-1"
              style={{ boxShadow: '0 0 8px rgba(170,255,0,0.6)' }}
            />
            <span
              className="text-white text-lg font-bold tracking-wider"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Momentum <span className="text-[#AAFF00]">Labs</span>
            </span>
          </a>

          {/* Nav links */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-[#888888] hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-white/8 flex items-center justify-center text-[#888888] hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#888888] text-xs">
            © 2025 Momentum Labs. All rights reserved.
          </p>
          <p className="text-[#888888] text-xs">
            Built to convert. Designed to grow.
          </p>
        </div>
      </div>
    </footer>
  );
}
