import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030712] text-white relative overflow-hidden themed-border-t">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#10B981] mb-2">
              {t('footer.name')}
            </h3>
            <p className="text-gray-400">{t('footer.title')}</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#hero" className="text-gray-400 hover:text-[#10B981] transition-colors duration-300 text-sm hover:underline">
              {t('footer.home')}
            </a>
            <a href="#about" className="text-gray-400 hover:text-[#10B981] transition-colors duration-300 text-sm hover:underline">
              {t('footer.about')}
            </a>
            <a href="#experience" className="text-gray-400 hover:text-[#10B981] transition-colors duration-300 text-sm hover:underline">
              {t('footer.experience')}
            </a>
            <a href="#projects" className="text-gray-400 hover:text-[#10B981] transition-colors duration-300 text-sm hover:underline">
              {t('footer.projects')}
            </a>
            <a href="#contact" className="text-gray-400 hover:text-[#10B981] transition-colors duration-300 text-sm hover:underline">
              {t('footer.contact')}
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1F2937] to-transparent mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              {t('footer.madeWith')} <Heart className="w-4 h-4 text-[#10B981] animate-pulse" /> {t('footer.madeIn')}
            </p>
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 bg-[#10B981] hover:bg-[#059669] shadow-lg hover:shadow-xl btn-micro-bounce transition-all duration-300 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
