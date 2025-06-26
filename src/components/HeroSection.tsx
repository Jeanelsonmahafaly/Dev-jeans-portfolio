
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone, Download } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // Créer un lien de téléchargement pour le CV
    const link = document.createElement('a');
    link.href = '/cv-razafimahafaly-jean-elson.pdf'; // Vous devrez ajouter votre CV dans le dossier public
    link.download = 'CV-RAZAFIMAHAFALY-Jean-Elson.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 relative overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-emerald-400 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-cyan-400 rounded-full animate-ping animation-delay-3000"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-teal-300 rounded-full animate-ping animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
                <img 
                  src="/lovable-uploads/58a5f867-0a5a-47e2-93ac-6f7bff166743.png" 
                  alt="Razafimahafaly Jean Elson - Développeur .NET"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 rounded-full opacity-30 blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Content */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                RAZAFIMAHAFALY
                <span className="block bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  JEAN ELSON
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl font-medium text-teal-200 mb-6">
                Développeur .NET
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                Développeur back-end spécialisé en .NET, je conçois, développe et maintiens des
                applications web robustes, évolutives et sécurisées.
                <br /><br />
                Je suis expérimenté dans les architectures microservices, le développement d'APIs
                REST, l'écriture de tests automatisés et le déploiement via des pipelines CI/CD.
                Je m'intègre facilement en équipe agile et veille à la qualité des solutions livrées.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a href="mailto:razafimahafaly@gmail.com" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 text-white hover:scale-105">
                <Mail size={18} />
                <span className="hidden sm:inline">razafimahafaly@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </a>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                <Phone size={18} />
                <span className="hidden sm:inline">+261 34 71 786 95</span>
                <span className="sm:hidden">Téléphone</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
                <MapPin size={18} />
                Antananarivo
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mb-8">
              <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white hover:scale-110 hover:rotate-6">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 text-white hover:scale-110 hover:rotate-6">
                <Linkedin size={24} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToAbout}
                className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Découvrir mon parcours
              </button>
              <button 
                onClick={downloadCV}
                className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-medium hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                <Download size={20} />
                Télécharger CV
              </button>
              <a 
                href="#contact"
                className="border-2 border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-white/60 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
