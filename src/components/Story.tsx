import React from 'react';
import Fade from 'react-reveal/Fade';

const duration = 1500;

const Story = () => {
  return (
    <>
      <Fade left duration={duration}>
        <p className="flow-text">Student | Phuc Tran | 18 years old | male</p>
      </Fade>
      <Fade left duration={duration}>
        <p className="flow-text">I&apos;m in my last year of high school and I learn how to code.</p>
      </Fade>
      <Fade left duration={duration}>
        <p className="flow-text">
          I started coding in 2015 and learned basic object orientated programming. The first years were just getting
          basic knowledge and understanding the fundamentals. In 2017 I started working on projects and since then I
          feel pretty comfy about my skills.
        </p>
      </Fade>
      <Fade left duration={duration}>
        <p className="flow-text">
          I am a full stack developer and I have experience with many technologies: Frontend, Backend, Database, Mobile
          Apps, Version Control, CI/CD, Docker, ...
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
