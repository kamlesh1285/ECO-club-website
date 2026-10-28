import React, { useRef, useState, useEffect } from 'react';
import { TreePine, Recycle, Users, Sparkles } from 'lucide-react';
import { impactStats } from '../data/stats';
import { useCountUp } from '../hooks/useCountUp';
import SectionHeading from '../components/SectionHeading';

const iconMap = {
  TreePine,
  Recycle,
  Users,
  Sparkles
};

function StatCard({ stat, inView }) {
  const IconComponent = iconMap[stat.icon] || Sparkles;
  const count = useCountUp(stat.value, 1800, inView);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-border shadow-soft-organic hover:shadow-lifted hover:border-emerald-300 transition-all flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-leaf flex items-center justify-center group-hover:scale-110 group-hover:bg-lime/20 transition-all">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100/60 text-leaf font-semibold">
            SAMPLE
          </span>
        </div>

        <div className="flex items-baseline gap-1 my-2">
          <span className="text-4xl sm:text-5xl font-display font-extrabold text-forest tracking-tight">
            {count.toLocaleString()}
          </span>
          <span className="text-2xl sm:text-3xl font-display font-bold text-emerald">
            {stat.suffix}
          </span>
        </div>

        <h3 className="font-display font-bold text-base sm:text-lg text-forest mt-1">
          {stat.label}
        </h3>
      </div>

      <p className="text-xs text-forest/70 mt-3 pt-3 border-t border-cream-border">
        {stat.description}
      </p>
    </div>
  );
}

export default function ImpactCounter() {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" className="py-20 bg-cream-warm/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        
        {/* Section Heading with visible sample figures disclaimer */}
        <SectionHeading
          badge="CAMPUS METRICS"
          title="Collective Ecological"
          highlight="Impact Numbers"
          description="A quantitative overview of ongoing campus drives, green events, and community mobilization."
          sampleDisclaimer={impactStats.disclaimer}
        />

        {/* Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.items.map((stat) => (
            <StatCard key={stat.id} stat={stat} inView={inView} />
          ))}
        </div>

        {/* Visible Notice Card */}
        <div className="mt-10 p-4 rounded-2xl bg-white/80 border border-cream-border text-center max-w-2xl mx-auto text-xs text-forest/75 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
          <span>
            <strong>Honesty Note:</strong> The figures above represent sample mock data for demonstration and will be replaced with verified annual club audit numbers.
          </span>
        </div>

      </div>
    </section>
  );
}
