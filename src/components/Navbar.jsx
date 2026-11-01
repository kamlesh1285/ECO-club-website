import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Home, Compass, Users, Cpu, Sparkles, Image, Calendar, Mail, UserPlus } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

// Exact 8 navigation links as specified in Point 9
const navLinks = [
  { label: 'Home', href: '#home', id: 'home', icon: Home },
  { label: 'About', href: '#about', id: 'about', icon: Compass },
  { label: 'Team', href: '#team', id: 'team', icon: Users },
  { label: 'Projects', href: '#projects', id: 'projects', icon: Cpu },
  { label: 'Tools', href: '#tools', id: 'tools', icon: Sparkles },
  { label: 'Gallery', href: '#gallery', id: 'gallery', icon: Image },
  { label: 'Events', href: '#events', id: 'events', icon: Calendar },
  { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['home', 'about', 'team', 'projects', 'tools', 'gallery', 'events', 'contact', 'join'], 120);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-forest-deep/95 backdrop-blur-md border-b border-lime/15 shadow-lg'
          : 'py-3.5 bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brandmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-lime rounded-lg p-1"
            aria-label="Eco Club ABES Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-forest-surface p-1 border border-lime/30 group-hover:border-lime transition-colors flex items-center justify-center overflow-hidden flex-shrink-0">
              <img
                src="/assets/logo-icon.png"
                alt="Eco Club Icon"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-wider text-white flex items-center gap-1.5 leading-tight">
                ECO CLUB <span className="text-lime text-xs font-mono font-normal border border-lime/40 px-1 rounded">ABES</span>
              </span>
              <span className="text-xs font-mono text-gray-300 tracking-wider hidden sm:block">
                THINK · ACT · CODE · WORK GREENER
              </span>
            </div>
          </a>

          {/* Desktop 8-Link Pill Nav (Point 9 & 13) */}
          <nav className="hidden lg:flex items-center gap-1 bg-forest-surface/80 px-3 py-1.5 rounded-full border border-forest-border/80 shadow-inner" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-lime font-semibold bg-forest-border/70 shadow-sm'
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

          {/* Right Action CTA (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#join"
              className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-bold font-mono bg-lime text-forest-deep hover:bg-lime-bright transition-all duration-200 shadow-glow-lime hover:scale-[1.02] active:scale-95"
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

      {/* Full-Screen Mobile Menu with Icons & Large Tap Targets (Point 13) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-forest-deep text-white flex flex-col justify-between p-6 sm:p-8 overflow-y-auto animate-fadeIn">
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between pb-6 border-b border-forest-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-surface p-1 border border-lime/30 flex items-center justify-center">
                <img
                  src="/assets/logo-icon.png"
                  alt="Eco Club Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white">
                  ECO CLUB <span className="text-lime">ABES</span>
                </span>
                <p className="text-xs font-mono text-gray-400">Navigation</p>
              </div>
            </div>

            <button
              onClick={closeMobileMenu}
              className="p-2.5 rounded-xl bg-forest-surface text-gray-300 hover:text-lime border border-forest-border focus:outline-none focus:ring-2 focus:ring-lime"
              aria-label="Close menu"
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links with Icons and Large Touch Targets */}
          <nav className="py-6 flex flex-col space-y-1.5 flex-1 justify-center" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-forest-surface text-lime border border-lime/30 shadow-md'
                      : 'text-gray-200 hover:bg-forest-surface/50 hover:text-white'
                  }`}
                  style={{ minHeight: '48px' }}
                >
                  <div className="flex items-center gap-3.5">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-lime' : 'text-gray-400'}`} />
                    <span>{link.label}</span>
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-lime" />}
                </a>
              );
            })}
          </nav>

          {/* Join Us Pinned at Bottom of Mobile Menu (Point 13) */}
          <div className="pt-4 border-t border-forest-border">
            <a
              href="#join"
              onClick={closeMobileMenu}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-lime to-lime-bright text-forest-deep font-bold font-mono text-sm tracking-wider shadow-glow-lime flex items-center justify-center gap-2 transition-transform active:scale-95"
              style={{ minHeight: '48px' }}
            >
              <UserPlus className="w-4 h-4" />
              <span>JOIN THE CLUB</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
