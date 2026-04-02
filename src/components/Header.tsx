'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/revenue-operations', label: 'Revenue Ops' },
    { href: '/competitive-research', label: 'Competitive Research' },
    { href: '/content-engine', label: 'Content Engine' },
    { href: '/for-investors', label: 'For Investors' },
    { href: '/for-coaches', label: 'For Coaches' },
    { href: '/for-service-providers', label: 'For Service Providers' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="container-width px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-navy hover:text-cyan transition-colors">
          3DC Brain
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal hover:text-cyan transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block btn-primary text-sm">
          Early Access
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-navy hover:text-cyan"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container-width px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal hover:text-cyan transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="btn-primary text-sm w-full">
              Early Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
