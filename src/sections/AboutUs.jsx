import React, { useRef, useState, useEffect } from 'react';
import { Compass, Target, Code, Cpu, ShieldCheck, Zap, Leaf, TreePine, Recycle, Users, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import WaveDivider from '../components/WaveDivider';
import SampleBadge from '../components/SampleBadge';
import { impactStats } from '../data/stats';
import { useCountUp } from '../hooks/useCountUp';

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

export default function AboutUs() {
  const impactRef = useRef(null);
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

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const objectives = [
    {
      icon: Leaf,
      title: "Campus Stewardship",
      desc: "Native plantation drives and campus flora upkeep with survival tracking."
    },
    {
      icon: Cpu,
      title: "Green Tech Concepts",
      desc: "Low-power IoT sensors, telemetry, and automated environmental tools."
    },
    {
      icon: ShieldCheck,
      title: "Responsible Recycling",
      desc: "Diverting electronic and plastic waste into verified recycling streams."
    },
    {
      icon: Zap,
      title: "Student Leadership",
      desc: "Mobilizing engineering students to design solutions with low carbon cost."
    }
  ];

  return (
    <section id="about" className="relative bg-cream pt-0 pb-20">
      {/* Wave Divider Transition from Hero's Dark theme to Light */}
      <WaveDivider from="forest" to="cream" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Section Heading - 1 title + at most 2 lines subtitle */}
        <SectionHeading
          badge="ABOUT THE CLUB"
          title="Engineering Precision Meets"
          highlight="Ecological Action"
          description="Applying technical problem-solving, student innovation, and ground stewardship to protect our campus environment."
        />

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
          {/* Vision Card */}
          <div className="bg-white p-7 sm:p-8 rounded-3xl border border-cream-border shadow-soft-organic group hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="heading-card font-display font-bold text-forest mb-2">
                Our Vision
              </h3>
              <p className="text-forest/75 text-base leading-relaxed">
                To cultivate an ecologically conscious collegiate ecosystem where technology, conservation, and civic responsibility intersect—empowering engineers to design sustainable solutions for urgent climate challenges.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-7 sm:p-8 rounded-3xl border border-cream-border shadow-soft-organic group hover:border-emerald-300 transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-lime/20 text-leaf-dark flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="heading-card font-display font-bold text-forest mb-2">
                Our Mission
              </h3>
              <p className="text-forest/75 text-base leading-relaxed">
                To drive measurable environmental impact through structured plantation drives, campus waste audits, student-designed green software concepts, and active knowledge sharing across engineering branches.
              </p>
            </div>
          </div>
        </div>

        {/* Motto Highlights */}
        <div className="bg-gradient-to-br from-forest-deep to-forest-surface text-white p-6 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden mb-14 border border-forest-border">
          <div className="relative z-10 max-w-4xl">
            <span className="inline-block px-3 py-1 rounded-md bg-lime/15 border border-lime/30 text-lime font-mono text-xs uppercase tracking-wider mb-3">
              Club Motto & Ethos
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-6">
              “THINK · ACT · CODE · WORK GREENER”
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-1">
              <div className="border-l-2 border-lime pl-3.5">
                <h4 className="font-display font-bold text-base text-lime">THINK</h4>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">Cultivate ecological awareness before every engineering decision.</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-3.5">
                <h4 className="font-display font-bold text-base text-emerald-400">ACT</h4>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">Step outside and conduct ground cleanups and plantation drives.</p>
              </div>
              <div className="border-l-2 border-teal-300 pl-3.5">
                <h4 className="font-display font-bold text-base text-teal-300">CODE</h4>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">Harness software, IoT, and AI to automate green solutions.</p>
              </div>
              <div className="border-l-2 border-lime pl-3.5">
                <h4 className="font-display font-bold text-base text-lime">WORK GREENER</h4>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">Embed sustainability into lifelong professional careers.</p>
              </div>
            </div>
          </div>
        </div>

        {/* "Why Tech for Nature?" Feature Block with exact required wording */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-border shadow-lifted">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-leaf text-xs font-mono font-semibold">
                <Code className="w-3.5 h-3.5" />
                <span>TECH FOR NATURE PHILOSOPHY</span>
              </div>
              <h3 className="heading-card font-display font-bold text-forest">
                Why Bring Tech Into Nature?
              </h3>
              
              {/* Exact requested wording from Point 2 */}
              <p className="text-forest/80 text-base leading-relaxed font-medium">
                We are the Eco Club of ABES Engineering College, Ghaziabad. We don't only promote green habits. We design sensor-based projects, build tools, and run ground drives to protect our campus ecosystem.
              </p>
              <p className="text-forest/70 text-sm leading-relaxed">
                By designing low-cost sensor arrays for air telemetry, routing tools for e-waste sorting, and GPS tree registers, student technologists multiply the efficiency of traditional conservation.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {objectives.map((obj, i) => {
                const IconComponent = obj.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-cream/70 border border-cream-border hover:bg-white hover:border-emerald-300 hover:shadow-sm transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-leaf flex items-center justify-center mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="font-display font-bold text-forest text-sm sm:text-base mb-1">
                      {obj.title}
                    </h4>
                    <p className="text-xs text-forest/70 leading-relaxed">
                      {obj.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Impact Counters Merged into End of About Section (Point 9) */}
        <div id="impact" ref={impactRef} className="pt-16 sm:pt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-emerald-100/70 text-leaf border border-emerald-300/60 mb-2">
              CAMPUS METRICS
            </span>
            <h3 className="heading-section font-display font-bold text-forest">
              Campus Sustainability Targets
            </h3>
            <p className="mt-2 text-sm sm:text-base text-forest/70 line-clamp-2 max-w-[70ch] mx-auto">
              Target milestones for student-led tree plantations, plastic diversion, and community mobilization.
            </p>
          </div>

          {/* Counters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {impactStats.items.map((stat) => (
              <StatCard key={stat.id} stat={stat} inView={inView} />
            ))}
          </div>

          {/* Single clean sample note (Point 4: Keep one short sample note per section) */}
          <div className="mt-8 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              <span>Sample figures representing annual campus sustainability targets</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
