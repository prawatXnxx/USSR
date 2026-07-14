import React from "react";
import { Search, Compass, ClipboardList, Rocket, RefreshCw, BarChart } from "lucide-react";
import { motion } from "motion/react";

export default function OurProcess() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      description: "We deep-dive into your existing conversion data, analyze your cost per acquisition, and outline your precise business goals to map out our scaling ceiling.",
      icon: Compass
    },
    {
      num: "02",
      title: "Market Research",
      description: "We reverse-engineer your top 3 competitors' ad copywriting, inspect their backlink profiles, spy on their active ad sets, and isolate profitable traffic voids.",
      icon: Search
    },
    {
      num: "03",
      title: "Strategy Planning",
      description: "We design a comprehensive, custom-tailored 90-day growth blueprint spanning landing page conversion layouts, exact ad budgets, and target demographic segments.",
      icon: ClipboardList
    },
    {
      num: "04",
      title: "Campaign Launch",
      description: "Our copywriting and video production specialists build your campaign creatives. We deploy structure-tight ad groups, tracking tags, and first-party pixels.",
      icon: Rocket
    },
    {
      num: "05",
      title: "Optimization",
      description: "We run ongoing A/B tests on headline copy, prune low-performing audience segments, optimize ad schedules, and constantly optimize landing page performance.",
      icon: RefreshCw
    },
    {
      num: "06",
      title: "Scale & Growth",
      description: "Once we establish a highly profitable ROAS baseline, we double-down on scaling budgets, build high-intent lookalikes, and automate email/SMS retention loops.",
      icon: BarChart
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="process">
      {/* Background visual elements */}
      <div className="absolute top-[40%] right-[-15%] w-[400px] h-[400px] rounded-full bg-[#EAF7FF] blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#CFEFFF]/40 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4" id="process-header">
          <span className="text-xs font-bold uppercase tracking-widest text-[#009CFF] bg-[#EAF7FF] px-4 py-1.5 rounded-full">
            The Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900">
            Our Custom <span className="text-[#009CFF]">Growth Process</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            A battle-tested, structured methodology designed to systematically eliminate marketing waste and continuously scale your client acquisition.
          </p>
        </div>

        {/* Steps Layout */}
        <div className="relative" id="process-timeline">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[60px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-sky-100 via-[#009CFF]/30 to-sky-100 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-y-12" id="process-steps-grid">
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 relative"
                  id={`process-step-${step.num}`}
                >
                  {/* Step bubble with connecting line connectors */}
                  <div className="relative">
                    {/* Circle */}
                    <div className="w-16 h-16 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 text-[#009CFF] flex items-center justify-center shadow-lg shadow-sky-100/50 group hover:border-[#009CFF] hover:bg-[#009CFF] hover:text-white transition-all duration-300">
                      <StepIcon className="w-6 h-6 stroke-[1.75]" />
                    </div>

                    {/* Numeric indicator badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#009CFF] text-white flex items-center justify-center text-xs font-bold font-mono shadow-sm">
                      {step.num}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-1.5 px-2 lg:px-0">
                    <h3 className="text-lg font-bold font-display text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dynamic CTA at the bottom of the process */}
        <div className="mt-16 text-center" id="process-cta">
          <p className="text-slate-500 text-sm mb-4 italic">
            &ldquo;Ready to launch Step 1? We perform Discovery audits free of charge.&rdquo;
          </p>
          <a
            href="#hero-section"
            className="inline-flex items-center gap-2 bg-[#009CFF] hover:bg-[#0086db] text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md shadow-sky-50"
          >
            Claim Free Audit Report
          </a>
        </div>

      </div>
    </section>
  );
}
