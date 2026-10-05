import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { School, Building2, Scale, Award, BookOpen, ArrowRight } from 'lucide-react';
import type { PageId } from '../types';

interface SolutionsPageProps {
  onOpenDemo: () => void;
  onNavigate: (page: PageId) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const solutions = [
    {
      id: 'schools',
      title: 'K-12 Schools',
      headline: 'Run academics, communication, fees and AI learning together.',
      motif: 'The Primary & Secondary Cloister',
      icon: School,
      detail: 'Conflict-free weekly timetables, instant WhatsApp bus telemetry, and curriculum-grounded AI tutors citing NCERT and board textbooks.'
    },
    {
      id: 'colleges',
      title: 'Colleges & Universities',
      headline: 'Coordinate departments, timetables, exams and campus operations.',
      motif: 'The Great Collegiate Quadrangle',
      icon: Building2,
      detail: 'Multi-faculty syllabus monitoring, automated room scheduling, university-wide QR seating arrangements, and dual TallyPrime ledger synchronization.'
    },
    {
      id: 'law',
      title: 'Law Universities & Legal Colleges',
      headline: 'Support legal education and judicial-service preparation.',
      motif: 'The Moot Court & Case Law Repository',
      icon: Scale,
      detail: 'AI Study Buddy trained on landmark Constitutional bench rulings with verified law volume citations and moot court roster allocation.'
    },
    {
      id: 'coaching',
      title: 'Competitive Exam Academies',
      headline: 'Deliver adaptive tests, AI grading and personalized learning.',
      motif: 'The Testing Hall of Scholars',
      icon: Award,
      detail: 'Dynamic practice questions that recalibrate difficulty to individual error patterns for JEE, NEET, and CLAT nationwide percentiles.'
    },
    {
      id: 'tutors',
      title: 'Independent Tutors & Studios',
      headline: 'Teach, manage students and grow your tutoring practice.',
      motif: 'The Socratic Mentorship Chamber',
      icon: BookOpen,
      detail: 'Seamless batch enrollment, direct UPI fee reconciliation, and automatic homework assistance after class hours.'
    }
  ];

  const curr = solutions[activeTab];

  return (
    <div className="pt-28 pb-24 bg-[#F8F4EB] dark:bg-[#060B14] min-h-screen transition-colors duration-500 parchment-grain font-serif">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
            Institutional Solutions
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-2">
            One platform. Every institution.
          </h1>
          <p className="text-base italic text-[#586274] dark:text-[#A7B5CC]">
            Explore tailored institutional environments without card clutter.
          </p>

          {/* Solution Switcher Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {solutions.map((sol, idx) => (
              <button
                key={sol.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-full text-xs font-serif italic border transition-all ${
                  activeTab === idx
                    ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] border-[#C5A059] shadow-md scale-105'
                    : 'bg-[#FAF6EE] dark:bg-[#0E1729] text-[#586274] border-[#C5A059]/30 hover:border-[#C5A059]'
                }`}
              >
                {sol.title}
              </button>
            ))}
          </div>
        </div>

        {/* Full-Screen Visual Scene (NO CARDS) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={curr.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-14 rounded-3xl border border-[#C5A059]/40 bg-[#FAF6EE]/95 dark:bg-[#0B1220]/95 shadow-2xl relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#C5A059]/30 mb-8">
              <div>
                <span className="text-xs font-mono text-[#8C6B28] dark:text-[#C5A059] uppercase tracking-wider">
                  {curr.motif}
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-1">
                  {curr.title}
                </h2>
              </div>

              <button
                onClick={onOpenDemo}
                className="px-6 py-2.5 rounded-full border border-[#C5A059] bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] text-xs italic font-bold hover:bg-[#C5A059] hover:text-white transition-colors flex items-center gap-2"
              >
                <span>Book {curr.title} Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="max-w-2xl mb-8">
              <h3 className="text-2xl sm:text-3xl italic text-[#8C6B28] dark:text-[#D4AF37] mb-3">
                “{curr.headline}”
              </h3>
              <p className="text-base text-[#586274] dark:text-[#A7B5CC] leading-relaxed">
                {curr.detail}
              </p>
            </div>

            <div className="pt-6 border-t border-[#C5A059]/20 flex items-center justify-between text-xs font-mono text-[#586274]">
              <span>Institutional Onboarding: Completed in 48h</span>
              <span className="text-teal-600 dark:text-teal-400 font-semibold">100% Tally & Student Data Compatible</span>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};
