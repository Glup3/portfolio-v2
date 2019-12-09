import React from 'react';
import Fade from 'react-reveal/Fade';

const Quotes = () => {
  return (
    <>
      <Fade left duration={1500}>
        <h3>Favorite Quotes</h3>
      </Fade>
      <Fade left duration={1500}>
        <blockquote className="flow-text">The best code is no code at all.</blockquote>
      </Fade>
      <Fade left duration={1500}>
        <blockquote className="flow-text">A clever person solves a problem. A wise person avoids it.</blockquote>
      </Fade>
    </>
  );
};

export default Quotes;
