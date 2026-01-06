import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database, Code2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

const ProjectsSection = () => {
  const { t, i18n } = useTranslation();
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

  // TOUS les projets conservés avec traductions
  const getProjects = () => {
    const isFrench = i18n.language === 'fr';
    
    return [
      {
        title: isFrench ? "Smart Fire Guard - Système Anti-Feu Intelligent IoT" : "Smart Fire Guard - Intelligent IoT Fire Prevention System",
        description: isFrench 
          ? "Application PWA de surveillance et détection d'incendie en temps réel, conçue pour fonctionner avec un ESP32 et des capteurs de température. Système intelligent utilisant des modèles d'IA/ML pour la détection prédictive d'incendies, intégrant LangChain pour l'analyse intelligente des données et des outils embarqués pour le traitement edge computing."
          : "Real-time fire monitoring and detection PWA application, designed to work with ESP32 and temperature sensors. Intelligent system using AI/ML models for predictive fire detection, integrating LangChain for intelligent sensor data analysis and embedded tools for edge computing processing.",
        technologies: ["React 18", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Recharts", "Python", "Machine Learning", "LLM", "LangChain", "IoT", "ESP32", "Edge Computing"],
        category: isFrench ? "IoT & Intelligence Artificielle" : "IoT & Artificial Intelligence",
        icon: <Globe className="w-8 h-8" />,
        features: isFrench ? [
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
        ] : [
          "Real-time monitoring of indoor and outdoor temperatures",
          "Automatic fire risk detection based on temperature differential",
          "AI/ML models for intelligent prediction and analysis",
          "LangChain integration for intelligent sensor data processing",
          "Notification and alert system with buzzer",
          "Remote sensor management and configuration",
          "Dashboard with charts and 24-hour history",
          "Responsive and offline-first PWA interface",
          "Edge computing with ESP32 for local data processing",
          "Visual indicators with Glass morphism and smooth animations",
          "Alert filtering and statistics"
        ],
        github: "https://github.com/Jeanelsonmahafaly/iot-ia",
        demo: "https://iot-fire.onrender.com/"
      },
      {
        title: isFrench ? "DRIM VTC - Plateforme de Gestion" : "DRIM VTC - Management Platform",
        description: isFrench 
          ? "Application web complète pour la gestion des services VTC avec interface utilisateur avancée et système de réservation en temps réel."
          : "Comprehensive web application for VTC service management with advanced user interface and real-time booking system.",
        technologies: ["Symfony", "React", "TypeScript", "Docker", "MongoDB"],
        category: isFrench ? "Application Web" : "Web Application",
        icon: <Globe className="w-8 h-8" />,
        features: isFrench ? [
          "Interface utilisateur multi-fonctionnelle",
          "Système de réservation en temps réel",
          "Architecture microservices avec Docker",
          "Tests automatisés et débogage fonctionnel"
        ] : [
          "Multi-functional user interface",
          "Real-time booking system",
          "Microservices architecture with Docker",
          "Automated testing and functional debugging"
        ],
        github: "#",
        demo: "#"
      },
      {
        title: isFrench ? "FINTECH - Système de Loteries" : "FINTECH - Lottery System",
        description: isFrench 
          ? "Application mobile et backend pour la gestion des tickets de loteries avec validation avancée et intégration d'APIs tierces."
          : "Mobile application and backend for lottery ticket management with advanced validation and third-party API integration.",
        technologies: ["Flutter", "Symfony", "Angular", "API REST"],
        category: "Mobile & Backend",
        icon: <Smartphone className="w-8 h-8" />,
        features: isFrench ? [
          "Application mobile native Flutter",
          "Algorithmes de validation des tickets",
          "Intégration d'APIs tierces",
          "Architecture distribuée scalable"
        ] : [
          "Native Flutter mobile application",
          "Ticket validation algorithms",
          "Third-party API integration",
          "Scalable distributed architecture"
        ],
        github: "#",
        demo: "#"
      },
      {
        title: isFrench ? "Classification d'Images Médicales IA" : "AI Medical Image Classification",
        description: isFrench 
          ? "Système d'intelligence artificielle pour la classification automatique d'images médicales utilisant des réseaux de neurones convolutifs."
          : "Artificial intelligence system for automatic medical image classification using convolutional neural networks.",
        technologies: ["Python", "PyTorch", "Keras", "TensorFlow", "Jupyter"],
        category: isFrench ? "Intelligence Artificielle" : "Artificial Intelligence",
        icon: <Database className="w-8 h-8" />,
        features: isFrench ? [
          "Réseaux de neurones convolutifs",
          "Préprocessing d'images médicales",
          "Métriques de performance avancées",
          "Interface Jupyter pour l'analyse"
        ] : [
          "Convolutional neural networks",
          "Medical image preprocessing",
          "Advanced performance metrics",
          "Jupyter interface for analysis"
        ],
        github: "#",
        demo: "#"
      },
      {
        title: isFrench ? "Business Kintana - Système Hospitalier" : "Business Kintana - Hospital System",
        description: isFrench 
          ? "Application web robuste pour la gestion des systèmes hospitaliers avec tableaux de bord analytiques et modules de demandes."
          : "Robust web application for hospital system management with analytical dashboards and request modules.",
        technologies: ["Flutter", "Power BI", "DAX", "Oracle"],
        category: isFrench ? "Système de Santé" : "Healthcare System",
        icon: <Code2 className="w-8 h-8" />,
        features: isFrench ? [
          "Gestion complète des systèmes hospitaliers",
          "Tableaux de bord Power BI",
          "Optimisation des performances",
          "Interface utilisateur intuitive"
        ] : [
          "Comprehensive hospital system management",
          "Power BI dashboards",
          "Performance optimization",
          "Intuitive user interface"
        ],
        github: "#",
        demo: "#"
      }
    ];
  };

  const projects = getProjects();

  return (
    <section id="projects" ref={ref} className="py-20 bg-[#111827] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('projects.myProjects')} <span className="text-[#10B981]">{t('projects.projectsHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-[#10B981] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('projects.subtitle')}
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
                  {t('projects.features')}
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
                  {t('projects.technologies')}
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
                    {t('projects.viewCode')}
                  </a>
                </Button>
                <Button 
                  asChild
                  size="sm" 
                  className="flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white border-0 btn-micro-bounce transition-all duration-300"
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    {t('projects.viewDemo')}
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
            {t('projects.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
