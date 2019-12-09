import React from 'react';
import Fade from 'react-reveal/Fade';

import Quotes from '../components/Quotes';
import Story from '../components/Story';
import SectionWrapper from '../components/SectionWrapper';

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <Fade left duration={1500}>
        <h1>About Me</h1>
      </Fade>
      <Story />
      <Quotes />
    </SectionWrapper>
  );
};

export default AboutSection;
