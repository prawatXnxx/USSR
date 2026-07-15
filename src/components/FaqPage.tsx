import React, { useState, useEffect, useMemo } from "react";
import { 
  Search, Check, X, HelpCircle, ChevronDown, Phone, Mail, 
  MessageSquare, Send, AlertCircle, BookmarkCheck, Sparkles, 
  ArrowRight, Filter, HelpCircle as HelpIcon, Layers, HeartHandshake,
  CheckCircle2, Info
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FaqPageProps {
  onOpenAudit: () => void;
  onOpenCall: () => void;
  onNavigate: (path: string) => void;
}

interface FaqItem {
  id: string;
  category: string;
  q: string;
  a: string;
  tags: string[];
}

export default function FaqPage({ onOpenAudit, onOpenCall, onNavigate }: FaqPageProps) {
  // Live search state
  const [searchQuery, setSearchQuery] = useState("");
  
  // Selected category state. "All" or a specific category name
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Accordion active state: tracks open FAQ item IDs
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  // Form states
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Micro Live Chat Drawer state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatThread, setChatThread] = useState<Array<{ sender: "user" | "agent"; text: string; time: string }>>([
    { sender: "agent", text: "Hello! Thank you for visiting USTechRepairs.net. How can I help you grow your business channels today?", time: "Just now" }
  ]);

  // Categories list exactly matching user specifications
  const categories = [
    "All",
    "General Questions",
    "Digital Marketing",
    "SEO Services",
    "Google Ads",
    "Social Media Marketing",
    "Website Development",
    "Shopify Development",
    "Pricing & Billing",
    "Reporting & Analytics",
    "Support & Communication"
  ];

  // Raw FAQ Items List mapping categories
  const faqData: FaqItem[] = [
    // General Questions
    {
      id: "gen-1",
      category: "General Questions",
      q: "What does your digital marketing agency do?",
      a: "We help businesses increase their online visibility, generate leads, improve conversions, and grow revenue through strategic digital marketing solutions.",
      tags: ["agency", "services", "digital marketing", "grow", "leads", "revenue"]
    },
    {
      id: "gen-2",
      category: "General Questions",
      q: "Do you work with small businesses?",
      a: "Yes. We work with startups, local businesses, growing brands, and enterprise-level companies.",
      tags: ["small business", "startups", "local", "enterprise", "companies"]
    },
    {
      id: "gen-3",
      category: "General Questions",
      q: "Do you offer free consultations?",
      a: "Yes. We provide a free initial consultation to understand your business goals and recommend the best strategy.",
      tags: ["consultation", "free", "strategy", "goals"]
    },
    {
      id: "gen-4",
      category: "General Questions",
      q: "Do you serve clients internationally?",
      a: "Yes. We work with businesses worldwide.",
      tags: ["international", "worldwide", "clients", "global"]
    },

    // Digital Marketing
    {
      id: "dm-1",
      category: "Digital Marketing",
      q: "What digital marketing channels drive the best ROI?",
      a: "Usually, a balanced combination of Search Engine Optimization (SEO) for compounding organic growth and Pay-Per-Click ads (Google and Meta Ads) for immediate lead acquisition delivers the highest return on investment. We customize this mix based on your audience habits.",
      tags: ["roi", "channels", "marketing", "google ads", "seo", "meta ads", "conversion"]
    },
    {
      id: "dm-2",
      category: "Digital Marketing",
      q: "How do you measure campaign success?",
      a: "We focus on client revenue growth, conversion rates, cost per acquisition (CPA), and overall return on ad spend (ROAS) rather than just vanity metrics like impressions or clicks. We establish clear conversion tracking milestones.",
      tags: ["success", "roas", "metrics", "analytics", "tracking", "cpa", "conversions"]
    },
    {
      id: "dm-3",
      category: "Digital Marketing",
      q: "Do I need to sign long-term retainers?",
      a: "No, our default services run on a convenient month-to-month calendar to keep us fully accountable to your campaign's performance. You are never anchored by restrictive long-term contracts.",
      tags: ["contract", "retainer", "monthly", "freedom", "cancel"]
    },

    // SEO Services FAQs
    {
      id: "seo-1",
      category: "SEO Services",
      q: "How long does SEO take to show results?",
      a: "SEO is a long-term strategy. Most businesses begin seeing noticeable improvements within 3–6 months. This timeline depends on keyword competition, baseline site speed, and domain authority.",
      tags: ["seo", "results", "timeline", "keywords", "ranking", "organic"]
    },
    {
      id: "seo-2",
      category: "SEO Services",
      q: "Do you guarantee first-page rankings?",
      a: "No agency can ethically guarantee rankings. We focus on proven strategies that maximize visibility and sustainable growth. Google's algorithm updates constantly, but our structural SEO frameworks ensure persistent gains.",
      tags: ["rankings", "guarantee", "google", "algorithm", "first page", "optimization"]
    },
    {
      id: "seo-3",
      category: "SEO Services",
      q: "What's included in your SEO service?",
      a: "Keyword research, on-page SEO, technical SEO, content optimization, local SEO, reporting, and performance tracking.",
      tags: ["keywords", "on-page", "technical", "content", "reporting", "audit", "optimization"]
    },
    {
      id: "seo-4",
      category: "SEO Services",
      q: "Do you provide local SEO?",
      a: "Yes. We optimize your business for local search results and Google Business Profile visibility.",
      tags: ["local seo", "google business profile", "maps", "regional", "citations", "near me"]
    },

    // Google Ads FAQs
    {
      id: "gads-1",
      category: "Google Ads",
      q: "How much should I spend on Google Ads?",
      a: "Budgets vary based on industry, competition, and goals. We help determine the most effective budget for maximum ROI.",
      tags: ["budget", "google ads", "spend", "ppc", "competition", "investment"]
    },
    {
      id: "gads-2",
      category: "Google Ads",
      q: "Do you manage ad campaigns?",
      a: "Yes. We handle setup, optimization, monitoring, and reporting.",
      tags: ["management", "optimization", "monitoring", "reporting", "campaigns", "setup"]
    },
    {
      id: "gads-3",
      category: "Google Ads",
      q: "How quickly can Google Ads generate leads?",
      a: "Campaigns can start generating traffic and leads within days after launch.",
      tags: ["leads", "traffic", "speed", "launch", "conversions", "immediate"]
    },

    // Social Media Marketing FAQs
    {
      id: "smm-1",
      category: "Social Media Marketing",
      q: "Which social media platforms do you manage?",
      a: "Facebook, Instagram, LinkedIn, X (Twitter), TikTok, YouTube, and other major platforms.",
      tags: ["platforms", "facebook", "instagram", "linkedin", "tiktok", "youtube", "social media"]
    },
    {
      id: "smm-2",
      category: "Social Media Marketing",
      q: "How often will you post content?",
      a: "Posting frequency depends on your package and marketing goals.",
      tags: ["frequency", "posting", "schedule", "content calendar", "posts"]
    },
    {
      id: "smm-3",
      category: "Social Media Marketing",
      q: "Do you create content?",
      a: "Yes. We create graphics, captions, videos, and campaign content.",
      tags: ["content creation", "graphics", "captions", "videos", "copywriting", "design"]
    },

    // Website Development FAQs
    {
      id: "web-1",
      category: "Website Development",
      q: "Do you build custom websites?",
      a: "Yes. We create fully responsive, SEO-friendly, and high-performance websites.",
      tags: ["custom", "websites", "responsive", "seo-friendly", "performance", "code", "design"]
    },
    {
      id: "web-2",
      category: "Website Development",
      q: "Will my website work on mobile devices?",
      a: "Absolutely. Every website is optimized for desktop, tablet, and mobile devices.",
      tags: ["mobile", "responsive", "tablets", "devices", "cross-browser", "layout"]
    },
    {
      id: "web-3",
      category: "Website Development",
      q: "Do you redesign existing websites?",
      a: "Yes. We can improve design, performance, user experience, and conversion rates.",
      tags: ["redesign", "ux", "conversion", "performance", "migration", "modernization"]
    },

    // Shopify Development FAQs
    {
      id: "shop-1",
      category: "Shopify Development",
      q: "Do you build Shopify stores?",
      a: "Yes. We create professional Shopify stores optimized for sales and conversions.",
      tags: ["shopify", "e-commerce", "store", "sales", "conversions", "checkout"]
    },
    {
      id: "shop-2",
      category: "Shopify Development",
      q: "Can you customize my Shopify theme?",
      a: "Yes. We offer custom theme development and advanced Shopify customization.",
      tags: ["theme", "customization", "liquid", "css", "styling", "layout"]
    },
    {
      id: "shop-3",
      category: "Shopify Development",
      q: "Do you integrate apps and payment gateways?",
      a: "Yes. We can integrate apps, payment gateways, shipping solutions, and automation tools.",
      tags: ["apps", "payment gateways", "shipping", "automation", "stripe", "paypal", "integrations"]
    },

    // Pricing & Billing FAQs
    {
      id: "price-1",
      category: "Pricing & Billing",
      q: "Are there any hidden fees?",
      a: "No. Our pricing is transparent with no hidden charges.",
      tags: ["hidden fees", "transparent", "billing", "pricing", "costs", "setup"]
    },
    {
      id: "price-2",
      category: "Pricing & Billing",
      q: "Do you require long-term contracts?",
      a: "No. We offer flexible plans based on your needs.",
      tags: ["contracts", "flexibility", "month-to-month", "cancel", "terms"]
    },
    {
      id: "price-3",
      category: "Pricing & Billing",
      q: "Can I upgrade my package later?",
      a: "Yes. You can upgrade or customize your services anytime.",
      tags: ["upgrade", "package", "downgrade", "customization", "modify"]
    },
    {
      id: "price-4",
      category: "Pricing & Billing",
      q: "What payment methods do you accept?",
      a: "We accept major payment methods including bank transfers, credit cards, and online payments.",
      tags: ["payment methods", "bank transfers", "credit cards", "online", "stripe", "invoice"]
    },

    // Reporting & Analytics FAQs
    {
      id: "report-1",
      category: "Reporting & Analytics",
      q: "How often will I receive reports?",
      a: "Most clients receive monthly performance reports, while premium plans may include weekly updates.",
      tags: ["reports", "frequency", "monthly", "weekly", "performance", "metrics"]
    },
    {
      id: "report-2",
      category: "Reporting & Analytics",
      q: "What metrics do you track?",
      a: "Traffic, rankings, leads, conversions, ROI, engagement, and campaign performance.",
      tags: ["metrics", "traffic", "rankings", "leads", "conversions", "roi", "roas", "analytics"]
    },
    {
      id: "report-3",
      category: "Reporting & Analytics",
      q: "Will I have access to campaign data?",
      a: "Yes. Transparency is a key part of our process.",
      tags: ["data", "access", "campaign", "transparency", "dashboard", "analytics"]
    },

    // Support & Communication FAQs
    {
      id: "supp-1",
      category: "Support & Communication",
      q: "How can I contact support?",
      a: "You can reach us via phone, email, contact form, or scheduled meetings.",
      tags: ["contact", "support", "email", "phone", "meetings", "communications"]
    },
    {
      id: "supp-2",
      category: "Support & Communication",
      q: "Will I have a dedicated account manager?",
      a: "Premium and enterprise clients receive a dedicated account manager.",
      tags: ["account manager", "dedicated", "premium", "enterprise", "strategy"]
    },
    {
      id: "supp-3",
      category: "Support & Communication",
      q: "How quickly do you respond?",
      a: "We aim to respond to all inquiries within one business day.",
      tags: ["response time", "sla", "hours", "speed", "ticketing", "support"]
    }
  ];

  // Dynamic filter logic using useMemo to optimize render cycles
  const filteredFaqs = useMemo(() => {
    return faqData.filter((faq) => {
      // Category match
      const categoryMatch = 
        selectedCategory === "All" || faq.category === selectedCategory;
      
      // Search query match
      const query = searchQuery.toLowerCase().trim();
      if (!query) return categoryMatch;

      const qMatch = faq.q.toLowerCase().includes(query);
      const aMatch = faq.a.toLowerCase().includes(query);
      const tagMatch = faq.tags.some((tag) => tag.toLowerCase().includes(query));

      return categoryMatch && (qMatch || aMatch || tagMatch);
    });
  }, [searchQuery, selectedCategory]);

  // Open first few items on mount by default if category changes
  useEffect(() => {
    if (filteredFaqs.length > 0) {
      // Open the first item of the filtered list automatically
      setOpenIds({ [filteredFaqs[0].id]: true });
    } else {
      setOpenIds({});
    }
  }, [selectedCategory, searchQuery]);

  // Handle accordion toggle
  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // SEO-friendly JSON-LD FAQ Schema injection
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };

    const scriptId = "faq-jsonld-schema";
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.id = scriptId;
      scriptElement.type = "application/ld+json";
      document.head.appendChild(scriptElement);
    }
    
    scriptElement.text = JSON.stringify(faqSchema);

    // Clean up on unmount
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Form Validation
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
      tempErrors.message = "Please enter your question or description";
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
      message: ""
    });
    setIsSubmitted(false);
  };

  const scrollToContact = () => {
    const element = document.getElementById("faq-contact-form");
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

  // Micro Chat Drawer logic
  const handleSendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = { sender: "user" as const, text: chatMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setChatThread((prev) => [...prev, userMsg]);
    setChatMessage("");

    // Simulate Agent responses beautifully
    setIsSubmitting(true);
    setTimeout(() => {
      let responseText = "Thanks for your question! A digital marketing coordinator is reviewing your message and will answer right here in seconds. To lock in a guaranteed call immediately, you can also use our 'Get a Free Consultation' form.";
      
      const lowerText = userMsg.text.toLowerCase();
      if (lowerText.includes("price") || lowerText.includes("cost") || lowerText.includes("how much")) {
        responseText = "Our core marketing plans start at $299/mo up to $1,299/mo with 20% savings on yearly options! Let us analyze your baseline site and suggest the exact plan you need.";
      } else if (lowerText.includes("seo") || lowerText.includes("rank")) {
        responseText = "Our SEO framework covers comprehensive keyword analysis, local GBP setups, and technical speed boosts. Most clients start ranking within 90 days. Would you like a free SEO audit?";
      } else if (lowerText.includes("ads") || lowerText.includes("google") || lowerText.includes("ppc")) {
        responseText = "We manage continuous Google & Meta Ads optimization. We focus closely on ROAS (Return on Ad Spend) and set up end-to-end conversion tracking from day one.";
      }

      setChatThread((prev) => [...prev, {
        sender: "agent" as const,
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen" id="faq-page">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-slate-900 overflow-hidden" id="faq-hero">
        {/* Animated Background Visual Orbs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#009CFF]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
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
            <HelpIcon className="w-3.5 h-3.5" /> Instant Answers &middot; 24/7 Expert Support
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white max-w-4xl mx-auto leading-tight mb-6"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009CFF] to-sky-300">Questions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Find answers to common questions about our digital marketing services, pricing, process, timelines, and support. If you can't find what you're looking for, our team is ready to help.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#009CFF] hover:bg-[#0086db] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-sky-500/15 hover:shadow-sky-500/25 hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
            >
              Contact Us Now
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenCall}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
            >
              Get a Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Interactive Search & Live FAQ Core Grid */}
      <section className="py-20 bg-white" id="faq-interactive-search">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Live Search Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative group" id="faq-search-wrapper">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#009CFF] transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs... (e.g. SEO, budget, Shopify, responsive, manager)"
                className="w-full pl-13 pr-12 py-4.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#009CFF]/30 focus:border-[#009CFF] focus:bg-white transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  aria-label="Clear Search"
                >
                  <X className="w-4 h-4 bg-slate-200/60 p-0.5 rounded-full" />
                </button>
              )}
            </div>

            {searchQuery && (
              <div className="text-left mt-3 text-xs text-slate-500 font-mono flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-[#009CFF]" />
                Showing {filteredFaqs.length} search {filteredFaqs.length === 1 ? "result" : "results"} for "{searchQuery}"
              </div>
            )}
          </div>

          {/* FAQ Categories Filter Tabs */}
          <div className="mb-14" id="faq-category-filters">
            <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest font-mono block text-center mb-4">
              Select Category To Filter
            </span>

            {/* Desktop Categories Grid / Slider */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    selectedCategory === category
                      ? "bg-slate-950 text-white border-slate-950 shadow-md shadow-slate-950/10"
                      : "bg-white text-slate-600 border-slate-100 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Live Stream list wrapper */}
          <div className="max-w-4xl mx-auto" id="faq-main-accordion">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFaqs.map((faq) => {
                    const isOpen = !!openIds[faq.id];
                    return (
                      <motion.div
                        layout="position"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        key={faq.id}
                        className="rounded-2xl border border-slate-100 bg-slate-50/45 hover:border-slate-200 overflow-hidden transition-all duration-200 text-left"
                      >
                        <button
                          onClick={() => toggleAccordion(faq.id)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-900 hover:text-[#009CFF] transition-colors focus:outline-none"
                          aria-expanded={isOpen}
                        >
                          <span className="text-sm sm:text-base pr-4 flex items-center gap-3">
                            <HelpCircle className="w-4 h-4 text-[#009CFF] shrink-0" />
                            {faq.q}
                          </span>
                          <div className={`w-6 h-6 rounded-lg bg-white shadow-sm flex items-center justify-center border border-slate-100 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#EAF7FF]" : ""}`}>
                            <ChevronDown className={`w-4 h-4 ${isOpen ? "text-[#009CFF]" : "text-slate-400"}`} />
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100/50 bg-white">
                                <div className="space-y-3">
                                  <p>{faq.a}</p>
                                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono mr-1.5">Tags:</span>
                                    {faq.tags.map((tag) => (
                                      <span 
                                        key={tag} 
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setSearchQuery(tag);
                                        }}
                                        className="text-[10px] font-semibold bg-slate-50 text-slate-500 hover:bg-[#EAF7FF] hover:text-[#009CFF] px-2 py-0.5 rounded-md cursor-pointer transition-colors"
                                      >
                                        #{tag}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 px-4 bg-slate-50 rounded-3xl border border-dashed border-slate-200"
                >
                  <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-950">No matching questions found</h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-md mx-auto">
                    We couldn't find any FAQs matching "{searchQuery}" in our list. Try looking under general categories or use a different search keyword.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="mt-5 inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs cursor-pointer"
                  >
                    Reset Filters & Search
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Still Have Questions? Premium CTA Section */}
      <section className="py-20 relative bg-slate-900 text-white overflow-hidden" id="faq-contact-form">
        {/* Decorative ambient gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#009CFF]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Info & Micro Chat Invitation */}
            <div className="lg:col-span-5 text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-[#009CFF] uppercase tracking-widest border border-white/5 font-mono">
                <HeartHandshake className="w-3.5 h-3.5" /> Direct Support Team
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white leading-tight">
                Can't Find the Answer You're Looking For?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Our team is ready to answer your questions and help you choose the right digital marketing solution for your business. Reach out through our instant micro-chat or drop your inquiries in the form.
              </p>

              {/* Direct Hotlines Block */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <a 
                  href="tel:+18005550199" 
                  className="flex items-center gap-3.5 text-slate-200 hover:text-[#009CFF] transition-colors text-sm sm:text-base font-bold"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#009CFF]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block font-mono font-bold uppercase tracking-wider leading-none mb-1">Direct support hotline</span>
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
                    <span className="text-slate-400 text-[10px] block font-mono font-bold uppercase tracking-wider leading-none mb-1">Inquiry mailbox</span>
                    grow@ustechrepairs.net
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                <button
                  onClick={() => setIsChatOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-xs cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4 animate-bounce" />
                  Open Live Chat Widget
                </button>
                <button
                  onClick={onOpenCall}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-xs cursor-pointer"
                >
                  Schedule growth audit
                </button>
              </div>
            </div>

            {/* Right Column: Custom Interactive Lead Capture Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-950/70 backdrop-blur-xl border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl text-left relative overflow-hidden">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-display font-black text-white">Send Direct Message to Experts</h3>
                  <p className="text-slate-400 text-xs mt-1">Our strategist responds to custom questions within 1 business hour.</p>
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
                            placeholder="Apex Brands"
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
                            placeholder="johndoe@company.com"
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
                          Your Custom Question or Business Goals
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="How can we assist you? Tell us about your channels, targets, or specific Google Ads / SEO blockers..."
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
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#009CFF] hover:bg-[#0086db] text-white font-bold py-3.5 rounded-xl transition-all text-xs sm:text-sm cursor-pointer disabled:opacity-75 disabled:pointer-events-none shadow-md mt-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending Inquiries...
                          </>
                        ) : (
                          <>
                            Submit Support Ticket
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
                        <h4 className="font-display font-black text-xl text-white font-display">Message Sent Successfully!</h4>
                        <p className="text-slate-300 text-xs max-w-md mx-auto">
                          Thank you, <strong>{formData.fullName}</strong>. Your custom inquiry has been successfully locked in and dispatched to our marketing experts.
                        </p>
                        <p className="text-slate-400 text-[11px]">
                          We've scheduled your ticket for instant review. Expect a comprehensive analysis via email soon!
                        </p>
                      </div>

                      <button
                        onClick={handleResetForm}
                        className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2 rounded-lg transition-all text-xs cursor-pointer"
                      >
                        Inquire About Another Question
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Floating Micro Live Chat Drawer Widget */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white border border-slate-200/80 rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col justify-between"
            id="faq-micro-chat-widget"
          >
            {/* Widget Header */}
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-left">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-[#009CFF] flex items-center justify-center font-bold text-xs">
                    US
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-900 rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-none">USTechRepairs Live Advisor</h4>
                  <span className="text-[9px] text-slate-400 font-mono">Responds in 1 minute</span>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4 bg-white/5 hover:bg-white/10 p-0.5 rounded-full" />
              </button>
            </div>

            {/* Chat Thread */}
            <div className="p-4 h-64 overflow-y-auto space-y-3 bg-slate-50 text-left text-xs">
              {chatThread.map((msg, index) => (
                <div
                  key={index}
                  className={`flex flex-col max-w-[85%] ${
                    msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                  }`}
                >
                  <div
                    className={`p-3 rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-[#009CFF] text-white rounded-tr-none"
                        : "bg-white border border-slate-200/80 text-slate-950 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[8px] text-slate-400 mt-1 font-mono">{msg.time}</span>
                </div>
              ))}
            </div>

            {/* Message input */}
            <form onSubmit={handleSendChatMessage} className="p-3 border-t border-slate-200/60 flex items-center gap-2 bg-white">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-950 focus:outline-none focus:ring-1 focus:ring-[#009CFF]"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-xl bg-[#009CFF] hover:bg-[#0086db] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
