import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, UserCheck, Calculator, GraduationCap, HeartHandshake, CheckCircle, ArrowRight, Sparkles, TrendingUp, Calendar, Clock, DollarSign, BookOpen, AlertCircle } from 'lucide-react';

type RoleId = 'principal' | 'teacher' | 'accountant' | 'student' | 'parent';

interface RoleData {
  id: RoleId;
  title: string;
  subtitle: string;
  tagline: string;
  icon: React.ElementType;
  badge: string;
}

const ROLES: RoleData[] = [
  { id: 'principal', title: 'Principal', subtitle: 'Leadership & Accreditation', tagline: 'Complete institutional oversight and governance.', icon: ShieldCheck, badge: 'Executive' },
  { id: 'teacher', title: 'Teacher', subtitle: 'Faculty & Pedagogy', tagline: 'Timetable, 1-tap attendance and proxy management.', icon: UserCheck, badge: 'Classroom' },
  { id: 'accountant', title: 'Accountant', subtitle: 'Bursar & Finance', tagline: 'Bi-directional Tally sync and fee reconciliation.', icon: Calculator, badge: 'Bursar' },
  { id: 'student', title: 'Student', subtitle: 'Learner & Cohort', tagline: 'Textbook-grounded AI mentor with verified citations.', icon: GraduationCap, badge: 'Learner' },
  { id: 'parent', title: 'Parent', subtitle: 'Guardian & Family', tagline: 'Real-time attendance, fee receipts and multi-child tracking.', icon: HeartHandshake, badge: 'Family' }
];

export const Scene04YourPeople: React.FC = () => {
  const [activeRole, setActiveRole] = useState<RoleId>('principal');

  return (
    <section className="relative py-24 px-6 bg-[#F8F4EB] dark:bg-[#060B14] border-t border-amber-900/20 dark:border-amber-400/20 transition-colors duration-500 overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto w-full space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-amber-900/20 dark:border-amber-400/20 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-amber-900 dark:text-amber-400 font-bold">
              <Sparkles className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>03 / ADAPTIVE PERSPECTIVES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
              Your campus. <br />
              <span className="italic font-normal text-amber-900 dark:text-amber-300">Your people.</span>
            </h2>
            <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              One intelligent platform. Tailored interfaces for every role on campus.
            </p>
          </div>

          <div className="text-xs sm:text-sm font-mono font-bold text-amber-900 dark:text-amber-400">
            <span>SELECT A ROLE TO TRANSFORM THE WORKSPACE ↓</span>
          </div>
        </div>

        {/* Role Selector Controls (Minimal Editorial Folio Tab Strip, No Cards) */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-amber-900/20 dark:border-amber-400/20 pb-2 gap-2">
          {ROLES.map((role) => {
            const isSelected = activeRole === role.id;
            const Icon = role.icon;

            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`py-3 px-4 sm:px-6 border-b-2 transition-all text-left flex items-center gap-3 cursor-pointer -mb-[2px] ${
                  isSelected
                    ? 'border-amber-900 text-amber-900 dark:border-amber-400 dark:text-amber-300 font-bold'
                    : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-100'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-amber-900 dark:text-amber-400 stroke-[2.5]' : ''}`} />
                <div>
                  <div className="font-serif font-bold text-base sm:text-lg leading-tight">
                    {role.title}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider hidden sm:block">
                    {role.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* THE CENTER VISUAL: COMPLETELY MORPHS BASED ON ACTIVE ROLE (No Card Frame - Organic Flow) */}
        <div className="relative w-full py-4 min-h-[420px] overflow-hidden">
          
          <AnimatePresence mode="wait">
            
            {/* 1. PRINCIPAL VIEW */}
            {activeRole === 'principal' && (
              <motion.div
                key="principal"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-900/20 dark:border-amber-400/20 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-900/10 dark:bg-amber-400/10 border border-amber-900/30 flex items-center justify-center text-amber-900 dark:text-amber-300">
                      <ShieldCheck className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-slate-50">
                        Institutional Governance & Pulse
                      </h3>
                      <span className="text-xs font-mono text-amber-900 dark:text-amber-400 font-bold uppercase tracking-wider">
                        Real-time campus health • NAAC / CBSE Readiness: 96%
                      </span>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-bold self-start sm:self-auto">
                    ● ALL SYSTEMS HEALTHY
                  </span>
                </div>

                {/* Dashboard Metrics (Editorial Lines, No Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="border-l-2 border-amber-800/40 dark:border-amber-400/40 pl-5 space-y-1">
                    <span className="font-mono text-xs text-amber-900 dark:text-amber-400 font-bold uppercase">CAMPUS ATTENDANCE TODAY</span>
                    <div className="text-4xl font-bold text-slate-950 dark:text-slate-50">94.8%</div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">3,071 of 3,240 students checked in across 82 classrooms.</p>
                  </div>
                  <div className="border-l-2 border-amber-800/40 dark:border-amber-400/40 pl-5 space-y-1">
                    <span className="font-mono text-xs text-amber-900 dark:text-amber-400 font-bold uppercase">TEACHER PROXIES ASSIGNED</span>
                    <div className="text-4xl font-bold text-emerald-700 dark:text-emerald-400">100% Covered</div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">3 absences detected at 07:45 AM; all 3 auto-assigned without disruption.</p>
                  </div>
                  <div className="border-l-2 border-amber-800/40 dark:border-amber-400/40 pl-5 space-y-1">
                    <span className="font-mono text-xs text-amber-900 dark:text-amber-400 font-bold uppercase">TERM FEE COLLECTION</span>
                    <div className="text-4xl font-bold text-slate-950 dark:text-slate-50">₹1.84 Cr / ₹2.10 Cr</div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">87.6% collected on schedule; 2-way synchronized with TallyPrime.</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-amber-900/20 dark:border-amber-400/20 flex items-center justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>EXECUTIVE AUDIT TRAIL: IMMUTABLE HISTORICAL ARCHIVE</span>
                  <span className="text-amber-900 dark:text-amber-400">UPDATED 2 MINS AGO</span>
                </div>
              </motion.div>
            )}

            {/* 2. TEACHER VIEW */}
            {activeRole === 'teacher' && (
              <motion.div
                key="teacher"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-900/20 dark:border-amber-400/20 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-sky-900/10 dark:bg-sky-400/10 border border-sky-900/30 flex items-center justify-center text-sky-700 dark:text-sky-300">
                      <UserCheck className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-slate-50">
                        Faculty Daily Desk • Prof. Sharma
                      </h3>
                      <span className="text-xs font-mono text-sky-700 dark:text-sky-400 font-bold uppercase tracking-wider">
                        Senior Physics Faculty • Department of Science
                      </span>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 rounded-full border border-sky-500/40 bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 font-mono text-xs font-bold self-start sm:self-auto">
                    TODAY: 4 PERIODS • 1 LAB
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="border-l-2 border-sky-600/40 pl-5 space-y-1">
                    <span className="font-mono text-xs text-sky-700 dark:text-sky-400 font-bold uppercase">CURRENT PERIOD</span>
                    <div className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-slate-50">Class 10-A (Room 204)</div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">Subject: Optics & Refraction. 38/40 students present (1-tap QR roll taken).</p>
                  </div>
                  <div className="border-l-2 border-sky-600/40 pl-5 space-y-1">
                    <span className="font-mono text-xs text-sky-700 dark:text-sky-400 font-bold uppercase">SYLLABUS PROGRESS</span>
                    <div className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-slate-50">84% On Track</div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">Chapter 7 completed 2 days ahead of mid-term board curriculum.</p>
                  </div>
                  <div className="border-l-2 border-sky-600/40 pl-5 space-y-1">
                    <span className="font-mono text-xs text-sky-700 dark:text-sky-400 font-bold uppercase">SUBMISSION & EXAMS</span>
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-700 dark:text-emerald-400">AI Pre-Graded</div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">35 lab journals auto-screened with rubric marking awaiting 1-tap review.</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-amber-900/20 dark:border-amber-400/20 flex items-center justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>PROXY STATUS: NO COVERAGE NEEDED TODAY</span>
                  <span className="text-sky-700 dark:text-sky-300">NEXT CLASS: 11:30 AM LAB 02</span>
                </div>
              </motion.div>
            )}

            {/* 3. ACCOUNTANT VIEW */}
            {activeRole === 'accountant' && (
              <motion.div
                key="accountant"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-900/20 dark:border-amber-400/20 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-900/10 dark:bg-emerald-400/10 border border-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-300">
                      <Calculator className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-slate-50">
                        Bursar Ledger & Tally Sync Portal
                      </h3>
                      <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">
                        Native Bi-Directional Tally ERP 9 / TallyPrime Integration
                      </span>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-bold self-start sm:self-auto">
                    ● TALLYPRIME CONNECTED • PORT 9000
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="border-l-2 border-emerald-700/40 pl-5 space-y-1">
                    <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 font-bold uppercase">TODAY'S COLLECTIONS</span>
                    <div className="text-4xl font-bold text-slate-950 dark:text-slate-50">₹3,42,500</div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">42 online UPI/NEFT receipts + 6 counter transactions auto-reconciled.</p>
                  </div>
                  <div className="border-l-2 border-emerald-700/40 pl-5 space-y-1">
                    <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 font-bold uppercase">PENDING RECONCILIATIONS</span>
                    <div className="text-4xl font-bold text-emerald-700 dark:text-emerald-400">0 Discrepancies</div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">All bank credits matched directly to student admission numbers.</p>
                  </div>
                  <div className="border-l-2 border-emerald-700/40 pl-5 space-y-1">
                    <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 font-bold uppercase">VOUCHERS PUSHED TO TALLY</span>
                    <div className="text-4xl font-bold text-slate-950 dark:text-slate-50">48 / 48 Synced</div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">Direct ledger journal posting with student name and receipt stamp.</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-amber-900/20 dark:border-amber-400/20 flex items-center justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>LAST SYNC: VOUCHER #RC-2026-0914 GENERATED 38 SECONDS AGO</span>
                  <span className="text-emerald-700 dark:text-emerald-400">GST AUDIT READY</span>
                </div>
              </motion.div>
            )}

            {/* 4. STUDENT VIEW */}
            {activeRole === 'student' && (
              <motion.div
                key="student"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-900/20 dark:border-amber-400/20 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-900/10 dark:bg-amber-400/10 border border-amber-900/30 flex items-center justify-center text-amber-900 dark:text-amber-300">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-slate-50">
                        AI Study Buddy & Knowledge Desk
                      </h3>
                      <span className="text-xs font-mono text-amber-900 dark:text-amber-400 font-bold uppercase tracking-wider">
                        Grounded Strictly in School Textbooks & Faculty Notes
                      </span>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 font-mono text-xs font-bold self-start sm:self-auto">
                    NCERT & SCHOOL SYLLABUS SYNCED
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="border-l-2 border-amber-800/40 dark:border-amber-400/40 pl-5 space-y-1">
                    <span className="font-mono text-xs text-amber-900 dark:text-amber-400 font-bold uppercase">INSTANT DOUBT RESOLUTION</span>
                    <div className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-slate-50">"How does Photosystem II work?"</div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">AI response with exact citation: <strong className="text-amber-900 dark:text-amber-300">Biology Vol 1 • Chapter 13 • Page 211</strong>.</p>
                  </div>
                  <div className="border-l-2 border-amber-800/40 dark:border-amber-400/40 pl-5 space-y-1">
                    <span className="font-mono text-xs text-amber-900 dark:text-amber-400 font-bold uppercase">ADAPTIVE PRACTICE QUIZ</span>
                    <div className="text-4xl font-bold text-slate-950 dark:text-slate-50">Score: 4 / 5</div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">Identified weak topic: Electron transport chain. Generated 3 reinforcement questions.</p>
                  </div>
                  <div className="border-l-2 border-amber-800/40 dark:border-amber-400/40 pl-5 space-y-1">
                    <span className="font-mono text-xs text-amber-900 dark:text-amber-400 font-bold uppercase">EXAM READINESS</span>
                    <div className="text-4xl font-bold text-emerald-700 dark:text-emerald-400">92% Ready</div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">Upcoming Physics Term Exam: All 6 chapters covered with revision flashcards.</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-amber-900/20 dark:border-amber-400/20 flex items-center justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>AI SAFETY: VERIFIABLE CITATIONS ONLY • ZERO EXTERNAL HALLUCINATION</span>
                  <span className="text-amber-900 dark:text-amber-400">24/7 ACCESSIBLE</span>
                </div>
              </motion.div>
            )}

            {/* 5. PARENT VIEW */}
            {activeRole === 'parent' && (
              <motion.div
                key="parent"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-900/20 dark:border-amber-400/20 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-900/10 dark:bg-teal-400/10 border border-teal-900/30 flex items-center justify-center text-teal-700 dark:text-teal-300">
                      <HeartHandshake className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-slate-50">
                        Parent & Guardian Hub • Sharma Family
                      </h3>
                      <span className="text-xs font-mono text-teal-700 dark:text-teal-400 font-bold uppercase tracking-wider">
                        Direct Attendance, Fee Receipts & Multi-Child Progress
                      </span>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 rounded-full border border-teal-500/40 bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 font-mono text-xs font-bold self-start sm:self-auto">
                    2 CHILDREN ENROLLED
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="border-l-2 border-teal-700/40 pl-5 space-y-1">
                    <span className="font-mono text-xs text-teal-700 dark:text-teal-400 font-bold uppercase">AARAV (CLASS 10-A)</span>
                    <div className="text-3xl font-bold text-slate-950 dark:text-slate-50">Present (08:04 AM)</div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">School bus #4 arrived safely. Term 1 fees fully paid. Report card: A+.</p>
                  </div>
                  <div className="border-l-2 border-teal-700/40 pl-5 space-y-1">
                    <span className="font-mono text-xs text-teal-700 dark:text-teal-400 font-bold uppercase">DIYA (CLASS 7-B)</span>
                    <div className="text-3xl font-bold text-slate-950 dark:text-slate-50">Present (08:08 AM)</div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">Annual Sports Day registration open. Science test marks: 19/20.</p>
                  </div>
                  <div className="border-l-2 border-teal-700/40 pl-5 space-y-1">
                    <span className="font-mono text-xs text-teal-700 dark:text-teal-400 font-bold uppercase">COMMUNICATION PULSE</span>
                    <div className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">Direct WhatsApp</div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">Instant circulars and teacher meeting invites delivered directly to parent phone.</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-amber-900/20 dark:border-amber-400/20 flex items-center justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>MULTI-CHILD ACCOUNT LINKING: 1-TAP SWITCH BETWEEN SIBLINGS</span>
                  <span className="text-teal-700 dark:text-teal-400">NEXT EVENT: PTM ON FRIDAY</span>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
