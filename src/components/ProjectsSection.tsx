import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database, Code2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = ref.current?.querySelectorAll('[data-index]');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // TOUS les projets conservés
  const projects = [
    {
      title: "DRIM VTC - Plateforme de Gestion",
      description: "Application web complète pour la gestion des services VTC avec interface utilisateur avancée et système de réservation en temps réel.",
      technologies: ["Symfony", "React", "TypeScript", "Docker", "MongoDB"],
      category: "Web Application",
      icon: <Globe className="w-8 h-8" />,
      features: [
        "Interface utilisateur multi-fonctionnelle",
        "Système de réservation en temps réel",
        "Architecture microservices avec Docker",
        "Tests automatisés et débogage fonctionnel"
      ]
    },
    {
      title: "FINTECH - Système de Loteries",
      description: "Application mobile et backend pour la gestion des tickets de loteries avec validation avancée et intégration d'APIs tierces.",
      technologies: ["Flutter", "Symfony", "Angular", "API REST"],
      category: "Mobile & Backend",
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        "Application mobile native Flutter",
        "Algorithmes de validation des tickets",
        "Intégration d'APIs tierces",
        "Architecture distribuée scalable"
      ]
    },
    {
      title: "Classification d'Images Médicales IA",
      description: "Système d'intelligence artificielle pour la classification automatique d'images médicales utilisant des réseaux de neurones convolutifs.",
      technologies: ["Python", "PyTorch", "Keras", "TensorFlow", "Jupyter"],
      category: "Intelligence Artificielle",
      icon: <Database className="w-8 h-8" />,
      features: [
        "Réseaux de neurones convolutifs",
        "Préprocessing d'images médicales",
        "Métriques de performance avancées",
        "Interface Jupyter pour l'analyse"
      ]
    },
    {
      title: "Business Kintana - Système Hospitalier",
      description: "Application web robuste pour la gestion des systèmes hospitaliers avec tableaux de bord analytiques et modules de demandes.",
      technologies: ["Flutter", "Power BI", "DAX", "Oracle"],
      category: "Healthcare System",
      icon: <Code2 className="w-8 h-8" />,
      features: [
        "Gestion complète des systèmes hospitaliers",
        "Tableaux de bord Power BI",
        "Optimisation des performances",
        "Interface utilisateur intuitive"
      ]
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-[#111827] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes <span className="text-[#10B981]">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-[#10B981] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Découvrez quelques-uns de mes projets récents qui démontrent mon expertise 
            en développement full-stack, mobile et intelligence artificielle.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              data-index={index}
              className={`bg-[#030712] rounded-2xl p-8 border border-[#1F2937] hover:border-[#10B981] card-glow transition-all duration-500 ${
                visibleProjects.includes(index)
                  ? 'animate-fade-in-up opacity-100'
                  : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-[#10B981]/20 text-[#10B981] group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <span className="inline-block px-3 py-1 bg-[#1F2937] text-gray-300 rounded-full text-xs font-medium border border-[#374151]">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                  Fonctionnalités clés
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-[#1F2937] text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-[#374151] hover:border-[#10B981] hover:text-[#10B981] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2 border-[#374151] text-gray-300 hover:bg-[#1F2937] hover:border-[#10B981] hover:text-[#10B981] btn-micro-bounce transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  Code
                </Button>
                <Button 
                  size="sm" 
                  className="flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white border-0 btn-micro-bounce transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Démo
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#10B981] text-[#10B981] hover:bg-[#10B981]/10 px-8 py-3 btn-micro-bounce transition-all duration-300"
          >
            Voir tous mes projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
