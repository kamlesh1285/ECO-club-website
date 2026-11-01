import React from 'react';
import SampleBadge from './SampleBadge';

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  center = true,
  dark = false,
  sampleDisclaimer = null
}) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-3 ${
          dark
            ? 'bg-lime/10 text-lime border border-lime/30'
            : 'bg-emerald-100/70 text-leaf border border-emerald-300/60'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {badge}
        </div>
      )}

      <h2 className={`heading-section font-display font-bold tracking-tight ${
        dark ? 'text-white' : 'text-forest'
      }`}>
        {title}{' '}
        {highlight && (
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald to-leaf">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className={`mt-3 text-base sm:text-lg leading-relaxed max-w-[70ch] mx-auto line-clamp-2 ${
          dark ? 'text-gray-300' : 'text-forest/75'
        }`}>
          {description}
        </p>
      )}

      {sampleDisclaimer && (
        <div className="mt-3.5 flex justify-center">
          <SampleBadge text={sampleDisclaimer} dark={dark} />
        </div>
      )}
    </div>
  );
}
