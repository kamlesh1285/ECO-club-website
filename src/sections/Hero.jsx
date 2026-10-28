import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Sparkles, ChevronRight, Terminal, Globe } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function Hero() {
  const canvasRef = useRef(null);
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const phrases = siteConfig.rotatingTypewriter;
    const fullText = phrases[typewriterIndex % phrases.length];
    
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseDelay = isDeleting ? 300 : 1800;

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

  // Circuit & Leaf Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor((width * height) / 14000), 55);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.2 + 1.2,
        isLeafNode: Math.random() > 0.45,
        pulseOffset: Math.random() * Math.PI * 2
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

    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle circuit interconnects
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 120;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(183, 243, 74, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particle nodes
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle mouse repulsion
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 100) {
          const force = (1 - mDist / 100) * 0.8;
          p.x += (mdx / mDist) * force;
          p.y += (mdy / mDist) * force;
        }

        // Draw node
        ctx.beginPath();
        if (p.isLeafNode) {
          // Emerald Leaf Dot
          ctx.arc(p.x, p.y, p.radius * 1.1, 0, Math.PI * 2);
          ctx.fillStyle = '#22C55E';
          ctx.shadowColor = '#10B981';
          ctx.shadowBlur = 6;
        } else {
          // Tech Circuit Node
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#B7F34A';
          ctx.shadowColor = '#B7F34A';
          ctx.shadowBlur = 8;
        }
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen bg-forest-deep text-white flex flex-col justify-between overflow-hidden pt-28 pb-12"
    >
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto opacity-70 z-0"
      />

      {/* Ambient gradient backdrops */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-emerald-600/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-lime/10 blur-3xl pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Typewriter, CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* College & Department Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-surface border border-lime/30 text-lime text-xs font-mono tracking-wide shadow-glow-lime/20">
              <Terminal className="w-3.5 h-3.5 text-lime" />
              <span>ABES ENGINEERING COLLEGE · TECH & PROJECT DIVISION</span>
            </div>

            {/* Main Display Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-[1.15]">
              Nature Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-emerald-400 to-teal-300">
                Intelligent Tech.
              </span>
            </h1>

            {/* Typewriter Rotating Line */}
            <div className="flex items-center justify-center lg:justify-start gap-2 h-10 font-mono text-lg sm:text-xl md:text-2xl text-lime">
              <span className="text-emerald-400">❯</span>
              <span className="font-semibold">{currentText}</span>
              <span className="w-2.5 h-6 bg-lime animate-pulse inline-block" />
            </div>

            {/* Official Motto */}
            <p className="text-sm sm:text-base font-mono uppercase tracking-[0.2em] text-emerald-300/90 font-medium">
              “{siteConfig.tagline}”
            </p>

            {/* Descriptive Body */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              We are the official environmental student collective at ABES EC, Ghaziabad. We don't just advocate for green habits—we engineer sensor networks, automated monitors, and ground drives to protect our ecosystems.
            </p>

            {/* Two Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#join"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-lime to-lime-bright text-forest-deep font-bold text-sm tracking-wide shadow-glow-lime hover:shadow-[0_0_35px_rgba(183,243,74,0.55)] hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                style={{ minHeight: '48px' }}
              >
                <span>Join the Club</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#events"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-forest-surface/90 hover:bg-forest-border text-white border border-forest-border hover:border-lime/40 font-medium text-sm transition-all text-center flex items-center justify-center gap-2"
                style={{ minHeight: '48px' }}
              >
                <span>Explore Events</span>
                <Sparkles className="w-4 h-4 text-lime" />
              </a>
            </div>

            {/* Quick Tech Tagline Pills */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-gray-400">
              <span className="px-2.5 py-1 rounded bg-forest-surface/80 border border-forest-border/80 text-emerald-300">
                #IoTforCleanAir
              </span>
              <span className="px-2.5 py-1 rounded bg-forest-surface/80 border border-forest-border/80 text-lime">
                #GreenCode
              </span>
              <span className="px-2.5 py-1 rounded bg-forest-surface/80 border border-forest-border/80 text-teal-300">
                #ZeroCampusWaste
              </span>
            </div>
          </div>

          {/* Right Column: Rotating Wireframe Eco-Sphere Graphic (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer Circuit Orbit Rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-lime/30 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-emerald-500/30 animate-[spin_25s_linear_infinite_reverse]" />
              
              {/* Center Wireframe Globe graphic */}
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gradient-to-tr from-forest-surface to-forest-border/60 border border-lime/40 p-6 flex flex-col items-center justify-center text-center shadow-glow-emerald">
                {/* Embedded Circuit Leaf Logo */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 relative animate-pulse-subtle">
                  <img
                    src="/assets/logo-icon.png"
                    alt="Eco Club Leaf Circuit"
                    className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(183,243,74,0.45)]"
                  />
                </div>

                <div className="mt-2 text-center">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-lime font-bold">
                    CONNECTED ECO-SYSTEM
                  </span>
                  <div className="text-[10px] text-gray-300 font-mono">
                    ABES EC · EST. CAMPUS DRIVE
                  </div>
                </div>
              </div>

              {/* Floating Orbiting Satellite Badges */}
              <div className="absolute -top-3 right-6 bg-forest-surface/95 border border-lime/40 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2 text-xs font-mono text-lime animate-float">
                <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
                <span>Live Sensors Active</span>
              </div>

              <div className="absolute -bottom-4 left-6 bg-forest-surface/95 border border-emerald-500/40 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2 text-xs font-mono text-emerald-300 animate-float" style={{ animationDelay: '2s' }}>
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Carbon Mission</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center pt-8">
        <a
          href="#announcements"
          className="flex flex-col items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-lime transition-colors focus:outline-none"
          aria-label="Scroll to announcements and about section"
        >
          <span className="tracking-wider uppercase text-[10px]">Scroll Down</span>
          <div className="w-6 h-9 rounded-full border border-gray-500 flex items-start justify-center p-1">
            <span className="w-1.5 h-2.5 bg-lime rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
