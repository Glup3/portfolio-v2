import React from 'react';
import Fade from 'react-reveal/Fade';

const AboutSection = () => {
  return (
    <section>
      <div className="block container">
        <div className="scrollspy" id="about">
          <Fade left duration={1500}>
            <h1>About</h1>
          </Fade>
          <Fade left duration={1500}>
            <p className="flow-text">Phuc Tran | 17 years old | Student</p>
          </Fade>
          <Fade left duration={1500}>
            <p className="flow-text">
              I'm currently attending the <span className="blue lighten-4">best school</span> for higher technical education:{' '}
              <a href="http://www.spengergasse.at" target="blank">
                Spengergasse
              </a>
            </p>
          </Fade>
          <Fade left duration={1500}>
            <p className="flow-text">
              In the first years we learn <span className="blue lighten-4">object orientated programming</span> basics and patterns. We start with simple console applications,
              continue with desktop application and graduate with <span className="blue lighten-4">mobile and web</span> applications. After 5 years of school we are skilled enough
              to <span className="blue lighten-4">solve</span> all kinds of <span className="blue lighten-4">problems</span>.
            </p>
          </Fade>
          <Fade left duration={1500}>
            <p className="flow-text">
              I love to code in my spare time, but there are also a lot of other things I do, like practising <span className="blue lighten-4">taekwondo</span>, running, skating,
              reading books / mangas / light novels, watching animes, playing <span className="blue lighten-4">computer games</span>, studying japanese, ...
            </p>
          </Fade>
          <Fade left duration={1500}>
            <blockquote className="flow-text">The best code is no code at all.</blockquote>
          </Fade>
          <Fade left duration={1500}>
            <blockquote className="flow-text">A clever person solves a problem. A wise person avoids it.</blockquote>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
