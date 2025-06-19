
import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Code, Smartphone, Brain, Building } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
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

    const elements = ref.current?.querySelectorAll('[data-project]');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "DRIM VTC Platform",
      subtitle: "Plateforme de gestion VTC",
      description: "Application web complète pour la gestion des services VTC avec interface utilisateur avancée et système de réservation en temps réel.",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["Symfony", "React", "TypeScript", "Docker", "MongoDB"],
      features: ["Interface multi-fonctionnelle", "Réservation temps réel", "Architecture microservices", "Tests automatisés"],
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500",
      status: "En production"
    },
    {
      id: 2,
      title: "FINTECH Lottery System",
      subtitle: "Système de loteries mobile",
      description: "Application mobile et backend pour la gestion des tickets de loteries avec validation avancée et intégration d'APIs tierces.",
      image: "https://images.unsplash.com/photo-1616627877641-b8c3fb2c9b40?w=500&h=300&fit=crop",
      category: "mobile",
      technologies: ["Flutter", "Symfony", "Angular", "API REST"],
      features: ["App mobile native", "Validation algorithmes", "APIs tierces", "Architecture distribuée"],
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-green-500 to-blue-500",
      status: "Livré"
    },
    {
      id: 3,
      title: "Medical AI Classifier",
      subtitle: "IA classification médicale",
      description: "Système d'intelligence artificielle pour la classification automatique d'images médicales utilisant des réseaux de neurones convolutifs.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      category: "ai",
      technologies: ["Python", "PyTorch", "Keras", "TensorFlow", "Jupyter"],
      features: ["CNN avancés", "Preprocessing médical", "Métriques performance", "Interface Jupyter"],
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      status: "Recherche"
    },
    {
      id: 4,
      title: "Hospital Management",
      subtitle: "Système hospitalier",
      description: "Application web robuste pour la gestion des systèmes hospitaliers avec tableaux de bord analytiques et modules de demandes.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["Flutter", "Power BI", "DAX", "Oracle"],
      features: ["Gestion hospitalière", "Tableaux Power BI", "Optimisation performance", "Interface intuitive"],
      icon: <Building className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      status: "Livré"
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous les projets', count: projects.length },
    { id: 'web', label: 'Applications Web', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ai', label: 'Intelligence Artificielle', count: projects.filter(p => p.category === 'ai').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full transform -translate-x-48 -translate-y-48 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-50 to-pink-50 rounded-full transform translate-x-48 translate-y-48 opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Mes <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez mes réalisations récentes qui démontrent mon expertise technique et ma passion pour l'innovation
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {filter.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeFilter === filter.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-project
              data-index={index}
              className={`group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-80 group-hover:opacity-60 transition-opacity duration-500`}></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">
                  {project.status}
                </div>

                {/* Project Icon */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{project.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Fonctionnalités clés :</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                        <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className={`flex-1 bg-gradient-to-r ${project.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le projet
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group">
            Voir tous mes projets sur GitHub
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
