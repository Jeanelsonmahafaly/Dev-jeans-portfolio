
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Profile Image with Animation */}
          <div className="relative inline-block mb-8">
            <div className="w-40 h-40 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/e2657e37-3bc7-4106-80be-09dba89d8aa8.png" 
                  alt="Razafimahafaly Jean Elson"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Animated Text */}
          <div className="space-y-6 text-white">
            <div className="animate-fade-in">
              <h2 className="text-lg md:text-xl text-blue-300 mb-2">Bonjour, je suis</h2>
              <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Jean Elson
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 mb-6">
                <span className="typing-animation">Développeur Full-Stack passionné</span>
              </div>
            </div>

            <div className="animate-fade-in animation-delay-1000 max-w-2xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Spécialisé en <span className="text-blue-400 font-semibold">Symfony</span>, 
                <span className="text-green-400 font-semibold"> React</span> et 
                <span className="text-cyan-400 font-semibold"> Flutter</span>. 
                Je transforme vos idées en solutions digitales innovantes.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="animate-fade-in animation-delay-2000 flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                <span className="text-sm">razafimahafaly@gmail.com</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <MapPin size={16} className="text-green-400" />
                <span className="text-sm">Antananarivo</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="animate-fade-in animation-delay-3000 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Télécharger CV
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
