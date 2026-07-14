import React from "react";
import { Sparkles, ArrowRight, Calendar, TrendingUp, Users, Target, ShieldCheck, Award } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onOpenAudit: () => void;
  onOpenCall: () => void;
}

export default function Hero({ onOpenAudit, onOpenCall }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 md:pb-24" id="hero-section">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#EAF7FF] rounded-full blur-[100px] opacity-60 pointer-events-none -z-10"></div>
      <div className="absolute bottom-[-150px] left-[-100px] w-[600px] h-[600px] bg-[#CFEFFF] rounded-full blur-[120px] opacity-40 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left" id="hero-text-container">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#EAF7FF] border border-sky-100/80 text-[#009CFF] font-bold text-xs uppercase tracking-wider"
              id="hero-badge"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#009CFF] animate-pulse" />
              #1 Results-Driven Digital Marketing Agency
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-slate-900 leading-[1.1]"
              id="hero-heading"
            >
              Scale Your Business With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009CFF] to-sky-500 relative">
                Data-Driven Digital Marketing
              </span>
            </motion.h1>

            {/* Sub Heading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl"
              id="hero-subheading"
            >
              We help brands generate more leads, increase sales, and dominate their industry through organic SEO, Google Ads, Meta Ads, Social Media Marketing, Branding, Content Marketing, and high-converting websites.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              id="hero-ctas"
            >
              <button
                onClick={onOpenAudit}
                className="bg-[#009CFF] hover:bg-[#0086db] text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-sky-100 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-200 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
                id="hero-primary-cta"
              >
                Get Free Marketing Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onOpenCall}
                className="bg-white hover:bg-slate-50 text-[#009CFF] border-2 border-[#009CFF] font-bold text-sm px-8 py-4 rounded-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                id="hero-secondary-cta"
              >
                <Calendar className="w-4 h-4 text-[#009CFF]" />
                Book Strategy Call
              </button>
            </motion.div>

            {/* Trust highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-6 border-t border-slate-100"
              id="hero-trust-badges"
            >
              <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" />
                <span>Google Premier Partner</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                <Award className="w-4.5 h-4.5 text-amber-500" />
                <span>Meta Certified Experts</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                <Users className="w-4.5 h-4.5 text-purple-500" />
                <span>95% Customer Retention</span>
              </div>
            </motion.div>
          </div>

          {/* Right Dashboard Visualization Column */}
          <div className="lg:col-span-5 relative w-full h-[500px]" id="hero-dashboard-container">
            {/* Visual background circle glow */}
            <div className="absolute inset-0 bg-[#009CFF]/5 rounded-full filter blur-2xl scale-75 animate-pulse-subtle" />

            {/* Floating Card 1: Campaign Performance Dashboard (Center Main) */}
            <div 
              className="absolute top-4 left-[5%] w-[90%] bg-white/40 backdrop-blur-xl border border-white/60 rounded-[32px] p-6 shadow-2xl animate-float-slow"
              id="card-performance"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF7FF] flex items-center justify-center text-[#009CFF]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">Campaign Performance</h4>
                    <span className="text-[9px] text-[#64748B]">Live ROI optimization</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-green-50 px-2.5 py-1 rounded-full flex items-center gap-0.5">
                  +320%
                </span>
              </div>

              {/* Simulated Wave Sparkline using simple HTML grids */}
              <div className="h-24 flex items-end gap-1.5 pt-4 border-b border-white/20 pb-2" id="sparkline-chart">
                <div className="w-full bg-[#009CFF]/10 rounded-t h-[20%] transition-all hover:bg-[#009CFF]/30" />
                <div className="w-full bg-[#009CFF]/15 rounded-t h-[35%]" />
                <div className="w-full bg-[#009CFF]/20 rounded-t h-[30%]" />
                <div className="w-full bg-[#009CFF]/30 rounded-t h-[55%]" />
                <div className="w-full bg-[#009CFF]/45 rounded-t h-[45%]" />
                <div className="w-full bg-[#009CFF]/60 rounded-t h-[70%]" />
                <div className="w-full bg-[#009CFF]/80 rounded-t h-[65%]" />
                <div className="w-full bg-[#009CFF] rounded-t h-[95%] animate-pulse" />
              </div>

              <div className="flex justify-between items-center pt-3 text-[10px] text-slate-500" id="sparkline-labels">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4 (Peak)</span>
              </div>
            </div>

            {/* Floating Card 2: ROAS Card (Bottom Left) */}
            <div 
              className="absolute bottom-16 left-2 w-44 bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-4 shadow-lg animate-float-medium"
              id="card-roas"
            >
              <div className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider mb-0.5">Average ROAS</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-[#009CFF] font-display">8.7x</span>
                <span className="text-xs text-emerald-600 font-bold">+18% vs last month</span>
              </div>
              <div className="w-full bg-white/60 h-1.5 rounded-full overflow-hidden mt-2">
                <div className="bg-gradient-to-r from-[#009CFF] to-sky-400 h-full w-[85%]" />
              </div>
            </div>

            {/* Floating Card 3: Monthly Leads Card (Bottom Right) */}
            <div 
              className="absolute bottom-28 right-2 w-48 bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-4 shadow-lg animate-float-slow"
              id="card-leads"
            >
              <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-semibold uppercase tracking-wider mb-1">
                <Users className="w-3.5 h-3.5 text-purple-500" />
                Monthly Leads
              </div>
              <div className="text-2xl font-extrabold text-slate-800 font-display">12,480</div>
              <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                100% verified buyers
              </div>
            </div>

            {/* Floating Badge 4: Google Ranking & SEO (Top Right Overlay) */}
            <div 
              className="absolute top-36 right-0 bg-white/50 backdrop-blur-lg rounded-xl py-2 px-3 shadow-md border border-white/60 flex items-center gap-2 text-xs"
              id="card-ranking"
            >
              <div className="w-6 h-6 rounded bg-emerald-50 flex items-center justify-center text-emerald-500">
                <Target className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="font-bold text-slate-800">Google Ranking</div>
                <div className="text-[9px] text-[#009CFF] font-bold">Top 3 Placements</div>
              </div>
            </div>

            {/* Floating Badge 5: SEO Growth (Center Overlay) */}
            <div 
              className="absolute top-2 left-6 bg-slate-900/85 backdrop-blur-md text-white rounded-xl py-1.5 px-3.5 shadow-md flex items-center gap-1.5 text-[11px] font-semibold font-mono"
              id="card-seo-growth"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              SEO Growth +245%
            </div>

            {/* Floating Badge 6: Ad Spend Optimized */}
            <div 
              className="absolute bottom-4 right-[25%] bg-emerald-500/90 backdrop-blur-sm text-white rounded-full py-1.5 px-4 shadow-lg text-[10px] font-bold border border-emerald-400/30"
              id="card-adspend"
            >
              Ad Spend Optimized ✓
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
