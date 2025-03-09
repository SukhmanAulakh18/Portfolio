import React from 'react';
import { experienceData } from '../../data/experience';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-timeline">
        {experienceData.map((job, index) => (
          <div key={index} className="experience-item">
            <div className="experience-company">
              {job.logo && <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />}
              <div className="experience-details">
                <h3>{job.position}</h3>
                <h4>{job.company}</h4>
                <p>{job.duration}</p>
                <ul>
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;