import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ShieldCheck, Heart, Sparkles, Check } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function PledgeWall() {
  const [pledged, setPledged] = useState(false);
  const [pledgeCount, setPledgeCount] = useState(482); // Sample counter

  const triggerLeafBurst = () => {
    if (pledged) return;

    // Green leaf / eco themed confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#B7F34A', '#16A34A', '#2E7D32', '#10B981', '#F6FBF3']
    });

    setPledged(true);
    setPledgeCount(prev => prev + 1);
  };

  return (
    <section id="pledge" className="py-20 bg-cream-warm/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-white via-white to-emerald-50/40 rounded-3xl p-8 sm:p-12 border border-emerald-200 shadow-lifted text-center relative overflow-hidden">
          
          {/* Subtle eco leaf icon watermark */}
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-leaf flex items-center justify-center mx-auto mb-6 shadow-sm">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-leaf text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            CAMPUS ECO PLEDGE
          </span>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-forest tracking-tight">
            Take the Green Citizen Pledge
          </h2>

          <p className="mt-3 text-sm sm:text-base text-forest/75 max-w-2xl mx-auto leading-relaxed">
            Commit to mindful living, zero campus littering, responsible hardware recycling, and engineering software with low computational waste.
          </p>

          {/* 4 Pillars of Pledge */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8 text-left">
            {[
              "Refuse single-use plastics and disposable cups",
              "Segregate batteries and PCB e-waste into bins",
              "Power down computers, lights and ACs when leaving",
              "Think, act, and code for sustainable outcomes"
            ].map((text, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-cream-border text-xs text-forest/80 flex items-start gap-2.5 shadow-sm">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex flex-col items-center justify-center gap-3">
            <button
              onClick={triggerLeafBurst}
              disabled={pledged}
              className={`px-8 py-4 rounded-full font-display font-bold text-sm tracking-wider flex items-center gap-2.5 transition-all shadow-md ${
                pledged
                  ? 'bg-emerald-600 text-white cursor-default'
                  : 'bg-forest-deep text-lime hover:bg-forest hover:scale-105 active:scale-95 shadow-glow-lime/20'
              }`}
              style={{ minHeight: '48px' }}
            >
              {pledged ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>PLEDGE TAKEN — THANK YOU!</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-lime" />
                  <span>TAKE THE ECO PLEDGE</span>
                </>
              )}
            </button>

            <span className="text-xs font-mono text-emerald-800">
              🌱 {pledgeCount} students have taken the green pledge (Local sample counter)
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
