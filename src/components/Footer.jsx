import React from 'react';
import { ArrowUp, Instagram, ExternalLink, Heart } from 'lucide-react';
import { siteConfig } from '../data/config';
import { socialConfig, getActiveSocials } from '../data/socials';

export default function Footer() {
  const activeSocials = getActiveSocials();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-deep text-white border-t border-forest-border relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-forest-border/80">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-forest-surface p-1.5 border border-lime/30 flex items-center justify-center">
                <img
                  src="/assets/logo-icon.png"
                  alt="Eco Club Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-wider text-white">
                  ECO CLUB <span className="text-lime">ABES</span>
                </span>
                <p className="text-xs font-mono text-gray-300">
                  {siteConfig.collegeName}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Fusing cutting-edge technology, student engineering, and active ground stewardship to protect our campus environment and beyond.
            </p>

            <div className="inline-block px-3 py-1.5 rounded-lg bg-forest-surface/80 border border-lime/20 text-xs font-mono text-lime">
              {siteConfig.tagline}
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-display font-semibold uppercase tracking-wider text-lime">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#about" className="hover:text-lime transition-colors inline-block py-1">About Our Mission</a>
              </li>
              <li>
                <a href="#impact" className="hover:text-lime transition-colors inline-block py-1">Eco Impact Figures</a>
              </li>
              <li>
                <a href="#team" className="hover:text-lime transition-colors inline-block py-1">Our Leadership & Teams</a>
              </li>
              <li>
                <a href="#tech" className="hover:text-lime transition-colors inline-block py-1">Tech for the Planet</a>
              </li>
              <li>
                <a href="#tools" className="hover:text-lime transition-colors inline-block py-1">Carbon Footprint Quiz</a>
              </li>
              <li>
                <a href="#events" className="hover:text-lime transition-colors inline-block py-1">Upcoming Events</a>
              </li>
            </ul>
          </div>

          {/* Dedicated Social Spotlight Card (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-display font-semibold uppercase tracking-wider text-lime mb-3">
              Connect With Us
            </h4>
            
            {/* Attractive Instagram Card as specified */}
            <div className="p-5 rounded-2xl bg-forest-surface border border-lime/25 shadow-glow-lime/5 hover:border-lime/60 transition-all group">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-white group-hover:text-lime transition-colors text-sm">
                    {socialConfig.instagramHandle}
                  </h5>
                  <span className="text-[11px] font-mono text-emerald-400">Official Club Handle</span>
                </div>
              </div>
              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                {socialConfig.instagramTagline}
              </p>
              <a
                href={socialConfig.platforms.find(p => p.id === 'instagram')?.url || "https://www.instagram.com/abes_ecoclub/"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-leaf text-white font-medium text-xs hover:from-emerald-500 hover:to-leaf-light transition-all shadow-sm"
                style={{ minHeight: '44px' }}
              >
                <span>Follow on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* If any additional active socials exist, render them cleanly */}
            {activeSocials.length > 1 && (
              <div className="flex gap-2 mt-3">
                {activeSocials.filter(s => s.id !== 'instagram').map(social => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-forest-surface text-gray-300 hover:text-lime hover:bg-forest-border transition-colors"
                    aria-label={social.label}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>{siteConfig.footerCredits}</span>
            <span className="text-gray-600">|</span>
            <span className="font-mono text-[11px] text-gray-500">ABES Engineering College</span>
          </p>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px]">
              © {siteConfig.copyrightYear} Eco Club. All rights reserved.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-forest-surface hover:bg-lime hover:text-forest-deep text-gray-300 transition-all border border-forest-border hover:border-lime"
              aria-label="Scroll back to top"
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
