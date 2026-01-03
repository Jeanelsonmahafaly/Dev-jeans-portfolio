import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Server, Shield, Trophy, Users, GitBranch, TestTube, Brain, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

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
    { icon: <Code2 className="w-8 h-8" />, title: "Développement .NET", desc: "C#, ASP.NET Core, Entity Framework" },
    { icon: <Server className="w-8 h-8" />, title: "APIs REST", desc: "Conception et développement d'APIs sécurisées" },
    { icon: <Database className="w-8 h-8" />, title: "Bases de données", desc: "SQL Server, PostgreSQL, MongoDB" },
    { icon: <Shield className="w-8 h-8" />, title: "Sécurité", desc: "Authentication, Authorization, HTTPS" },
    { icon: <GitBranch className="w-8 h-8" />, title: "Microservices", desc: "Architecture distribuée" },
    { icon: <TestTube className="w-8 h-8" />, title: "Tests & CI/CD", desc: "Tests automatisés et pipelines" }
  ];

  const achievements = [
    { icon: <Brain className="w-6 h-6" />, title: "Classification d'images", desc: "Réseaux neuronaux convolutifs" },
    { icon: <Zap className="w-6 h-6" />, title: "Chatbot intelligent", desc: "Paris sportifs" },
    { icon: <Trophy className="w-6 h-6" />, title: "2ᵉ place Hackathon", desc: "Villes intelligentes" }
  ];

  const stats = [
    { number: "2+", label: "Années d'expérience" },
    { number: "3", label: "ESN partenaires" },
    { number: "15+", label: "Projets réalisés" },
    { number: "100%", label: "Satisfaction client" }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-[#111827] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À propos de <span className="text-[#10B981]">moi</span>
          </h2>
          <div className="w-24 h-1 bg-[#10B981] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Colonne gauche : Contenu principal */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">
              Développeur .NET passionné par l'innovation
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Passionné par le <span className="font-semibold text-[#10B981]">développement .NET</span>, je maîtrise l'ensemble de son écosystème, depuis la conception et le développement jusqu'au déploiement continu via Azure DevOps et d'autres outils modernes.
              </p>
              
              <p>
                Fortement impliqué dans le domaine de l'<span className="font-semibold text-[#10B981]">intelligence artificielle</span>, je conçois et entraîne des modèles de machine learning et deep learning, et je mets en place des solutions d'automatisation intelligente, notamment à travers des workflows avancés avec n8n.
              </p>
              
              <p>
                <span className="font-semibold text-[#10B981]">Mon objectif</span> : allier performance, innovation et automatisation pour créer des solutions qui apportent une réelle valeur ajoutée.
              </p>
              
              <p>
                Je cumule plus de <span className="font-semibold text-[#10B981]">2 ans d'expérience</span> dans le 
                développement d'applications web <span className="font-semibold text-[#10B981]">robustes, évolutives et sécurisées</span>.
              </p>
              
              <div className="glass rounded-xl p-6 themed-border themed-border-hover">
                <h4 className="font-semibold text-white mb-3">Mon parcours professionnel :</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#10B981] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300"><strong className="text-white">1 an</strong> en tant que stagiaire puis alternant chez <strong className="text-[#10B981]">ARATO</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#10B981] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300"><strong className="text-white">1 an et demi</strong> chez <strong className="text-[#10B981]">RTS Line</strong>, participation à des projets d'envergure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#10B981] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300">Actuellement chez <strong className="text-[#10B981]">ILOMAD</strong> en tant qu'ingénieur confirmé, responsable du développement et de la livraison des projets</span>
                  </li>
                </ul>
              </div>

              <p>
                Je m'intègre naturellement aux <span className="font-semibold text-[#10B981]">équipes agiles</span> et mets un point d'honneur à 
                livrer des solutions <span className="font-semibold text-[#10B981]">fiables, maintenables et performantes</span>.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`glass rounded-xl p-4 themed-border themed-border-hover card-glow transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="text-[#10B981] mb-2">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{skill.title}</h4>
                  <p className="text-gray-400 text-xs">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite : Stats et Achievements */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Stats */}
            <div className="glass rounded-2xl p-8 themed-border mb-8 themed-border-hover">
              <h3 className="text-xl font-bold text-white mb-8 text-center">Mes réalisations</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`text-center transform transition-all duration-700 hover:scale-110 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: `${(index + 6) * 150}ms` }}
                  >
                    <div className="text-3xl font-bold text-[#10B981] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Awards Section */}
              <div className="mt-8 pt-6 themed-border-t">
                <div className="flex items-center justify-center gap-3 glass rounded-lg p-4 themed-border themed-border-hover">
                  <Trophy className="w-6 h-6 text-[#10B981]" />
                  <div>
                    <div className="font-semibold text-white text-sm">Agent d'automatisation IA</div>
                    <div className="text-gray-400 text-xs">Contribution chez ILOMAD</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Passionné par l'IA - Déplacé à droite */}
            <div className="glass rounded-xl p-6 themed-border mb-8 themed-border-hover">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#10B981]" />
                Passionné par l'IA
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                Spécialisé dans la <span className="font-semibold text-[#10B981]">mise en place d'automatisation IA</span>, j'ai contribué au développement d'agents d'automatisation basés sur l'intelligence artificielle et réalisé plusieurs projets personnels dans ce domaine.
              </p>
              <div className="grid gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 glass rounded-lg p-3 themed-border themed-border-hover">
                    <div className="text-[#10B981]">{achievement.icon}</div>
                    <div>
                      <div className="font-medium text-white text-sm">{achievement.title}</div>
                      <div className="text-gray-400 text-xs">{achievement.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise technique - Déplacé à droite */}
            <div className="glass rounded-xl p-6 themed-border themed-border-hover">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-[#10B981]" />
                Mon expertise technique
              </h4>
              <p className="text-sm text-gray-400">
                Mon expertise couvre les <span className="font-semibold text-[#10B981]">architectures microservices</span>, 
                le <span className="font-semibold text-[#10B981]">développement d'API REST sécurisées</span>, les 
                <span className="font-semibold text-[#10B981]"> tests automatisés</span> (unitaires, fonctionnels) et les 
                <span className="font-semibold text-[#10B981]"> pipelines CI/CD</span> (GitLab, Docker, etc.).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
