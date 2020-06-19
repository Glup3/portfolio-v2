import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import { boxShadow } from '../styles/base-colors';
import pikachu from '../assets/Pikachu225.jpg';

const ProfileImage = styled.img`
  display: block;
  width: 12.5em;
  height: 12.5em;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  box-shadow: ${boxShadow};
`;

const Avatar = () => {
  return (
    <Fade left distance="100vw" duration={1300}>
      <ProfileImage src={pikachu} alt="profile" />
    </Fade>
  );
};

export default Avatar;
