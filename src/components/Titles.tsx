import React from 'react';
import styled from 'styled-components';

import { primaryColor } from '../styles/base-colors';

const Title = styled.h5`
  color: ${primaryColor};
`;

const Titles = () => {
  return (
    <>
      <div className="progress blue lighten-4">
        <div className="determinate light-blue darken-1" style={{ width: `${100}%` }}></div>
      </div>
      <Title>Full Stack Software Engineer | Eager to learn new things</Title>
    </>
  );
};

export default Titles;
