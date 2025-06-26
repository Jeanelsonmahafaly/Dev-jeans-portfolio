
import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database, Code2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
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
      ],
      gradient: "from-glacier-500 to-glacier-600"
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
      gradient: "from-glacier-600 to-glacier-700"
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
      gradient: "from-glacier-700 to-glacier-800"
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
      gradient: "from-glacier-500 to-glacier-700"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Web Application": "bg-glacier-100 text-glacier-800 border-glacier-200",
      "Mobile & Backend": "bg-glacier-200 text-glacier-900 border-glacier-300",
      "Intelligence Artificielle": "bg-glacier-300 text-glacier-900 border-glacier-400",
      "Healthcare System": "bg-glacier-100 text-glacier-800 border-glacier-200"
    };
    return colors[category as keyof typeof colors] || "bg-glacier-100 text-glacier-800 border-glacier-200";
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-glacier-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-glacier-100 to-glacier-200 rounded-full transform -translate-x-48 -translate-y-48 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-glacier-200 to-glacier-300 rounded-full transform translate-x-48 translate-y-48 opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Mes <span className="bg-gradient-to-r from-glacier-600 to-glacier-500 bg-clip-text text-transparent">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-glacier-600 to-glacier-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez quelques-uns de mes projets récents qui démontrent mon expertise 
            en développement full-stack, mobile et intelligence artificielle.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-glacier-100 hover:border-glacier-200 transform hover:scale-105 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-glacier-500 rounded-full"></div>
                  Fonctionnalités clés
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 text-sm flex items-start gap-2">
                      <div className="w-1 h-1 bg-glacier-400 rounded-full mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-glacier-50 text-glacier-700 px-3 py-1 rounded-full text-xs font-medium border border-glacier-200 hover:bg-glacier-100 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex items-center gap-2 border-glacier-300 text-glacier-700 hover:bg-glacier-50">
                  <Github className="w-4 h-4" />
                  Code
                </Button>
                <Button size="sm" className="flex items-center gap-2 bg-gradient-to-r from-glacier-600 to-glacier-500 hover:from-glacier-700 hover:to-glacier-600">
                  <ExternalLink className="w-4 h-4" />
                  Démo
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="border-glacier-400 text-glacier-700 hover:bg-glacier-50 px-8 py-3">
            Voir tous mes projets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
