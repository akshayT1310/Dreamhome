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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} onNavigate={handleNavigate} />

      <main>
        <HeroSection onNavigate={handleNavigate} />
        <BrandIntro />
        <ServicesSection />
        <ThreeDDesign />
        <HousePlans />
        <DesignStyles />
        <WhyChooseUs />
        <ProcessSection />
        <ProjectsSection />
        <BeforeAfter />
        <StatsSection />
        <Testimonials />
        <AboutSection />
        <CTASection />
        <ContactSection />
      </main>

      <Footer onNavigate={handleNavigate} />
      <FloatingActions />
    </div>
  );
}

export default App;
