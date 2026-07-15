import React from "react";
import { BarChart3, Award, FileBarChart, Layers, Lightbulb, Headphones, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "ROI Focused Strategies",
      description: "We don't optimize for vanity metrics. Every single ad set, search term, and creative iteration is designed to minimize acquisition costs and maximize revenue.",
      icon: BarChart3
    },
    {
      title: "Certified Marketing Experts",
      description: "Our senior campaign managers hold Google Premier Partner, Meta Certified Media Buyer, and HubSpot Marketing automation accolades with 8+ years experience.",
      icon: Award
    },
    {
      title: "Transparent Reporting",
      description: "Get weekly interactive live dashboards and simple, human-explained walkthrough video logs. You will always know exactly where your ad spend went and what it yielded.",
      icon: FileBarChart
    },
    {
      title: "Data-Driven Decisions",
      description: "No guesswork. We run scientific A/B split testing, utilize quantitative website heatmaps, and analyze competitor gaps to build bulletproof customer acquisition models.",
      icon: Layers
    },
    {
      title: "Creative Campaigns",
      description: "Stop the scroll. We curate custom visual scripts, high-impact ad copywriting, and sleek product reels designed to seize attention and drive immediate engagement.",
      icon: Lightbulb
    },
    {
      title: "24/7 Premium Support",
      description: "We work as an integrated, dedicated extension of your company. Reach our senior campaign strategists via private WhatsApp channels, Slack, or instant phone lines.",
      icon: Headphones
    }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(selector);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-20 bg-slate-50/40 relative overflow-hidden" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="why-us-header">
          <span className="text-xs font-bold uppercase tracking-widest text-[#009CFF] bg-[#EAF7FF] px-4 py-1.5 rounded-full">
            Our Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900">
            Why Businesses <span className="text-[#009CFF]">Choose Us</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            We bridge the gap between heavy technical execution and high-converting visual design to scale your leads, sales, and compound brand equity.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="why-us-grid">
          {features.map((feat, i) => {
            const FeatureIcon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-white/40 backdrop-blur-md rounded-[20px] p-6 md:p-8 border border-white/60 shadow-sm hover:shadow-xl hover:shadow-sky-50/50 hover:-translate-y-1.5 transition-all duration-300"
                id={`why-card-${i}`}
              >
                {/* Circular light-blue icon background */}
                <div className="w-12 h-12 rounded-full bg-[#EAF7FF] flex items-center justify-center text-[#009CFF] group-hover:bg-[#009CFF] group-hover:text-white transition-colors duration-300 mb-6">
                  <FeatureIcon className="w-5.5 h-5.5 stroke-[2]" />
                </div>

                <h3 className="text-lg md:text-xl font-bold font-display text-slate-900 mb-3 group-hover:text-[#009CFF] transition-colors">
                  {feat.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feat.description}
                </p>

                {/* Micro active indicator */}
                <div className="w-8 h-1 bg-transparent group-hover:bg-[#009CFF] rounded-full mt-6 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Extra Reassurance Box */}
        <div className="mt-16 bg-white/40 backdrop-blur-md rounded-[24px] p-6 md:p-8 border border-white/60 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md" id="why-us-reassurance">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base md:text-lg">Zero Long-Term Lock-In Contracts</h4>
              <p className="text-slate-500 text-xs md:text-sm">We believe in our results. All our primary packages are structured on a monthly basis. We retain our clients by generating continuous profitable revenue, not legal paperwork.</p>
            </div>
          </div>
          <a
            href="#pricing"
            onClick={(e) => handleSmoothScroll(e, "#pricing")}
            className="bg-[#EAF7FF] hover:bg-[#009CFF] text-[#009CFF] hover:text-white px-5 py-3 rounded-xl font-semibold text-xs md:text-sm whitespace-nowrap transition-colors"
          >
            View Flexible Pricing
          </a>
        </div>

      </div>
    </section>
  );
}
