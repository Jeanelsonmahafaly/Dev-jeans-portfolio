
import React, { useEffect, useRef } from 'react';
import { Code, Database, Smartphone, Cloud, Globe, Brain, Shield, Wrench, GitBranch, Layers, Settings, Zap, BarChart, Lock, Server, Monitor } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Hard Skills data avec icônes correspondantes
  const hardSkills = [
    // Langages / Frameworks
    { name: "JavaScript", icon: <Code className="w-6 h-6" />, category: "Frontend" },
    { name: "React", icon: <Code className="w-6 h-6" />, category: "Frontend" },
    { name: "Angular", icon: <Code className="w-6 h-6" />, category: "Frontend" },
    { name: "PHP", icon: <Code className="w-6 h-6" />, category: "Backend" },
    { name: "Laravel", icon: <Server className="w-6 h-6" />, category: "Backend" },
    { name: "Symfony", icon: <Server className="w-6 h-6" />, category: "Backend" },
    { name: "Python", icon: <Code className="w-6 h-6" />, category: "Backend" },
    { name: "Django", icon: <Server className="w-6 h-6" />, category: "Backend" },
    { name: "C#", icon: <Code className="w-6 h-6" />, category: "Backend" },
    { name: ".NET", icon: <Server className="w-6 h-6" />, category: "Backend" },
    { name: "Entity Framework", icon: <Database className="w-6 h-6" />, category: "Backend" },
    { name: "Flutter", icon: <Smartphone className="w-6 h-6" />, category: "Mobile" },
    { name: "React Native", icon: <Smartphone className="w-6 h-6" />, category: "Mobile" },
    
    // Gestion de versions
    { name: "Git", icon: <GitBranch className="w-6 h-6" />, category: "DevOps" },
    { name: "GitLab", icon: <GitBranch className="w-6 h-6" />, category: "DevOps" },
    { name: "GitHub", icon: <GitBranch className="w-6 h-6" />, category: "DevOps" },
    
    // Bases de données & Big Data
    { name: "MySQL", icon: <Database className="w-6 h-6" />, category: "Database" },
    { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, category: "Database" },
    { name: "Oracle", icon: <Database className="w-6 h-6" />, category: "Database" },
    { name: "MongoDB", icon: <Database className="w-6 h-6" />, category: "NoSQL" },
    { name: "HDFS", icon: <Server className="w-6 h-6" />, category: "BigData" },
    { name: "Spark SQL", icon: <BarChart className="w-6 h-6" />, category: "BigData" },
    
    // BI & Data Warehouse
    { name: "Power BI", icon: <BarChart className="w-6 h-6" />, category: "BI" },
    { name: "Talend", icon: <Settings className="w-6 h-6" />, category: "ETL" },
    { name: "SSIS", icon: <Settings className="w-6 h-6" />, category: "ETL" },
    { name: "SSAS", icon: <BarChart className="w-6 h-6" />, category: "BI" },
    { name: "SSRS", icon: <Monitor className="w-6 h-6" />, category: "BI" },
    
    // Réseaux & Sécurité
    { name: "Firewall", icon: <Shield className="w-6 h-6" />, category: "Security" },
    { name: "Proxy", icon: <Shield className="w-6 h-6" />, category: "Security" },
    
    // Architecture
    { name: "Microservices", icon: <Layers className="w-6 h-6" />, category: "Architecture" },
    
    // Intelligence Artificielle
    { name: "Keras", icon: <Brain className="w-6 h-6" />, category: "AI" },
    { name: "NumPy", icon: <Brain className="w-6 h-6" />, category: "AI" },
    { name: "Pandas", icon: <Brain className="w-6 h-6" />, category: "AI" },
    { name: "PyTorch", icon: <Brain className="w-6 h-6" />, category: "AI" },
    { name: "TensorFlow", icon: <Brain className="w-6 h-6" />, category: "AI" },
    { name: "OpenAI", icon: <Brain className="w-6 h-6" />, category: "AI" },
    { name: "LangChain", icon: <Brain className="w-6 h-6" />, category: "AI" },
    { name: "Hugging Face", icon: <Brain className="w-6 h-6" />, category: "AI" },
    
    // Automatisation
    { name: "n8n", icon: <Zap className="w-6 h-6" />, category: "Automation" },
    { name: "Zapier", icon: <Zap className="w-6 h-6" />, category: "Automation" },
    { name: "Make", icon: <Zap className="w-6 h-6" />, category: "Automation" },
    { name: "Selenium", icon: <Settings className="w-6 h-6" />, category: "Automation" },
    { name: "BeautifulSoup", icon: <Code className="w-6 h-6" />, category: "Scraping" },
    { name: "Puppeteer", icon: <Settings className="w-6 h-6" />, category: "Scraping" },
    
    // Déploiement & Monitoring
    { name: "Docker", icon: <Server className="w-6 h-6" />, category: "DevOps" },
    { name: "Grafana", icon: <Monitor className="w-6 h-6" />, category: "Monitoring" },
    { name: "Prometheus", icon: <Monitor className="w-6 h-6" />, category: "Monitoring" },
    { name: "Jupyter", icon: <Code className="w-6 h-6" />, category: "Development" },
    { name: "Postman", icon: <Settings className="w-6 h-6" />, category: "API" },
    { name: "Swagger", icon: <Settings className="w-6 h-6" />, category: "API" },
    { name: "Jira", icon: <Settings className="w-6 h-6" />, category: "Project" }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    let animationId: number;
    let isRunning = true;

    const autoScroll = () => {
      if (!isRunning) return;
      
      scrollPosition += scrollSpeed;
      const maxScroll = carousel.scrollWidth / 2; // Puisqu'on duplique les skills
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      carousel.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(autoScroll);
    };

    // Démarrer l'animation
    animationId = requestAnimationFrame(autoScroll);

    // Pause on hover
    const handleMouseEnter = () => {
      isRunning = false;
      if (animationId) cancelAnimationFrame(animationId);
    };
    
    const handleMouseLeave = () => {
      isRunning = true;
      animationId = requestAnimationFrame(autoScroll);
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      isRunning = false;
      if (animationId) cancelAnimationFrame(animationId);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Langages / Frameworks",
      skills: [
        { name: "JavaScript", level: 90, color: "bg-yellow-400" },
        { name: "React", level: 85, color: "bg-blue-400" },
        { name: "Angular", level: 80, color: "bg-red-500" },
        { name: "PHP", level: 88, color: "bg-purple-500" },
        { name: "Laravel", level: 82, color: "bg-red-600" },
        { name: "Symfony", level: 90, color: "bg-green-500" },
        { name: "Python", level: 85, color: "bg-yellow-500" },
        { name: "Django", level: 80, color: "bg-green-600" },
        { name: "Ampalibe", level: 75, color: "bg-blue-500" },
        { name: "C#", level: 88, color: "bg-purple-600" },
        { name: ".NET", level: 90, color: "bg-blue-600" },
        { name: "Entity Framework Core", level: 85, color: "bg-indigo-500" },
        { name: "Mobile", level: 80, color: "bg-green-400" },
        { name: "Flutter", level: 82, color: "bg-cyan-500" }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Bases de données",
      skills: [
        { name: "MySQL", level: 90, color: "bg-orange-500" },
        { name: "PostgreSQL", level: 85, color: "bg-blue-600" },
        { name: "Oracle", level: 80, color: "bg-red-500" },
        { name: "NoSQL", level: 75, color: "bg-green-500" },
        { name: "MongoDB", level: 78, color: "bg-green-600" }
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Réseau / Sécurité",
      skills: [
        { name: "LAN, MAN, WAN", level: 75, color: "bg-blue-500" },
        { name: "Firewall", level: 70, color: "bg-red-500" },
        { name: "Proxy", level: 72, color: "bg-orange-500" }
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Architecture Logicielle",
      skills: [
        { name: "Monolithique", level: 85, color: "bg-gray-600" },
        { name: "Microservice", level: 88, color: "bg-blue-500" }
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "APIs et services web",
      skills: [
        { name: "SOAP", level: 75, color: "bg-purple-500" },
        { name: "REST", level: 90, color: "bg-green-500" },
        { name: "GraphQL", level: 78, color: "bg-pink-500" }
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligence Artificielle",
      skills: [
        { name: "Keras", level: 80, color: "bg-red-500" },
        { name: "NumPy", level: 82, color: "bg-blue-500" },
        { name: "Pandas", level: 85, color: "bg-purple-500" },
        { name: "Jupyter", level: 88, color: "bg-orange-500" },
        { name: "TensorFlow", level: 80, color: "bg-orange-600" }
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Outils",
      skills: [
        { name: "Docker", level: 85, color: "bg-blue-500" },
        { name: "Jupyter", level: 88, color: "bg-orange-500" },
        { name: "Ngrok", level: 75, color: "bg-green-500" },
        { name: "Power BI", level: 82, color: "bg-yellow-500" },
        { name: "Azure", level: 80, color: "bg-blue-600" }
      ]
    }
  ];

  const additionalSkills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Git",
      skills: [
        { name: "GitHub", level: 90, color: "bg-gray-700" },
        { name: "GitLab", level: 88, color: "bg-orange-600" }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "SGBD",
      skills: [
        { name: "MySQL", level: 90, color: "bg-orange-500" },
        { name: "PostgreSQL", level: 85, color: "bg-blue-600" },
        { name: "Oracle", level: 80, color: "bg-red-500" },
        { name: "Spark SQL", level: 75, color: "bg-yellow-500" },
        { name: "Power BI", level: 82, color: "bg-yellow-600" },
        { name: "T-SQL", level: 78, color: "bg-blue-500" },
        { name: "SSIS", level: 75, color: "bg-green-500" },
        { name: "SSAS", level: 72, color: "bg-purple-500" }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "BIG DATA / BI/Data Warehouse",
      skills: [
        { name: "Data Warehouse", level: 85, color: "bg-indigo-600" }
      ]
    }
  ];

  const softSkills = [
    "Dynamique", "Autonome", "Rigueur", "Sens de l'innovation",
    "Esprit travail en équipe", "Programmation", "Algorithmique", "Architecture"
  ];

  const languages = [
    { name: "Anglais", level: "Parlé / Technique", flag: "🇬🇧" },
    { name: "Français", level: "Parlé / Écrit", flag: "🇫🇷" },
    { name: "Malagasy", level: "Langue maternelle", flag: "🇲🇬" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Compétences <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Techniques</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>
        
        {/* Hard Skills Section - Carrousel animé */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              ⚙️ <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Hard Skills</span>
            </h3>
            <p className="text-gray-600">Technologies et outils maîtrisés</p>
          </div>
          
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-6">
            <div 
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide"
              style={{ 
                width: 'max-content'
              }}
            >
              {/* Dupliquer les skills pour un effet de loop continu */}
              {[...hardSkills, ...hardSkills].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="group relative flex-shrink-0 w-20 h-20 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer border border-gray-100"
                >
                  <div className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Tooltip au survol */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap z-10">
                    {skill.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                  
                  {/* Badge catégorie */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                      {skill.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gradient fade effects */}
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-blue-50 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-pink-50 to-transparent pointer-events-none"></div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <div className="text-blue-600">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-200"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {additionalSkills.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <div className="text-cyan-600">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-semibold text-cyan-600">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-200"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span key={index} className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Langues</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="font-semibold text-gray-800">{lang.name}</span>
                  </div>
                  <span className="text-gray-600 text-sm font-medium">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
