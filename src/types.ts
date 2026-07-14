export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Will store Lucide icon name or map to actual Lucide components
  detailedDescription: string;
  benefitTitle: string;
  benefitDesc: string;
  keyFeatures: string[];
  toolsUsed: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  challenge: string;
  strategy: string;
  result: string;
  metrics: {
    roas: string;
    leads: string;
    traffic: string;
    beforeMetric: string;
    afterMetric: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  ctaText: string;
  savings?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
