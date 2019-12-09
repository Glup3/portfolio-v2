import React from 'react';
import Fade from 'react-reveal/Fade';

interface ProjectCardPropsType {
  project: Project;
  additionalDuration: number;
}

const ProjectCard = ({ project, additionalDuration }: ProjectCardPropsType) => {
  return (
    <Fade top duration={1500 - 2 * additionalDuration}>
      <div className="col s12 m6 l4">
        <div className="card small">
          <div className="card-content center">
            <h4>{project.title}</h4>
            <p className="project-description">{project.description}</p>
            {project.images.map((img, index) => (
              <i key={`pi-${index}`} className={`project-icon ${img}`}></i>
            ))}
          </div>
          <div className="card-action">
            {project.moreLink && (
              <a target="_blank" href={project.moreLink} rel="noopener noreferrer">
                More
              </a>
            )}
            {project.website && (
              <a target="_blank" href={project.website} rel="noopener noreferrer">
                Link
              </a>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ProjectCard;
