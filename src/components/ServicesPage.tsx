import React, { useState, useEffect } from "react";
import { 
  Search, TrendingUp, Users, MessageSquare, Code, FileText, 
  Palette, Mail, Target, Cpu, MapPin, ShoppingBag, 
  ArrowRight, Check, X, ShieldCheck, Sparkles, Star,
  MessageCircle, Video, Megaphone, Briefcase, BarChart3,
  Award, Clock, CheckCircle2, ChevronDown, ChevronUp,
  Building2, Stethoscope, Landmark, GraduationCap, Utensils,
  Store, Rocket, Laptop, Factory, Plane, Scale, HelpCircle, Phone
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

// Industries configuration with corresponding icons
const industries = [
  { name: "E-commerce", icon: ShoppingBag, desc: "Scale visual ads & high-retention email flows." },
  { name: "Healthcare", icon: Stethoscope, desc: "Surgical Google Search setups & compliant pages." },
  { name: "Real Estate", icon: Building2, desc: "Target high-intent leads and HNI buyer campaigns." },
  { name: "Education", icon: GraduationCap, desc: "Drive student enrollments with strategic branding." },
  { name: "Restaurants", icon: Utensils, desc: "Generate local map views and viral reels traffic." },
  { name: "Local Businesses", icon: Store, desc: "Dominate near-me searches & lead maps." },
  { name: "Finance", icon: Landmark, desc: "Build authority content and secure client captures." },
  { name: "Startups", icon: Rocket, desc: "Aggressive visual testing & rapid lead scaling." },
  { name: "Technology", icon: Laptop, desc: "Software search funnels and value-focused SMM." },
  { name: "Manufacturing", icon: Factory, desc: "B2B client sourcing & catalog search campaigns." },
  { name: "Travel & Hospitality", icon: Plane, desc: "Inspire travelers and drive direct bookings." },
  { name: "Professional Services", icon: Scale, desc: "Consistent client flow and expert positioning." }
];

// Why Choose Us reasons
const whyChooseReasons = [
  {
    title: "ROI-Focused Strategies",
    desc: "We align all campaigns with cold revenue objectives. If an ad doesn't return trackable sales or high-quality leads, we change it.",
    icon: TrendingUp,
  },
  {
    title: "Experienced Marketing Experts",
    desc: "Our strategist team has spent over $5,000,000 in successful ad campaigns across diverse consumer and B2B markets.",
    icon: Award,
  },
  {
    title: "Transparent Reporting",
    desc: "No vanity metric sheets. You receive bi-weekly transparent breakdowns showing exact spending, lead counts, and actual ROAS.",
    icon: BarChart3,
  },
  {
    title: "Affordable Pricing",
    desc: "High-tier premium digital marketing results mapped to highly transparent monthly rates. No hidden admin fees.",
    icon: Target,
  },
  {
    title: "Fast Project Delivery",
    desc: "We launch complex web projects and customized marketing stacks within weeks, never dragging timelines out.",
    icon: Clock,
  },
  {
    title: "Dedicated Account Manager",
    desc: "Direct Slack channel and fast Zoom lines with your primary growth strategist. No endless ticketing layers.",
    icon: Users,
  },
  {
    title: "Latest AI & Marketing Tools",
    desc: "We leverage cutting-edge analytics tracking, CRM pipelines, and AI copy assistants to keep acquisition costs low.",
    icon: Cpu,
  },
  {
    title: "Custom Marketing Plans",
    desc: "No cookie-cutter templates. We reverse-engineer your actual industry competitors to formulate tailored blueprints.",
    icon: Sparkles,
  },
  {
    title: "24/7 Support",
    desc: "Our operations and monitoring teams keep constant vigil over active ad servers, ensuring zero downtime.",
    icon: ShieldCheck,
  }
];

// Steps in Process
const processSteps = [
  { step: "01", name: "Free Consultation", desc: "We map out your current digital bottlenecks and define clear acquisition goals during a high-value strategy session." },
  { step: "02", name: "Business Analysis", desc: "We spy on your primary competitors' ads, reverse-engineer their keywords, and perform technical site speed audits." },
  { step: "03", name: "Strategy Planning", desc: "Our analysts construct a custom 12-month multi-channel digital roadmap, detailing ad budgets and priority campaigns." },
  { step: "04", name: "Campaign Setup", desc: "We design high-converting visual assets, write conversion-centric ad copy, set up CRM triggers, and double-test GA4 event trackers." },
  { step: "05", name: "Launch & Optimization", desc: "We launch campaigns, monitor real-time user flow heatmaps, exclude non-performing terms, and run ongoing visual split tests." },
  { step: "06", name: "Monthly Reporting & Scaling", desc: "We deliver human-explained performance reviews, lock in winning campaigns, and systematically increase ad budgets to capture market share." }
];

// Testimonials for Services
const servicesTestimonials = [
  {
    quote: "The organic search strategy they deployed completely changed our client flow. We rank #1 on Google for our primary high-intent keywords, driving hundreds of free inquiries monthly. Our acquisition costs have plummeted.",
    author: "Elena Rostov",
    role: "Director of Business Development",
    company: "Scribe Education Solutions",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "Their Meta video creative testing is unmatched. They produced high-converting video reels that drove a stable 9.1x return on ad spend (ROAS) on our skincare storefront, scaling our daily sales exponentially.",
    author: "Julian Vance",
    role: "Founder",
    company: "AuraSkincare Co.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "Surgical local maps optimization and automated SMS reviews grew our local walk-ins by 210%. We went from empty quiet tables to having lines down the block during weekends. Absolute marketing geniuses.",
    author: "Marcus Aurelius",
    role: "Operations Director",
    company: "Roma Bistro Group",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150"
  }
];

// FAQs for services
const servicesFAQs = [
  {
    q: "How long does SEO take to produce measurable leads?",
    a: "Unlike paid search campaigns which deliver instant clicks, organic SEO is a compounding long-term asset. Most clients see significant keyword ranking and search impression shifts inside 60-90 days, with exponential inbound customer inquiry volume establishing between month 4 and 6 of consistent authority-building."
  },
  {
    q: "How much digital marketing budget do I need to start?",
    a: "We structure custom campaigns for growing startups and established enterprises alike. For paid networks like Google and Meta, we suggest a minimum testing ad budget of $1,000 to $1,500/month to allow programmatic machine learning algorithms to adequately map out your highest-intent audiences."
  },
  {
    q: "Do you guarantee specific conversion or ranking results?",
    a: "No professional agency can guarantee Google's top spot or fixed sales conversion counts, as search engine algorithms change constantly. However, we have a 98% client satisfaction rate and guarantee the delivery of industry-standard, fully audited, compliant optimization techniques and transparent analytics data."
  },
  {
    q: "Which specific marketing channels are ideal for my business?",
    a: "If your buyers search actively with high intent, Google Ads (PPC) and Search SEO are highly recommended. If your product is highly visual, emotional, or impulse-buy driven, Meta Ads and Social Media Marketing (SMM) will yield the best results. We determine your ideal channel mix during our free initial analysis."
  },
  {
    q: "Do you work with smaller local businesses or startups?",
    a: "Yes! We specialize in local SEO and starter Google Search ads designed specifically to help local agencies and doctors capture immediate near-me market share. Our local visibility plans are highly cost-effective and built to scale as your sales grow."
  },
  {
    q: "How often will I receive campaign performance reviews?",
    a: "We believe in absolute accountability. All primary campaigns receive high-level monthly analytical audits. Our premium plan partners receive bi-weekly live video reviews and 24/7 access to interactive reporting dashboards showing real-time CRM and ROAS outcomes."
  }
];

interface ServicesPageProps {
  onOpenAudit: () => void;
  onOpenCall: () => void;
}

export default function ServicesPage({ onOpenAudit, onOpenCall }: ServicesPageProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  
  // State for Contact Form
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", website: "", notes: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Marketing Services | USTechRepairs.net - Drive High-Intent Digital Scale";
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: "", email: "", phone: "", website: "", notes: "" });
    }, 1200);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-slate-50/50 min-h-screen text-slate-800 font-sans" id="services-page-root">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-24 pb-20 md:py-32 border-b border-slate-100" id="services-hero">
        {/* Background decorative vector highlights */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#009CFF] bg-[#EAF7FF] px-4 py-1.5 rounded-full shadow-sm shadow-sky-100">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" /> 18 Growth specializations
              </span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-slate-900 leading-[1.1]">
                Digital Marketing Services That Drive <span className="text-[#009CFF]">Real Business Growth</span>
              </h1>
              
              <p className="text-slate-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Stop wasting marketing budgets on low-intent clicks. We engineer ROI-driven traffic, scale organic maps, optimize ad budgets, and dominate search engines with elite digital frameworks.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={onOpenAudit}
                  className="w-full sm:w-auto px-8 py-4 bg-[#009CFF] hover:bg-[#0086db] text-white font-bold rounded-xl shadow-lg shadow-sky-200/50 hover:-translate-y-0.5 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                  id="services-hero-cta-consult"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#all-marketing-services"
                  onClick={(e) => handleSmoothScroll(e, "all-marketing-services")}
                  className="w-full sm:w-auto px-8 py-4 bg-[#EAF7FF] hover:bg-[#009CFF] text-[#009CFF] hover:text-white font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                  id="services-hero-cta-work"
                >
                  View Our Services
                </a>
              </div>
            </div>

            {/* Right Graphic Column */}
            <div className="lg:col-span-5 relative" id="services-hero-visual">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Immersive layered mockup graphic */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#009CFF]/10 to-sky-400/10 rounded-[32px] blur-xl" />
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
                  alt="Digital Agency Analytics Dashboard"
                  className="rounded-3xl border border-slate-200/80 shadow-2xl relative z-10 w-full object-cover aspect-video sm:aspect-square"
                  referrerPolicy="no-referrer"
                />
                
                {/* Interactive layered floating stats */}
                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-xl z-20 hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">Average ROI Boost</span>
                    <span className="text-lg font-black text-slate-900 font-mono">+320%</span>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-xl z-20 hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#009CFF] flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">Clients Tracked</span>
                    <span className="text-lg font-black text-slate-900 font-mono">250+ Active</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES GRID (All 18 Services) */}
      <section className="py-20 bg-white" id="all-marketing-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#009CFF] bg-[#EAF7FF] px-4 py-1.5 rounded-full">
              Full-Service Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900">
              Our Digital <span className="text-[#009CFF]">Marketing Solutions</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Unlock continuous, profitable inbound client streams. Explore our 18 core competencies built to optimize budgets and scale client capture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {servicesData.map((service, idx) => {
              const IconComponent = IconMap[service.icon] || Search;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
                  className="group relative bg-white border border-slate-100 hover:border-sky-200 rounded-[24px] p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-sky-50/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                  id={`srv-pg-card-${service.id}`}
                >
                  <div className="space-y-4 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF7FF] flex items-center justify-center text-[#009CFF] group-hover:bg-[#009CFF] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6 stroke-[1.75]" />
                    </div>

                    <h3 className="text-lg font-bold font-display text-slate-900 group-hover:text-[#009CFF] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 relative z-10">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009CFF] group-hover:text-[#0086db] uppercase tracking-wider hover:gap-2.5 transition-all cursor-pointer"
                      id={`srv-pg-learn-btn-${service.id}`}
                    >
                      Learn More & Strategy <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="py-20 bg-slate-50 relative overflow-hidden" id="services-why-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#009CFF] bg-[#EAF7FF] px-4 py-1.5 rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900">
              Built on Value, <span className="text-[#009CFF]">Not Lock-in Contracts</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              We retain our clients by generating continuous profitable revenue, not visual reporting noise. Here is how we differ from traditional marketing agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseReasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EAF7FF] flex items-center justify-center text-[#009CFF]">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-slate-900">{reason.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. OUR STEP-BY-STEP TIMELINE PROCESS */}
      <section className="py-20 bg-white" id="services-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#009CFF] bg-[#EAF7FF] px-4 py-1.5 rounded-full">
              Working Protocol
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900">
              Our 6-Step <span className="text-[#009CFF]">Scale Framework</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Our methodical setup ensures that every dollar of spend is accounted for, tracked, optimized, and systematically scaled.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative group space-y-4 p-6 bg-slate-50/40 border border-slate-100/80 rounded-2xl" id={`process-step-${idx}`}>
                <div className="absolute top-4 right-4 text-slate-200 group-hover:text-[#009CFF]/15 transition-colors font-mono font-black text-4xl leading-none">
                  {step.step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#EAF7FF] text-[#009CFF] flex items-center justify-center font-bold font-mono text-sm">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold font-display text-slate-900 group-hover:text-[#009CFF] transition-colors pt-2">{step.name}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="py-20 bg-slate-50" id="services-industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#009CFF] bg-[#EAF7FF] px-4 py-1.5 rounded-full">
              Sector Specialization
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900">
              Industries We <span className="text-[#009CFF]">Serve & Dominate</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              No generic generalists here. We adapt our custom bidding matrices and ad structures to the precise metrics your sector demands.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col items-center text-center space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EAF7FF] flex items-center justify-center text-[#009CFF]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display leading-tight">{ind.name}</h4>
                  <p className="text-[11px] text-slate-400 font-normal leading-normal">{ind.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. RESULTS & STATISTICS COUNTERS */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="services-stats">
        {/* Background ambient highlights */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,156,255,0.12),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#009CFF] bg-slate-800 border border-slate-700/80 px-4 py-1.5 rounded-full">
              Historical Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
              Results Measured in <span className="text-[#009CFF]">Cold Hard Cash</span>
            </h2>
            <p className="text-slate-400 text-base">
              Vanity views mean nothing. We scale businesses based on customer acquisitions and real tracked revenue increases.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 text-center">
            
            <div className="bg-slate-800/40 border border-slate-800 p-6 md:p-8 rounded-2xl" id="counter-1">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-[#009CFF]">500+</span>
              <span className="block text-xs sm:text-sm font-semibold text-slate-200 mt-2">Projects Completed</span>
              <span className="block text-[10px] text-slate-400 mt-1">SaaS, Stores, & Services</span>
            </div>

            <div className="bg-slate-800/40 border border-slate-800 p-6 md:p-8 rounded-2xl" id="counter-2">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-[#009CFF]">250+</span>
              <span className="block text-xs sm:text-sm font-semibold text-slate-200 mt-2">Happy Clients</span>
              <span className="block text-[10px] text-slate-400 mt-1">E-commerce & local leads</span>
            </div>

            <div className="bg-slate-800/40 border border-slate-800 p-6 md:p-8 rounded-2xl" id="counter-3">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-[#009CFF]">50M+</span>
              <span className="block text-xs sm:text-sm font-semibold text-slate-200 mt-2">Ad Impressions</span>
              <span className="block text-[10px] text-slate-400 mt-1">High conversion visuals</span>
            </div>

            <div className="bg-slate-800/40 border border-slate-800 p-6 md:p-8 rounded-2xl" id="counter-4">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-[#009CFF]">98%</span>
              <span className="block text-xs sm:text-sm font-semibold text-slate-200 mt-2">Client Satisfaction</span>
              <span className="block text-[10px] text-slate-400 mt-1">Tracked by monthly retention</span>
            </div>

            <div className="col-span-2 lg:col-span-1 bg-slate-800/60 border border-[#009CFF]/30 p-6 md:p-8 rounded-2xl" id="counter-5">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-emerald-400">10X</span>
              <span className="block text-xs sm:text-sm font-black text-slate-200 mt-2">Average Campaign ROI</span>
              <span className="block text-[10px] text-slate-400 mt-1">Inside 120 testing days</span>
            </div>

          </div>

        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section className="py-20 bg-white" id="services-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#009CFF] bg-[#EAF7FF] px-4 py-1.5 rounded-full">
              Real Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900">
              Trusted by Hundreds of <span className="text-[#009CFF]">High-Growth Brands</span>
            </h2>
            <p className="text-slate-500 text-base">
              Listen to the actual feedback from agency leaders and retail owners who scaled their customer flows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesTestimonials.map((test, idx) => (
              <div key={idx} className="bg-slate-50/50 border border-slate-100 p-6 sm:p-8 rounded-3xl relative space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    "{test.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                  <img
                    src={test.avatar}
                    alt={test.author}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="font-bold text-sm text-slate-900 leading-tight">{test.author}</h5>
                    <p className="text-[11px] text-slate-400 leading-none mt-1">{test.role} &bull; {test.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100" id="services-faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#009CFF] bg-[#EAF7FF] px-4 py-1.5 rounded-full">
              FAQ Database
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900">
              Clear Answers to <span className="text-[#009CFF]">Common Questions</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Everything you need to know about our workflow, ad management, and operational setups.
            </p>
          </div>

          <div className="space-y-4" id="faq-accordions">
            {servicesFAQs.map((faq, idx) => {
              const isOpen = activeFAQ === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFAQ(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-[#009CFF] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-[#009CFF]" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-slate-50"
                      >
                        <p className="px-6 py-5 text-xs sm:text-sm text-slate-500 leading-relaxed bg-slate-50/30">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. FINAL CTA SECTION WITH CONTACT FORM */}
      <section className="py-20 bg-white border-t border-slate-100 relative overflow-hidden" id="services-contact-section">
        {/* Decorative ambient gradients */}
        <div className="absolute -top-12 right-0 w-[400px] h-[400px] bg-sky-50 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#009CFF] bg-[#EAF7FF] px-4 py-1.5 rounded-full">
                Get Started Today
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
                Ready to Grow Your <span className="text-[#009CFF]">Business Online?</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Contact our expert team today to claim your free 15-page comprehensive digital audit report or lock in a tailored omnichannel growth strategy.
              </p>

              <div className="space-y-4 pt-4" id="cta-contact-details">
                <a href="mailto:support@ustechrepairs.net" className="flex items-center gap-3 text-slate-700 hover:text-[#009CFF] transition-colors text-sm font-semibold">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF7FF] flex items-center justify-center text-[#009CFF]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>support@ustechrepairs.net</span>
                </a>
                <a href="tel:855-845-6558" className="flex items-center gap-3 text-slate-700 hover:text-[#009CFF] transition-colors text-sm font-mono font-bold">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF7FF] flex items-center justify-center text-[#009CFF]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>☎ 855-845-6558</span>
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-[#EAF7FF] border border-sky-100/40 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009CFF]" />
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">Response Time Guarantee</span>
                </div>
                <p className="text-slate-500 text-[11px] sm:text-xs">
                  All digital audit forms submitted here are processed within 2 business hours. Our growth architect will analyze your site live.
                </p>
              </div>
            </div>

            {/* Right Column form */}
            <div className="lg:col-span-7 bg-white/60 backdrop-blur-xl border border-slate-100 rounded-[32px] p-6 sm:p-8 shadow-xl" id="services-form-container">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4" id="form-success-state">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="text-2xl font-bold font-display text-slate-900">Form Submitted Successfully!</h4>
                  <p className="text-slate-500 text-sm max-w-md mx-auto">
                    Thank you! Our growth strategist has received your parameters and is performing a live search and ad audit of your business. We will reach out to you within 2 business hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer"
                  >
                    Send Another Parameters
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5" id="services-contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Your Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Vance"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009CFF] focus:border-[#009CFF] transition-all text-sm bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. david@yourcompany.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009CFF] focus:border-[#009CFF] transition-all text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. (855) 845-6558"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009CFF] focus:border-[#009CFF] transition-all text-sm bg-slate-50/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Your Website (URL) *</label>
                      <input
                        required
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="e.g. https://yourcompany.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009CFF] focus:border-[#009CFF] transition-all text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Tell Us About Your Sales & Growth Bottlenecks</label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Explain your target audience, current monthly spending budget, and key milestones you'd like us to achieve..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009CFF] focus:border-[#009CFF] transition-all text-sm bg-slate-50/50 resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-[#009CFF] hover:bg-[#0086db] text-white font-bold rounded-xl shadow-lg shadow-sky-200/50 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? "Processing Parameters..." : "Get a Custom Marketing Plan & Free Audit"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* DYNAMIC INDIVIDUAL SERVICE MODAL */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="srv-pg-modal-container">
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
              className="relative w-full max-w-xl bg-white rounded-[32px] p-6 md:p-8 shadow-2xl border border-slate-100 z-50 max-h-[90vh] overflow-y-auto"
              id="srv-pg-modal-body"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Service Meta */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF7FF] text-[#009CFF] flex items-center justify-center">
                  {React.createElement(IconMap[selectedService.icon] || Search, { className: "w-6 h-6 stroke-[2]" })}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#009CFF]">Campaign Specialization</span>
                  <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900 leading-tight">{selectedService.title}</h3>
                </div>
              </div>

              {/* Detailed Strategy Description */}
              <div className="space-y-6 text-slate-600 text-sm">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                  <div className="flex flex-wrap gap-2">
                    {selectedService.toolsUsed.map((tool) => (
                      <span key={tool} className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg text-slate-500 text-xs font-mono font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => { setSelectedService(null); onOpenAudit(); }}
                  className="w-full sm:w-auto bg-[#009CFF] hover:bg-[#0086db] text-white font-bold text-xs px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  Discuss {selectedService.title} <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold text-xs px-6 py-3.5 rounded-xl flex items-center justify-center"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
