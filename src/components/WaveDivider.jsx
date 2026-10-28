import React from 'react';

export default function WaveDivider({ from = "forest", to = "cream", flip = false }) {
  // Color hexes
  const colors = {
    forest: "#0B1F17",
    cream: "#F6FBF3",
    white: "#FFFFFF",
    warmCream: "#EDF5E8"
  };

  const fill = colors[to] || "#F6FBF3";
  const bg = colors[from] || "#0B1F17";

  return (
    <div 
      className={`w-full overflow-hidden leading-none select-none pointer-events-none -mb-1 ${flip ? 'rotate-180' : ''}`}
      style={{ backgroundColor: bg }}
      aria-hidden="true"
    >
      <svg
        className="block w-full h-10 sm:h-16 md:h-20 lg:h-24"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill={fill}
      >
        <path d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
      </svg>
    </div>
  );
}
