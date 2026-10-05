import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Sparkles, Send, ShieldCheck } from 'lucide-react';

export const Scene11CampusCommunication: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-24 bg-[#F4ECE0] dark:bg-[#070D18] transition-colors duration-500 engraving-lines border-t border-[#C5A059]/20">
      <div className="max-w-5xl mx-auto w-full text-center">
        
        {/* Minimal Editorial Headline */}
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8C6B28] dark:text-[#C5A059]">
          Scene XI • The Quadrangle Dispatch
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#161D2B] dark:text-[#F4ECE0] mt-2 mb-2">
          Every conversation. One campus.
        </h2>
        <p className="font-serif text-lg italic text-[#586274] dark:text-[#A7B5CC] max-w-xl mx-auto mb-12">
          Hierarchical channels link Principal, Department, Teacher, Student, and Parent. Unread notices compress into an executive AI summary.
        </p>

        {/* Visual Channel Stream Composition (NO CARDS) */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[#C5A059]/40 bg-[#FAF6EE]/95 dark:bg-[#0B1220]/95 shadow-2xl text-left">
          
          <div className="flex items-center justify-between pb-6 border-b border-[#C5A059]/30 mb-6 font-serif">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#8C6B28] dark:text-[#C5A059]" />
              <h3 className="text-xl font-bold text-[#161D2B] dark:text-[#F4ECE0]">
                Official Institutional Dispatch
              </h3>
            </div>
            <span className="text-xs font-mono text-teal-600 dark:text-teal-400">
              Verified Broadcast Gateway
            </span>
          </div>

          {/* 5-Station Communications Chain */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center mb-8 font-serif text-xs">
            <div className="p-3 rounded-xl border border-[#C5A059]/30 bg-[#F4ECE0]/50 dark:bg-[#111A2E]">
              <div className="font-bold text-[#161D2B] dark:text-[#F4ECE0]">Principal</div>
              <div className="text-[10px] text-[#8C6B28] mt-0.5">Chancellor Directive</div>
            </div>
            <div className="p-3 rounded-xl border border-[#C5A059]/30 bg-[#F4ECE0]/50 dark:bg-[#111A2E]">
              <div className="font-bold text-[#161D2B] dark:text-[#F4ECE0]">Deans & HODs</div>
              <div className="text-[10px] text-[#8C6B28] mt-0.5">Academic Operations</div>
            </div>
            <div className="p-3 rounded-xl border border-[#C5A059]/30 bg-[#F4ECE0]/50 dark:bg-[#111A2E]">
              <div className="font-bold text-[#161D2B] dark:text-[#F4ECE0]">Faculty</div>
              <div className="text-[10px] text-[#8C6B28] mt-0.5">Course Notices</div>
            </div>
            <div className="p-3 rounded-xl border border-[#C5A059]/30 bg-[#F4ECE0]/50 dark:bg-[#111A2E]">
              <div className="font-bold text-[#161D2B] dark:text-[#F4ECE0]">Students</div>
              <div className="text-[10px] text-[#8C6B28] mt-0.5">Batch Feeds</div>
            </div>
            <div className="p-3 rounded-xl border border-[#C5A059]/30 bg-[#F4ECE0]/50 dark:bg-[#111A2E]">
              <div className="font-bold text-[#161D2B] dark:text-[#F4ECE0]">Parents</div>
              <div className="text-[10px] text-[#8C6B28] mt-0.5">Encrypted Alerts</div>
            </div>
          </div>

          {/* AI Executive Summary Compression Box */}
          <div className="p-5 rounded-2xl border border-[#38BDF8]/40 bg-[#38BDF8]/5 dark:bg-[#38BDF8]/10 font-serif">
            <div className="flex items-center justify-between text-xs font-mono text-[#0284C7] dark:text-[#38BDF8] mb-2 font-bold uppercase">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> AI Daily Campus Digest
              </span>
              <span>Compiled at 05:00 PM</span>
            </div>
            <p className="text-sm italic text-[#161D2B] dark:text-[#F4ECE0] leading-relaxed">
              “142 classes conducted with zero timetable clashes. Founder’s Day rehearsal finalized for Thursday at 09:00 AM. 98.2% fee reconciliation completed with Tally ledger.”
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
