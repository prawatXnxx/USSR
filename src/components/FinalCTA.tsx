import React from "react";
import { Sparkles, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface FinalCTAProps {
  onOpenAudit: () => void;
  onOpenCall: () => void;
}

export default function FinalCTA({ onOpenAudit, onOpenCall }: FinalCTAProps) {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="final-cta">
      {/* Visual glowing indicators */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#EAF7FF]/60 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Main CTA Container */}
        <div className="bg-slate-900/85 backdrop-blur-xl text-white rounded-[32px] p-8 md:p-16 border border-slate-800/80 shadow-2xl relative overflow-hidden text-center" id="cta-inner-panel">
          {/* Background vector accents */}
          <div className="absolute top-[-50px] right-[-50px] w-48 h-48 rounded-full border border-white/5 opacity-10 pointer-events-none" />
          <div className="absolute bottom-[-30px] left-[-30px] w-36 h-36 rounded-full border border-white/5 opacity-10 pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6" id="cta-inner-content">
            {/* badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[#CFEFFF] text-xs font-bold uppercase tracking-wider" id="cta-badge">
              <Sparkles className="w-3.5 h-3.5 text-sky-300 animate-pulse" />
              Maximize Your Market Share
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display" id="cta-title">
              Ready To Grow Your Business?
            </h2>

            {/* Subtext */}
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Let&apos;s build a digital marketing strategy that delivers measurable results, slashes customer acquisition costs, and drives sustainable growth.
            </p>

            {/* Interactive Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4" id="cta-btn-group">
              <button
                onClick={onOpenAudit}
                className="bg-[#009CFF] hover:bg-[#0086db] text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-sky-900/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="cta-audit-trigger"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onOpenCall}
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/60 font-bold text-sm px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="cta-call-trigger"
              >
                <Calendar className="w-4 h-4 text-sky-300" />
                Schedule Discovery Call
              </button>
            </div>

            {/* micro trust badge */}
            <div className="flex justify-center items-center gap-1.5 pt-4 text-slate-400 text-xs" id="cta-trust-indicators">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-400" />
              <span>Includes 1 Free Google Search Gap report &bull; No obligation required</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
