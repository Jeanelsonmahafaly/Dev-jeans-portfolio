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
      'Selenium': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
      'Beautiful Soup': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'LangGraph': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'LangSmith': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'RAG': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'LLM': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'LangChain': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'Ollama': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'Llama': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    };
    
    return techIcons[name] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
  };

  const getExperiences = () => {
    const isFrench = i18n.language === 'fr';
    
    return [
      {
        period: isFrench ? "Fév 2026 - À ce jour" : "Feb 2026 - Present",
        company: "VISION COMPTE",
        position: isFrench ? "Développeur IA & Data" : "AI & Data Developer",
        location: "Madagascar",
        type: isFrench ? "CDI" : "Permanent Contract",
        description: isFrench 
          ? "Conception et développement de solutions IA et Data complètes pour l'entreprise. Extraction et traitement de données à grande échelle, création d'agents intelligents RAG intégrés aux applications existantes, et automatisation des processus métier. Expertise en intégration de moteurs IA locaux (Ollama, VLM) et optimisation des performances applicatives."
          : "Design and development of complete AI and Data solutions for the company. Large-scale data extraction and processing, creation of intelligent RAG agents integrated into existing applications, and business process automation. Expertise in integrating local AI engines (Ollama, VLM) and application performance optimization.",
        tasks: isFrench ? [
          "Extraction et collecte de données via web scraping (Selenium, Beautiful Soup) pour alimenter les pipelines de données",
          "Création d'applications et services orientés données avec FastAPI pour le traitement et l'exposition des données",
          "Développement d'agents RAG (Retrieval-Augmented Generation) et agents IA intégrés aux applications existantes",
          "Mise en place d'automatisation des workflows métier pour optimiser les processus opérationnels",
          "Optimisation des sites et applications existantes pour améliorer les performances et réduire la latence",
          "Intégration de moteurs IA locaux (Ollama, VLM/Llama) pour des solutions d'IA déployables on-premise"
        ] : [
          "Data extraction and collection via web scraping (Selenium, Beautiful Soup) to feed data pipelines",
          "Creation of data-oriented applications and services with FastAPI for data processing and exposure",
          "Development of RAG (Retrieval-Augmented Generation) agents and AI agents integrated into existing applications",
          "Implementation of business workflow automation to optimize operational processes",
          "Optimization of existing sites and applications to improve performance and reduce latency",
          "Integration of local AI engines (Ollama, VLM/Llama) for on-premise deployable AI solutions"
        ],
        technologies: ["RAG", "LLM", "LangChain", "LangGraph", "LangSmith", "FastAPI", "Beautiful Soup", "Selenium", "Ollama", "Llama"],
        duration: isFrench ? "En cours" : "Ongoing",
        startDate: new Date('2026-02-01')
      },
      {
        period: isFrench ? "Juin 2025 - Fév 2026" : "June 2025 - Feb 2026",
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
        duration: isFrench ? "9 mois" : "9 months",
        startDate: new Date('2025-06-01')
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
        period: isFrench ? "Déc 2023 - Avril 2025" : "Dec 2023 - April 2025",
        company: "EMIT / EMITECH",
        position: isFrench ? "Développeur Back-end & Agent IA" : "Back-end & AI Agent Developer",
        location: "Madagascar",
        type: isFrench ? "Projets d'école, d'équipe & mémoire M2" : "School, Team & Master's Thesis Projects",
        description: isFrench 
          ? "Parcours académique complet au sein d'EMIT/EMITECH : (1) Projets d'école et d'équipe : API Symfony et app Flutter pour la tombola du 25ᵉ anniversaire, système de classification d'images par CNN ; (2) Projet de mémoire M2 : système intelligent de suivi de véhicules avec détection d'anomalies en temps réel et assistant conversationnel RAG."
          : "Complete academic journey at EMIT/EMITECH: (1) School and team projects: Symfony API and Flutter app for 25th anniversary lottery, CNN-based image classification system; (2) Master's thesis M2: intelligent vehicle tracking system with real-time anomaly detection and RAG-based conversational assistant.",
        tasks: isFrench ? [
          "Projets d'école & d'équipe : API REST Symfony (tombola), codes QR sécurisés, app Flutter, classification d'images (CNN, Keras, TensorFlow)",
          "Mémoire M2 : Pipeline d'ingestion de données télématiques Geotab, modèles ML pour détection d'anomalies véhicules",
          "Mémoire M2 : Tableau de bord analytique, interface cartographique, assistant conversationnel RAG (Qdrant, LangChain)",
          "Containerisation Docker, optimisation des performances et monitoring"
        ] : [
          "School & team projects: Symfony REST API (lottery), secure QR codes, Flutter app, image classification (CNN, Keras, TensorFlow)",
          "M2 thesis: Geotab telematics data ingestion pipeline, ML models for vehicle anomaly detection",
          "M2 thesis: Analytical dashboard, map interface, RAG-based conversational assistant (Qdrant, LangChain)",
          "Docker containerization, performance optimization and monitoring"
        ],
        technologies: ["Symfony", "Flutter", "FastAPI", "Python", "Docker", "MySQL", "Keras", "TensorFlow", "Scikit-learn", "LangChain", "RAG", "Jupyter", "GitHub"],
        duration: isFrench ? "1 an 5 mois" : "1 year 5 months",
        startDate: new Date('2023-12-01')
      },
      {
        period: isFrench ? "Sept - Nov 2023" : "Sept - Nov 2023",
        company: "CHU Andrainjato",
        position: isFrench ? "Développeur Back-end & Ingénieur Data Warehouse" : "Back-end Developer & Data Warehouse Engineer",
        location: "Madagascar",
        type: isFrench ? "Stage" : "Internship",
        description: isFrench 
          ? "Double mission au sein du même établissement hospitalier : (1) Développement d'une plateforme numérique complète pour la gestion des rendez-vous médicaux et la communication sécurisée patients-médecins ; (2) Conception d'un data warehouse centralisé et création de tableaux de bord décisionnels pour la prise de décision stratégique."
          : "Dual role within the same healthcare facility: (1) Development of a complete digital platform for medical appointment management and secure patient-doctor communication; (2) Design of a centralized data warehouse and creation of decision-making dashboards for strategic decision-making.",
        tasks: isFrench ? [
          "Plateforme digitale : architecture complète (Symfony, Flutter, React), gestion des rendez-vous, ordonnances électroniques RGPD-compliant",
          "Plateforme digitale : API REST documentée, base MySQL, déploiement et formation des utilisateurs",
          "Data Warehouse : pipeline ETL en Python, modélisation dimensionnelle (Oracle), schémas en étoile",
          "Data Warehouse : tableaux de bord Power BI, KPIs hospitaliers, optimisations DAX"
        ] : [
          "Digital platform: complete architecture (Symfony, Flutter, React), appointment management, GDPR-compliant electronic prescriptions",
          "Digital platform: documented REST API, MySQL database, deployment and user training",
          "Data Warehouse: Python ETL pipeline, dimensional modeling (Oracle), star schema",
          "Data Warehouse: Power BI dashboards, hospital KPIs, DAX optimizations"
        ],
        technologies: ["Symfony", "React", "Flutter", "MySQL", "Python", "Power BI", "Oracle"],
        duration: isFrench ? "4 mois" : "4 months",
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