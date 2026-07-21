import { CaseStudy } from "../types";

export const caseStudiesData: CaseStudy[] = [
  {
    id: "fashion-brand",
    title: "10x Scaling for Luxury Apparel Brand",
    category: "Fashion Brand Growth",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600",
    description: "How we revamped cold social targeting and deployed dynamic collections to scale this designer fashion label globally.",
    challenge: "The brand suffered from inconsistent organic sales and a rising customer acquisition cost (CAC) on Meta Ads, capping their monthly revenue at $20,000.",
    strategy: "We redesigned their creative funnel around high-quality video hooks and styled product reels, mapped out custom lookalike audiences of high-value purchasers, and integrated automated Klaviyo email retention flows.",
    result: "Achieved an outstanding 8.7x ROAS, slashed CAC by 42%, and scaled monthly online sales to $200,000 inside 6 months.",
    metrics: {
      roas: "8.7x",
      leads: "4,200+ Buyers",
      traffic: "+340% YoY",
      beforeMetric: "$20K/mo Revenue",
      afterMetric: "$200K/mo Revenue"
    }
  },
  {
    id: "healthcare-leads",
    title: "High-Intent Lead Machine for Premium Clinics",
    category: "Healthcare Lead Generation",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
    description: "Generating highly qualified bariatric and dental implant patient bookings on autopilot with targeted Search campaigns.",
    challenge: "The medical group relied on traditional print media and word-of-mouth, which produced unmeasurable lead volumes and high patient vacancy rates.",
    strategy: "We deployed hyper-targeted Google Search Ads coupled with custom single-page, compliant patient landing pages and an integrated calendar booking system with instant SMS alerts.",
    result: "Delivered 1,840 high-intent inquiries with an average cost per lead of $6, keeping all three clinic locations fully booked.",
    metrics: {
      roas: "6.4x ROI",
      leads: "1,840 Patient Leads",
      traffic: "+210% Site Visits",
      beforeMetric: "12 Inquiries/mo",
      afterMetric: "310 Inquiries/mo"
    }
  },
  {
    id: "real-estate",
    title: "$15 Million Luxury Property Portfolio Sell-out",
    category: "Real Estate Marketing",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=600",
    description: "Driving premium ultra-HNI investor leads for a luxury waterfront villa development in Florida.",
    challenge: "Traditional real estate portals were saturated, and general advertising yielded low-quality leads, wasting precious sales team hours on unqualified prospects.",
    strategy: "We engineered a highly secure, gated landing experience and deployed localized Meta lead-generation ads targeted strictly at C-Suite executives, high-equity investors, and high-net-worth demographics.",
    result: "Generated 640 ultra-qualified high-net-worth leads, resulting in 42 site visits and a rapid sell-out of all 24 luxury villas valued at $15 Million.",
    metrics: {
      roas: "12.5x ROI",
      leads: "640 HNI Leads",
      traffic: "+180% Page Views",
      beforeMetric: "$0 Premium Leads",
      afterMetric: "$15M Value Sold"
    }
  },
  {
    id: "ecommerce-scaling",
    title: "D2C Cosmetics Store Organic & Paid Scale-Up",
    category: "Ecommerce Scaling",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=600",
    description: "Deploying Google Shopping, PMax, and aggressive Conversion Rate Optimization (CRO) to dominate the beauty market.",
    challenge: "The client was getting steady web traffic, but suffered from a high 84% cart abandonment rate and low average order values (AOV).",
    strategy: "We implemented an intense 2-week CRO sprint simplifying their mobile checkout page, added automatic bundles for higher AOV, and launched high-converting Google Performance Max ad campaigns.",
    result: "Store conversion rate jumped from 1.2% to 4.1%, driving massive sales and securing a stable, profitable 7.2x campaign ROAS.",
    metrics: {
      roas: "7.2x",
      leads: "18,900+ Orders",
      traffic: "+410% Growth",
      beforeMetric: "1.2% Conversion",
      afterMetric: "4.1% Conversion"
    }
  },
  {
    id: "restaurant-social",
    title: "Viral Foot-Traffic Engine for Culinary Chain",
    category: "Restaurant Social Media",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600",
    description: "Driving multi-location restaurant queues with viral local reels, targeted foodie influencer partnerships, and Google Maps Local SEO.",
    challenge: "A premium restaurant brand expanded to 4 new cities but had extremely low local brand awareness, resulting in quiet mid-week lunches and slow tables.",
    strategy: "We curated high-impact food reels featuring slow-motion culinary prep, launched local geo-targeted Instagram giveaway campaigns, and optimized all Google Maps listings to rank Top 3.",
    result: "Over 8.2 million local impressions, 42 viral influencer posts, and a continuous weekend table waiting line averaging 45 minutes across all sites.",
    metrics: {
      roas: "5.8x Local ROI",
      leads: "12,500+ Reservations",
      traffic: "+900% Geo Searches",
      beforeMetric: "Empty Mid-week tables",
      afterMetric: "100% Fully Booked Daily"
    }
  }
];
