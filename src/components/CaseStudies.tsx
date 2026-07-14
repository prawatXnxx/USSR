import React, { useState } from "react";
import { 
  ArrowRight, X, Sparkles, TrendingUp, Users, MoveRight, 
  CheckCircle, ArrowUpRight, Award, ChevronRight 
} from "lucide-react";
import { caseStudiesData } from "../data/caseStudies";
import { CaseStudy } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface CaseStudiesProps {
  onOpenAudit: () => void;
}

export default function CaseStudies({ onOpenAudit }: CaseStudiesProps) {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Ecommerce", "Lead Generation", "Social & Retail"];

  const filteredCaseStudies = caseStudiesData.filter((cs) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Ecommerce") {
      return cs.category.includes("Fashion") || cs.category.includes("Ecommerce");
    }
    if (activeCategory === "Lead Generation") {
      return cs.category.includes("Healthcare") || cs.category.includes("Real Estate") || cs.category.includes("Education");
    }
    if (activeCategory === "Social & Retail") {
      return cs.category.includes("Restaurant") || cs.category.includes("Social");
    }
    return true;
  });

  return (
    <section className="py-20 bg-slate-50/50" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6" id="case-studies-header">
          <div className="max-w-2xl text-left space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#009CFF] bg-[#EAF7FF] px-4 py-1.5 rounded-full">
              Proof of Results
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
              Case Studies & <span className="text-[#009CFF]">Success Stories</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              We deliver measurable commercial performance. Explore how we scale traffic, optimize paid budgets, and generate millions in revenue.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2" id="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 border cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#009CFF] text-white border-[#009CFF] shadow-lg shadow-sky-100"
                    : "bg-white/40 backdrop-blur-sm border-white/60 text-slate-600 hover:border-sky-300 hover:bg-sky-50/50"
                }`}
                id={`tab-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="case-studies-grid">
          <AnimatePresence mode="popLayout">
            {filteredCaseStudies.map((study, idx) => (
              <motion.div
                layout
                key={study.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="group bg-white/40 backdrop-blur-md rounded-[24px] border border-white/60 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                id={`case-card-${study.id}`}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#009CFF] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-sky-100 shadow-sm">
                    {study.category}
                  </span>
                  
                  {/* ROAS highlighted badge (bottom-right of image) */}
                  <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl font-bold font-mono text-xs flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{study.metrics.roas}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 space-y-4 flex-grow text-left">
                  <h3 className="text-lg md:text-xl font-bold font-display text-slate-900 group-hover:text-[#009CFF] transition-colors line-clamp-1">
                    {study.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                    {study.description}
                  </p>

                  {/* Before & After comparison row */}
                  <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100/50 mt-4 text-xs">
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">BEFORE</span>
                      <span className="font-semibold text-slate-600 font-mono">{study.metrics.beforeMetric}</span>
                    </div>
                    <div className="border-l border-slate-200/60 pl-3">
                      <span className="block text-[10px] font-bold text-[#009CFF] uppercase tracking-wide">AFTER</span>
                      <span className="font-extrabold text-emerald-600 font-mono flex items-center gap-0.5">
                        {study.metrics.afterMetric}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-6 pt-0 border-t border-slate-50 bg-slate-50/30">
                  <button
                    onClick={() => setSelectedCase(study)}
                    className="w-full flex items-center justify-between text-xs font-bold text-[#009CFF] hover:text-[#0086db] uppercase tracking-wider group/btn pt-4 cursor-pointer"
                    id={`case-learn-btn-${study.id}`}
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Case Study Detail Modal */}
        <AnimatePresence>
          {selectedCase && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="case-modal-container">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCase(null)}
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-50"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative w-full max-w-2xl bg-white/60 backdrop-blur-xl rounded-[32px] overflow-hidden shadow-2xl border border-white/80 z-50 max-h-[90vh] overflow-y-auto"
                id="case-modal-body"
              >
                {/* Header Banner */}
                <div className="relative h-44 bg-slate-100">
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    className="w-full h-full object-cover filter brightness-[0.8]"
                    referrerPolicy="no-referrer"
                  />
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors z-20"
                    aria-label="Close Case Study"
                    id="close-case-modal"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-4 left-6 right-6 text-left">
                    <span className="text-sky-300 text-xs font-extrabold uppercase tracking-widest">{selectedCase.category}</span>
                    <h3 className="text-lg md:text-2xl font-bold font-display text-white tracking-tight leading-tight mt-1">{selectedCase.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-6 text-left" id="case-modal-content">
                  {/* Results Metrics Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white/40 backdrop-blur-md border border-white/60 p-4 rounded-2xl text-center" id="case-modal-metrics">
                    <div className="p-2">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">ROAS / ROI</span>
                      <span className="text-xl font-black text-[#009CFF] font-mono leading-none">{selectedCase.metrics.roas}</span>
                    </div>
                    <div className="p-2 border-l border-slate-100">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Leads Sourced</span>
                      <span className="text-xl font-black text-slate-800 font-mono leading-none">{selectedCase.metrics.leads}</span>
                    </div>
                    <div className="p-2 border-l border-slate-100">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Traffic Gain</span>
                      <span className="text-xl font-black text-emerald-600 font-mono leading-none">{selectedCase.metrics.traffic}</span>
                    </div>
                    <div className="p-2 border-l border-slate-100">
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Growth Leap</span>
                      <span className="text-xs font-extrabold text-slate-700 leading-none block mt-1.5">{selectedCase.metrics.beforeMetric} → {selectedCase.metrics.afterMetric}</span>
                    </div>
                  </div>

                  {/* Challenge Strategy Result narrative */}
                  <div className="space-y-4" id="case-narrative">
                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-rose-500 rounded-full" /> The Challenge
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{selectedCase.challenge}</p>
                    </div>

                    <div className="space-y-1 pt-2">
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[#009CFF] rounded-full" /> Our Scaling Strategy
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{selectedCase.strategy}</p>
                    </div>

                    <div className="space-y-1 pt-2">
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> The Final Result
                      </h4>
                      <p className="text-slate-700 text-sm font-medium leading-relaxed bg-emerald-50/40 p-3 rounded-xl border border-emerald-100/20">{selectedCase.result}</p>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4" id="case-modal-footer">
                  <p className="text-xs text-slate-400 max-w-xs text-center sm:text-left">
                    We can customize this exact results framework for your website. Let&apos;s talk.
                  </p>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => { setSelectedCase(null); onOpenAudit(); }}
                      className="flex-1 sm:flex-initial bg-[#009CFF] hover:bg-[#0086db] text-white font-bold text-xs px-5 py-3 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
                      id="case-modal-cta"
                    >
                      Audit My Website <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setSelectedCase(null)}
                      className="flex-1 sm:flex-initial bg-white border border-slate-200 text-slate-600 font-bold text-xs px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
