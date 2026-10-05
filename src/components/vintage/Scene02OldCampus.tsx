import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, PhoneCall, FileText, AlertCircle, RefreshCw } from 'lucide-react';

export const Scene02OldCampus: React.FC = () => {
  const [clockTick, setClockTick] = useState(false);
  const [paperStacked, setPaperStacked] = useState(true);
  const [isPhoneRinging, setIsPhoneRinging] = useState(true);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-24 bg-[#F8F4EB] dark:bg-[#060B14] border-t border-[#C5A059]/20 parchment-grain transition-colors duration-500">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
            Scene II • The Paper Campus
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-3">
            Education shouldn't depend on disconnected systems.
          </h2>
          <p className="text-sm font-serif font-semibold text-[#2D3748] dark:text-[#CBD5E1]">
            Manual registers, paper timetables, ringing desk phones, and lost files.
          </p>
        </div>

        {/* Vintage Classroom Environment Composition (NO CARDS) */}
        <div className="relative w-full rounded-3xl border border-[#C5A059]/40 bg-[#FAF6EE]/90 dark:bg-[#0B1220]/90 p-8 sm:p-12 overflow-hidden shadow-2xl">
          

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            
            {/* Object 1: Clock & Paper Timetable */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div
                onClick={() => setClockTick(!clockTick)}
                className="w-32 h-32 rounded-full border-4 border-[#C5A059] flex flex-col items-center justify-center bg-[#FDFCF9] dark:bg-[#111A2E] shadow-inner cursor-pointer group"
              >
                <Clock className={`w-10 h-10 text-[#8C6B28] dark:text-[#C5A059] ${clockTick ? 'rotate-45' : ''} transition-transform duration-500`} />
                <span className="font-mono text-xs text-[#161D2B] dark:text-[#F4ECE0] mt-1 font-bold">
                  08:15 AM
                </span>
                <span className="text-[9px] text-[#8C6B28] uppercase font-mono">Absence Notice</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                  The Paper Timetable
                </h3>
                <p className="text-xs font-serif font-semibold text-[#2D3748] dark:text-[#CBD5E1] mt-1">
                  Faculty absent. Morning period disrupted across three sections.
                </p>
              </div>
            </div>

            {/* Object 2: Ringing Rotary Phone & Stacked Physical Registers */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div
                onClick={() => setIsPhoneRinging(!isPhoneRinging)}
                className="relative p-6 rounded-2xl border-2 border-dashed border-[#C5A059] bg-[#FAF6EE] dark:bg-[#0E1729] shadow-sm cursor-pointer"
              >
                {isPhoneRinging && (
                  <span className="absolute -top-3 right-4 px-2 py-0.5 rounded-full bg-rose-600 text-white font-mono text-[9px] animate-bounce">
                    Unanswered Call
                  </span>
                )}
                <PhoneCall className={`w-12 h-12 text-[#8C6B28] dark:text-[#D4AF37] ${isPhoneRinging ? 'animate-pulse' : ''}`} />
                <div className="text-[10px] font-mono text-[#586274] mt-2">
                  Accounts Office • Direct Line
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                  Parent Enquiries
                </h3>
                <p className="text-xs font-serif font-semibold text-[#2D3748] dark:text-[#CBD5E1] mt-1">
                  120 parents calling for attendance updates and term fee receipts.
                </p>
              </div>
            </div>

            {/* Object 3: Physical Ledger & Files */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div
                onClick={() => setPaperStacked(!paperStacked)}
                className="w-36 h-32 rounded-xl border border-[#C5A059] bg-[#EAE0CE] dark:bg-[#162138] p-3 shadow-md relative flex flex-col justify-between cursor-pointer"
              >
                <div className="flex justify-between items-center text-[10px] font-mono text-[#8C6B28]">
                  <span>REGISTER #14</span>
                  <FileText className="w-4 h-4" />
                </div>
                <div className="text-left font-serif font-semibold text-xs text-[#161D2B] dark:text-[#F4ECE0]">
                  Manual Marks Entry & Attendance Ledgers
                </div>
                <div className="text-[9px] font-mono text-rose-600 dark:text-rose-400 font-semibold">
                  3 weeks to tally by hand
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                  Physical Ledgers
                </h3>
                <p className="text-xs font-serif font-semibold text-[#2D3748] dark:text-[#CBD5E1] mt-1">
                  Double manual entries required between college books and bank receipts.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Stamp */}
          <div className="mt-12 pt-6 border-t border-[#C5A059]/20 flex items-center justify-between text-xs font-serif font-semibold text-[#8C6B28] dark:text-[#C5A059]">
            <span>Fragile records • Human clerical error • Siloed departments</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#38BDF8]">
              Ready for Intelligent Modernization →
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
