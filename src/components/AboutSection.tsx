import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Server, Shield, Trophy, Users, GitBranch, TestTube, Brain, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  const skills = [
    { icon: <Code2 className="w-8 h-8" />, title: t('about.skills.development'), desc: t('about.skills.developmentDesc') },
    { icon: <Server className="w-8 h-8" />, title: t('about.skills.apis'), desc: t('about.skills.apisDesc') },
    { icon: <Database className="w-8 h-8" />, title: t('about.skills.database'), desc: t('about.skills.databaseDesc') },
    { icon: <Shield className="w-8 h-8" />, title: t('about.skills.security'), desc: t('about.skills.securityDesc') },
    { icon: <GitBranch className="w-8 h-8" />, title: t('about.skills.microservices'), desc: t('about.skills.microservicesDesc') },
    { icon: <TestTube className="w-8 h-8" />, title: t('about.skills.tests'), desc: t('about.skills.testsDesc') }
  ];

  const achievements = [
    { icon: <Brain className="w-6 h-6" />, title: t('about.achievements.imageClassification'), desc: t('about.achievements.imageClassificationDesc') },
    { icon: <Zap className="w-6 h-6" />, title: t('about.achievements.chatbot'), desc: t('about.achievements.chatbotDesc') },
    { icon: <Trophy className="w-6 h-6" />, title: t('about.achievements.hackathon'), desc: t('about.achievements.hackathonDesc') }
  ];

  const stats = [
    { number: "2+", label: t('about.yearsExperience') },
    { number: "3", label: t('about.partners') },
    { number: "15+", label: t('about.projects') },
    { number: "100%", label: t('about.satisfaction') }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-[#111827] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-[#10B981] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Colonne gauche : Contenu principal */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">
              {t('about.subtitle')}
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                {t('about.intro1')} <span className="font-semibold text-[#10B981]">{t('about.intro1Bold')}</span>{t('about.intro1End')}
              </p>
              
              <p>
                {t('about.intro2Start')}<span className="font-semibold text-[#10B981]">{t('about.intro2AI')}</span>{t('about.intro2Middle')} <span className="font-semibold text-[#10B981]">{t('about.intro2Systems')}</span> {t('about.intro2End')}
              </p>

              {/* AI Expertise Highlights */}
              <div className="my-6 space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-lg glass themed-border">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-md bg-[#10B981]/20 text-[#10B981] font-bold text-sm">✨</div>
                  </div>
                  <div>
                    <p className="font-medium text-white">{t('about.aiIntegration')}</p>
                    <p className="text-sm text-gray-400">{t('about.aiIntegrationDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg glass themed-border">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-md bg-[#10B981]/20 text-[#10B981] font-bold text-sm">🤖</div>
                  </div>
                  <div>
                    <p className="font-medium text-white">{t('about.aiProjects')}</p>
                    <p className="text-sm text-gray-400">{t('about.aiProjectsDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg glass themed-border">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-md bg-[#10B981]/20 text-[#10B981] font-bold text-sm">⚡</div>
                  </div>
                  <div>
                    <p className="font-medium text-white">{t('about.llmModels')}</p>
                    <p className="text-sm text-gray-400">{t('about.llmModelsDesc')}</p>
                  </div>
                </div>
              </div>
              
              <p>
                <span className="font-semibold text-[#10B981]">{t('about.objective')}</span>{t('about.objectiveDesc')}
              </p>
              
              <p>
                {t('about.experienceYears')} <span className="font-semibold text-[#10B981]">{t('about.experienceYearsNumber')}</span> {t('about.experienceDesc')} <span className="font-semibold text-[#10B981]">{t('about.experienceQuality')}</span>.
              </p>
              
              <div className="glass rounded-xl p-6 themed-border themed-border-hover">
                <h4 className="font-semibold text-white mb-3">{t('about.careerTitle')}</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#10B981] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300"><strong className="text-white">{t('about.careerAratoDuration')}</strong> {t('about.careerArato')} <strong className="text-[#10B981]">ARATO</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#10B981] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300"><strong className="text-white">{t('about.careerRtsDuration')}</strong> {t('about.careerRts')} <strong className="text-[#10B981]">RTS Line</strong>{t('about.careerRtsDesc')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#10B981] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300">{t('about.careerIlomad')} <strong className="text-[#10B981]">ILOMAD</strong> {t('about.careerIlomadDesc')}</span>
                  </li>
                </ul>
              </div>

              <p>
                {t('about.teamwork')} <span className="font-semibold text-[#10B981]">{t('about.teamworkAgile')}</span> {t('about.teamworkDesc')} <span className="font-semibold text-[#10B981]">{t('about.teamworkQuality')}</span>.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`glass rounded-xl p-4 themed-border themed-border-hover card-glow transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="text-[#10B981] mb-2">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">{skill.title}</h4>
                  <p className="text-gray-400 text-xs">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite : Stats et Achievements */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Stats */}
            <div className="glass rounded-2xl p-8 themed-border mb-8 themed-border-hover">
              <h3 className="text-xl font-bold text-white mb-8 text-center">{t('about.myAchievements')}</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`text-center transform transition-all duration-700 hover:scale-110 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: `${(index + 6) * 150}ms` }}
                  >
                    <div className="text-3xl font-bold text-[#10B981] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Awards Section */}
              <div className="mt-8 pt-6 themed-border-t">
                <div className="flex items-center justify-center gap-3 glass rounded-lg p-4 themed-border themed-border-hover">
                  <Trophy className="w-6 h-6 text-[#10B981]" />
                  <div>
                    <div className="font-semibold text-white text-sm">Agent d'automatisation IA</div>
                    <div className="text-gray-400 text-xs">Contribution chez ILOMAD</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Passionné par l'IA - Déplacé à droite */}
            <div className="glass rounded-xl p-6 themed-border mb-8 themed-border-hover">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#10B981]" />
                {t('about.passionateAboutAI')}
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                {t('about.passionateAboutAIDesc')}
              </p>
              <div className="grid gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 glass rounded-lg p-3 themed-border themed-border-hover">
                    <div className="text-[#10B981]">{achievement.icon}</div>
                    <div>
                      <div className="font-medium text-white text-sm">{achievement.title}</div>
                      <div className="text-gray-400 text-xs">{achievement.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise technique - Déplacé à droite */}
            <div className="glass rounded-xl p-6 themed-border themed-border-hover">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-[#10B981]" />
                {t('about.myTechnicalExpertise')}
              </h4>
              <p className="text-sm text-gray-400">
                {t('about.technicalExpertiseDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
