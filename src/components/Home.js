import React from 'react';
import pikachu from '../images/Pikachu225.jpg';
import IconsSocial from './IconsSocial';

function Home() {
  return (
    <section>
      <div className="block container">
        <div className="center scrollspy" id="home">
          <img src={pikachu} alt="profile" className="profile-pic z-depth-2"/>
          <h1>Hey, I'm Phuc!</h1>
          <div className="progress blue lighten-4">
              <div className="indeterminate light-blue darken-1"></div>
          </div>
          <h5>Full Stack Dev | Junior Developer | Unsatisfied Curiosity</h5>
          <IconsSocial />
        </div>
      </div>
    </section>
  )
}

export default Home
