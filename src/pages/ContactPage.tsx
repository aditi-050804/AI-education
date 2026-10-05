import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  HelpCircle, 
  ArrowUp, 
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  Award,
  Laptop,
  Coins,
  Handshake
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactPageProps {
  onOpenDemo?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenDemo }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    institutionType: 'K-12 School',
    message: ''
  });

  const formRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 500);
    }
  };

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

  const audienceList = [
    { title: 'School Leaders', icon: GraduationCap },
    { title: 'College Administrators', icon: Building2 },
    { title: 'Principals & Deans', icon: Award },
    { title: 'IT Teams', icon: Laptop },
    { title: 'Finance Teams', icon: Coins },
    { title: 'Education Partners', icon: Handshake }
  ];

  const steps = [
    {
      num: '01',
      title: 'Send your details',
      desc: 'Tell us a little about your institution.'
    },
    {
      num: '02',
      title: 'We’ll contact you',
      desc: 'Our team will get in touch.'
    },
    {
      num: '03',
      title: 'See the platform',
      desc: 'We’ll show you the product and answer your questions.'
    }
  ];

  return (
    <div className="pt-28 pb-32 bg-[#F8F4EB] dark:bg-[#060B14] min-h-screen transition-colors duration-500 parchment-grain font-serif">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 w-full space-y-20">
        
        {/* ========================================================
            HERO / EXISTING CONTACT HEADING
        ======================================================== */}
        <div className="text-center max-w-2xl mx-auto pt-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C5A059]/40 bg-[#FAF6EE]/80 dark:bg-[#0E1729]/80 text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059] mb-4 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            <span>THE DEAN’S REGISTRY</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-3 tracking-tight"
          >
            Let’s build a smarter campus.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg font-semibold text-[#2D3748] dark:text-[#CBD5E1] max-w-xl mx-auto leading-relaxed"
          >
            Schedule an institutional walkthrough for your board, leadership team, or IT administrators.
          </motion.p>
        </div>

        {/* ========================================================
            EXISTING CONTACT FORM (PRESERVED & ENHANCED)
        ======================================================== */}
        <div
          id="contact-form"
          ref={formRef}
          className="relative p-8 sm:p-12 rounded-3xl border border-[#C5A059]/40 bg-[#FAF6EE]/95 dark:bg-[#0B1220]/95 shadow-2xl backdrop-blur-sm"
        >
          {/* Subtle Corner Engraving Accents */}
          <div className="absolute top-3 left-3 text-xs text-[#C5A059]/50 select-none font-serif">⌜</div>
          <div className="absolute top-3 right-3 text-xs text-[#C5A059]/50 select-none font-serif">⌝</div>
          <div className="absolute bottom-3 left-3 text-xs text-[#C5A059]/50 select-none font-serif">⌞</div>
          <div className="absolute bottom-3 right-3 text-xs text-[#C5A059]/50 select-none font-serif">⌟</div>

          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-[#C5A059] bg-[#F4ECE0] dark:bg-[#111A2E] flex items-center justify-center text-[#8C6B28] dark:text-[#D4AF37] shadow-inner">
                <CheckCircle2 className="w-9 h-9 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mb-3">
                Inquiry Inscribed in Campus Ledger
              </h3>
              <p className="text-sm font-semibold text-[#2D3748] dark:text-[#CBD5E1] max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <strong className="text-[#161D2B] dark:text-[#F4ECE0]">{formData.name}</strong>. Our Regional Solutions Director will reach out to <strong className="text-[#161D2B] dark:text-[#F4ECE0]">{formData.email}</strong> within 2 business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', institution: '', institutionType: 'K-12 School', message: '' });
                }}
                className="px-6 py-2.5 rounded-full border border-[#C5A059] text-xs font-serif font-bold text-[#161D2B] dark:text-[#F4ECE0] hover:bg-[#C5A059] hover:text-white transition-colors shadow-sm"
              >
                Inscribe Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1.5 font-semibold">
                  Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8C6B28] absolute left-3.5 top-3" />
                  <input
                    ref={nameInputRef}
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
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1.5 font-semibold">
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
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1.5 font-semibold">
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
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1.5 font-semibold">
                  Institution Type
                </label>
                <select
                  value={formData.institutionType}
                  onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#F4ECE0]/50 dark:bg-[#0E1729]/80 border border-[#C5A059]/40 text-[#161D2B] dark:text-[#F4ECE0] focus:outline-none focus:border-[#C5A059] font-sans cursor-pointer"
                >
                  <option>K-12 School</option>
                  <option>College / University</option>
                  <option>Law University / Legal College</option>
                  <option>Competitive Exam Academy</option>
                  <option>Independent Tutor / Education Studio</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1.5 font-semibold">
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
                className="w-full py-3.5 rounded-full bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] font-serif text-sm font-bold tracking-wide hover:bg-[#C5A059] hover:text-white transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#38BDF8] group-hover:rotate-12 transition-transform" />
                <span>Book a Demo</span>
              </button>
            </form>
          )}
        </div>

        {/* Vintage Ink Hairline Divider */}
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
          <span className="text-xs text-[#8C6B28] dark:text-[#C5A059]">✦</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
        </div>

        {/* ========================================================
            1. LET'S TALK & 2. CONTACT OPTIONS
            (Three simple contact options without using cards)
        ======================================================== */}
        <div className="text-center max-w-3xl mx-auto space-y-10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
              Let’s Talk
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-1 mb-2">
              Have a question?
            </h2>
            <p className="text-base font-semibold text-[#2D3748] dark:text-[#CBD5E1]">
              Tell us what you need. Our team will get back to you.
            </p>
          </div>

          {/* 3 Contact Options without card grids */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#C5A059]/30 pt-2">
            
            {/* Option 1: Email */}
            <div className="py-6 md:py-2 px-6 flex flex-col items-center text-center space-y-2 group">
              <div className="w-10 h-10 rounded-full border border-[#C5A059]/60 bg-[#FAF6EE] dark:bg-[#0E1729] flex items-center justify-center text-[#8C6B28] dark:text-[#D4AF37] group-hover:scale-110 group-hover:border-[#C5A059] transition-all duration-300">
                <Mail className="w-4 h-4 text-[#8C6B28] dark:text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                Email
              </h3>
              <p className="text-xs font-semibold text-[#2D3748] dark:text-[#CBD5E1] leading-relaxed max-w-[220px]">
                General questions and product enquiries.
              </p>
              <a
                href="mailto:contact@ai-education.edu"
                className="text-xs font-mono font-semibold text-[#8C6B28] dark:text-[#D4AF37] hover:underline pt-1 inline-flex items-center gap-1"
              >
                <span>contact@ai-education.edu</span>
              </a>
            </div>

            {/* Option 2: Demo */}
            <div className="py-6 md:py-2 px-6 flex flex-col items-center text-center space-y-2 group">
              <div className="w-10 h-10 rounded-full border border-[#C5A059]/60 bg-[#FAF6EE] dark:bg-[#0E1729] flex items-center justify-center text-[#8C6B28] dark:text-[#D4AF37] group-hover:scale-110 group-hover:border-[#C5A059] transition-all duration-300">
                <Calendar className="w-4 h-4 text-[#38BDF8]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                Demo
              </h3>
              <p className="text-xs font-semibold text-[#2D3748] dark:text-[#CBD5E1] leading-relaxed max-w-[220px]">
                Book a product walkthrough.
              </p>
              <button
                onClick={scrollToForm}
                className="text-xs font-mono font-semibold text-[#8C6B28] dark:text-[#D4AF37] hover:underline pt-1 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Schedule a session →</span>
              </button>
            </div>

            {/* Option 3: Support */}
            <div className="py-6 md:py-2 px-6 flex flex-col items-center text-center space-y-2 group">
              <div className="w-10 h-10 rounded-full border border-[#C5A059]/60 bg-[#FAF6EE] dark:bg-[#0E1729] flex items-center justify-center text-[#8C6B28] dark:text-[#D4AF37] group-hover:scale-110 group-hover:border-[#C5A059] transition-all duration-300">
                <HelpCircle className="w-4 h-4 text-[#8C6B28] dark:text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                Support
              </h3>
              <p className="text-xs font-semibold text-[#2D3748] dark:text-[#CBD5E1] leading-relaxed max-w-[220px]">
                Need help? Our team is here to assist.
              </p>
              <a
                href="mailto:support@ai-education.edu"
                className="text-xs font-mono font-semibold text-[#8C6B28] dark:text-[#D4AF37] hover:underline pt-1 inline-flex items-center gap-1"
              >
                <span>support@ai-education.edu</span>
              </a>
            </div>

          </div>
        </div>

        {/* Vintage Ink Hairline Divider */}
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
          <span className="text-xs text-[#8C6B28] dark:text-[#C5A059]">✦</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
        </div>

        {/* ========================================================
            3. WHO CAN CONTACT US (NO CARD GRIDS)
            (Elegant inline typography flow)
        ======================================================== */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
              Institutional Custodians
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-1 mb-2">
              Who can reach out?
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#2D3748] dark:text-[#CBD5E1]">
              Whether governing campus policy or managing daily classroom operations.
            </p>
          </div>

          {/* Elegant inline typography ribbon (No cards) */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {audienceList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#C5A059]/40 bg-[#FAF6EE]/80 dark:bg-[#0E1729]/80 text-[#161D2B] dark:text-[#F4ECE0] hover:border-[#C5A059] hover:scale-105 transition-all duration-300 shadow-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-[#8C6B28] dark:text-[#D4AF37]" />
                  <span className="font-serif text-sm font-bold tracking-tight">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vintage Ink Hairline Divider */}
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
          <span className="text-xs text-[#8C6B28] dark:text-[#C5A059]">✦</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
        </div>

        {/* ========================================================
            4. WHAT HAPPENS NEXT
            (Horizontal timeline on desktop, vertical on mobile)
        ======================================================== */}
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
              The Walkthrough Sequence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-1 mb-2">
              What happens next?
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#2D3748] dark:text-[#CBD5E1]">
              A transparent, zero-friction introduction to your modern digital campus.
            </p>
          </div>

          {/* Timeline: Desktop Horizontal / Mobile Vertical */}
          <div className="relative">
            {/* Desktop connecting hairline */}
            <div className="hidden md:block absolute top-7 left-16 right-16 h-[1.5px] bg-gradient-to-r from-[#C5A059]/20 via-[#C5A059]/60 to-[#C5A059]/20 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-3">
                  
                  {/* Step Emblem Node */}
                  <div className="w-14 h-14 rounded-full border-2 border-[#C5A059] bg-[#FAF6EE] dark:bg-[#0E1729] flex items-center justify-center font-mono font-bold text-sm text-[#8C6B28] dark:text-[#D4AF37] shadow-md relative">
                    <span>{step.num}</span>
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#2D3748] dark:text-[#CBD5E1] leading-relaxed max-w-[240px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vintage Ink Hairline Divider */}
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
          <span className="text-xs text-[#8C6B28] dark:text-[#C5A059]">✦</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
        </div>

        {/* ========================================================
            5. FINAL CTA
        ======================================================== */}
        <div className="text-center max-w-2xl mx-auto space-y-6 pt-4">
          
          <div className="w-12 h-12 mx-auto rounded-full border border-[#C5A059] flex items-center justify-center bg-[#FAF6EE] dark:bg-[#0E1729] shadow-sm">
            <span className="font-serif text-lg font-bold text-[#8C6B28] dark:text-[#D4AF37]">
              Æ
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#161D2B] dark:text-[#F4ECE0] tracking-tight">
            Ready to build a smarter campus?
          </h2>

          <p className="text-base sm:text-lg font-semibold text-[#2D3748] dark:text-[#CBD5E1]">
            Start with a simple conversation.
          </p>

          <div className="pt-2">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] font-serif text-sm font-bold tracking-wide hover:bg-[#C5A059] hover:text-white transition-all shadow-xl group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#38BDF8]" />
              <span>Book a Demo</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
