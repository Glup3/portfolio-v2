import React from 'react';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import pikachu from '../assets/Pikachu225.jpg';
import IconsSocial from '../components/IconsSocial';

const HomeSection = () => {
  return (
    <section>
      <div className="block container">
        <div className="center scrollspy" id="home">
          <Fade left distance="100vw" duration={1300}>
            <img src={pikachu} alt="profile" className="profile-pic z-depth-2" />
          </Fade>
          <Bounce top duration={1300}>
            <h1>Hey, I&apos;m Phuc!</h1>
          </Bounce>
          <Fade bottom distance="100vh" duration={1300}>
            <div className="progress blue lighten-4">
              <div className="determinate light-blue darken-1" style={{ width: `${100}%` }}></div>
            </div>
            <h5>Full Stack Dev | Junior Developer | Unsatisfied Curiosity</h5>
            <IconsSocial />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
