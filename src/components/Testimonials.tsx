import React, { useState } from "react";
import { Quote, Star, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { testimonialsData } from "../data/otherData";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[activeIndex];

  return (
    <section className="py-20 bg-white overflow-hidden relative" id="testimonials">
      {/* Background radial soft light */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#EAF7FF] blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="testimonials-header">
          <span className="text-xs font-bold uppercase tracking-widest text-[#009CFF] bg-[#EAF7FF] px-4 py-1.5 rounded-full">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900">
            What Our <span className="text-[#009CFF]">Clients Say</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Don&apos;t take our word for it. We build long-term value partnerships and scale sales numbers that speak for themselves.
          </p>
        </div>

        {/* Testimonials Main Slider view */}
        <div className="max-w-4xl mx-auto" id="testimonials-slider-container">
          <div className="relative bg-white/40 backdrop-blur-md border border-white/60 rounded-[32px] p-6 md:p-12 shadow-lg" id="slider-card-body">
            
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-[#CFEFFF] hidden sm:block" id="quote-decoration">
              <Quote className="w-24 h-24 stroke-[1.5] opacity-50 rotate-180" />
            </div>

            {/* Content Switch transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-left relative z-10"
              >
                {/* Stars Rating */}
                <div className="flex items-center gap-1 text-amber-400" id="stars-row">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>

                {/* Big Quote Text */}
                <p className="text-slate-700 font-display font-medium text-lg md:text-xl leading-relaxed italic">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Client Meta Avatar row */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200/50" id="client-meta">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md shadow-slate-100"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{current.name}</h4>
                    <p className="text-xs text-[#009CFF] font-semibold">{current.role} &bull; <span className="text-slate-500 font-normal">{current.company}</span></p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation Controls */}
            <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex gap-2 z-20" id="slider-nav">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-[#009CFF] text-slate-500 hover:text-[#009CFF] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                aria-label="Previous Testimonial"
                id="btn-prev-test"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-[#009CFF] text-slate-500 hover:text-[#009CFF] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                aria-label="Next Testimonial"
                id="btn-next-test"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6" id="dots-indicators">
            {testimonialsData.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-8 bg-[#009CFF]" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                id={`dot-${idx}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
