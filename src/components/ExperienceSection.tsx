import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';

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
      { threshold: 0.2 }
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
      technologies: [".NET", "React", "ASP.NET Core", "Docker", "GitLab", "Jira", "Azure"]
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
      technologies: ["Symfony", "Angular", "Webpack", "jQuery", "Ajax", "GitLab", "Docker", "Kubernetes", "Firebase"]
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
      technologies: ["Symfony", "Flutter", "GitHub"]
    },
    {
      period: "Déc 2023 - Jan 2024",
      company: "EMIT",
      position: "Développeur IA",
      location: "Madagascar",
      type: "Projet d'école",
      description: "Développement d'un système de classification d'images d'animaux par intelligence artificielle.",
      tasks: [
        "Collecte de dataset d'images d'animaux provenant de sources en ligne",
        "Classification d'images avec un modèle de réseau de neurones convolutif",
        "Entraînement et évaluation des performances du modèle"
      ],
      technologies: ["Jupyter", "Python", "Keras", "TensorFlow"]
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
      technologies: ["Python", "Power BI", "DAX", "Oracle"]
    },
    {
      period: "Sept - Nov 2023",
      company: "CHU Andrainjato",
      position: "Développeur Back-end Symfony",
      location: "Madagascar",
      type: "Stage",
      description: "Solution numérique pour optimiser la gestion des rendez-vous et améliorer la communication patient-médecin.",
      tasks: [
        "Développement d'une plateforme de gestion des rendez-vous médicaux",
        "Implémentation d'un système de communication sécurisé pour l'envoi d'ordonnances",
        "Déploiement et intégration dans l'environnement hospitalier"
      ],
      technologies: ["Symfony", "React", "Flutter", "MySQL"]
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
      technologies: [".NET", "Angular", "Flutter", "Ampalibe", "Docker", "Ngrok", "MySQL", "GitLab"]
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
      technologies: [".NET", "jQuery", "MySQL", "GitHub"]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-16 bg-gradient-to-br from-glacier-900 via-glacier-800 to-glacier-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 border border-glacier-500/30 rounded-lg rotate-12"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-glacier-400/20 rounded-lg -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Expérience <span className="text-glacier-400">Professionnelle</span>
          </h2>
          <div className="w-16 h-1 bg-glacier-400 mx-auto rounded-full mb-3"></div>
          <p className="text-glacier-300 text-sm md:text-base max-w-xl mx-auto">
            Plus de 2 ans d'expérience dans le développement d'applications innovantes
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line - Center */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-glacier-400 via-glacier-500 to-glacier-600"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-index={index}
                className={`relative transition-all duration-700 ${
                  visibleItems.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-glacier-400 rounded-full border-2 border-glacier-900 z-10 mt-6"></div>

                {/* Card Container */}
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-24px)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'
                }`}>
                  <div className="bg-glacier-800/60 backdrop-blur-sm rounded-xl p-4 border border-glacier-700/50 hover:border-glacier-500/50 transition-all duration-300 hover:bg-glacier-800/80">
                    {/* Top Row - Type, Date, Location */}
                    <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
                      <span className="px-2 py-0.5 bg-glacier-500 text-white rounded font-medium">
                        {exp.type}
                      </span>
                      <div className="flex items-center text-glacier-300 gap-1">
                        <Calendar size={11} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-glacier-300 gap-1">
                        <MapPin size={11} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Company */}
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 size={16} className="text-glacier-400" />
                      <h3 className="text-base font-bold text-white">{exp.company}</h3>
                    </div>

                    {/* Position */}
                    <h4 className="text-glacier-400 font-semibold text-sm mb-2">{exp.position}</h4>

                    {/* Description */}
                    <p className="text-glacier-200 text-xs mb-3 leading-relaxed">{exp.description}</p>

                    {/* Tasks */}
                    <div className="mb-3">
                      <h5 className="text-white font-medium text-xs mb-1.5">Missions réalisées :</h5>
                      <ul className="space-y-0.5">
                        {exp.tasks.slice(0, 4).map((task, taskIndex) => (
                          <li key={taskIndex} className="text-glacier-300 text-xs flex items-start gap-1.5">
                            <span className="w-1 h-1 bg-glacier-400 rounded-full mt-1.5 flex-shrink-0"></span>
                            <span className="leading-relaxed">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 bg-glacier-900/80 text-glacier-300 rounded text-xs border border-glacier-600/40 hover:border-glacier-400/60 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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
