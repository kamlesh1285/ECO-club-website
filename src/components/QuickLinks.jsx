import React from 'react';
import { Compass, Cpu, Calendar, UserPlus, ArrowRight } from 'lucide-react';

const quickLinks = [
  {
    id: "about",
    title: "About Us",
    subtitle: "Vision & Philosophy",
    href: "#about",
    icon: Compass,
    accent: "text-emerald-400 group-hover:text-lime"
  },
  {
    id: "projects",
    title: "Projects",
    subtitle: "Tech For Planet",
    href: "#projects",
    icon: Cpu,
    accent: "text-lime group-hover:text-lime-bright"
  },
  {
    id: "events",
    title: "Events",
    subtitle: "Drives & Sprints",
    href: "#events",
    icon: Calendar,
    accent: "text-teal-300 group-hover:text-lime"
  },
  {
    id: "join",
    title: "Join Us",
    subtitle: "Become a Member",
    href: "#join",
    icon: UserPlus,
    accent: "text-lime group-hover:text-white"
  }
];

export default function QuickLinks() {
  return (
    <div id="quick-links" className="bg-forest-deep border-b border-forest-border/80 py-5 sm:py-6 relative z-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                className="group p-4 sm:p-5 rounded-2xl bg-forest-surface/85 hover:bg-forest-surface border border-forest-border hover:border-lime/40 shadow-md hover:shadow-glow-lime/10 transition-all flex items-center justify-between min-h-[56px] focus:outline-none focus:ring-2 focus:ring-lime"
                style={{ minHeight: '52px' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest-deep flex items-center justify-center border border-forest-border group-hover:border-lime/30 transition-colors flex-shrink-0">
                    <Icon className={`w-5 h-5 ${item.accent} transition-colors`} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white group-hover:text-lime transition-colors text-sm sm:text-base leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono mt-0.5 leading-none">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-lime group-hover:translate-x-1 transition-all flex-shrink-0 ml-1 hidden sm:block" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
