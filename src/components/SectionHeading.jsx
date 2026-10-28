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
    <div className={`mb-12 md:mb-16 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
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

      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight ${
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
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          dark ? 'text-gray-300' : 'text-forest/75'
        }`}>
          {description}
        </p>
      )}

      {sampleDisclaimer && (
        <div className="mt-4 flex justify-center">
          <SampleBadge text={sampleDisclaimer} dark={dark} />
        </div>
      )}
    </div>
  );
}
