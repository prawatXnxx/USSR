import React, { useState, useEffect } from "react";
import { 
  Briefcase, TrendingUp, Users, Target, Award,
  Sparkles, ArrowRight, CheckCircle2, ChevronRight, X,
  ShoppingBag, Search, BarChart3, Megaphone, Monitor, Check,
  Activity, Home, GraduationCap, Landmark, Utensils, Rocket, 
  Cpu, Factory, Shield, Heart, Eye, ArrowUpRight, Star, Quote
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PortfolioPageProps {
  onOpenAudit: () => void;
  onOpenCall: () => void;
  onNavigate: (path: string) => void;
}

// Project Interface
interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  categories: string[];
  image: string;
  services: string[];
  shortDesc: string;
  results: string;
  caseStudy: {
    challenge: string;
    strategy: string;
    execution: string;
    resultsList: string[];
    beforeAfter: { before: string; after: string };
    roi: string;
  };
}

export default function PortfolioPage({ onOpenAudit, onOpenCall, onNavigate }: PortfolioPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  // Filter Categories
  const categories = [
    "All", "SEO", "Google Ads", "Meta Ads", "Social Media", 
    "Website Design", "Shopify Development", "Branding", "Content Marketing", "AI Marketing"
  ];

  // Professional Projects List
  const projects: Project[] = [
    {
      id: "saas-booster",
      title: "AI-Driven SEO Expansion",
      client: "SaaS Booster Inc.",
      industry: "Startups & Technology",
      categories: ["SEO", "AI Marketing", "Content Marketing"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      services: ["SEO Audit", "AI Content Engine", "Keyword Clustering"],
      shortDesc: "Scaled search traffic by targeting high-intent long-tail keywords using machine-learning search model integrations.",
      results: "+240% Organic Signups, Top 3 rankings for 45+ terms",
      caseStudy: {
        challenge: "SaaS Booster was struggling with sky-high customer acquisition costs (CAC) on paid search networks. They needed a reliable, organic traffic stream that would generate premium business-to-business product trials without depleting their seed capital.",
        strategy: "We built a customized keyword matrix focusing on transactional 'alternative-to' keywords and combined it with an AI-driven, editor-guided content calendar. We restructured their technical sitemap and deployed localized landing pages.",
        execution: "Implemented a fully optimized topical cluster strategy, automated schema markup deployments, and acquired 60+ high-authority backlinks from verified technology platforms. Integrated predictive search intent analysis to continually optimize post titles.",
        resultsList: [
          "240% Increase in weekly organic registrations",
          "Ranked #1 for 18 primary high-value keywords within 4 months",
          "Reduced overall customer acquisition costs (CAC) by 62%"
        ],
        beforeAfter: { before: "12,000 monthly visits", after: "94,000 monthly visits" },
        roi: "14X Investment ROI"
      }
    },
    {
      id: "zenith-apparel",
      title: "Omnichannel Shopify Scaling",
      client: "Zenith Apparel",
      industry: "E-commerce",
      categories: ["Shopify Development", "Meta Ads", "Google Ads"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      services: ["Shopify Store Design", "Meta Ad Funnels", "Google Shopping Optimization"],
      shortDesc: "Rebuilt the checkout sequence and deployed algorithmic scaling across Meta and Google Smart Shopping campaigns.",
      results: "7.8x Meta Ads ROAS, +185% E-commerce Conversions",
      caseStudy: {
        challenge: "Zenith Apparel's WooCommerce store suffered from sluggish load times and a high cart abandonment rate. Simultaneously, their ad accounts suffered from high ad fatigue and random CPC spikes.",
        strategy: "We migrated Zenith Apparel to a headless Shopify framework optimized for mobile Core Web Vitals. We then structured a multi-tiered Meta retargeting funnel and implemented high-volume catalog ads.",
        execution: "Engineered responsive UI transitions, streamlined checkout from 5 steps to a single optimized screen, and deployed dynamic product ads. Applied lookalike targeting strategies using highly refined purchase event triggers.",
        resultsList: [
          "Migrated platform speed score boosted from 24 to 88/100",
          "Meta Ads Return on Ad Spend (ROAS) reached a record 7.8x",
          "Add-to-cart cart drop-off reduced from 70% to 28%"
        ],
        beforeAfter: { before: "2.1% Conversion Rate", after: "4.8% Conversion Rate" },
        roi: "7.8X ROI"
      }
    },
    {
      id: "aura-skincare",
      title: "Social Brand Regeneration",
      client: "Aura Skincare",
      industry: "Professional Services",
      categories: ["Social Media", "Branding", "Content Marketing"],
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80",
      services: ["Brand Styling", "Creator Relations", "TikTok & Reels Strategy"],
      shortDesc: "Repositioned a clinical brand into a vibrant social presence with hyper-targeted influencer partnerships and storytelling.",
      results: "3.2M organic views, 110% Brand Search Lift",
      caseStudy: {
        challenge: "Aura Skincare possessed premium ingredients but lacked a cohesive emotional narrative, rendering them invisible in a saturated beauty market.",
        strategy: "We redefined the brand's aesthetic guidelines to embrace soft minimalism and secured high-affinity micro-influencer product seedings to capture organic TikTok and Instagram trends.",
        execution: "Produced 45 high-engagement short-form video creatives per month, managed end-to-end influencer contracts, and implemented a custom brand voice guide across all marketing touchpoints.",
        resultsList: [
          "Over 3.2M total video views across social channels in 90 days",
          "110% increase in brand-specific Google search volume",
          "Sourced 150+ user-generated videos for repurposing in ad creatives"
        ],
        beforeAfter: { before: "450 Instagram followers/mo", after: "18,500 Instagram followers/mo" },
        roi: "5.2X ROI"
      }
    },
    {
      id: "prime-health",
      title: "Patient Acquisition System",
      client: "Prime Health Group",
      industry: "Healthcare",
      categories: ["SEO", "Website Design"],
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      services: ["HIPAA-Compliant Website", "Local Map Pack Domination"],
      shortDesc: "Designed a clean, highly secure scheduling platform and optimized local search maps for multi-location medical centers.",
      results: "+190% Monthly Appointments, #1 in local maps",
      caseStudy: {
        challenge: "Prime Health's website was outdated, unhelpful on mobile, and failed to meet medical compliance guidelines. Finding a doctor and scheduling a visit was a highly frustrating process.",
        strategy: "We engineered a clean, HIPAA-compliant patient portal that lets users choose clinics based on proximity. Combined this with a strong localized citation and Google Business profile campaign.",
        execution: "Created schema markup for medical clinics, built interactive clinic locator maps, and streamlined appointment forms to optimize conversion speed.",
        resultsList: [
          "A record-breaking 190% increase in monthly online appointment bookings",
          "Ranked #1 for 'medical clinic near me' across 8 physical locations",
          "Decreased patient check-in wait times by 35% using pre-registration pages"
        ],
        beforeAfter: { before: "180 online bookings/mo", after: "520 online bookings/mo" },
        roi: "11X ROI"
      }
    },
    {
      id: "apex-fintech",
      title: "Lead Acquisition Campaign",
      client: "Apex FinTech",
      industry: "Finance",
      categories: ["Google Ads", "AI Marketing"],
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
      services: ["PPC Strategy", "Smart Bidding Campaigns", "Landing Page UX"],
      shortDesc: "Designed a secure high-conversion landing page and optimized Google Search PPC using premium AI smart-bidding hooks.",
      results: "+315% Qualified Leads, -44% Cost Per Lead",
      caseStudy: {
        challenge: "Apex FinTech was spending thousands on PPC but attracting unqualified leads, wasting their sales team's energy.",
        strategy: "We built an interactive cost-calculator funnel that pre-qualified prospects. We then configured offline conversion tracking to feed positive buyer signals directly back into Google's Smart Bidding models.",
        execution: "A/B tested 24 layout combinations, optimized ad copy using predictive model CTR forecasts, and targeted high-net-worth cohorts with search exclusions.",
        resultsList: [
          "315% growth in sales-qualified applications",
          "Reduced cost-per-lead (CPL) from $185 to $103",
          "Boosted overall landing page form completion rate by 18.2%"
        ],
        beforeAfter: { before: "5.4% Landing Page CV", after: "16.1% Landing Page CV" },
        roi: "16X ROI"
      }
    },
    {
      id: "gourmet-express",
      title: "Hyper-Local Delivery Growth",
      client: "Gourmet Express",
      industry: "Restaurants",
      categories: ["Social Media", "Meta Ads", "Branding"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      services: ["Hyperlocal Ads", "In-App Ordering Promotion", "Creative Asset Production"],
      shortDesc: "Deployed geotargeted video ads to hungry professionals in a 5-mile radius, amplifying food delivery app orders.",
      results: "9.2x Return on Ad Spend, +300% app downloads",
      caseStudy: {
        challenge: "Gourmet Express needed to increase lunch orders for their physical and delivery business amid rising delivery app commissions.",
        strategy: "We utilized dynamic radius-geotargeting on Meta to display custom video ads of hot, prepared dishes strictly between 11:00 AM and 1:30 PM.",
        execution: "Created slow-motion, highly appealing recipe videos, integrated direct ordering shortcuts, and targeted local office complexes.",
        resultsList: [
          "Lunch orders surged by 220% during target hours",
          "Meta Ads ROI calculated at 9.2x during active delivery slots",
          "Drove over 12,000 app installs within the local metropolitan area"
        ],
        beforeAfter: { before: "45 orders per day", after: "165 orders per day" },
        roi: "9.2X ROI"
      }
    },
    {
      id: "urban-realestate",
      title: "Luxury Lead Acquisition",
      client: "Urban Real Estate",
      industry: "Real Estate",
      categories: ["Google Ads", "Website Design"],
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
      services: ["Luxury Branding", "High-Net-Worth PPC Campaigns", "Web Showcases"],
      shortDesc: "Designed high-end digital real-estate galleries and deployed laser-focused search and map campaigns.",
      results: "$42M in attribution, $85 cost-per-qualified-lead",
      caseStudy: {
        challenge: "Urban Real Estate struggled to find genuine luxury home buyers, receiving too many casual listings browsers and unqualified leads.",
        strategy: "We designed beautiful virtual walkthrough portfolios requiring gated qualification and ran ultra-specific Google search ads on luxury keywords.",
        execution: "Engineered elegant, fast portfolio interfaces, optimized imagery assets, and implemented strict demographic and location bidding criteria.",
        resultsList: [
          "Acquired 350+ certified high-net-worth buyer leads",
          "Directly attributed to $42M in real estate transaction volume",
          "Decreased average cost-per-lead by 48%"
        ],
        beforeAfter: { before: "2 real leads/month", after: "38 real leads/month" },
        roi: "18.5X ROI"
      }
    },
    {
      id: "edusphere-learning",
      title: "National Student Enrollment Lift",
      client: "EduSphere",
      industry: "Education",
      categories: ["Content Marketing", "SEO"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      services: ["Authority Building Content", "On-Page SEO Tuning", "Student Personas"],
      shortDesc: "Curated rich interactive learning guides and technical course structures that drove organic enrollment signups nationally.",
      results: "+210% Enrollment Registrations, 4.5M Organic Pageviews",
      caseStudy: {
        challenge: "EduSphere launched competitive online credentials but were drowned out by historical universities and traditional online learning catalogs.",
        strategy: "We designed and written 40+ long-form industry manuals and career-switch checklists. Built topical authority with internal link bridges.",
        execution: "Drafted course map visualizations, optimized title tags, and structured structured schema data for quick course snippets on search results.",
        resultsList: [
          "Attracted 4.5 million unique organic organic views in 12 months",
          "Drove a 210% lift in monthly student enrollment courses",
          "Established first-page ranking for major competitive terms"
        ],
        beforeAfter: { before: "1,200 registrations/mo", after: "3,720 registrations/mo" },
        roi: "8.2X ROI"
      }
    }
  ];

  // Filtered Projects list
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.categories.includes(selectedCategory));

  // Performance Metrics Array
  const metrics = [
    { label: "Completed Projects", value: "500+", desc: "Bespoke campaigns delivered on target" },
    { label: "Happy Clients", value: "250+", desc: "Retained partnerships across industries" },
    { label: "Client Satisfaction", value: "98%", desc: "Direct client survey approvals" },
    { label: "Marketing Impressions", value: "50M+", desc: "Qualified traffic generated globally" },
    { label: "Average ROI", value: "10X", desc: "Return multiplier on direct media spend" }
  ];

  // Industries Served Array
  const industries = [
    { name: "E-commerce", icon: ShoppingBag, desc: "Scale checkouts, reduce cart drops, and run profitable omnichannel advertising hooks." },
    { name: "Healthcare", icon: Heart, desc: "HIPAA-compliant layouts, local map map pack ranking, and streamlined scheduling portals." },
    { name: "Real Estate", icon: Home, desc: "Target high-net-worth listing leads and design breathtaking interactive home tours." },
    { name: "Education", icon: GraduationCap, desc: "Increase online enrollment cycles and drive continuous high-authority resource signups." },
    { name: "Finance", icon: Landmark, desc: "Secure leads for investment funds, insurance models, and advanced banking tools." },
    { name: "Restaurants", icon: Utensils, desc: "Hyperlocal geotargeting, order promotions, and visual reels for local peak times." },
    { name: "Startups", icon: Rocket, desc: "Rapid product validation, viral social presence, and hyper-scalable search traffic." },
    { name: "Technology", icon: Cpu, desc: "B2B SaaS pipelines, product trial conversions, and advanced topical SEO matrices." },
    { name: "Manufacturing", icon: Factory, desc: "Traditional wholesale catalog digitalization and high-volume partner channels." },
    { name: "Professional Services", icon: Shield, desc: "Consistent inbound client pipelines for top medical, legal, and financial teams." }
  ];

  // Client Testimonials
  const testimonials = [
    {
      name: "Marcus Vance",
      role: "CEO & Founder",
      company: "SaaS Booster Inc.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      feedback: "This agency is in a league of its own. They didn't just build our SEO content—they engineered a fully automated pipeline that brought us 94K monthly visitors and slashed our CAC by 62%. Absolute game changers!"
    },
    {
      name: "Sarah Jenkins",
      role: "VP of E-commerce Marketing",
      company: "Zenith Apparel",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      feedback: "Rebuilding our store and launching automated Meta ad clusters with them yielded a 7.8x return on ad spend. The visual designs are stellar, and the technical performance is outstanding."
    },
    {
      name: "Dr. Alicia Winters",
      role: "Operations Director",
      company: "Prime Health Group",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      feedback: "Managing marketing for 8 clinics is difficult, but their patient acquisition funnel and local maps dominance increased our monthly bookings by 190%. They respect strict compliance too."
    }
  ];

  // Simulated animated counter hook
  function AnimatedCounter({ value }: { value: string }) {
    const [count, setCount] = useState(0);
    const numericPart = parseInt(value.replace(/[^0-9]/g, "")) || 0;
    const suffix = value.replace(/[0-9]/g, "");

    useEffect(() => {
      let start = 0;
      const end = numericPart;
      if (end === 0) return;
      const totalTime = 1200;
      const increment = Math.ceil(end / (totalTime / 16));
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }, [numericPart]);

    return <span>{count}{suffix}</span>;
  }

  return (
    <div className="bg-white" id="portfolio-us-page">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-slate-900 overflow-hidden" id="portfolio-hero-section">
        {/* Glowing visual highlights */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#009CFF]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[#009CFF] text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" /> Proven Track Record of Scaling Brands
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white max-w-4xl mx-auto leading-tight mb-6"
          >
            Our Portfolio of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009CFF] to-sky-300">Successful Digital Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Explore how we've helped businesses grow through strategic digital marketing, creative design, and cutting-edge technology. Our metrics speak for themselves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#009CFF] hover:bg-[#0086db] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-sky-500/15 hover:shadow-sky-500/25 hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate("/contact")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
            >
              Contact Our Team
            </button>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-12 bg-slate-950 text-white border-y border-slate-800" id="performance-metrics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {metrics.map((metric, idx) => (
              <div key={metric.label} className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#009CFF]">
                  <AnimatedCounter value={metric.value} />
                </div>
                <div className="font-semibold text-xs sm:text-sm text-slate-100">{metric.label}</div>
                <div className="text-[10px] text-slate-400 max-w-xs mx-auto leading-tight hidden sm:block">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters & Projects Showcase */}
      <section className="py-20 bg-white" id="portfolio-showcase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono">Bespoke Frameworks</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-950 mt-1">
              Curated Direct Client Deliveries
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-3">
              Filter by channels to observe actual case histories. We develop specialized targeting rules to secure sustainable conversions across any marketing vertical.
            </p>
          </div>

          {/* Interactive Filters Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-full font-bold text-xs transition-all cursor-pointer ${
                  selectedCategory === cat 
                    ? "bg-[#009CFF] text-white shadow-md shadow-blue-500/20" 
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="rounded-3xl border border-slate-100 bg-white shadow-lg shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200/80 hover:border-[#009CFF]/20 overflow-hidden flex flex-col h-full group transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white text-xs font-bold inline-flex items-center gap-1">
                        Open Insights <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-slate-900 border border-slate-100 shadow-sm uppercase tracking-wide">
                      {project.industry}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col justify-between flex-grow text-left">
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <span className="text-slate-400 font-mono text-[10px] uppercase font-bold tracking-widest">{project.client}</span>
                        <h3 className="font-display font-black text-slate-950 text-lg group-hover:text-[#009CFF] transition-colors leading-snug">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                        {project.shortDesc}
                      </p>
                      
                      {/* Services badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.services.slice(0, 3).map(service => (
                          <span key={service} className="bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 mt-6 space-y-4">
                      {/* Highlighted Result */}
                      <div className="bg-blue-50/50 border border-blue-100/50 p-3 rounded-xl">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">Key Accomplishment</div>
                        <div className="text-[#009CFF] font-extrabold text-xs sm:text-sm mt-0.5 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 shrink-0 text-[#009CFF]" />
                          {project.results}
                        </div>
                      </div>

                      {/* Case Study Trigger */}
                      <button
                        onClick={() => setActiveCaseStudy(project)}
                        className="w-full inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-[#009CFF] text-white font-bold py-3 rounded-xl transition-all text-xs cursor-pointer shadow-sm group/btn"
                      >
                        View Case Study
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setActiveCaseStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-100 text-left flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Banner */}
              <div className="relative h-48 sm:h-64 shrink-0 bg-slate-100">
                <img 
                  src={activeCaseStudy.image} 
                  alt={activeCaseStudy.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full border border-white/20 backdrop-blur-md transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#009CFF] text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full font-mono">
                      {activeCaseStudy.industry}
                    </span>
                    <span className="text-white/80 text-xs font-semibold font-mono">
                      Client: {activeCaseStudy.client}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                    {activeCaseStudy.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-10 space-y-8 overflow-y-auto">
                
                {/* Metric Summary Ribbon */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-center sm:text-left space-y-0.5 border-b sm:border-b-0 sm:border-r border-slate-200/60 pb-3 sm:pb-0 sm:pr-4">
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider font-mono">Campaign ROI achieved</span>
                    <div className="text-2xl font-black text-[#009CFF]">{activeCaseStudy.caseStudy.roi}</div>
                  </div>
                  <div className="text-center sm:text-left space-y-0.5 border-b sm:border-b-0 sm:border-r border-slate-200/60 py-3 sm:py-0 sm:px-4">
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider font-mono">Before Campaign</span>
                    <div className="text-base font-black text-slate-500 line-through">{activeCaseStudy.caseStudy.beforeAfter.before}</div>
                  </div>
                  <div className="text-center sm:text-left space-y-0.5 pt-3 sm:pt-0 sm:pl-4">
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider font-mono">After Campaign</span>
                    <div className="text-lg font-black text-emerald-600 flex items-center justify-center sm:justify-start gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {activeCaseStudy.caseStudy.beforeAfter.after}
                    </div>
                  </div>
                </div>

                {/* Challenge, Strategy & Execution Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  
                  {/* Left Column: Narrative */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display font-black text-slate-950 text-base mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-[#009CFF] rounded-full" />
                        The Client Challenge
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {activeCaseStudy.caseStudy.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-display font-black text-slate-950 text-base mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
                        Our Strategy
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {activeCaseStudy.caseStudy.strategy}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Execution & Deliverables */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display font-black text-slate-950 text-base mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-indigo-500 rounded-full" />
                        Campaign Execution
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {activeCaseStudy.caseStudy.execution}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-display font-black text-slate-950 text-base mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                        Measurable Accomplishments
                      </h4>
                      <ul className="space-y-2">
                        {activeCaseStudy.caseStudy.resultsList.map((res, index) => (
                          <li key={index} className="flex items-start gap-2 text-xs text-slate-600">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>

                {/* CTA inside modal */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-slate-500 text-xs text-center sm:text-left">
                    Want to achieve similar scalability for <strong className="text-slate-950">{activeCaseStudy.client}</strong>'s market? Let's trace a blueprint.
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => {
                        setActiveCaseStudy(null);
                        onOpenCall();
                      }}
                      className="flex-1 sm:flex-none text-center bg-[#009CFF] hover:bg-[#0086db] text-white font-bold px-6 py-3 rounded-xl transition-all text-xs cursor-pointer"
                    >
                      Coordinate Audit
                    </button>
                    <button
                      onClick={() => setActiveCaseStudy(null)}
                      className="flex-1 sm:flex-none text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-xl transition-all text-xs cursor-pointer"
                    >
                      Dismiss View
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Industries Served Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100" id="industries-served">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono">Global Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-950 mt-1">
              Industries We Serve With Pride
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-3">
              We operate optimized pipelines calibrated to your specific sector. No generic programs—only highly customized structures matching actual industry economics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="p-6 rounded-3xl border border-slate-200/60 bg-white hover:border-[#009CFF]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#EAF7FF]/35 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#009CFF] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-slate-950 text-base mb-1.5">{ind.name}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{ind.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono">Direct Feedback</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-950 mt-1">
              Reviews From Our Elite Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div
                key={test.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50/40 relative text-left flex flex-col justify-between h-full hover:shadow-lg transition-shadow"
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-600 text-xs sm:text-sm leading-relaxed relative italic">
                    <Quote className="w-8 h-8 text-blue-100 absolute -top-4 -left-3 -z-10 rotate-180" />
                    "{test.feedback}"
                  </blockquote>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-100/80 mt-6">
                  <img 
                    src={test.image} 
                    alt={test.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md shadow-slate-100"
                  />
                  <div>
                    <h4 className="font-bold text-slate-950 text-sm">{test.name}</h4>
                    <p className="text-slate-400 text-[10px] font-mono mt-0.5">{test.role} &middot; <strong className="text-[#009CFF]">{test.company}</strong></p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative bg-slate-900 text-white overflow-hidden" id="portfolio-final-cta">
        {/* Background blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#009CFF]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-25" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-[#009CFF] uppercase tracking-widest border border-white/5">
            <TrendingUp className="w-3.5 h-3.5" /> Start Expanding Your Brand
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Become Our Next Success Story?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reach out to our certified marketing leads now. We are standing by to prepare an absolute performance overview detailing where your budget is losing conversions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenCall}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#009CFF] hover:bg-[#0086db] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
            >
              Get a Free Consultation <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white border-2 border-white hover:bg-slate-100 text-slate-900 font-bold px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
