import React, { useState } from 'react';
import { Cpu, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { conceptProjects } from '../data/projects';
import SectionHeading from '../components/SectionHeading';
import SampleBadge from '../components/SampleBadge';

function ProjectCard({ proj }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-forest-surface/85 rounded-3xl p-6 sm:p-7 border border-forest-border hover:border-lime/50 shadow-xl hover:shadow-[0_0_25px_rgba(183,243,74,0.12)] transition-all flex flex-col justify-between group">
      <div>
        {/* Top Category & Sample Chip */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-lime/10 text-lime flex items-center justify-center border border-lime/20 flex-shrink-0">
              <Cpu className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono text-emerald-300 font-semibold uppercase tracking-wider">
              {proj.category}
            </span>
          </div>
          <SampleBadge text="Sample" dark={true} />
        </div>

        {/* Title & Tagline */}
        <h3 className="heading-card font-display font-bold text-white group-hover:text-lime transition-colors">
          {proj.title}
        </h3>
        <p className="text-xs font-mono text-lime/80 mt-1 leading-snug">
          {proj.tagline}
        </p>

        {/* Short Description */}
        <p className="text-sm text-gray-300 mt-3 leading-relaxed">
          {proj.description}
        </p>

        {/* Consistent "Details" Toggle */}
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-lime hover:underline py-1 focus:outline-none"
            aria-expanded={showDetails}
          >
            <span>{showDetails ? "Hide Details" : "Details"}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`} />
          </button>

          {showDetails && (
            <div className="mt-3 p-3.5 rounded-2xl bg-forest-deep/80 border border-forest-border space-y-2 text-xs text-gray-300 animate-fadeIn">
              {proj.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tech Stack Chips & Action Link */}
      <div className="mt-6 pt-4 border-t border-forest-border/80">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {proj.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded text-xs font-mono bg-forest-deep text-gray-300 border border-forest-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Working link to Join section (no dead '#' links) */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-xs font-mono text-gray-400">
            Concept Architecture
          </span>
          
          <a
            href="#join"
            className="inline-flex items-center gap-1 text-xs font-mono font-bold text-lime hover:text-white transition-colors"
            style={{ minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
          >
            <span>Join Project Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function TechShowcase() {
  return (
    <section id="projects" className="py-20 bg-forest-deep text-white relative overflow-hidden">
      {/* Anchor for any #tech links */}
      <span id="tech" className="sr-only">Tech Showcase</span>

      {/* Background Circuit Grid Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B7F34A_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-lime/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading - 1 title + at most 2 lines subtitle */}
        <SectionHeading
          badge="TECH & PROJECT DIVISION"
          title="Tech For The Planet"
          highlight="Innovations"
          description="Student-designed embedded sensors, air quality monitors, and environmental tracking dashboards."
          dark={true}
          sampleDisclaimer="Concept projects designed by the Tech & Project division"
        />

        {/* Projects Grid - reflows from 2 columns on desktop to 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {conceptProjects.map((proj) => (
            <ProjectCard key={proj.id} proj={proj} />
          ))}
        </div>

        {/* Division Callout */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-forest-surface border border-lime/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display font-bold text-white text-base">
              Have a green technology idea or sensor prototype?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
              Join the Tech & Project division to build, test, and deploy solutions on campus.
            </p>
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
