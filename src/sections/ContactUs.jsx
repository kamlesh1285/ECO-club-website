import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, ExternalLink, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/config';
import { socialConfig, getActiveSocials } from '../data/socials';
import SectionHeading from '../components/SectionHeading';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const activeSocials = getActiveSocials();

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Valid email is required.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-cream-warm/40 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - 1 title + at most 2 lines subtitle */}
        <SectionHeading
          badge="GET IN TOUCH"
          title="Connect with the Eco Club"
          highlight="Team"
          description="Questions regarding upcoming drives, project collaborations, or student memberships? Send us a message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Contact details + Instagram Card + Map (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Contact Info Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-cream-border shadow-soft-organic space-y-4">
              <h3 className="heading-card font-display font-bold text-forest">
                Club Information
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-forest/80">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-700 block uppercase font-semibold">
                      Official Communications
                    </span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-forest hover:text-emerald transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-lime/20 text-leaf-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-700 block uppercase font-semibold">
                      Campus Desk Helpline
                    </span>
                    <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold text-forest hover:text-emerald transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Campus Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-emerald-700 block uppercase font-semibold">
                      Campus Headquarters
                    </span>
                    <p className="font-medium text-forest">
                      {siteConfig.contact.address}
                    </p>
                    <p className="text-xs text-forest/70 mt-0.5">
                      {siteConfig.contact.campusLocation}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dedicated Instagram Card */}
            <div className="bg-gradient-to-br from-forest-deep to-forest-surface text-white rounded-3xl p-5 sm:p-6 border border-lime/30 shadow-glow-lime/10">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm sm:text-base">
                    {socialConfig.instagramHandle}
                  </h4>
                  <span className="text-xs font-mono text-lime">Official Social Channel</span>
                </div>
              </div>

              <p className="text-xs text-gray-300 mb-3.5 leading-relaxed">
                {socialConfig.instagramTagline}
              </p>

              <a
                href={socialConfig.platforms[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-lime to-lime-bright text-forest-deep font-mono text-xs font-bold tracking-wider hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-sm"
                style={{ minHeight: '44px' }}
              >
                <span>FOLLOW ON INSTAGRAM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Map Container */}
            <div className="bg-white rounded-3xl p-3.5 border border-cream-border overflow-hidden shadow-soft-organic">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-forest-surface">
                <iframe
                  title="ABES Engineering College Location"
                  src={siteConfig.contact.mapEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="pt-2.5 px-1 flex items-center justify-between text-xs">
                <span className="font-mono text-forest/70">ABES EC · Campus 1</span>
                <a
                  href={siteConfig.contact.mapDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-cream-border shadow-lifted">
            <h3 className="heading-card font-display font-bold text-forest mb-1.5">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-forest/70 mb-5">
              Fill out the inquiry form and our student coordinators will reply during college hours.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-display font-semibold text-forest mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Adarsh Singh"
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm outline-none bg-cream/30"
                      style={{ minHeight: '44px' }}
                    />
                    {errors.name && <span className="text-xs text-red-600 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-display font-semibold text-forest mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. adarsh@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-cream-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm outline-none bg-cream/30"
                      style={{ minHeight: '44px' }}
                    />
                    {errors.email && <span className="text-xs text-red-600 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-display font-semibold text-forest mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Hackathon partnership / Drive query"
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-border text-sm outline-none bg-cream/30"
                    style={{ minHeight: '44px' }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-display font-semibold text-forest mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we assist you or collaborate?"
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm outline-none bg-cream/30 resize-none"
                  />
                  {errors.message && <span className="text-xs text-red-600 mt-1 block">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-forest-deep text-lime font-mono text-xs font-bold tracking-wider hover:bg-forest hover:shadow-glow-lime/25 transition-all flex items-center justify-center gap-2"
                  style={{ minHeight: '48px' }}
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-10 text-center space-y-3.5">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="heading-card font-display font-bold text-forest">
                  Message Transmitted!
                </h4>
                <p className="text-xs sm:text-sm text-forest/75 max-w-sm mx-auto">
                  Thank you for reaching out, <strong>{formData.name}</strong>. Our student team will follow up promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-forest-deep text-white text-xs font-mono font-semibold"
                  style={{ minHeight: '44px' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
