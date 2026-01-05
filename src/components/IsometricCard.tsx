import React from 'react';
import { motion } from 'framer-motion';

interface IsometricCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
  delay?: number;
}

export const IsometricCard: React.FC<IsometricCardProps> = ({
  title,
  description,
  icon,
  color = "glacier-500",
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10,
        rotateX: 10,
        rotateY: 5,
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="relative group perspective-1000"
    >
      {/* Main Card */}
      <div className="glass-card rounded-xl p-6 transform-gpu transition-all duration-300 group-hover:shadow-2xl">
        {/* Isometric Shadow */}
        <div className="absolute inset-0 bg-gradient-to-br from-glacier-200/20 to-glacier-400/20 rounded-xl transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-glacier-400/0 via-glacier-400/10 to-glacier-400/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon Container */}
          <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${color} to-glacier-600 flex items-center justify-center text-foreground shadow-lg`}>
              {icon}
            </div>
          </div>
          
          {/* Title */}
          <h3 className="font-semibold text-lg mb-2 gradient-text-animated group-hover:text-glacier-700 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {description}
          </p>
          
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-glacier-300/30 transition-colors duration-300" />
          
          {/* Corner Accents */}
          <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-glacier-400 to-glacier-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-br from-glacier-300 to-glacier-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-glacier-400 rounded-full"
            animate={{
              y: [-10, -30, -10],
              x: [0, 10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{
              left: `${30 + i * 20}%`,
              top: "20%",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default IsometricCard;