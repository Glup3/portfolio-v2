import React from 'react';
import Fade from 'react-reveal/Fade';
import HighlightText from './HighlightText';

const duration = 1500;

const Story = () => {
  return (
    <>
      <Fade left duration={duration}>
        <p className="flow-text">Student | Phuc Tran | 18 years old | male</p>
      </Fade>
      <Fade left duration={duration}>
        <p className="flow-text">
          I&apos;m in my last year of <HighlightText text="high school" /> and I learn how to code.
        </p>
      </Fade>
      <Fade left duration={duration}>
        <p className="flow-text">
          I started coding in 2015 and learned basic object orientated programming. The first years were just getting
          basic knowledge and understanding the fundamentals. In <HighlightText text="2017" /> I started working on{' '}
          <HighlightText text="projects" /> and since then I feel <HighlightText text="pretty comfy about my skills" />.
        </p>
      </Fade>
      <Fade left duration={duration}>
        <p className="flow-text">
          I am a <HighlightText text="full stack developer" /> and I have experience with many technologies:{' '}
          <HighlightText text="Frontend" />, <HighlightText text="Backend" />, Database, Mobile Apps, Version Control,
          CI/CD, <HighlightText text="Docker" />, ...
        </p>
      </Fade>
      <Fade left duration={duration}>
        <p className="flow-text">
          I love to code in my spare time, but there are also a lot of other things I do. I like to do sports, skating,
          reading books / mangas / light novels, watching anime, playing video games, studying japanese and many more.
        </p>
      </Fade>
    </>
  );
};

export default Story;
