
import React from 'react';
import { Code, Database, Smartphone, Cloud, Globe, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Langages / Frameworks",
      skills: [
        { name: "PHP", level: "Expert", color: "bg-blue-500" },
        { name: "Symfony", level: "Expert", color: "bg-green-500" },
        { name: "Python", level: "Avancé", color: "bg-yellow-500" },
        { name: "Django", level: "Avancé", color: "bg-green-600" },
        { name: "JavaScript", level: "Expert", color: "bg-yellow-400" },
        { name: "React", level: "Expert", color: "bg-blue-400" },
        { name: "Flutter", level: "Avancé", color: "bg-cyan-500" }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Bases de données",
      skills: [
        { name: "MySQL", level: "Expert", color: "bg-orange-500" },
        { name: "PostgreSQL", level: "Avancé", color: "bg-blue-600" },
        { name: "MongoDB", level: "Intermédiaire", color: "bg-green-500" },
        { name: "NoSQL", level: "Intermédiaire", color: "bg-red-500" }
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "DevOps / Cloud",
      skills: [
        { name: "Docker", level: "Avancé", color: "bg-blue-500" },
        { name: "Kubernetes", level: "Intermédiaire", color: "bg-blue-600" },
        { name: "GitHub", level: "Expert", color: "bg-gray-700" },
        { name: "CI/CD", level: "Avancé", color: "bg-green-500" }
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intelligence Artificielle",
      skills: [
        { name: "Keras", level: "Intermédiaire", color: "bg-red-500" },
        { name: "Jupyter", level: "Avancé", color: "bg-orange-500" },
        { name: "PyTorch", level: "Intermédiaire", color: "bg-red-600" },
        { name: "TensorFlow", level: "Intermédiaire", color: "bg-orange-600" }
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Compétences Techniques
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className={`px-3 py-1 rounded-full text-white text-sm ${skill.color}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Langues</h3>
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{lang.flag}</span>
                    <span className="font-medium text-gray-700">{lang.name}</span>
                  </div>
                  <span className="text-gray-600 text-sm">{lang.level}</span>
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
