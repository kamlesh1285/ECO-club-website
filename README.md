# 🌱 Eco Club — ABES Engineering College, Ghaziabad

> **"THINK · ACT · CODE · WORK GREENER"**  
> Fusing engineering innovation, IoT technology, and on-ground environmental stewardship.

---

## 📌 Project Overview

This is the official web application for the **Eco Club at ABES Engineering College, Ghaziabad**, engineered by the **Tech & Project Division**.

The website embraces a dedicated design system:
- **Hero Section (Dark & Tech-Centric)**: Deep forest night (`#0B1F17`) featuring an interactive circuit-leaf particle canvas (with mouse repulsion and automatic pause when hidden), rotating wireframe eco-sphere, rotating typewriter line, and dual calls-to-action.
- **Content Sections (Warm Organic Light)**: Warm cream background (`#F6FBF3`), soft organic SVG wave transitions, rounded card surfaces, and accessible typography (`Space Grotesk` display headings with `clamp()`, `Inter` body text >= 16px, and `JetBrains Mono` tech labels >= 12px).

---

## ⚠️ Honesty & Sample Data Notice

In adherence to project and college presentation standards:
- **NO INVENTED FACTS**: We do not invent past achievements, award claims, or unverified numbers.
- **SAMPLE FIGURES & MOCKUPS**: All statistics (*trees planted, plastic recycled, participants*), upcoming calendar events, concept project prototypes, and gallery media are **SAMPLE DEMO DATA** explicitly labeled with clean in-UI `Sample` chips.
- **TEAM ROSTER**: Includes solely the official verified faculty counselors, board leadership, and division members provided by the club.

---

## 🚀 Key Features & Modules

1. **Sticky Glassmorphism Navbar**:
   - 8 main navigation links: **Home, About, Team, Projects, Tools, Gallery, Events, Contact**, plus the **Join Us** button.
   - Desktop pill nav with active section indicator via `useScrollSpy`.
   - Full-screen mobile menu with icons, large tap targets (44px+), and auto-close on link click or `Escape` key.
   - `scroll-padding-top` configured so headings are never hidden by the sticky bar.
2. **Hero & Interactive Canvas**:
   - One-line statement: *"ABES's student club using technology to protect our campus and planet."*
   - Hero pill: *"ABES ENGINEERING COLLEGE · ECO CLUB"*.
   - Dynamic typewriter cycling through motives.
   - Mobile-responsive layout: stacks small logo mark, headline, one-line text, full-width CTAs, and compact eco-sphere below text.
   - Canvas performance: 60% particle reduction on mobile, pauses when tab is hidden or hero is out of view, respects `prefers-reduced-motion`.
3. **Quick Links Strip**:
   - 4 large icon tiles (About, Projects, Events, Join Us) directly under the hero.
   - 1 row on desktop, 2x2 grid on mobile with 44px+ touch targets.
4. **Live Updates Ticker**:
   - Smooth pause-on-hover marquee strip for campus notices.
5. **About Us & "Why Tech for Nature?" & Impact Counters**:
   - Vision, Mission, and the 4 Core Pillars (*Think, Act, Code, Work Greener*).
   - "Why Tech for Nature?": *"We are the Eco Club of ABES Engineering College, Ghaziabad. We don't only promote green habits. We design sensor-based projects, build tools, and run ground drives to protect our campus ecosystem."*
   - Integrated Impact Targets counter (Trees Planted, Plastic Recycled, Participants, Drives Held) with scroll count-up animation and a clean sample label.
6. **Ways to Take Part**:
   - 3 actionable pathways: **Join a drive** (links to Events), **Build a project** (links to Projects), and **Spread the word** (links to Join Us).
7. **Our Team**:
   - Faculty Counselors (Mr. Abhishek Shukla, Dr. Divyanshi Sharma).
   - Core Leadership (General Secretary Abhinav Kumar, Joint Secretary Shaurya Pratap Singh, Treasurer TBA).
   - Filterable interactive tabs for all 6 divisions with gradient initials avatars and concise readable bios.
8. **Tech for the Planet (Tech & Project Division Showcase)**:
   - 4 concept engineering cards (**EcoSense**, **GreenSort**, **VoltWatch**, **GeoFlora**) with "Details" expandable toggle and direct link to join the project team.
9. **Client-Side Interactive Eco Tools**:
   - **Student Carbon Footprint Calculator**: 4-step quiz calculating estimated annual CO₂ tonnage with 3 personalized recommendations.
   - **Daily Sustainability Tip**: Generator cycling through 22 practical campus green habits with a quick clipboard share action.
10. **Curated Gallery & Media**:
    - Responsive grid (4 cols desktop, 3 tablet, 2 mobile).
    - Image `onError` fallback support.
    - Fullscreen Lightbox supporting keyboard arrows (`←`/`→`), `Escape`, and mobile touch swipe.
    - Video spotlight section with modal embed.
11. **Events & Live Countdown**:
    - Tabs for *Upcoming*, *Ongoing*, and *Past* events.
    - Desktop 3-column grid and mobile horizontal snap-swipe list.
    - Live countdown timer for the upcoming Green Hackathon.
    - Validated seat reservation modal with confirmation state.
12. **Campus Eco Pledge Wall**:
    - Interactive "Take the Eco Pledge" button that triggers an eco-leaf confetti burst.
13. **FAQ Accordion**:
    - 4 concise questions (*Who can join? What do members do? How do I register? Where do we meet?*). Meeting schedule marked as pending club confirmation.
14. **Join Us Membership Application**:
    - Form with real-time validation for branch, year, division, and statement.
15. **Contact & Social Spotlight**:
    - Inquiry message form, campus address, and Google Maps embed.
    - Dedicated Instagram card for `@abes_ecoclub`. All other channels cleanly disabled without blank slots.
16. **Global Polish**:
    - Scroll-progress reading bar.
    - Desktop-only custom cursor follower (disabled on touch devices).
    - Under-2-second leaf-growth splash screen.
    - Floating "Join Now" CTA button for mobile users.

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
│   ├── components/               # Reusable UI components
│   │   ├── CustomCursor.jsx
│   │   ├── FloatingJoinBtn.jsx
│   │   ├── Footer.jsx
│   │   ├── Modal.jsx
│   │   ├── Navbar.jsx            # 8-link nav + full-screen mobile menu
│   │   ├── QuickLinks.jsx        # 4 large icon tiles under Hero
│   │   ├── SampleBadge.jsx       # Clean uniform "Sample" badge
│   │   ├── ScrollProgress.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── SplashScreen.jsx
│   │   └── WaveDivider.jsx
│   ├── data/                     # Single source of truth data layer
│   │   ├── announcements.js      # Ticker notices
│   │   ├── carbonQuiz.js         # Carbon calculator logic
│   │   ├── config.js             # General site meta
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
│   │   ├── AboutUs.jsx           # Includes merged Impact counters
│   │   ├── WaysToParticipate.jsx # 3 pathway cards
│   │   ├── OurTeam.jsx
│   │   ├── TechShowcase.jsx      # Concept projects with details toggle
│   │   ├── EcoTools.jsx
│   │   ├── Gallery.jsx
│   │   ├── Events.jsx            # Grid on desktop, snap-swipe on mobile
│   │   ├── PledgeWall.jsx
│   │   ├── FAQ.jsx               # 4-item accordion
│   │   ├── JoinUs.jsx
│   │   └── ContactUs.jsx
│   ├── styles/
│   │   └── index.css             # Tailwind base & clamp utilities
│   ├── App.jsx
│   └── main.jsx
├── vercel.json                   # Vercel SPA rewrite rule
├── tailwind.config.js
└── package.json
```

---

## 💻 Local Development Setup

```bash
# 1. Navigate to project folder
cd "ECO club"

# 2. Install dependencies (if not already installed)
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
   git commit -m "feat: revised clean ABES Eco Club website"
   ```
2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/your-username/eco-club-abes.git
   git branch -M main
   git push -u origin main
   ```
3. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and click **"Add New Project"** → **"Import Git Repository"**.
   - Select your repository.
   - Framework Preset: **Vite** (auto-detected).
   - Build Command: `npm run build`.
   - Output Directory: `dist`.
   - Click **Deploy**.
