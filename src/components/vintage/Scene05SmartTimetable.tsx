import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, UserCheck, AlertCircle, RefreshCw, CheckCircle2 } from 'lucide-react';

export const Scene05SmartTimetable: React.FC = () => {
  const [isAbsent, setIsAbsent] = useState<boolean>(true);
  const [isDigital, setIsDigital] = useState<boolean>(true);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-24 bg-[#F4ECE0] dark:bg-[#070D18] transition-colors duration-500 engraving-lines border-t border-[#C5A059]/20">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Minimal Editorial Headline */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
            Scene V • Algorithmic Scheduling
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-2">
            Teacher absent?
          </h2>
          <p className="font-serif text-2xl sm:text-3xl italic text-[#8C6B28] dark:text-[#D4AF37]">
            AI finds the right replacement.
          </p>

          {/* Interactive Trigger */}
          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={() => setIsAbsent(!isAbsent)}
              className="px-4 py-2 rounded-full border border-[#C5A059] bg-[#FAF6EE] dark:bg-[#0E1729] text-xs font-serif italic text-[#161D2B] dark:text-[#F4ECE0] shadow-sm flex items-center gap-2 hover:bg-[#C5A059] hover:text-white transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{isAbsent ? 'Teacher Marked Absent' : 'Simulate Absence'}</span>
            </button>
            <button
              onClick={() => setIsDigital(!isDigital)}
              className="px-4 py-2 rounded-full border border-[#C5A059] bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] text-xs font-serif italic shadow-sm"
            >
              <span>{isDigital ? 'View Parchment Style' : 'View AI Modern Style'}</span>
            </button>
          </div>
        </div>

        {/* Timetable Interactive Scene Composition */}
        <div className={`p-8 sm:p-12 rounded-3xl border transition-all duration-500 ${
          isDigital
            ? 'bg-[#FAF6EE]/95 dark:bg-[#0B1220]/95 border-[#38BDF8]/40 shadow-2xl'
            : 'bg-[#EAE0CE] dark:bg-[#142035] border-[#C5A059] shadow-xl'
        }`}>
          
          <div className="flex items-center justify-between pb-6 border-b border-[#C5A059]/30 mb-6 font-serif">
            <div>
              <span className="text-xs font-mono uppercase text-[#8C6B28] dark:text-[#C5A059]">Faculty Schedule • Period 3</span>
              <h3 className="text-xl font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                Advanced Mathematics (Section 10-A)
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-[#586274]">Room 204</span>
              <div className="text-sm font-bold text-[#8C6B28]">10:15 — 11:05 AM</div>
            </div>
          </div>

          {/* Visual Transformation Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* Step 1: Absence Signal */}
            <div className="p-5 rounded-2xl border border-rose-300 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/20 text-center space-y-2">
              <AlertCircle className="w-7 h-7 mx-auto text-rose-600" />
              <div className="font-serif text-sm font-bold text-rose-900 dark:text-rose-200">
                Dr. S. Ramanujan Absent
              </div>
              <p className="text-[11px] font-serif italic text-rose-700 dark:text-rose-300">
                Medical leave recorded at 07:45 AM
              </p>
            </div>

            {/* Step 2: Algorithmic Free Faculty Discovery */}
            <div className="p-5 rounded-2xl border border-[#C5A059]/40 bg-[#FAF6EE] dark:bg-[#111A2E] text-center space-y-2 relative">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] absolute top-3 right-3 animate-ping" />
              <Clock className="w-7 h-7 mx-auto text-[#8C6B28] dark:text-[#C5A059]" />
              <div className="font-serif text-sm font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                Scanning 14 Available Faculty
              </div>
              <p className="text-[11px] font-mono text-[#586274] dark:text-[#9DA9BE]">
                Checking workload & subject syllabus
              </p>
            </div>

            {/* Step 3: Automated Replacement Assignment */}
            <div className="p-5 rounded-2xl border border-teal-300 dark:border-teal-800 bg-teal-50/50 dark:bg-teal-950/20 text-center space-y-2">
              <CheckCircle2 className="w-7 h-7 mx-auto text-teal-600" />
              <div className="font-serif text-sm font-bold text-teal-900 dark:text-teal-200">
                Substitute Assigned in 8s
              </div>
              <p className="text-[11px] font-serif italic text-teal-800 dark:text-teal-300">
                Dr. V. Trivedi notified via portal push
              </p>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-[#C5A059]/20 flex items-center justify-between text-xs font-mono text-[#586274] dark:text-[#9DA9BE]">
            <span>Zero class cancellations</span>
            <span>Room 204 locked & verified</span>
          </div>

        </div>

      </div>
    </section>
  );
};
