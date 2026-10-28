import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import FloatingJoinBtn from './components/FloatingJoinBtn';
import SplashScreen from './components/SplashScreen';

// Sections in exact order
import Hero from './sections/Hero';
import Announcements from './sections/Announcements';
import AboutUs from './sections/AboutUs';
import ImpactCounter from './sections/ImpactCounter';
import OurTeam from './sections/OurTeam';
import TechShowcase from './sections/TechShowcase';
import EcoTools from './sections/EcoTools';
import Gallery from './sections/Gallery';
import Events from './sections/Events';
import PledgeWall from './sections/PledgeWall';
import JoinUs from './sections/JoinUs';
import ContactUs from './sections/ContactUs';

export default function App() {
  const [splashFinished, setSplashFinished] = useState(false);

  return (
    <div className="relative min-h-screen bg-cream text-forest flex flex-col font-sans selection:bg-lime selection:text-forest">
      {/* 1. Splash Screen (< 2s) */}
      <SplashScreen onComplete={() => setSplashFinished(true)} />

      {/* 2. Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* 3. Subtle Desktop Custom Cursor */}
      <CustomCursor />

      {/* 4. Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Slim Announcements Ticker */}
        <Announcements />

        {/* About Us & "Why Tech for Nature?" */}
        <AboutUs />

        {/* Eco Impact Counter (Animated on scroll) */}
        <ImpactCounter />

        {/* Our Team (Faculty, Core Leadership, Division Tabs) */}
        <OurTeam />

        {/* Tech for the Planet Showcase */}
        <TechShowcase />

        {/* Interactive Eco Tools: Carbon Calculator & Daily Tips */}
        <EcoTools />

        {/* Gallery with Filters & Lightbox */}
        <Gallery />

        {/* Events with Countdown & Registration */}
        <Events />

        {/* Pledge Wall with Confetti Burst */}
        <PledgeWall />

        {/* Join Us Application Form */}
        <JoinUs />

        {/* Contact Us & Map */}
        <ContactUs />
      </main>

      {/* Mobile Floating Action Button */}
      <FloatingJoinBtn />

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}
