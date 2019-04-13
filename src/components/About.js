import React from 'react'

function About() {
  return (
    <div className="block container">
      <div>
        <h1>About</h1>
        <p className="flow-text">Phuc Tran | 17 years old | Student</p>
        <p className="flow-text">I'm currently attending the best school for higher technical education: <a href="http://www.spengergasse.at" target="blank">Spengergasse</a></p>
        <p className="flow-text">
          In the first years we learn object orientated programming basics and patterns.
          We start with simple console applications, continue with desktop application
          and graduate with mobile and web applications. After 5 years of school we are
          skilled enough to solve all kinds of problems.
        </p>
        <p className="flow-text">
          I love to code in my spare time, but there are also a lot of other things I do, like
          practising taekwondo, running, skating, reading books / mangas / light novels, watching animes, playing computer games, studying japanese, ...
        </p>
        <blockquote className="flow-text">
          The best code is no code at all.
        </blockquote>
        <blockquote className="flow-text">
          A clever person solves a problem. A wise person avoids it.
        </blockquote>
        
      </div>
    </div>
  )
}

export default About
