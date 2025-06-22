
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
      period: "Juin 2025 - À ce jour",
      company: "ESN ILOMAD",
      position: "Développeur Back-end .NET",
      location: "Madagascar",
      type: "CDI",
      description: "Développement de services back-end dans une architecture microservices avec déploiement sur Microsoft Azure.",
      tasks: [
        "Développement de services back-end dans une architecture microservices",
        "Conception et implémentation d'APIs REST sécurisées",
        "Mise en place de pipelines CI/CD pour les déploiements automatisés",
        "Déploiement des applications sur Microsoft Azure (App Service, Azure SQL)",
        "Collaboration via Jira et gestion du code source via GitLab"
      ],
      technologies: [".NET", "React", "ASP.NET Core", "Docker", "GitLab", "Jira", "Azure"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      period: "Fév 2024 - Juin 2025",
      company: "ESN RTS LINE",
      position: "Développeur Fullstack Symfony",
      location: "Madagascar",
      type: "CDI",
      description: "Développement robuste de back-ends et d'interfaces utilisateurs intuitives avec tests automatisés.",
      tasks: [
        "Analyse approfondie des besoins fonctionnels et techniques",
        "Développement robuste de back-ends et d'interfaces utilisateurs intuitives",
        "Garantie de la qualité du code par la mise en place de tests fonctionnels et unitaires",
        "Déploiement efficace et sécurisé grâce à des pipelines CI/CD automatisés"
      ],
      technologies: ["Symfony", "Angular", "Webpack", "jQuery", "Ajax", "GitLab", "Docker", "Kubernetes", "Firebase"],
      color: "from-green-500 to-teal-500"
    },
    {
      period: "Jan 2024",
      company: "EMIT - EMITECH",
      position: "Développeur Back-end Symfony",
      location: "Madagascar",
      type: "Travail en équipe",
      description: "Développement d'une application mobile pour la gestion des tickets de tombola du 25ᵉ anniversaire de l'EMIT.",
      tasks: [
        "Génération de codes QR uniques pour chaque ticket",
        "Implémentation d'algorithmes avancés pour la sécurisation des tickets",
        "Déploiement du back-end sur la plateforme Tranokala Malagasy"
      ],
      technologies: ["Symfony", "Flutter", "GitHub"],
      color: "from-orange-500 to-amber-500"
    },
    {
      period: "Déc 2023 - Jan 2024",
      company: "EMIT",
      position: "Développeur IA",
      location: "Madagascar",
      type: "Projet d'école - mini mémoire",
      description: "Développement d'un système de classification d'images d'animaux par intelligence artificielle.",
      tasks: [
        "Collecte de dataset d'images d'animaux provenant de sources en ligne",
        "Classification d'images avec un modèle de réseau de neurones convolutif",
        "Entraînement et évaluation des performances du modèle"
      ],
      technologies: ["Jupyter", "Python", "Keras", "TensorFlow"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      period: "Nov 2023",
      company: "CHU Andrainjato",
      position: "Datawarehouse Engineer",
      location: "Madagascar",
      type: "Stage",
      description: "Développement d'un data warehouse pour stocker et centraliser les données hospitalières.",
      tasks: [
        "Collecte de données et développement d'un pipeline ETL",
        "Modélisation et structuration du Data Warehouse",
        "Création de modèles de données et développement de tableaux de bord"
      ],
      technologies: ["Python", "Power BI", "DAX", "Oracle"],
      color: "from-emerald-500 to-green-500"
    },
    {
      period: "Sept - Nov 2023",
      company: "CHU Andrainjato",
      position: "Développeur Back-end Symfony",
      location: "Madagascar",
      type: "Stage - Équipe SUPERNOVA",
      description: "Solution numérique pour optimiser la gestion des rendez-vous et améliorer la communication patient-médecin.",
      tasks: [
        "Développement d'une plateforme de gestion des rendez-vous médicaux",
        "Implémentation d'un système de communication sécurisé pour l'envoi d'ordonnances",
        "Déploiement et intégration dans l'environnement hospitalier"
      ],
      technologies: ["Symfony", "React", "Flutter", "MySQL"],
      color: "from-teal-500 to-cyan-500"
    },
    {
      period: "Mai - Oct 2023",
      company: "ESN ARATO",
      position: "Développeur Backend .NET",
      location: "Madagascar",
      type: "Stage / Alternance",
      description: "Développement d'applications de gestion et de paris sportifs avec architecture microservices.",
      tasks: [
        "Application de gestion de stock d'hôtel (Zomatel - Fianarantsoa)",
        "Application mobile et bot messenger pour paris sportifs",
        "Architecture microservice en Spring Boot",
        "Développement d'un chatbot Messenger avec Ampalibe"
      ],
      technologies: [".NET", "Angular", "Flutter", "Ampalibe", "Docker", "Ngrok", "MySQL", "GitLab"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      period: "Mai - Oct 2023",
      company: "LAZAN'I BETSILEO",
      position: "Développeur .NET",
      location: "Madagascar",
      type: "Stage",
      description: "Conception et réalisation d'une plateforme e-commerce pour la vente de vin.",
      tasks: [
        "Développement d'une application d'achat de vins",
        "Navigation par catégories, ajout au panier",
        "Gestion complète des achats"
      ],
      technologies: [".NET", "jQuery", "MySQL", "GitHub"],
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Expérience <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Professionnelle</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Plus de 2 ans d'expérience dans le développement d'applications innovantes
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full hidden md:block"></div>

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
                        <h5 className="text-white font-medium mb-2 text-sm">Missions réalisées :</h5>
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
