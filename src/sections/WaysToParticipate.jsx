import React from 'react';
import { Calendar, Cpu, Megaphone, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const pathways = [
  {
    id: "drive",
    title: "Join a Drive",
    category: "ON-GROUND ACTION",
    description: "Participate in weekend sapling plantations, campus cleanups, and e-waste collection sprints across college grounds.",
    icon: Calendar,
    cta: "Explore Events",
    href: "#events",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "project",
    title: "Build a Project",
    category: "ENGINEERING & IOT",
    description: "Collaborate on student-designed microclimate sensors, smart waste trackers, and energy monitoring web dashboards.",
    icon: Cpu,
    cta: "View Projects",
    href: "#projects",
    color: "from-lime-500 to-emerald-600"
  },
  {
    id: "spread",
    title: "Spread the Word",
    category: "CREATIVE & OUTREACH",
    description: "Design digital campaigns, run environmental awareness rallies, and represent ABES at inter-collegiate summits.",
    icon: Megaphone,
    cta: "Join the Club",
    href: "#join",
    color: "from-teal-500 to-emerald-700"
  }
];

export default function WaysToParticipate() {
  return (
    <section id="participate" className="py-16 sm:py-20 bg-cream-warm/30 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - 1 heading + max 2 lines subtitle */}
        <SectionHeading
          badge="GET INVOLVED"
          title="Ways to"
          highlight="Take Part"
          description="Find your niche in the Eco Club—whether on the ground, in the hardware lab, or leading digital campaigns."
        />

        {/* 3 Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pathways.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-cream-border shadow-soft-organic hover:shadow-lifted hover:border-emerald-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-leaf flex items-center justify-center group-hover:scale-105 group-hover:bg-lime/20 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-emerald-700 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="heading-card font-display font-bold text-forest mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-forest/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-cream-border">
                  <a
                    href={item.href}
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-cream hover:bg-forest hover:text-lime font-mono text-xs font-bold transition-all text-forest"
                    style={{ minHeight: '44px' }}
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
