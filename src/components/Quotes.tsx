import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import { accentColor } from '../styles/base-colors';

const BlockQuote = styled.blockquote`
  border-left-color: ${accentColor};
`;

const Quotes = () => {
  return (
    <>
      <Fade left duration={1500}>
        <h3>Favorite Quotes</h3>
      </Fade>
      <Fade left duration={1500}>
        <BlockQuote className="flow-text">The best code is no code at all.</BlockQuote>
      </Fade>
      <Fade left duration={1500}>
        <BlockQuote className="flow-text">A clever person solves a problem. A wise person avoids it.</BlockQuote>
      </Fade>
    </>
  );
};

export default Quotes;
