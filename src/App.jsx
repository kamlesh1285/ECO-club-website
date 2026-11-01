import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import FloatingJoinBtn from './components/FloatingJoinBtn';
import SplashScreen from './components/SplashScreen';
import QuickLinks from './components/QuickLinks';

// Sections in required order
import Hero from './sections/Hero';
import Announcements from './sections/Announcements';
import AboutUs from './sections/AboutUs';
import WaysToParticipate from './sections/WaysToParticipate';
import OurTeam from './sections/OurTeam';
import TechShowcase from './sections/TechShowcase';
import EcoTools from './sections/EcoTools';
import Gallery from './sections/Gallery';
import Events from './sections/Events';
import PledgeWall from './sections/PledgeWall';
import FAQ from './sections/FAQ';
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

        {/* Quick Links Strip (Directly under Hero as requested in Point 6) */}
        <QuickLinks />

        {/* Slim Announcements Ticker */}
        <Announcements />

        {/* About Us & "Why Tech for Nature?" & Merged Impact Counters (Point 2 & 9) */}
        <AboutUs />

        {/* Ways to Take Part (3 Cards: Join a drive, Build a project, Spread the word - Point 7) */}
        <WaysToParticipate />

        {/* Our Team (Faculty, Core Leadership, Division Tabs) */}
        <OurTeam />

        {/* Tech for the Planet Showcase (Projects) */}
        <TechShowcase />

        {/* Interactive Eco Tools: Carbon Calculator & Daily Tips */}
        <EcoTools />

        {/* Gallery with Filters & Lightbox */}
        <Gallery />

        {/* Events with Countdown & Snap Carousel / Grid */}
        <Events />

        {/* Pledge Wall with Confetti Burst */}
        <PledgeWall />

        {/* FAQ Accordion (4 questions - Point 8) */}
        <FAQ />

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
