import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Code, Database, Server } from 'lucide-react';
import './Hero.css';

// Define TypeScript interfaces
interface TypingTextProps {
  texts: string[];
  delay?: number;
  className?: string;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const TypingText: React.FC<TypingTextProps> = ({ texts, delay = 0, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    
    // Typing - SLOWER
    if (!isDeleting && currentIndex < texts[textIndex].length) {
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev + texts[textIndex][currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 90 + Math.random() * 40); // Increased from 50+30 to 90+40
    } 
    // Pause at the end before deleting - LONGER
    else if (!isDeleting && currentIndex >= texts[textIndex].length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200); // Increased from 1500 to 2200
    }
    // Deleting - SLOWER
    else if (isDeleting && currentIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        setCurrentIndex(prevIndex => prevIndex - 1);
      }, 60 + Math.random() * 30); // Increased from 30+20 to 60+30
    }
    // Move to next text - ADDED PAUSE
    else if (isDeleting && currentIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 700); // Added pause between texts (was immediate)
    }
    
    return () => { if (timeout) clearTimeout(timeout); };
  }, [currentIndex, texts, isDeleting, textIndex]);

  return (
    <span className={className}>
      {displayedText}
      <span className="typing-cursor"></span>
    </span>
  );
};

const MouseSparkles: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create sparkles on movement with throttling
      if (Math.random() > 0.6) {
        const newSparkle: Sparkle = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 10 + 3,
          color: `hsl(${Math.random() * 60 + 200}, 80%, 60%)`,
        };
        
        setSparkles(prev => [...prev, newSparkle]);
        
        // Remove older sparkles if there are too many
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
        }, 1000);
      }
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 100 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  useEffect(() => {
    x.set(mousePosition.x);
    y.set(mousePosition.y);
  }, [mousePosition, x, y]);
  
  return (
    <>
      <motion.div 
        className="cursor-follower"
        style={{ 
          x: springX, 
          y: springY 
        }}
      />
      {sparkles.map(sparkle => (
        <motion.div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            background: sparkle.color,
          }}
          initial={{ scale: 0.2, opacity: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      ))}
    </>
  );
};

const FloatingElements: React.FC = () => {
  return (
    <div className="floating-elements">
      {[...Array(10)].map((_, i) => (
        <motion.div 
          key={i}
          className="floating-element"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 30 + 10}px`,
            height: `${Math.random() * 30 + 10}px`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
          animate={{
            y: [0, Math.random() * 30 - 15, 0],
            rotate: [0, Math.random() * 360, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Icon component with animation
const AnimatedIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div>
      {children}
    </motion.div>
  );
};
const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // List of skills/titles to cycle through
  const skillsList = [
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Database Administrator", 
    "Cloud Solutions Architect",
    "DevOps Engineer",
    "Frontend Specialist",
    "Backend Developer"
  ];
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-blob"></div>
        <div className="gradient-blob secondary"></div>
        <div className="grid-pattern"></div>
        <FloatingElements />
      </div>
      
      {isLoaded }
      
      <motion.div 
        className="hero-content container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="typing-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.span className="greeting">
            Hello, I'm
          </motion.span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="glowing-text"
        >
          Sukhmanpreet Singh Aulakh
        </motion.h1>
        
        <motion.div 
          className="title-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <div className="role-wrapper">
            <TypingText texts={skillsList} className="animated-skill" delay={1.5} />
          </div>
          <motion.div 
            className="tech-icons"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.4, type: "spring", stiffness: 200 }}
          >
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring" }}>
              <Code size={20} />
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring" }}>
              <Database size={20} />
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring" }}>
              <Server size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          Building elegant solutions for complex problems with modern technologies
        </motion.p>
        
        <motion.div 
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.5 }}
        >
          <motion.a 
            href="#projects" 
            className="primary-button"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(59, 130, 246, 0.6)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="button-text">View My Work</span>
            <span className="button-shine"></span>
          </motion.a>
          <motion.a 
            href="#contact" 
            className="secondary-button"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.15)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.0, duration: 0.5 }}
        >
          <motion.a 
            href="https://github.com/SukhmanAulakh18" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon github"
            whileHover={{ 
              scale: 1.2, 
              backgroundColor: "#24292e"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <AnimatedIcon>
              <Github size={22} />
            </AnimatedIcon>
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/sukhmanpreetsinghaulakh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon linkedin"
            whileHover={{ 
              scale: 1.2, 
              backgroundColor: "#0077B5"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <AnimatedIcon>
              <Linkedin size={22} />
            </AnimatedIcon>
          </motion.a>
          <motion.a 
            href="mailto:your-email@example.com" 
            className="social-icon mail"
            whileHover={{ 
              scale: 1.2, 
              backgroundColor: "#ea4335"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <AnimatedIcon>
              <Mail size={22} />
            </AnimatedIcon>
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={24} />
        </motion.div>
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          Scroll down
        </motion.span>
      </motion.div>
    </section>
  );
};

export default Hero;