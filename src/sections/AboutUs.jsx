import React from 'react';
import { Compass, Target, Code, Cpu, ShieldCheck, Zap, Leaf } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import WaveDivider from '../components/WaveDivider';

export default function AboutUs() {
  const objectives = [
    {
      icon: Leaf,
      title: "Campus Ecological Stewardship",
      desc: "Conducting targeted plantation and campus flora upkeep with survival tracking."
    },
    {
      icon: Cpu,
      title: "Green Tech & Open Source Solutions",
      desc: "Developing low-power IoT telemetry, air-quality sensors, and resource optimization tools."
    },
    {
      icon: ShieldCheck,
      title: "Zero-Waste & E-Waste Segregation",
      desc: "Diverting dangerous electronic and plastic waste into verified ethical recycling pipelines."
    },
    {
      icon: Zap,
      title: "Student Environmental Consciousness",
      desc: "Mobilizing engineers and technologists to consider ecological footprint in every build."
    }
  ];

  return (
    <div id="about" className="relative bg-cream pt-0 pb-20">
      {/* Wave Divider Transition from Hero's Dark theme to Light */}
      <WaveDivider from="forest" to="cream" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Section Heading */}
        <SectionHeading
          badge="ABOUT THE CLUB"
          title="Bridging Engineering Precision with"
          highlight="Ecological Action"
          description="The Eco Club at ABES Engineering College is student-driven and technologically inspired. We apply technical problem-solving to real-world campus sustainability."
        />

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div className="bg-white p-8 rounded-3xl border border-cream-border shadow-soft-organic relative overflow-hidden group hover:border-emerald-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-forest mb-3">
              Our Vision
            </h3>
            {/* Draft text with editable placeholder note */}
            <p className="text-forest/75 leading-relaxed text-sm sm:text-base">
              To cultivate an ecologically conscious collegiate ecosystem where technology, conservation, and civic responsibility intersect—empowering engineers to design sustainable solutions for pressing climate challenges.
            </p>
            <span className="block mt-4 text-[11px] font-mono text-emerald-700/70">
              * Official draft text — editable in configuration
            </span>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-8 rounded-3xl border border-cream-border shadow-soft-organic relative overflow-hidden group hover:border-emerald-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-lime/20 text-leaf-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-forest mb-3">
              Our Mission
            </h3>
            <p className="text-forest/75 leading-relaxed text-sm sm:text-base">
              To drive measurable environmental impact through structured plantation drives, campus waste audits, student-built green software/hardware projects, and active knowledge dissemination across disciplines.
            </p>
            <span className="block mt-4 text-[11px] font-mono text-emerald-700/70">
              * Official draft text — editable in configuration
            </span>
          </div>
        </div>

        {/* Motto Highlights */}
        <div className="bg-gradient-to-br from-forest-deep to-forest-surface text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden mb-16 border border-forest-border">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-block px-3 py-1 rounded-md bg-lime/15 border border-lime/30 text-lime font-mono text-xs uppercase tracking-wider mb-4">
              Club Motto & Ethos
            </div>
            <h3 className="text-2xl sm:text-4xl font-display font-bold tracking-tight mb-6">
              “THINK · ACT · CODE · WORK GREENER”
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              <div className="border-l-2 border-lime pl-4">
                <h4 className="font-display font-bold text-lg text-lime">THINK</h4>
                <p className="text-xs text-gray-300 mt-1">Cultivate ecological awareness before every decision.</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <h4 className="font-display font-bold text-lg text-emerald-400">ACT</h4>
                <p className="text-xs text-gray-300 mt-1">Step outside and conduct ground drives and cleanups.</p>
              </div>
              <div className="border-l-2 border-teal-300 pl-4">
                <h4 className="font-display font-bold text-lg text-teal-300">CODE</h4>
                <p className="text-xs text-gray-300 mt-1">Harness software, IoT, and AI to automate green solutions.</p>
              </div>
              <div className="border-l-2 border-lime pl-4">
                <h4 className="font-display font-bold text-lg text-lime">WORK GREENER</h4>
                <p className="text-xs text-gray-300 mt-1">Embed sustainability into lifelong professional careers.</p>
              </div>
            </div>
          </div>
        </div>

        {/* "Why Tech for Nature?" Feature Block */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-border shadow-lifted">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-leaf text-xs font-mono font-semibold">
                <Code className="w-3.5 h-3.5" />
                <span>TECH FOR NATURE PHILOSOPHY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-forest leading-snug">
                Why Bring Technology Into Environmental Conservation?
              </h3>
              <p className="text-forest/75 text-sm sm:text-base leading-relaxed">
                Traditional conservation relies solely on periodic volunteer cleanup efforts. While vital, ground stewardship multiplies in effectiveness when augmented with digital intelligence.
              </p>
              <p className="text-forest/75 text-sm sm:text-base leading-relaxed">
                By deploying low-cost sensors for air telemetry, algorithmic routing for e-waste collectors, and geospatial trackers for planted trees, our student developers turn abstract eco-goals into quantifiable, measurable outcomes.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {objectives.map((obj, i) => {
                const IconComponent = obj.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-cream/70 border border-cream-border hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-leaf flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-forest text-base mb-1">
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

      </div>
    </div>
  );
}
