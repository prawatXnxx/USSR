import { Service } from "../types";

export const servicesData: Service[] = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    description: "Rank #1 on Google, drive organic high-intent traffic, and capture pre-qualified leads consistently without ad spend.",
    icon: "Search",
    detailedDescription: "Our search engine optimization strategies are focused entirely on ROI. We don't just optimize for vanity keywords; we target high-intent transactional search terms that bring users ready to buy. We perform deep competitor analysis, technical code audits, comprehensive backlink building, and high-quality content production.",
    benefitTitle: "Exponential Organic Lead Flow",
    benefitDesc: "Stop relying exclusively on paid campaigns. Build an appreciative asset that brings compounding organic results over time.",
    keyFeatures: [
      "Technical Core Web Vitals Audit",
      "High-Intent Competitor Keyword Mapping",
      "Strategic High-Authority Link Acquisition",
      "Surgical On-Page Content Structuring",
      "Custom Rich Snippet Schema Integration"
    ],
    toolsUsed: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "SurferSEO"]
  },
  {
    id: "local-seo",
    title: "Local SEO",
    description: "Dominating local Google Maps and local search queries to capture customers in your immediate service areas.",
    icon: "MapPin",
    detailedDescription: "Make your business the undisputed top choice in your local community. We optimize your Google Business Profile, generate consistent high-authority local citations, map out service-area landing pages, and set up review generation systems to drive phone calls and local walk-ins.",
    benefitTitle: "Dominant Local Market Share",
    benefitDesc: "Capture pre-qualified local leads who are searching for immediate, near-me solutions, direct to your doorstep.",
    keyFeatures: [
      "Google Business Profile Comprehensive Optimization",
      "Consistent Local Citation & NAP Directory Audits",
      "Custom Service-Area Landing Page Production",
      "Automated SMS Customer Review Systems",
      "Localized Search Term Grid Tracking"
    ],
    toolsUsed: ["BrightLocal", "Whitespark", "Google Business Profile", "Yext", "Local Falcon"]
  },
  {
    id: "google-ads",
    title: "Google Ads (PPC)",
    description: "Instantly capture buyers at the precise moment they search for your products or services with highly targeted search campaigns.",
    icon: "TrendingUp",
    detailedDescription: "Dominate the top of search results immediately. We design and manage high-ROI Google Search, Display, Performance Max, and Shopping campaigns. Our custom programmatic bidding adjustments, extensive negative keyword mapping, and ongoing split-testing ensure maximum conversion at the lowest possible cost.",
    benefitTitle: "Immediate & Scalable Return",
    benefitDesc: "Place your business in front of customers exactly when they are searching with intent, generating instant call-to-actions and sales.",
    keyFeatures: [
      "Intent-Driven Search & Shopping Setup",
      "Dynamic Negative Keyword Exclusion",
      "High-Converting Landing Page Frameworks",
      "A/B Split Copy & Extension Testing",
      "First-Party Conversion Tracker Integration"
    ],
    toolsUsed: ["Google Ads Editor", "Google Analytics 4", "SpyFu", "Optmyzr", "Hotjar"]
  },
  {
    id: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    description: "Stop the scroll, build deep brand affinity, and drive rapid sales with high-converting visual campaigns across FB & IG.",
    icon: "Users",
    detailedDescription: "Leverage advanced demographic, behavioral, and lookalike audience mapping. We build comprehensive full-funnel Meta campaigns that attract cold prospects, nurture warm interest, and aggressively retarget cart abandoners and past buyers. Backed by highly engaging, custom-designed creatives that convert.",
    benefitTitle: "Industry-Leading ROAS (Return on Ad Spend)",
    benefitDesc: "Combine high-impact visual design with laser-focused social segmentation to acquire new customers at scale.",
    keyFeatures: [
      "Full-Funnel Campaign Architecture (TOFU, MOFU, BOFU)",
      "Lookalike & Predictive Custom Audience Setup",
      "High-Converting Dynamic Product Creative Ads",
      "Split-Testing Ad Creatives & Copy Writing",
      "Meta Pixel & Conversions API Setup"
    ],
    toolsUsed: ["Meta Ads Manager", "Figma", "Canva Pro", "Smartly.io", "Revealbot"]
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    description: "Build a highly engaged community, amplify your brand voice, and turn social followers into active brand advocates.",
    icon: "MessageSquare",
    detailedDescription: "Transform your social channels into dynamic, lead-generating engines. We handle end-to-end social management including strategic planning, organic content production (Reels, Carousels, and high-impact copies), community engagement, and brand reputation monitoring.",
    benefitTitle: "Organic Social Dominance",
    benefitDesc: "Establish a cohesive visual aesthetic and authentic messaging rhythm that earns customer trust and drives organic referrals.",
    keyFeatures: [
      "30-Day Aesthetic Content Calendar",
      "Viral Reels & Interactive Carousel Design",
      "Active Daily Community Interactions & Moderation",
      "Influencer Outreach & Partnership Structuring",
      "Detailed Social Growth Performance Analytics"
    ],
    toolsUsed: ["Buffer", "Later", "Loomly", "Figma", "CapCut Pro"]
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    description: "Publish high-authority blogs, guides, and infographics that answer buyer questions, build trust, and drive passive organic search leads.",
    icon: "FileText",
    detailedDescription: "We craft data-driven content strategies that answer your audience's deepest search queries. By publishing authoritative resources, interactive articles, and beautiful informational guides, we position your agency as the absolute industry benchmark, earning high-trust brand recall and natural backlinks.",
    benefitTitle: "Dominant Industry Authority",
    benefitDesc: "Build an educational library that validates your brand's expertise and converts cold searchers into loyal customers.",
    keyFeatures: [
      "Comprehensive Audience Intent Mapping",
      "High-Authority Educational Guides & Ebooks",
      "Beautiful Vector Infographic Design",
      "SEO Content Clusters & Keyword Sourcing",
      "Dynamic Newsletters & Press Releases"
    ],
    toolsUsed: ["Jasper AI", "Grammarly Business", "Canva", "Google Docs", "CoSchedule"]
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    description: "Nurture cold leads on autopilot, recover abandoned carts, and maximize customer lifetime value with automated campaigns.",
    icon: "Mail",
    detailedDescription: "Your email list is your highest-yielding asset. We design and implement complete automated flows (Welcome sequences, Abandoned checkout reminders, and Post-purchase flows) alongside beautifully styled, high-converting weekly newsletters that keep your brand top-of-mind and drive repeat revenue.",
    benefitTitle: "Compounding Lifetime Revenue",
    benefitDesc: "Nurture prospects automatically on autopilot, driving incremental cashflow with absolute minimal marketing cost.",
    keyFeatures: [
      "Automated Welcome & Abandoned Cart Flow Setup",
      "Advanced Demographic List Segmentation",
      "Interactive A/B Subject Line Split Testing",
      "High-Delivery IP Reputation Safeguards",
      "Custom High-Click Newsletter Templates"
    ],
    toolsUsed: ["Klaviyo", "Mailchimp", "ActiveCampaign", "Litmus", "ZeroBounce"]
  },
  {
    id: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    description: "Reach your customers where they are most active with hyper-personalized broadcast messages, auto-responders, and custom chatbots.",
    icon: "MessageCircle",
    detailedDescription: "WhatsApp marketing boasts open rates above 95%. We set up secure business API gateways, plan interactive broadcasting calendars, design customer inquiry response trees, and develop sophisticated automated flow chatbots to answer standard support requests and scale client onboarding.",
    benefitTitle: "Unrivaled Engagement & Conversions",
    benefitDesc: "Create immediate personal contact with leads, providing interactive menus, order updates, and promotions direct to WhatsApp.",
    keyFeatures: [
      "Official WhatsApp Business API Integration",
      "Interactive Conversational Marketing Journeys",
      "Automatic Support Chatbots & Answer Trees",
      "Promotional Broadcasts with 98% Open Rates",
      "Direct Click-to-WhatsApp Social Ad Campaigns"
    ],
    toolsUsed: ["Wati", "Twilio API", "ManyChat", "Typebot", "Meta Developer Console"]
  },
  {
    id: "web-dev",
    title: "Website Design & Development",
    description: "Sleek, lightning-fast, and mobile-responsive websites engineered specifically to turn visitors into high-value customers.",
    icon: "Code",
    detailedDescription: "A beautiful design means nothing if it doesn't convert. We construct high-end, custom-coded web architectures that load in under 1 second, showcase your services perfectly, and feature direct click-to-action pathing. Built with clean, modern CSS/Tailwind, semantic SEO standards, and total responsiveness.",
    benefitTitle: "High-Converting Digital Hub",
    benefitDesc: "Give your business a million-dollar premium appearance that immediately commands trust, credibility, and customer action.",
    keyFeatures: [
      "Custom Tailwind & Clean Semantic Codebase",
      "Fully Responsive Desktop & Mobile Sizing",
      "Under 1-Second Page Speed Optimizations",
      "Direct Booking & CRM Integration Options",
      "Robust Multi-Layer Web Security Guardrails"
    ],
    toolsUsed: ["Vite", "React", "Tailwind CSS", "Figma", "Vercel"]
  },
  {
    id: "shopify-dev",
    title: "Shopify Store Development",
    description: "Complete end-to-end custom Shopify e-commerce setups with frictionless cart pathways and robust inventory integrations.",
    icon: "ShoppingBag",
    detailedDescription: "We develop optimized, high-velocity digital storefronts on Shopify and Shopify Plus. From custom liquid themes and tailored headless integrations to third-party ERP linkages, automated pixel triggers, and multi-currency billing, we ensure your sales funnels remain fast, intuitive, and profitable.",
    benefitTitle: "Frictionless Checkout Performance",
    benefitDesc: "Minimize cart abandonment and streamline complex back-end logistics with a scalable, modern e-commerce setup.",
    keyFeatures: [
      "Custom Responsive Liquid Theme Crafting",
      "App-Stack and ERP Inventory Integrations",
      "Under 1.5-Second Mobile Loading Speeds",
      "Pre-Configured Pixel & Conversion API Triggers",
      "Custom Product Configurator Setup"
    ],
    toolsUsed: ["Shopify Plus", "Liquid", "React", "Theme Kit", "Tailwind CSS"]
  },
  {
    id: "landing-page",
    title: "Landing Page Design",
    description: "Surgical, hyper-focused, single-offer landing pages designed strictly to convert traffic from Google and social ads.",
    icon: "Sparkles",
    detailedDescription: "General homepages kill ad campaign budgets. We build high-intent, fast-loading standalone landers built for a single conversion action (such as an audit request, lead lead forms, or immediate consultation scheduling). Focused typography, clear benefit layout, and psychological proof points.",
    benefitTitle: "Maximize Paid Campaign ROI",
    benefitDesc: "Redirect your costly CPC clicks to structured, proof-packed visual pipelines that consistently generate leads.",
    keyFeatures: [
      "A/B Tested Psychological Copy Layouts",
      "Fast-Loading Mobile Responsive Frameworks",
      "Zero-Distraction Navigation Call-to-Actions",
      "High-Trust Proof and Badge Customization",
      "Lead Capture Form and CRM Automation Integration"
    ],
    toolsUsed: ["Figma", "Tailwind CSS", "React", "Unbounce", "Webflow"]
  },
  {
    id: "cro",
    title: "Conversion Rate Optimization (CRO)",
    description: "Double your sales and leads from the traffic you already have by eliminating friction and optimizing layouts.",
    icon: "Target",
    detailedDescription: "Stop wasting money driving traffic to a leaky bucket. We perform in-depth quantitative and qualitative analysis—using user heatmaps, recorded session replays, and analytical funnel drop-off trackers—to find exact points of user friction and design higher-converting checkout paths.",
    benefitTitle: "Instantly Slashed Acquisition Costs",
    benefitDesc: "Get significantly more leads, sign-ups, and sales from your current visitors, immediately driving up your overall marketing ROI.",
    keyFeatures: [
      "Interactive Heatmap & Session Recording Audits",
      "Surgical Checkout & Contact Form Friction Tests",
      "Scientific Landing Page A/B Testing",
      "Micro-Copy & Visual Element Refinement",
      "Detailed UX Drop-off Analytics Reports"
    ],
    toolsUsed: ["Hotjar", "VWO", "Optimizely", "Google Optimize", "Crazy Egg"]
  },
  {
    id: "branding-design",
    title: "Branding & Graphic Design",
    description: "Command a premium price, stand out from noisy competitors, and establish a memorable visual system for your brand.",
    icon: "Palette",
    detailedDescription: "We create unforgettable brand worlds. We develop custom logo architectures, premium corporate color palettes, custom typography frameworks, and modern brand design books. This visual consistency ensures that your brand looks professional and prestigious across every touchpoint.",
    benefitTitle: "Unmatched Competitive Edge",
    benefitDesc: "Establish a luxurious, cohesive brand presence that justifies higher pricing and cements immediate marketplace trust.",
    keyFeatures: [
      "Modern Vector Logo Suite (Primary, Stacked, Icon)",
      "Premium Color Sourcing & Palette Guidelines",
      "Custom Brand Typography Pairings",
      "Digital & Print Asset Templates",
      "Complete Brand Style Guideline Book"
    ],
    toolsUsed: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Coolors", "Typekit"]
  },
  {
    id: "video-marketing",
    title: "Video Marketing",
    description: "Engaging promotional video production, social reels, and ad creatives designed to capture short attention spans instantly.",
    icon: "Video",
    detailedDescription: "Video is the absolute king of online content. We storyboard, write, edit, and optimize short-form and long-form video creatives for ad networks and organic feeds. We implement engaging hooks, dynamic styling, subtitles, and psychological trigger pacing to ensure high audience retention.",
    benefitTitle: "High Retention Engagement",
    benefitDesc: "Explain complex products instantly, invoke emotional customer responses, and scale your organic social reach exponentially.",
    keyFeatures: [
      "Professional Storyboarding & Script Writing",
      "Highly Catchy Social Reel & TikTok Editing",
      "Direct Conversion Video Ad Creatives",
      "Dynamic Captions & Motion Graphics Design",
      "Multi-Platform Format Optimization"
    ],
    toolsUsed: ["Premiere Pro", "After Effects", "CapCut Enterprise", "Figma", "Frame.io"]
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    description: "Partner with trusted voices in your industry to build immediate brand authority, social proof, and viral sales.",
    icon: "Megaphone",
    detailedDescription: "Leverage the established authority of creators. We design influencer outreach lists, negotiate performance-based contracts, supply high-converting creative briefs, and track coupon/attribution links to measure every dollar of sales returned from campaigns.",
    benefitTitle: "Immediate Brand Social Proof",
    benefitDesc: "Bypass cold outreach by having trusted, popular creators present your products directly to active buying audiences.",
    keyFeatures: [
      "Targeted Creator Discovery & Background Checks",
      "Secure Campaign Briefs & Contract Management",
      "High-Converting Creative Script Approvals",
      "Attribution Link & Coupon Tracking Setup",
      "Multi-Tier Performance ROI Sourcing"
    ],
    toolsUsed: ["Grin", "Modash", "Upfluence", "Instagram API", "Google Sheets"]
  },
  {
    id: "ai-automation",
    title: "AI Marketing Automation",
    description: "Connect your marketing stack, sync leads instantly to your CRM, and build automated nurturing systems that save hours daily.",
    icon: "Cpu",
    detailedDescription: "Streamline your sales and marketing processes into a single, unified workflow. We create automated pipelines that instantly capture leads from social ads, sync them to your CRM, alert your sales team, send immediate personalized text replies, and drip relevant case studies straight to their inbox.",
    benefitTitle: "24/7 Automated Sales Engine",
    benefitDesc: "Ensure immediate, zero-lag response times to incoming leads, radically boosting contact rates and booking frequency.",
    keyFeatures: [
      "Cross-Platform Zapier & API Workflows",
      "Immediate Leads-To-Sales CRM Routing",
      "Instant SMS & Email Auto-Reponse Pipelines",
      "Dynamic Lead Scoring & Tagging Engines",
      "Real-Time Sales Team Alert Setup"
    ],
    toolsUsed: ["Zapier", "HubSpot", "Make (Integromat)", "Salesforce", "GoHighLevel"]
  },
  {
    id: "marketing-strategy",
    title: "Marketing Strategy & Consulting",
    description: "Custom enterprise marketing plans, deep competitor reverse-engineering, and strategic consulting for scaling brands.",
    icon: "Briefcase",
    detailedDescription: "Stop guessing and start winning with a structured, data-driven master plan. We perform extensive market research, analyze your competitors' traffic sources and ad templates, audit your internal processes, and draft custom multi-channel growth maps to guide your agency's next 12 months.",
    benefitTitle: "A Bulletproof Scalability Map",
    benefitDesc: "Align your marketing budgets and teams around measurable quarterly objectives and precise target KPIs.",
    keyFeatures: [
      "Full Competitor Ad & Traffic Reverse-Engineering",
      "12-Month Omnichannel Marketing Blueprints",
      "Budget Allocation & Channel Mix Advisory",
      "Conversion Funnel Architecture Audits",
      "Custom Monthly Consulting & Advisory Calls"
    ],
    toolsUsed: ["Miro", "SEMrush Premium", "SimilarWeb", "Figma", "Google Analytics 4"]
  },
  {
    id: "analytics-tracking",
    title: "Analytics & Performance Tracking",
    description: "Custom GA4 configuration, server-side tagging, and visual real-time reporting dashboards for complete ROI visibility.",
    icon: "BarChart3",
    detailedDescription: "Make strategic marketing decisions backed by actual revenue data. We configure robust Google Analytics 4 (GA4) setups, set up modern server-side conversions API tagging to bypass iOS 14 limitations, and design live visual marketing dashboards showing your exact cost-per-lead and ROAS.",
    benefitTitle: "100% Reliable Conversion Data",
    benefitDesc: "Eliminate dark data gaps. See exactly which keywords, ads, and channels are generating profitable transactions.",
    keyFeatures: [
      "Custom GA4 & Tag Manager Implementation",
      "Robust Server-Side Tracking & Conversions API",
      "Interactive Real-Time Looker Studio Dashboards",
      "Multi-Touch Conversion Sourcing Models",
      "Form Submission & Booking Event Configuration"
    ],
    toolsUsed: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "Stape.io", "PostHog"]
  }
];
