import React, { useRef, useState, useEffect } from 'react';
import { TreePine, Recycle, Users, Sparkles } from 'lucide-react';
import { impactStats } from '../data/stats';
import { useCountUp } from '../hooks/useCountUp';
import SectionHeading from '../components/SectionHeading';
import SampleBadge from '../components/SampleBadge';

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
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-cream-border shadow-soft-organic hover:shadow-lifted hover:border-emerald-300 transition-all flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-leaf flex items-center justify-center group-hover:scale-105 group-hover:bg-lime/20 transition-all">
            <IconComponent className="w-5 h-5" />
          </div>
          <SampleBadge text="Sample" />
        </div>

        <div className="flex items-baseline gap-1 my-2">
          <span className="text-3xl sm:text-4xl font-display font-extrabold text-forest tracking-tight">
            {count.toLocaleString()}
          </span>
          <span className="text-xl sm:text-2xl font-display font-bold text-emerald">
            {stat.suffix}
          </span>
        </div>

        <h4 className="font-display font-bold text-base text-forest mt-1">
          {stat.label}
        </h4>
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
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" className="py-16 sm:py-20 bg-cream-warm/40 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        
        <SectionHeading
          badge="CAMPUS METRICS"
          title="Collective Ecological"
          highlight="Impact Targets"
          description="Target milestones for student-led drives and campus environmental stewardship."
          sampleDisclaimer="Sample figures representing annual campus sustainability targets"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {impactStats.items.map((stat) => (
            <StatCard key={stat.id} stat={stat} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  );
}
