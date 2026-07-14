import React, { useState } from "react";
import { Check, HelpCircle, Flame, Sparkles } from "lucide-react";
import { pricingPlansData } from "../data/otherData";
import { motion } from "motion/react";

interface PricingProps {
  onOpenAudit: () => void;
  onOpenCall: () => void;
}

export default function Pricing({ onOpenAudit, onOpenCall }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const calculatePrice = (basePrice: string) => {
    if (basePrice === "Custom") return "Custom";
    // Strip dollar symbol, commas, and parse integer
    const rawNum = parseInt(basePrice.replace(/[$,]/g, ""), 10);
    if (billingCycle === "monthly") {
      return basePrice;
    } else {
      // Apply 20% discount for yearly billing
      const discountedNum = Math.round((rawNum * 0.8) / 10) * 10;
      return `$${discountedNum.toLocaleString("en-US")}`;
    }
  };

  return (
    <section className="py-20 bg-slate-50/50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4" id="pricing-header">
          <span className="text-xs font-bold uppercase tracking-widest text-[#009CFF] bg-[#EAF7FF] px-4 py-1.5 rounded-full">
            Transparent Investment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900">
            Predictable Plans for <span className="text-[#009CFF]">Scale</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg">
            No hidden setup fees, no markup overheads. Select the perfect tier for your current scope or schedule a custom strategy call for enterprise consulting.
          </p>

          {/* Monthly vs Yearly Toggle button */}
          <div className="flex items-center justify-center gap-3 pt-6" id="pricing-toggle-wrap">
            <span className={`text-xs font-bold ${billingCycle === "monthly" ? "text-slate-900" : "text-slate-400"}`}>
              Bill Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative w-14 h-8 bg-[#EAF7FF] border border-sky-200 rounded-full transition-all duration-300 p-1 flex items-center cursor-pointer"
              id="billing-cycle-switch"
              aria-label="Toggle Billing Cycle"
            >
              <div
                className={`w-5.5 h-5.5 rounded-full bg-[#009CFF] transition-all shadow-sm ${
                  billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-xs font-bold flex items-center gap-1.5 ${billingCycle === "yearly" ? "text-slate-900" : "text-slate-400"}`}>
              Bill Yearly
              <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-black">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch" id="pricing-cards-grid">
          {pricingPlansData.map((plan, i) => {
            const isPopular = plan.popular;
            const computedPrice = calculatePrice(plan.price);
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`relative rounded-[24px] p-6 md:p-8 backdrop-blur-md border flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-white/60 border-2 border-[#009CFF] shadow-2xl shadow-sky-200/30 -translate-y-2 lg:scale-[1.03] z-10"
                    : "bg-white/40 border-white/60 shadow-sm hover:shadow-lg"
                }`}
                id={`pricing-card-${plan.name.toLowerCase()}`}
              >
                {/* Popularity badge banner */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#009CFF] to-sky-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Flame className="w-3.5 h-3.5 fill-white" />
                    <span>Most Popular &bull; Scale Fast</span>
                  </div>
                )}

                {/* Card Top Information */}
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900">{plan.name}</h3>
                  <p className="text-slate-400 text-xs mt-1 min-h-[36px]">{plan.description}</p>
                  
                  {/* Pricing block */}
                  <div className="my-6 flex items-baseline gap-1" id={`price-display-${plan.name.toLowerCase()}`}>
                    <span className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
                      {computedPrice}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-slate-400 text-xs font-semibold">
                        / {billingCycle === "monthly" ? "mo" : "mo, billed annually"}
                      </span>
                    )}
                  </div>

                  {plan.savings && billingCycle === "yearly" && (
                    <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg inline-block mb-4">
                      ✓ Includes annual bundle discount
                    </div>
                  )}

                  <hr className="border-slate-100 mb-6" />

                  {/* Feature lists */}
                  <ul className="space-y-3.5 text-left mb-8" id={`features-list-${plan.name.toLowerCase()}`}>
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                        <Check className="w-4 h-4 text-[#009CFF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action button */}
                <button
                  onClick={plan.price === "Custom" ? onOpenCall : onOpenAudit}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs md:text-sm transition-all cursor-pointer ${
                    isPopular
                      ? "bg-[#009CFF] hover:bg-[#0086db] text-white shadow-lg shadow-sky-200"
                      : "bg-slate-50 hover:bg-[#EAF7FF] text-slate-700 hover:text-[#009CFF] border border-slate-200 hover:border-[#CFEFFF]"
                  }`}
                  id={`pricing-cta-btn-${plan.name.toLowerCase()}`}
                >
                  {plan.ctaText}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Flexible SLA guarantee footer */}
        <div className="mt-12 text-center" id="pricing-disclaimer">
          <p className="text-slate-400 text-xs">
            * Retainer prices do not include ad networks spent directly billed by Meta or Google. Need a highly specialized custom scope?{" "}
            <button onClick={onOpenCall} className="text-[#009CFF] font-bold underline hover:text-[#0086db]">
              Book custom strategy call.
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
