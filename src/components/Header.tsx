import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Phone, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onOpenAudit: () => void;
  onOpenCall: () => void;
}

export default function Header({ onOpenAudit, onOpenCall }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Our Process", href: "#process" },
    { name: "Success Stories", href: "#case-studies" },
    { name: "Pricing Plans", href: "#pricing" },
    { name: "FAQ", href: "#faq" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
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

  return (
    <>
      {/* Top micro bar for corporate credentials */}
      <div className="w-full bg-slate-900 text-white text-xs py-2 px-4 md:px-8 flex justify-between items-center z-40 relative" id="top-micro-bar">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#009CFF] animate-pulse" />
            #1 Results-Driven Digital Marketing Agency
          </span>
          <span className="hidden lg:inline text-slate-400">|</span>
          <span className="hidden lg:inline text-slate-300 font-mono">ustechrepairs.net</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:support@ustechrepairs.net" className="hover:text-[#009CFF] transition-colors text-slate-300">
            support@ustechrepairs.net
          </a>
          <a href="tel:855-845-6558" className="flex items-center gap-1 hover:text-[#009CFF] transition-colors text-slate-300 font-semibold">
            <span>☎ 855-845-6558</span>
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-lg shadow-lg shadow-sky-200/20 border-b border-slate-200/60 py-3"
            : "bg-white/70 backdrop-blur-md py-5 border-b border-slate-200/50"
        }`}
        id="main-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" id="brand-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#009CFF] to-sky-400 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-sky-100 group-hover:scale-105 transition-all">
              US
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-slate-900 group-hover:text-[#009CFF] transition-colors leading-none">
                USTechRepairs.net
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#009CFF] mt-0.5 leading-none">
                Digital Marketing
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" id="desktop-navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-[#009CFF] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#009CFF] transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAudit}
              className="hidden sm:inline-flex items-center gap-2 bg-[#009CFF] hover:bg-[#0086db] text-white font-semibold text-xs md:text-sm px-4 md:px-5 py-2.5 rounded-xl shadow-md shadow-sky-100 hover:-translate-y-0.5 transition-all cursor-pointer"
              id="header-cta-audit"
            >
              Get Free Audit
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors"
              id="mobile-nav-toggle"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-200/60 bg-white/80 backdrop-blur-lg overflow-hidden shadow-lg"
              id="mobile-navigation-drawer"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block py-2 px-3 rounded-xl text-slate-700 hover:bg-[#EAF7FF] hover:text-[#009CFF] text-base font-semibold transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 flex flex-col gap-2.5 px-3">
                  <button
                    onClick={() => { setIsOpen(false); onOpenAudit(); }}
                    className="w-full justify-center bg-[#009CFF] hover:bg-[#0086db] text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2 text-sm shadow-md"
                  >
                    Get Free Marketing Audit <Sparkles className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => { setIsOpen(false); onOpenCall(); }}
                    className="w-full justify-center bg-white border-2 border-[#009CFF] hover:bg-sky-50 text-[#009CFF] px-5 py-3 rounded-xl font-bold flex items-center gap-2 text-sm"
                  >
                    Book Strategy Call <Phone className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
