
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Razafimahafaly Jean Elson
            </h3>
            <p className="text-gray-400">Développeur Full-Stack & Créateur d'expériences digitales</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {['Accueil', 'À propos', 'Expérience', 'Projets', 'Contact'].map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace('à propos', 'about').replace('expérience', 'experience').replace('projets', 'projects')}`}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:underline"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Fait avec <Heart className="w-4 h-4 text-red-500 animate-pulse" /> à Madagascar
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 Jean Elson. Tous droits réservés.
            </p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
