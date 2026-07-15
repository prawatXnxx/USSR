import React, { useState } from "react";
import { 
  Phone, Mail, MapPin, Clock, CheckCircle2, 
  Send, HelpCircle, ArrowRight, Sparkles, Star, 
  ChevronDown, MessageSquare, AlertCircle, BookmarkCheck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactPageProps {
  onOpenAudit: () => void;
  onOpenCall: () => void;
  onNavigate: (path: string) => void;
}

export default function ContactPage({ onOpenAudit, onOpenCall, onNavigate }: ContactPageProps) {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "SEO Optimization",
    budget: "$2,000 - $5,000 / mo",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ state (active index)
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full Name is required";
    if (!formData.companyName.trim()) tempErrors.companyName = "Company Name is required";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[0-9\-\+\s\(\)]{7,20}$/.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API submit
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Clear errors
        setErrors({});
      }, 1000);
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      service: "SEO Optimization",
      budget: "$2,000 - $5,000 / mo",
      message: ""
    });
    setIsSubmitted(false);
  };

  const handleScrollToForm = () => {
    const targetElement = document.getElementById("contact-form-section");
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const contactInfos = [
    {
      title: "Phone Number",
      desc: "Speak with a growth strategist immediately.",
      value: "+1 (800) 555-0199",
      href: "tel:+18005550199",
      icon: Phone,
      color: "text-[#009CFF]",
      bgColor: "bg-blue-50/60"
    },
    {
      title: "Email Address",
      desc: "Send us your briefs or requests directly.",
      value: "grow@ustechrepairs.net",
      href: "mailto:grow@ustechrepairs.net",
      icon: Mail,
      color: "text-[#009CFF]",
      bgColor: "bg-sky-50/60"
    },
    {
      title: "Office Address",
      desc: "Our Silicon Valley headquarters.",
      value: "100 Pine Street, Suite 1250, San Francisco, CA 94111",
      href: "https://maps.google.com/?q=100+Pine+Street,+Suite+1250,+San+Francisco,+CA+94111",
      icon: MapPin,
      color: "text-[#009CFF]",
      bgColor: "bg-indigo-50/60"
    },
    {
      title: "Business Hours",
      desc: "Our active support & campaign monitoring hours.",
      value: "Mon - Fri: 8:00 AM - 6:00 PM (PST) / Sat: 10:00 AM - 2:00 PM (PST)",
      href: "",
      icon: Clock,
      color: "text-[#009CFF]",
      bgColor: "bg-teal-50/60"
    }
  ];

  const whyContactUs = [
    {
      title: "Free Consultation",
      desc: "Get a zero-cost, 30-minute growth roadmap audit with an expert."
    },
    {
      title: "Fast Response",
      desc: "We reply to all inquiries in less than 2 hours during active business hours."
    },
    {
      title: "Expert Team",
      desc: "Direct access to certified Google, Meta, and SEO specialists."
    },
    {
      title: "Customized Solutions",
      desc: "We build bespoke campaigns tailor-fit to your precise unit economics."
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden charges or lock-in retainers. Honest, crystal-clear tiers."
    },
    {
      title: "Ongoing Support",
      desc: "Live strategy iterations, continuous optimization, and instant Slack sync."
    }
  ];

  const faqs = [
    {
      q: "How quickly do you respond?",
      a: "Our certified consultants review incoming requests immediately. We guarantee a response time of less than 2 hours during our standard business hours. For weekend submissions, we guarantee a reply by 9:00 AM PST the following Monday."
    },
    {
      q: "Do you offer free consultations?",
      a: "Yes, absolutely! We provide a complimentary, comprehensive 30-minute marketing and technical SEO audit. During this strategy call, we analyze your current positioning, keyword gaps, competitor budgets, and offer actionable milestones."
    },
    {
      q: "What industries do you serve?",
      a: "We actively manage campaigns for high-growth e-commerce platforms, B2B SaaS providers, local service businesses (contractors, medical, legal), financial institutions, and multi-location retail chains."
    },
    {
      q: "Do you work internationally?",
      a: "Yes. Our campaigns run across North America, Europe, Australia, and parts of Asia. We configure geo-targeted and multi-lingual ads to capture specific markets based on your regional product availability."
    },
    {
      q: "How do I get started?",
      a: "Simply fill out our contact form, specify your primary growth goals, and choose a preferred budget level. Once submitted, we will email you within 2 hours to coordinate a screen-share strategy audit."
    }
  ];

  return (
    <div className="bg-white" id="contact-us-page">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-slate-900 overflow-hidden" id="contact-hero-section">
        {/* Glowing visual highlights */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#009CFF]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[#009CFF] text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" /> Direct Support Line
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white max-w-3xl mx-auto leading-tight mb-6"
          >
            Let's Grow Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009CFF] to-sky-300">Business Together</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Have a project in mind? We'd love to hear from you. Contact our digital marketing experts today for a free tactical consultation.
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
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleScrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
            >
              Get a Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 bg-slate-50 relative" id="contact-info-cards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfos.map((info, idx) => {
              const IconComp = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-[#009CFF]/20 transition-all duration-300 text-left flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-2xl ${info.bgColor} flex items-center justify-center ${info.color} group-hover:scale-105 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-slate-950 text-base mb-1">{info.title}</h3>
                      <p className="text-slate-500 text-xs">{info.desc}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 mt-4">
                    {info.href ? (
                      <a 
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        className="text-[#009CFF] font-bold text-xs hover:underline flex items-center gap-1.5 break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-slate-700 font-semibold text-xs leading-relaxed block">
                        {info.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Google Map Container */}
      <section className="py-20 bg-white" id="contact-form-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Form Block */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-slate-50/50 border border-slate-100 p-6 sm:p-10 rounded-3xl shadow-xl shadow-slate-100/30 text-left"
              id="contact-form-wrapper"
            >
              <div className="mb-8">
                <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono">Send A Message</span>
                <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-950 mt-1">
                  Start Your Performance Strategy
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Fill out the criteria below. Our campaign leads review these metrics to present actionable projections on our live call.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Full Name */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="John Doe"
                          className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#009CFF]/40 focus:border-[#009CFF] transition-all ${
                            errors.fullName ? "border-rose-500" : "border-slate-200"
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-rose-500 text-[10px] font-semibold flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Company Name */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Company Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="Apex Solutions Ltd"
                          className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#009CFF]/40 focus:border-[#009CFF] transition-all ${
                            errors.companyName ? "border-rose-500" : "border-slate-200"
                          }`}
                        />
                        {errors.companyName && (
                          <p className="text-rose-500 text-[10px] font-semibold flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.companyName}
                          </p>
                        )}
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Email Address */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="johndoe@company.com"
                          className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#009CFF]/40 focus:border-[#009CFF] transition-all ${
                            errors.email ? "border-rose-500" : "border-slate-200"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-rose-500 text-[10px] font-semibold flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 019-9231"
                          className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#009CFF]/40 focus:border-[#009CFF] transition-all ${
                            errors.phone ? "border-rose-500" : "border-slate-200"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-rose-500 text-[10px] font-semibold flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                          </p>
                        )}
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Service Dropdown */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Service Interested In
                        </label>
                        <div className="relative">
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#009CFF]/40 focus:border-[#009CFF] appearance-none cursor-pointer"
                          >
                            <option value="SEO Optimization">SEO Optimization</option>
                            <option value="Google Ads (PPC)">Google Ads (PPC)</option>
                            <option value="Meta Ads (FB/IG)">Meta Ads (FB/IG)</option>
                            <option value="Social Media Marketing">Social Media Marketing</option>
                            <option value="Website Development">Website Development</option>
                            <option value="Brand Identity">Brand Identity</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Budget Dropdown */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Monthly Advertising Budget
                        </label>
                        <div className="relative">
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#009CFF]/40 focus:border-[#009CFF] appearance-none cursor-pointer"
                          >
                            <option value="< $2,000 / mo">Less than $2,000 / month</option>
                            <option value="$2,000 - $5,000 / mo">$2,000 - $5,000 / month</option>
                            <option value="$5,000 - $10,000 / mo">$5,000 - $10,000 / month</option>
                            <option value="$10,000+ / mo">$10,000+ / month</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Project Details / Message <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your current business model, target acquisition cost, and primary advertising blockades..."
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#009CFF]/40 focus:border-[#009CFF] transition-all resize-none ${
                          errors.message ? "border-rose-500" : "border-slate-200"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-rose-500 text-[10px] font-semibold flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-[#009CFF] hover:bg-[#0086db] text-white font-bold py-4 rounded-2xl shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20 hover:-translate-y-0.5 transition-all text-sm cursor-pointer disabled:opacity-75 disabled:pointer-events-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Proposal...
                        </>
                      ) : (
                        <>
                          Submit Inquiry Brief
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-950 text-center space-y-6"
                    id="contact-form-success"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                      <BookmarkCheck className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display font-black text-2xl">Proposal Received Successfully!</h3>
                      <p className="text-emerald-800 text-xs sm:text-sm max-w-lg mx-auto">
                        Thank you, <strong className="text-emerald-950">{formData.fullName}</strong>. Your inquiry for <strong className="text-emerald-950">{formData.service}</strong> with a budget of <strong className="text-emerald-950">{formData.budget}</strong> has been assigned to our lead strategist. 
                      </p>
                      <p className="text-emerald-700 text-xs">
                        A designated expert will compile your customized audit and contact you at <strong className="text-emerald-950">{formData.email}</strong> or <strong className="text-emerald-950">{formData.phone}</strong> within 2 hours.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-emerald-100 text-left max-w-md mx-auto space-y-1.5 text-xs text-slate-600">
                      <div><strong className="text-slate-800">Company:</strong> {formData.companyName}</div>
                      <div><strong className="text-slate-800">Service:</strong> {formData.service}</div>
                      <div><strong className="text-slate-800">Message Brief:</strong> "{formData.message}"</div>
                    </div>

                    <button
                      onClick={handleResetForm}
                      className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl transition-all text-xs cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Google Maps Embed & Quick Contacts */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
              id="google-maps-container"
            >
              <div className="rounded-3xl border border-slate-100 p-2 shadow-xl shadow-slate-100/40 bg-white">
                {/* Embed Map Iframe */}
                <div className="h-[380px] sm:h-[420px] rounded-2xl overflow-hidden relative border border-slate-100">
                  <iframe
                    title="USTechRepairs Office Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.9691880590827!2d-122.40113432420344!3d37.790757771981084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806307ecbc4d%3A0xc39f28d844c8c7d8!2s100%20Pine%20St%2C%20San%20Francisco%2C%20CA%2094111!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </div>

              {/* Verified Badge */}
              <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#009CFF] shrink-0">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Verified Corporate HQ</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mt-0.5">
                    Located in the heart of San Francisco's Financial District. Stop by for coffee and coordinate high-level performance blueprints.
                  </p>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100" id="why-contact-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono font-bold">Expect Professionalism</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-950 mt-1">
              Why Partner With Us?
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-3">
              We remove typical marketing agency friction. Every element of our operational cycle is built on predictability, precision, and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyContactUs.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-3xl border border-slate-200/60 bg-white hover:border-[#009CFF]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent -z-10 rounded-bl-full" />
                <div className="w-10 h-10 rounded-xl bg-[#EAF7FF] text-[#009CFF] flex items-center justify-center font-bold text-base mb-4">
                  {idx + 1}
                </div>
                <h4 className="font-display font-black text-slate-950 text-base mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white" id="contact-faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-[#009CFF] font-bold text-xs uppercase tracking-widest font-mono">Answers Ready</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-slate-950 mt-1">
              Contact Frequently Asked Questions
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
                    onClick={() => toggleFaq(idx)}
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

      {/* Final CTA */}
      <section className="py-20 relative bg-slate-900 text-white overflow-hidden" id="contact-final-cta">
        {/* Background blobs */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#009CFF]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-20" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-[#009CFF] uppercase tracking-widest border border-white/5">
            <MessageSquare className="w-3.5 h-3.5" /> Start Expanding
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Take Your Business to the Next Level?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reach out to our certified marketing leads now. We are standing by to prepare an absolute performance overview detailing where your budget is losing conversions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenCall}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#009CFF] hover:bg-[#0086db] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
            >
              Schedule a Call <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate("/services")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white border-2 border-white hover:bg-slate-100 text-slate-900 font-bold px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
