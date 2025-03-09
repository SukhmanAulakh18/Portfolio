import React from 'react';
import { Project } from '../../data/projects'; // Assuming Project type is exported from this file

interface ProjectCardProps {
  project?: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="project-card">
          <h3>{project?.name}</h3>
          <p>{project?.description}</p>
          {/* Add more project details here such as technologies, links, etc. */}
        </div>
      );
};

export default ProjectCard;