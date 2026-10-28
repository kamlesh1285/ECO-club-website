/**
 * Tech & Project Division Showcase.
 * Highlights the "CODE" motto of the club.
 * NOTE: All projects listed are CONCEPT / SAMPLE PROJECTS designed by the division.
 */

export const conceptProjects = [
  {
    id: "aqi-dashboard",
    title: "EcoSense: Campus AQI Dashboard",
    category: "IoT & Data Analytics",
    status: "Concept / Prototype",
    tagline: "Real-time microclimate & particulate monitoring across college blocks",
    description: "A student-engineered wireless IoT sensor array measuring PM2.5, PM10, CO2, and humidity. Transmits live telemetry to a centralized student dashboard with air quality advisories.",
    techStack: ["React", "ESP32", "MQTT", "Node.js", "TailwindCSS"],
    highlights: [
      "Solar-assisted sensor nodes placed in green zones",
      "Threshold alerts for outdoor sporting activities",
      "Historical particulate density trends"
    ],
    githubUrl: "#", // Sample placeholder
    demoUrl: "#",
    isSample: true
  },
  {
    id: "waste-tracker",
    title: "GreenSort: Campus Waste & E-Waste Tracker",
    category: "Full Stack & Logistics",
    status: "Concept / Prototype",
    tagline: "QR-based segregation intelligence & recycling reward metrics",
    description: "A web platform that catalogs campus e-waste and plastic drop-offs. Students log recyclable deposits through QR codes to track collective carbon offset credits.",
    techStack: ["Next.js", "PostgreSQL", "QR Scanner API", "TailwindCSS"],
    highlights: [
      "Verified e-waste disposal with certified recyclers",
      "Departmental green leaderboard to encourage participation",
      "Automated weight and carbon offset calculations"
    ],
    githubUrl: "#",
    demoUrl: "#",
    isSample: true
  },
  {
    id: "energy-monitor",
    title: "VoltWatch: Classroom Energy Auditor",
    category: "Embedded Systems & AI",
    status: "Concept / Research",
    tagline: "Automated idle power consumption detection for labs & lecture halls",
    description: "An intelligent audit tool utilizing non-invasive CT current sensors and computer vision occupancy checks to identify unoccupied rooms running lighting or HVAC systems.",
    techStack: ["Python", "TensorFlow Lite", "Raspberry Pi", "Chart.js"],
    highlights: [
      "Non-intrusive current clamp sensors",
      "Campus energy footprint analytics report generator",
      "Projected 18% reduction in non-operational energy waste"
    ],
    githubUrl: "#",
    demoUrl: "#",
    isSample: true
  },
  {
    id: "tree-tracker",
    title: "GeoFlora: Tree Plantation Geo-Tracker",
    category: "GIS & Mobile Web",
    status: "Concept / Prototype",
    tagline: "GPS tagging & survival monitoring for every planted sapling",
    description: "A crowd-monitored spatial registry where each tree planted during Eco Club drives receives a unique geo-coordinate, species profile, and maintenance timeline with photo log updates.",
    techStack: ["React", "Leaflet GIS", "Firebase", "PWA"],
    highlights: [
      "Interactive satellite map of planted saplings on campus",
      "Survival rate tracking over 12-month growth cycles",
      "Volunteer watering reminders"
    ],
    githubUrl: "#",
    demoUrl: "#",
    isSample: true
  }
];
