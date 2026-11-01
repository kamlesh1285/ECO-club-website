import React from 'react';

export default function SampleBadge({ text = "Sample", dark = false }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-mono font-semibold rounded-full border transition-all select-none ${
        dark
          ? "bg-forest-surface text-lime border-lime/30 shadow-[0_0_10px_rgba(183,243,74,0.15)]"
          : "bg-emerald-50 text-leaf-dark border-emerald-200"
      }`}
      title="Sample illustration content for preview"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 opacity-80" />
      <span>{text}</span>
    </span>
  );
}
