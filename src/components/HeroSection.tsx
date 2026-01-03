import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Download, Github, Linkedin, ExternalLink, Code, Brain, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Background3D from './Background3D';
import CircuitAnimation from './CircuitAnimation';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/Dev-AI-cv.pdf';
    link.download = 'Dev-AI-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
      {/* Enhanced 3D Background avec format IA */}
      <Background3D />
      <CircuitAnimation />
      
      {/* Dark Premium Background avec effet IA */}
      <div className="absolute inset-0 bg-[#030712]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#10B981]/10 via-transparent to-transparent" />
        {/* Pattern de grille IA */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche : Photo + Titre animé */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Photo à gauche avec bordure animée verte */}
            <motion.div 
              className="mb-8 flex justify-center lg:justify-start"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1, 
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <div className="relative group">
                {/* Image moderne sans cadre: coins légèrement arrondis et ombre subtile */}
                <div className="relative w-72 h-72 rounded-md overflow-hidden shadow-2xl">
                  <img
                    src="/photo/logo.png"
                    alt="Profile"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/photo/photo-pholio.png'; }}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Texte sous l'image (séparé de l'image) */}
                <motion.div
                  className="mt-6 text-center lg:text-left"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                >
                  <div className="text-lg md:text-xl font-bold text-white">RAZAFIMAHAFALY</div>
                  <div className="text-sm md:text-base text-[#10B981] font-semibold">Développeur .NET & Ingénieur IA</div>
                  <div className="text-xs md:text-sm text-gray-300 mt-2 max-w-lg">Je conçois des solutions intelligentes et performantes pour vos défis techniques.</div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* On retire les titres superflus précédents (déjà affichés sous l'image) */}

            {/* Contact Info compact */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: <Mail className="w-4 h-4" />, text: "jeanelsonilombo@gmail.com", href: "mailto:jeanelsonilombo@gmail.com" },
                { icon: <Phone className="w-4 h-4" />, text: "+261 34 71 786 95", href: "tel:+261347178695" },
                { icon: <MapPin className="w-4 h-4" />, text: "Antananarivo", href: "#" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="glass rounded-lg px-3 py-2 flex items-center gap-2 text-xs text-gray-300 hover:text-[#10B981] hover-lift group transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-[#10B981] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  {item.text}
                </motion.a>
              ))}
            </motion.div>

            {/* Boutons avec micro-rebond */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={downloadCV}
                  size="lg" 
                  className="glass-strong text-base px-6 py-3 bg-[#10B981] hover:bg-[#059669] text-white border-0 shadow-2xl btn-micro-bounce"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger CV
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={scrollToAbout}
                  variant="outline" 
                  size="lg" 
                  className="glass text-base px-6 py-3 border-[#10B981]/50 text-[#10B981] hover:bg-[#10B981]/10 hover:border-[#10B981] shadow-lg btn-micro-bounce"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  En savoir plus
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Colonne droite : Passion pour attirer le visiteur */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Carte principale passion */}
            <div className="glass rounded-2xl p-8 themed-border themed-border-hover card-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#10B981]/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#10B981]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Ma Passion</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Passionné par le <span className="font-semibold text-[#10B981]">développement .NET</span> et l'<span className="font-semibold text-[#10B981]">intelligence artificielle</span>, je transforme des idées complexes en solutions innovantes et performantes.
              </p>

              {/* Deux cartes : Dev .NET et Dev IA */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Carte Dev .NET */}
                <div className="glass rounded-xl p-6 themed-border themed-border-hover card-glow transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#10B981]/20 flex items-center justify-center">
                      <Code className="w-5 h-5 text-[#10B981]" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Développement .NET</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Architecture microservices, APIs REST sécurisées, CI/CD Azure, Entity Framework. Plus de 2 ans d'expérience dans le développement d'applications robustes et évolutives.
                  </p>
                </div>

                {/* Carte Dev IA */}
                <div className="glass rounded-xl p-6 themed-border themed-border-hover card-glow transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#10B981]/20 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-[#10B981]" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Ingénierie IA</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    RAG, LLM, LangChain, Machine Learning, Deep Learning. Conception et entraînement de modèles d'IA pour l'automatisation intelligente et l'analyse de données.
                  </p>
                </div>
              </div>

              {/* Stats rapides */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 themed-border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#10B981]">2+</div>
                  <div className="text-xs text-gray-400">Années</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#10B981]">15+</div>
                  <div className="text-xs text-gray-400">Projets</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#10B981]">100%</div>
                  <div className="text-xs text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="glass-strong rounded-full p-3 bg-[#111827] text-[#10B981] hover-glow group btn-micro-bounce"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300 block">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="glass-strong rounded-full p-3 cursor-pointer hover-glow group" onClick={scrollToAbout}>
            <ChevronDown className="h-6 w-6 text-[#10B981] group-hover:scale-110 transition-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
