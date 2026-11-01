import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { divisions } from '../data/team';
import SectionHeading from '../components/SectionHeading';

export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "Computer Science & Engineering",
    year: "1st Year",
    division: "Tech & Project",
    statement: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    
    if (!formData.email.trim()) {
      errs.email = "Student email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = "Enter a valid 10-digit mobile number.";
    }

    if (!formData.statement.trim() || formData.statement.trim().length < 15) {
      errs.statement = "Please share a brief motivation (at least 15 characters).";
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

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      branch: "Computer Science & Engineering",
      year: "1st Year",
      division: "Tech & Project",
      statement: ""
    });
    setErrors({});
  };

  return (
    <section id="join" className="py-16 sm:py-20 bg-cream relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - 1 title + at most 2 lines subtitle */}
        <SectionHeading
          badge="MEMBERSHIP REGISTRATION"
          title="Become a Member of the"
          highlight="Eco Club"
          description="Contribute your engineering, management, or creative talents to student sustainability initiatives."
        />

        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-9 border border-cream-border shadow-lifted">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-display font-semibold text-forest mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarthak Mishra"
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm outline-none bg-cream/30"
                    style={{ minHeight: '44px' }}
                  />
                  {errors.name && <span className="text-xs text-red-600 mt-1 block">{errors.name}</span>}
                </div>

                {/* College Email */}
                <div>
                  <label className="block text-xs font-display font-semibold text-forest mb-1.5">
                    College / Student Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. yourname@abes.ac.in"
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm outline-none bg-cream/30"
                    style={{ minHeight: '44px' }}
                  />
                  {errors.email && <span className="text-xs text-red-600 mt-1 block">{errors.email}</span>}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-display font-semibold text-forest mb-1.5">
                    WhatsApp / Contact Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm outline-none bg-cream/30"
                    style={{ minHeight: '44px' }}
                  />
                  {errors.phone && <span className="text-xs text-red-600 mt-1 block">{errors.phone}</span>}
                </div>

                {/* Division of Interest */}
                <div>
                  <label className="block text-xs font-display font-semibold text-forest mb-1.5">
                    Primary Division of Interest *
                  </label>
                  <select
                    value={formData.division}
                    onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-xs outline-none bg-cream/30"
                    style={{ minHeight: '44px' }}
                  >
                    {divisions.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} ({d.tagline})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Branch */}
                <div>
                  <label className="block text-xs font-display font-semibold text-forest mb-1.5">
                    Branch / Program
                  </label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-border text-xs outline-none bg-cream/30"
                    style={{ minHeight: '44px' }}
                  >
                    <option>Computer Science & Engineering</option>
                    <option>CSE (Artificial Intelligence & ML)</option>
                    <option>CSE (Data Science)</option>
                    <option>Information Technology</option>
                    <option>Electronics & Communication (ECE)</option>
                    <option>Electrical & Electronics (EN)</option>
                    <option>Mechanical Engineering</option>
                    <option>MCA</option>
                  </select>
                </div>

                {/* Year */}
                <div>
                  <label className="block text-xs font-display font-semibold text-forest mb-1.5">
                    Current Year
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-cream-border text-xs outline-none bg-cream/30"
                    style={{ minHeight: '44px' }}
                  >
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                  </select>
                </div>
              </div>

              {/* Motivation statement */}
              <div>
                <label className="block text-xs font-display font-semibold text-forest mb-1.5">
                  Why do you want to join the Eco Club? *
                </label>
                <textarea
                  rows={3}
                  value={formData.statement}
                  onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                  placeholder="Share your interest—whether building IoT sensors, planning drives, or managing digital campaigns..."
                  className="w-full px-4 py-2.5 rounded-xl border border-cream-border focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm outline-none bg-cream/30 resize-none"
                />
                {errors.statement && <span className="text-xs text-red-600 mt-1 block">{errors.statement}</span>}
              </div>

              {/* Visitor-Friendly Notice (Point 16) */}
              <div className="p-3 rounded-xl bg-cream border border-cream-border text-xs text-forest/75 flex items-center justify-between">
                <span>Student recruitment preview. Submissions are verified locally during active onboarding cycles.</span>
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-forest-deep text-lime font-mono text-xs font-bold tracking-wider hover:bg-forest hover:shadow-glow-lime/30 transition-all flex items-center justify-center gap-2"
                  style={{ minHeight: '48px' }}
                >
                  {isSubmitting ? (
                    <span>PROCESSING...</span>
                  ) : (
                    <>
                      <span>SUBMIT MEMBERSHIP APPLICATION</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center space-y-3.5"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="heading-card font-display font-bold text-forest">
                Application Received!
              </h3>
              <p className="text-sm text-forest/75 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your application for the <strong>{formData.division}</strong> division has been submitted.
              </p>
              
              <div className="p-4 rounded-2xl bg-cream border border-cream-border max-w-sm mx-auto text-left text-xs space-y-1 font-mono text-forest/80">
                <div><strong>Email:</strong> {formData.email}</div>
                <div><strong>Division:</strong> {formData.division}</div>
                <div><strong>Branch:</strong> {formData.branch} ({formData.year})</div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-forest-deep text-white text-xs font-mono font-semibold hover:bg-forest-surface transition-colors"
                  style={{ minHeight: '44px' }}
                >
                  Submit Another Application
                </button>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
