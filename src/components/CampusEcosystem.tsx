import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Sparkles,
  Award,
  FileCheck2,
  DollarSign,
  MessageSquare,
  Users,
  GraduationCap,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface EcosystemNode {
  id: string;
  name: string;
  icon: any;
  color: string;
  badge: string;
  summary: string;
  highlights: string[];
}

const nodes: EcosystemNode[] = [
  {
    id: 'academics',
    name: 'Academic Operations',
    icon: Calendar,
    color: 'from-blue-500 to-indigo-600',
    badge: 'Conflict-Free',
    summary: 'Automated weekly master timetable, intelligent room allocation, and instant substitute discovery.',
    highlights: ['Zero slot overlaps', '1-click proxy teacher matching', 'Multi-department syllabi tracking']
  },
  {
    id: 'ai-learning',
    name: 'AI Learning',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-600',
    badge: 'Grounded RAG',
    summary: 'Curriculum-grounded AI Study Buddy citing exact textbook chapters, sections, and pages.',
    highlights: ['Institutional syllabus only', 'Citation hyperlinking', '24/7 student doubt resolution']
  },
  {
    id: 'assessments',
    name: 'Assessments & Grading',
    icon: Award,
    color: 'from-amber-500 to-orange-600',
    badge: 'Automated Rules',
    summary: 'Seamless marks entry, AI-assisted rubric grading, weighted GPA generation, and digital institutional seals.',
    highlights: ['Custom grading scales (CBSE, ICSE, UGC)', 'Instant report card generation', 'Cryptographic tamper checks']
  },
  {
    id: 'exams',
    name: 'Admissions & Exams',
    icon: FileCheck2,
    color: 'from-emerald-500 to-teal-600',
    badge: 'QR Hall Tickets',
    summary: 'End-to-end exam lifecycle from question bank generation to biometric QR hall ticket scanning.',
    highlights: ['Anti-cheat dynamic QR codes', 'Automated seating arrangement', 'Rapid AI paper grading']
  },
  {
    id: 'finance',
    name: 'Finance & Tally Sync',
    icon: DollarSign,
    color: 'from-cyan-500 to-blue-600',
    badge: 'TallyPrime Native',
    summary: 'Direct fee payment gateway integration synced bi-directionally with Tally ERP 9 / TallyPrime ledgers.',
    highlights: ['Zero manual bank reconciliation', 'Automated GST & receipt generation', 'Defaulter SMS reminders']
  },
  {
    id: 'communication',
    name: 'Campus Communication',
    icon: MessageSquare,
    color: 'from-indigo-500 to-brand-600',
    badge: 'Targeted Channels',
    summary: 'Hierarchical campus channels from Institution level to Department, Class, and Student parent circles.',
    highlights: ['Official verified broadcast feeds', 'Emergency campus alerts', 'WhatsApp API integration']
  },
  {
    id: 'parents',
    name: 'Parent Portal',
    icon: Users,
    color: 'from-rose-500 to-red-600',
    badge: 'Multi-Child Switcher',
    summary: 'Dedicated parent app with live attendance alerts, GPS bus tracking, and 1-tap fee payments.',
    highlights: ['Multi-child unified dashboard', 'Daily homework & performance pulse', 'Direct teacher conference booking']
  },
  {
    id: 'student-experience',
    name: 'Student Experience',
    icon: GraduationCap,
    color: 'from-teal-500 to-emerald-600',
    badge: 'VPET Companion',
    summary: 'Personalized student dashboard with adaptive diagnostic quizzes, timetable notifications, and AI companion.',
    highlights: ['Gamified skill progress meters', 'Offline textbook access', 'Voice-enabled AI tutor']
  }
];

export const CampusEcosystem: React.FC<{ onExploreFeature?: () => void }> = ({ onExploreFeature }) => {
  const [selectedNode, setSelectedNode] = useState<EcosystemNode>(nodes[0]);

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-[#0A1224]/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Campus Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Everything your institution needs.
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base">
            Click any module to inspect how AI-Education connects every campus workflow in one shared environment.
          </p>
        </div>

        {/* Interactive Grid & Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center: Interactive Circular / Grid Modules */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {nodes.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`p-4 rounded-2xl text-left transition-all duration-200 border relative group focus:outline-none ${
                    isSelected
                      ? 'bg-white dark:bg-navy-900 border-brand-500 shadow-xl ring-2 ring-brand-500/20 -translate-y-1'
                      : 'bg-white/80 dark:bg-[#0D162B] border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${node.color} flex items-center justify-center text-white mb-3 shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight mb-1">
                    {node.name}
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                    {node.badge}
                  </span>

                  {isSelected && (
                    <motion.div
                      layoutId="ecosystemIndicator"
                      className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-brand-600 dark:bg-teal-400"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Deep Dive Inspector Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="p-7 rounded-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${selectedNode.color} text-white flex items-center justify-center shadow-lg`}>
                      <selectedNode.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-brand-600 dark:text-teal-400">
                        Institutional Module
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {selectedNode.name}
                      </h3>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                    {selectedNode.badge}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {selectedNode.summary}
                </p>

                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key Capabilities
                  </h4>
                  {selectedNode.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {onExploreFeature && (
                  <button
                    onClick={onExploreFeature}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>View in Features Explorer</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
