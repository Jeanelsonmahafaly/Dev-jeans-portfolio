import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto horizontal scroll effect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.35; // slow horizontal scroll
    let animationId: number;

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

  // TOUTES les technologies conservées - Monochrome avec icônes
  const technologies = [
    // Langages / Frameworks
    { name: "JavaScript", icon: <div className="text-sm font-bold text-black px-2 py-1 rounded" style={{background:'#F7DF1E'}}>JS</div> },
    { name: "React", icon: <div className="text-sm font-bold text-white px-2 py-1 rounded" style={{background:'#61DAFB', color:'#000'}}>R</div> },
    { name: "Angular", icon: <span className="text-2xl font-bold">A</span> },
    { name: "Vue.js", icon: <span className="text-2xl font-bold">V</span> },
    { name: "PHP", icon: <span className="text-xl font-bold">PHP</span> },
    { name: "Laravel", icon: <span className="text-2xl">🔺</span> },
    { name: "Symfony", icon: <span className="text-2xl font-bold">S</span> },
    { name: "Python", icon: <span className="text-2xl">🐍</span> },
    { name: "Django", icon: <span className="text-xl font-bold">DJ</span> },
    { name: "Ampalibe", icon: <span className="text-xl font-bold">AMP</span> },
    { name: "C#", icon: <span className="text-xl font-bold">C#</span> },
    { name: ".NET", icon: <div className="text-xs font-semibold px-2 py-1 rounded" style={{background:'#512BD4', color:'#fff'}}>.NET</div> },
    { name: "Entity Framework", icon: <span className="text-xl font-bold">EF</span> },
    { name: "Flutter", icon: <span className="text-2xl">🦋</span> },
    { name: "React Native", icon: <span className="text-xl font-bold">RN</span> },
    
    // Gestion de versions
    { name: "Git", icon: <span className="text-xl font-bold">Git</span> },
    { name: "GitHub", icon: <span className="text-2xl">🐙</span> },
    { name: "GitLab", icon: <span className="text-2xl">🦊</span> },
    
    // Bases de données & Big Data
    { name: "MySQL", icon: <span className="text-2xl">🐬</span> },
    { name: "PostgreSQL", icon: <span className="text-2xl">🐘</span> },
    { name: "Oracle", icon: <span className="text-xl font-bold">ORA</span> },
    { name: "MongoDB", icon: <span className="text-2xl">🍃</span> },
    { name: "HDFS", icon: <span className="text-xl font-bold">HD</span> },
    { name: "MapReduce", icon: <span className="text-xl font-bold">MR</span> },
    { name: "YARN", icon: <span className="text-xl font-bold">YN</span> },
    { name: "Spark SQL", icon: <span className="text-xl font-bold">⚡</span> },
    
    // BI & Data Warehouse
    { name: "Power BI", icon: <span className="text-xl font-bold">BI</span> },
    { name: "Talend", icon: <span className="text-xl font-bold">TOS</span> },
    { name: "SSIS", icon: <span className="text-xl font-bold">SSIS</span> },
    { name: "SSAS", icon: <span className="text-xl font-bold">SSAS</span> },
    { name: "SSRS", icon: <span className="text-xl font-bold">SSRS</span> },
    
    // Réseaux & Sécurité
    { name: "LAN/WAN", icon: <span className="text-2xl">🌐</span> },
    { name: "Firewall", icon: <span className="text-2xl">🔥</span> },
    { name: "Proxy", icon: <span className="text-2xl">🛡️</span> },
    
    // Architecture
    { name: "Microservices", icon: <span className="text-2xl">🏗️</span> },
    { name: "Monolithique", icon: <span className="text-2xl">🏛️</span> },
    
    // Intelligence Artificielle & Data Science
    { name: "TensorFlow", icon: <span className="text-xl font-bold">TF</span> },
    { name: "PyTorch", icon: <span className="text-2xl">🔥</span> },
    { name: "Keras", icon: <span className="text-xl font-bold">K</span> },
    { name: "NumPy", icon: <span className="text-xl font-bold">NP</span> },
    { name: "Pandas", icon: <span className="text-2xl">🐼</span> },
    { name: "OpenAI GPT", icon: <span className="text-2xl">🤖</span> },
    { name: "LangChain", icon: <span className="text-xl font-bold">🔗</span> },
    { name: "Hugging Face", icon: <span className="text-2xl">🤗</span> },
    { name: "RAG", icon: <span className="text-xl font-bold">RAG</span> },
    
    // Automatisation & Scraping
    { name: "n8n", icon: <span className="text-xl font-bold">n8n</span> },
    { name: "Zapier", icon: <span className="text-2xl">⚡</span> },
    { name: "Make", icon: <span className="text-xl font-bold">Make</span> },
    { name: "Selenium", icon: <span className="text-2xl">🕷️</span> },
    { name: "BeautifulSoup", icon: <span className="text-xl font-bold">BS</span> },
    { name: "Puppeteer", icon: <span className="text-2xl">🎭</span> },
    
    // Déploiement & Monitoring
    { name: "Docker", icon: <span className="text-2xl">🐋</span> },
    { name: "Kubernetes", icon: <span className="text-2xl">☸️</span> },
    { name: "Grafana", icon: <span className="text-xl font-bold">📊</span> },
    { name: "Prometheus", icon: <span className="text-xl font-bold">⏱️</span> },
    { name: "Jupyter", icon: <span className="text-xl font-bold">📓</span> },
    { name: "Ngrok", icon: <span className="text-xl font-bold">🚇</span> },
    { name: "Postman", icon: <span className="text-2xl">📮</span> },
    { name: "Swagger", icon: <span className="text-xl font-bold">📋</span> },
    { name: "Jira", icon: <span className="text-xl font-bold">🎯</span> },
    
    // Formats de données
    { name: "CSV", icon: <span className="text-xl font-bold">CSV</span> },
    { name: "JSON", icon: <span className="text-xl font-bold">{ }</span> },
    { name: "XML", icon: <span className="text-xl font-bold">&lt;/&gt;</span> }
  ];

  const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const IconImg: React.FC<{ name: string; fallback?: React.ReactNode }> = ({ name }) => {
    const src = `/icons/${slugify(name)}.svg`;
    return (
      <img
        src={src}
        alt={name}
        className="w-10 h-10 object-contain bg-white/5 p-1 rounded"
        onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/icons/fallback.svg'; (e.currentTarget as HTMLImageElement).style.background='transparent'; }}
      />
    );
  };

  return (
    <section className="py-20 bg-[#030712]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Compétences
          </h2>
          <div className="w-16 h-1 bg-[#10B981] mx-auto rounded-full"></div>
        </div>

        {/* Grille d'icônes animée - Monochrome devenant vert au survol */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-[#111827] themed-border themed-border-hover">
            <div ref={carouselRef} className="flex gap-8 py-8 px-4 overflow-x-auto scrollbar-hide">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 w-28 h-28 bg-[#030712] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center group cursor-pointer border border-[#1F2937] hover:border-[#10B981]"
                >
                  <div className="mb-2 text-gray-300">
                    <IconImg name={tech.name} />
                  </div>
                  <div className="text-xs text-white text-center px-1">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient fade effects */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#030712] to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#030712] to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
