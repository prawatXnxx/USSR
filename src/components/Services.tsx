import React, { useState } from "react";
import { 
  Search, TrendingUp, Users, MessageSquare, Code, FileText, 
  Palette, Mail, Target, Cpu, MapPin, ShoppingBag, 
  ArrowRight, Check, X, ShieldCheck, Sparkles,
  MessageCircle, Video, Megaphone, Briefcase, BarChart3
} from "lucide-react";
import { servicesData } from "../data/services";
import { Service } from "../types";
import { motion, AnimatePresence } from "motion/react";

// Helper to map icon names to actual Lucide components
const IconMap: Record<string, React.ComponentType<any>> = {
  Search,
  TrendingUp,
  Users,
  MessageSquare,
  Code,
  FileText,
  Palette,
  Mail,
  Target,
  Cpu,
  MapPin,
  ShoppingBag,
  MessageCircle,
  Video,
  Megaphone,
  Briefcase,
  BarChart3
};

interface ServicesProps {
  onOpenAudit: () => void;
  onNavigate?: (path: string) => void;
}

export default function Services({ onOpenAudit, onNavigate }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="services-header">
          <span className="text-xs font-bold uppercase tracking-widest text-[#009CFF] bg-[#EAF7FF] px-4 py-1.5 rounded-full">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900">
            Digital Marketing Services That Drive <span className="text-[#009CFF]">Real Growth</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Everything you need to grow your business online. We combine analytical data with creative brilliance to dominate search engines and social feeds.
          </p>
        </div>

        {/* Services Grid (Slices to 12 featured services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="services-grid">
          {servicesData.slice(0, 12).map((service, idx) => {
            const IconComponent = IconMap[service.icon] || Search;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative bg-white/40 backdrop-blur-md border border-white/60 hover:border-sky-300 rounded-[24px] p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-sky-50/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                id={`service-card-${service.id}`}
              >
                {/* Background decorative glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#EAF7FF]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  {/* Icon with circular light-blue background */}
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF7FF] flex items-center justify-center text-[#009CFF] group-hover:bg-[#009CFF] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-[#009CFF] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <div className="pt-6 relative z-10" id={`service-footer-${service.id}`}>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009CFF] group-hover:text-[#0086db] uppercase tracking-wider hover:gap-2.5 transition-all cursor-pointer"
                    id={`learn-more-btn-${service.id}`}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        {onNavigate && (
          <div className="mt-16 text-center" id="services-view-all-wrapper">
            <button
              onClick={() => onNavigate("/services")}
              className="inline-flex items-center gap-2 bg-[#EAF7FF] hover:bg-[#009CFF] text-[#009CFF] hover:text-white font-bold text-sm px-8 py-4 rounded-xl transition-all shadow-md shadow-sky-50/50 cursor-pointer"
              id="services-view-all-btn"
            >
              Explore All 18 Specialized Services
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Dynamic Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="service-detail-modal-container">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-50"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative w-full max-w-xl bg-white/60 backdrop-blur-xl rounded-[32px] p-6 md:p-8 shadow-2xl border border-white/80 z-50 max-h-[90vh] overflow-y-auto"
                id="service-modal-body"
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
                  aria-label="Close details"
                  id="close-service-modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Service Meta */}
                <div className="flex items-center gap-3.5 mb-6" id="service-modal-header">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF7FF] text-[#009CFF] flex items-center justify-center">
                    {React.createElement(IconMap[selectedService.icon] || Search, { className: "w-6 h-6 stroke-[2]" })}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#009CFF]">Campaign Specialization</span>
                    <h3 className="text-2xl font-bold font-display text-slate-900 leading-tight">{selectedService.title}</h3>
                  </div>
                </div>

                {/* Detailed Strategy Description */}
                <div className="space-y-6 text-slate-600 text-sm" id="service-modal-content">
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">Our Strategic Approach</h4>
                    <p className="leading-relaxed text-slate-700 font-normal">
                      {selectedService.detailedDescription}
                    </p>
                  </div>

                  {/* Core Benefit Callout */}
                  <div className="p-4 rounded-2xl bg-[#EAF7FF] border border-sky-100/40 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#009CFF] mt-0.5 shrink-0" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm leading-tight mb-1">{selectedService.benefitTitle}</h5>
                      <p className="text-slate-500 text-xs leading-normal">{selectedService.benefitDesc}</p>
                    </div>
                  </div>

                  {/* Key Features Check List */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">Key Deliverables Included</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2" id="service-deliverables">
                      {selectedService.keyFeatures.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools Stack */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">Industry-Standard Software Utilized</h4>
                    <div className="flex flex-wrap gap-2" id="service-tools">
                      {selectedService.toolsUsed.map((tool) => (
                        <span key={tool} className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg text-slate-500 text-xs font-mono font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-8 pt-6 border-t border-slate-50 flex flex-col sm:flex-row items-center gap-3" id="service-modal-footer">
                  <button
                    onClick={() => { setSelectedService(null); onOpenAudit(); }}
                    className="w-full sm:w-auto bg-[#009CFF] hover:bg-[#0086db] text-white font-bold text-xs px-6 py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                    id="service-modal-cta"
                  >
                    Discuss {selectedService.title} <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold text-xs px-6 py-3 rounded-xl flex items-center justify-center"
                    id="service-modal-dismiss"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
