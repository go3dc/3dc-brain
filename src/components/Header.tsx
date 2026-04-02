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
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur-md border-b border-cyan border-opacity-10 shadow-elevation-2">
      <nav className="container-lg px-6 md:px-12 py-0 flex items-center justify-between h-18 md:h-20">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-bold text-white hover:text-cyan transition-colors duration-200 py-4"
        >
          3DC Brain
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-md font-medium text-white hover:text-cyan transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan group-hover:w-full transition-all duration-200" />
            </Link>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <Link 
          href="/contact" 
          className="hidden lg:block btn-primary text-sm py-2 px-6"
        >
          Get Started
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-white hover:text-cyan transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-navy bg-opacity-98 border-t border-cyan border-opacity-10 absolute top-full left-0 right-0 backdrop-blur-md">
          <div className="container-lg px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body-md font-medium text-white hover:text-cyan transition-colors duration-200 py-2 px-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="divider my-2" />
            <Link 
              href="/contact" 
              className="btn-primary text-center w-full py-3"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
