import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Bell, CheckCircle2, Phone, Calendar, ArrowRight } from 'lucide-react';

export const Scene10ParentConnection: React.FC = () => {
  const [selectedChild, setSelectedChild] = useState<'aarav' | 'diya'>('aarav');

  const children = {
    aarav: {
      name: 'Aarav Sharma',
      class: 'Grade 10 • Section A',
      attendance: '98.5% (Present Today)',
      alert: 'Calculus Quiz on Friday • Bus #14 en route (ETA 4:10 PM)',
      fees: 'Term II Paid in Full'
    },
    diya: {
      name: 'Diya Sharma',
      class: 'Grade 7 • Section C',
      attendance: '96.2% (Present Today)',
      alert: 'Inter-School Debate selection letter issued',
      fees: 'Quarter 3 Due (₹14,500)'
    }
  };

  const current = children[selectedChild];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-24 bg-[#F8F4EB] dark:bg-[#060B14] transition-colors duration-500 parchment-grain border-t border-[#C5A059]/20">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Minimal Editorial Headline */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
            Scene X • The Hearth & The Academy
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-2">
            Parents stay connected.
          </h2>
          <p className="font-serif text-lg italic text-[#586274] dark:text-[#A7B5CC]">
            Physical school circulars evolve into instant multi-child attendance and bus telemetry.
          </p>

          {/* Child Switcher */}
          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={() => setSelectedChild('aarav')}
              className={`px-4 py-1.5 rounded-full text-xs font-serif italic border transition-all ${
                selectedChild === 'aarav'
                  ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] border-[#161D2B] dark:border-[#F4ECE0]'
                  : 'bg-[#FAF6EE] dark:bg-[#0E1729] text-[#586274] border-[#C5A059]/30'
              }`}
            >
              Child 1: Aarav (Gr 10)
            </button>
            <button
              onClick={() => setSelectedChild('diya')}
              className={`px-4 py-1.5 rounded-full text-xs font-serif italic border transition-all ${
                selectedChild === 'diya'
                  ? 'bg-[#161D2B] dark:bg-[#F4ECE0] text-[#F8F4EB] dark:text-[#060B14] border-[#161D2B] dark:border-[#F4ECE0]'
                  : 'bg-[#FAF6EE] dark:bg-[#0E1729] text-[#586274] border-[#C5A059]/30'
              }`}
            >
              Child 2: Diya (Gr 7)
            </button>
          </div>
        </div>

        {/* Visual Composition: Ancient Letter -> Modern Mobile Pulse */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[#C5A059]/40 bg-[#FAF6EE]/95 dark:bg-[#0B1220]/95 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center font-serif">
            
            {/* Heritage Paper Notice */}
            <div className="p-6 rounded-2xl border border-[#C5A059]/30 bg-[#F4ECE0]/60 dark:bg-[#0E1729]/60">
              <span className="text-[10px] font-mono text-[#8C6B28] uppercase tracking-wider">
                Historical Circular Letter
              </span>
              <h4 className="text-xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-2">
                “Dear Parent, Please find enclosed...”
              </h4>
              <p className="text-xs italic text-[#586274] dark:text-[#A7B5CC] leading-relaxed">
                Lost in student backpacks, delivered days late, requiring physical paper slips returned with handwritten signatures.
              </p>
            </div>

            {/* Modern Mobile Parent Pulse */}
            <div className="p-6 rounded-2xl border border-[#38BDF8]/40 bg-gradient-to-br from-[#FAF6EE] to-[#F8F4EB] dark:from-[#111A2E] dark:to-[#0B1220]">
              <div className="flex items-center justify-between pb-3 border-b border-[#C5A059]/20 mb-3">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-[#38BDF8]" />
                  <span className="text-xs font-bold font-mono text-[#161D2B] dark:text-[#F4ECE0]">
                    Parent Portal Instant Push
                  </span>
                </div>
                <span className="text-[10px] font-mono text-teal-600 dark:text-teal-400">08:32 AM</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                  <span>{current.name}</span>
                  <span className="text-teal-600 dark:text-teal-400">{current.attendance}</span>
                </div>
                <div className="text-[#586274] dark:text-[#A7B5CC] italic">
                  {current.alert}
                </div>
                <div className="pt-2 text-[10px] font-mono text-[#8C6B28] dark:text-[#C5A059] flex items-center justify-between">
                  <span>{current.class}</span>
                  <span className="font-semibold">{current.fees}</span>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-[#C5A059]/20 flex items-center justify-between text-xs font-mono text-[#586274]">
            <span>One account for all siblings</span>
            <span>WhatsApp & Portal Synced</span>
          </div>
        </div>

      </div>
    </section>
  );
};
