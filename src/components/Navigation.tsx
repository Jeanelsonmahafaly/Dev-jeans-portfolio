import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
// Navigation UI

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      document.documentElement.classList.toggle('dark', saved === 'dark');
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = prefersDark ? 'dark' : 'light';
      setTheme(initial);
      document.documentElement.classList.toggle('dark', initial === 'dark');
    }
  }, []);

  const setThemeHandler = (value: 'light' | 'dark') => {
    setTheme(value);
    localStorage.setItem('theme', value);
    document.documentElement.classList.toggle('dark', value === 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#about' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/Dev-AI-cv.pdf';
    link.download = 'Dev-AI-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-foreground">
            Jean Elson
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            {/* Theme radio toggles */}
            <div className="flex items-center gap-2 bg-white/5 rounded-full p-1">
              <label className={`flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer transition-colors ${theme === 'light' ? 'bg-white/10' : ''}`}>
                <input type="radio" name="theme" value="light" className="hidden" onChange={() => setThemeHandler('light')} checked={theme === 'light'} />
                <Sun className="w-4 h-4 text-yellow-300" />
                <span className="text-xs text-gray-200">Clair</span>
              </label>
              <label className={`flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer transition-colors ${theme === 'dark' ? 'bg-white/10' : ''}`}>
                <input type="radio" name="theme" value="dark" className="hidden" onChange={() => setThemeHandler('dark')} checked={theme === 'dark'} />
                <Moon className="w-4 h-4 text-indigo-300" />
                <span className="text-xs text-gray-200">Sombre</span>
              </label>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-card transition-colors text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-card rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 bg-white/5 rounded-full p-1 px-4">
              <label className={`flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer transition-colors ${theme === 'light' ? 'bg-white/10' : ''}`}>
                <input type="radio" name="theme" value="light" className="hidden" onChange={() => setThemeHandler('light')} checked={theme === 'light'} />
                <Sun className="w-4 h-4 text-yellow-300" />
                <span className="text-sm text-gray-200">Clair</span>
              </label>
              <label className={`flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer transition-colors ${theme === 'dark' ? 'bg-white/10' : ''}`}>
                <input type="radio" name="theme" value="dark" className="hidden" onChange={() => setThemeHandler('dark')} checked={theme === 'dark'} />
                <Moon className="w-4 h-4 text-indigo-300" />
                <span className="text-sm text-gray-200">Sombre</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
