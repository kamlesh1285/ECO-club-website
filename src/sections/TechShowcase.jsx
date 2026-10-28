import React from 'react';
import { Cpu, ExternalLink, Github, Sparkles, CheckCircle2 } from 'lucide-react';
import { conceptProjects } from '../data/projects';
import SectionHeading from '../components/SectionHeading';
import SampleBadge from '../components/SampleBadge';

export default function TechShowcase() {
  return (
    <section id="tech" className="py-24 bg-forest-deep text-white relative overflow-hidden">
      {/* Background Circuit Grid Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B7F34A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-lime/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="TECH & PROJECT DIVISION"
          title="Tech For The Planet"
          highlight="Innovations"
          description="Engineering software, embedded microcontrollers, and IoT sensor networks to automate sustainability across campus."
          dark={true}
          sampleDisclaimer="Concept / sample projects — designed by Tech & Project division"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {conceptProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-forest-surface/80 rounded-3xl p-7 sm:p-8 border border-forest-border hover:border-lime/50 shadow-xl hover:shadow-[0_0_30px_rgba(183,243,74,0.12)] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Category */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-lime/10 text-lime flex items-center justify-center border border-lime/20">
                      <Cpu className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-mono text-emerald-300 font-semibold uppercase tracking-wider">
                      {proj.category}
                    </span>
                  </div>
                  <SampleBadge text={proj.status} dark={true} />
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-lime transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs font-mono text-lime/80 mt-1">
                  {proj.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                  {proj.description}
                </p>

                {/* Key Highlights */}
                <div className="mt-5 space-y-2">
                  {proj.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills & Links */}
              <div className="mt-8 pt-5 border-t border-forest-border/80">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-forest-deep text-gray-300 border border-forest-border/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] font-mono text-gray-400">
                    Concept Specification
                  </span>
                  
                  <div className="flex items-center gap-3">
                    <a
                      href="#join"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-lime hover:underline cursor-pointer"
                    >
                      <span>Contribute Code</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Division Motto Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-forest-surface border border-lime/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-lime flex-shrink-0" />
            <div>
              <h4 className="font-display font-bold text-white text-base">
                Have a green tech idea or hardware concept?
              </h4>
              <p className="text-xs text-gray-300 mt-0.5">
                Join our Tech & Project division to build, test, and deploy prototypes on ABES EC campus.
              </p>
            </div>
          </div>
          <a
            href="#join"
            className="px-5 py-2.5 rounded-full bg-lime text-forest-deep text-xs font-bold font-mono tracking-wider hover:bg-lime-bright transition-all shadow-glow-lime whitespace-nowrap"
            style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
          >
            JOIN TECH DIVISION
          </a>
        </div>

      </div>
    </section>
  );
}
