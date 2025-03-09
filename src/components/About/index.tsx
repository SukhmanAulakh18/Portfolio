import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ResumeDownload } from '../../components/ResumeDownload';
import profilePhoto from '../../assets/images/Pfp.jpg';
import { Book, BookOpen, Film, Dumbbell, Code, Server, Database, Cloud, GitBranch, Monitor, Terminal, Layers, Globe, Award } from 'lucide-react';
import './About.css';

const FloatingElements: React.FC = () => {
  return (
    <div className="about-floating-elements">
      {[...Array(8)].map((_, i) => (
        <motion.div 
          key={i}
          className="about-floating-element"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 25 + 8}px`,
            height: `${Math.random() * 25 + 8}px`,
            opacity: Math.random() * 0.4 + 0.1,
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

const About = () => {
  const [activeTab, setActiveTab] = useState('professional');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const tabs = [
    { id: 'professional', label: 'Professional' },
    { id: 'personal', label: 'Personal' },
    { id: 'skills', label: 'Skills' }
  ];

  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "C/C++", icon: <Code size={20} /> },
        { name: "C#", icon: <Code size={20} /> },
        { name: "Java", icon: <Code size={20} /> },
        { name: "Python", icon: <Code size={20} /> },
        { name: "JavaScript/TypeScript", icon: <Code size={20} /> },
        { name: "SQL", icon: <Database size={20} /> }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS (EC2, S3, Lambda)", icon: <Cloud size={20} /> },
        { name: "Docker", icon: <Layers size={20} /> },
        { name: "CI/CD", icon: <GitBranch size={20} /> }
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "React.js", icon: <Globe size={20} /> },
        { name: "Angular", icon: <Globe size={20} /> },
        { name: "Node.js", icon: <Server size={20} /> },
        { name: "MongoDB", icon: <Database size={20} /> }
      ]
    },
    {
      category: "Development Tools",
      skills: [
        { name: "Git", icon: <GitBranch size={20} /> },
        { name: "VS Code", icon: <Code size={20} /> },
        { name: "Figma", icon: <Monitor size={20} /> }
      ]
    }
  ];

  const interests = [
    { name: 'Cricket', icon: <Award size={20} /> },
    { name: 'Football', icon: <Dumbbell size={20} /> },
    { name: 'Reading', icon: <Book size={20} /> },
    { name: 'History', icon: <BookOpen size={20} /> },
    { name: 'Movies', icon: <Film size={20} /> }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-background">
        <div className="about-gradient-blob"></div>
        <div className="about-gradient-blob secondary"></div>
        <div className="about-grid-pattern"></div>
        <FloatingElements />
      </div>
      
      <motion.div 
        className="about-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
  className="profile-container"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }}
>
  <div className="profile-photo-container">
    <img 
      src={profilePhoto} 
      alt="Sukhmanpreet Singh Aulakh" 
      className="profile-photo"
    />
  </div>
  
  <div className="profile-content">
    <motion.h3 
      className="profile-name"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
    </motion.h3>
    
    <motion.h4 
      className="profile-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.5 }}
    >
    </motion.h4>
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.5 }}
    >
      <p>
        Hey there! I'm a passionate developer who loves turning ideas into reality through code.
        My journey began with curiosity about how things work, which led me to explore the world of software development.
      </p>
      <p>
        I enjoy creating solutions that make a difference, whether it's a sleek user interface or robust backend systems.
        Every day is a new learning opportunity, and I'm always excited to take on new challenges.
      </p>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3, duration: 0.5 }}
    >
      <ResumeDownload className="resume-button" />
    </motion.div>
  </div>
</motion.div>

        <motion.div 
          className="tabs-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <div className="tabs-header">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 + (index * 0.1), duration: 0.5 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === 'professional' && (
              <motion.div 
                className="professional-content fade-in"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3>My Journey</h3>
                <p>
                  I believe technology should make life better for everyone. That's why I focus on creating 
                  software that's not just functional, but also intuitive and accessible.
                </p>
                <p>
                  Looking ahead, I want to be part of projects that push boundaries and make meaningful impact.
                  I thrive in collaborative environments where ideas flow freely and innovation is encouraged.
                </p>
                <p>
                  Every project is an opportunity to learn something new and refine my craft. The best part of 
                  development is seeing how your work can simplify complex problems and create delightful experiences.
                </p>
              </motion.div>
            )}
            
            {activeTab === 'personal' && (
              <motion.div 
                className="personal-content fade-in"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3>Beyond The Screen</h3>
                <p>
                  When I close my laptop, you'll likely find me enjoying the outdoors or engaged in one of my favorite activities.
                  Balance is important, and these pursuits keep me energized and inspired.
                </p>
                
                <h4>Sports & Activities</h4>
                <p>
                  Nothing beats the excitement of a cricket match or the thrill of a football game! These sports have taught me 
                  teamwork and strategy that I bring to my professional work too.
                </p>
                
                <h4>Books & Knowledge</h4>
                <p>
                  I'm a bit of a history buff and love getting lost in books that transport me to different eras.
                  Reading broadens my perspective and often sparks creative solutions to coding challenges.
                </p>
                
                <h4>Downtime</h4>
                <p>
                  Movies are my escape - whether it's an action-packed blockbuster or a thought-provoking indie film.
                  I also enjoy board games with friends, combining strategy with good conversation.
                </p>
                
                <div className="interests-container">
                  {interests.map((interest, index) => (
                    <motion.div 
                      key={index} 
                      className="interest-tag"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring" }}
                    >
                      <span className="interest-icon">{interest.icon}</span>
                      <span>{interest.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {activeTab === 'skills' && (
              <motion.div 
                className="skills-content fade-in"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3>My Toolbox</h3>
                <p className="skills-intro">
                  Here's what I work with to bring ideas to life. I'm always experimenting with new tools and approaches!
                </p>
                
                <div className="skills-grid">
                  {skillCategories.map((category, categoryIndex) => (
                    <motion.div 
                      key={categoryIndex} 
                      className="skill-category"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * categoryIndex, duration: 0.5 }}
                    >
                      <h4>{category.category}</h4>
                      <div className="skill-tags">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div 
                            key={skillIndex} 
                            className="skill-tag"
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring" }}
                          >
                            <span className="skill-icon">{skill.icon}</span>
                            <span>{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <p className="skills-footnote">
                  The journey of learning never stops. I'm always exploring new technologies that can help me craft better solutions.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;