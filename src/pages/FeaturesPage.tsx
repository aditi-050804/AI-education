import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Sparkles,
  Award,
  QrCode,
  DollarSign,
  MessageSquare,
  Users,
  Brain,
  BookOpen,
  Scale,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import type { PageId } from '../types';

interface FeaturesPageProps {
  onOpenDemo: () => void;
  onNavigate: (page: PageId) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onOpenDemo, onNavigate }) => {
  const [activeSection, setActiveSection] = useState<number>(0);

  const sections = [
    {
      index: '01',
      title: 'Academic Operations',
      headline: 'Conflict-free master timetables.',
      detail: 'Weekly schedules generated with automatic teacher workload limits and one-click proxy teacher matching.',
      badge: 'Zero Scheduling Clashes',
      demoType: 'timetable'
    },
    {
      index: '02',
      title: 'AI Study Buddy',
      headline: 'Answers grounded in your curriculum.',
      detail: 'Student queries resolved 24/7 with exact chapter, section, and textbook page citations.',
      badge: 'Zero Hallucinations',
      demoType: 'ai-study'
    },
    {
      index: '03',
      title: 'Assessments',
      headline: 'From marks entry to official report cards.',
      detail: 'Rubric-guided grade calculation, percentile moderation, and cryptographically sealed transcripts.',
      badge: 'Tamper-Proof Transcripts',
      demoType: 'assessment'
    },
    {
      index: '04',
      title: 'Admissions & Exams',
      headline: 'Cryptographic QR hall tickets and seating.',
      detail: 'Paper exam slips evolve into biometric check-in desks and automated exam room rosters.',
      badge: 'Anti-Impersonation',
      demoType: 'exams'
    },
    {
      index: '05',
      title: 'Finance & Tally Sync',
      headline: 'Every fee payment posted to TallyPrime.',
      detail: 'Automated receipt generation and real-time ledger synchronization without manual double entries.',
      badge: 'TallyPrime Native',
      demoType: 'finance'
    },
    {
      index: '06',
      title: 'Campus Communication',
      headline: 'Hierarchical campus dispatches.',
      detail: 'Official announcement feeds from Chancellor to department, class, student, and parent circles.',
      badge: 'Verified Channels',
      demoType: 'communication'
    },
    {
      index: '07',
      title: 'Parent Portal',
      headline: 'All children on one unified account.',
      detail: 'Live daily attendance pushes, bus GPS telemetry, and term fee receipts in a single tap.',
      badge: 'Multi-Child Switcher',
      demoType: 'parent'
    },
    {
      index: '08',
      title: 'Adaptive Learning',
      headline: 'Dynamic questions calibrated to each scholar.',
      detail: 'Diagnostic quizzes that automatically adjust difficulty according to student mastery curves.',
      badge: 'Personalized Velocity',
      demoType: 'adaptive'
    },
    {
      index: '09',
      title: 'Tutor & Competitive Prep',
      headline: 'Batch scheduling and nationwide test percentiles.',
      detail: 'Tailored diagnostics for JEE, NEET, and CLAT with step-by-step automated solution analysis.',
      badge: 'Olympiad & Entrance Ready',
      demoType: 'tutors'
    },
    {
      index: '10',
      title: 'Law Education',
      headline: 'Moot courts and constitutional case law.',
      detail: 'Indexed landmark rulings and judicial service preparation with precise case paragraph citations.',
      badge: 'BCI Compliant',
      demoType: 'law'
    }
  ];

  const curr = sections[activeSection];

  return (
    <div className="pt-28 pb-24 bg-[#F8F4EB] dark:bg-[#060B14] min-h-screen transition-colors duration-500 parchment-grain font-serif">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
            Capabilities Explorer
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-2">
            The 10 Institutional Capabilities.
          </h1>
          <p className="text-base italic text-[#586274] dark:text-[#A7B5CC]">
            A vertical journey through the architecture of AI-Education.
          </p>

          {/* Clean Stepper Bar (NO CARDS) */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {sections.map((sec, idx) => (
              <button
                key={sec.index}
                onClick={() => setActiveSection(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeSection === idx
                    ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] border border-[#C5A059] shadow-md'
                    : 'bg-[#FAF6EE] dark:bg-[#0E1729] text-[#586274] border border-[#C5A059]/30 hover:border-[#C5A059]'
                }`}
              >
                {sec.index} {sec.title}
              </button>
            ))}
          </div>
        </div>

        {/* Full-Screen Visual Scene Composition (NO CARDS) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={curr.index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-14 rounded-3xl border border-[#C5A059]/40 bg-[#FAF6EE]/95 dark:bg-[#0B1220]/95 shadow-2xl relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#C5A059]/30 mb-8">
              <div>
                <span className="text-xs font-mono text-[#8C6B28] dark:text-[#C5A059] uppercase tracking-wider">
                  Module {curr.index} • {curr.badge}
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-1">
                  {curr.title}
                </h2>
              </div>

              <button
                onClick={onOpenDemo}
                className="px-6 py-2.5 rounded-full border border-[#C5A059] bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] text-xs italic font-bold hover:bg-[#C5A059] hover:text-white transition-colors flex items-center gap-2"
              >
                <span>Experience {curr.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="max-w-3xl mb-10">
              <h3 className="text-2xl sm:text-3xl italic text-[#8C6B28] dark:text-[#D4AF37] mb-3">
                “{curr.headline}”
              </h3>
              <p className="text-base text-[#586274] dark:text-[#A7B5CC] leading-relaxed">
                {curr.detail}
              </p>
            </div>

            {/* Interactive Visual Canvas Box */}
            <div className="p-6 sm:p-8 rounded-2xl border border-[#C5A059]/30 bg-[#F4ECE0]/50 dark:bg-[#0E1729]/50 flex items-center justify-between font-mono text-xs text-[#161D2B] dark:text-[#F4ECE0]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
                <span>Live Operational Verification: Active</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveSection((prev) => (prev > 0 ? prev - 1 : sections.length - 1))}
                  className="px-3 py-1 rounded border border-[#C5A059]/40 hover:bg-[#FAF6EE] dark:hover:bg-[#111A2E]"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveSection((prev) => (prev + 1) % sections.length)}
                  className="px-3 py-1 rounded bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14]"
                >
                  Next Module →
                </button>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};
