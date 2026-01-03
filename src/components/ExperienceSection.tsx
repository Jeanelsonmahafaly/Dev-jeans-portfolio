import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Building2, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

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

  // TOUTES les expériences conservées - TRIÉES PAR DATE (du plus récent au plus ancien)
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
      duration: "En cours",
      level: 8,
      startDate: new Date('2025-06-01')
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
      duration: "1 an 4 mois",
      level: 7,
      startDate: new Date('2024-02-01')
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
      duration: "1 mois",
      level: 6,
      startDate: new Date('2024-01-01')
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
      technologies: ["Jupyter", "Python", "Keras", "TensorFlow"],
      duration: "2 mois",
      level: 5,
      startDate: new Date('2023-12-01')
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
      duration: "1 mois",
      level: 4,
      startDate: new Date('2023-11-01')
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
      technologies: ["Symfony", "React", "Flutter", "MySQL"],
      duration: "3 mois",
      level: 3,
      startDate: new Date('2023-09-01')
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
      duration: "6 mois",
      level: 2,
      startDate: new Date('2023-05-01')
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
      duration: "6 mois",
      level: 1,
      startDate: new Date('2023-05-01')
    }
  ].sort((a, b) => b.startDate.getTime() - a.startDate.getTime()); // Tri par date décroissante

  // Calculer les positions pour le graphique avec plus d'espace
  const spacing = 380; // Espacement augmenté entre chaque expérience pour éviter les chevauchements
  const chartHeight = experiences.length * spacing + 400; // Hauteur totale avec padding

  return (
    <section id="experience" ref={ref} className="py-20 bg-[#030712] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Expérience <span className="text-[#10B981]">Professionnelle</span>
          </h2>
          <div className="w-16 h-1 bg-[#10B981] mx-auto rounded-full mb-3"></div>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Plus de 2 ans d'expérience dans le développement d'applications innovantes
          </p>
        </div>

        {/* Graphique/Diagramme d'expérience avec ligne continue */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Ligne centrale continue verticale - traverse tout le graphique */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#10B981] via-[#10B981] to-[#10B981] opacity-40"
              style={{
                top: '0',
                height: `${chartHeight}px`,
                zIndex: 1
              }}
            ></div>
            
            {/* Graphique avec barres et connexions - Plus d'espace entre chaque */}
            <div className="relative" style={{ height: `${chartHeight}px`, minHeight: '2800px' }}>
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;
                // Position verticale basée sur l'index avec espacement régulier augmenté
                const yPosition = (index * spacing) + 200;
                
                return (
                  <motion.div
                    key={index}
                    data-index={index}
                    className={`absolute transition-all duration-700 ${
                      visibleItems.includes(index) 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-0'
                    }`}
                    style={{
                      left: isLeft ? '5%' : 'auto',
                      right: isLeft ? 'auto' : '5%',
                      top: `${yPosition}px`,
                      transform: 'translateY(-50%)',
                      zIndex: 10
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ 
                      opacity: visibleItems.includes(index) ? 1 : 0,
                      y: visibleItems.includes(index) ? 0 : 50
                    }}
                    transition={{ delay: index * 0.15 }}
                  >
                    {/* Ligne de connexion horizontale vers le centre avec flèche animée */}
                    <div
                      className="absolute top-1/2 transform -translate-y-1/2"
                      style={{
                        left: isLeft ? '100%' : 'auto',
                        right: isLeft ? 'auto' : '100%',
                        width: 'calc(50% - 5%)',
                        zIndex: 2,
                        pointerEvents: 'none'
                      }}
                    >
                      <div className="h-0.5 bg-[#10B981]/40 w-full rounded" />
                      <motion.div
                        className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center shadow-md mt-[-0.75rem]"
                        animate={{ x: [isLeft ? '-10%' : '10%', 0, isLeft ? '-10%' : '10%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5l8 7-8 7" stroke="#021015" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.div>
                    </div>
                    
                    {/* Point de connexion sur la ligne centrale */}
                    <div 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-[#10B981] rounded-full border-4 border-[#030712] z-20 shadow-lg shadow-[#10B981]/50"
                      style={{
                        left: '50%'
                      }}
                    ></div>
                    
                    {/* Carte d'expérience AGRANDIE avec TOUS les détails */}
                    <div 
                      className={`glass rounded-xl p-7 themed-border themed-border-hover card-glow w-[420px] md:w-[520px] transition-all duration-300 mb-8 ${
                        isLeft ? 'mr-20 hover:-translate-x-2' : 'ml-20 hover:translate-x-2'
                      }`}>
                      {/* En-tête avec plus d'espace */}
                      <div className="flex items-center gap-3 mb-5">
                        <Building2 size={20} className="text-[#10B981]" />
                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                        <span className="ml-auto px-3 py-1.5 bg-[#10B981]/20 text-[#10B981] rounded-md text-xs font-medium border border-[#10B981]/30">
                          {exp.type}
                        </span>
                      </div>

                      {/* Position */}
                      <h4 className="text-[#10B981] font-semibold text-base mb-4">{exp.position}</h4>

                      {/* Période, durée et localisation avec plus d'espace */}
                      <div className="space-y-2 mb-5">
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <Calendar size={14} className="text-[#10B981]" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <TrendingUp size={14} className="text-[#10B981]" />
                          <span>Durée : {exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <MapPin size={14} className="text-[#10B981]" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description complète */}
                      <div className="mb-5">
                        <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                      </div>

                      {/* Missions réalisées - TOUTES les tâches affichées */}
                      <div className="mb-5">
                        <h5 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-[#10B981]" />
                          Missions réalisées :
                        </h5>
                        <ul className="space-y-2">
                          {exp.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="text-gray-400 text-sm flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full mt-2 flex-shrink-0"></span>
                              <span className="leading-relaxed">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies - TOUTES affichées */}
                      <div>
                        <h5 className="text-white font-semibold text-sm mb-3">Technologies utilisées :</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1.5 bg-[#1F2937] text-gray-300 rounded-md text-xs font-medium border border-[#374151] hover:border-[#10B981] hover:text-[#10B981] transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Légende du graphique */}
            <div className="mt-16 flex justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#10B981] rounded-full"></div>
                <span>Expérience actuelle</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#10B981]/50 rounded-full"></div>
                <span>Expériences passées</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
