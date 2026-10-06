import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Feather } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Scene15PricingProps {
  onOpenDemo: () => void;
}

export const Scene15Pricing: React.FC<Scene15PricingProps> = ({ onOpenDemo }) => {
  const [activeSchedule, setActiveSchedule] = useState<number>(1);
  const [isStamped, setIsStamped] = useState<boolean>(false);
  const [activeUsageDim, setActiveUsageDim] = useState<number>(0);

  const handleSealClick = () => {
    setIsStamped(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#C5A059', '#38BDF8', '#D4AF37']
    });
  };

  const usageDimensions = [
    { title: 'AI Learning', note: 'Based on usage' },
    { title: 'Exams & Assessments', note: 'Based on usage' },
    { title: 'Advanced Features', note: 'Based on selected features' },
    { title: 'Institution Size', note: 'Based on users/students' }
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-24 bg-[#F4ECE0] dark:bg-[#070D18] transition-colors duration-500 engraving-lines border-t border-[#C5A059]/20 font-serif">
      <div className="max-w-4xl mx-auto w-full space-y-16">
        
        {/* Editorial Heading (NO CARDS) */}
        <div className="text-center space-y-3">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-amber-900 dark:text-amber-400 font-bold"
          >
            ✦ SIMPLE, FLEXIBLE PRICING ✦
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-bold text-slate-950 dark:text-slate-50 tracking-tight"
          >
            Built around your institution.
          </motion.h2>
          <p className="text-base sm:text-xl font-medium text-slate-800 dark:text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Start with a simple monthly platform fee and pay-as-you-use flexibility, backed by a one-time institutional setup.
          </p>
        </div>

        {/* Animated Hairline Divider */}
        <div className="flex items-center justify-center gap-4">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent"
          />
          <span className="text-xs text-[#8C6B28] dark:text-[#C5A059]">✦</span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent"
          />
        </div>

        {/* Open Academic Fee Register with Interactive Entries (NO CARDS) */}
        <div className="space-y-10">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-2 border-b border-[#C5A059]/30">
            <div className="text-center sm:text-left space-y-0.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C6B28] dark:text-[#C5A059] font-bold">
                AI-EDUCATION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-wider text-[#161D2B] dark:text-[#F4ECE0] uppercase">
                INSTITUTIONAL PRICING
              </h3>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSealClick}
              className="px-3.5 py-1.5 rounded-full border border-[#C5A059]/50 text-xs font-mono text-[#8C6B28] dark:text-[#C5A059] flex items-center gap-2 cursor-pointer"
            >
              <span>{isStamped ? '✓ AUDIT SEALED' : '✦ TAP TO SEAL LEDGER'}</span>
            </motion.button>
          </div>

          <div className="space-y-10">
            {/* 01: MONTHLY PLATFORM */}
            <motion.div
              onMouseEnter={() => setActiveSchedule(1)}
              className="space-y-3 relative sm:pl-6 group cursor-default"
            >
              {activeSchedule === 1 && (
                <div className="hidden sm:block absolute left-0 top-1 text-amber-800 dark:text-amber-400">
                  <Feather className="w-4 h-4" />
                </div>
              )}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-2 border-b border-amber-900/30 dark:border-amber-400/30">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-amber-800 dark:text-amber-400 font-bold">01</span>
                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
                    MONTHLY PLATFORM
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-bold text-amber-800 dark:text-amber-300">
                    ₹500 <span className="text-base font-normal font-sans text-slate-700 dark:text-slate-300">/ month</span>
                  </span>
                  <div className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400">
                    Basic monthly platform fee
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Your basic platform fee for continuous cloud uptime and daily connectivity.
                </p>
              </div>
            </motion.div>

            {/* 02: ADDITIONAL USAGE */}
            <motion.div
              onMouseEnter={() => setActiveSchedule(2)}
              className="space-y-4 relative sm:pl-6 group cursor-default"
            >
              {activeSchedule === 2 && (
                <div className="hidden sm:block absolute left-0 top-1 text-teal-700 dark:text-teal-400">
                  <Feather className="w-4 h-4" />
                </div>
              )}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-2 border-b border-amber-900/30 dark:border-amber-400/30">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-teal-700 dark:text-teal-400 font-bold">02</span>
                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
                    ADDITIONAL USAGE
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-xl sm:text-2xl font-bold text-teal-700 dark:text-teal-300">
                    Pay as you use
                  </span>
                  <div className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400">
                    Features → Usage → Cost
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Additional charges depend on the features and usage your institution chooses.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                  {usageDimensions.map((dim, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveUsageDim(idx)}
                      className={`border-l-2 pl-3 py-1 cursor-pointer transition-colors ${
                        activeUsageDim === idx ? 'border-sky-500 bg-sky-50/50 dark:bg-sky-950/20' : 'border-amber-700/40 dark:border-amber-400/40'
                      }`}
                    >
                      <div className="font-serif font-bold text-xs sm:text-sm text-slate-950 dark:text-slate-50">{dim.title}</div>
                      <div className="text-xs font-mono font-semibold text-teal-700 dark:text-teal-300">{dim.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 03: ONE-TIME SETUP */}
            <motion.div
              onMouseEnter={() => setActiveSchedule(3)}
              className="space-y-3 relative sm:pl-6 group cursor-default"
            >
              {activeSchedule === 3 && (
                <div className="hidden sm:block absolute left-0 top-1 text-amber-800 dark:text-amber-400">
                  <Feather className="w-4 h-4" />
                </div>
              )}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-2 border-b border-amber-900/30 dark:border-amber-400/30">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-amber-800 dark:text-amber-400 font-bold">03</span>
                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
                    ONE-TIME SETUP
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-bold text-amber-800 dark:text-amber-300">
                    ₹2.5 Lakh
                  </span>
                  <div className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400">
                    One-time setup cost
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Complete platform setup for your institution.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                  <span>• Institution onboarding</span>
                  <span>• Platform configuration</span>
                  <span>• Initial setup</span>
                  <span>• Data/setup assistance</span>
                </div>
              </div>
            </motion.div>

          </div>

          <div className="py-6 border-t-2 border-b-2 border-amber-900/30 dark:border-amber-400/30 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 text-base font-serif font-bold text-slate-900 dark:text-slate-100">
              <span className="text-amber-800 dark:text-amber-300">₹500/month basic platform fee</span>
              <span className="text-amber-700 dark:text-amber-400">+</span>
              <span className="text-teal-700 dark:text-teal-300">Pay-as-you-use additional features</span>
              <span className="text-amber-700 dark:text-amber-400">+</span>
              <span className="text-amber-800 dark:text-amber-300">₹2.5 Lakh one-time setup</span>
            </div>
          </div>
        </div>

        {/* How does pricing work? (No Cards) */}
        <div className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-slate-950 dark:text-slate-50">
            How does pricing work?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Monthly', text: 'Pay ₹500 every month as the basic platform fee.' },
              { num: '02', title: 'Use what you need', text: 'Additional charges apply based on the features and usage you choose.' },
              { num: '03', title: 'Setup', text: 'Pay ₹2.5 Lakh once to set up your digital campus.' },
              { num: '04', title: 'Scale when needed', text: 'Add more features as your institution grows.' }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 4 }}
                className="space-y-1.5 cursor-default border-l-2 border-amber-800/40 dark:border-amber-400/40 pl-3"
              >
                <span className="font-mono text-xs sm:text-sm font-bold text-amber-800 dark:text-amber-400">
                  {step.num} — {step.title}
                </span>
                <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenDemo}
            className="px-8 py-3.5 rounded-full bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] font-serif text-xs font-bold hover:bg-[#C5A059] hover:text-white transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Book a Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};
