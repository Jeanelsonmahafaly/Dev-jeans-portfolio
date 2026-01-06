
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import Skills from '@/components/Skills';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import LanguageDetectionInfo from '@/components/LanguageDetectionInfo';
import BrowserInfoDemo from '@/components/BrowserInfoDemo';
import EmailDetectionTest from '@/components/EmailDetectionTest';
import { trackVisitor } from '@/services/visitorTracking';

const Index = () => {
  // Tracker les visiteurs de manière discrète
  useEffect(() => {
    // Attendre 3 secondes après le chargement de la page pour ne pas ralentir l'affichage
    const timer = setTimeout(() => {
      trackVisitor();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative bg-[#030712]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <Skills />
      <ContactSection />
      <Footer />
      <Chatbot />
      {/* Composants de démonstration - Décommentez pour tester */}
      {/* <LanguageDetectionInfo /> */}
      {/* <BrowserInfoDemo /> */}
      {/* <EmailDetectionTest /> */}
    </div>
  );
};

export default Index;
