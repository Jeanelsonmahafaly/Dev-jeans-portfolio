
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="/lovable-uploads/e2657e37-3bc7-4106-80be-09dba89d8aa8.png" 
              alt="Razafimahafaly Jean Elson"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              RAZAFIMAHAFALY JEAN ELSON
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-blue-100">
              Développeur Full-Stack | Symfony | React | Flutter
            </h2>
            <p className="text-lg mb-6 max-w-2xl leading-relaxed">
              Développeur Symfony avec plus de 2 ans d'expérience, je maîtrise le cycle 
              de vie complet du développement d'applications web, de la conception à la 
              maintenance en passant par les tests.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="mailto:razafimahafaly@gmail.com" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                <Mail size={20} />
                razafimahafaly@gmail.com
              </a>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Phone size={20} />
                +261 34 71 786 95
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <MapPin size={20} />
                Antananarivo
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
