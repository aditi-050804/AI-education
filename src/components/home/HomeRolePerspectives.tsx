import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import {
  ShieldCheck,
  GraduationCap,
  BookOpen,
  Users,
  CheckCircle2,
  MapPin,
  CreditCard,
  QrCode,
  Sparkles,
} from 'lucide-react';
import type { PageId } from '../../types';
import {
  ScrollReveal,
  RevealEyebrow,
  RevealHeading,
  RevealVisual
} from '../common/ScrollReveal';

interface HomeRolePerspectivesProps {
  onNavigate: (page: PageId) => void;
}

export const HomeRolePerspectives: React.FC<HomeRolePerspectivesProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedRole, setSelectedRole] = useState<'principal' | 'teacher' | 'student' | 'parent'>('principal');

  const roleIds: ('principal' | 'teacher' | 'student' | 'parent')[] = [
    'principal',
    'teacher',
    'student',
    'parent',
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const count = roleIds.length;
    // Map with a tiny buffer at top and bottom so first and last role remain comfortably stable
    const progress = Math.max(0, Math.min(0.999, (latest - 0.05) / 0.90));
    const calculatedIndex = Math.min(count - 1, Math.max(0, Math.floor(progress * count)));
    setSelectedRole(roleIds[calculatedIndex]);
  });

  const handleRoleSelect = (roleId: 'principal' | 'teacher' | 'student' | 'parent', idx: number) => {
    setSelectedRole(roleId);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const containerTop = rect.top + scrollTop;
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable > 0) {
        const targetProgress = 0.05 + ((idx + 0.5) / roleIds.length) * 0.90;
        const targetScroll = containerTop + targetProgress * totalScrollable;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    }
  };

  // Interactive state for Teacher persona
  const [studentsRoster, setStudentsRoster] = useState([
    { id: 1, name: 'Aarav Sharma', roll: '101', present: true },
    { id: 2, name: 'Diya Patel', roll: '102', present: true },
    { id: 3, name: 'Rohan Verma', roll: '103', present: false },
    { id: 4, name: 'Ananya Iyer', roll: '104', present: true },
  ]);

  const toggleStudent = (id: number) => {
    setStudentsRoster((prev) =>
      prev.map((s) => (s.id === id ? { ...s, present: !s.present } : s))
    );
  };

  // Interactive state for Parent persona
  const [busProgress, setBusProgress] = useState(65);
  const [feePaid, setFeePaid] = useState(false);

  const roles = [
    {
      id: 'principal',
      label: 'Principal & Trustees',
      tagline: 'Complete institutional visibility.',
      summary: 'Real-time telemetry across attendance, financial ledgers, and faculty substitutions.',
      icon: ShieldCheck,
      capabilities: [
        'Global campus attendance & revenue metrics',
        'Automated CBSE, NAAC & NIRF audits',
        'Autonomous faculty proxy monitors',
        'Cryptographic transcript verification',
      ],
      metric: '18 Departments in One View',
      renderLiveHUD: () => (
        <div className="space-y-3 font-sans text-xs">
          <div className="flex items-center justify-between text-[#C87D32] border-b border-[#C87D32]/20 pb-2">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              CAMPUS EXECUTIVE TELEMETRY
            </span>
            <span className="text-emerald-600 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              ALL DEPTS SYNCED
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#0A101D] space-y-0.5">
              <div className="text-[11px] text-[#5A6578] dark:text-[#9DA9BE]">ATTENDANCE</div>
              <div className="font-serif text-2xl font-bold text-[#121926] dark:text-[#F5EFE6]">
                97.4%
              </div>
              <div className="text-xs text-emerald-600 font-semibold">1,168 Present</div>
            </div>

            <div className="p-3 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#0A101D] space-y-0.5">
              <div className="text-[11px] text-[#5A6578] dark:text-[#9DA9BE]">TODAY'S FEES</div>
              <div className="font-serif text-2xl font-bold text-[#121926] dark:text-[#F5EFE6]">
                ₹ 14.8 L
              </div>
              <div className="text-xs text-emerald-600 font-semibold">Tally XML Synced</div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl border border-emerald-600/30 bg-emerald-500/5 flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-300">
            <span>Audit Status: CBSE &amp; DPDP 2023</span>
            <span className="font-bold">Compliant ✓</span>
          </div>
        </div>
      ),
    },
    {
      id: 'teacher',
      label: 'Faculty & Educators',
      tagline: 'Less paperwork, more teaching.',
      summary: '1-tap attendance, autonomous proxy matching, and curriculum-aligned lesson plans.',
      icon: BookOpen,
      capabilities: [
        '1-tap roll call with automated parent SMS',
        'Instant proxy matching on unplanned leave',
        'AI rubric & question paper blueprints',
        'Classroom mastery heatmaps',
      ],
      metric: '4.5 Hours Saved Weekly',
      renderLiveHUD: () => (
        <div className="space-y-3 font-sans text-xs">
          <div className="flex items-center justify-between text-[#C87D32] border-b border-[#C87D32]/20 pb-2">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              CLASS 11-B ATTENDANCE
            </span>
            <span className="text-[11px] text-[#5A6578] dark:text-[#9DA9BE]">Tap name to toggle</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {studentsRoster.map((s) => (
              <button
                key={s.id}
                onClick={() => toggleStudent(s.id)}
                className={`p-2.5 rounded-xl border text-left transition-all flex items-center justify-between ${s.present
                    ? 'border-emerald-600/40 bg-emerald-500/10 text-[#121926] dark:text-[#F5EFE6]'
                    : 'border-rose-500/40 bg-rose-500/10 text-rose-700 dark:text-rose-300'
                  }`}
              >
                <div>
                  <div className="font-bold text-xs">{s.name}</div>
                  <div className="text-[11px] opacity-70">Roll #{s.roll}</div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${s.present ? 'bg-emerald-500/20 text-emerald-600' : 'bg-rose-500/20 text-rose-600'}`}>
                  {s.present ? 'P' : 'ABSENT'}
                </span>
              </button>
            ))}
          </div>

          <div className="p-2.5 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#0A101D] text-xs">
            <span className="text-[#C87D32] font-bold block text-[11px]">AI LESSON PLAN</span>
            <span className="text-[#121926] dark:text-[#F5EFE6]">
              Ch. 8 Gravitation — 45m breakdown + 3 socratic questions ready.
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'student',
      label: 'Students & Learners',
      tagline: 'Socratic tutor grounded in syllabus.',
      summary: '24/7 doubt resolution with textbook citations and personalized revision tracking.',
      icon: GraduationCap,
      capabilities: [
        'Socratic doubt clearance with NCERT citations',
        'Live timetable and room allocations',
        'Digital marksheet & hall ticket locker',
        'Personalized weak-topic revision loops',
      ],
      metric: 'Zero Hallucinations Guarantee',
      renderLiveHUD: () => (
        <div className="space-y-3 font-sans text-xs">
          <div className="flex items-center justify-between text-[#C87D32] border-b border-[#C87D32]/20 pb-2">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              STUDENT DESK
            </span>
            <span className="text-amber-500 font-bold">🔥 14-Day Streak</span>
          </div>

          <div className="p-2.5 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#0A101D] flex items-center justify-between">
            <div>
              <span className="text-[11px] text-[#C87D32] font-bold block">NEXT LECTURE</span>
              <span className="font-serif text-base font-bold text-[#121926] dark:text-[#F5EFE6]">
                Calculus (Room 202)
              </span>
            </div>
            <span className="text-emerald-600 font-bold text-xs">10:15 AM</span>
          </div>

          <div className="p-2.5 rounded-xl border border-emerald-600/30 bg-emerald-500/5 space-y-1">
            <span className="text-xs text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-500" />
              SOCRATIC CITATION VERIFIED
            </span>
            <p className="text-xs text-[#121926] dark:text-[#F5EFE6]">
              "Simple Harmonic Motion energy balance verified via NCERT Page 342."
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'parent',
      label: 'Parents & Guardians',
      tagline: 'Live bus tracking and instant fee receipts.',
      summary: 'Real-time transit updates, attendance alerts, and 1-click digital payments.',
      icon: Users,
      capabilities: [
        'Live bus GPS telemetry with arrival alerts',
        'Instant digital fee payment via UPI',
        'Daily verified attendance updates',
        'Direct teacher messaging without personal numbers',
      ],
      metric: '100% Real-Time Peace of Mind',
      renderLiveHUD: () => (
        <div className="space-y-3 font-sans text-xs">
          <div className="flex items-center justify-between text-[#C87D32] border-b border-[#C87D32]/20 pb-2">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-rose-500 animate-bounce" />
              BUS #14 GPS TELEMETRY
            </span>
            <span className="text-emerald-600 font-bold">4 MINS TO GATE 2</span>
          </div>

          <div className="p-2.5 rounded-xl border border-[#C87D32]/20 bg-[#FAF5EB] dark:bg-[#0A101D] space-y-2">
            <div className="w-full bg-[#121926]/10 dark:bg-white/10 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-700"
                style={{ width: `${busProgress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-emerald-600 font-bold">32 km/h • GPS Locked</span>
              <button
                onClick={() => setBusProgress((p) => (p >= 90 ? 30 : p + 20))}
                className="text-[#C87D32] hover:underline font-semibold"
              >
                Simulate Ping
              </button>
            </div>
          </div>

          <div className="p-2.5 rounded-xl border border-[#C87D32]/25 bg-[#FAF5EB] dark:bg-[#0A101D] flex items-center justify-between">
            <div>
              <div className="text-[11px] text-[#5A6578] dark:text-[#9DA9BE]">TERM II FEES</div>
              <div className="font-serif text-lg font-bold text-[#121926] dark:text-[#F5EFE6]">
                ₹ 45,000.00
              </div>
            </div>
            <button
              onClick={() => setFeePaid(!feePaid)}
              className={`px-3.5 py-1.5 rounded-full font-bold text-xs transition-all ${feePaid ? 'bg-emerald-600 text-white' : 'bg-[#C87D32] text-white shadow-xs'
                }`}
            >
              {feePaid ? '✓ Paid (Receipt #4928)' : 'Pay via UPI'}
            </button>
          </div>
        </div>
      ),
    },
  ];

  const current = roles.find((r) => r.id === selectedRole) || roles[0];
  const Icon = current.icon;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh] scroll-mt-24 border-t border-[#C87D32]/15"
    >
      <div className="sticky top-24 pt-4 pb-12">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-12 space-y-6 sm:space-y-8">
          {/* Section Header */}
          <div className="space-y-2">
            <RevealEyebrow>
              <span className="text-xs font-bold tracking-widest text-[#C87D32] dark:text-[#E5A955] uppercase block font-sans">
                05 / ADAPTIVE ROLES
              </span>
            </RevealEyebrow>
            <RevealHeading>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-tight">
                Tailored to how <br />
                <span className="italic font-normal text-[#C87D32] dark:text-[#E5A955]">
                  everyone on campus works.
                </span>
              </h2>
            </RevealHeading>
          </div>

          {/* Role Selectors & Dynamic Role Display */}
          <RevealVisual>
            <div className="flex flex-wrap items-center justify-between gap-3 font-sans text-xs pb-3 border-b border-[#C87D32]/20">
              <div className="flex flex-wrap items-center gap-2">
                {roles.map((r, idx) => {
                  const isSelected = selectedRole === r.id;
                  return (
                    <button
                      key={r.id}
                      onClick={() => handleRoleSelect(r.id as any, idx)}
                      className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${isSelected
                          ? 'text-[#FAF5EB] dark:text-[#070B13] font-bold shadow-md'
                          : 'text-[#5A6578] dark:text-[#9DA9BE] hover:text-[#121926] dark:hover:text-[#F5EFE6]'
                        }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="activeRolePill"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          className="absolute inset-0 rounded-full bg-[#121926] dark:bg-[#F5EFE6] border border-[#C87D32]"
                        />
                      )}
                      <span className="relative z-10">{r.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Scroll Indicator Status */}
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#C87D32] dark:text-[#E5A955]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C87D32] animate-pulse" />
                <span>SCROLL TO ADVANCE ROLES ({roleIds.indexOf(selectedRole) + 1}/4)</span>
              </div>
            </div>

            {/* Micro Progress Bar filling with the current role */}
            <div className="h-[2px] w-full bg-[#C87D32]/15 rounded-full overflow-hidden mt-3">
              <motion.div
                className="h-full bg-[#C87D32]"
                animate={{ width: `${((roleIds.indexOf(selectedRole) + 1) / roleIds.length) * 100}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>

            {/* Dynamic Role Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-6"
              >
                {/* Left Thesis */}
                <div className="lg:col-span-5 space-y-4 font-sans">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C87D32]/30 bg-[#C87D32]/5 text-[#C87D32] text-xs font-bold uppercase tracking-wider">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{current.label.toUpperCase()}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#121926] dark:text-[#F5EFE6] leading-snug">
                    {current.tagline}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#526071] dark:text-[#A6B4C9] leading-relaxed">
                    {current.summary}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {current.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#121926] dark:text-[#F5EFE6]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <span className="text-xs text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{current.metric}</span>
                    </span>
                  </div>
                </div>

                {/* Right Live Simulation HUD */}
                <div className="lg:col-span-7">{current.renderLiveHUD()}</div>
              </motion.div>
            </AnimatePresence>
          </RevealVisual>
        </div>
      </div>
    </section>
  );
};
