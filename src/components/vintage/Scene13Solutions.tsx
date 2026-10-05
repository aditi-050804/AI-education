import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { School, Building2, Scale, Award, BookOpen, ArrowRight } from 'lucide-react';

interface Scene13SolutionsProps {
  onOpenDemo: () => void;
}

export const Scene13Solutions: React.FC<Scene13SolutionsProps> = ({ onOpenDemo }) => {
  const [selectedInst, setSelectedInst] = useState<string>('schools');

  const institutions = [
    {
      id: 'schools',
      title: 'K-12 Schools',
      tagline: 'Run academics, communication, fees and AI learning together.',
      motif: 'The Academy Gate • Morning Bell & Assembly',
      icon: School,
      detail: 'Conflict-free timetables, instant proxy discovery, and multi-child parent portals.'
    },
    {
      id: 'universities',
      title: 'Colleges & Universities',
      tagline: 'Coordinate departments, timetables, exams and campus operations.',
      motif: 'The Great Quadrangle • Multi-Department Faculties',
      icon: Building2,
      detail: 'Departmental syllabus velocity, university-wide QR exam seating, and dual ledger Tally sync.'
    },
    {
      id: 'law',
      title: 'Law Universities & Legal Colleges',
      tagline: 'Support legal education and judicial-service preparation.',
      motif: 'The Moot Court & Curated Law Repositories',
      icon: Scale,
      detail: 'AI Study Buddy trained on landmark Constitutional rulings with exact law report citations.'
    },
    {
      id: 'academies',
      title: 'Competitive Exam Academies',
      tagline: 'Deliver adaptive tests, AI grading and personalized learning.',
      motif: 'The Diagnostic Testing Hall • Real-Time Percentiles',
      icon: Award,
      detail: 'Dynamic question difficulty calibrating to student error patterns for JEE, NEET, and CLAT.'
    },
    {
      id: 'tutors',
      title: 'Independent Tutors & Studios',
      tagline: 'Teach, manage students and grow your tutoring practice.',
      motif: 'The Private Study Chamber • Direct Mentorship',
      icon: BookOpen,
      detail: 'Instant student onboarding, automated batch reminders, and zero technical overhead.'
    }
  ];

  const current = institutions.find((i) => i.id === selectedInst) || institutions[0];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-24 bg-[#F4ECE0] dark:bg-[#070D18] transition-colors duration-500 engraving-lines border-t border-[#C5A059]/20">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Minimal Editorial Headline */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
            Scene XIII • Institutional Environments
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-2">
            Built for every kind of institution.
          </h2>
          <p className="font-serif text-lg font-semibold text-[#2D3748] dark:text-[#CBD5E1]">
            Select an educational environment to see its tailored operational architecture.
          </p>

          {/* Environment Switcher */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {institutions.map((inst) => (
              <button
                key={inst.id}
                onClick={() => setSelectedInst(inst.id)}
                className={`px-4 py-2 rounded-full text-xs font-serif font-semibold border transition-all ${
                  selectedInst === inst.id
                    ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] border-[#C5A059] shadow-md scale-105'
                    : 'bg-[#FAF6EE] dark:bg-[#0E1729] text-[#586274] border-[#C5A059]/30 hover:border-[#C5A059]'
                }`}
              >
                {inst.title}
              </button>
            ))}
          </div>
        </div>

        {/* Full-Bleed Environmental Scene Transition (NO CARDS) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-14 rounded-3xl border border-[#C5A059]/40 bg-[#FAF6EE]/95 dark:bg-[#0B1220]/95 shadow-2xl relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#C5A059]/30 mb-8 font-serif">
              <div>
                <span className="text-xs font-mono text-[#8C6B28] dark:text-[#C5A059] uppercase tracking-wider">
                  {current.motif}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-1">
                  {current.title}
                </h3>
              </div>

              <button
                onClick={onOpenDemo}
                className="px-6 py-2.5 rounded-full border border-[#C5A059] bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] text-xs font-serif font-bold hover:bg-[#C5A059] hover:text-white transition-colors flex items-center gap-2"
              >
                <span>Book {current.title} Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="max-w-2xl font-serif">
              <p className="text-2xl sm:text-3xl font-semibold text-[#8C6B28] dark:text-[#D4AF37] mb-4">
                “{current.tagline}”
              </p>
              <p className="text-base text-[#586274] dark:text-[#A7B5CC] leading-relaxed">
                {current.detail}
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-[#C5A059]/20 flex items-center justify-between text-xs font-mono text-[#586274]">
              <span>Architecture: Tailored Institutional Workflow</span>
              <span className="text-teal-600 dark:text-teal-400 font-semibold">Ready for Deployment</span>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
