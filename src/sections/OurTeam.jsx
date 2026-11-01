import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Cpu, Calendar, Megaphone, Globe, Palette, UserCheck, CheckCircle2 } from 'lucide-react';
import { facultyCounselors, coreLeadership, divisions } from '../data/team';
import SectionHeading from '../components/SectionHeading';

const divisionIconMap = {
  Cpu,
  Calendar,
  Megaphone,
  Globe,
  Palette,
  UserCheck
};

function InitialsAvatar({ initials, gradient = "from-emerald-500 to-lime-400", size = "w-14 h-14 text-base" }) {
  return (
    <div className={`relative p-0.5 rounded-full bg-gradient-to-tr ${gradient} shadow-sm flex-shrink-0 inline-block`}>
      <div className={`${size} rounded-full bg-forest-deep flex items-center justify-center font-display font-bold text-white tracking-wider`}>
        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-white via-lime-soft to-lime">
          {initials}
        </span>
      </div>
    </div>
  );
}

export default function OurTeam() {
  const [selectedDivisionId, setSelectedDivisionId] = useState(divisions[0].id);

  const activeDivision = divisions.find((d) => d.id === selectedDivisionId) || divisions[0];
  const DivIcon = divisionIconMap[activeDivision.icon] || Cpu;

  return (
    <section id="team" className="py-16 sm:py-20 bg-cream relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - 1 title + at most 2 lines subtitle */}
        <SectionHeading
          badge="CLUB ROSTER"
          title="Faculty Mentors &"
          highlight="Leadership"
          description="Dedicated engineering faculty advisors and student division teams driving campus ecological action."
        />

        {/* 1. Faculty Counselors */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-5">
            <GraduationCap className="w-5 h-5 text-emerald-600" />
            <h3 className="heading-card font-display font-bold text-forest">
              Faculty Counselors
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {facultyCounselors.map((counselor, idx) => (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-3xl border border-cream-border shadow-soft-organic flex items-center gap-4 hover:border-emerald-300 transition-all"
              >
                <InitialsAvatar initials={counselor.initials} gradient={counselor.accent} size="w-16 h-16 text-lg" />
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-100 text-leaf">
                    {counselor.role}
                  </span>
                  <h4 className="text-lg sm:text-xl font-display font-bold text-forest mt-1">
                    {counselor.name}
                  </h4>
                  <p className="text-xs text-forest/70 mt-0.5 font-sans">
                    {counselor.department}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Core Leadership (Club Board) */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-5">
            <Award className="w-5 h-5 text-emerald-600" />
            <h3 className="heading-card font-display font-bold text-forest">
              Core Leadership (Club Board)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {coreLeadership.map((leader, idx) => (
              <div
                key={idx}
                className={`bg-white p-5 sm:p-6 rounded-3xl border ${
                  leader.isTBA ? 'border-dashed border-amber-300 bg-amber-50/20' : 'border-cream-border'
                } shadow-soft-organic hover:border-emerald-300 transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <InitialsAvatar initials={leader.initials} gradient={leader.accent} size="w-14 h-14 text-base" />
                    <span className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                      leader.isTBA ? 'bg-amber-100 text-amber-800' : 'bg-lime/20 text-leaf-dark'
                    }`}>
                      {leader.role}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-display font-bold text-forest">
                    {leader.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-forest/75 mt-1.5 leading-relaxed">
                    {leader.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-cream-border flex items-center gap-1.5 text-xs font-mono text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Executive Board Member</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Division-wise Teams (Filterable Tabs) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div>
              <h3 className="heading-card font-display font-bold text-forest">
                Club Divisions
              </h3>
              <p className="text-xs sm:text-sm text-forest/70">
                Explore individual functional teams and their specialized mandates.
              </p>
            </div>
          </div>

          {/* Division Select Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
            {divisions.map((div) => {
              const Icon = divisionIconMap[div.icon] || Cpu;
              const isSelected = selectedDivisionId === div.id;
              return (
                <button
                  key={div.id}
                  onClick={() => setSelectedDivisionId(div.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-forest-deep text-lime shadow-md border border-lime/30'
                      : 'bg-white text-forest/80 hover:bg-white/80 border border-cream-border'
                  }`}
                  style={{ minHeight: '44px' }}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-lime' : 'text-forest/60'}`} />
                  <span>{div.name}</span>
                </button>
              );
            })}
          </div>

          {/* Division Details Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDivision.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl p-5 sm:p-8 border border-cream-border shadow-lifted mt-2"
            >
              {/* Header info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-cream-border">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-leaf flex items-center justify-center flex-shrink-0">
                    <DivIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-emerald-600 uppercase tracking-wider">
                      DIVISION FOCUS
                    </span>
                    <h4 className="text-xl sm:text-2xl font-display font-bold text-forest">
                      {activeDivision.name}
                    </h4>
                    <p className="text-xs sm:text-sm font-mono text-leaf mt-0.5">
                      “{activeDivision.tagline}”
                    </p>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-forest/75 max-w-md">
                  {activeDivision.description}
                </div>
              </div>

              {/* Members Grid - reflows from 3/2 to 1 column */}
              <div className="pt-6">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-forest/60 mb-4">
                  Division Members Roster
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Division Head if present */}
                  {activeDivision.head && (
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-lime-50/40 border border-emerald-200 flex items-center gap-3.5">
                      <InitialsAvatar initials={activeDivision.head.initials} gradient={activeDivision.head.accent} size="w-12 h-12 text-sm" />
                      <div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-600 text-white font-bold uppercase">
                          Division Head
                        </span>
                        <h6 className="font-display font-bold text-forest text-sm sm:text-base mt-1">
                          {activeDivision.head.name}
                        </h6>
                        <span className="text-xs text-forest/70">{activeDivision.name}</span>
                      </div>
                    </div>
                  )}

                  {/* Core Team Members */}
                  {activeDivision.coreTeam.map((member, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-cream/50 border border-cream-border hover:bg-white hover:border-emerald-300 hover:shadow-sm transition-all flex items-center gap-3.5"
                    >
                      <InitialsAvatar initials={member.initials} gradient="from-teal-400 to-emerald-600" size="w-12 h-12 text-sm" />
                      <div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-forest-surface text-gray-200 font-medium">
                          {member.role}
                        </span>
                        <h6 className="font-display font-bold text-forest text-sm sm:text-base mt-1">
                          {member.name}
                        </h6>
                        <span className="text-xs text-forest/65">{activeDivision.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
