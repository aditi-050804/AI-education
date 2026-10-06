import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "Does AI-Education replace Tally?",
    answer: "No. AI-Education integrates bi-directionally with your existing Tally ERP 9 and TallyPrime. Fee collections and vouchers post automatically in real time without disrupting your existing chart of accounts."
  },
  {
    id: 2,
    question: "Can AI learn from our textbooks?",
    answer: "Yes. The AI Study Buddy is strictly grounded in the approved textbooks, course packs, and syllabi uploaded by your institution. It provides verifiable chapter, section, and page citations with zero external hallucinations."
  },
  {
    id: 3,
    question: "Can parents have their own access?",
    answer: "Yes. Parents receive dedicated portal credentials and automated WhatsApp updates. Families with multiple enrolled children can seamlessly switch between siblings in a single unified dashboard."
  },
  {
    id: 4,
    question: "Can institutions start with selected features?",
    answer: "Absolutely. You can begin with core operational modules such as Smart Timetable or Exams, and expand into AI Learning and Finance whenever your institution is ready."
  },
  {
    id: 5,
    question: "What happens after booking a demo?",
    answer: "Our institutional team configures a personalized sandbox populated with your board’s syllabus and walks your leadership team through a live 30-minute demonstration tailored to your campus workflow."
  }
];

export const Scene14FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-24 px-6 bg-[#F8F4EB] dark:bg-[#060B14] border-t border-amber-900/20 dark:border-amber-400/20 transition-colors duration-500 overflow-hidden font-serif">
      <div className="max-w-5xl mx-auto w-full space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-amber-900 dark:text-amber-400 font-bold">
            <HelpCircle className="w-4 h-4 text-amber-700 dark:text-amber-400" />
            <span>13 / INSTITUTIONAL INQUIRIES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200 max-w-xl mx-auto leading-relaxed">
            Essential clarity for school boards, trustees, and campus leadership.
          </p>
        </div>

        {/* Minimal Vintage Accordion (Editorial Ledger Lines, No Cards) */}
        <div className="divide-y-2 divide-amber-900/20 dark:divide-amber-400/20 border-y-2 border-amber-900/30 dark:border-amber-400/30">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="py-5">
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-slate-950 dark:text-slate-50 group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full border border-amber-900/30 dark:border-amber-400/30 text-amber-900 dark:text-amber-400 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-amber-900 text-white dark:bg-amber-400 dark:text-slate-950' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-sm sm:text-base font-serif font-medium text-slate-800 dark:text-slate-200 leading-relaxed pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
