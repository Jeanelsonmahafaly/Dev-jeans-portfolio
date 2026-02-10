import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Globe, Server, Database, Layers, Brain, Wrench, Sparkles, Cpu, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface TechNodeProps {
  label: string;
  icon?: React.ReactNode;
  color: string;
  borderColor: string;
  glowColor: string;
  children?: React.ReactNode;
  isRoot?: boolean;
}

const TechNode: React.FC<TechNodeProps> = ({ 
  label, 
  icon, 
  color, 
  borderColor, 
  glowColor,
  children,
  isRoot = false 
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative ${isRoot ? 'mb-8' : ''}`}
    >
      <div
        className={`
          relative rounded-full px-6 py-4 
          bg-transparent
          border-2 ${borderColor}
          shadow-[0_4px_14px_0_rgba(0,0,0,0.39)]
          backdrop-blur-sm
          group
        `}
        style={{
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.1),
            0 4px 14px rgba(0,0,0,0.5),
            0 0 20px ${glowColor}20
          `
        }}
      >
        <div className="flex items-center gap-3 text-white">
          {icon && <div className="flex-shrink-0">{icon}</div>}
          <span className="font-bold text-sm md:text-base whitespace-nowrap drop-shadow-lg">
            {label}
          </span>
        </div>
        
        {/* Effet de brillance au survol */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>
      
      {children && (
        <div className="mt-4 space-y-3">
          {children}
        </div>
      )}
    </motion.div>
  );
};

interface TechItemProps {
  name: string;
  icon?: string;
  color: string;
  borderColor: string;
  glowColor: string;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon, color, borderColor, glowColor }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.08, x: 5 }}
      transition={{ type: "spring", stiffness: 400 }}
      className="relative"
    >
      <div
        className={`
          rounded-full px-4 py-2 
          bg-transparent
          border-2 ${borderColor}
          shadow-lg
          flex items-center gap-2
          group/item
        `}
        style={{
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.05),
            0 2px 8px rgba(0,0,0,0.4),
            0 0 8px ${glowColor}15
          `
        }}
      >
        {icon ? (
          <img
            src={icon}
            alt={name}
            className="w-5 h-5 object-contain flex-shrink-0"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-5 h-5 flex-shrink-0 rounded bg-white/20 flex items-center justify-center">
            <Zap className="w-3 h-3 text-white" />
          </div>
        )}
        <span className="text-xs font-semibold text-white drop-shadow-md whitespace-nowrap">
          {name}
        </span>
      </div>
    </motion.div>
  );
};

const TechTree: React.FC = () => {
  const { i18n } = useTranslation();
  const isFrench = i18n.language === 'fr';

  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
       

        {/* Arbre technologique - Desktop: horizontal, Mobile: vertical */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 relative">
          
          {/* Nœud central - Web Develop */}
          <div className="relative z-10 flex-shrink-0">
            <TechNode
             // label={isFrench ? "Développement Web, Mobile & Embarqué" : "Web, Mobile & Embedded Development"}
              label={isFrench ? "" : ""}
              icon={<Code className="w-6 h-6" />}
              color="bg-[#1F2937]"
              borderColor="border-[#10B981]"
              glowColor="#10B981"
              isRoot={true}
            />
            
            {/* Lignes de connexion vers les branches principales */}
            <div className="hidden lg:block absolute top-1/2 left-full w-24 h-1 bg-[#10B981]/50" 
                 style={{ transform: 'translateY(-50%)' }} />
          </div>

          {/* Branches principales */}
          <div className="flex-1 flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Branche Front End */}
            <div className="relative flex-1">
              {/* Ligne de connexion */}
              <div className="hidden lg:block absolute -left-12 top-1/2 w-12 h-1 bg-gradient-to-r from-transparent to-cyan-400" 
                   style={{ transform: 'translateY(-50%)' }} />
              
              <TechNode
                label={isFrench ? "Front End" : "Front End"}
                icon={<Globe className="w-5 h-5" />}
                color="bg-[#1F2937]"
                borderColor="border-[#374151]"
                glowColor="#10B981"
              >
                {/* Sous-branche Language */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-[#10B981]" style={{ transform: 'translateY(-50%)' }} />
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">{isFrench ? "Language" : "Language"}</h4>
                    <div className="flex flex-wrap gap-2">
                      <TechItem
                        name="HTML"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="CSS"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="JavaScript"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="TypeScript"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                    </div>
                  </div>
                </div>

                {/* Sous-branche Framework */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-[#10B981]" style={{ transform: 'translateY(-50%)' }} />
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">{isFrench ? "Framework" : "Framework"}</h4>
                    <div className="flex flex-wrap gap-2">
                      <TechItem
                        name="React"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="Vue"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="Angular"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                    </div>
                  </div>
                </div>

                {/* Sous-branche Libraries */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-[#10B981]" style={{ transform: 'translateY(-50%)' }} />
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">{isFrench ? "Libraries" : "Libraries"}</h4>
                    <div className="flex flex-wrap gap-2">
                      <TechItem
                        name="Tailwind"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="Bootstrap"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                    </div>
                  </div>
                </div>
              </TechNode>
            </div>

            {/* Branche Back End */}
            <div className="relative flex-1">
              {/* Ligne de connexion */}
              <div className="hidden lg:block absolute -left-12 top-1/2 w-12 h-1 bg-[#10B981]/50" 
                   style={{ transform: 'translateY(-50%)' }} />
              
              <TechNode
                label={isFrench ? "Back End" : "Back End"}
                icon={<Server className="w-5 h-5" />}
                color="bg-[#1F2937]"
                borderColor="border-[#374151]"
                glowColor="#10B981"
              >
                {/* Sous-branche Language */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-[#10B981]" style={{ transform: 'translateY(-50%)' }} />
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">{isFrench ? "Language" : "Language"}</h4>
                    <div className="flex flex-wrap gap-2">
                      <TechItem
                        name="Python"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="PHP"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="C#"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                    </div>
                  </div>
                </div>

                {/* Sous-branche Database */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-[#10B981]" style={{ transform: 'translateY(-50%)' }} />
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">{isFrench ? "Database" : "Database"}</h4>
                    <div className="flex flex-wrap gap-2">
                      <TechItem
                        name="MySQL"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="MongoDB"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="PostgreSQL"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="Redis"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="Firebase"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                    </div>
                  </div>
                </div>

                {/* Sous-branche API */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-[#10B981]" style={{ transform: 'translateY(-50%)' }} />
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">API</h4>
                    <div className="flex flex-wrap gap-2">
                      <TechItem
                        name="REST"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="GraphQL"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                    </div>
                  </div>
                </div>
              </TechNode>
            </div>

            {/* Branche AI Engineering */}
            <div className="relative flex-1">
              {/* Ligne de connexion */}
              <div className="hidden lg:block absolute -left-12 top-1/2 w-12 h-1 bg-[#10B981]/50" 
                   style={{ transform: 'translateY(-50%)' }} />
              
              <TechNode
                label={isFrench ? "Ingénierie IA" : "AI Engineering"}
                icon={<Brain className="w-5 h-5" />}
                color="bg-[#1F2937]"
                borderColor="border-[#374151]"
                glowColor="#10B981"
              >
                {/* Sous-branche Modèles */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-[#10B981]" style={{ transform: 'translateY(-50%)' }} />
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">{isFrench ? "Modèles" : "Models"}</h4>
                    <div className="flex flex-wrap gap-2">
                      <TechItem
                        name="LLM"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="VLM"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="Llama"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="Mistral"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                    </div>
                  </div>
                </div>

                {/* Sous-branche Outils/Frameworks */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-[#10B981]" style={{ transform: 'translateY(-50%)' }} />
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">{isFrench ? "Outils/Frameworks" : "Tools/Frameworks"}</h4>
                    <div className="flex flex-wrap gap-2">
                      <TechItem
                        name="RAG"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="LangChain"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="CrewAI"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="Vercel AI SDK"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="TensorFlow"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="PyTorch"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="Pandas"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                    </div>
                  </div>
                </div>
              </TechNode>
            </div>

            {/* Branche Système Embarqué */}
            <div className="relative flex-1">
              {/* Ligne de connexion */}
              <div className="hidden lg:block absolute -left-12 top-1/2 w-12 h-1 bg-[#10B981]/50" 
                   style={{ transform: 'translateY(-50%)' }} />
              
              <TechNode
                label={isFrench ? "Système Embarqué" : "Embedded Systems"}
                icon={<Cpu className="w-5 h-5" />}
                color="bg-[#1F2937]"
                borderColor="border-[#374151]"
                glowColor="#10B981"
              >
                {/* Sous-branche Microcontrôleurs */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-[#10B981]" style={{ transform: 'translateY(-50%)' }} />
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">{isFrench ? "Microcontrôleurs" : "Microcontrollers"}</h4>
                    <div className="flex flex-wrap gap-2">
                      <TechItem
                        name="ESP32"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="Arduino"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="Raspberry Pi"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                    </div>
                  </div>
                </div>

                {/* Sous-branche IoT & Edge */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-[#10B981]" style={{ transform: 'translateY(-50%)' }} />
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">{isFrench ? "IoT & Edge" : "IoT & Edge"}</h4>
                    <div className="flex flex-wrap gap-2">
                      <TechItem
                        name="IoT"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="Edge Computing"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="MQTT"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                    </div>
                  </div>
                </div>
              </TechNode>
            </div>

            {/* Branche DevOps */}
            <div className="relative flex-1">
              {/* Ligne de connexion */}
              <div className="hidden lg:block absolute -left-12 top-1/2 w-12 h-1 bg-[#10B981]/50" 
                   style={{ transform: 'translateY(-50%)' }} />
              
              <TechNode
                label="DevOps"
                icon={<Wrench className="w-5 h-5" />}
                color="bg-[#1F2937]"
                borderColor="border-[#374151]"
                glowColor="#10B981"
              >
                {/* Sous-branche Conteneurisation */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-[#10B981]" style={{ transform: 'translateY(-50%)' }} />
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">{isFrench ? "Conteneurisation" : "Containerization"}</h4>
                    <div className="flex flex-wrap gap-2">
                      <TechItem
                        name="Docker"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="Kubernetes"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                    </div>
                  </div>
                </div>

                {/* Sous-branche CI/CD */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-[#10B981]" style={{ transform: 'translateY(-50%)' }} />
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">CI/CD</h4>
                    <div className="flex flex-wrap gap-2">
                      <TechItem
                        name="GitHub Actions"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="Azure DevOps"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="GitLab CI"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                    </div>
                  </div>
                </div>

                {/* Sous-branche Cloud */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-[#10B981]" style={{ transform: 'translateY(-50%)' }} />
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">{isFrench ? "Cloud" : "Cloud"}</h4>
                    <div className="flex flex-wrap gap-2">
                      <TechItem
                        name="AWS"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="Azure"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                    </div>
                  </div>
                </div>

                {/* Sous-branche Monitoring */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1/2 w-4 h-0.5 bg-[#10B981]" style={{ transform: 'translateY(-50%)' }} />
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-400 mb-2">{isFrench ? "Monitoring" : "Monitoring"}</h4>
                    <div className="flex flex-wrap gap-2">
                      <TechItem
                        name="Grafana"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="Prometheus"
                        icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                      <TechItem
                        name="Datadog"
                        color="bg-[#1F2937]"
                        borderColor="border-[#374151]"
                        glowColor="#10B981"
                      />
                    </div>
                  </div>
                </div>
              </TechNode>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechTree;

