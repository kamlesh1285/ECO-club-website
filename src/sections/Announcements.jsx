import React, { useState } from 'react';
import { Volume2, ChevronRight, Pause, Play } from 'lucide-react';
import { announcements } from '../data/announcements';

export default function Announcements() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      id="announcements"
      className="bg-forest-surface border-y border-forest-border/80 text-white py-2.5 px-4 overflow-hidden relative z-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Ticker Title Badge */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-lime/15 border border-lime/30 text-lime text-xs font-mono font-bold uppercase tracking-wider">
            <Volume2 className="w-3.5 h-3.5 animate-pulse" />
            <span>Updates</span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
            Sample Ticker
          </span>
        </div>

        {/* Marquee Track */}
        <div className="overflow-hidden flex-1 relative h-6 flex items-center">
          <div
            className={`flex items-center gap-12 whitespace-nowrap text-xs sm:text-sm font-sans transition-all ${
              isPaused ? '' : 'animate-marquee'
            }`}
            style={{
              animation: isPaused ? 'none' : 'marquee 35s linear infinite'
            }}
          >
            {announcements.concat(announcements).map((item, index) => (
              <a
                key={`${item.id}-${index}`}
                href={item.link}
                className="inline-flex items-center gap-2 text-gray-200 hover:text-lime transition-colors group cursor-pointer"
              >
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/10 text-lime uppercase tracking-wider">
                  {item.tag}
                </span>
                <span>{item.text}</span>
                <ChevronRight className="w-3 h-3 text-lime opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? "Resume ticker" : "Pause ticker"}
          className="p-1 text-gray-400 hover:text-lime rounded transition-colors flex-shrink-0"
        >
          {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
        </button>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
}
