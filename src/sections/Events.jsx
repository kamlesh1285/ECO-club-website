import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Tag, ArrowRight, CheckCircle2, Timer, AlertCircle } from 'lucide-react';
import { eventsData, getNextUpcomingEvent } from '../data/events';
import { siteConfig } from '../data/config';
import SectionHeading from '../components/SectionHeading';
import Modal from '../components/Modal';

export default function Events() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedTag, setSelectedTag] = useState("All");
  const [registeringEvent, setRegisteringEvent] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: "Computer Science & Engineering",
    year: "2nd Year"
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Countdown timer for next event
  const nextEvent = getNextUpcomingEvent();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (!nextEvent) return;

    const target = new Date(nextEvent.isoDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = Math.max(target - now, 0);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [nextEvent]);

  // Tab Filtering
  const tabEvents = eventsData.filter(e => e.status === activeTab);
  
  // Extract unique tags for the active tab
  const allTags = ["All", ...Array.from(new Set(tabEvents.flatMap(e => e.tags)))];
  
  const filteredEvents = selectedTag === "All"
    ? tabEvents
    : tabEvents.filter(e => e.tags.includes(selectedTag));

  // Form Validation & Submission
  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    if (!formData.email.trim()) {
      errs.email = "College email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setRegistrationSuccess(true);
    }, 700);
  };

  const handleCloseModal = () => {
    setRegisteringEvent(null);
    setRegistrationSuccess(false);
    setErrors({});
    setFormData({
      name: "",
      email: "",
      branch: "Computer Science & Engineering",
      year: "2nd Year"
    });
  };

  return (
    <section id="events" className="py-20 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="CAMPUS CALENDAR"
          title="Green Drives & Technical"
          highlight="Events"
          description="Stay informed about upcoming green hackathons, sapling plantation days, campus cleanups, and eco-workshops."
          sampleDisclaimer="Sample events schedule — with verified future dates"
        />

        {/* Live Countdown Banner to Next Upcoming Event */}
        {nextEvent && (
          <div className="mb-12 bg-gradient-to-r from-forest-deep via-forest-surface to-forest-deep text-white rounded-3xl p-6 sm:p-8 border border-lime/30 shadow-xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime/20 text-lime font-mono text-xs uppercase font-bold tracking-wider">
                  <Timer className="w-3.5 h-3.5" />
                  <span>NEXT UPCOMING EVENT · SAMPLE</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold">
                  {nextEvent.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 flex items-center justify-center lg:justify-start gap-4 flex-wrap">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-lime" /> {nextEvent.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-lime" /> {nextEvent.venue}</span>
                </p>
              </div>

              {/* Countdown Digits */}
              <div className="flex items-center gap-3 text-center font-mono">
                <div className="bg-forest-surface/90 border border-lime/30 p-3 rounded-2xl min-w-[64px]">
                  <span className="text-2xl sm:text-3xl font-bold text-lime block leading-none">{timeLeft.days}</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 block">Days</span>
                </div>
                <span className="text-xl font-bold text-lime/60">:</span>
                <div className="bg-forest-surface/90 border border-lime/30 p-3 rounded-2xl min-w-[64px]">
                  <span className="text-2xl sm:text-3xl font-bold text-lime block leading-none">{timeLeft.hours}</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 block">Hours</span>
                </div>
                <span className="text-xl font-bold text-lime/60">:</span>
                <div className="bg-forest-surface/90 border border-lime/30 p-3 rounded-2xl min-w-[64px]">
                  <span className="text-2xl sm:text-3xl font-bold text-lime block leading-none">{timeLeft.minutes}</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 block">Mins</span>
                </div>
                <span className="text-xl font-bold text-lime/60">:</span>
                <div className="bg-forest-surface/90 border border-lime/30 p-3 rounded-2xl min-w-[64px]">
                  <span className="text-2xl sm:text-3xl font-bold text-lime block leading-none">{timeLeft.seconds}</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 block">Secs</span>
                </div>
              </div>

              <button
                onClick={() => setRegisteringEvent(nextEvent)}
                className="px-6 py-3 rounded-full bg-lime text-forest-deep font-bold font-mono text-xs tracking-wider hover:bg-lime-bright transition-all shadow-glow-lime whitespace-nowrap"
                style={{ minHeight: '44px' }}
              >
                RESERVE A SEAT
              </button>
            </div>
          </div>
        )}

        {/* Tab Buttons (Upcoming / Ongoing / Past) */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {[
            { id: "upcoming", label: "Upcoming Events" },
            { id: "ongoing", label: "Ongoing Drives" },
            { id: "past", label: "Past Events" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSelectedTag("All");
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-forest-deep text-lime shadow-md border border-lime/30'
                  : 'bg-white text-forest/75 hover:bg-white/90 border border-cream-border'
              }`}
              style={{ minHeight: '44px' }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tag Filters */}
        {allTags.length > 2 && (
          <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedTag === tag
                    ? 'bg-emerald-100 text-leaf font-bold border border-emerald-300'
                    : 'bg-white/70 text-forest/70 hover:bg-white border border-cream-border'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        )}

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-cream-border shadow-soft-organic hover:shadow-lifted hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase ${
                    evt.status === 'upcoming'
                      ? 'bg-emerald-100 text-leaf'
                      : evt.status === 'ongoing'
                      ? 'bg-amber-100 text-amber-800 animate-pulse'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {evt.status} · SAMPLE
                  </span>
                  
                  {evt.status === 'upcoming' && (
                    <span className="text-[11px] font-mono text-emerald-600">
                      {evt.spotsRemaining} spots left
                    </span>
                  )}
                </div>

                <h4 className="text-xl font-display font-bold text-forest hover:text-emerald transition-colors line-clamp-2">
                  {evt.title}
                </h4>

                {/* Metadata */}
                <div className="mt-4 space-y-1.5 text-xs text-forest/75 font-sans">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald flex-shrink-0" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald flex-shrink-0" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald flex-shrink-0" />
                    <span className="truncate">{evt.venue}</span>
                  </div>
                </div>

                <p className="text-xs text-forest/70 mt-4 leading-relaxed line-clamp-3">
                  {evt.description}
                </p>
              </div>

              {/* Tags & Action Button */}
              <div className="mt-6 pt-4 border-t border-cream-border">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {evt.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono bg-cream px-2 py-0.5 rounded text-forest/65">
                      #{t}
                    </span>
                  ))}
                </div>

                {evt.status !== 'past' ? (
                  <button
                    onClick={() => setRegisteringEvent(evt)}
                    className="w-full py-2.5 px-4 rounded-xl bg-forest-deep text-white font-mono text-xs font-bold hover:bg-forest-surface hover:text-lime transition-all flex items-center justify-center gap-2 shadow-sm"
                    style={{ minHeight: '44px' }}
                  >
                    <span>REGISTER FOR SEAT</span>
                    <ArrowRight className="w-3.5 h-3.5 text-lime" />
                  </button>
                ) : (
                  <div className="w-full py-2 text-center text-xs font-mono text-gray-500 bg-gray-50 rounded-xl">
                    Event Successfully Concluded
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Registration Modal */}
      <Modal
        isOpen={Boolean(registeringEvent)}
        onClose={handleCloseModal}
        title={registeringEvent ? `Register: ${registeringEvent.title}` : "Event Registration"}
        maxWidth="max-w-md"
      >
        {registeringEvent && (
          <div>
            {!registrationSuccess ? (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div className="p-3 rounded-xl bg-cream border border-cream-border text-xs text-forest/80 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald flex-shrink-0" />
                  <span><strong>{registeringEvent.date}</strong> — {registeringEvent.time}</span>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-display font-semibold text-forest mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarthak Mishra"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm outline-none"
                    style={{ minHeight: '44px' }}
                  />
                  {errors.name && <span className="text-[11px] text-red-600 mt-1 block">{errors.name}</span>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-display font-semibold text-forest mb-1">
                    Student / College Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarthak.22b0123@abes.ac.in"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm outline-none"
                    style={{ minHeight: '44px' }}
                  />
                  {errors.email && <span className="text-[11px] text-red-600 mt-1 block">{errors.email}</span>}
                </div>

                {/* Branch & Year */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-display font-semibold text-forest mb-1">
                      Academic Branch
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-cream-border bg-white text-xs outline-none"
                      style={{ minHeight: '44px' }}
                    >
                      <option>CSE</option>
                      <option>CSE (AI/ML)</option>
                      <option>CSE (Data Science)</option>
                      <option>IT</option>
                      <option>ECE</option>
                      <option>EN</option>
                      <option>ME</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-display font-semibold text-forest mb-1">
                      Year
                    </label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-cream-border bg-white text-xs outline-none"
                      style={{ minHeight: '44px' }}
                    >
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                    </select>
                  </div>
                </div>

                {/* Honesty note about Demo Mode */}
                <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-800 flex items-start gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  <span>Demo Mode: Submissions validate on client. Connect your Google Form / Webhook in <code>src/data/config.js</code>.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-leaf text-white font-mono text-xs font-bold hover:from-emerald-500 hover:to-leaf-light transition-all flex items-center justify-center gap-2"
                  style={{ minHeight: '44px' }}
                >
                  {isSubmitting ? (
                    <span>Registering...</span>
                  ) : (
                    <>
                      <span>CONFIRM REGISTRATION</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success Animation Screen */
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-display font-bold text-forest">
                  Registration Confirmed!
                </h4>
                <p className="text-xs text-forest/75 max-w-xs mx-auto">
                  Thank you, <strong>{formData.name}</strong>! We've simulated your registration for <strong>{registeringEvent.title}</strong>.
                </p>
                <div className="p-3 rounded-xl bg-cream border border-cream-border text-[11px] font-mono text-emerald-700">
                  Venue: {registeringEvent.venue} · {registeringEvent.date}
                </div>
                <button
                  onClick={handleCloseModal}
                  className="w-full py-2.5 rounded-xl bg-forest-deep text-white text-xs font-mono font-bold"
                  style={{ minHeight: '44px' }}
                >
                  DONE
                </button>
              </div>
            )}
          </div>
        )}
      </Modal>

    </section>
  );
}
