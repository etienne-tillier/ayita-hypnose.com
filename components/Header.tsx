"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Applications", href: "/applications" },
  { label: "Guide", href: "/guide-hypnotherapie" },
  { label: "Témoignages", href: "/temoignages" },
  { label: "Blog", href: "/blog" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header fixed top-0 left-0 right-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #c8a45a, #dfc07a)' }}>
              <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                <circle cx="16" cy="16" r="13" stroke="#0d1f3c" strokeWidth="2" fill="none"/>
                <circle cx="16" cy="16" r="8" stroke="#0d1f3c" strokeWidth="1.5" fill="none" opacity="0.7"/>
                <circle cx="16" cy="16" r="3.5" fill="#0d1f3c" opacity="0.8"/>
                <path d="M16 3 C20 8, 24 12, 16 16 C8 20, 12 24, 16 29" stroke="#0d1f3c" strokeWidth="1" fill="none" opacity="0.6"/>
                <path d="M16 3 C12 8, 8 12, 16 16 C24 20, 20 24, 16 29" stroke="#0d1f3c" strokeWidth="1" fill="none" opacity="0.6"/>
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-white" style={{ fontFamily: 'Source Serif 4, Georgia, serif' }}>
                Ayita Hypnose
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="btn-primary hidden lg:inline-flex" style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem' }}>
              Prendre rendez-vous
            </Link>
            <button
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg bg-white/10"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span className={`block w-5 h-0.5 bg-white transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-deep border-t border-white/10">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link rounded-lg"
                onClick={() => setMobileOpen(false)}
                style={{ padding: '0.75rem 1rem' }}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-3 text-center" style={{ padding: '0.75rem' }}>
              Prendre rendez-vous
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
