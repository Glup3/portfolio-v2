import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import theme from 'styled-theming';
import { accentColor, strongPrimaryColor } from '../styles/base-colors';

interface ProjectCardPropsType {
  project: Project;
  additionalDuration: number;
}

const elevatedSurfaceColor = theme('mode', {
  light: '#ffffff',
  dark: '#272727',
});

const Card = styled.div`
  background-color: ${elevatedSurfaceColor};

  .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating) {
    color: ${accentColor} !important;
    text-transform: none;
  }
`;

const ProjectIcon = styled.i`
  font-size: 3em;
  color: ${strongPrimaryColor};
  padding: 10px;
`;

const ProjectDescription = styled.p`
  padding-bottom: 15px;
`;

const ProjectCard = ({ project, additionalDuration }: ProjectCardPropsType) => {
  return (
    <Fade top duration={1500 - 2 * additionalDuration}>
      <div className="col s12 m6 l4">
        <Card className="card small">
          <div className="card-content center">
            <h4>{project.title}</h4>
            <ProjectDescription>{project.description}</ProjectDescription>
            {project.images.map((img, index) => (
              <ProjectIcon key={`pi-${index}`} className={`${img}`}></ProjectIcon>
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
                Website
              </a>
            )}
          </div>
        </Card>
      </div>
    </Fade>
  );
};

export default ProjectCard;
