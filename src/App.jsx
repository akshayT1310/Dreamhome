import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandIntro from './components/BrandIntro';
import ServicesSection from './components/ServicesSection';
import ThreeDDesign from './components/ThreeDDesign';
import HousePlans from './components/HousePlans';
import DesignStyles from './components/DesignStyles';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSection from './components/ProcessSection';
import ProjectsSection from './components/ProjectsSection';
import BeforeAfter from './components/BeforeAfter';
import StatsSection from './components/StatsSection';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================================================
     HEADER SCROLL EFFECT
  ========================================================= */
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.site-header');

      if (!header) return;

      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Run once on initial load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* =========================================================
     SMOOTH NAVIGATION
  ========================================================= */
  const handleNavigate = (href) => {
    if (!href) return;

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    // Close mobile menu
    setMenuOpen(false);
  };

  return (
    <div className="App">

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavigate={handleNavigate}
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <main className="main-content">

        {/* HERO */}
        <HeroSection
          onNavigate={handleNavigate}
        />

        {/* BRAND INTRO */}
        <BrandIntro />

        {/* SERVICES */}
        <ServicesSection />

        {/* 3D DESIGN */}
        <ThreeDDesign />

        {/* HOUSE PLANS */}
        <HousePlans />

        {/* DESIGN STYLES */}
        <DesignStyles />

        {/* WHY CHOOSE US */}
        <WhyChooseUs />

        {/* PROCESS */}
        <ProcessSection />

        {/* PROJECTS */}
        <ProjectsSection />

        {/* BEFORE / AFTER */}
        <BeforeAfter />

        {/* STATS */}
        <StatsSection />

        {/* TESTIMONIALS */}
        <Testimonials />

        

        {/* CTA */}
        <CTASection />

        {/* CONTACT */}
        <ContactSection />
        {/* ABOUT */}
        <AboutSection />

      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <Footer
        onNavigate={handleNavigate}
      />

      {/* =====================================================
          FLOATING ACTION BUTTONS
      ====================================================== */}
      <FloatingActions />

    </div>
  );
}

export default App;