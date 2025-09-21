import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Download, Github, Linkedin, ExternalLink } from 'lucide-react';
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
    link.href = '/cv-razafimahafaly-jean-elson.pdf';
    link.download = 'CV-RAZAFIMAHAFALY-Jean-Elson.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced 3D Background */}
      <Background3D />
      <CircuitAnimation />
      
      {/* Enhanced Gradient Background with Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-glacier-50/90 via-glacier-100/70 to-glacier-200/90 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-glacier-400/20 via-transparent to-glacier-600/10" />
      </div>

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-glacier-400/20 to-glacier-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-glacier-300/15 to-glacier-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Isometric Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 glass rounded-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotateX: [0, 180, 360],
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Enhanced Profile Image with Glassmorphism */}
          <motion.div 
            className="mb-8 flex justify-center"
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
              {/* Isometric Shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-glacier-400/30 to-glacier-600/30 rounded-full blur-xl transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-300" />
              
              {/* Main Image Container with enhanced glassmorphism */}
              <div className="relative w-48 h-48 glass-strong rounded-full p-2 hover-lift">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/30">
                  <img
                    src="/lovable-uploads/58a5f867-0a5a-47e2-93ac-6f7bff166743.png"
                    alt="Profile"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Animated Ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-glacier-400/50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Corner Lights */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-glacier-400 to-glacier-600 rounded-full animate-pulse" />
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-r from-glacier-300 to-glacier-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </motion.div>

          {/* Enhanced Title with Gradient Animation */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 gradient-text-animated"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Jean Elson RAZAFIMAHAFALY
          </motion.h1>
          
          {/* Enhanced Subtitle with Glassmorphism */}
          <motion.div 
            className="glass-card rounded-2xl p-6 mb-8 max-w-2xl mx-auto hover-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-glacier-700 mb-3">
              Développeur .NET & AI
            </h2>
            <p className="text-lg text-glacier-600 leading-relaxed">
              Ingénieur logiciel spécialisé en .NET et intelligence artificielle, 
              avec plus de 2 ans d'expérience dans le développement d'applications innovantes.
            </p>
          </motion.div>

          {/* Enhanced Contact Info with Isometric Cards */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: <Mail className="w-4 h-4" />, text: "jeanelsonilombo@gmail.com", href: "mailto:jeanelsonilombo@gmail.com" },
              { icon: <Phone className="w-4 h-4" />, text: "+33 6 12 34 56 78", href: "tel:+33612345678" },
              { icon: <MapPin className="w-4 h-4" />, text: "Paris, France", href: "#" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="glass rounded-xl px-4 py-3 flex items-center gap-2 text-sm text-glacier-700 hover-lift group transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-glacier-500 group-hover:text-glacier-400 transition-colors">
                  {item.icon}
                </span>
                {item.text}
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced Action Buttons with 3D Effects */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={downloadCV}
                size="lg" 
                className="glass-strong text-lg px-8 py-4 bg-gradient-to-r from-glacier-500 to-glacier-600 hover:from-glacier-600 hover:to-glacier-700 text-white border-0 shadow-2xl group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Download className="mr-2 h-5 w-5" />
                Télécharger CV
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={scrollToAbout}
                variant="outline" 
                size="lg" 
                className="glass text-lg px-8 py-4 border-glacier-300/50 text-glacier-700 hover:bg-glacier-50/50 hover:border-glacier-400/50 shadow-lg group"
              >
                <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-45 transition-transform duration-300" />
                En savoir plus
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links with Floating Effect */}
          <motion.div 
            className="flex justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[
              { icon: <Github className="w-6 h-6" />, href: "#", color: "from-gray-600 to-gray-800" },
              { icon: <Linkedin className="w-6 h-6" />, href: "#", color: "from-blue-600 to-blue-800" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className={`glass-strong rounded-full p-4 bg-gradient-to-r ${social.color} text-white hover-glow group float-animation`}
                style={{ animationDelay: `${index * 0.2}s` }}
                whileHover={{ scale: 1.1, rotateY: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="group-hover:scale-110 transition-transform duration-300 block">
                  {social.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator with Circuit Animation */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="glass-strong rounded-full p-3 cursor-pointer hover-glow group" onClick={scrollToAbout}>
            <ChevronDown className="h-6 w-6 text-glacier-600 group-hover:text-glacier-700 transition-colors" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;