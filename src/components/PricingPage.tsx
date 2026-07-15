import React, { useState } from "react";
import { 
  Check, X, Sparkles, ArrowRight, HelpCircle, ChevronDown, 
  Star, Quote, Phone, Mail, Send, AlertCircle, BookmarkCheck,
  ShieldCheck, DollarSign, Calendar, Flame, Layers, Percent,
  Laptop, ShoppingBag, Palette, PenTool, Video, Edit, MailOpen,
  MessageSquare, UserCheck, BarChart3, HelpCircle as HelpIcon,
  Activity, ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PricingPageProps {
  onOpenAudit: () => void;
  onOpenCall: () => void;
  onNavigate: (path: string) => void;
}

export default function PricingPage({ onOpenAudit, onOpenCall, onNavigate }: PricingPageProps) {
  // Billing cycle state: "monthly" or "yearly"
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  
  // FAQ active index
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    interestedPlan: "Growth Plan ($699/mo)",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form validation
  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full name is required";
    if (!formData.companyName.trim()) tempErrors.companyName = "Company name is required";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[0-9\-\+\s\(\)]{7,20}$/.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Please describe your business goals";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setErrors({});
      }, 1200);
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      interestedPlan: "Growth Plan ($699/mo)",
      message: ""
    });
    setIsSubmitted(false);
  };

  const scrollToContact = () => {
    const element = document.getElementById("pricing-contact-form");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const pricingPlans = [
    {
      name: "Starter Plan",
      desc: "Perfect for Startups & Local Businesses",
      monthlyPrice: 299,
      yearlyPrice: 239, // 20% discount
      badge: null,
      features: [
        "Basic SEO Optimization",
        "Google Business Profile Optimization",
        "10 Keyword Tracking",
        "4 Social Media Posts/Month",
        "Monthly Performance Report",
        "Email Support",
        "Basic Website Audit"
      ],
      ctaText: "Get Started",
      popular: false
    },
    {
      name: "Growth Plan",
      desc: "Perfect for Growing Businesses",
      monthlyPrice: 699,
      yearlyPrice: 559, // 20% discount
      badge: "Most Popular",
      features: [
        "Advanced SEO",
        "Google Ads Management",
        "Meta Ads Management",
        "Local SEO",
        "12 Social Media Posts/Month",
        "Landing Page Optimization",
        "Conversion Tracking",
        "Monthly Strategy Call",
        "Priority Support"
      ],
      ctaText: "Choose Growth Plan",
      popular: true
    },
    {
      name: "Premium Plan",
      desc: "Perfect for Established Businesses",
      monthlyPrice: 1299,
      yearlyPrice: 1039, // 20% discount
      badge: "Best Value",
      features: [
        "Complete Digital Marketing Management",
        "Advanced SEO",
        "Google Ads",
        "Meta Ads",
        "LinkedIn Marketing",
        "Email Marketing",
        "AI Marketing Automation",
        "Content Marketing",
        "Conversion Rate Optimization",
        "Dedicated Account Manager",
        "Weekly Reports",
        "Priority Support"
      ],
      ctaText: "Start Premium Plan",
      popular: false
    }
  ];

  const comparisonRows = [
    { feature: "SEO", starter: "Basic", growth: "Advanced", premium: "Complete & Continuous" },
    { feature: "Local SEO", starter: "✓ (GBP Setup)", growth: "✓ (Maps Dominance)", premium: "✓ (Multi-Location Hub)" },
    { feature: "Google Ads", starter: "✗", growth: "✓ (Up to $5k Spend)", premium: "✓ (Unlimited Ad Accounts)" },
    { feature: "Meta Ads", starter: "✗", growth: "✓ (Up to $5k Spend)", premium: "✓ (Unlimited Ad Accounts)" },
    { feature: "Social Media Management", starter: "4 posts / month", growth: "12 posts / month", premium: "Daily Brand Sequences" },
    { feature: "Content Marketing", starter: "✗", growth: "✓ (2 blogs / month)", premium: "✓ (Dynamic Topic Hubs)" },
    { feature: "Email Marketing", starter: "✗", growth: "✗", premium: "✓ (Active Campaigns)" },
    { feature: "Website Optimization", starter: "Basic Audit", growth: "UX & Copy Tuning", premium: "Full CRO & Web Restructuring" },
    { feature: "Landing Pages", starter: "✗", growth: "✓ (1 Custom Page)", premium: "✓ (Unlimited Landing Pages)" },
    { feature: "AI Automation", starter: "✗", growth: "✗", premium: "✓ (Smart Personalization)" },
    { feature: "Reporting", starter: "Monthly Report", growth: "Monthly + Custom Call", premium: "Weekly Detailed Insights" },
    { feature: "Dedicated Manager", starter: "✗", growth: "✗", premium: "✓ (Direct Hotline)" },
    { feature: "Support Level", starter: "Email Support", growth: "Priority Support", premium: "24/7 Slack Hotline" }
  ];

  const addOnServices = [
    {
      name: "Website Design",
      desc: "Fully responsive, high-converting premium web application styled with modern layout practices.",
      price: "$1,499",
      icon: Laptop
    },
    {
      name: "Shopify Store Development",
      desc: "Comprehensive custom headless Shopify migration, fast load speeds, and cart optimization hooks.",
      price: "$1,999",
      icon: ShoppingBag
    },
    {
      name: "Branding & Logo Design",
      desc: "Complete visual guidelines, brand typography pairings, primary logos, and custom color palettes.",
      price: "$799",
      icon: Palette
    },
    {
      name: "Graphic Design",
      desc: "Consistent, eye-safe corporate assets, newsletters, brochure formats, and active social graphics.",
      price: "$499/mo",
      icon: PenTool
    },
    {
      name: "Video Editing",
      desc: "High-retention short-form video content optimized specifically for TikTok, Reels, and YouTube Shorts.",
      price: "$599/mo",
      icon: Video
    },
    {
      name: "Content Writing",
      desc: "High-authority technical articles, editorial copies, and transactional content clustering guides.",
      price: "$149/blog",
      icon: Edit
    },
    {
      name: "Email Marketing",
      desc: "Custom automated funnel integration, retention flows, newsletter drafting, and target split testing.",
      price: "$399/mo",
      icon: MailOpen
    },
    {
      name: "WhatsApp Marketing",
      desc: "High-volume transactional broadcasts, automated support triggers, and visual drop sequences.",
      price: "$299/mo",
      icon: MessageSquare
    },
    {
      name: "Influencer Marketing",
      desc: "Micro-influencer campaign coordination, product seeding cycles, and creator contract management.",
      price: "$899/mo",
      icon: UserCheck
    },
    {
      name: "AI Chatbot Integration",
      desc: "Custom trained model widget deployed directly to answer FAQs, book calls, and gather potential leads.",
      price: "$699",
      icon: Sparkles
    },
    {
      name: "Marketing Consultation",
      desc: "Bespoke 1-on-1 strategy audit, marketing budget outline, and technical funnel blueprints with an expert.",
      price: "$199/hr",
      icon: BarChart3
    }
  ];

  const benefits = [
    { title: "Transparent Pricing", desc: "No hidden charges, setup surprises, or obscure retainers. Everything is detailed upfront." },
    { title: "No Hidden Fees", desc: "We are strictly against additional fees. What you sign up for is exactly what you pay." },
    { title: "Flexible Monthly Plans", desc: "All standard marketing tiers operate on convenient, rolling month-to-month calendars." },
    { title: "Cancel Anytime", desc: "No restrictive contract anchors. You have complete freedom to halt or change tiers as needed." },
    { title: "Dedicated Marketing Experts", desc: "All campaigns are designed and monitored by certified Google, Meta, and SEO managers." },
    { title: "ROI-Focused Strategies", desc: "We calibrate every search bid, content structure, and social sequence to maximize profit margin." },
    { title: "Monthly Reporting", desc: "Receive beautifully detailed performance metrics showing keyword wins, spend, and conversion value." },
    { title: "Custom Solutions", desc: "Need something tailored to your exact product? We coordinate bespoke enterprise pipelines." },
    { title: "Scalable Packages", desc: "As your revenue channels expand, easily scale ad budgets or append custom add-ons." },
    { title: "24/7 Customer Support", desc: "We provide high-touch continuous monitoring and premium active hotlines to resolve issues." }
  ];

  const faqs = [
    {
      q: "Which plan is right for my business?",
      a: "For local brick-and-mortar storefronts or freshly launched startups looking for essential foundational presence, our Starter Plan is ideal. If you want active lead capture, direct search queries, and scaling customer streams, our Growth Plan is the gold standard. Established brands requiring multi-channel dominance should select the Premium Plan."
    },
    {
      q: "Can I upgrade or downgrade my plan?",
      a: "Yes, absolutely! You can modify your marketing plan at any point during your active billing cycle. Simply contact your designated manager or shoot us an email, and we will update your campaign structure immediately."
    },
    {
      q: "Are there any setup fees?",
      a: "Zero. We do not charge separate initial campaign setups, platform migrations, or onboarding fees. Your subscription covers everything necessary to deploy your campaigns from day one."
    },
    {
      q: "Do you require long-term contracts?",
      a: "No. All of our default packages run on convenient month-to-month contracts. However, if you choose our yearly billing cycle, you receive an immediate 20% discount on all service costs."
    },
    {
      q: "How quickly will I see results?",
      a: "PPC, Google Ads, and Meta campaigns usually generate qualified inbound leads within the first 72 hours of going live. Technical SEO optimizations and organic content hubs typically require 60 to 90 days to achieve high-authority placement on primary keywords."
    },
    {
      q: "What's included in the monthly reports?",
      a: "Our transparent performance dashboards break down every dollar spent. You will receive metrics on total impressions, CTR, average CPC, total conversion transactions, keyword organic ranking wins, and your exact return on ad spend (ROAS)."
    },
    {
      q: "Do you offer custom pricing?",
      a: "Yes. Every brand possesses distinct operational models and budget constraints. Reach out to our strategists using the contact form below, and we will formulate a personalized pricing tier that fits your needs."
    },
    {
      q: "Is there a free consultation?",
      a: "Yes! We provide a complimentary, no-obligation 30-minute growth audit. We will inspect your current landing pages, keyword placement gaps, and competitor spending to present actionable guidelines on a screen-share call."
    }
  ];

  const testimonials = [
    {
      name: "Robert Vance",
      role: "Founder & Executive",
      company: "Apex Tech Labs",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      feedback: "We upgraded to their Growth Plan early last year. The transparency of their billing and reporting has been a breath of fresh air. Within 30 days, our ad campaigns recorded a steady 6.2x ROAS."
    },
    {
      name: "Clara Reynolds",
      role: "E-commerce Director",
      company: "Velvet Threads",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      feedback: "Their Premium Plan completely transformed our sales pipelines. The dedicated account manager coordinated a Shopify rebuild and an AI targeting funnel that boosted conversion rates from 1.8% to 4.5%."
    },
    {
      name: "Marcus Kael",
      role: "Operations Lead",
      company: "Stellar Med Care",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      feedback: "The level of support we receive is outstanding. Our clinic map ranks on top for all regional queries. The Starter Plan provided an incredible baseline before we upgraded to target advanced channels."
    }
  ];

  return (
    <div className="bg-white" id="pricing-page">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-slate-900 overflow-hidden" id="pricing-hero">
        {/* Background Visual Enhancements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#009CFF]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[#009CFF] text-xs font-bold tracking-widest uppercase mb-6 font-mono"
          >
            <Sparkles className="w-3.5 h-3.5" /> No Setup Fees &middot; Cancel Anytime
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white max-w-4xl mx-auto leading-tight mb-6"
          >
            Transparent Pricing for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009CFF] to-sky-300">Every Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Choose the perfect digital marketing plan to grow your business. Whether you're a startup, small business, or enterprise, we have flexible solutions designed to deliver measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onOpenCall}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#009CFF] hover:bg-[#0086db] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-sky-500/15 hover:shadow-sky-500/25 hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
            >
              Request a Custom Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Toggle & Plans Cards Grid */}
      <section className="py-20 bg-white" id="pricing-plans-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Monthly/Yearly Toggle */}
          <div className="flex flex-col items-center justify-center space-y-4 mb-16">
            <span className="text-slate-500 text-xs sm:text-sm font-semibold">Choose Your Billing Cycle</span>
            <div className="relative inline-flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`relative px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer z-10 ${
                  billingCycle === "monthly" ? "text-slate-950" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`relative px-6 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer z-10 flex items-center gap-1.5 ${
                  billingCycle === "yearly" ? "text-white" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Yearly Billing
                <span className="bg-emerald-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-md leading-none">
                  Save 20%
                </span>
              </button>

              {/* Slider highlight */}
              <div 
                className={`absolute top-1.5 bottom-1.5 rounded-xl bg-white shadow-sm border border-slate-200/50 transition-all duration-300 ${
                  billingCycle === "monthly" 
                    ? "left-1.5 w-[122px]" 
                    : "left-[132px] w-[184px] bg-slate-950 border-slate-900"
                }`}
              />
            </div>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto mb-16">
            {pricingPlans.map((plan) => {
              const currentPrice = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
              return (
                <motion.div
                  key={plan.name}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className={`rounded-3xl p-8 text-left border relative overflow-hidden flex flex-col justify-between h-full group ${
                    plan.popular 
                      ? "bg-slate-950 text-white border-slate-900 shadow-xl shadow-slate-950/20 scale-100 lg:scale-105 z-10" 
                      : "bg-white text-slate-950 border-slate-100 shadow-lg shadow-slate-100/60"
                  }`}
                >
                  {/* Decorative popular visual shine */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#009CFF]/30 to-transparent rounded-bl-full pointer-events-none" />
                  )}

                  <div className="space-y-6">
                    {/* Badge */}
                    <div className="flex items-center justify-between min-h-[28px]">
                      {plan.badge ? (
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          plan.popular ? "bg-[#009CFF] text-white" : "bg-blue-50 text-[#009CFF]"
                        }`}>
                          {plan.badge}
                        </span>
                      ) : (
                        <span />
                      )}
                      
                      {billingCycle === "yearly" && (
                        <span className="text-emerald-500 text-xs font-bold font-mono">
                          Save ${ (plan.monthlyPrice - plan.yearlyPrice) * 12 } / yr
                        </span>
                      )}
                    </div>

                    {/* Plan Meta */}
                    <div className="space-y-1">
                      <h3 className="text-2xl font-display font-black leading-tight">{plan.name}</h3>
                      <p className={`text-xs ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>{plan.desc}</p>
                    </div>

                    {/* Pricing Display */}
                    <div className="flex items-baseline gap-1.5 pt-2">
                      <span className="text-4xl sm:text-5xl font-display font-black tracking-tight">${currentPrice}</span>
                      <span className={`text-xs font-semibold ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>/ month</span>
                    </div>

                    {billingCycle === "yearly" && (
                      <div className={`text-[10px] font-bold font-mono ${plan.popular ? "text-[#009CFF]" : "text-[#009CFF]"}`}>
                        Billed annually (${currentPrice * 12}/yr)
                      </div>
                    )}

                    {/* Features List */}
                    <div className="pt-6 border-t border-slate-100/10 space-y-3.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">Included Features</span>
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-xs sm:text-sm">
                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? "text-[#009CFF]" : "text-[#009CFF]"}`} />
                            <span className={plan.popular ? "text-slate-200" : "text-slate-700"}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-8">
                    <button
                      onClick={() => {
                        setFormData({
                          ...formData,
                          interestedPlan: `${plan.name} ($${currentPrice}/mo)`
                        });
                        scrollToContact();
                      }}
                      className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                        plan.popular 
                          ? "bg-[#009CFF] hover:bg-[#0086db] text-white shadow-lg shadow-sky-500/15" 
                          : "bg-slate-900 hover:bg-slate-800 text-white"
                      }`}
                    >
                      {plan.ctaText}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Enterprise custom pricing block */}
          <div className="max-w-6xl mx-auto rounded-3xl bg-slate-50 border border-slate-100 p-8 sm:p-12 text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden" id="enterprise-card">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-50/60 to-transparent rounded-bl-full pointer-events-none -z-10" />
            <div className="md:col-span-8 space-y-3">
              <span className="bg-[#EAF7FF] text-[#009CFF] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full font-mono">
                Enterprise Solutions
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-950">
                Need a Custom Marketing Solution?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Every business is unique. Contact our experts for a customized digital marketing strategy and pricing tailored to your business goals. We configure custom channels, dedicated teams, and bespoke data visualizations.
              </p>
            </div>
            <div className="md:col-span-4 text-left md:text-right">
              <button
                onClick={() => {
                  setFormData({
                    ...formData,
                    interestedPlan: "Custom Enterprise Solution"
                  });
                  scrollToContact();
                }}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-[#009CFF] text-white font-bold px-8 py-4 rounded-xl transition-all text-xs sm:text-sm cursor-pointer shadow-md"
              >
                Request Custom Pricing
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Services Comparison Table Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100" id="pricing-comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono">Detailed Grid</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-950 mt-1">
              Compare Our Pricing Plans
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-3">
              Review included channels, limits, support packages, and automated integrations before deciding.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-100">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-950 text-white font-display border-b border-slate-900">
                  <th className="p-6 text-sm font-black uppercase tracking-wider">Features & Channels</th>
                  <th className="p-6 text-sm font-black uppercase tracking-wider">Starter Plan</th>
                  <th className="p-6 text-sm font-black uppercase tracking-wider text-[#009CFF]">Growth Plan</th>
                  <th className="p-6 text-sm font-black uppercase tracking-wider">Premium Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-6 text-slate-600">
                      {row.starter === "✓" ? <Check className="w-4 h-4 text-emerald-500" /> : row.starter === "✗" ? <span className="text-slate-300">-</span> : row.starter}
                    </td>
                    <td className="p-6 text-[#009CFF] font-semibold bg-blue-50/10">
                      {row.growth === "✓" ? <Check className="w-4 h-4 text-[#009CFF]" /> : row.growth === "✗" ? <span className="text-slate-300">-</span> : row.growth}
                    </td>
                    <td className="p-6 text-slate-900 font-medium">
                      {row.premium === "✓" ? <Check className="w-4 h-4 text-emerald-600" /> : row.premium === "✗" ? <span className="text-slate-300">-</span> : row.premium}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Optional Add-On Services Section */}
      <section className="py-20 bg-white" id="optional-addons">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono">Extend Campaigns</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-950 mt-1">
              Optional Add-On Services
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-3">
              Need specific graphic packages, instant chatbots, or advanced developer assets? Append these fully managed modules directly onto your current plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnServices.map((addon) => {
              const IconComp = addon.icon;
              return (
                <div 
                  key={addon.name}
                  className="p-6 rounded-3xl border border-slate-100 bg-white shadow-md shadow-slate-100/50 hover:shadow-xl hover:shadow-slate-200/50 hover:border-[#009CFF]/20 transition-all duration-300 text-left flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#009CFF] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-black text-slate-950 text-base leading-tight group-hover:text-[#009CFF] transition-colors">
                        {addon.name}
                      </h4>
                      <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                        {addon.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-5 flex items-center justify-between">
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest block leading-none">Starting at</span>
                      <strong className="text-slate-950 font-display font-black text-sm sm:text-base mt-1 block leading-none">{addon.price}</strong>
                    </div>
                    <button
                      onClick={() => {
                        setFormData({
                          ...formData,
                          interestedPlan: `Addon: ${addon.name} (${addon.price})`
                        });
                        scrollToContact();
                      }}
                      className="inline-flex items-center gap-1 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 text-slate-900 font-bold px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      Learn More <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why Our Pricing? Benefits Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100" id="why-pricing-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono">Our Principles</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-950 mt-1">
              Why Partner With Our Agency?
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-3">
              We remove typical billing stress and obscure terminology, putting transparency first in our business relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className="p-6 rounded-3xl border border-slate-200/60 bg-white hover:border-[#009CFF]/30 hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#009CFF] flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-display font-black text-slate-950 text-sm leading-tight mb-1.5">
                      {benefit.title}
                    </h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions Accordeon */}
      <section className="py-20 bg-white" id="pricing-faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-16">
            <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono">Answers Ready</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-950 mt-1">
              Pricing Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-100 bg-slate-50/40 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-900 hover:text-[#009CFF] transition-colors focus:outline-none"
                  >
                    <span className="text-sm sm:text-base pr-4 flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#009CFF] shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-white/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100" id="pricing-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono font-bold">Value Proved</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-950 mt-1">
              What Partners Say About Our Value
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
                className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm relative text-left flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-slate-600 text-xs sm:text-sm leading-relaxed italic relative">
                    <Quote className="w-8 h-8 text-blue-50 absolute -top-4 -left-3 -z-10 rotate-180" />
                    "{test.feedback}"
                  </blockquote>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-6">
                  <img 
                    src={test.image} 
                    alt={test.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
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

      {/* Final Call-to-Action with Integrated Contact Form */}
      <section className="py-20 relative bg-slate-900 text-white overflow-hidden" id="pricing-contact-form">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#009CFF]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Info & Direct Callout */}
            <div className="lg:col-span-5 text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-[#009CFF] uppercase tracking-widest border border-white/5 font-mono">
                <Flame className="w-3.5 h-3.5" /> Direct Consultation
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white leading-tight">
                Ready to Grow Your Business?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Let's build a customized digital marketing strategy that delivers measurable growth and long-term success. Fill out the proposal form, or contact our coordinators immediately via phone or email.
              </p>

              {/* Direct Contacts Block */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <a 
                  href="tel:+18005550199" 
                  className="flex items-center gap-3.5 text-slate-200 hover:text-[#009CFF] transition-colors text-sm sm:text-base font-bold"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#009CFF]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block font-mono font-bold uppercase tracking-wider leading-none mb-1">Speak to growth experts</span>
                    +1 (800) 555-0199
                  </div>
                </a>

                <a 
                  href="mailto:grow@ustechrepairs.net" 
                  className="flex items-center gap-3.5 text-slate-200 hover:text-[#009CFF] transition-colors text-sm sm:text-base font-bold"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#009CFF]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block font-mono font-bold uppercase tracking-wider leading-none mb-1">Direct inquiries email</span>
                    grow@ustechrepairs.net
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                <button
                  onClick={onOpenCall}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#009CFF] hover:bg-[#0086db] text-white font-bold px-6 py-3.5 rounded-xl transition-all text-xs cursor-pointer shadow-md"
                >
                  Get a Free Consultation
                </button>
                <button
                  onClick={onOpenAudit}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-xs cursor-pointer"
                >
                  Schedule Website Audit
                </button>
              </div>
            </div>

            {/* Right Col: High-Conversion Lead Capture Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-950/70 backdrop-blur-xl border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl text-left relative overflow-hidden">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-display font-black text-white">Coordinate Custom Marketing Strategy</h3>
                  <p className="text-slate-400 text-xs mt-1">Our coordinators analyze your selected plan and goals to design real metrics.</p>
                </div>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-300">
                            Full Name
                          </label>
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="John Doe"
                            className={`w-full px-4 py-3 rounded-xl border bg-slate-900/60 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#009CFF]/40 focus:border-[#009CFF] transition-all ${
                              errors.fullName ? "border-rose-500" : "border-white/10"
                            }`}
                          />
                          {errors.fullName && (
                            <p className="text-rose-400 text-[10px] font-semibold flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.fullName}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-300">
                            Company Name
                          </label>
                          <input
                            type="text"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            placeholder="Apex Brands LLC"
                            className={`w-full px-4 py-3 rounded-xl border bg-slate-900/60 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#009CFF]/40 focus:border-[#009CFF] transition-all ${
                              errors.companyName ? "border-rose-500" : "border-white/10"
                            }`}
                          />
                          {errors.companyName && (
                            <p className="text-rose-400 text-[10px] font-semibold flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.companyName}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-300">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="johndoe@apex.com"
                            className={`w-full px-4 py-3 rounded-xl border bg-slate-900/60 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#009CFF]/40 focus:border-[#009CFF] transition-all ${
                              errors.email ? "border-rose-500" : "border-white/10"
                            }`}
                          />
                          {errors.email && (
                            <p className="text-rose-400 text-[10px] font-semibold flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.email}
                            </p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-300">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(555) 019-9231"
                            className={`w-full px-4 py-3 rounded-xl border bg-slate-900/60 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#009CFF]/40 focus:border-[#009CFF] transition-all ${
                              errors.phone ? "border-rose-500" : "border-white/10"
                            }`}
                          />
                          {errors.phone && (
                            <p className="text-rose-400 text-[10px] font-semibold flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-300">
                          Selected/Interested Plan
                        </label>
                        <div className="relative">
                          <select
                            value={formData.interestedPlan}
                            onChange={(e) => setFormData({ ...formData, interestedPlan: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-900 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#009CFF]/40 focus:border-[#009CFF] appearance-none cursor-pointer"
                          >
                            <option value="Starter Plan ($299/mo)">Starter Plan ($299/mo)</option>
                            <option value="Growth Plan ($699/mo)">Growth Plan ($699/mo)</option>
                            <option value="Premium Plan ($1,299/mo)">Premium Plan ($1,299/mo)</option>
                            <option value="Custom Enterprise Solution">Custom Enterprise Solution</option>
                            <option value="Addon: Website Design">Addon: Website Design</option>
                            <option value="Addon: Shopify Development">Addon: Shopify Development</option>
                            <option value="Addon: AI Chatbot Integration">Addon: AI Chatbot Integration</option>
                          </select>
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-300">
                          Describe Business Goals
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your target audiences, current advertising blockers, or specific keyword strategies..."
                          className={`w-full px-4 py-3 rounded-xl border bg-slate-900/60 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#009CFF]/40 focus:border-[#009CFF] transition-all resize-none ${
                            errors.message ? "border-rose-500" : "border-white/10"
                          }`}
                        />
                        {errors.message && (
                          <p className="text-rose-400 text-[10px] font-semibold flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#009CFF] hover:bg-[#0086db] text-white font-bold py-3.5 rounded-xl transition-all text-xs sm:text-sm cursor-pointer disabled:opacity-75 disabled:pointer-events-none shadow-md shadow-sky-500/10 mt-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Locking Proposal...
                          </>
                        ) : (
                          <>
                            Submit Pricing Inquiry
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-6"
                    >
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                        <BookmarkCheck className="w-8 h-8" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-display font-black text-xl text-white">Proposal Submitted Successfully!</h4>
                        <p className="text-slate-300 text-xs max-w-md mx-auto">
                          Thank you, <strong>{formData.fullName}</strong>. Your inquiry for <strong>{formData.interestedPlan}</strong> has been prioritized by our lead campaign strategist.
                        </p>
                        <p className="text-slate-400 text-[11px]">
                          We will evaluate your website's baseline statistics and reach out to you within 2 hours.
                        </p>
                      </div>

                      <button
                        onClick={handleResetForm}
                        className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2 rounded-lg transition-all text-xs cursor-pointer"
                      >
                        Inquire About Another Service
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
