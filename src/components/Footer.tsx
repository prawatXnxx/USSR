import React from "react";
import { Mail, Phone, ArrowRight, ShieldCheck, Linkedin, Twitter, Facebook, ArrowUp, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: "SEO Optimization", href: "#services" },
    { name: "Google Ads (PPC)", href: "#services" },
    { name: "Meta Ads (FB/IG)", href: "#services" },
    { name: "Social Media Marketing", href: "#services" },
    { name: "Website Development", href: "#services" },
    { name: "Brand Identity", href: "#services" }
  ];

  const resourceLinks = [
    { name: "Free Website Audit", href: "#hero-section" },
    { name: "Case Studies / Stories", href: "#case-studies" },
    { name: "Growth Pricing plans", href: "#pricing" },
    { name: "Frequently Asked Questions", href: "#faq" }
  ];

  const policyLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Cookie Guidelines", href: "#" },
    { name: "Sitemap", href: "/sitemap.xml" }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, selector: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(selector);
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

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-slate-50/40 backdrop-blur-md border-t border-white/60 pt-16 pb-8 text-left relative" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-200" id="footer-links-grid">
          
          {/* Brand Information Column */}
          <div className="lg:col-span-4 space-y-4" id="footer-col-brand">
            <a href="#" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              <div className="w-10 h-10 rounded-xl bg-[#009CFF] flex items-center justify-center text-white font-bold text-lg">
                US
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-tight text-slate-900 group-hover:text-[#009CFF] transition-colors leading-none">
                  USTechRepairs.net
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#009CFF] mt-0.5 leading-none">
                  Digital Marketing
                </span>
              </div>
            </a>
            
            <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
              We are a premier results-oriented digital marketing agency. We systematically engineer keyword visibility, scale social media acquisition tunnels, and build high-converting web products to compound your ROI.
            </p>

            {/* Social media connections */}
            <div className="flex items-center gap-3 pt-2" id="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/40 backdrop-blur-sm border border-white/60 text-slate-500 hover:text-[#009CFF] hover:border-[#009CFF] flex items-center justify-center transition-colors" aria-label="LinkedIn Profile">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/40 backdrop-blur-sm border border-white/60 text-slate-500 hover:text-[#009CFF] hover:border-[#009CFF] flex items-center justify-center transition-colors" aria-label="Twitter Account">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/40 backdrop-blur-sm border border-white/60 text-slate-500 hover:text-[#009CFF] hover:border-[#009CFF] flex items-center justify-center transition-colors" aria-label="Facebook Page">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (Services) */}
          <div className="lg:col-span-2.5" id="footer-col-services">
            <h4 className="text-slate-950 text-xs font-black uppercase tracking-widest mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-xs">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-slate-500 hover:text-[#009CFF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column (Resources) */}
          <div className="lg:col-span-2.5" id="footer-col-resources">
            <h4 className="text-slate-950 text-xs font-black uppercase tracking-widest mb-4">Resources</h4>
            <ul className="space-y-2.5 text-xs">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-slate-500 hover:text-[#009CFF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Column */}
          <div className="lg:col-span-3 space-y-4" id="footer-col-contact">
            <h4 className="text-slate-950 text-xs font-black uppercase tracking-widest mb-4">Contact Us</h4>
            <div className="space-y-3.5 text-xs text-slate-600" id="contact-lines">
              <a href="mailto:growth@ustechrepairs.net" className="flex items-center gap-2.5 hover:text-[#009CFF] transition-colors">
                <div className="w-7 h-7 rounded-lg bg-white/40 backdrop-blur-sm border border-white/60 flex items-center justify-center text-[#009CFF] shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">growth@ustechrepairs.net</span>
              </a>

              <a href="tel:855-845-6558" className="flex items-center gap-2.5 hover:text-[#009CFF] transition-colors font-mono font-medium">
                <div className="w-7 h-7 rounded-lg bg-white/40 backdrop-blur-sm border border-white/60 flex items-center justify-center text-[#009CFF] shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>855-845-6558</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-600">
                <div className="w-7 h-7 rounded-lg bg-white/40 backdrop-blur-sm border border-white/60 flex items-center justify-center text-[#009CFF] shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-tight">
                  30 N GOULD ST STE R<br />
                  SHERIDAN, WY 82801<br />
                  United States
                </span>
              </div>
            </div>
            
            <p className="text-[10px] text-slate-400">
              * Support SLA guarantees active responses within 2 hours.
            </p>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400" id="footer-lower-bar">
          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-6 text-center sm:text-left">
            <span>Founded in 2025 &bull; Incorporated in April 2026 &bull; USTechRepairs.net. All rights reserved.</span>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              {policyLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-[#009CFF] transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Scroll to Top Trigger */}
          <button
            onClick={handleScrollToTop}
            className="p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-[#009CFF] hover:border-[#009CFF] flex items-center justify-center transition-all shadow-sm group hover:-translate-y-1 cursor-pointer"
            aria-label="Scroll to top of page"
            id="btn-scroll-top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
