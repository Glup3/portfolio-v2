import React from 'react'

function About() {
  return (
    <section>
      <div className="block container">
        <div>
          <h1>About</h1>
          <p className="flow-text">Phuc Tran | 17 years old | Student</p>
          <p className="flow-text">
            I'm currently attending the <span className="blue lighten-4">best school</span> for higher technical education: <a href="http://www.spengergasse.at" target="blank">Spengergasse</a>
          </p>
          <p className="flow-text">
            In the first years we learn <span className="blue lighten-4">object orientated programming</span> basics and patterns.
            We start with simple console applications, continue with desktop application
            and graduate with <span className="blue lighten-4">mobile and web</span> applications. After 5 years of school we are
            skilled enough to <span className="blue lighten-4">solve</span> all kinds of <span className="blue lighten-4">problems</span>.
          </p>
          <p className="flow-text">
            I love to code in my spare time, but there are also a lot of other things I do, like
            practising <span className="blue lighten-4">taekwondo</span>, running, skating, reading books / mangas / light novels,
            watching animes, playing <span className="blue lighten-4">computer games</span>, studying japanese, ...
          </p>
          <blockquote className="flow-text">
            The best code is no code at all.
          </blockquote>
          <blockquote className="flow-text">
            A clever person solves a problem. A wise person avoids it.
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default About
