import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Mail, 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Clock,
  PhoneCall, 
  X,
  ArrowDown,
  Video
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactPageProps {
  onOpenDemo?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenDemo }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isMeetModalOpen, setIsMeetModalOpen] = useState(false);
  const [meetSubmitted, setMeetSubmitted] = useState(false);

  // Form State for Main Demo Form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    institutionType: 'K-12 School',
    message: ''
  });

  // Form State for Google Meet Schedule
  const [meetData, setMeetData] = useState({
    name: '',
    email: '',
    date: '',
    time: '11:00 AM - 12:00 PM',
    notes: ''
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

  const handleMainFormSubmit = (e: React.FormEvent) => {
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

  const handleMeetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMeetSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#38BDF8', '#C5A059', '#10B981']
      });
    } catch {
      // fallback
    }
  };


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

  // Today's date string YYYY-MM-DD for min date in picker
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="pt-28 pb-32 bg-[#F8F4EB] dark:bg-[#060B14] min-h-screen transition-colors duration-500 parchment-grain font-serif">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 w-full space-y-20">
        
        {/* ========================================================
            SECTION 1: HERO & CONTACT OPTIONS (LET'S TALK)
        ======================================================== */}
        <section className="text-center max-w-3xl mx-auto pt-4 space-y-10">
          
          <div>
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
              className="text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] tracking-tight leading-[1.1] mb-3"
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

          {/* Let's Talk Header Note */}
          <div className="pt-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
              Direct Channels
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-1">
              Have a question?
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#586274] dark:text-[#A7B5CC] mt-1">
              Tell us what you need. Our team will get back to you.
            </p>
          </div>

          {/* 3 Contact Options: Mail, Call (Google Meet), Demo */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#C5A059]/30 pt-2 pb-2">
            
            {/* Option 1: Mail */}
            <div className="py-6 md:py-2 px-6 flex flex-col items-center text-center space-y-2 group">
              <div className="w-10 h-10 rounded-full border border-[#C5A059]/60 bg-[#FAF6EE] dark:bg-[#0E1729] flex items-center justify-center text-[#8C6B28] dark:text-[#D4AF37] group-hover:scale-110 group-hover:border-[#C5A059] transition-all duration-300">
                <Mail className="w-4 h-4 text-[#8C6B28] dark:text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                Mail
              </h3>
              <p className="text-xs font-semibold text-[#2D3748] dark:text-[#CBD5E1] leading-relaxed max-w-[220px]">
                General questions and product enquiries.
              </p>
              <a
                href="mailto:support@uwo24.com"
                className="text-xs font-mono font-semibold text-[#8C6B28] dark:text-[#D4AF37] hover:underline pt-1 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>support@uwo24.com</span>
              </a>
            </div>

            {/* Option 2: Call / Google Meet */}
            <div className="py-6 md:py-2 px-6 flex flex-col items-center text-center space-y-2 group">
              <div className="w-10 h-10 rounded-full border border-[#C5A059]/60 bg-[#FAF6EE] dark:bg-[#0E1729] flex items-center justify-center text-[#8C6B28] dark:text-[#D4AF37] group-hover:scale-110 group-hover:border-[#C5A059] transition-all duration-300">
                <Video className="w-4 h-4 text-[#38BDF8]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                Call
              </h3>
              <p className="text-xs font-semibold text-[#2D3748] dark:text-[#CBD5E1] leading-relaxed max-w-[220px]">
                Schedule a Google Meet with our leadership team.
              </p>
              <button
                onClick={() => {
                  setMeetSubmitted(false);
                  setIsMeetModalOpen(true);
                }}
                className="text-xs font-mono font-semibold text-[#8C6B28] dark:text-[#D4AF37] hover:underline pt-1 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Schedule Google Meet →</span>
              </button>
            </div>

            {/* Option 3: Demo */}
            <div className="py-6 md:py-2 px-6 flex flex-col items-center text-center space-y-2 group">
              <div className="w-10 h-10 rounded-full border border-[#C5A059]/60 bg-[#FAF6EE] dark:bg-[#0E1729] flex items-center justify-center text-[#8C6B28] dark:text-[#D4AF37] group-hover:scale-110 group-hover:border-[#C5A059] transition-all duration-300">
                <Calendar className="w-4 h-4 text-[#38BDF8]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                Demo
              </h3>
              <p className="text-xs font-semibold text-[#2D3748] dark:text-[#CBD5E1] leading-relaxed max-w-[220px]">
                Request an interactive campus walkthrough.
              </p>
              <button
                onClick={scrollToForm}
                className="text-xs font-mono font-semibold text-[#8C6B28] dark:text-[#D4AF37] hover:underline pt-1 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Request a Demo below ↓</span>
              </button>
            </div>

          </div>

          <div className="pt-2">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#C5A059] bg-[#FAF6EE] dark:bg-[#0E1729] text-xs font-mono font-semibold text-[#8C6B28] dark:text-[#D4AF37] hover:bg-[#C5A059] hover:text-white transition-all shadow-sm cursor-pointer"
            >
              <span>Scroll to Application Ledger</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </div>

        </section>

        {/* Vintage Ink Hairline Divider */}
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
          <span className="text-xs text-[#8C6B28] dark:text-[#C5A059]">✦</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
        </div>

        {/* ========================================================
            SECTION 2: THE FORM CARD (DEMO WALKTHROUGH REQUEST)
        ======================================================== */}
        <section id="contact-form" ref={formRef} className="space-y-6 max-w-3xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
              Section II • Application Inscription
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-1 mb-2">
              Inscribe Your Campus Inquiry
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#2D3748] dark:text-[#CBD5E1]">
              Submit your institutional details below to dispatch an official demo walkthrough request.
            </p>
          </div>

          {/* Form Card */}
          <div className="relative p-8 sm:p-12 rounded-3xl border border-[#C5A059]/40 bg-[#FAF6EE]/95 dark:bg-[#0B1220]/95 shadow-2xl backdrop-blur-sm">
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
                  Demo Request Inscribed in Campus Ledger
                </h3>
                <p className="text-sm font-semibold text-[#2D3748] dark:text-[#CBD5E1] max-w-md mx-auto mb-3 leading-relaxed">
                  Thank you, <strong className="text-[#161D2B] dark:text-[#F4ECE0]">{formData.name}</strong>. Your institutional demo request has been registered and dispatched to <strong className="text-[#8C6B28] dark:text-[#D4AF37]">admin@uwo24.com</strong>.
                </p>
                <p className="text-xs font-mono text-[#586274] dark:text-[#A7B5CC] mb-6">
                  Our Regional Solutions Director will contact you at {formData.email} within 2 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', institution: '', institutionType: 'K-12 School', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full border border-[#C5A059] text-xs font-serif font-bold text-[#161D2B] dark:text-[#F4ECE0] hover:bg-[#C5A059] hover:text-white transition-colors shadow-sm cursor-pointer"
                >
                  Inscribe Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleMainFormSubmit} className="space-y-5">
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
                  <span>Submit Demo Request</span>
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Vintage Ink Hairline Divider */}
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
          <span className="text-xs text-[#8C6B28] dark:text-[#C5A059]">✦</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
        </div>


        {/* ========================================================
            SECTION 4: WHAT HAPPENS NEXT (TIMELINE)
        ======================================================== */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
              Section IV • The Walkthrough Sequence
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
        </section>



      </div>

      {/* ========================================================
          GOOGLE MEET / CALL SCHEDULER MODAL
      ======================================================== */}
      <AnimatePresence>
        {isMeetModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMeetModalOpen(false)}
              className="fixed inset-0 bg-[#060B14]/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[#FAF6EE] dark:bg-[#0B1220] border border-[#C5A059]/50 rounded-3xl shadow-2xl overflow-hidden z-10 font-serif"
            >
              {/* Header Ribbon */}
              <div className="p-6 border-b border-[#C5A059]/20 flex items-center justify-between bg-[#F4ECE0]/50 dark:bg-[#0E1729]/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#38BDF8]/15 flex items-center justify-center text-[#0284C7] dark:text-[#38BDF8] border border-[#38BDF8]/40">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#161D2B] dark:text-[#F4ECE0]">
                      Schedule a Google Meet
                    </h3>
                    <p className="text-[11px] font-mono text-[#8C6B28] dark:text-[#C5A059]">
                      Dispatches invite to admin@uwo24.com
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsMeetModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-[#EAE0CE] dark:hover:bg-[#162138] text-[#586274] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8">
                {meetSubmitted ? (
                  <div className="py-6 text-center space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-500/50 flex items-center justify-center text-teal-600 dark:text-teal-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                      Meeting Request Scheduled!
                    </h4>
                    <p className="text-sm font-semibold text-[#2D3748] dark:text-[#CBD5E1] max-w-sm mx-auto leading-relaxed">
                      Google Meet invitation for <strong className="text-[#8C6B28] dark:text-[#D4AF37]">{meetData.date} ({meetData.time})</strong> has been dispatched to <strong className="text-[#161D2B] dark:text-[#F4ECE0]">admin@uwo24.com</strong>.
                    </p>
                    <p className="text-xs font-mono text-[#586274] dark:text-[#A7B5CC]">
                      Confirmation and Google Meet room link will be sent to {meetData.email}.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={`mailto:admin@uwo24.com?subject=Google%20Meet%20Schedule:%20${encodeURIComponent(meetData.name)}%20(${encodeURIComponent(meetData.date)})&body=Hello%20Admin,%0A%0AI%20have%20scheduled%20a%20Google%20Meet%20call.%0A%0AName:%20${encodeURIComponent(meetData.name)}%0AEmail:%20${encodeURIComponent(meetData.email)}%0ADate:%20${encodeURIComponent(meetData.date)}%0ATime:%20${encodeURIComponent(meetData.time)}%0ANotes:%20${encodeURIComponent(meetData.notes)}`}
                        className="px-5 py-2.5 rounded-full bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] text-xs font-serif font-bold hover:bg-[#C5A059] hover:text-white transition-all text-center inline-flex items-center justify-center gap-1.5"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Send Direct Mail to Admin</span>
                      </a>
                      <button
                        onClick={() => setIsMeetModalOpen(false)}
                        className="px-5 py-2.5 rounded-full border border-[#C5A059] text-xs font-serif font-bold text-[#161D2B] dark:text-[#F4ECE0] hover:bg-[#FAF6EE] transition-all"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleMeetSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Date Picker */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1.5 font-semibold flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" /> Select Date
                        </label>
                        <input
                          required
                          type="date"
                          min={todayStr}
                          value={meetData.date}
                          onChange={(e) => setMeetData({ ...meetData, date: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#F4ECE0]/50 dark:bg-[#0E1729]/80 border border-[#C5A059]/40 text-[#161D2B] dark:text-[#F4ECE0] focus:outline-none focus:border-[#C5A059] font-sans"
                        />
                      </div>

                      {/* Time Slot Picker */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1.5 font-semibold flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" /> Preferred Time
                        </label>
                        <select
                          value={meetData.time}
                          onChange={(e) => setMeetData({ ...meetData, time: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#F4ECE0]/50 dark:bg-[#0E1729]/80 border border-[#C5A059]/40 text-[#161D2B] dark:text-[#F4ECE0] focus:outline-none focus:border-[#C5A059] font-sans cursor-pointer"
                        >
                          <option>09:30 AM - 10:30 AM</option>
                          <option>11:00 AM - 12:00 PM</option>
                          <option>02:00 PM - 03:00 PM</option>
                          <option>04:00 PM - 05:00 PM</option>
                          <option>06:00 PM - 07:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1.5 font-semibold">
                        Your Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Dr. Rajesh Mehta / Chancellor"
                        value={meetData.name}
                        onChange={(e) => setMeetData({ ...meetData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#F4ECE0]/50 dark:bg-[#0E1729]/80 border border-[#C5A059]/40 text-[#161D2B] dark:text-[#F4ECE0] focus:outline-none focus:border-[#C5A059] font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1.5 font-semibold">
                        Your Work Email (For Meet Invite)
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="chancellor@university.edu"
                        value={meetData.email}
                        onChange={(e) => setMeetData({ ...meetData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#F4ECE0]/50 dark:bg-[#0E1729]/80 border border-[#C5A059]/40 text-[#161D2B] dark:text-[#F4ECE0] focus:outline-none focus:border-[#C5A059] font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8C6B28] dark:text-[#C5A059] mb-1.5 font-semibold">
                        Meeting Discussion Topic
                      </label>
                      <textarea
                        rows={2}
                        placeholder="AI campus system demonstration, integration with existing ERP..."
                        value={meetData.notes}
                        onChange={(e) => setMeetData({ ...meetData, notes: e.target.value })}
                        className="w-full p-3 text-xs rounded-xl bg-[#F4ECE0]/50 dark:bg-[#0E1729]/80 border border-[#C5A059]/40 text-[#161D2B] dark:text-[#F4ECE0] focus:outline-none focus:border-[#C5A059] font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] font-serif text-sm font-bold tracking-wide hover:bg-[#C5A059] hover:text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <Video className="w-4 h-4 text-[#38BDF8]" />
                      <span>Confirm & Dispatch Invite to admin@uwo24.com</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
