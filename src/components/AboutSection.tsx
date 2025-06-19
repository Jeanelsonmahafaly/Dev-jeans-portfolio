
import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Smartphone, Brain, Trophy, Users } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { icon: <Code2 className="w-8 h-8" />, title: "Développement Web", desc: "Symfony, React, TypeScript" },
    { icon: <Smartphone className="w-8 h-8" />, title: "Mobile", desc: "Flutter, Applications natives" },
    { icon: <Database className="w-8 h-8" />, title: "Bases de données", desc: "MySQL, PostgreSQL, MongoDB" },
    { icon: <Brain className="w-8 h-8" />, title: "IA", desc: "PyTorch, TensorFlow, Keras" }
  ];

  const stats = [
    { number: "2+", label: "Années d'expérience" },
    { number: "15+", label: "Projets réalisés" },
    { number: "5+", label: "Technologies maîtrisées" },
    { number: "100%", label: "Satisfaction client" }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full transform translate-x-48 -translate-y-48 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full transform -translate-x-48 translate-y-48 opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            À propos de <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Développeur passionné par l'innovation
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Avec plus de <span className="font-semibold text-blue-600">2 ans d'expérience</span> en développement, 
                je maîtrise le cycle complet du développement d'applications web et mobile.
              </p>
              <p>
                Mon expertise s'étend de la <span className="font-semibold text-purple-600">conception</span> à la 
                <span className="font-semibold text-green-600"> maintenance</span>, en passant par les 
                <span className="font-semibold text-orange-600"> tests</span> et l'optimisation des performances.
              </p>
              <p>
                Passionné par les nouvelles technologies, je me spécialise également en 
                <span className="font-semibold text-pink-600"> intelligence artificielle</span> et en 
                <span className="font-semibold text-cyan-600"> architecture logicielle</span>.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="text-blue-600 mb-2">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">{skill.title}</h4>
                  <p className="text-gray-600 text-xs">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">Mes réalisations</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`text-center transform transition-all duration-700 hover:scale-110 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: `${(index + 6) * 150}ms` }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Awards Section */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">Prix Meilleur Singleton</div>
                    <div className="text-gray-600 text-xs">ORGANISTECH 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
