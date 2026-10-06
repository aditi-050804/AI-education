import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import type { PageId } from '../../types';
import {
  ScrollReveal,
  RevealEyebrow,
  RevealHeading,
  RevealDescription,
  RevealVisual,
  RevealCTA,
  RevealItem
} from '../common/ScrollReveal';

interface HomeFAQAndCTAProps {
  onOpenDemo: () => void;
  onNavigate: (page: PageId) => void;
}

export const HomeFAQAndCTA: React.FC<HomeFAQAndCTAProps> = ({
  onOpenDemo,
  onNavigate,
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Will this replace or disrupt our existing Tally ERP accounting?',
      a: 'No. AI-Education features instant 2-way XML synchronization with Tally ERP 9 and TallyPrime. Fee collections post directly into your existing ledgers in real-time.',
    },
    {
      q: 'How long does campus onboarding take, and is there downtime?',
      a: 'Complete rollout takes exactly 14 days with zero downtime. Existing records are ingested parallel to your day-to-day operations.',
    },
    {
      q: 'How is student data protected under Indian laws?',
      a: '100% of data resides in Indian sovereign cloud regions with AES-256 encryption at rest, fully compliant with the DPDP Act 2023.',
    },
    {
      q: 'Does the AI Tutor hallucinate or give out-of-syllabus answers?',
      a: 'Never. The Socratic engine operates strictly within board textbooks (NCERT, CBSE, ICSE) and provides exact page citations with every response.',
    },
  ];

  return (
    <ScrollReveal
      as="section"
      yOffset={35}
      duration={0.7}
      className="py-24 border-t border-[#C87D32]/15 relative z-10"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 space-y-20">
        {/* FAQ Section */}
        <div className="space-y-6">
          <div className="text-center space-y-1.5">
            <RevealEyebrow>
              <span className="text-xs font-bold tracking-widest text-[#C87D32] dark:text-[#E5A955] uppercase block font-sans">
                08 / ESSENTIAL INQUIRIES
              </span>
            </RevealEyebrow>
            <RevealHeading>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#121926] dark:text-[#F5EFE6]">
                Frequently Asked Questions
              </h2>
            </RevealHeading>
          </div>

          <RevealVisual className="space-y-2.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <RevealItem
                  key={idx}
                  index={idx}
                  staggerDelay={0.07}
                  baseDelay={0.05}
                  className="rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB]/50 dark:bg-[#0A101D]/50 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#121926] dark:text-[#F5EFE6]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C87D32] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-[#526071] dark:text-[#A6B4C9] font-sans leading-relaxed border-t border-[#C87D32]/10">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </RevealItem>
              );
            })}
          </RevealVisual>
        </div>

        {/* Final Illuminated Campus Invitation (CTA) */}
        <div className="pt-10 text-center space-y-5 max-w-2xl mx-auto border-t border-[#C87D32]/15">
          <RevealEyebrow>
            <div className="w-10 h-10 mx-auto rounded-full border border-[#C87D32] flex items-center justify-center bg-[#FAF5EB] dark:bg-[#0E1524] shadow-xs">
              <span className="font-serif text-lg font-bold text-[#C87D32] dark:text-[#E5A955] italic">
                Æ
              </span>
            </div>

            <div className="font-sans text-xs tracking-widest text-[#C87D32] uppercase font-bold mt-4">
              AI-EDUCATION OS
            </div>
          </RevealEyebrow>

          <RevealHeading>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
              Ready to unify your campus? <br />
              <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
                Experience the difference today.
              </span>
            </h2>
          </RevealHeading>

          <RevealDescription>
            <p className="text-xs sm:text-sm text-[#526071] dark:text-[#A6B4C9] font-sans max-w-md mx-auto leading-relaxed">
              Join modern schools and institutions operating on an intelligent sovereign foundation.
            </p>
          </RevealDescription>

          <RevealCTA>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#121926] dark:bg-[#F5EFE6] text-[#FAF5EB] dark:text-[#070B13] font-serif text-sm font-bold italic tracking-wide hover:bg-[#C87D32] hover:text-white transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Book Campus Walkthrough</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('solutions')}
                className="w-full sm:w-auto px-5 py-3 rounded-full border border-[#C87D32]/50 hover:border-[#C87D32] text-[#121926] dark:text-[#F5EFE6] font-serif text-sm italic hover:bg-[#FAF5EB]/60 dark:hover:bg-[#111A2E]/60 transition-all"
              >
                <span>Explore Solutions</span>
              </button>
            </div>
          </RevealCTA>
        </div>
      </div>
    </ScrollReveal>
  );
};
