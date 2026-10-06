import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, UserX, UserCheck, Sparkles, CheckCircle2, ArrowRight, Clock, AlertTriangle, RefreshCw } from 'lucide-react';

interface PeriodSlot {
  period: number;
  time: string;
  subject: string;
  teacher: string;
  room: string;
  status: 'normal' | 'absent' | 'proxy';
  proxyTeacher?: string;
}

const INITIAL_SCHEDULE: PeriodSlot[] = [
  { period: 1, time: '08:30 - 09:15', subject: 'Mathematics', teacher: 'Dr. Mukherjee', room: 'Room 201', status: 'normal' },
  { period: 2, time: '09:20 - 10:05', subject: 'English Lit.', teacher: 'Mrs. D’Souza', room: 'Room 201', status: 'normal' },
  { period: 3, time: '10:15 - 11:00', subject: 'Physics', teacher: 'Prof. Sharma', room: 'Lab 03', status: 'normal' },
  { period: 4, time: '11:05 - 11:50', subject: 'Chemistry', teacher: 'Dr. Kulkarni', room: 'Lab 01', status: 'normal' },
  { period: 5, time: '12:30 - 01:15', subject: 'Computer Sci.', teacher: 'Mr. Verma', room: 'Lab 04', status: 'normal' }
];

export const Scene06SmartTimetable: React.FC = () => {
  const [schedule, setSchedule] = useState<PeriodSlot[]>(INITIAL_SCHEDULE);
  const [stage, setStage] = useState<'normal' | 'absence' | 'searching' | 'assigned'>('normal');

  const handleSimulateAbsence = () => {
    setStage('absence');
    setSchedule(prev => prev.map(slot => slot.period === 3 ? { ...slot, status: 'absent' } : slot));

    setTimeout(() => {
      setStage('searching');
    }, 1200);

    setTimeout(() => {
      setStage('assigned');
      setSchedule(prev => prev.map(slot => slot.period === 3 ? {
        ...slot,
        status: 'proxy',
        proxyTeacher: 'Prof. Ananya (Applied Physics)'
      } : slot));
    }, 2800);
  };

  const handleReset = () => {
    setStage('normal');
    setSchedule(INITIAL_SCHEDULE);
  };

  return (
    <section className="relative py-24 px-6 bg-[#F8F4EB] dark:bg-[#060B14] border-t border-amber-900/20 dark:border-amber-400/20 transition-colors duration-500 overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto w-full space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-amber-900/20 dark:border-amber-400/20 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-amber-900 dark:text-amber-400 font-bold">
              <Calendar className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <span>05 / SMART TIMETABLE ENGINE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
              When plans change, <br />
              <span className="italic font-normal text-amber-900 dark:text-amber-300">the campus keeps moving.</span>
            </h2>
            <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Instant autonomous proxy allocation without morning staffroom confusion.
            </p>
          </div>

          {/* Interactive Trigger Button */}
          <div className="flex items-center gap-3">
            {stage === 'normal' ? (
              <button
                onClick={handleSimulateAbsence}
                className="px-6 py-3 rounded-full bg-amber-900 dark:bg-amber-400 text-white dark:text-slate-950 font-mono text-xs font-bold tracking-wider hover:bg-amber-800 transition-all cursor-pointer shadow-lg flex items-center gap-2"
              >
                <UserX className="w-4 h-4" />
                <span>SIMULATE TEACHER ABSENCE</span>
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-full border-2 border-amber-900/40 dark:border-amber-400/40 text-amber-900 dark:text-amber-300 font-mono text-xs font-bold tracking-wider hover:bg-amber-900/10 transition-all cursor-pointer flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>RESET TIMETABLE</span>
              </button>
            )}
          </div>
        </div>

        {/* Live Timetable Surface (Card Frame Removed - Pure Ledger Grid) */}
        <div className="relative w-full py-2 space-y-6">
          
          {/* Status Alert Banner */}
          <div className="flex items-center justify-between border-b-2 border-amber-900/20 dark:border-amber-400/20 pb-4 text-xs font-mono font-bold">
            <span className="text-slate-700 dark:text-slate-300">
              GRADE 10-A MASTER SCHEDULE • WEDNESDAY
            </span>
            <div>
              {stage === 'normal' && (
                <span className="text-emerald-700 dark:text-emerald-400">● ALL 5 PERIODS STAFFED</span>
              )}
              {stage === 'absence' && (
                <span className="text-rose-700 dark:text-rose-400 flex items-center gap-1.5 animate-pulse font-bold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>UNEXPECTED ABSENCE: PROF. SHARMA (PERIOD 3)</span>
                </span>
              )}
              {stage === 'searching' && (
                <span className="text-sky-700 dark:text-sky-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 animate-spin-slow" />
                  <span>AI SEARCHING 48 FACULTY PROFILES FOR COMPETENCY & FREE SLOTS...</span>
                </span>
              )}
              {stage === 'assigned' && (
                <span className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>PROXY ASSIGNED: PROF. ANANYA • DISPATCHED VIA WHATSAPP</span>
                </span>
              )}
            </div>
          </div>

          {/* Timetable Rows (Clean Ledger Entries, No Cards) */}
          <div className="space-y-3">
            {schedule.map((slot) => {
              const isAbsent = slot.status === 'absent';
              const isProxy = slot.status === 'proxy';

              return (
                <motion.div
                  key={slot.period}
                  layout
                  className={`p-4 sm:p-5 rounded-xl border-2 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    isAbsent
                      ? 'border-rose-500 bg-rose-50/60 dark:bg-rose-950/40'
                      : isProxy
                      ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 shadow-md'
                      : 'border-amber-900/20 dark:border-amber-400/20 bg-[#FAF6EE] dark:bg-[#0C1424]'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-sm sm:text-base font-bold text-amber-900 dark:text-amber-400 w-24">
                      PERIOD 0{slot.period}
                    </span>
                    <span className="font-mono text-xs text-slate-600 dark:text-slate-400 hidden sm:inline-block w-28 font-medium">
                      {slot.time}
                    </span>
                    <div>
                      <h4 className="font-serif font-bold text-lg text-slate-950 dark:text-slate-50">
                        {slot.subject}
                      </h4>
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-400 font-medium">
                        {slot.room}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-auto">
                    {isAbsent && (
                      <div className="text-right">
                        <span className="line-through text-slate-400 text-sm font-serif">{slot.teacher}</span>
                        <div className="text-xs font-mono font-bold text-rose-700 dark:text-rose-400">
                          Teacher Absent (Sick Leave)
                        </div>
                      </div>
                    )}

                    {isProxy && (
                      <div className="text-right">
                        <span className="text-xs font-mono text-slate-400 line-through mr-2">{slot.teacher}</span>
                        <span className="font-serif font-bold text-base text-emerald-800 dark:text-emerald-300">
                          ✓ {slot.proxyTeacher}
                        </span>
                        <div className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                          Autonomous Proxy Assigned • Both Notified
                        </div>
                      </div>
                    )}

                    {slot.status === 'normal' && (
                      <div className="text-right">
                        <span className="font-serif font-bold text-base text-slate-900 dark:text-slate-100">
                          {slot.teacher}
                        </span>
                        <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 font-medium">
                          Scheduled Faculty
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="pt-6 border-t-2 border-amber-900/20 dark:border-amber-400/20 flex flex-col sm:flex-row items-center justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300 gap-2">
            <span>FACULTY WORKLOAD BALANCED ACROSS SEMESTER</span>
            <span className="text-amber-900 dark:text-amber-400">NO HUMAN CALLING CHAIN REQUIRED</span>
          </div>

        </div>

      </div>
    </section>
  );
};
