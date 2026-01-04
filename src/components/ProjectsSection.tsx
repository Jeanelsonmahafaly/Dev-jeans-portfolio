import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database, Code2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  const getTechIcon = (name: string) => {
    const techIcons: Record<string, string> = {
      'React 18': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      'Shadcn/UI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Recharts': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'Machine Learning': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'LLM': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'LangChain': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'IoT': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'ESP32': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'Edge Computing': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      'Symfony': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',
      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      'API REST': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'Keras': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
      'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      'Jupyter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
      'Power BI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
      'DAX': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
      'Oracle': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    };
    
    return techIcons[name] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
  };

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
      title: "Smart Fire Guard - Système Anti-Feu Intelligent IoT",
      description: "Application PWA de surveillance et détection d'incendie en temps réel, conçue pour fonctionner avec un ESP32 et des capteurs de température. Système intelligent utilisant des modèles d'IA/ML pour la détection prédictive d'incendies, intégrant LangChain pour l'analyse intelligente des données et des outils embarqués pour le traitement edge computing.",
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Recharts", "Python", "Machine Learning", "LLM", "LangChain", "IoT", "ESP32", "Edge Computing"],
      category: "IoT & Intelligence Artificielle",
      icon: <Globe className="w-8 h-8" />,
      features: [
        "Surveillance en temps réel des températures intérieure et extérieure",
        "Détection automatique des risques d'incendie basée sur l'écart de température",
        "Modèles IA/ML pour la prédiction et l'analyse intelligente",
        "Intégration LangChain pour le traitement intelligent des données de capteurs",
        "Système de notifications et alertes avec buzzer",
        "Gestion et configuration des capteurs à distance",
        "Dashboard avec graphiques et historique 24h",
        "Interface PWA responsive et offline-first",
        "Edge computing avec ESP32 pour traitement local des données",
        "Indicateurs visuels avec Glass morphism et animations fluides",
        "Filtrage et statistiques des alertes"
      ],
      github: "https://github.com/Jeanelsonmahafaly/iot-ia",
      demo: "https://iot-fire.onrender.com/"
    },
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
      ],
      github: "#",
      demo: "#"
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
      ],
      github: "#",
      demo: "#"
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
      ],
      github: "#",
      demo: "#"
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
      ],
      github: "#",
      demo: "#"
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
              className={`bg-[#030712] rounded-2xl p-8 themed-border themed-border-hover card-glow transition-all duration-500 ${
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
                <h4 className="font-semibold text-white mb-3 flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                  Technologies & Outils
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex} 
                      className="flex items-center gap-2 bg-[#1F2937] hover:bg-[#374151] rounded-lg px-3 py-2 transition-colors border border-[#374151] hover:border-[#10B981]"
                      title={tech}
                    >
                      <img 
                        src={getTechIcon(tech)}
                        alt={tech}
                        className="w-4 h-4 object-contain"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      <span className="text-gray-300 text-xs font-medium hover:text-[#10B981] transition-colors">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  asChild
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2 border-[#374151] text-gray-300 hover:bg-[#1F2937] hover:border-[#10B981] hover:text-[#10B981] btn-micro-bounce transition-all duration-300"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button 
                  asChild
                  size="sm" 
                  className="flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white border-0 btn-micro-bounce transition-all duration-300"
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Démo
                  </a>
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
