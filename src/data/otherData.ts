import { Testimonial, PricingPlan, FAQItem } from "../types";

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Vikram Malhotra",
    role: "CEO & Founder",
    company: "VogueThreads Apparel",
    quote: "Working with USTechRepairs.net has been an absolute game-changer. They transformed our Meta campaigns, completely overhauled our visual creatives, and pushed our ROAS to an incredible 8.7x. Our monthly sales skyrocketed from $20,000 to $200,000 in just six months. The level of transparency and technical detail in their reporting is unmatched.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t2",
    name: "Dr. Ananya Reddy",
    role: "Managing Director",
    company: "Apex Dental & Surgical Clinics",
    quote: "We were highly skeptical about digital marketing agencies because of bad past experiences. But their Google Ads patient booking machine generated over 1,840 high-intent inquiries inside 4 months. Our clinics have zero vacancy, and our client acquisition cost dropped by over 50%. Best marketing investment we have ever made.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t3",
    name: "Rajesh K. Singhania",
    role: "Chief Marketing Officer",
    company: "Nirvana Waterfront Villas",
    quote: "Our target audience is ultra-high-net-worth investors, which is extremely difficult to reach online. USTechRepairs.net designed a highly executive, gated lead engine that generated 640 verified premium buyers. All 24 of our luxury oceanfront villas sold out inside 90 days. Their strategic approach is truly world-class.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t4",
    name: "Meera Fernandez",
    role: "E-commerce Director",
    company: "GlowGlow Cosmetics",
    quote: "Our store conversion rates were stuck at 1.2% until their CRO specialists spent two weeks redesigning our checkout process and landing pages. Combined with their high-performing Google PMax ad management, our sales jumped by over 400% and cart abandonment plummeted. They treat your business like their own.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t5",
    name: "Chef Amit Kapoor",
    role: "Director of Culinary",
    company: "The Truffle Hub Restaurant Chain",
    quote: "The food reels and maps optimizations they created went completely viral locally, earning over 8 million views. We went from having quiet mid-week tables to having 45-minute queues out the door. Absolutely outstanding growth team to work with!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  }
];

export const pricingPlansData: PricingPlan[] = [
  {
    name: "Starter",
    price: "$499",
    period: "month",
    description: "Perfect for local businesses wanting to establish search visibility and launch their first paid ad campaigns.",
    features: [
      "Local SEO Optimization (GBP)",
      "Targeted Google Search or Meta Ads (1 Platform)",
      "Up to $1,500/mo Ad Spend Management",
      "5 Custom Social Media Posts /mo",
      "Custom High-Converting Landing Page",
      "Monthly Growth & Performance Report",
      "Standard Email & Chat Support"
    ],
    popular: false,
    ctaText: "Start Starter Package"
  },
  {
    name: "Growth",
    price: "$999",
    period: "month",
    description: "Our flagship plan designed for scaling brands wanting multi-channel dominance, conversion rate optimization, and automated nurturing.",
    features: [
      "Comprehensive National SEO (On/Off Page)",
      "Omnichannel Ads (Meta + Google + Retargeting)",
      "Up to $5,000/mo Ad Spend Management",
      "12 Custom Social Media Graphics & Reels",
      "In-Depth CRO (Conversion Rate Optimization) Audit",
      "Automated Email & SMS Customer Nurturing Flows",
      "Bi-Weekly Strategy Calls with Growth Lead",
      "Real-Time Analytics Dashboard Access"
    ],
    popular: true,
    ctaText: "Choose Growth & Scale",
    savings: "Save 15% with quarterly commitment"
  },
  {
    name: "Premium",
    price: "$1,999",
    period: "month",
    description: "For high-growth mid-market enterprises looking for complete digital domination, aggressive market-share acquisition, and detailed automation.",
    features: [
      "Complete Global/National SEO Domination",
      "Multi-Channel Paid Ads (Meta, Google, LinkedIn, YouTube)",
      "Up to $25,000/mo Ad Spend Management",
      "24 High-Converting Social Graphics & Reels",
      "Full Custom Website Redesign & Code Optimization",
      "Advanced Marketing Automation Setup",
      "Competitor Ad Spying & Reverse Engineering",
      "Weekly Progress & Live ROI Tracking Calls",
      "Dedicated Advisor & Account Manager"
    ],
    popular: false,
    ctaText: "Accelerate Premium Scale"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    description: "Bespoke digital engineering and comprehensive multi-million dollar ad spend campaigns for market leaders and household brands.",
    features: [
      "Unlimited Ad Spend Strategy & Implementation",
      "Full Custom API/CRM Stack & Web Architecture Build",
      "Custom AI Lead Scoring & Automatic Dialing Automations",
      "Enterprise Data Warehousing & Visual Attribution Models",
      "Continuous Dedicated Creative Design & Copy Writing Team",
      "Full PR Outreach & Strategic Partnerships",
      "24/7 SLA Priority Chat, Phone & Video Support"
    ],
    popular: false,
    ctaText: "Contact Sales for custom"
  }
];

export const faqsData: FAQItem[] = [
  {
    id: "faq1",
    question: "How long does SEO take to show measurable results?",
    answer: "While paid ads generate instant results, search engine optimization (SEO) is a compounding long-term investment. Most businesses start seeing initial movements in rankings and organic impressions within 60 to 90 days. Major compounding growth in qualified leads and revenue typically manifests between the 4th and 6th month of consistent optimization, keyword structuring, and backlink authority building."
  },
  {
    id: "faq2",
    question: "How much should my business spend on ads initially?",
    answer: "There is no single 'correct' ad spend budget, but we generally recommend a starting testing budget of at least $500 to $1,500 per month for paid ads (Google or Meta). This budget is paid directly to the ad networks and gives our testing engines sufficient volume to find your highest-converting audiences, optimize landing pages, and establish a profitable Baseline ROAS (Return on Ad Spend) before aggressively scaling up."
  },
  {
    id: "faq3",
    question: "Do you work with international clients outside the United States?",
    answer: "Absolutely! We work with growing businesses and mid-market brands globally, including in Canada, the United Kingdom, Europe, and Australia. Our team is fully synchronized across multiple time zones, and all strategies are engineered to target highly specific geographic audiences, language preferences, and purchasing habits."
  },
  {
    id: "faq4",
    question: "Can you redesign my website as part of our marketing campaign?",
    answer: "Yes, we can! In fact, we often recommend optimizing or redesigning key landing pages and conversion tunnels before launching high-budget ad campaigns. Since web design and conversion rate optimization (CRO) are part of our core services, we can construct custom-coded, lightning-fast, and responsive modern websites designed purely to turn your incoming ad clicks into high-value inquiries."
  },
  {
    id: "faq5",
    question: "Do you provide transparent monthly reporting and dashboard access?",
    answer: "Yes, we pride ourselves on absolute transparency. We do not hide behind complex vanity metrics. Every month (and bi-weekly for Growth and above packages), we deliver clear, human-explained audits and reports detailing exactly what was spent, how many leads were generated, your average cost-per-lead (CPL), and your actual sales revenue or ROAS. We also provide interactive live dashboard access for real-time tracking."
  }
];
