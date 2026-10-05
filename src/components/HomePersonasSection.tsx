import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Crown,
  School,
  Briefcase,
  Calculator,
  BookOpen,
  GraduationCap,
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface Persona {
  id: string;
  role: string;
  badge: string;
  icon: any;
  benefit: string;
  detail: string;
  color: string;
}

const personas: Persona[] = [
  {
    id: 'chairman',
    role: 'Chairman / Trustee',
    badge: 'Campus Governance',
    icon: Crown,
    benefit: 'Total visibility over institutional revenue and multi-campus growth.',
    detail: 'Consolidated executive dashboard with real-time fee realization and campus expansion KPIs.',
    color: 'from-amber-500 to-amber-700'
  },
  {
    id: 'principal',
    role: 'Principal / Dean',
    badge: 'Academic Leadership',
    icon: School,
    benefit: 'Resolve teacher absences in seconds.',
    detail: 'Automated 1-click substitute allocation without morning scramble or broken timetables.',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'hod',
    role: 'Head of Department (HOD)',
    badge: 'Faculty Operations',
    icon: Briefcase,
    benefit: 'Streamline syllabus progress and departmental workload.',
    detail: 'Real-time curriculum velocity tracking, lab allocation, and examination question verification.',
    color: 'from-indigo-600 to-purple-700'
  },
  {
    id: 'accountant',
    role: 'Campus Accountant',
    badge: 'Finance & Compliance',
    icon: Calculator,
    benefit: 'Keep fees and Tally in sync.',
    detail: 'Direct XML injection into TallyPrime without human reconciliation or manual entry backlogs.',
    color: 'from-emerald-600 to-teal-700'
  },
  {
    id: 'teacher',
    role: 'Teacher / Faculty',
    badge: 'Instruction',
    icon: BookOpen,
    benefit: 'Spend less time grading.',
    detail: 'Rubric-guided marks calculation and auto-generated report cards let educators focus on teaching.',
    color: 'from-teal-600 to-cyan-700'
  },
  {
    id: 'student',
    role: 'Student',
    badge: 'Personalized Learning',
    icon: GraduationCap,
    benefit: 'Get help from your AI Study Buddy.',
    detail: 'Instant textbook-cited answers at 11 PM before exams, plus adaptive practice quizzes.',
    color: 'from-purple-600 to-pink-700'
  },
  {
    id: 'parent',
    role: 'Parent',
    badge: 'Family Engagement',
    icon: Users,
    benefit: 'Stay connected to your child’s progress.',
    detail: 'Multi-child switcher with live attendance alerts, bus GPS, and seamless fee payments in 1 tap.',
    color: 'from-rose-600 to-red-700'
  }
];

export const HomePersonasSection: React.FC<{ onBookDemo?: () => void }> = ({ onBookDemo }) => {
  const [activePersona, setActivePersona] = useState<Persona>(personas[1]); // Default to Principal

  return (
    <section className="py-20 bg-white dark:bg-[#070D1E] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Institutional Stakeholders
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Built for everyone on campus.
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
            Select or hover any role to see the tailored experience and immediate time saved.
          </p>
        </div>

        {/* Personas Cards Carousel/Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
          {personas.map((persona) => {
            const Icon = persona.icon;
            const isSelected = activePersona.id === persona.id;
            return (
              <div
                key={persona.id}
                onMouseEnter={() => setActivePersona(persona)}
                onClick={() => setActivePersona(persona)}
                className={`p-4 rounded-2xl cursor-pointer text-center transition-all duration-200 border relative ${
                  isSelected
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-lg -translate-y-1'
                    : 'bg-slate-50 dark:bg-navy-900/60 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-2.5 transition-colors ${
                  isSelected
                    ? 'bg-white/20 dark:bg-slate-900/10 text-white dark:text-slate-900'
                    : 'bg-white dark:bg-slate-800 text-brand-600 dark:text-teal-400 shadow-sm'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold leading-tight">
                  {persona.role}
                </div>
                <div className={`text-[10px] mt-1 line-clamp-1 ${isSelected ? 'text-slate-300 dark:text-slate-600' : 'text-slate-500'}`}>
                  {persona.badge}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Persona Deep View Card */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${activePersona.color} text-white flex items-center justify-center shrink-0 shadow-md`}>
              <activePersona.icon className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-teal-400">
                {activePersona.role}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                “{activePersona.benefit}”
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-lg">
                {activePersona.detail}
              </p>
            </div>
          </div>

          {onBookDemo && (
            <button
              onClick={onBookDemo}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <span>See {activePersona.role} Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
