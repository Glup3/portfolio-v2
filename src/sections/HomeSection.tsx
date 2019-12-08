import React from 'react';
import Fade from 'react-reveal/Fade';

import SectionWrapper from '../components/SectionWrapper';
import SocialIcons from '../components/SocialIcons';
import Avatar from '../components/Avatar';
import Greeting from '../components/Greeting';
import Titles from '../components/Titles';

const HomeSection = () => {
  return (
    <SectionWrapper id="home" center={true}>
      <Avatar />
      <Greeting />
      <Fade bottom distance="100vh" duration={1300}>
        <Titles />
        <SocialIcons />
      </Fade>
    </SectionWrapper>
  );
};

export default HomeSection;
