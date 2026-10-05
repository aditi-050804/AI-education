import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Building2, Calendar, Mail, User, Phone, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    institutionType: 'K-12 School',
    studentsCount: '1,000 - 5,000',
    date: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A059', '#38BDF8', '#161D2B', '#EAE0CE']
      });
    } catch {
      // fallback
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#060B14]/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#FAF6EE] dark:bg-[#0B1220] border border-[#C5A059]/50 rounded-3xl shadow-2xl overflow-hidden z-10 font-serif"
          >
            {/* Header banner */}
            <div className="bg-[#161D2B] dark:bg-[#070D18] p-6 text-white relative border-b border-[#C5A059]/30">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#FAF6EE]/10 text-xs font-mono tracking-widest uppercase text-[#D4AF37] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                Institutional Walkthrough
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#F4ECE0]">
                Experience AI-Education
              </h3>
              <p className="text-xs text-[#A7B5CC] italic mt-1">
                Explore how modern AI transforms timetables, curriculum learning, and Tally finance.
              </p>
            </div>

            <div className="p-6">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-[#C5A059] bg-[#F4ECE0] dark:bg-[#111A2E] flex items-center justify-center text-teal-600 dark:text-teal-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mb-2">
                    Walkthrough Reserved
                  </h4>
                  <p className="text-xs italic text-[#586274] dark:text-[#A7B5CC] max-w-sm mx-auto mb-6">
                    Our Institutional Solutions Architect will reach out to <strong className="text-[#161D2B] dark:text-[#F4ECE0]">{formData.email}</strong> with your sandbox access credentials.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2 rounded-full bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] font-serif text-xs font-bold italic"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#8C6B28] absolute left-3 top-2.5" />
                      <input
                        required
                        type="text"
                        placeholder="Dr. Rajesh Mehta"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#F4ECE0]/50 dark:bg-[#0E1729]/80 border border-[#C5A059]/40 text-[#161D2B] dark:text-[#F4ECE0] focus:outline-none focus:border-[#C5A059] font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1">
                        Work Email
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#8C6B28] absolute left-3 top-2.5" />
                        <input
                          required
                          type="email"
                          placeholder="director@institution.edu"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#F4ECE0]/50 dark:bg-[#0E1729]/80 border border-[#C5A059]/40 text-[#161D2B] dark:text-[#F4ECE0] focus:outline-none focus:border-[#C5A059] font-sans"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1">
                        Phone
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#8C6B28] absolute left-3 top-2.5" />
                        <input
                          required
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#F4ECE0]/50 dark:bg-[#0E1729]/80 border border-[#C5A059]/40 text-[#161D2B] dark:text-[#F4ECE0] focus:outline-none focus:border-[#C5A059] font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1">
                      Institution Name
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-[#8C6B28] absolute left-3 top-2.5" />
                      <input
                        required
                        type="text"
                        placeholder="National Public School / St. Xavier's"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#F4ECE0]/50 dark:bg-[#0E1729]/80 border border-[#C5A059]/40 text-[#161D2B] dark:text-[#F4ECE0] focus:outline-none focus:border-[#C5A059] font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1">
                      Institution Type
                    </label>
                    <select
                      value={formData.institutionType}
                      onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-[#F4ECE0]/50 dark:bg-[#0E1729]/80 border border-[#C5A059]/40 text-[#161D2B] dark:text-[#F4ECE0] focus:outline-none focus:border-[#C5A059] font-sans"
                    >
                      <option>K-12 School</option>
                      <option>College / University</option>
                      <option>Law University / Legal College</option>
                      <option>Competitive Exam Academy</option>
                      <option>Independent Tutor / Studio</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 rounded-full bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] font-serif text-xs font-bold italic tracking-wide hover:bg-[#C5A059] hover:text-white transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Schedule 1-on-1 Walkthrough</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
