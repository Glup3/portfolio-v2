import React from 'react';
import Fade from 'react-reveal/Fade';

import SocialIcons from '../components/SocialIcons';
import Avatar from '../components/Avatar';
import Greeting from '../components/Greeting';
import Titles from '../components/Titles';

const HomeSection = () => {
  return (
    <section>
      <div className="block container">
        <div className="center scrollspy" id="home">
          <Avatar />
          <Greeting />
          <Fade bottom distance="100vh" duration={1300}>
            <Titles />
            <SocialIcons />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
