import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import OurProcess from "./components/OurProcess";
import Stats from "./components/Stats";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import AuditModal from "./components/AuditModal";
import ServicesPage from "./components/ServicesPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import PortfolioPage from "./components/PortfolioPage";
import PricingPage from "./components/PricingPage";
import FaqPage from "./components/FaqPage";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"audit" | "call">("audit");
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Dynamic SEO Title Sourcing
    document.title = "USTechRepairs.net | #1 Results-Driven Digital Marketing & Growth Agency";

    // Inject Structured Business Schema Data for SEO crawlers
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "USTechRepairs.net",
      "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      "url": "https://ustechrepairs.net",
      "telephone": "855-845-6558",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "30 N GOULD ST STE R",
        "addressLocality": "Sheridan",
        "addressRegion": "WY",
        "postalCode": "82801",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "44.7973",
        "longitude": "-106.9562"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.facebook.com",
        "https://www.twitter.com",
        "https://www.linkedin.com"
      ]
    };

    const scriptId = "structured-schema-seo";
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.setAttribute("type", "application/ld+json");
      script.innerHTML = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    
    // Intercept standard popstate & custom pushstate events
    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("pushstate", handleLocationChange);
    
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("pushstate", handleLocationChange);
    };
  }, []);

  const handleNavigate = (path: string) => {
    let targetHash = "";
    let cleanPath = path;
    if (path.includes("#")) {
      const parts = path.split("#");
      cleanPath = parts[0] || "/";
      targetHash = "#" + parts[1];
    }

    window.history.pushState({}, "", cleanPath);
    window.dispatchEvent(new Event("pushstate"));

    if (targetHash) {
      setTimeout(() => {
        const targetElement = document.querySelector(targetHash);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleOpenAudit = () => {
    setModalType("audit");
    setIsModalOpen(true);
  };

  const handleOpenCall = () => {
    setModalType("call");
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white relative flex flex-col font-sans" id="app-root-shell">
      {/* Interactive Sticky Header */}
      <Header
        onOpenAudit={handleOpenAudit}
        onOpenCall={handleOpenCall}
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

      <main className="flex-grow">
        {currentPath === "/services" ? (
          <ServicesPage onOpenAudit={handleOpenAudit} onOpenCall={handleOpenCall} />
        ) : currentPath === "/about" ? (
          <AboutPage onOpenAudit={handleOpenAudit} onOpenCall={handleOpenCall} onNavigate={handleNavigate} />
        ) : currentPath === "/portfolio" ? (
          <PortfolioPage onOpenAudit={handleOpenAudit} onOpenCall={handleOpenCall} onNavigate={handleNavigate} />
        ) : currentPath === "/pricing" ? (
          <PricingPage onOpenAudit={handleOpenAudit} onOpenCall={handleOpenCall} onNavigate={handleNavigate} />
        ) : currentPath === "/faq" ? (
          <FaqPage onOpenAudit={handleOpenAudit} onOpenCall={handleOpenCall} onNavigate={handleNavigate} />
        ) : currentPath === "/contact" ? (
          <ContactPage onOpenAudit={handleOpenAudit} onOpenCall={handleOpenCall} onNavigate={handleNavigate} />
        ) : (
          <>
            {/* Hero Section */}
            <Hero onOpenAudit={handleOpenAudit} onOpenCall={handleOpenCall} />

            {/* Corporate Trust Badge section */}
            <TrustedBy />

            {/* 12-Card Dynamic Services section */}
            <Services onOpenAudit={handleOpenAudit} onNavigate={handleNavigate} />

            {/* Key Competitor Advantages section */}
            <WhyChooseUs />

            {/* Step-by-Step Connected Process roadmap */}
            <OurProcess />

            {/* Responsive Performance Metrics Stats counters */}
            <Stats />

            {/* Category-Filtered Case Studies Success Stories showcase */}
            <CaseStudies onOpenAudit={handleOpenAudit} />

            {/* Client Testimonials testimonial slider */}
            <Testimonials />

            {/* Billing-cycle togglable Pricing Plans tier list */}
            <Pricing onOpenAudit={handleOpenAudit} onOpenCall={handleOpenCall} />

            {/* Accordion FAQ database */}
            <FAQ onOpenCall={handleOpenCall} />

            {/* Visual High-Converting Final Call to Action */}
            <FinalCTA onOpenAudit={handleOpenAudit} onOpenCall={handleOpenCall} />
          </>
        )}
      </main>

      {/* Global Brand Footer directory */}
      <Footer currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Comprehensive Audit & Zoom Booking Multi-Step Form Modal */}
      <AuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultType={modalType}
      />
    </div>
  );
}
