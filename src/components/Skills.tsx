
import React from 'react';
import { Code, Database, Smartphone, Cloud, Globe, Brain, Shield, Wrench } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
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
