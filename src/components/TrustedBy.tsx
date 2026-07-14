import React from "react";
import { Shield, Sparkles, Zap, Award, Target, Activity } from "lucide-react";

export default function TrustedBy() {
  const brandLogos = [
    { name: "Apex Group", icon: Target, label: "APEX" },
    { name: "Zenith Retail", icon: Zap, label: "ZENITH" },
    { name: "Nova Media", icon: Sparkles, label: "NOVA" },
    { name: "MedCore Health", icon: Activity, label: "MEDCORE" },
    { name: "Solaria Energy", icon: Shield, label: "SOLARIA" },
    { name: "Vanguard Tech", icon: Award, label: "VANGUARD" }
  ];

  return (
    <section className="py-12 bg-white/40 backdrop-blur-md border-y border-slate-200/50" id="trusted-by-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
          Trusted By Growing Businesses Worldwide
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-300" id="logos-grid">
          {brandLogos.map((brand, i) => {
            const BrandIcon = brand.icon;
            return (
              <div 
                key={brand.name} 
                className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all hover:scale-105"
                id={`trusted-logo-${i}`}
              >
                <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-[#009CFF]">
                  <BrandIcon className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-sm text-slate-700 tracking-tight leading-none">
                    {brand.label}
                  </span>
                  <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold leading-none mt-0.5">
                    GLOBAL
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
