import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-scroll';
import { Moon, Sun } from 'lucide-react';
import ResumeViewer from '../ResumeViewer';
import './Header.css';

const MouseSparkles: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number, size: number, color: string}>>([]);
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create sparkles on movement with throttling
      if (Math.random() > 0.6) {
        const newSparkle = {
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

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    setIsLoaded(true);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Implement actual theme switching logic here
  };

  return (
    <>
      {isLoaded && <MouseSparkles />}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-background">
          <div className="header-gradient-blob"></div>
          <div className="header-grid-pattern"></div>
        </div>
        <div className="header-container">
          <div className="logo-container">
  <Link to="hero" smooth={true} duration={800} className="logo-link">
    <motion.div 
      className="logo"
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="logo-initials"
        whileHover={{ 
          scale: 1.05,
          color: "#00d4ff", 
          transition: { duration: 0.3 } 
        }}
      >
        <span className="logo-letter">S</span>
        <span className="logo-letter letter-a">A</span>
        <div className="logo-glow"></div>
      </motion.div>
    </motion.div>
  </Link>
</div>
          
          <button 
            className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {['hero', 'about', 'projects', 'contact'].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Link 
                    to={item} 
                    smooth={true} 
                    duration={500} 
                    offset={item === 'hero' ? 0 : -70}
                    onClick={() => setMenuOpen(false)}
                    className="nav-link"
                    activeClass="active"
                    spy={true}
                  >
                    {item === 'hero' ? 'Home' : 
                     item === 'about' ? 'About Me' : 
                     item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className="nav-indicator"></span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
          
          <div className="header-buttons">
            <motion.button 
              className="theme-toggle"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              initial={{ opacity: 0, rotate: -20 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
                <ResumeViewer className="header-resume-btn" />
            </motion.div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;