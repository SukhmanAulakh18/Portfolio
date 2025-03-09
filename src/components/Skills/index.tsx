import React, { useState } from 'react';
import { skillsData, SkillCategory } from '../../data/skills';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(skillsData[0].category);

  const handleCategoryChange = (category: string): void => {
    setActiveCategory(category);
  };

  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-filter">
        {skillsData.map((skillCategory) => (
          <button
            key={skillCategory.category}
            className={activeCategory === skillCategory.category ? 'active' : ''}
            onClick={() => handleCategoryChange(skillCategory.category)}
          >
            <span className="category-icon">{skillCategory.icon}</span>
            {skillCategory.category}
          </button>
        ))}
      </div>
      <div className="skills-container">
        {skillsData
          .find((skillCategory) => skillCategory.category === activeCategory)
          ?.skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <div className="skill-proficiency" style={{ width: `${skill.proficiency}%` }} />
              </div>
              <div className="skill-percentage">{skill.proficiency}%</div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Skills;