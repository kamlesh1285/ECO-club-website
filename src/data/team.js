/**
 * Official Team Structure — Eco Club, ABES Engineering College.
 * STRICT POLICY: Only verified, official names are listed here.
 * Initials avatars are used with organic gradient rings; no unverified photos.
 */

export const facultyCounselors = [
  {
    name: "Mr. Abhishek Shukla",
    role: "Faculty Counselor",
    initials: "AS",
    department: "ABES Engineering College",
    accent: "from-emerald-500 to-lime-400"
  },
  {
    name: "Dr. Divyanshi Sharma",
    role: "Faculty Counselor",
    initials: "DS",
    department: "ABES Engineering College",
    accent: "from-teal-500 to-emerald-400"
  }
];

export const coreLeadership = [
  {
    name: "Abhinav Kumar",
    role: "General Secretary",
    initials: "AK",
    description: "Guiding club strategy, cross-division synergy, and campus environmental impact.",
    accent: "from-lime-400 to-emerald-600"
  },
  {
    name: "Shaurya Pratap Singh",
    role: "Joint Secretary",
    initials: "SS",
    description: "Overseeing operations, drive coordination, and student engagement initiatives.",
    accent: "from-emerald-500 to-teal-600"
  },
  {
    name: "To Be Announced",
    role: "Treasurer",
    initials: "TBA",
    description: "Managing club budgeting, resource allocation, and project sponsorships.",
    accent: "from-amber-400 to-emerald-600",
    isTBA: true
  }
];

export const divisions = [
  {
    id: "tech-project",
    name: "Tech & Project",
    tagline: "Sustainability through tech",
    description: "Engineering digital solutions, IoT sensors, dashboards, and automated tools for ecological protection.",
    icon: "Cpu",
    head: {
      name: "Sarthak Mishra",
      role: "Head",
      initials: "SM",
      accent: "from-lime-400 to-emerald-500"
    },
    coreTeam: [
      { name: "Himanshu Yadav", role: "Core Member", initials: "HY" },
      { name: "Tanishque Tyagi", role: "Core Member", initials: "TT" }
    ]
  },
  {
    id: "event-management",
    name: "Event & Management",
    tagline: "Drives, workshops & more",
    description: "Planning, organizing, and executing ground-level environmental drives, hackathons, and seminars.",
    icon: "Calendar",
    head: null,
    coreTeam: [
      { name: "Adarsh Singh", role: "Core Member", initials: "AS" },
      { name: "Raj Kurele", role: "Core Member", initials: "RK" },
      { name: "Shatakshi Chauhan", role: "Core Member", initials: "SC" }
    ]
  },
  {
    id: "social-media",
    name: "Social Media & Content",
    tagline: "The voice of the club",
    description: "Amplifying our environmental mission, storytelling, and digital campaign communication.",
    icon: "Megaphone",
    head: null,
    coreTeam: [
      { name: "Shivam Gupta", role: "Core Member", initials: "SG" },
      { name: "Sachin", role: "Core Member", initials: "S" },
      { name: "Srajan Gupta", role: "Core Member", initials: "SG" }
    ]
  },
  {
    id: "pr-outreach",
    name: "PR & Outreach",
    tagline: "Connecting with the world",
    description: "Building alliances with student bodies, green NGOs, environmentalists, and external colleges.",
    icon: "Globe",
    head: null,
    coreTeam: [
      { name: "Ashwin Pratap Singh", role: "Core Member", initials: "AP" },
      { name: "Saraswati Singh", role: "Core Member", initials: "SS" }
    ]
  },
  {
    id: "creative-decor",
    name: "Creative & Decor",
    tagline: "Designing a greener look",
    description: "Crafting sustainable art, recycled exhibition decor, posters, and visual brand identity.",
    icon: "Palette",
    head: null,
    coreTeam: [
      { name: "Shivendra Singh Baghel", role: "Core Member", initials: "SB" },
      { name: "Niyati Kharbanda", role: "Core Member", initials: "NK" }
    ]
  },
  {
    id: "registration",
    name: "Registration",
    tagline: "Welcoming every new member",
    description: "Facilitating membership onboarding, event registrations, participant databases, and inquiries.",
    icon: "UserCheck",
    head: null,
    coreTeam: [
      { name: "Ujjwal Singh", role: "Core Member", initials: "US" },
      { name: "Anand Rai", role: "Core Member", initials: "AR" }
    ]
  }
];
