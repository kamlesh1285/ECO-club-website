# 🌱 Eco Club — ABES Engineering College, Ghaziabad

> **"THINK · ACT · CODE · WORK GREENER"**  
> Fusing cutting-edge engineering, IoT technology, and environmental stewardship to build a sustainable tomorrow.

---

## 📌 Project Overview

This is the official web application for the **Eco Club at ABES Engineering College, Ghaziabad**, conceptualized and developed by the **Tech & Project Division**.

The website embraces a unique design system:
- **Hero Section (Dark & Tech-Centric)**: Deep forest night (`#0B1F17`) featuring an interactive circuit-leaf particle canvas, rotating wireframe eco-sphere, dynamic typewriter line, and dual calls-to-action.
- **Content Sections (Warm Organic Light)**: Warm cream background (`#F6FBF3`), soft organic SVG wave transitions, rounded card surfaces, and accessible typography (`Space Grotesk` for display headings, `Inter` for body copy, and `JetBrains Mono` for tech tags).

---

## ⚠️ Strict Honesty & Sample Data Notice

In adherence to project and college presentation standards:
- **NO INVENTED FACTS**: We do not invent past achievements, award claims, or unverified numbers.
- **SAMPLE FIGURES & MOCKUPS**: All statistics (*trees planted, plastic recycled, participants*), upcoming calendar events, concept project repositories, and gallery media are **SAMPLE DEMO DATA** explicitly labeled with visible in-UI badges (`SAMPLE DATA`, `CONCEPT / PROTOTYPE`).
- **TEAM ROSTER**: Includes solely the official verified faculty counselors, board leadership, and division members provided by the club.

---

## 🚀 Key Features & Modules

1. **Sticky Glassmorphism Navbar**:
   - Dynamic glass blur on scroll, active section indicator via `useScrollSpy`, 44px+ touch targets, and accessible animated mobile menu.
2. **Hero & Interactive Canvas**:
   - Custom HTML5 canvas simulating dynamic leaf-circuit data nodes with mouse repulsion and subtle distance interconnects.
   - Dual-axis rotating wireframe eco-sphere + live typewriter cycling through *"Save. Protect. Solve."*.
3. **Slim Live Updates Ticker**:
   - Smooth pause-on-hover marquee strip directly beneath the hero for sample announcements.
4. **About Us & "Why Tech for Nature?"**:
   - Official mission, vision, and core four pillars (*Think, Act, Code, Work Greener*).
   - Dedicated editorial highlighting how IoT telemetry and algorithms multiply traditional conservation impact.
5. **Eco Impact Counter**:
   - Animated count-up numbers triggered upon viewport entry via `IntersectionObserver` with a prominent visible honesty disclaimer.
6. **Our Team**:
   - Faculty Counselors, Core Leadership (General Secretary, Joint Secretary, Treasurer TBA).
   - Division-wise filterable tabs (Tech & Project, Event & Management, Social Media, PR & Outreach, Creative & Decor, Registration) featuring initials avatars with organic gradient rings.
7. **Tech for the Planet (Tech & Project Division Showcase)**:
   - 4 concept engineering cards:
     - **EcoSense**: Campus AQI & Microclimate IoT Dashboard (ESP32 + MQTT)
     - **GreenSort**: Smart Campus Waste & E-Waste Tracker
     - **VoltWatch**: Classroom Idle Energy Auditor (Embedded CT Sensors)
     - **GeoFlora**: Tree Plantation GPS Geotagger & Survival Monitor
8. **Client-Side Interactive Eco Tools**:
   - **Student Carbon Footprint Calculator**: 4-step quiz calculating estimated annual CO₂ tonnage with 3 personalized recommendations and an approximation disclaimer.
   - **Daily Sustainability Tip**: Interactive generator cycling through 22+ practical campus green habits with a quick clipboard share action.
9. **Curated Gallery & Media**:
   - Responsive grid with filter chips (*Drives, Workshops, Awareness, Plantation*).
   - Fullscreen Lightbox supporting keyboard arrows (`←`/`→`), `Escape`, and mobile touch swipe.
   - Video spotlight section with accessible modal embed.
10. **Events & Live Countdown**:
    - Tabs for *Upcoming*, *Ongoing*, and *Past* events.
    - Verified future-dated countdown timer for the next upcoming event.
    - Full event registration modal with client-side validation and simulated success animation.
11. **Campus Eco Pledge Wall**:
    - Interactive "Take the Eco Pledge" button that triggers an eco-leaf confetti burst.
12. **Join Us Onboarding Form**:
    - Comprehensive application form with real-time validation and configuration link for Google Forms.
13. **Contact & Social Spotlight**:
    - Interactive contact inquiry form, campus address, and Google Maps embed.
    - **Single Active Social Channel**: Dedicated high-contrast Instagram spotlight card for `@abes_ecoclub`. All other channels are cleanly disabled in `src/data/socials.js` without awkward blank slots.
14. **Accessibility & Extra Polish**:
    - Scroll-progress reading bar.
    - Subtle custom cursor follower on desktop.
    - Under-2-second leaf-growth splash screen.
    - Floating "Join Now" CTA button for mobile users.
    - Full `prefers-reduced-motion` compliance.

---

## 🛠️ Tech Stack

- **Framework**: React.js 18 (Vite)
- **Styling**: Tailwind CSS 3.4
- **Animation**: Framer Motion 11
- **Icons**: Lucide React
- **Confetti**: Canvas Confetti
- **Typography**: Space Grotesk, Inter, JetBrains Mono (Google Fonts)

---

## 📂 Project Structure

```
eco-club-website/
├── public/
│   ├── assets/
│   │   ├── logo-icon.png         # 512x512 official emblem
│   │   ├── logo-full.png         # 1024x302 horizontal brandmark
│   │   └── gallery/              # SVG sample gallery items
│   ├── index.html                # SEO meta tags, OpenGraph, Favicon
│   └── robots.txt
├── src/
│   ├── components/               # Reusable atomic UI components
│   │   ├── CustomCursor.jsx
│   │   ├── FloatingJoinBtn.jsx
│   │   ├── Footer.jsx
│   │   ├── Modal.jsx
│   │   ├── Navbar.jsx
│   │   ├── SampleBadge.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── SplashScreen.jsx
│   │   └── WaveDivider.jsx
│   ├── data/                     # Single source of truth data layer
│   │   ├── announcements.js      # Ticker notices
│   │   ├── carbonQuiz.js         # Carbon calculator logic & questions
│   │   ├── config.js             # General site meta & TODOs
│   │   ├── ecoTips.js            # 22 campus sustainability tips
│   │   ├── events.js             # Event schedules & future dates
│   │   ├── gallery.js            # Photos & videos
│   │   ├── projects.js           # Concept tech projects
│   │   ├── socials.js            # Instagram & social configurations
│   │   ├── stats.js              # Eco impact counter metrics
│   │   └── team.js               # Official faculty & student roster
│   ├── hooks/
│   │   ├── useCountUp.js         # Smooth counter animation
│   │   └── useScrollSpy.js       # Active navbar link tracker
│   ├── sections/                 # Main page sections (in required order)
│   │   ├── Hero.jsx
│   │   ├── Announcements.jsx
│   │   ├── AboutUs.jsx
│   │   ├── ImpactCounter.jsx
│   │   ├── OurTeam.jsx
│   │   ├── TechShowcase.jsx
│   │   ├── EcoTools.jsx
│   │   ├── Gallery.jsx
│   │   ├── Events.jsx
│   │   ├── PledgeWall.jsx
│   │   ├── JoinUs.jsx
│   │   └── ContactUs.jsx
│   ├── styles/
│   │   └── index.css             # Tailwind base & glass utilities
│   ├── App.jsx                   # Master layout
│   └── main.jsx
├── vercel.json                   # Vercel SPA rewrite rule
├── tailwind.config.js
└── package.json
```

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation & Run
```bash
# 1. Clone repository or navigate to project folder
cd "ECO club"

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
```

The app will be available at `http://localhost:3000` (or the port specified by Vite).

---

## ☁️ Deployment Guide (Vercel)

The codebase includes `vercel.json` with single-page app rewrite configuration:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Steps to Deploy:
1. **Initialize Git Repository**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of ABES Eco Club official website"
   ```
2. **Push to GitHub / GitLab**:
   ```bash
   git remote add origin https://github.com/your-username/eco-club-abes.git
   git branch -M main
   git push -u origin main
   ```
3. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New Project"** → **"Import Git Repository"**.
   - Select your `eco-club-abes` repository.
   - Framework Preset: **Vite** (auto-detected).
   - Build Command: `npm run build`.
   - Output Directory: `dist`.
   - Click **Deploy**.

---

## ⏱️ 2-Minute Presentation Demo Script

*Use this structured walkthrough for club reviews, evaluator demos, or tech showcase submissions:*

| Timestamp | Screen / Section | Key Points to Narrate & Demonstrate |
|---|---|---|
| **0:00 – 0:20** | **Hero & Splash** | *"Notice the under-2-second brandmark intro. Our hero highlights the dark tech theme—interactive particle canvas connecting data and nature on mouse hover, typewriter rotating our motive, and the official motto 'Think · Act · Code · Work Greener'."* |
| **0:20 – 0:45** | **About Us & Tech Philosophy** | *"Scrolling down, notice the organic wave transition into the warm light palette. We present our vision, mission, and our 'Why Tech for Nature' philosophy explaining how student engineering multiplies environmental action."* |
| **0:45 – 1:05** | **Impact Counter & Team** | *"Counters count up dynamically into view with clear sample data disclosures. The Team section showcases verified faculty mentors, board leadership, and filterable tabs for all 6 divisions with initials avatars."* |
| **1:05 – 1:25** | **Tech Showcase & Eco Tools** | *"Here is our 'Code' highlight: 4 concept green tech cards. Right below are client-side tools: an interactive Carbon Calculator that gives instant personalized tips, and a daily eco-tip generator with 22+ habits."* |
| **1:25 – 1:45** | **Gallery & Events** | *"Our gallery features category filters and a keyboard-navigable Lightbox. The Events section features a live countdown timer to the upcoming Green Hackathon and a fully validated modal registration flow."* |
| **1:45 – 2:00** | **Pledge, Join Us & Social** | *"Click 'Take the Eco Pledge' for an eco-leaf confetti burst. Finally, our Join Us application form validates student details, and our contact footer spotlights our official Instagram channel."* |

---

## 📝 Configuration TODOs Checklist

Before final club launch, update these placeholders:

- [ ] **Instagram Handle**: Confirm between `@abes_ecoclub` vs `@ecoclub_abes` in `src/data/socials.js`.
- [ ] **Contact Email & Phone**: Update `ecoclub@abes.ac.in` and desk phone in `src/data/config.js`.
- [ ] **Google Form Link**: Connect official Google Form / API webhook URL in `src/data/config.js`.
- [ ] **Treasurer Name**: Update `"To Be Announced"` in `src/data/team.js` when elected.
- [ ] **Footer Credits**: Verify phrasing with Tech Head in `src/data/config.js`.
- [ ] **Impact Figures**: Replace sample numbers with annual audited figures in `src/data/stats.js`.
- [ ] **Real Photos**: Swap SVG placeholders in `/public/assets/gallery/` with high-res event photography.
