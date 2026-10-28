import fs from 'fs';
import path from 'path';

const galleryDir = '/Users/kamleshkumar/.gemini/antigravity/scratch/eco-club-website/public/assets/gallery';

const images = [
  {
    name: 'plantation-1.svg',
    title: 'Monsoon Campus Tree Drive',
    category: 'Plantation',
    date: 'August 2025 (Sample)',
    color1: '#0B3B24',
    color2: '#16A34A',
    icon: '🌱'
  },
  {
    name: 'plantation-2.svg',
    title: 'Perimeter Native Flora Drive',
    category: 'Plantation',
    date: 'October 2025 (Sample)',
    color1: '#1B4D3E',
    color2: '#22C55E',
    icon: '🌳'
  },
  {
    name: 'drives-1.svg',
    title: 'E-Waste Segregation Sprint',
    category: 'Drives',
    date: 'November 2025 (Sample)',
    color1: '#0F2C22',
    color2: '#10B981',
    icon: '🔋'
  },
  {
    name: 'drives-2.svg',
    title: 'Plastic-Free Campus Campaign',
    category: 'Drives',
    date: 'January 2026 (Sample)',
    color1: '#0A3323',
    color2: '#34D399',
    icon: '♻️'
  },
  {
    name: 'workshops-1.svg',
    title: 'IoT Green Sensors Workshop',
    category: 'Workshops',
    date: 'February 2026 (Sample)',
    color1: '#133024',
    color2: '#B7F34A',
    icon: '⚡'
  },
  {
    name: 'workshops-2.svg',
    title: 'Upcycling & Sustainable Design',
    category: 'Workshops',
    date: 'March 2026 (Sample)',
    color1: '#164230',
    color2: '#86EFAC',
    icon: '🎨'
  },
  {
    name: 'awareness-1.svg',
    title: 'World Earth Day Seminar',
    category: 'Awareness',
    date: 'April 2026 (Sample)',
    color1: '#08281C',
    color2: '#4ADE80',
    icon: '🌍'
  },
  {
    name: 'awareness-2.svg',
    title: 'Biodiversity Walk & Census',
    category: 'Awareness',
    date: 'May 2026 (Sample)',
    color1: '#0E3A2B',
    color2: '#A3E635',
    icon: '🌿'
  }
];

images.forEach(img => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${img.color1}" />
      <stop offset="100%" stop-color="${img.color2}" />
    </linearGradient>
    <pattern id="circuits" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 10,0 L 10,40 M 0,20 L 40,20 M 30,10 L 30,30" stroke="rgba(255,255,255,0.06)" stroke-width="1.5" fill="none" />
      <circle cx="10" cy="20" r="3" fill="rgba(183,243,74,0.2)" />
      <circle cx="30" cy="20" r="2" fill="rgba(255,255,255,0.2)" />
    </pattern>
  </defs>
  
  <rect width="800" height="600" fill="url(#grad)" />
  <rect width="800" height="600" fill="url(#circuits)" />
  
  <g transform="translate(400, 240)">
    <circle r="75" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(183, 243, 74, 0.3)" stroke-width="2" />
    <text text-anchor="middle" dominant-baseline="central" font-size="64">${img.icon}</text>
  </g>
  
  <g transform="translate(400, 390)">
    <rect x="-110" y="-18" width="220" height="36" rx="18" fill="rgba(0,0,0,0.3)" stroke="rgba(183,243,74,0.4)" stroke-width="1" />
    <text text-anchor="middle" dominant-baseline="central" fill="#B7F34A" font-family="monospace" font-size="14" font-weight="bold" letter-spacing="1.5">${img.category.toUpperCase()} · SAMPLE</text>
  </g>

  <text x="400" y="470" text-anchor="middle" fill="#FFFFFF" font-family="sans-serif" font-weight="700" font-size="28">${img.title}</text>
  <text x="400" y="515" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-family="sans-serif" font-size="16">${img.date} — ABES EC</text>
  
  <rect x="20" y="20" width="760" height="560" rx="12" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" />
</svg>`;

  fs.writeFileSync(path.join(galleryDir, img.name), svg.trim());
});

console.log('Gallery SVG assets generated successfully!');
