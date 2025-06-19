
import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, ExternalLink, Building } from 'lucide-react';

const ExperienceSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = ref.current?.querySelectorAll('[data-index]');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      period: "Fév 2023 - Présent",
      company: "DRIM VTC LTD - ECRN",
      position: "Développeur Full-Stack Senior",
      location: "Madagascar",
      type: "CDI",
      description: "Développement d'applications web multi-fonctionnelles avec focus sur l'expérience utilisateur.",
      tasks: [
        "Architecture et développement back-end/front-end",
        "Contrôle qualité et tests fonctionnels",
        "Fonctionnalités UX avancées",
        "Applications mobiles natives"
      ],
      technologies: ["Symfony", "React", "Angular", "Docker", "Kubernetes", "MongoDB"],
      color: "from-blue-500 to-purple-500"
    },
    {
      period: "Jan 2024 - Fév 2024",
      company: "DRIM - FINTECH",
      position: "Développeur Mobile & Backend",
      location: "Madagascar",
      type: "Freelance",
      description: "Système de gestion de tickets de loteries avec intégrations API avancées.",
      tasks: [
        "Intégration APIs tierces",
        "Algorithmes de validation",
        "Architecture distribuée",
        "Performance & scalabilité"
      ],
      technologies: ["Flutter", "Symfony", "Angular", "Zephyr"],
      color: "from-green-500 to-blue-500"
    },
    {
      period: "Déc 2023 - Jan 2024",
      company: "ESMT - Projet Recherche",
      position: "Développeur IA",
      location: "Madagascar",
      type: "Projet étudiant",
      description: "Classification d'images médicales par intelligence artificielle.",
      tasks: [
        "Collecte et préparation de datasets",
        "Réseaux de neurones convolutifs",
        "Entraînement et évaluation",
        "Métriques de performance"
      ],
      technologies: ["Python", "PyTorch", "Keras", "TensorFlow", "Jupyter"],
      color: "from-purple-500 to-pink-500"
    },
    {
      period: "Nov 2023",
      company: "Business Kintana",
      position: "Développeur Web",
      location: "Madagascar",
      type: "Freelance",
      description: "Applications web robustes pour systèmes hospitaliers.",
      tasks: [
        "Gestion systèmes hospitaliers",
        "Interface utilisateur optimisée",
        "Modules de demandes",
        "Tableaux de bord analytiques"
      ],
      technologies: ["Flutter", "Power BI", "DAX", "Oracle"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mon <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Parcours</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Plus de 2 ans d'expérience dans le développement d'applications innovantes
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-index={index}
                className={`relative transition-all duration-1000 ${
                  visibleItems.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-blue-500 z-10 hidden md:block"></div>

                  {/* Content Card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 border border-white/10">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                          {exp.type}
                        </span>
                        <div className="flex items-center text-gray-300 text-xs">
                          <Calendar size={12} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-300 text-xs">
                          <MapPin size={12} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Company & Position */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                          <Building size={20} className="text-blue-400" />
                          {exp.company}
                        </h3>
                        <h4 className="text-blue-300 font-medium">{exp.position}</h4>
                        <p className="text-gray-300 text-sm mt-2">{exp.description}</p>
                      </div>

                      {/* Tasks */}
                      <div className="mb-4">
                        <h5 className="text-white font-medium mb-2 text-sm">Réalisations clés :</h5>
                        <ul className="space-y-1">
                          {exp.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="text-gray-300 text-xs flex items-start">
                              <span className="w-1 h-1 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs font-medium hover:bg-white/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
