import React from "react";
import { Award, Heart, CheckCircle2, TrendingUp, RefreshCw, Trophy } from "lucide-react";
import { motion } from "motion/react";

export default function Stats() {
  const statsList = [
    {
      id: "stat1",
      value: "1,000+",
      label: "Successful Campaigns",
      subtext: "Across Search & Social ads",
      icon: Trophy,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      id: "stat2",
      value: "500+",
      label: "Happy Clients",
      subtext: "SMEs & Corporate Brands",
      icon: Heart,
      iconColor: "text-rose-500",
      bgColor: "bg-rose-50"
    },
    {
      id: "stat3",
      value: "25M+",
      label: "Qualified Leads",
      subtext: "With high conversion intent",
      icon: CheckCircle2,
      iconColor: "text-[#009CFF]",
      bgColor: "bg-sky-50"
    },
    {
      id: "stat4",
      value: "$15M+",
      label: "Revenue Generated",
      subtext: "Tracked directly in CRMs",
      icon: TrendingUp,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50"
    },
    {
      id: "stat5",
      value: "95%",
      label: "Client Retention Rate",
      subtext: "With month-to-month contracts",
      icon: RefreshCw,
      iconColor: "text-indigo-500",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#EAF7FF] via-[#CFEFFF]/40 to-[#EAF7FF] border-y border-sky-100" id="stats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center" id="stats-grid">
          {statsList.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`w-full bg-white/40 backdrop-blur-xl rounded-[24px] p-5 md:p-6 border border-white/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center ${
                  // Make the center item visually stand out or align beautifully
                  i === 2 ? "lg:scale-105 bg-white/60 border-[#009CFF]/30 shadow-sky-100/50" : ""
                }`}
                id={`stat-card-${stat.id}`}
              >
                {/* Circular Soft-Colored Icon Background */}
                <div className={`w-10 h-10 rounded-xl ${stat.bgColor} ${stat.iconColor} flex items-center justify-center mb-4`}>
                  <StatIcon className="w-5.5 h-5.5 stroke-[2]" />
                </div>

                {/* Stat Big Value */}
                <span className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-none mb-1.5">
                  {stat.value}
                </span>

                {/* Stat label */}
                <h4 className="text-xs font-bold text-slate-800 leading-tight mb-1">
                  {stat.label}
                </h4>

                {/* Subtext description */}
                <p className="text-[10px] text-slate-400">
                  {stat.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
