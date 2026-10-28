import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function SampleBadge({ text = "Sample Data — To be replaced with real data", dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-full border transition-all ${
        dark
          ? "bg-forest-surface/80 text-lime border-lime/30 shadow-[0_0_12px_rgba(183,243,74,0.15)]"
          : "bg-emerald-50 text-leaf-dark border-emerald-200"
      }`}
      title="This content is sample demonstration data as permitted by assignment guidelines."
    >
      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
      <span>{text}</span>
    </span>
  );
}
