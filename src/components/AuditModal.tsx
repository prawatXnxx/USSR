import React, { useState, useEffect } from "react";
import { X, Check, ArrowRight, Loader2, Calendar, Phone, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: "audit" | "call";
}

export default function AuditModal({ isOpen, onClose, defaultType = "audit" }: AuditModalProps) {
  const [step, setStep] = useState(1);
  const [type, setType] = useState<"audit" | "call">(defaultType);
  
  // Form State
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [budget, setBudget] = useState("$1,000 - $3,000");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [goals, setGoals] = useState("");

  // Loading States for custom SEO Scanner
  const [scanStep, setScanStep] = useState(0);
  const scanMessages = [
    "Contacting ustechrepairs.net SEO engines...",
    "Scanning Core Web Vitals and Page Speed indexes...",
    "Crawling site schema and meta layout elements...",
    "Reverse-engineering local competitor keyword density...",
    "Calculating Meta & Google Ads optimization gaps...",
    "Generating custom ROI scaling projection models..."
  ];

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setScanStep(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (step === 3 && type === "audit") {
      const interval = setInterval(() => {
        setScanStep((prev) => {
          if (prev < scanMessages.length - 1) {
            return prev + 1;
          } else {
            clearInterval(interval);
            setTimeout(() => {
              setStep(4); // Success screen
            }, 800);
            return prev;
          }
        });
      }, 1200);
      return () => clearInterval(interval);
    }
  }, [step, type]);

  const handleServiceToggle = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (type === "audit") {
        setStep(3); // Go to SEO scanning loader page
      } else {
        setStep(4); // Call booking skips scanner, goes direct to success page
      }
    }
  };

  if (!isOpen) return null;

  const budgetOptions = ["Under $1,000", "$1,000 - $3,000", "$3,000 - $10,000", "$10,000+"];
  const marketingServices = [
    "SEO Optimization",
    "Google Ads (PPC)",
    "Meta Ads",
    "Social Media Marketing",
    "Website Design",
    "Email & CRO",
    "Brand Identity"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="audit-modal-container">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-50"
        id="audit-modal-backdrop"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        className="relative w-full max-w-2xl overflow-hidden rounded-[32px] bg-white/60 backdrop-blur-xl shadow-2xl border border-white/80 p-6 md:p-8 z-50 max-h-[90vh] overflow-y-auto"
        id="audit-modal-body"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
          id="close-modal-btn"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        {step < 3 && (
          <div className="mb-6" id="modal-header">
            <div className="flex gap-2 mb-2">
              <button
                type="button"
                onClick={() => { setType("audit"); setStep(1); }}
                className={`text-xs font-semibold uppercase px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${
                  type === "audit"
                    ? "bg-sky-100 text-[#009CFF] font-bold"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
                id="tab-audit"
              >
                <Sparkles className="w-3.5 h-3.5" /> Free Marketing Audit
              </button>
              <button
                type="button"
                onClick={() => { setType("call"); setStep(1); }}
                className={`text-xs font-semibold uppercase px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${
                  type === "call"
                    ? "bg-sky-100 text-[#009CFF] font-bold"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
                id="tab-call"
              >
                <Calendar className="w-3.5 h-3.5" /> Book Strategy Call
              </button>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight font-display text-slate-900">
              {type === "audit" ? "Request Free Marketing Audit" : "Book Your Free Growth Strategy Call"}
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              {type === "audit"
                ? "Get a customized 15-page diagnostic report pinpointing organic search and ad budget gaps."
                : "Schedule a 1-on-1 Zoom consultation with our senior campaign managers to blueprint your scaling model."}
            </p>

            {/* Step Progress indicators */}
            <div className="flex items-center gap-2 mt-4" id="step-indicators">
              <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 1 ? "w-1/2 bg-[#009CFF]" : "w-1/2 bg-slate-100"}`} />
              <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 2 ? "w-1/2 bg-[#009CFF]" : "w-1/2 bg-slate-100"}`} />
            </div>
          </div>
        )}

        {/* Step Content */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.form
              key="step1"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              onSubmit={handleNext}
              className="space-y-4"
              id="audit-form-step-1"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Company / Brand Name *</label>
                  <input
                    required
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Acme Corporation"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009CFF] focus:border-[#009CFF] transition-all text-sm bg-slate-50/50"
                    id="input-company"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Website URL *</label>
                  <input
                    required
                    type="url"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="e.g. https://mybusiness.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009CFF] focus:border-[#009CFF] transition-all text-sm bg-slate-50/50"
                    id="input-website"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Monthly Marketing Budget *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2" id="budget-options-grid">
                  {budgetOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setBudget(opt)}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-medium transition-all ${
                        budget === opt
                          ? "bg-[#009CFF] text-white border-[#009CFF] shadow-sm"
                          : "border-slate-200 text-slate-600 hover:border-[#009CFF] hover:bg-slate-50"
                      }`}
                      id={`budget-${opt.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Primary Interest Areas</label>
                <div className="flex flex-wrap gap-2" id="services-options-wrap">
                  {marketingServices.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`py-2 px-3.5 rounded-full border text-xs transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? "bg-sky-50 text-[#009CFF] border-[#009CFF] font-semibold"
                            : "border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                        id={`interest-${service.replace(/\s+/g, '-').toLowerCase()}`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-[#009CFF]" />}
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-end pt-4" id="step-1-nav">
                <button
                  type="submit"
                  className="bg-[#009CFF] hover:bg-[#0086db] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-sky-200 hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
                  id="btn-next-step"
                >
                  Continue Request <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.form>
          )}

          {step === 2 && (
            <motion.form
              key="step2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              onSubmit={handleNext}
              className="space-y-4"
              id="audit-form-step-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Your Full Name *</label>
                  <input
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009CFF] focus:border-[#009CFF] transition-all text-sm bg-slate-50/50"
                    id="input-fullname"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009CFF] focus:border-[#009CFF] transition-all text-sm bg-slate-50/50"
                    id="input-email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 855-845-6558"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009CFF] focus:border-[#009CFF] transition-all text-sm bg-slate-50/50"
                    id="input-phone"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Core Business Goals / Sourcing Obstacles</label>
                  <input
                    type="text"
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                    placeholder="e.g. Want to double organic sales"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#009CFF] focus:border-[#009CFF] transition-all text-sm bg-slate-50/50"
                    id="input-goals"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center pt-4" id="step-2-nav">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-slate-500 hover:text-slate-800 font-semibold text-sm px-4 py-2"
                  id="btn-back-step-1"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-[#009CFF] hover:bg-[#0086db] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-sky-200 hover:-translate-y-0.5 transition-all text-sm cursor-pointer"
                  id="btn-submit-audit"
                >
                  {type === "audit" ? "Launch Free Live Audit" : "Request Strategy Call"} <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </motion.form>
          )}

          {step === 3 && type === "audit" && (
            <motion.div
              key="step3-loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 text-center space-y-6"
              id="seo-loader-screen"
            >
              <div className="relative flex justify-center" id="loader-spinner">
                <Loader2 className="w-16 h-16 text-[#009CFF] animate-spin" />
                <Sparkles className="w-6 h-6 text-sky-400 absolute top-5 animate-pulse" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold font-display text-slate-800">
                  Scanning {websiteUrl || "Your Website"}...
                </h4>
                <p className="text-sm text-slate-500 max-w-md mx-auto h-12 flex items-center justify-center italic">
                  &ldquo;{scanMessages[scanStep]}&rdquo;
                </p>
              </div>

              {/* Fake progress checks */}
              <div className="max-w-xs mx-auto text-left space-y-2.5 text-xs text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100" id="progress-checks">
                <div className="flex items-center gap-2">
                  <Check className={`w-4 h-4 text-emerald-500 transition-opacity ${scanStep > 0 ? "opacity-100" : "opacity-30"}`} />
                  <span className={scanStep > 0 ? "text-slate-800 font-medium" : "text-slate-400"}>Core Web Vitals Evaluated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className={`w-4 h-4 text-emerald-500 transition-opacity ${scanStep > 2 ? "opacity-100" : "opacity-30"}`} />
                  <span className={scanStep > 2 ? "text-slate-800 font-medium" : "text-slate-400"}>Schema Integrity Checked</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className={`w-4 h-4 text-emerald-500 transition-opacity ${scanStep > 4 ? "opacity-100" : "opacity-30"}`} />
                  <span className={scanStep > 4 ? "text-slate-800 font-medium" : "text-slate-400"}>Competitor Ads Dissected</span>
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center space-y-6"
              id="success-screen"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto" id="success-icon">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-900">
                  {type === "audit" ? "Audit Report Launch Scheduled!" : "Strategy Call Request Received!"}
                </h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto">
                  {type === "audit"
                    ? `Thank you, ${fullName || "there"}. We've initiated a deep SEO Crawl on ${websiteUrl || "your site"}. Your senior digital marketing analyst will package the full 15-page diagnostic deck and contact you at ${email} shortly.`
                    : `Thank you, ${fullName || "there"}. Your strategy call reservation has been logged. Our Senior Growth strategist will contact you via phone (${phone}) or email (${email}) in the next 1-2 hours to share the Zoom link.`}
                </p>
              </div>

              {/* Extra reassurance badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-sky-50 text-[#009CFF] text-xs font-semibold rounded-full border border-sky-100 mx-auto" id="success-badge">
                <Sparkles className="w-3.5 h-3.5" /> Includes 1 Free Competitor Gap Report
              </div>

              <div className="pt-4" id="success-nav">
                <button
                  onClick={onClose}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold transition-all text-sm shadow-md"
                  id="btn-close-success"
                >
                  Return to Website
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
