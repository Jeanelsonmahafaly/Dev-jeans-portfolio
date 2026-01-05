
import React from 'react';
import { Mail, Phone, MapPin, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from './ui/button';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-900 dark:to-purple-900 text-foreground py-16 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Bouton de toggle du thème */}
        <div className="flex justify-end mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-foreground hover:bg-white/20 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-52 h-52 rounded-full overflow-hidden shadow-2xl themed-border border-2">
            <img
              src="/photo/logo.png"
              alt="Razafimahafaly Jean Elson"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/photo/photo-pholio.png'; }}
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
