import React from 'react';
import Fade from 'react-reveal/Fade';

import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';

const projects: Project[] = [
  {
    title: 'Spenger Survival',
    description: 'Tips Collection for Spengergasse',
    images: ['fab fa-react', 'fab fa-docker'],
    moreLink: 'https://github.com/Glup3/spenger-survival-frontend',
    website: 'https://spenger-survival.at/',
  },
  {
    title: 'Watch with me',
    description: 'Watch2Gether Clone',
    images: ['fab fa-react', 'fab fa-node'],
    moreLink: 'https://github.com/Glup3/watch-with-me',
    website: 'https://watch-with-me-glup3.herokuapp.com/',
  },
  {
    title: 'Portfolio v2',
    description: 'Current online Portfolio',
    images: ['fab fa-react', 'fab fa-github'],
    moreLink: 'https://github.com/Glup3/portfolio-v2',
  },
  {
    title: 'React Blog',
    description: 'Blog with Real-Time Updates',
    images: ['fab fa-react', 'fas fa-fire-alt'],
    moreLink: 'https://github.com/Glup3/react-blog',
    website: 'https://react-blog-5862a.firebaseapp.com/signin',
  },
  {
    title: 'Timeru',
    description: 'Time Tracking Tool',
    images: ['fab fa-react', 'fab fa-node'],
    moreLink: 'https://github.com/Glup3/portfolio-v2',
  },
];

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
      <Fade clear>
        <h1>Projects</h1>
      </Fade>
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} additionalDuration={index * 100} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
