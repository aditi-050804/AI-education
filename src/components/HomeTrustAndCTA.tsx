import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, Lock, Database, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HomeTrustAndCTAProps {
  onNavigate: (page: PageId) => void;
  onOpenDemo: () => void;
}

export const HomeTrustAndCTA: React.FC<HomeTrustAndCTAProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <>
      {/* Institutional Trust Section */}
      <section className="py-16 bg-slate-50/60 dark:bg-[#0A1224]/50 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" /> Institutional Compliance
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Built for institutional trust.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('security')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 text-xs font-semibold transition-colors"
            >
              <span>Explore Security Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">CASA Tier-2</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Independently audited cloud application security standard.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Multi-Tenant Isolation</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Logical and cryptographic separation of each campus’s database.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">PII Protection</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Encrypted student records, Aadhaar, and parent contact information.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">AI Safety Guardrails</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Real-time sentiment monitoring and zero training on campus data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Premium CTA Banner */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-brand-900 via-navy-900 to-[#060B17] text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Modernize Your Campus Today
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Ready to build a smarter campus?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Join forward-thinking schools, colleges, and academies that operate with conflict-free schedules, AI textbook study buddies, and automated Tally accounting.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm tracking-wide uppercase shadow-xl shadow-brand-600/30 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-teal-300" />
              <span>Book a Demo</span>
            </button>
            <button
              onClick={() => onNavigate('features')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> Free 30-day sandbox trial
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> Zero hardware migration
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> Dedicated onboarding architect
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
