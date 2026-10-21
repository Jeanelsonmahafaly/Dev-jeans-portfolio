import { type ComponentType, type SVGProps } from 'react';
import { Brain, Cpu, Database, Globe, Server, Sparkles, Wrench } from 'lucide-react';
import {
  SiAngular,
  SiArduino,
  SiBootstrap,
  SiCrewai,
  SiCss,
  SiDatadog,
  SiDocker,
  SiDotnet,
  SiEspressif,
  SiFastapi,
  SiFirebase,
  SiGithubactions,
  SiGitlab,
  SiGrafana,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiKeycloak,
  SiKubernetes,
  SiLangchain,
  SiMeta,
  SiMistralai,
  SiMongodb,
  SiMqtt,
  SiMysql,
  SiNodedotjs,
  SiOllama,
  SiOpensearch,
  SiPaddlepaddle,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiPytorch,
  SiQdrant,
  SiQwen,
  SiRabbitmq,
  SiRaspberrypi,
  SiReact,
  SiRedis,
  SiSharp,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import { DiAws, DiMsqlServer } from 'react-icons/di';
import { TbCloudComputing, TbDatabase, TbDatabaseSearch, TbShieldLock } from 'react-icons/tb';
import { VscAzure, VscAzureDevops } from 'react-icons/vsc';

export type StackGlyph = ComponentType<SVGProps<SVGSVGElement>>;

export interface StackItem {
  name: string;
  icon: StackGlyph;
  color: string;
  /** Occupe toute la largeur : une pastille par ligne. */
  ownLine?: boolean;
}

export interface StackGroup {
  title: string;
  items: StackItem[];
}

export interface StackBranch {
  id: string;
  label: string;
  icon: StackGlyph;
  connector: 'cyan' | 'emerald';
  groups: StackGroup[];
}

export const techBranches: StackBranch[] = [
  {
    id: 'frontend',
    label: 'Front End',
    icon: Globe,
    connector: 'cyan',
    groups: [
      {
        title: 'Language',
        items: [
          { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
          { name: 'CSS', icon: SiCss, color: '#38BDF8' },
          { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
          { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        ],
      },
      {
        title: 'Framework',
        items: [
          { name: 'React', icon: SiReact, color: '#61DAFB' },
          { name: 'Vue', icon: SiVuedotjs, color: '#42B883' },
          { name: 'Angular', icon: SiAngular, color: '#F14E4E' },
        ],
      },
      {
        title: 'Libraries',
        items: [
          { name: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8' },
          { name: 'Bootstrap', icon: SiBootstrap, color: '#C4B5FD' },
        ],
      },
    ],
  },
  {
    id: 'backend',
    label: 'Back End',
    icon: Server,
    connector: 'emerald',
    groups: [
      {
        title: 'Language',
        items: [
          { name: '.NET', icon: SiDotnet, color: '#C4B5FD' },
          { name: 'ASP.NET Core', icon: SiDotnet, color: '#A78BFA' },
          { name: 'Python', icon: SiPython, color: '#FFD43B' },
          { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
          { name: 'PHP', icon: SiPhp, color: '#C5C9EA', ownLine: true },
          { name: 'C#', icon: SiSharp, color: '#C084FC', ownLine: true },
        ],
      },
      {
        title: 'API & Messaging',
        items: [
          { name: 'REST', icon: SiNodedotjs, color: '#8CC84B' },
          { name: 'GraphQL', icon: SiGraphql, color: '#E535AB' },
          { name: 'RabbitMQ', icon: SiRabbitmq, color: '#FF6600' },
          { name: 'OpenSearch', icon: SiOpensearch, color: '#005EB8' },
        ],
      },
      {
        title: 'Security',
        items: [
          { name: 'Keycloak', icon: SiKeycloak, color: '#4D8CFF' },
          { name: 'OpenBao', icon: TbShieldLock, color: '#FFD166' },
          { name: 'JWT', icon: SiJsonwebtokens, color: '#FFFFFF' },
        ],
      },
    ],
  },
  {
    id: 'database',
    label: 'Databases',
    icon: Database,
    connector: 'emerald',
    groups: [
      {
        title: 'Relationnel (SQL)',
        items: [
          { name: 'SQL Server', icon: DiMsqlServer, color: '#F07178' },
          { name: 'MySQL', icon: SiMysql, color: '#F29111' },
          { name: 'PostgreSQL', icon: SiPostgresql, color: '#6998E1' },
          { name: 'Oracle', icon: TbDatabase, color: '#C74634' },
        ],
      },
      {
        title: 'Non relationnel (NoSQL)',
        items: [
          { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
          { name: 'Redis', icon: SiRedis, color: '#FF4438' },
          { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        ],
      },
      {
        title: 'Vectoriel',
        items: [{ name: 'Qdrant', icon: SiQdrant, color: '#DC382D' }],
      },
    ],
  },
  {
    id: 'ai',
    label: 'AI Engineering',
    icon: Brain,
    connector: 'emerald',
    groups: [
      {
        title: 'Types',
        items: [
          { name: 'LLM', icon: Sparkles, color: '#FDE68A' },
          { name: 'VLM', icon: Sparkles, color: '#FDE68A' },
        ],
      },
      {
        title: 'Modèles',
        items: [
          { name: 'Llama', icon: SiMeta, color: '#0082FB' },
          { name: 'Qwen', icon: SiQwen, color: '#615CED' },
          { name: 'Mistral', icon: SiMistralai, color: '#FF7000' },
        ],
      },
      {
        title: 'Tools/Frameworks',
        items: [
          { name: 'RAG', icon: TbDatabaseSearch, color: '#6EE7B7' },
          { name: 'LangChain', icon: SiLangchain, color: '#FFFFFF' },
          { name: 'CrewAI', icon: SiCrewai, color: '#FF6A3D' },
          { name: 'Ollama', icon: SiOllama, color: '#FFFFFF' },
          { name: 'PaddleOCR', icon: SiPaddlepaddle, color: '#1A8CE7' },
          { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
          { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
          { name: 'Pandas', icon: SiPandas, color: '#E70488' },
        ],
      },
    ],
  },
  {
    id: 'embedded',
    label: 'Embedded Systems',
    icon: Cpu,
    connector: 'emerald',
    groups: [
      {
        title: 'Microcontrollers',
        items: [
          { name: 'ESP32', icon: SiEspressif, color: '#E7352C' },
          { name: 'Arduino', icon: SiArduino, color: '#2DD4BF' },
          { name: 'Raspberry Pi', icon: SiRaspberrypi, color: '#C51A4A' },
        ],
      },
      {
        title: 'IoT & Edge',
        items: [
          { name: 'Edge Computing', icon: TbCloudComputing, color: '#93C5FD' },
          { name: 'MQTT', icon: SiMqtt, color: '#E9D5FF' },
        ],
      },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps',
    icon: Wrench,
    connector: 'emerald',
    groups: [
      {
        title: 'Containerization',
        items: [
          { name: 'Docker', icon: SiDocker, color: '#2496ED' },
          { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
        ],
      },
      {
        title: 'CI/CD',
        items: [
          { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
          { name: 'Azure DevOps', icon: VscAzureDevops, color: '#3B9EFF' },
          { name: 'GitLab CI', icon: SiGitlab, color: '#FC6D26' },
        ],
      },
      {
        title: 'Cloud',
        items: [
          { name: 'AWS', icon: DiAws, color: '#FF9900' },
          { name: 'Azure', icon: VscAzure, color: '#3B9EFF' },
        ],
      },
      {
        title: 'Monitoring',
        items: [
          { name: 'Grafana', icon: SiGrafana, color: '#F46800' },
          { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C' },
          { name: 'Datadog', icon: SiDatadog, color: '#C4B5FD' },
        ],
      },
    ],
  },
];
