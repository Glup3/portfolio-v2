import React from 'react';
import Fade from 'react-reveal/Fade';
import SectionWrapper from '../components/SectionWrapper';

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
      <Fade clear>
        <h1>Projects</h1>
      </Fade>
      <div className="row">
        <Fade left top>
          <div className="col s12 m6 l4">
            <div className="card small">
              <div className="card-content center">
                <span className="card-title">iWeep</span>
                <p className="flow-text">Alarmclock written in Flutter</p>
                <i className="fab fa-android project-icon"></i>
                <i className="fab fa-apple project-icon"></i>
              </div>
              <div className="card-action">
                <a target="_blank" href="https://github.com/Glup3/iWeep" rel="noopener noreferrer">
                  More
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <Fade top>
          <div className="col s12 m6 l4">
            <div className="card small">
              <div className="card-content center">
                <span className="card-title">Watch with me</span>
                <p className="flow-text">Watch2Gether clone (realtime)</p>
                <i className="fab fa-react project-icon"></i>
                <i className="fab fa-npm project-icon"></i>
              </div>
              <div className="card-action">
                <a target="_blank" href="https://github.com/Glup3/watch-with-me" rel="noopener noreferrer">
                  More
                </a>
                <a target="_blank" href="https://watch-with-me-glup3.herokuapp.com/" rel="noopener noreferrer">
                  Link
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <Fade right top>
          <div className="col s12 m6 l4">
            <div className="card small">
              <div className="card-content center">
                <span className="card-title">AniLife</span>
                <p className="flow-text">Anime information App (AniList)</p>
                <i className="fab fa-android project-icon"></i>
                <i className="fab fa-apple project-icon"></i>
              </div>
              <div className="card-action">
                <a target="_blank" href="https://github.com/Glup3/AniLife" rel="noopener noreferrer">
                  More
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <Fade left bottom>
          <div className="col s12 m6 l4">
            <div className="card small">
              <div className="card-content center">
                <span className="card-title">React Blog</span>
                <p className="flow-text">Real-time update blog (Firestore)</p>
                <i className="fab fa-react project-icon"></i>
                <i className="fas fa-fire-alt project-icon"></i>
              </div>
              <div className="card-action">
                <a target="_blank" href="https://github.com/Glup3/react-blog" rel="noopener noreferrer">
                  More
                </a>
                <a target="_blank" href="https://react-blog-5862a.firebaseapp.com/signin" rel="noopener noreferrer">
                  Link
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <Fade bottom>
          <div className="col s12 m6 l4">
            <div className="card small">
              <div className="card-content center">
                <span className="card-title">Lichtelwiki</span>
                <p className="flow-text">Picture Pokedex (PokeApi)</p>
                <i className="fab fa-react project-icon"></i>
                <i className="far fa-images project-icon"></i>
              </div>
              <div className="card-action">
                <a target="_blank" href="https://github.com/Glup3/iWeep" rel="noopener noreferrer">
                  More
                </a>
                <a target="_blank" href="https://glup3.github.io/lichtelwiki/" rel="noopener noreferrer">
                  Link
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <Fade right bottom>
          <div className="col s12 m6 l4">
            <div className="card small">
              <div className="card-content center">
                <span className="card-title">Portfolio v2</span>
                <p className="flow-text">Clean online Portfolio (current)</p>
                <i className="fab fa-react project-icon"></i>
                <i className="fab fa-google project-icon"></i>
              </div>
              <div className="card-action">
                <a target="_blank" href="https://github.com/Glup3/portfolio-v2" rel="noopener noreferrer">
                  More
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
