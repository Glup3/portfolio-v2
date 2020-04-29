import React from 'react';
import Zoom from 'react-reveal/Zoom';
import TechItem from '../components/TechItem';
import SectionWrapper from '../components/SectionWrapper';

const technologies: Technology[] = [
  { title: 'HTML', special: false },
  { title: 'CSS', special: false },
  { title: 'JavaScript', special: true },
  { title: 'Typescript', special: false },
  { title: 'NodeJS', special: true },
  { title: 'ReactJS', special: true },
  { title: 'Angular', special: false },
  { title: 'Express', special: false },
  { title: 'Django', special: false },
  { title: 'Spring', special: false },
  { title: 'Bootstrap', special: true },
  { title: 'Materialize', special: false },
  { title: 'Websockets', special: false },
  { title: 'Java', special: true },
  { title: 'Android', special: false },
  { title: 'C#', special: false },
  { title: 'Python', special: false },
  { title: 'Flutter', special: true },
  { title: 'GitHub', special: true },
  { title: 'Bitbucket', special: false },
  { title: 'MySQL', special: true },
  { title: 'PLSQL', special: false },
  { title: 'PostgreSQL', special: false },
  { title: 'MongoDB', special: false },
  { title: 'Firebase', special: false },
  { title: 'Bash', special: false },
  { title: 'Unity', special: false },
  { title: 'GraphQL', special: true },
  { title: 'REST', special: false },
  { title: 'Docker', special: true },
  { title: 'Microservices', special: false },
  { title: 'NGINX', special: false },
  { title: 'Jenkins', special: false },
  { title: 'CI/CD', special: false },
  { title: 'Cisco', special: false },
  { title: 'Windows', special: false },
  { title: 'Linux', special: false },
  { title: 'MacOS', special: true },
];

const TechnologySection = () => {
  return (
    <SectionWrapper id="tech">
      <Zoom top duration={1500}>
        <h1>Tech Stack</h1>
        <div className="row">
          {technologies.map((item, index) => (
            <TechItem title={item.title} special={item.special} key={`item-${index}`} />
          ))}
        </div>
      </Zoom>
    </SectionWrapper>
  );
};

export default TechnologySection;
