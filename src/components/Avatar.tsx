import React from 'react';
import Fade from 'react-reveal/Fade';

import pikachu from '../assets/Pikachu225.jpg';

const Avatar = () => {
  return (
    <Fade left distance="100vw" duration={1300}>
      <img src={pikachu} alt="profile" className="profile-pic z-depth-2" />
    </Fade>
  );
};

export default Avatar;
