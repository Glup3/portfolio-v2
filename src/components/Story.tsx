import React from 'react';
import Fade from 'react-reveal/Fade';
import HighlightText from './HighlightText';

const duration = 1500;

const Story = () => {
  return (
    <>
      <Fade left duration={duration}>
        <p className="flow-text">Software Engineer | Phuc Tran | 18 years old | male</p>
      </Fade>
      <Fade left duration={duration}>
        <p className="flow-text">
          I graduated from high school with a <HighlightText text="specilization in IT" />. I am coding since 2015 and I
          have worked with many <HighlightText text="different technologies" />. I can create desktop apps, mobile apps
          and web apps from scratch.
        </p>
      </Fade>
      <Fade left duration={duration}>
        <p className="flow-text">
          I worked as an <HighlightText text="intern" /> for two different companies. Each internship was 2 months long
          and I worked as a tester and web developer. I also did some <HighlightText text="freelancing" /> as a web
          developer for a different company which lasted 5 months.
        </p>
      </Fade>
      <Fade left duration={duration}>
        <p className="flow-text">
          I <HighlightText text="love to code" /> in my spare time, but besides that I like to do many other things. I
          like to study japanese, play video games, do sports and read mangas / light novels.
        </p>
      </Fade>
    </>
  );
};

export default Story;
