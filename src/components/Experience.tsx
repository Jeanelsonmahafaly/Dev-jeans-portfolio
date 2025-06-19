
import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: "Fév 2023 à ce jour",
      company: "DRIM VTC LTD - ECRN",
      position: "Développeur d'expérience d'application web, conception et évolution",
      location: "CMS, Symfony, Angular, React, TypeScript",
      tasks: [
        "Développement efficace de back-end et d'interface utilisateur multi-fonctionnels",
        "Contrôle de la qualité du code au travers de tests et de debugs fonctionnels",
        "Mise en place de fonctionnalités avancées pour l'amélioration de l'expérience utilisateur",
        "Développement d'applications mobiles natives"
      ],
      environment: "Symfony, ReactJS, AngularJS, Zephyr, Ajax, GitHub, Docker, Kubernetes, MongoDB"
    },
    {
      period: "Jan 2024 - Fév 2024",
      company: "DRIM - FINTECH (Projet en freelance)",
      position: "Développeur back-end et frontend mobile pour la gestion des tickets de loteries",
      location: "Madagascar",
      tasks: [
        "Intégration d'API tiers pour l'enrichissement de l'expérience utilisateur optimale",
        "Implémentation d'algorithmes avancés pour la validation des tickets",
        "Architecture distribuée pour la scalabilité et haute performance"
      ],
      environment: "Flutter, Symfony, AngularJS, Zephyr"
    },
    {
      period: "Déc 2023 - Jan 2024",
      company: "ESMT - Projet étudiant - Veille informatique",
      position: "Concepteur d'un système de classification d'images médicales par intelligence artificielle",
      location: "Madagascar",
      tasks: [
        "Collecte de dataset d'images d'imagerie provenant de sources fiables",
        "Préprocessing des images avec l'utilisation d'un modèle de réseaux de neurones convolutifs",
        "Entraînement et évaluation du modèle avec des métriques de performance"
      ],
      environment: "Jupyter, Pytorch, Keras, TensorFlow"
    },
    {
      period: "Nov 2023",
      company: "Business Kintana - Freelance",
      position: "Développement d'applications web robustes",
      tasks: [
        "Gestion des systèmes hospitaliers",
        "Amélioration de l'interface utilisateur",
        "Optimisation des performances",
        "Création de modules de demandes et développement de tableaux de bord"
      ],
      environment: "Flutter, Power BI, DAX, Oracle"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Expérience Professionnelle
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{exp.company}</h3>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">{exp.position}</h4>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>
              
              <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                {exp.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="leading-relaxed">{task}</li>
                ))}
              </ul>
              
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-sm text-gray-600">
                  <strong>Environnement :</strong> {exp.environment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
