import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import pikachu from '../assets/Pikachu225.jpg';

const ProfileImage = styled.img`
  display: block;
  width: 12.5em;
  height: 12.5em;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
`;

const Avatar = () => {
  return (
    <Fade left distance="100vw" duration={1300}>
      <ProfileImage src={pikachu} alt="profile" className="z-depth-2" />
    </Fade>
  );
};

export default Avatar;
