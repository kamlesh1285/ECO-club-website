import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, ChevronRight, Terminal, Globe } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function Hero() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect rotating motive & tagline phrases
  useEffect(() => {
    const phrases = siteConfig.rotatingTypewriter;
    const fullText = phrases[typewriterIndex % phrases.length];
    
    const typingSpeed = isDeleting ? 35 : 75;
    const pauseDelay = isDeleting ? 250 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDelay);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setTypewriterIndex((prev) => prev + 1);
      } else {
        const nextText = isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typewriterIndex]);

  // Circuit & Leaf Canvas Animation with 60% mobile reduction and tab-pause
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isPaused = false;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Visibility & Intersection Observers to pause animation when hidden
    const handleVisibilityChange = () => {
      isPaused = document.hidden;
      if (!isPaused) {
        render();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const observer = new IntersectionObserver(([entry]) => {
      isPaused = !entry.isIntersecting;
      if (!isPaused) {
        render();
      }
    }, { threshold: 0.1 });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Particle nodes calculation (~60% reduction on screens under 768px)
    const isMobile = window.innerWidth < 768;
    const baseCount = Math.min(Math.floor((width * height) / 16000), 45);
    const particleCount = isMobile ? Math.max(Math.floor(baseCount * 0.4), 8) : baseCount;

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.2,
        isLeafNode: Math.random() > 0.45
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    const handleMouseLeave = () => {
      mouse = { x: -1000, y: -1000 };
    };

    canvas.parentElement.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      if (isPaused) return;

      ctx.clearRect(0, 0, width, height);

      // Connect lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = isMobile ? 80 : 110;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(183, 243, 74, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 90) {
          const force = (1 - mDist / 90) * 0.6;
          p.x += (mdx / mDist) * force;
          p.y += (mdy / mDist) * force;
        }

        ctx.beginPath();
        if (p.isLeafNode) {
          ctx.arc(p.x, p.y, p.radius * 1.1, 0, Math.PI * 2);
          ctx.fillStyle = '#22C55E';
        } else {
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#B7F34A';
        }
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[100svh] bg-forest-deep text-white flex flex-col justify-between overflow-hidden pt-24 pb-8 md:py-28"
    >
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto opacity-70 z-0"
      />

      {/* Ambient gradient backdrops */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-emerald-600/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-lime/10 blur-3xl pointer-events-none" />

      {/* Main Container - 1200px max width */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Main Content Column (Desktop: left 7 cols; Mobile: stacked top) */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-4 sm:space-y-5">
            
            {/* Small Logo Mark (Visible on Mobile at top of stack as requested) */}
            <div className="md:hidden w-12 h-12 rounded-2xl bg-forest-surface p-2 border border-lime/30 shadow-glow-lime/10 mb-1 flex items-center justify-center">
              <img
                src="/assets/logo-icon.png"
                alt="Eco Club Mark"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Hero Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-surface border border-lime/30 text-lime text-xs font-mono font-semibold tracking-wide shadow-glow-lime/20">
              <Terminal className="w-3.5 h-3.5 text-lime flex-shrink-0" />
              <span>ABES ENGINEERING COLLEGE · ECO CLUB</span>
            </div>

            {/* Display Headline with clamp scaling */}
            <h1 className="heading-hero font-display font-extrabold tracking-tight text-white">
              Nature Meets <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-emerald-400 to-teal-300">
                Intelligent Tech.
              </span>
            </h1>

            {/* Typewriter Rotating Line */}
            <div className="flex items-center justify-center md:justify-start gap-2 h-9 font-mono text-base sm:text-xl text-lime">
              <span className="text-emerald-400">❯</span>
              <span className="font-semibold">{currentText}</span>
              <span className="w-2 h-5 bg-lime animate-pulse inline-block" />
            </div>

            {/* One-Line Descriptive Text as requested */}
            <p className="text-base sm:text-lg text-gray-200 max-w-[70ch] leading-relaxed">
              ABES's student club using technology to protect our campus and planet.
            </p>

            {/* Full-width on mobile CTAs, auto-width on desktop */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href="#join"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-lime to-lime-bright text-forest-deep font-bold text-sm tracking-wide shadow-glow-lime hover:shadow-[0_0_30px_rgba(183,243,74,0.5)] hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                style={{ minHeight: '48px' }}
              >
                <span>Join the Club</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#events"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-forest-surface/90 hover:bg-forest-border text-white border border-forest-border hover:border-lime/40 font-semibold text-sm transition-all text-center flex items-center justify-center gap-2"
                style={{ minHeight: '48px' }}
              >
                <span>Explore Events</span>
                <Sparkles className="w-4 h-4 text-lime" />
              </a>
            </div>

          </div>

          {/* Eco-Sphere Column (Desktop: right 5 cols; Mobile: placed below text at smaller size) */}
          <div className="md:col-span-5 flex items-center justify-center relative mt-4 md:mt-0">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center">
              
              {/* Outer Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-lime/30 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-3 sm:inset-4 rounded-full border border-emerald-500/30 animate-[spin_25s_linear_infinite_reverse]" />
              
              {/* Center Wireframe Globe */}
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-forest-surface to-forest-border/60 border border-lime/40 p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-glow-emerald">
                {/* Circuit Leaf Logo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative animate-pulse-subtle">
                  <img
                    src="/assets/logo-icon.png"
                    alt="Eco Club Leaf Circuit"
                    className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(183,243,74,0.45)]"
                  />
                </div>

                <div className="mt-1 text-center">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-lime font-bold">
                    CONNECTED ECO-SYSTEM
                  </span>
                </div>
              </div>

              {/* Orbiting Satellite Badges */}
              <div className="absolute -top-2 right-2 sm:right-6 bg-forest-surface/95 border border-lime/40 px-2.5 py-1 rounded-xl shadow-lg flex items-center gap-1.5 text-xs font-mono text-lime">
                <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
                <span>Live Sensors Active</span>
              </div>

              <div className="absolute -bottom-2 left-2 sm:left-6 bg-forest-surface/95 border border-emerald-500/40 px-2.5 py-1 rounded-xl shadow-lg flex items-center gap-1.5 text-xs font-mono text-emerald-300">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Carbon Mission</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center pt-2">
        <a
          href="#quick-links"
          className="flex flex-col items-center gap-1 text-xs font-mono text-gray-400 hover:text-lime transition-colors focus:outline-none"
          aria-label="Scroll to quick links"
        >
          <span className="tracking-wider uppercase text-[10px]">Explore</span>
          <div className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center p-1">
            <span className="w-1 h-2 bg-lime rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
