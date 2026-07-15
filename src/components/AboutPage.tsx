import React, { useState, useEffect } from "react";
import { 
  ArrowRight, Sparkles, Target, Eye, Shield, Cpu, 
  TrendingUp, Compass, Heart, Users, Zap, CheckCircle2, 
  Linkedin, Twitter, Globe, Star, Flame, Trophy, 
  BarChart4, Briefcase, Award, ArrowUpRight, HelpCircle
} from "lucide-react";
import { motion } from "motion/react";

interface AboutPageProps {
  onOpenAudit: () => void;
  onOpenCall: () => void;
  onNavigate: (path: string) => void;
}

export default function AboutPage({ onOpenAudit, onOpenCall, onNavigate }: AboutPageProps) {
  // Stats auto-counting effect
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [expertsCount, setExpertsCount] = useState(0);
  const [industriesCount, setIndustriesCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setProjectsCount(Math.min(Math.floor((500 / steps) * step), 500));
      setClientsCount(Math.min(Math.floor((250 / steps) * step), 250));
      setSatisfactionCount(Math.min(Math.floor((98 / steps) * step), 98));
      setExpertsCount(Math.min(Math.floor((25 / steps) * step), 25));
      setIndustriesCount(Math.min(Math.floor((10 / steps) * step), 10));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const coreValues = [
    {
      title: "Innovation",
      description: "We relentlessly pioneer cutting-edge marketing technologies, artificial intelligence systems, and creative advertising funnels to keep your brand ahead.",
      icon: Cpu,
      bg: "bg-blue-50/60 border-blue-100",
      iconColor: "text-[#009CFF]",
    },
    {
      title: "Transparency",
      description: "No vanity metrics. No hidden fees. We provide clear, comprehensive, real-time reports detailing exactly where your spend goes and the revenue it yields.",
      icon: Eye,
      bg: "bg-indigo-50/60 border-indigo-100",
      iconColor: "text-[#009CFF]",
    },
    {
      title: "Integrity",
      description: "We treat your business and budget as if they were our own, adhering to the highest standards of professional ethics and campaign security.",
      icon: Shield,
      bg: "bg-sky-50/60 border-sky-100",
      iconColor: "text-[#009CFF]",
    },
    {
      title: "Customer Success",
      description: "Your revenue growth is our ultimate North Star. We construct tailored acquisition channels engineered exclusively to fulfill your business model.",
      icon: Heart,
      bg: "bg-emerald-50/60 border-emerald-100",
      iconColor: "text-emerald-500",
    },
    {
      title: "Creativity",
      description: "We merge strict technical data architecture with breathtaking digital experiences and viral-ready copy to trigger immediate, organic engagement.",
      icon: Zap,
      bg: "bg-amber-50/60 border-amber-100",
      iconColor: "text-amber-500",
    },
    {
      title: "Performance",
      description: "We are obsessed with data, analytics, speed, and positive compounding returns. If a campaign is not actively multiplying ROI, we reconstruct it.",
      icon: TrendingUp,
      bg: "bg-purple-50/60 border-purple-100",
      iconColor: "text-purple-500",
    },
    {
      title: "Collaboration",
      description: "We embed our certified specialists directly into your ecosystem, building a seamless, hyper-communicative extension of your corporate department.",
      icon: Users,
      bg: "bg-rose-50/60 border-rose-100",
      iconColor: "text-rose-500",
    },
    {
      title: "Continuous Improvement",
      description: "In the digital landscape, standing still is moving backward. We conduct continuous multi-variant testing and research to compound performance daily.",
      icon: Compass,
      bg: "bg-teal-50/60 border-teal-100",
      iconColor: "text-[#009CFF]",
    }
  ];

  const teamMembers = [
    {
      name: "Alexander Mercer",
      role: "Founder & Chief Marketing Architect",
      bio: "Former lead search strategist with over 12 years of performance marketing experience. Designed growth infrastructure for series-A enterprise brands.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
      iconText: "AM",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Sarah Chen",
      role: "Head of Paid Acquisition & Analytics",
      bio: "Data scientist specializing in predictive modeling and budget allocation. Oversaw $15M+ in combined Google & Meta advertisement spend with extraordinary ROAS.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
      iconText: "SC",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Marcus Sterling",
      role: "Director of SEO & Organic Content",
      bio: "Technical SEO engineer with a proven track record of scaling monthly organic traffic from zero to 1.5M+ active users. Specialist in search engine behavior.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
      iconText: "MS",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Elena Rostova",
      role: "Creative Director & UX Strategist",
      bio: "Award-winning designer with 8 years crafting high-converting UI/UX landing page experiences that bridge artistic brand concepts and functional conversion optimization.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
      iconText: "ER",
      social: { twitter: "#", linkedin: "#", github: "#" }
    }
  ];

  const valueProps = [
    {
      title: "Certified Marketing Experts",
      desc: "Our specialists hold top-tier Google, Meta, and HubSpot professional credentials with years of battle-tested campaign experience."
    },
    {
      title: "Data-Driven Strategies",
      desc: "We make absolutely zero guesses. Every decision, keyword bid, and layout is guided directly by robust live analytics data."
    },
    {
      title: "ROI-Focused Campaigns",
      desc: "We focus purely on bottom-line financial indicators. Traffic is excellent, but client sign-ups and converted revenue are what we measure."
    },
    {
      title: "Transparent Communication",
      desc: "Receive customized real-time reporting dashboards and weekly synchronizations detailing exact milestones and action items."
    },
    {
      title: "Dedicated Account Support",
      desc: "Gain direct Slack and phone access to your designated campaign manager for rapid updates and high-level strategy shifts."
    },
    {
      title: "Affordable Pricing",
      desc: "Highly flexible, budget-scalable retainers structured with crystal clear deliverables designed for small to mid-market companies."
    },
    {
      title: "Latest AI & Marketing Tools",
      desc: "We harness modern generative AI engines and predictive analytics suites to draft assets and optimize bids at lightning speed."
    },
    {
      title: "Proven Track Record",
      desc: "Over $45M in generated enterprise pipeline and millions of organic impressions secured for our growing client roster."
    }
  ];

  const workProcess = [
    {
      step: "01",
      title: "Discovery",
      desc: "We thoroughly audit your active performance footprint, benchmark key market rivals, and isolate high-opportunity quick wins."
    },
    {
      step: "02",
      title: "Strategy",
      desc: "We compile a hyper-detailed quarterly roadmap laying out channel mix, budget scaling, target messaging, and attribution setups."
    },
    {
      step: "03",
      title: "Execution",
      desc: "Our specialists build your campaigns, set up programmatic trackers, publish high-converting creative assets, and go live."
    },
    {
      step: "04",
      title: "Optimization",
      desc: "We constantly test copy angles, bid adjustments, and page layouts, shifting capital toward top-performing segments."
    },
    {
      step: "05",
      title: "Reporting",
      desc: "You receive clean, automated analytics dashboards that clearly demonstrate exact client acquisition costs and cumulative ROAS."
    },
    {
      step: "06",
      title: "Growth",
      desc: "Once we secure steady margins, we expand campaign horizons, capture wider target keyword arrays, and systematically scale volume."
    }
  ];

  const testimonials = [
    {
      name: "David Vance",
      company: "Apex Legal Solutions",
      quote: "Working with this team completely restructured our client pipeline. We scaled our monthly inquiries by 310% within 5 months while dropping our average acquisition costs by nearly 25%. Absolute experts.",
      rating: 5,
      role: "Managing Director"
    },
    {
      name: "Miriam Geller",
      company: "Bloom E-Commerce",
      quote: "Our ROAS was hovering around a stagnant 1.8x before they stepped in. They completely rebuilt our Google Merchant feeds and launched dynamic social ads that pushed our ROAS straight to 4.2x.",
      rating: 5,
      role: "VP of Digital Sales"
    },
    {
      name: "Nate Robinson",
      company: "Novus SaaS Technologies",
      quote: "Their technical SEO knowledge is spectacular. We were stuck on page two for critical enterprise search terms. Thanks to their structured schema changes and backlink campaigns, we now own three #1 spots.",
      rating: 5,
      role: "Chief Marketing Officer"
    }
  ];

  return (
    <div className="bg-white" id="about-us-page">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-slate-900 overflow-hidden" id="about-hero-section">
        {/* Abstract Digital Marketing Visual Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#009CFF]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"></div>
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[#009CFF] text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Empowering Digital Evolution
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6"
          >
            Helping Businesses Grow Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009CFF] to-sky-300">Digital Innovation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
          >
            We are USTechRepairs.net, a results-obsessed digital marketing agency dedicated to helping businesses succeed. By combining technical expertise with strategic innovation, we deliver measurable growth, high-converting pipelines, and market-dominating keyword rankings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenCall}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#009CFF] hover:bg-[#0086db] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20 hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate("/services")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
            >
              View Our Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden" id="about-story-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/60 shadow-2xl bg-white p-2">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=500" 
                  alt="Marketing agency dynamic collaboration workspace" 
                  className="w-full h-[400px] object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[#009CFF] rounded-2xl -z-10 opacity-10"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono">Our Founding Journey</span>
              <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-950">
                Driven by a Passion for <span className="text-[#009CFF]">Measurable Digital Success</span>
              </h2>
              
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  USTechRepairs.net began with a simple but powerful realization: too many businesses were investing heavily in digital marketing agencies that focused entirely on "impressions" and "likes," while offering zero correlation to physical sales or revenue growth. 
                </p>
                <p>
                  We set out to engineer a different kind of agency—one that bridges technical depth with marketing performance. Founded by software engineers and performance advertisers, we built a methodology modeled around strict scientific testing, clean code development, and predictive funnel optimization.
                </p>
                <p>
                  Today, we guide brands across diverse sectors, transforming their digital presences into modular client-acquisition engines. We believe that digital marketing isn't an unpredictable art form; it is a discipline of systematic optimization, clear communication, and persistent daily improvement.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center border-t border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#009CFF]">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm leading-tight">Industry Leaders</h5>
                    <p className="text-slate-500 text-xs">Pioneering ROI attribution</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#009CFF]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm leading-tight">Certified Specialists</h5>
                    <p className="text-slate-500 text-xs">Certified across global platforms</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white" id="mission-vision-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono">Our Core Alignment</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-950 mt-2">
              Our Vision Guide & Purpose Blueprint
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl border border-slate-100 bg-slate-50/50 backdrop-blur-sm text-left shadow-lg shadow-slate-100/40 flex flex-col justify-between overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#009CFF]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#009CFF] to-sky-300 text-white flex items-center justify-center mb-6 shadow-md shadow-sky-100">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-black text-slate-950 mb-4">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  To empower small, medium, and enterprise level businesses with highly scalable, crystal-clear digital marketing ecosystems. We strive to systematically de-risk our clients' ad spends by deploying ROI-centered campaign strategies that consistently outperform the market and spark predictable, stable income streams.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 font-semibold pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009CFF]" /> Fully attributable and transparent marketing funnels
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009CFF]" /> Maximum scaling capability with minimum budget waste
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009CFF]" /> Embedded technical workflows that match real metrics
                </li>
              </ul>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl border border-slate-100 bg-slate-50/50 backdrop-blur-sm text-left shadow-lg shadow-slate-100/40 flex flex-col justify-between overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#009CFF] to-indigo-400 text-white flex items-center justify-center mb-6 shadow-md shadow-indigo-100">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-black text-slate-950 mb-4">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  To become the world's most trusted data-first performance marketing partner, celebrated for engineering absolute clarity, removing deceptive agency vanity metrics, and introducing next-generation artificial intelligence algorithms that guarantee stable competitive positions for our client network.
                </p>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 font-semibold pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009CFF]" /> Establishing a new industry standard of absolute accountability
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009CFF]" /> Automated AI-guided bidding strategies for all clients
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#009CFF]" /> Complete transformation of traditional marketing agency workflows
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-slate-50 relative" id="core-values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono">Guiding Principles</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-950 mt-2">
              Our Eight Core Values
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-3">
              The internal operational philosophy that directs how we code, how we optimize, and how we treat our client relationships every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`p-6 rounded-2xl border bg-white ${val.bg} hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between`}
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl bg-white border flex items-center justify-center mb-4 shadow-sm ${val.iconColor}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-black text-slate-950 text-base mb-2">{val.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{val.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-white" id="meet-team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono">Expert Minds</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-950 mt-2">
              Meet Our Leadership & Certified Team
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-3">
              A premium team of search analysts, software engineers, conversion experts, and creative digital developers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-3xl border border-slate-100 bg-slate-50/30 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 hover:border-[#009CFF]/30 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glass overlay badge on hover */}
                  <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase text-[#009CFF] border border-white/60">
                    Marketing Expert
                  </div>
                </div>

                <div className="p-6 text-left space-y-3">
                  <div>
                    <h4 className="font-display font-black text-slate-950 text-base leading-tight group-hover:text-[#009CFF] transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs text-[#009CFF] font-bold mt-1 uppercase tracking-wider font-mono">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
                    <a href={member.social.linkedin} aria-label="LinkedIn" className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-[#009CFF] hover:text-white flex items-center justify-center text-slate-500 transition-colors">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a href={member.social.twitter} aria-label="Twitter" className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-[#009CFF] hover:text-white flex items-center justify-center text-slate-500 transition-colors">
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                    <a href={member.social.github} aria-label="Website" className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-[#009CFF] hover:text-white flex items-center justify-center text-slate-500 transition-colors">
                      <Globe className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="about-why-choose-us">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#009CFF]/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono">Our Edge</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white mt-2">
              Why Strategic Partners Choose Our Agency
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-3">
              We operate at the intersection of technological development and marketing science, providing a competitive posture that yields compound ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, idx) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#009CFF]/30 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#009CFF]/20 text-[#009CFF] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-white text-base mb-2">{prop.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{prop.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Statistics Section */}
      <section className="py-16 bg-white border-y border-slate-100" id="about-stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            
            <div className="text-center p-4">
              <span className="block text-4xl sm:text-5xl font-display font-black text-[#009CFF] tracking-tight mb-1">
                {projectsCount}+
              </span>
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                Projects Completed
              </span>
            </div>

            <div className="text-center p-4">
              <span className="block text-4xl sm:text-5xl font-display font-black text-[#009CFF] tracking-tight mb-1">
                {clientsCount}+
              </span>
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                Happy Clients
              </span>
            </div>

            <div className="text-center p-4 col-span-2 sm:col-span-1">
              <span className="block text-4xl sm:text-5xl font-display font-black text-[#009CFF] tracking-tight mb-1">
                {satisfactionCount}%
              </span>
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                Client Satisfaction
              </span>
            </div>

            <div className="text-center p-4">
              <span className="block text-4xl sm:text-5xl font-display font-black text-[#009CFF] tracking-tight mb-1">
                {expertsCount}+
              </span>
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                Marketing Experts
              </span>
            </div>

            <div className="text-center p-4">
              <span className="block text-4xl sm:text-5xl font-display font-black text-[#009CFF] tracking-tight mb-1">
                {industriesCount}+
              </span>
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                Industries Served
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Our Work Process Section */}
      <section className="py-20 bg-slate-50" id="about-work-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono">Our Methodology</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-950 mt-2">
              Our Six-Step Work Process
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-3">
              We deploy systematic campaign engineering. Our operational timeline ensures complete visibility and constant upward optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {workProcess.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-3xl border border-slate-200/60 bg-white hover:border-[#009CFF]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent -z-10 rounded-bl-full"></div>
                <span className="text-4xl font-display font-black text-slate-200 group-hover:text-[#009CFF]/20 transition-colors duration-300">
                  {step.step}
                </span>
                <h4 className="font-display font-black text-slate-950 text-lg mt-4 mb-2">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-white" id="about-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono">Real Endorsements</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-950 mt-2">
              Feedback From Our Growth Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50/40 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:border-[#009CFF]/20 transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-slate-600 text-xs leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EAF7FF] flex items-center justify-center font-bold text-xs text-[#009CFF] shrink-0">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm leading-tight">{t.name}</h5>
                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mt-0.5">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative bg-slate-900 text-white overflow-hidden" id="about-final-cta">
        {/* Decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#009CFF]/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-20"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-[#009CFF] uppercase tracking-widest border border-white/5">
            <Zap className="w-3.5 h-3.5" /> Launch Your Campaign
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Let's Build Your Digital Success Together
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Partner with certified experts obsessed with data transparency and revenue scaling. Get in touch today for your free comprehensive digital performance blueprint audit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenCall}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#009CFF] hover:bg-[#0086db] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white border-2 border-white hover:bg-slate-100 text-slate-900 font-bold px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
            >
              Get a Free Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
