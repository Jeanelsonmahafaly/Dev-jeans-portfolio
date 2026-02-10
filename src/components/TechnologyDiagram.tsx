import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Globe, Server, Database, Layers, Sparkles, Brain, Wrench } from 'lucide-react';

interface TechItem {
  name: string;
  icon?: string;
  category: string;
  subcategory?: string;
}

const TechnologyDiagram: React.FC = () => {
  const { i18n } = useTranslation();
  const isFrench = i18n.language === 'fr';

  // Technologies organisées par catégorie et sous-catégorie
  const technologies: TechItem[] = [
    // Frontend - Languages
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'frontend', subcategory: 'language' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'frontend', subcategory: 'language' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'frontend', subcategory: 'language' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'frontend', subcategory: 'language' },
    
    // Frontend - Frameworks
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend', subcategory: 'framework' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', category: 'frontend', subcategory: 'framework' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', category: 'frontend', subcategory: 'framework' },
    
    // Frontend - Libraries
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', category: 'frontend', subcategory: 'library' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', category: 'frontend', subcategory: 'library' },
    
    // Backend - Languages
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend', subcategory: 'language' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'backend', subcategory: 'language' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', category: 'backend', subcategory: 'language' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', category: 'backend', subcategory: 'language' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'backend', subcategory: 'language' },
    
    // Backend - Frameworks
    { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', category: 'backend', subcategory: 'framework' },
    { name: 'Symfony', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg', category: 'backend', subcategory: 'framework' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg', category: 'backend', subcategory: 'framework' },
    
    // Databases - SQL
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database', subcategory: 'sql' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'database', subcategory: 'sql' },
    { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', category: 'database', subcategory: 'sql' },
    { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', category: 'database', subcategory: 'sql' },
    
    // Databases - NoSQL
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database', subcategory: 'nosql' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', category: 'database', subcategory: 'nosql' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', category: 'database', subcategory: 'nosql' },
    
    // Databases - Vector
    { name: 'Qdrant', category: 'database', subcategory: 'vector' },
    { name: 'Pinecone', category: 'database', subcategory: 'vector' },
    { name: 'Weaviate', category: 'database', subcategory: 'vector' },
    
    // AI/ML Tools
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', category: 'ai', subcategory: 'ml' },
    { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', category: 'ai', subcategory: 'ml' },
    { name: 'LangChain', category: 'ai', subcategory: 'llm' },
    { name: 'OpenAI', category: 'ai', subcategory: 'llm' },
    { name: 'Hugging Face', category: 'ai', subcategory: 'llm' },
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', category: 'ai', subcategory: 'ml' },
    { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', category: 'ai', subcategory: 'ml' },
    
    // Dev Tools
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'tools', subcategory: 'devops' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'tools', subcategory: 'devops' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools', subcategory: 'version' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'tools', subcategory: 'version' },
    { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', category: 'tools', subcategory: 'version' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'tools', subcategory: 'editor' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', category: 'tools', subcategory: 'api' },
  ];

  const getTechsByCategory = (categoryId: string) => {
    return technologies.filter(tech => tech.category === categoryId);
  };

  const getTechsBySubcategory = (categoryId: string, subcategoryId: string) => {
    return technologies.filter(tech => tech.category === categoryId && tech.subcategory === subcategoryId);
  };

  const categories = [
    {
      id: 'frontend',
      label: isFrench ? 'Front End' : 'Front End',
      icon: <Globe className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500',
      position: 'top-right',
      subcategories: [
        { id: 'language', label: isFrench ? 'Language' : 'Language' },
        { id: 'framework', label: isFrench ? 'Framework' : 'Framework' },
        { id: 'library', label: isFrench ? 'Libraries' : 'Libraries' }
      ]
    },
    {
      id: 'backend',
      label: isFrench ? 'Back End' : 'Back End',
      icon: <Server className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500',
      position: 'bottom-right',
      subcategories: [
        { id: 'language', label: isFrench ? 'Language' : 'Language' },
        { id: 'framework', label: isFrench ? 'Framework' : 'Framework' }
      ]
    },
    {
      id: 'database',
      label: isFrench ? 'Base de Données' : 'Database',
      icon: <Database className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500',
      position: 'bottom-left',
      subcategories: [
        { id: 'sql', label: 'SQL' },
        { id: 'nosql', label: 'NoSQL' },
        { id: 'vector', label: isFrench ? 'Vectorielle' : 'Vector' }
      ]
    },
    {
      id: 'ai',
      label: isFrench ? 'IA / ML' : 'AI / ML',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500',
      position: 'top-left',
      subcategories: [
        { id: 'ml', label: 'ML' },
        { id: 'llm', label: 'LLM' }
      ]
    },
    {
      id: 'tools',
      label: isFrench ? 'Outils Dev' : 'Dev Tools',
      icon: <Wrench className="w-5 h-5" />,
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-500',
      position: 'left',
      subcategories: [
        { id: 'devops', label: 'DevOps' },
        { id: 'version', label: isFrench ? 'Version' : 'Version' },
        { id: 'editor', label: isFrench ? 'Éditeur' : 'Editor' },
        { id: 'api', label: 'API' }
      ]
    }
  ];

  const TechBox: React.FC<{ tech: TechItem; color: string }> = ({ tech, color }) => {
    const colorMap: Record<string, string> = {
      'from-blue-500 to-cyan-500': 'bg-blue-500',
      'from-green-500 to-emerald-500': 'bg-green-500',
      'from-purple-500 to-pink-500': 'bg-purple-500',
      'from-pink-500 to-rose-500': 'bg-pink-500',
      'from-yellow-500 to-amber-500': 'bg-yellow-500'
    };
    
    const bgColor = colorMap[color] || 'bg-gray-500';
    
    return (
      <div
        className={`group relative flex items-center gap-2 px-3 py-2 rounded-lg ${bgColor} text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 min-w-[90px]`}
        style={{
          transform: 'perspective(1000px) rotateX(2deg) rotateY(-2deg)',
          boxShadow: '0 6px 12px rgba(0,0,0,0.4), 0 3px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        {tech.icon ? (
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-5 h-5 object-contain filter brightness-0 invert"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-5 h-5 rounded bg-white/30" />
        )}
        <span className="text-xs font-bold whitespace-nowrap drop-shadow-md">{tech.name}</span>
      </div>
    );
  };

  const CategoryBox: React.FC<{ category: typeof categories[0] }> = ({ category }) => {
    const techs = getTechsByCategory(category.id);
    if (techs.length === 0) return null;

    const positionClasses = {
      'top-right': 'top-10 right-10',
      'bottom-right': 'bottom-10 right-10',
      'bottom-left': 'bottom-10 left-10',
      'top-left': 'top-10 left-10',
      'left': 'top-1/2 left-10 -translate-y-1/2'
    };

    return (
      <div className={`absolute ${positionClasses[category.position as keyof typeof positionClasses]} w-72 max-w-[280px]`}>
        {/* Ligne de connexion 3D */}
        <svg className="absolute w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 0 }}>
          <defs>
            <linearGradient id={`gradient-${category.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.9" />
              <stop offset="100%" stopColor={category.bgColor === 'bg-blue-500' ? '#3B82F6' : 
                                                   category.bgColor === 'bg-green-500' ? '#10B981' :
                                                   category.bgColor === 'bg-purple-500' ? '#A855F7' :
                                                   category.bgColor === 'bg-pink-500' ? '#EC4899' :
                                                   category.bgColor === 'bg-yellow-500' ? '#EAB308' : '#10B981'} stopOpacity="0.8" />
            </linearGradient>
            <filter id={`glow-${category.id}`}>
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <line
            x1="50%"
            y1="50%"
            x2={category.position === 'top-right' || category.position === 'bottom-right' ? '10%' : '90%'}
            y2={category.position === 'top-right' || category.position === 'top-left' ? '90%' : '10%'}
            stroke={`url(#gradient-${category.id})`}
            strokeWidth="4"
            strokeLinecap="round"
            style={{ 
              filter: `drop-shadow(0 4px 8px rgba(0,0,0,0.4))`,
              opacity: 0.8
            }}
          />
        </svg>

        {/* Boîte de catégorie principale */}
        <div
          className={`relative z-10 p-5 rounded-xl ${category.bgColor} text-white shadow-2xl mb-4`}
          style={{
            transform: 'perspective(1000px) rotateX(3deg) rotateY(-3deg)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.5), 0 5px 10px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
            border: '2px solid rgba(255,255,255,0.1)'
          }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/20">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold drop-shadow-lg">{category.label}</h3>
          </div>
        </div>

        {/* Sous-catégories */}
        <div className="space-y-4">
          {category.subcategories.map((subcat) => {
            const subTechs = getTechsBySubcategory(category.id, subcat.id);
            if (subTechs.length === 0) return null;

            return (
              <div key={subcat.id} className="relative z-10">
                <div className="mb-2">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">{subcat.label}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {subTechs.map((tech, idx) => (
                    <TechBox key={`${tech.name}-${idx}`} tech={tech} color={category.color} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full py-12 overflow-x-auto">
      <div className="relative min-h-[900px] w-full max-w-7xl mx-auto px-4">
        {/* Centre - Technologies */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div
            className="relative p-6 rounded-2xl bg-blue-500 text-white shadow-2xl"
            style={{
              transform: 'perspective(1000px) rotateX(3deg) rotateY(-3deg)',
              boxShadow: '0 15px 30px rgba(0,0,0,0.6), 0 8px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)',
              border: '3px solid rgba(255,255,255,0.2)'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/20">
                <Code className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold drop-shadow-lg">{isFrench ? 'Technologies' : 'Technologies'}</h2>
                <p className="text-sm opacity-90 font-medium">{isFrench ? 'Stack Tech' : 'Tech Stack'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Catégories avec branches */}
        {categories.map((category) => (
          <CategoryBox key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default TechnologyDiagram;
