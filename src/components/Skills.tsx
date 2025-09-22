import React, { useEffect, useRef } from 'react';
import { Code, Database, Smartphone, Cloud, Globe, Brain, Shield, Wrench, GitBranch, Layers, Settings, Zap, BarChart, Lock, Server, Monitor } from 'lucide-react';

const Skills = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Services data
  const services = [
    {
      title: "Développement Web",
      description: "Un back-end solide et un front-end puissant — nos ingénieurs logiciels relèvent le défi de A à Z. Partagez audacieusement vos projets les plus complexes en toute confiance et voyez-le s'en concrétiser.",
      gradient: "from-slate-900 to-slate-700",
      buttonColor: "bg-slate-600 hover:bg-slate-500"
    },
    {
      title: "Développement Mobile",
      description: "Des applications mobiles natives et cross-platform qui offrent une expérience utilisateur exceptionnelle sur toutes les plateformes.",
      gradient: "from-slate-800 to-slate-600",
      buttonColor: "bg-slate-500 hover:bg-slate-400"
    },
    {
      title: "UI/UX Design",
      description: "Créez des interfaces utilisateur intuitives et attrayantes qui convertissent les visiteurs en clients fidèles.",
      gradient: "from-slate-700 to-slate-500",
      buttonColor: "bg-slate-400 hover:bg-slate-300"
    },
    {
      title: "Intelligence Artificielle",
      description: "Intégration d'IA et machine learning pour automatiser vos processus métier.",
      gradient: "from-slate-600 to-slate-400",
      buttonColor: "bg-slate-300 hover:bg-slate-200 text-slate-800"
    }
  ];

  // Technology logos data with realistic representations
  const technologies = [
    { name: "JavaScript", icon: <span className="text-2xl font-bold text-yellow-400">JS</span> },
    { name: "React", icon: <span className="text-2xl font-bold text-blue-400">⚛️</span> },
    { name: "Angular", icon: <span className="text-2xl font-bold text-red-500">A</span> },
    { name: "Vue.js", icon: <span className="text-2xl font-bold text-green-500">V</span> },
    { name: "PHP", icon: <span className="text-xl font-bold text-purple-500">PHP</span> },
    { name: "Laravel", icon: <span className="text-2xl text-red-600">🔺</span> },
    { name: "Symfony", icon: <span className="text-2xl text-gray-800">S</span> },
    { name: "Python", icon: <span className="text-2xl">🐍</span> },
    { name: "Django", icon: <span className="text-xl font-bold text-green-600">DJ</span> },
    { name: "C#", icon: <span className="text-xl font-bold text-purple-600">C#</span> },
    { name: ".NET", icon: <span className="text-xl font-bold text-blue-600">.NET</span> },
    { name: "Flutter", icon: <span className="text-2xl text-cyan-500">🦋</span> },
    { name: "React Native", icon: <span className="text-xl font-bold text-blue-400">RN</span> },
    { name: "MySQL", icon: <span className="text-2xl text-orange-500">🐬</span> },
    { name: "PostgreSQL", icon: <span className="text-2xl text-blue-600">🐘</span> },
    { name: "MongoDB", icon: <span className="text-2xl text-green-600">🍃</span> },
    { name: "Git", icon: <span className="text-xl font-bold text-orange-600">Git</span> },
    { name: "GitHub", icon: <span className="text-2xl text-gray-800">🐙</span> },
    { name: "Docker", icon: <span className="text-2xl text-blue-500">🐋</span> },
    { name: "Kubernetes", icon: <span className="text-2xl text-blue-400">☸️</span> },
    { name: "Power BI", icon: <span className="text-xl font-bold text-yellow-600">BI</span> },
    { name: "TensorFlow", icon: <span className="text-xl font-bold text-orange-600">TF</span> },
    { name: "PyTorch", icon: <span className="text-2xl text-red-500">🔥</span> },
    { name: "OpenAI", icon: <span className="text-xl font-bold text-green-500">AI</span> },
    { name: "Selenium", icon: <span className="text-2xl text-green-600">🕷️</span> },
    { name: "Zapier", icon: <span className="text-2xl text-orange-500">⚡</span> },
    { name: "Grafana", icon: <span className="text-xl font-bold text-orange-600">G</span> },
    { name: "Postman", icon: <span className="text-2xl text-orange-500">📮</span> }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;
    let animationId: number;

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      const maxScroll = carousel.scrollWidth / 2;
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      carousel.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${service.gradient} rounded-2xl p-6 text-white overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-orange-400">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-200 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className={`${service.buttonColor} text-white px-4 py-2 rounded-full text-sm font-medium transition-colors`}>
                  DEVIS
                </button>
              </div>
              
              {/* Background pattern */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full" />
            </div>
          ))}
        </div>

        {/* Technology Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-muted/50 backdrop-blur-sm border border-border/50">
            <div
              ref={carouselRef}
              className="flex gap-8 py-8 px-4 overflow-x-hidden"
              style={{ width: 'max-content' }}
            >
              {/* Duplicate technologies for seamless loop */}
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 w-16 h-16 bg-background rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 flex items-center justify-center group cursor-pointer border border-border/50"
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-foreground text-background text-xs rounded-lg px-3 py-2 whitespace-nowrap z-20 pointer-events-none">
                    {tech.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient fade effects */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export default Skills;