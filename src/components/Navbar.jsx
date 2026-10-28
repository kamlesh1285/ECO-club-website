import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navLinks = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Impact', href: '#impact', id: 'impact' },
  { label: 'Team', href: '#team', id: 'team' },
  { label: 'Tech & Projects', href: '#tech', id: 'tech' },
  { label: 'Tools', href: '#tools', id: 'tools' },
  { label: 'Gallery', href: '#gallery', id: 'gallery' },
  { label: 'Events', href: '#events', id: 'events' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['home', 'about', 'impact', 'team', 'tech', 'tools', 'gallery', 'events', 'pledge', 'join', 'contact'], 140);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-forest-deep/90 backdrop-blur-md border-b border-lime/15 shadow-lg'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brandmark */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-lime rounded-lg p-1"
            aria-label="Eco Club ABES Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-forest-surface p-1 border border-lime/30 group-hover:border-lime transition-colors flex items-center justify-center overflow-hidden">
              <img
                src="/assets/logo-icon.png"
                alt="Eco Club Icon"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-wider text-white flex items-center gap-1 leading-tight">
                ECO CLUB <span className="text-lime text-xs font-mono font-normal border border-lime/40 px-1 rounded">ABES</span>
              </span>
              <span className="text-[10px] font-mono text-gray-300 tracking-wider hidden sm:block">
                THINK · ACT · CODE · WORK GREENER
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-forest-surface/70 px-3 py-1.5 rounded-full border border-forest-border/80 shadow-inner" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-lime font-semibold bg-forest-border/60 shadow-sm'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-lime" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#join"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-lime text-forest-deep hover:bg-lime-bright transition-all duration-200 shadow-glow-lime hover:scale-[1.02] active:scale-95"
              style={{ minHeight: '44px' }}
            >
              <span>Join Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-200 hover:text-white hover:bg-forest-surface border border-forest-border/60 focus:outline-none focus:ring-2 focus:ring-lime"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            style={{ minHeight: '44px', minWidth: '44px' }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-lime" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-forest-deep/95 backdrop-blur-xl border-b border-forest-border px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-forest-surface text-lime border border-lime/30'
                      : 'text-gray-200 hover:bg-white/5 hover:text-white'
                  }`}
                  style={{ minHeight: '44px' }}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-lime" />}
                </a>
              );
            })}
            <div className="pt-3 border-t border-forest-border/70 mt-2">
              <a
                href="#join"
                onClick={closeMobileMenu}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald to-leaf text-white font-semibold rounded-xl text-sm shadow-md"
                style={{ minHeight: '44px' }}
              >
                <span>Join the Eco Club</span>
                <ArrowUpRight className="w-4 h-4 text-lime" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
