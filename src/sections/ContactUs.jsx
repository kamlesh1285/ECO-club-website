import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
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
    }, 700);
  };

  return (
    <section id="contact" className="py-20 bg-cream-warm/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="GET IN TOUCH"
          title="Connect with the Eco Club"
          highlight="Team"
          description="Have questions regarding upcoming campus drives, technical project partnerships, or student memberships? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact details + Instagram Card + Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Info Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-border shadow-soft-organic space-y-5">
              <h3 className="font-display font-bold text-xl text-forest">
                Club Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-forest/80">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-700 block uppercase font-semibold">
                      Email Address
                    </span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-forest hover:text-emerald transition-colors">
                      {siteConfig.contact.email}
                    </a>
                    <span className="block text-[10px] font-mono text-gray-500 mt-0.5">
                      (TODO: Confirm official email address)
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-lime/20 text-leaf-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-700 block uppercase font-semibold">
                      Desk Helpline
                    </span>
                    <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold text-forest hover:text-emerald transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                    <span className="block text-[10px] font-mono text-gray-500 mt-0.5">
                      (TODO: Add dedicated phone contact)
                    </span>
                  </div>
                </div>

                {/* Campus Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-700 block uppercase font-semibold">
                      Campus Headquarters
                    </span>
                    <p className="font-medium text-forest">
                      {siteConfig.contact.address}
                    </p>
                    <p className="text-[11px] text-forest/70 mt-0.5">
                      {siteConfig.contact.campusLocation}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dedicated Instagram Card */}
            <div className="bg-gradient-to-br from-forest-deep to-forest-surface text-white rounded-3xl p-6 sm:p-7 border border-lime/30 shadow-glow-lime/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">
                    {socialConfig.instagramHandle}
                  </h4>
                  <span className="text-[11px] font-mono text-lime">Active Official Channel</span>
                </div>
              </div>

              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                {socialConfig.instagramTagline}
              </p>

              <a
                href={socialConfig.platforms[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-lime to-lime-bright text-forest-deep font-mono text-xs font-bold tracking-wider hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-sm"
                style={{ minHeight: '44px' }}
              >
                <span>FOLLOW ON INSTAGRAM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Map Container */}
            <div className="bg-white rounded-3xl p-4 border border-cream-border overflow-hidden shadow-soft-organic">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-forest-surface">
                <iframe
                  title="ABES Engineering College Location"
                  src={siteConfig.contact.mapEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="pt-3 px-1 flex items-center justify-between text-xs">
                <span className="font-mono text-forest/70">ABES EC · Campus 1</span>
                <a
                  href={siteConfig.contact.mapDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-cream-border shadow-lifted">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-forest mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-forest/70 mb-6">
              Fill out the form below and our Core PR & Registration teams will follow up.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-display font-semibold text-forest mb-1.5">
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
                    {errors.name && <span className="text-[11px] text-red-600 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-display font-semibold text-forest mb-1.5">
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
                    {errors.email && <span className="text-[11px] text-red-600 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-display font-semibold text-forest mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Workshop inquiry / Green hackathon collaboration"
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-border text-sm outline-none bg-cream/30"
                    style={{ minHeight: '44px' }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-display font-semibold text-forest mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we assist you or collaborate?"
                    className="w-full px-4 py-3 rounded-xl border border-cream-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm outline-none bg-cream/30 resize-none"
                  />
                  {errors.message && <span className="text-[11px] text-red-600 mt-1 block">{errors.message}</span>}
                </div>

                {/* Demo Mode Notice */}
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Demo mode: The contact form validates on the client side and simulates sending. Configure an email webhook in production.
                  </span>
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
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-display font-bold text-forest">
                  Message Transmitted!
                </h4>
                <p className="text-xs sm:text-sm text-forest/75 max-w-sm mx-auto">
                  Thank you for reaching out, <strong>{formData.name}</strong>. In demo mode, your message has been validated successfully.
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
