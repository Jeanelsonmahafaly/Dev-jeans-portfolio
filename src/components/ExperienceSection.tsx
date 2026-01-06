import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ExperienceSection = () => {
  const { t, i18n } = useTranslation();
  const [visibleItems, setVisibleItems] = useState([]);
  const ref = useRef(null);

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
      { threshold: 0.1 }
    );

    const elements = ref.current?.querySelectorAll('[data-index]');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getTechIcon = (name) => {
    const techIcons = {
      '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'ASP.NET Core': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      'Azure DevOps': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      'Azure SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
      'Entity Framework': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      'GitLab': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
      'Jira': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
      'Symfony': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',
      'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      'Webpack': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
      'jQuery': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
      'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      'Keras': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
      'Jupyter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
      'Power BI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
      'Oracle': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
      'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    };
    
    return techIcons[name] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
  };

  const getExperiences = () => {
    const isFrench = i18n.language === 'fr';
    
    return [
      {
        period: isFrench ? "Juin 2025 - À ce jour" : "June 2025 - Present",
        company: "ESN ILOMAD",
        position: isFrench ? "Développeur .NET / Automatisation IA" : ".NET Developer / AI Automation",
        location: "Madagascar",
        type: isFrench ? "CDI" : "Permanent Contract",
        description: isFrench 
          ? "Développement de services back-end robustes dans une architecture microservices moderne avec déploiement sur Microsoft Azure. Intégration avancée de solutions d'automatisation intelligentes basées sur l'IA générative (RAG, LLMs) pour optimiser les processus métier et améliorer l'efficacité opérationnelle."
          : "Development of robust back-end services in a modern microservices architecture with deployment on Microsoft Azure. Advanced integration of intelligent automation solutions based on generative AI (RAG, LLMs) to optimize business processes and improve operational efficiency.",
        tasks: isFrench ? [
          "Architecture et développement de services back-end scalables dans une infrastructure microservices distribuée",
          "Conception et implémentation d'APIs REST sécurisées avec ASP.NET Core, incluant authentification JWT et gestion des autorisations",
          "Mise en place de pipelines CI/CD complets avec Azure DevOps pour automatiser les tests, builds et déploiements",
          "Déploiement et monitoring d'applications sur Microsoft Azure (App Service, Azure SQL Database, Azure Functions)",
          "Intégration de solutions d'automatisation intelligentes basées sur l'IA : RAG (Retrieval-Augmented Generation), orchestration avec LangChain et LLMs",
          "Développement de workflows d'automatisation avec N8N et intégration MCP (Model Context Protocol)",
          "Gestion avancée des données avec Entity Framework Core : migrations, optimisation des requêtes, gestion des transactions",
          "Collaboration agile via Jira (gestion des sprints, tickets, user stories) et versioning du code avec GitLab (merge requests, code reviews)"
        ] : [
          "Architecture and development of scalable back-end services in a distributed microservices infrastructure",
          "Design and implementation of secure REST APIs with ASP.NET Core, including JWT authentication and authorization management",
          "Complete CI/CD pipeline setup with Azure DevOps to automate testing, builds and deployments",
          "Application deployment and monitoring on Microsoft Azure (App Service, Azure SQL Database, Azure Functions)",
          "Integration of intelligent AI-based automation solutions: RAG (Retrieval-Augmented Generation), orchestration with LangChain and LLMs",
          "Automation workflow development with N8N and MCP (Model Context Protocol) integration",
          "Advanced data management with Entity Framework Core: migrations, query optimization, transaction management",
          "Agile collaboration via Jira (sprint management, tickets, user stories) and code versioning with GitLab (merge requests, code reviews)"
        ],
        technologies: [".NET", "ASP.NET Core", "React", "Docker", "Azure DevOps", "Azure SQL", "Entity Framework", "GitLab", "Jira", "LangChain", "RAG", "N8N"],
        duration: isFrench ? "En cours" : "Ongoing",
        startDate: new Date('2025-06-01')
      },
      {
        period: isFrench ? "Nov 2024 - Avril 2025" : "Nov 2024 - April 2025",
        company: "EMIT",
        position: isFrench ? "Développeur Agent IA" : "AI Agent Developer",
        location: "Madagascar",
        type: isFrench ? "Projet de mémoire (M2)" : "Master's Thesis Project (M2)",
        description: isFrench 
          ? "Conception et développement d'un système intelligent de suivi de véhicules intégrant des modèles d'IA pour la détection d'anomalies en temps réel et un assistant conversationnel basé sur RAG. Solution complète combinant télématique, machine learning et interface utilisateur interactive."
          : "Design and development of an intelligent vehicle tracking system integrating AI models for real-time anomaly detection and a RAG-based conversational assistant. Complete solution combining telematics, machine learning and interactive user interface.",
        tasks: isFrench ? [
          "Architecture et implémentation d'un pipeline d'ingestion de données télématiques en temps réel depuis l'API Geotab (vitesse, position GPS, consommation, diagnostics)",
          "Conception et entraînement de modèles de machine learning (Scikit-learn) pour la détection automatique d'anomalies véhicules (conduite agressive, maintenance préventive)",
          "Développement d'un tableau de bord analytique avec visualisation avancée des données et système de classification des anomalies par niveaux de criticité",
          "Création d'une interface cartographique interactive pour le suivi géolocalisé en temps réel et la reconstruction historique d'itinéraires",
          "Intégration d'un assistant conversationnel intelligent basé sur RAG : indexation vectorielle avec Qdrant, orchestration LangChain, requêtes en langage naturel",
          "Containerisation et orchestration complète via Docker : backend Symfony, API FastAPI, base de données MySQL, services IA",
          "Optimisation des performances et monitoring du système pour assurer la scalabilité"
        ] : [
          "Architecture and implementation of a real-time telematics data ingestion pipeline from Geotab API (speed, GPS position, consumption, diagnostics)",
          "Design and training of machine learning models (Scikit-learn) for automatic vehicle anomaly detection (aggressive driving, preventive maintenance)",
          "Development of an analytical dashboard with advanced data visualization and anomaly classification system by criticality levels",
          "Creation of an interactive map interface for real-time geolocated tracking and historical route reconstruction",
          "Integration of an intelligent RAG-based conversational assistant: vector indexing with Qdrant, LangChain orchestration, natural language queries",
          "Complete containerization and orchestration via Docker: Symfony backend, FastAPI API, MySQL database, AI services",
          "Performance optimization and system monitoring to ensure scalability"
        ],
        technologies: ["Symfony", "FastAPI", "Python", "Docker", "MySQL", "Scikit-learn", "LangChain", "RAG"],
        duration: isFrench ? "6 mois" : "6 months",
        startDate: new Date('2024-11-01')
      },
      {
        period: isFrench ? "Fév 2024 - Juin 2025" : "Feb 2024 - June 2025",
        company: "ESN RTS LINE",
        position: isFrench ? "Développeur Fullstack Symfony" : "Fullstack Symfony Developer",
        location: "Madagascar",
        type: isFrench ? "CDI" : "Permanent Contract",
        description: isFrench 
          ? "Développement fullstack d'applications web complexes avec une forte emphase sur la qualité du code et les bonnes pratiques. Intégration de solutions d'intelligence artificielle pour automatiser des tâches répétitives sur des sites existants, améliorant ainsi la productivité et l'expérience utilisateur."
          : "Fullstack development of complex web applications with strong emphasis on code quality and best practices. Integration of artificial intelligence solutions to automate repetitive tasks on existing sites, improving productivity and user experience.",
        tasks: isFrench ? [
          "Analyse approfondie des besoins fonctionnels et techniques avec les clients pour définir des spécifications détaillées et des user stories",
          "Développement robuste de back-ends performants avec Symfony : architecture MVC, services métier, gestion des entités Doctrine",
          "Création d'interfaces utilisateurs modernes et intuitives avec Angular : composants réactifs, gestion d'état, routing",
          "Intégration de solutions d'IA pour l'automatisation de tâches sur sites existants : traitement automatique de contenus, suggestions intelligentes, optimisation de workflows",
          "Garantie de la qualité du code par la mise en place de tests fonctionnels (Behat, PHPUnit) et tests unitaires couvrant les fonctionnalités critiques",
          "Configuration et optimisation de Webpack pour le bundling des assets : code splitting, minification, lazy loading",
          "Implémentation d'interactions dynamiques avec jQuery et Ajax pour des expériences utilisateur fluides",
          "Déploiement efficace et sécurisé via pipelines CI/CD automatisés sur GitLab avec Docker et Kubernetes",
          "Gestion des services Firebase pour l'authentification, le stockage et les notifications push"
        ] : [
          "In-depth analysis of functional and technical requirements with clients to define detailed specifications and user stories",
          "Robust development of high-performance back-ends with Symfony: MVC architecture, business services, Doctrine entity management",
          "Creation of modern and intuitive user interfaces with Angular: reactive components, state management, routing",
          "Integration of AI solutions for task automation on existing sites: automatic content processing, intelligent suggestions, workflow optimization",
          "Code quality assurance through functional testing (Behat, PHPUnit) and unit tests covering critical functionalities",
          "Webpack configuration and optimization for asset bundling: code splitting, minification, lazy loading",
          "Implementation of dynamic interactions with jQuery and Ajax for smooth user experiences",
          "Efficient and secure deployment via automated CI/CD pipelines on GitLab with Docker and Kubernetes",
          "Firebase service management for authentication, storage and push notifications"
        ],
        technologies: ["Symfony", "Angular", "Webpack", "jQuery", "GitLab", "Docker", "Kubernetes", "Firebase"],
        duration: isFrench ? "1 an 4 mois" : "1 year 4 months",
        startDate: new Date('2024-02-01')
      },
      {
        period: isFrench ? "Jan 2024" : "Jan 2024",
        company: "EMIT - EMITECH",
        position: isFrench ? "Développeur Back-end Symfony" : "Symfony Back-end Developer",
        location: "Madagascar",
        type: isFrench ? "Projet d'équipe" : "Team Project",
        description: isFrench 
          ? "Développement d'une solution mobile innovante pour la gestion digitalisée des tickets de tombola à l'occasion du 25ᵉ anniversaire de l'EMIT. Mise en place de mécanismes de sécurisation avancés pour garantir l'unicité et l'authenticité de chaque ticket."
          : "Development of an innovative mobile solution for digitalized lottery ticket management for EMIT's 25th anniversary. Implementation of advanced security mechanisms to guarantee uniqueness and authenticity of each ticket.",
        tasks: isFrench ? [
          "Conception et développement d'une API REST Symfony pour la gestion complète du cycle de vie des tickets de tombola",
          "Génération automatique de codes QR uniques et sécurisés pour chaque ticket avec encodage de métadonnées",
          "Implémentation d'algorithmes cryptographiques avancés pour la sécurisation des tickets et la prévention de la fraude (hashing, signatures numériques)",
          "Développement de l'application mobile Flutter pour la lecture et la validation des tickets en temps réel",
          "Déploiement du backend sur la plateforme Tranokala Malagasy avec configuration serveur et monitoring",
          "Tests de charge et validation de la scalabilité pour gérer un grand nombre de participants simultanés"
        ] : [
          "Design and development of a Symfony REST API for complete lottery ticket lifecycle management",
          "Automatic generation of unique and secure QR codes for each ticket with metadata encoding",
          "Implementation of advanced cryptographic algorithms for ticket security and fraud prevention (hashing, digital signatures)",
          "Development of Flutter mobile application for real-time ticket reading and validation",
          "Backend deployment on Tranokala Malagasy platform with server configuration and monitoring",
          "Load testing and scalability validation to handle large number of simultaneous participants"
        ],
        technologies: ["Symfony", "Flutter", "GitHub"],
        duration: isFrench ? "1 mois" : "1 month",
        startDate: new Date('2024-01-01')
      },
      {
        period: isFrench ? "Déc 2023 - Jan 2024" : "Dec 2023 - Jan 2024",
        company: "EMIT",
        position: isFrench ? "Développeur IA" : "AI Developer",
        location: "Madagascar",
        type: isFrench ? "Projet d'école" : "School Project",
        description: isFrench 
          ? "Développement d'un système de classification automatique d'images d'animaux utilisant le deep learning. Projet académique permettant d'appliquer les concepts théoriques de l'intelligence artificielle à un cas d'usage concret de reconnaissance visuelle."
          : "Development of an automatic animal image classification system using deep learning. Academic project applying theoretical artificial intelligence concepts to a concrete visual recognition use case.",
        tasks: isFrench ? [
          "Collecte et curation d'un dataset d'images d'animaux de qualité provenant de sources en ligne (web scraping, APIs publiques)",
          "Prétraitement et augmentation des données : redimensionnement, normalisation, rotation, flipping pour améliorer la robustesse du modèle",
          "Conception et implémentation d'une architecture de réseau de neurones convolutif (CNN) avec Keras et TensorFlow",
          "Entraînement du modèle avec optimisation des hyperparamètres (learning rate, batch size, dropout) et techniques de régularisation",
          "Évaluation rigoureuse des performances : matrices de confusion, courbes ROC, métriques de précision/recall",
          "Documentation complète du projet et présentation des résultats avec visualisations dans Jupyter Notebook"
        ] : [
          "Collection and curation of quality animal image dataset from online sources (web scraping, public APIs)",
          "Data preprocessing and augmentation: resizing, normalization, rotation, flipping to improve model robustness",
          "Design and implementation of Convolutional Neural Network (CNN) architecture with Keras and TensorFlow",
          "Model training with hyperparameter optimization (learning rate, batch size, dropout) and regularization techniques",
          "Rigorous performance evaluation: confusion matrices, ROC curves, precision/recall metrics",
          "Complete project documentation and results presentation with visualizations in Jupyter Notebook"
        ],
        technologies: ["Jupyter", "Python", "Keras", "TensorFlow"],
        duration: isFrench ? "2 mois" : "2 months",
        startDate: new Date('2023-12-01')
      },
      {
        period: isFrench ? "Nov 2023" : "Nov 2023",
        company: "CHU Andrainjato",
        position: isFrench ? "Datawarehouse Engineer" : "Data Warehouse Engineer",
        location: "Madagascar",
        type: isFrench ? "Stage" : "Internship",
        description: isFrench 
          ? "Conception et mise en place d'un data warehouse centralisé pour consolider les données hospitalières dispersées. Création de tableaux de bord décisionnels pour améliorer la prise de décision stratégique de l'établissement de santé."
          : "Design and implementation of a centralized data warehouse to consolidate dispersed hospital data. Creation of decision-making dashboards to improve strategic decision-making in the healthcare facility.",
        tasks: isFrench ? [
          "Analyse des sources de données hétérogènes de l'hôpital (systèmes de gestion des patients, facturation, stocks, plannings)",
          "Développement d'un pipeline ETL complet en Python : extraction, transformation et chargement des données avec gestion des erreurs",
          "Modélisation dimensionnelle du Data Warehouse selon le modèle en étoile (fait et dimensions) pour optimiser les requêtes analytiques",
          "Structuration des données avec Oracle : création de schémas, tables de faits, tables de dimensions, indexation",
          "Développement de modèles de données pour différents domaines métier (activité médicale, ressources humaines, finances)",
          "Création de tableaux de bord interactifs avec Power BI : KPIs hospitaliers, visualisations, drill-down et rapports automatisés",
          "Optimisation des requêtes DAX pour des performances optimales et création de mesures calculées avancées"
        ] : [
          "Analysis of heterogeneous hospital data sources (patient management systems, billing, inventory, schedules)",
          "Development of complete ETL pipeline in Python: extraction, transformation and data loading with error handling",
          "Dimensional modeling of Data Warehouse using star schema (fact and dimensions) to optimize analytical queries",
          "Data structuring with Oracle: schema creation, fact tables, dimension tables, indexing",
          "Development of data models for different business domains (medical activity, human resources, finances)",
          "Creation of interactive dashboards with Power BI: hospital KPIs, visualizations, drill-down and automated reports",
          "DAX query optimization for optimal performance and creation of advanced calculated measures"
        ],
        technologies: ["Python", "Power BI", "Oracle"],
        duration: isFrench ? "1 mois" : "1 month",
        startDate: new Date('2023-11-01')
      },
      {
        period: isFrench ? "Sept - Nov 2023" : "Sept - Nov 2023",
        company: "CHU Andrainjato",
        position: isFrench ? "Développeur Back-end Symfony" : "Symfony Back-end Developer",
        location: "Madagascar",
        type: isFrench ? "Stage" : "Internship",
        description: isFrench 
          ? "Développement d'une plateforme numérique complète pour moderniser la gestion des rendez-vous médicaux et faciliter la communication sécurisée entre patients et médecins. Solution visant à réduire les temps d'attente et améliorer la qualité du parcours de soins."
          : "Development of a complete digital platform to modernize medical appointment management and facilitate secure communication between patients and doctors. Solution aimed at reducing waiting times and improving quality of care pathway.",
        tasks: isFrench ? [
          "Conception de l'architecture applicative complète : backend Symfony, application mobile Flutter, interface web React",
          "Développement d'une plateforme de gestion intelligente des rendez-vous médicaux avec système de disponibilités et notifications automatiques",
          "Implémentation d'un système de communication sécurisé RGPD-compliant pour l'envoi et la consultation d'ordonnances électroniques",
          "Création d'une API REST documentée pour l'intégration avec les applications mobiles et web",
          "Développement d'interfaces utilisateur adaptatives pour les patients, médecins et personnel administratif",
          "Mise en place de la base de données MySQL avec gestion des relations complexes et optimisation des performances",
          "Déploiement et intégration dans l'infrastructure informatique hospitalière existante avec formation des utilisateurs"
        ] : [
          "Design of complete application architecture: Symfony backend, Flutter mobile app, React web interface",
          "Development of intelligent medical appointment management platform with availability system and automatic notifications",
          "Implementation of GDPR-compliant secure communication system for sending and consulting electronic prescriptions",
          "Creation of documented REST API for integration with mobile and web applications",
          "Development of adaptive user interfaces for patients, doctors and administrative staff",
          "MySQL database setup with complex relationship management and performance optimization",
          "Deployment and integration into existing hospital IT infrastructure with user training"
        ],
        technologies: ["Symfony", "React", "Flutter", "MySQL"],
        duration: isFrench ? "3 mois" : "3 months",
        startDate: new Date('2023-09-01')
      },
      {
        period: isFrench ? "Mai - Oct 2023" : "May - Oct 2023",
        company: "ESN ARATO",
        position: isFrench ? "Développeur Backend .NET" : ".NET Backend Developer",
        location: "Madagascar",
        type: isFrench ? "Stage / Alternance" : "Internship / Apprenticeship",
        description: isFrench 
          ? "Développement de solutions logicielles diversifiées incluant une application de gestion hôtelière et une plateforme de paris sportifs. Expérience formatrice dans la conception d'architectures microservices et le développement de chatbots conversationnels."
          : "Development of diversified software solutions including a hotel management application and a sports betting platform. Formative experience in microservices architecture design and conversational chatbot development.",
        tasks: isFrench ? [
          "Développement d'une application complète de gestion de stock pour l'hôtel Zomatel à Fianarantsoa : .NET backend, Angular frontend",
          "Gestion des entrées/sorties de stock, suivi des inventaires, génération de rapports et alertes de réapprovisionnement",
          "Conception et développement d'une plateforme de paris sportifs avec application mobile Flutter et bot Messenger",
          "Implémentation d'une architecture microservices pour assurer la scalabilité et la maintenabilité de la solution de paris",
          "Développement d'un chatbot Messenger intelligent avec le framework Ampalibe pour l'interaction utilisateur et la prise de paris",
          "Containerisation des services avec Docker pour faciliter le déploiement et la gestion des environnements",
          "Configuration de Ngrok pour l'exposition sécurisée des webhooks et APIs locales",
          "Gestion de la base de données MySQL : modélisation, requêtes optimisées, gestion des transactions",
          "Collaboration en équipe via GitLab : branches features, merge requests, revues de code"
        ] : [
          "Development of complete inventory management application for Zomatel hotel in Fianarantsoa: .NET backend, Angular frontend",
          "Stock entry/exit management, inventory tracking, report generation and restocking alerts",
          "Design and development of sports betting platform with Flutter mobile app and Messenger bot",
          "Implementation of microservices architecture to ensure scalability and maintainability of betting solution",
          "Development of intelligent Messenger chatbot with Ampalibe framework for user interaction and bet placement",
          "Service containerization with Docker to facilitate deployment and environment management",
          "Ngrok configuration for secure exposure of webhooks and local APIs",
          "MySQL database management: modeling, optimized queries, transaction management",
          "Team collaboration via GitLab: feature branches, merge requests, code reviews"
        ],
        technologies: [".NET", "Angular", "Flutter", "Docker", "MySQL", "GitLab"],
        duration: isFrench ? "6 mois" : "6 months",
        startDate: new Date('2023-05-01')
      },
      {
        period: isFrench ? "Mai - Oct 2023" : "May - Oct 2023",
        company: "LAZAN'I BETSILEO",
        position: isFrench ? "Développeur .NET" : ".NET Developer",
        location: "Madagascar",
        type: isFrench ? "Stage" : "Internship",
        description: isFrench 
          ? "Conception et réalisation d'une plateforme e-commerce complète dédiée à la vente de vins. Développement de toutes les fonctionnalités essentielles d'un site marchand moderne avec une attention particulière à l'expérience utilisateur."
          : "Design and implementation of a complete e-commerce platform dedicated to wine sales. Development of all essential features of a modern merchant site with particular attention to user experience.",
        tasks: isFrench ? [
          "Analyse des besoins fonctionnels et conception de l'architecture de la plateforme e-commerce",
          "Développement du backend .NET : gestion du catalogue produits, système de commandes, gestion des utilisateurs",
          "Création d'une interface utilisateur intuitive avec jQuery pour des interactions dynamiques et fluides",
          "Implémentation d'un système de navigation par catégories de vins (rouges, blancs, rosés, cépages, régions)",
          "Développement d'un système de panier d'achat avec calcul dynamique des prix, quantités et frais de livraison",
          "Gestion complète du processus d'achat : validation des commandes, paiement, suivi des livraisons",
          "Conception et optimisation de la base de données MySQL pour les produits, clients, commandes et stocks",
          "Versioning du code et collaboration via GitHub avec gestion des branches et déploiements"
        ] : [
          "Functional requirements analysis and e-commerce platform architecture design",
          "Development of .NET backend: product catalog management, order system, user management",
          "Creation of intuitive user interface with jQuery for dynamic and smooth interactions",
          "Implementation of wine category navigation system (red, white, rosé, grape varieties, regions)",
          "Development of shopping cart system with dynamic calculation of prices, quantities and delivery fees",
          "Complete purchase process management: order validation, payment, delivery tracking",
          "Design and optimization of MySQL database for products, customers, orders and inventory",
          "Code versioning and collaboration via GitHub with branch management and deployments"
        ],
        technologies: [".NET", "jQuery", "MySQL", "GitHub"],
        duration: isFrench ? "6 mois" : "6 months",
        startDate: new Date('2023-05-01')
      }
    ];
  };

  const experiences = getExperiences().sort((a, b) => b.startDate.getTime() - a.startDate.getTime());

  // Composant de carte réutilisable
  const ExperienceCard = ({ exp }) => (
    <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
      <div className="flex items-start justify-between mb-4 md:mb-6 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <Building2 size={20} className="text-emerald-500 flex-shrink-0 md:w-[22px] md:h-[22px]" />
          <h3 className="text-lg md:text-xl font-bold text-white">{exp.company}</h3>
        </div>
        <span className="px-3 md:px-4 py-1 md:py-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg text-xs md:text-sm font-semibold border border-emerald-500/30">
          {exp.type}
        </span>
      </div>

      <h4 className="text-emerald-400 font-bold text-base md:text-lg mb-4 md:mb-5">{exp.position}</h4>

      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
        <div className="flex items-center gap-2 md:gap-3 text-gray-400 flex-wrap">
          <Calendar size={14} className="text-emerald-500 flex-shrink-0 md:w-4 md:h-4" />
          <span className="text-xs md:text-sm font-medium">{exp.period}</span>
          <span className="text-emerald-500 mx-1 md:mx-2">•</span>
          <span className="text-xs md:text-sm">{exp.duration}</span>
        </div>
        <div className="flex items-center gap-2 md:gap-3 text-gray-400">
          <MapPin size={14} className="text-emerald-500 flex-shrink-0 md:w-4 md:h-4" />
          <span className="text-xs md:text-sm">{exp.location}</span>
        </div>
      </div>

      <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 bg-gray-950/50 p-3 md:p-4 rounded-lg border border-gray-800">
        {exp.description}
      </p>

      <div className="mb-4 md:mb-6">
        <h5 className="text-white font-bold text-xs md:text-sm mb-3 md:mb-4 flex items-center gap-2">
          <CheckCircle2 size={16} className="text-emerald-500 md:w-[18px] md:h-[18px]" />
          Missions réalisées
        </h5>
        <ul className="space-y-2 md:space-y-3">
          {exp.tasks.map((task, taskIndex) => (
            <li key={taskIndex} className="text-gray-400 text-xs md:text-sm flex items-start gap-2 md:gap-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></span>
              <span className="leading-relaxed">{task}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="text-white font-bold text-xs md:text-sm mb-3 md:mb-4">Technologies utilisées</h5>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {exp.technologies.map((tech, techIndex) => (
            <div
              key={techIndex}
              className="flex items-center gap-1.5 md:gap-2 bg-gray-950 px-2 md:px-3 py-1.5 md:py-2 rounded-lg border border-gray-800 hover:border-emerald-500 transition-all group"
            >
              <img 
                src={getTechIcon(tech)} 
                alt={tech}
                className="w-4 h-4 md:w-5 md:h-5 object-contain group-hover:scale-110 transition-transform"
              />
              <span className="text-xs text-gray-300 group-hover:text-emerald-400 transition-colors font-medium">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" ref={ref} className="py-12 md:py-20 bg-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            {t('experience.title')} <span className="text-emerald-500">{t('experience.titleHighlight')}</span>
          </h2>
          <div className="w-12 md:w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-3 md:mb-4"></div>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-4">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Version Mobile - Liste simple */}
        <div className="md:hidden space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-index={index}
              className={`transition-all duration-700 ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <ExperienceCard exp={exp} />
            </div>
          ))}
        </div>

        {/* Version Desktop - Timeline avec alternance */}
        <div className="hidden md:block max-w-7xl mx-auto relative">
          {/* Ligne centrale verticale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent z-10"></div>
          
          <div className="space-y-0">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  data-index={index}
                  className={`relative transition-all duration-700 ${
                    visibleItems.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    marginTop: index === 0 ? '0' : '-35%',
                    marginBottom: index === experiences.length - 1 ? '0' : '6rem'
                  }}
                >
                  {/* Conteneur avec grid */}
                  <div className="grid grid-cols-2 gap-16 items-center">
                    {/* Colonne gauche */}
                    <div className={`${isLeft ? 'block' : 'invisible'}`}>
                      {isLeft && <ExperienceCard exp={exp} />}
                    </div>

                    {/* Point central avec flèche */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center">
                      <div className={`flex items-center ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className="w-6 h-6 bg-emerald-500 rounded-full border-4 border-gray-950 shadow-lg shadow-emerald-500/50"></div>
                        <div className={`w-16 h-0.5 bg-emerald-500/60 ${isLeft ? 'mr-1' : 'ml-1'}`}></div>
                        <ArrowRight className={`text-emerald-500 ${isLeft ? 'rotate-180' : ''}`} size={24} />
                      </div>
                    </div>

                    {/* Colonne droite */}
                    <div className={`${!isLeft ? 'block' : 'invisible'}`}>
                      {!isLeft && <ExperienceCard exp={exp} />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Légende */}
        <div className="mt-12 md:mt-20 flex justify-center items-center gap-6 md:gap-8 text-xs md:text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"></div>
            <span>{t('experience.currentExperience')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-emerald-500/50 rounded-full"></div>
            <span>{t('experience.pastExperiences')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;