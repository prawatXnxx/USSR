import React, { useState } from "react";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import { faqsData } from "../data/otherData";
import { motion, AnimatePresence } from "motion/react";

interface FAQProps {
  onOpenCall: () => void;
}

export default function FAQ({ onOpenCall }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>("faq1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="faq-header">
          <span className="text-xs font-bold uppercase tracking-widest text-[#009CFF] bg-[#EAF7FF] px-4 py-1.5 rounded-full">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900">
            Frequently Asked <span className="text-[#009CFF]">Questions</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Is search marketing or social scaling new to your business? Here are simple, transparent explanations of how we manage budgets and deliver results.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4" id="faq-accordions-list">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#009CFF] bg-white/60 backdrop-blur-md shadow-md shadow-sky-50"
                    : "border-white/60 bg-white/40 backdrop-blur-sm hover:border-sky-300 hover:bg-sky-50/20"
                }`}
                id={`faq-item-${faq.id}`}
              >
                {/* Accordion Trigger Header Button */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left font-display font-bold text-slate-800 hover:text-[#009CFF] transition-colors gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq-trigger-${faq.id}`}
                >
                  <span className="text-sm md:text-base leading-snug">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? "bg-[#009CFF] border-[#009CFF] text-white rotate-180" : "border-slate-200 text-slate-400"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Dropdown Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-5 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100/50 pt-2 bg-white/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic support footer */}
        <div className="mt-12 p-6 rounded-[24px] bg-white/40 backdrop-blur-md border border-white/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left" id="faq-footer">
          <div className="flex items-center gap-2.5">
            <HelpCircle className="w-5 h-5 text-[#009CFF]" />
            <p className="text-xs text-slate-500 font-medium">
              Have another question not covered in our resources guidelines?
            </p>
          </div>
          <button
            onClick={onOpenCall}
            className="text-xs font-bold text-[#009CFF] hover:text-[#0086db] uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
            id="faq-btn-ask-custom"
          >
            Ask Us Directly <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
