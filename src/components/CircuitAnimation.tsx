import React from 'react';
import { motion } from 'framer-motion';

export const CircuitAnimation: React.FC = () => {
  const circuitPaths = [
    // Horizontal lines
    "M0,50 L200,50 L250,25 L400,25",
    "M0,150 L150,150 L200,125 L400,125", 
    "M0,250 L100,250 L150,275 L400,275",
    
    // Vertical lines
    "M100,0 L100,150 L125,200 L125,400",
    "M200,0 L200,100 L175,150 L175,400",
    "M300,0 L300,200 L275,250 L275,400",
  ];

  const nodes = [
    { x: 100, y: 50, size: 4 },
    { x: 200, y: 150, size: 6 },
    { x: 150, y: 250, size: 5 },
    { x: 300, y: 100, size: 4 },
    { x: 250, y: 200, size: 7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circuit Paths */}
        {circuitPaths.map((path, index) => (
          <g key={`path-${index}`}>
            {/* Base path */}
            <path
              d={path}
              stroke="url(#circuitGradient)"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            
            {/* Animated flowing line */}
            <motion.path
              d={path}
              stroke="#2dd4bf"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10 20"
              animate={{
                strokeDashoffset: [0, -30],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.2,
              }}
            />
          </g>
        ))}

        {/* Circuit Nodes */}
        {nodes.map((node, index) => (
          <motion.circle
            key={`node-${index}`}
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="url(#nodeGradient)"
            animate={{
              r: [node.size, node.size + 2, node.size],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3,
            }}
          />
        ))}

        {/* Gradients */}
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#0d9488" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.2" />
          </linearGradient>
          
          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="#5eead4" />
            <stop offset="100%" stopColor="#14b8a6" />
          </radialGradient>
        </defs>
      </svg>

      {/* Floating Data Packets */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`packet-${i}`}
            className="absolute w-2 h-2 bg-glacier-400 rounded-full shadow-lg"
            animate={{
              x: [0, 100, 200, 300, 400],
              y: [50 + i * 50, 25 + i * 50, 100 + i * 50, 150 + i * 50, 200 + i * 50],
              scale: [1, 1.5, 1, 0.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
            style={{
              filter: 'drop-shadow(0 0 4px rgba(20, 184, 166, 0.6))',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CircuitAnimation;