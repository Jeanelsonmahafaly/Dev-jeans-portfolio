
import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Portfolio = () => {
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
      icon: <Globe className="w-8 h-8" />,
      features: [
        "Gestion complète des systèmes hospitaliers",
        "Tableaux de bord Power BI",
        "Optimisation des performances",
        "Interface utilisateur intuitive"
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Web Application": "bg-blue-100 text-blue-800",
      "Mobile & Backend": "bg-green-100 text-green-800",
      "Intelligence Artificielle": "bg-purple-100 text-purple-800",
      "Healthcare System": "bg-red-100 text-red-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Mes Projets
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Découvrez quelques-uns de mes projets récents qui démontrent mon expertise 
          en développement full-stack, mobile et intelligence artificielle.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-blue-600">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Fonctionnalités clés :</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  Code
                </Button>
                <Button size="sm" className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Démo
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Voir tous mes projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
