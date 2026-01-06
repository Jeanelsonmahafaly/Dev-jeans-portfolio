import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

const Skills = () => {
  const { t } = useTranslation();
  const carouselRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Auto horizontal scroll effect pour le carrousel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.35;
    let animationId;

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      const maxScroll = carousel.scrollWidth / 2;
      if (scrollPosition >= maxScroll) scrollPosition = 0;
      carousel.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(autoScroll);
    };

    setTimeout(() => {
      animationId = requestAnimationFrame(autoScroll);
    }, 100);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  // Observer pour les animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Toutes les technologies avec leurs vraies icônes
  const technologies = [
    // Langages / Frameworks
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
    { name: "Symfony", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    
    // Gestion de versions
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
    
    // Bases de données & Big Data
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    
    // Outils & Frameworks
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    
    // DevOps & Déploiement
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
    { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    
    // Autres technologies importantes
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  ];

  // Compétences principales avec niveaux pour les barres de progression
  const mainSkills: Skill[] = [
    { name: "C# / .NET Core", level: 95 },
    { name: "JavaScript / TypeScript", level: 90 },
    { name: "React / Angular", level: 90 },
    { name: "Python / Django", level: 85 },
    { name: "ASP.NET Core API", level: 95 },
    { name: "SQL Server / PostgreSQL", level: 90 },
    { name: "Docker / Kubernetes", level: 85 },
    { name: "Azure DevOps / CI/CD", level: 90 },
    { name: "TensorFlow / PyTorch", level: 85 },
    { name: "LangChain / RAG / LLMs", level: 90 },
    { name: "Flutter / React Native", level: 85 },
    { name: "MongoDB / Redis", level: 80 },
  ];

  // Diviser les compétences en deux colonnes
  const midPoint = Math.ceil(mainSkills.length / 2);
  const leftColumnSkills = mainSkills.slice(0, midPoint);
  const rightColumnSkills = mainSkills.slice(midPoint);

  const SkillBar = ({ skill, index, delay }: { skill: Skill; index: number; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="mb-5"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm md:text-base font-medium text-gray-200">{skill.name}</span>
        <span className="text-xs md:text-sm text-slate-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-slate-500 to-blue-500 rounded-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section ref={ref} className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('skills.title')} <span className="text-emerald-500">{t('skills.titleHighlight')}</span>
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Carrousel d'icônes avec scroll automatique */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-xl bg-gray-900 border border-gray-800">
            <div 
              ref={carouselRef} 
              className="flex gap-6 py-8 px-4 overflow-x-auto" 
              style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 w-32 h-32 bg-gray-950 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-110 flex flex-col items-center justify-center gap-3 group cursor-pointer border border-gray-800 hover:border-emerald-500 p-4"
                >
                  <div className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="text-xs text-gray-300 group-hover:text-emerald-400 text-center font-medium transition-colors duration-300">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient fade effects */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-950 to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-950 to-transparent pointer-events-none z-10" />
        </div>

        {/* Barres de progression - 2 colonnes */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Colonne Gauche */}
            <div className="space-y-2">
              {leftColumnSkills.map((skill, index) => (
                <SkillBar 
                  key={`left-${skill.name}`} 
                  skill={skill} 
                  index={index}
                  delay={index * 0.05}
                />
              ))}
            </div>

            {/* Colonne Droite */}
            <div className="space-y-2">
              {rightColumnSkills.map((skill, index) => (
                <SkillBar 
                  key={`right-${skill.name}`} 
                  skill={skill} 
                  index={index}
                  delay={(index + leftColumnSkills.length) * 0.05}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
