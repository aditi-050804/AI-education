import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Calendar,
  CheckCircle2,
  BookOpen,
  DollarSign,
  AlertCircle,
  Clock,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  FileCheck,
  Bell,
  Search,
  ChevronRight,
  Layers,
  GraduationCap
} from 'lucide-react';

export const DashboardMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'timetable' | 'ai' | 'finance'>('overview');

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-12 -left-12 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Card 1: 98% Attendance */}
      <motion.div
        animate={{ y: [-4, 6, -4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex absolute -top-6 -left-6 z-20 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#0F1E3D] border border-slate-200 dark:border-slate-700/80 shadow-xl backdrop-blur-md"
      >
        <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-sm">
          98%
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900 dark:text-white">Campus Attendance</div>
          <div className="text-[11px] text-teal-600 dark:text-teal-400 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +2.4% vs last week
          </div>
        </div>
      </motion.div>

      {/* Floating Card 2: ₹4.8L Fees Collected */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="hidden lg:flex absolute -bottom-6 -left-6 z-20 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#0F1E3D] border border-slate-200 dark:border-slate-700/80 shadow-xl backdrop-blur-md"
      >
        <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
          ₹4.8L
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900 dark:text-white">Fees Collected Today</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">Synced to TallyPrime</div>
        </div>
      </motion.div>

      {/* Floating Card 3: 3 Proxy Teachers Available */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden lg:flex absolute -top-6 -right-6 z-20 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#0F1E3D] border border-slate-200 dark:border-slate-700/80 shadow-xl backdrop-blur-md"
      >
        <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
          3
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900 dark:text-white">Proxy Teachers Free</div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400">Instant one-click slot fill</div>
        </div>
      </motion.div>

      {/* Floating Card 4: AI Quiz Ready */}
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="hidden lg:flex absolute -bottom-6 -right-6 z-20 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white dark:bg-[#0F1E3D] border border-slate-200 dark:border-slate-700/80 shadow-xl backdrop-blur-md"
      >
        <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900 dark:text-white">AI Quiz Ready</div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400">Physics: Ch 4 • 24 questions</div>
        </div>
      </motion.div>

      {/* Main OS Window Frame */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0A1224]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
        
        {/* Window Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-navy-900/60">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
            <span className="ml-3 text-xs font-medium text-slate-600 dark:text-slate-400 hidden sm:inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              AI-Education Campus OS • Live Node: Delhi Campus Central
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-[11px] px-2.5 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono flex items-center gap-1.5">
              <span>Term II • Session 2026-27</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">
              AP
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Bar inside product */}
        <div className="flex items-center justify-between px-5 py-2.5 border-b border-slate-100 dark:border-slate-800/60 bg-white dark:bg-[#0B132B] text-xs">
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === 'overview'
                  ? 'bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-700/50'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('timetable')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === 'timetable'
                  ? 'bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-700/50'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Today's Schedule & Proxies
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === 'ai'
                  ? 'bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-700/50'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              AI Study Buddy
            </button>
            <button
              onClick={() => setActiveTab('finance')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === 'finance'
                  ? 'bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-700/50'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Fees & Tally Sync
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs">
            <Bell className="w-3.5 h-3.5 text-amber-500" />
            <span>4 parent alerts sent</span>
          </div>
        </div>

        {/* Dynamic Interactive Body */}
        <div className="p-5 sm:p-7 space-y-6">
          {activeTab === 'overview' && (
            <>
              {/* Quick Stat Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-navy-900/70 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span>Student Attendance</span>
                    <Users className="w-4 h-4 text-brand-600" />
                  </div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    2,842 / 2,900
                  </div>
                  <div className="text-[11px] text-teal-600 dark:text-teal-400 font-medium mt-0.5">
                    98.0% • 58 on excused leave
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-navy-900/70 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span>Today's Classes</span>
                    <Calendar className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    142 Active
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    0 conflicts detected
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-navy-900/70 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span>AI Study Buddy Queries</span>
                    <Sparkles className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    1,120 Solved
                  </div>
                  <div className="text-[11px] text-purple-600 dark:text-purple-400 font-medium mt-0.5">
                    100% textbook-grounded
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-navy-900/70 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span>Tally Sync Status</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Synced (0 sec)
                  </div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                    ₹4,82,400 auto-reconciled
                  </div>
                </div>
              </div>

              {/* Main Content Split: Today's Schedule & AI Assistance */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                
                {/* Left 2 Cols: Real-time Schedule & Teacher Availability */}
                <div className="lg:col-span-2 p-4 rounded-2xl bg-slate-50/60 dark:bg-navy-900/40 border border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center justify-between mb-3.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-600" />
                      Live Academic Schedule (Period 4 - Current)
                    </h4>
                    <span className="text-[11px] text-brand-600 dark:text-brand-400 font-medium">Auto-Allocated</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-10 rounded-full bg-teal-500" />
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            Class 10-A • Advanced Mathematics
                            <span className="text-[10px] px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800">
                              Lab 204
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            Dr. S. Ramanujan • Integral Calculus
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/40 px-2.5 py-1 rounded-lg">
                        In Progress (28m left)
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-10 rounded-full bg-amber-500" />
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            Class 11-B • Constitutional Law & Ethics
                            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                              Moot Court A
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            Prof. Ananya Sen (Substitute: Dr. V. Trivedi assigned in 12s)
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/40 px-2.5 py-1 rounded-lg">
                        Proxy Assigned
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-10 rounded-full bg-indigo-500" />
                        <div>
                          <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            Class 12-Science • Organic Chemistry
                            <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                              Hall 3
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">
                            Dr. Meera Patel • Polymerization Mechanism
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        Upcoming (11:30 AM)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Col: Parent Notifications & AI Study Pulse */}
                <div className="p-4 rounded-2xl bg-slate-50/60 dark:bg-navy-900/40 border border-slate-100 dark:border-slate-800/80 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mb-2.5">
                      <Bell className="w-3.5 h-3.5 text-brand-600" />
                      Live Institutional Feed
                    </h4>
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200/70 dark:border-slate-700/50">
                        <div className="flex items-center justify-between text-[11px] text-slate-500 mb-0.5">
                          <span className="font-semibold text-slate-800 dark:text-slate-200">Parent WhatsApp Alert</span>
                          <span>2m ago</span>
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400">
                          Automated bus GPS tracking & attendance push sent to 52 parents.
                        </p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200/70 dark:border-slate-700/50">
                        <div className="flex items-center justify-between text-[11px] text-slate-500 mb-0.5">
                          <span className="font-semibold text-slate-800 dark:text-slate-200">Tally Integration</span>
                          <span>6m ago</span>
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400">
                          Batch #892: ₹1,20,000 fee receipt posted to Bank Ledger.
                        </p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-800/50">
                        <div className="flex items-center justify-between text-[11px] text-purple-700 dark:text-purple-300 mb-0.5">
                          <span className="font-semibold flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> AI Study Buddy
                          </span>
                          <span>Active</span>
                        </div>
                        <p className="text-[11px] text-purple-900 dark:text-purple-200">
                          34 students completed Chapter 4 quiz with 91% average retention.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </>
          )}

          {activeTab === 'timetable' && (
            <div className="p-4 rounded-2xl bg-slate-50/60 dark:bg-navy-900/40 border border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Smart Timetable & Proxy Engine</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Conflict-free algorithm with real-time substitute matching.</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800 font-medium">
                  Zero Conflicts
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-xs font-mono text-center">
                <div className="p-2 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">09:00 - 10:00</div>
                <div className="p-2 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">10:00 - 11:00</div>
                <div className="p-2 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">11:15 - 12:15</div>
                <div className="p-2 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">12:15 - 01:15</div>
                
                <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800/80 text-left">
                  <div className="font-bold text-brand-900 dark:text-brand-300 text-xs">Physics (Mechanics)</div>
                  <div className="text-[10px] text-brand-700 dark:text-brand-400">Prof. K. Verma • Room 101</div>
                </div>

                <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/80 text-left">
                  <div className="font-bold text-teal-900 dark:text-teal-300 text-xs">Mathematics (Vectors)</div>
                  <div className="text-[10px] text-teal-700 dark:text-teal-400">Dr. Ramanujan • Room 204</div>
                </div>

                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80 text-left relative">
                  <span className="absolute top-1.5 right-1.5 text-[9px] bg-amber-500 text-white px-1 rounded">Proxy</span>
                  <div className="font-bold text-amber-900 dark:text-amber-300 text-xs">Chemistry Lab</div>
                  <div className="text-[10px] text-amber-700 dark:text-amber-400">Dr. Trivedi (Sub) • Lab B</div>
                </div>

                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/80 text-left">
                  <div className="font-bold text-purple-900 dark:text-purple-300 text-xs">Computer Science</div>
                  <div className="text-[10px] text-purple-700 dark:text-purple-400">AI Coding Lab • Server 1</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="p-4 rounded-2xl bg-slate-50/60 dark:bg-navy-900/40 border border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-600" />
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">AI Study Buddy Live Citation Preview</h4>
                </div>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono">Curriculum-Grounded</span>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-brand-600">Student:</span>
                  <span className="text-slate-800 dark:text-slate-200">“Why does the judicial review doctrine apply to constitutional amendments?”</span>
                </div>
                <div className="pl-4 border-l-2 border-brand-500 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-brand-600 dark:text-teal-400">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Citation: Legal Systems textbook • Chapter 8, Section 3.2, Page 144</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                    Under the Basic Structure doctrine affirmed in <mark className="bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 px-1 rounded font-medium">Kesavananda Bharati</mark>, Parliament’s amending power under Article 368 is limited and subject to judicial scrutiny.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'finance' && (
            <div className="p-4 rounded-2xl bg-slate-50/60 dark:bg-navy-900/40 border border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Tally ERP 9 / TallyPrime Real-time Sync</h4>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 2-Way Sync Active
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200 dark:border-slate-700">
                  <div className="text-slate-500 text-[11px]">Fee Collections Today</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">₹4,82,400</div>
                  <div className="text-[10px] text-teal-600 mt-1">42 transactions logged</div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200 dark:border-slate-700">
                  <div className="text-slate-500 text-[11px]">Tally XML Ledger</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">Auto-Exported</div>
                  <div className="text-[10px] text-slate-500 mt-1">0 manual entry required</div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-[#0F1E3D] border border-slate-200 dark:border-slate-700">
                  <div className="text-slate-500 text-[11px]">Reconciliation Error</div>
                  <div className="text-base font-bold text-emerald-600">0.00%</div>
                  <div className="text-[10px] text-emerald-600 mt-1">Bank gateway matched</div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
