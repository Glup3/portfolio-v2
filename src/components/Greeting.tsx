import React from 'react';
import Bounce from 'react-reveal/Bounce';
import styled from 'styled-components';

import { primaryColor } from '../styles/base-colors';

const Title = styled.h1`
  color: ${primaryColor};
`;

const Greeting = () => {
  return (
    <Bounce top duration={1300}>
      <Title>Hey, I&apos;m Phuc!</Title>
    </Bounce>
  );
};

export default Greeting;
