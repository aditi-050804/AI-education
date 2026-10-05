import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Building2, Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    institutionType: 'K-12 School',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A059', '#38BDF8', '#161D2B', '#EAE0CE']
      });
    } catch {
      // fallback
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#F8F4EB] dark:bg-[#060B14] min-h-screen transition-colors duration-500 parchment-grain font-serif flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 w-full">
        
        {/* Minimal Editorial Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
            The Dean’s Registry
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-2">
            Let's build a smarter campus.
          </h1>
          <p className="text-base italic text-[#586274] dark:text-[#A7B5CC]">
            Schedule an institutional walkthrough for your board, leadership team, or IT administrators.
          </p>
        </div>

        {/* Parchment Inscription Ledger Form */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[#C5A059]/40 bg-[#FAF6EE]/95 dark:bg-[#0B1220]/95 shadow-2xl relative">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-[#C5A059] bg-[#F4ECE0] dark:bg-[#111A2E] flex items-center justify-center text-[#8C6B28] dark:text-[#D4AF37]">
                <CheckCircle2 className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mb-2">
                Inquiry Inscribed in Campus Ledger
              </h3>
              <p className="text-sm italic text-[#586274] dark:text-[#A7B5CC] max-w-md mx-auto mb-6">
                Thank you, <strong className="text-[#161D2B] dark:text-[#F4ECE0]">{formData.name}</strong>. Our Regional Solutions Director will reach out to <strong className="text-[#161D2B] dark:text-[#F4ECE0]">{formData.email}</strong> within 2 business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', institution: '', institutionType: 'K-12 School', message: '' });
                }}
                className="px-6 py-2 rounded-full border border-[#C5A059] text-xs font-serif italic text-[#161D2B] dark:text-[#F4ECE0] hover:bg-[#C5A059] hover:text-white transition-colors"
              >
                Inscribe Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1.5">
                  Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8C6B28] absolute left-3.5 top-3" />
                  <input
                    required
                    type="text"
                    placeholder="Dr. Rajesh Mehta / Director"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#F4ECE0]/50 dark:bg-[#0E1729]/80 border border-[#C5A059]/40 text-[#161D2B] dark:text-[#F4ECE0] focus:outline-none focus:border-[#C5A059] font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1.5">
                    Work Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#8C6B28] absolute left-3.5 top-3" />
                    <input
                      required
                      type="email"
                      placeholder="director@institution.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#F4ECE0]/50 dark:bg-[#0E1729]/80 border border-[#C5A059]/40 text-[#161D2B] dark:text-[#F4ECE0] focus:outline-none focus:border-[#C5A059] font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1.5">
                    Institution
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-[#8C6B28] absolute left-3.5 top-3" />
                    <input
                      required
                      type="text"
                      placeholder="St. Xavier's / Delhi Public School"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#F4ECE0]/50 dark:bg-[#0E1729]/80 border border-[#C5A059]/40 text-[#161D2B] dark:text-[#F4ECE0] focus:outline-none focus:border-[#C5A059] font-sans"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1.5">
                  Institution Type
                </label>
                <select
                  value={formData.institutionType}
                  onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#F4ECE0]/50 dark:bg-[#0E1729]/80 border border-[#C5A059]/40 text-[#161D2B] dark:text-[#F4ECE0] focus:outline-none focus:border-[#C5A059] font-sans"
                >
                  <option>K-12 School</option>
                  <option>College / University</option>
                  <option>Law University / Legal College</option>
                  <option>Competitive Exam Academy</option>
                  <option>Independent Tutor / Education Studio</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1.5">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your student cohort, current tools, or expected timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 text-xs rounded-xl bg-[#F4ECE0]/50 dark:bg-[#0E1729]/80 border border-[#C5A059]/40 text-[#161D2B] dark:text-[#F4ECE0] focus:outline-none focus:border-[#C5A059] font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] font-serif text-sm font-bold italic tracking-wide hover:bg-[#C5A059] hover:text-white transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#38BDF8]" />
                <span>Book a Demo</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
