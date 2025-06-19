
import React from 'react';
import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Experience />
      <Skills />
      <Portfolio />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
