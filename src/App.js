import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import experiences from './dataexperiences';
import educations from './dataeducations';
import interests from './datainterests';
import { useState, useCallback, useEffect } from 'react';

const EXPERIENCES = experiences;
const EDUCATIONS = educations;
const INTERESTS = interests;

function Experience(props) {
  const {experience} = props

  return (
    <div key={experience.id} className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
          <h3 className="mb-0">{experience.title}</h3>
          <div className="subheading mb-3">{experience.company}</div>
          <p>{experience.description}</p>
      </div>
      <div className="flex-shrink-0"><span className="text-primary">{experience.commencement} - {experience.termination}</span></div>
    </div>
  )
}

function ExperienceList(props) {
  const {experiences} = props

  return (
    <>
      {experiences.map(experience => (
        <Experience experience={experience} />
      ))}
    </>
  )
}

function Education(props) {
  const {education} = props

  return (
    <div key={education.id} className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
          <h3 className="mb-0">{education.title}</h3>
          <div className="subheading mb-3">{education.school}</div>
      </div>
      <div className="flex-shrink-0"><span className="text-primary">{education.commencement} - {education.termination}</span></div>
    </div>
  )
}

function EducationList(props) {
  const {educations} = props

  return (
    <>
      {educations.map(education => (
        <Education education={education} />
      ))}
    </>
  )
}

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

function App() {

  const [state, setState] = useState({
    experiences: EXPERIENCES,
    educations: EDUCATIONS,
    interests: INTERESTS
  })

  const isBreakpoint = useMediaQuery(768);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  // Función para actualizar el tamaño de la pantalla
  const updateWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  // Usa useEffect para suscribirte al evento de cambio de tamaño de la ventana
  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);

    // Limpia la suscripción cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  // Define una función para determinar el diseño de los elementos en función del tamaño de la pantalla
  const getLayout = (interest, index) => {
    const reverse = index % 2 === 1;
    if (windowSize <= 768) {
      // Para pantallas pequeñas, simplemente muestra los elementos en su orden original
      return (
        <>
            <div className="col-lg-6 flex-row" key={index}>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </div>
            <div className="col-lg-6">
              <i className="fab fa-java"></i>
            </div>
          </>
      );
    } else {
      // Para pantallas más grandes, cambia el diseño dependiendo de si es par o impar
      if (reverse) {
        return (
          <>
            <div className="col-lg-6 flex-row" key={index}>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </div>
            <div className="col-lg-6">
              <i className="fab fa-java"></i>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div className="col-lg-6"></div>
            <div className="col-lg-6 flex-row-reverse" key={index}>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </div>
          </>
        );
      }
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <img className="img-fluid img-profile rounded mx-auto mb-2" src="/images/profile.png" alt="Rafael Khismatulin Pivnenko" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#acercade"><i className="fas fa-user-circle"></i> Acerca de</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experiencia"><i className="fas fa-briefcase"></i> Experiencia</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#estudios"><i className="	fas fa-user-graduate"></i> Estudios</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#habilidades"><i className="fas fa-code"></i> Habilidades</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#proyectos"><i className="fab fa-react"></i> Proyectos</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#aficiones"><i className="	fas fa-heart"></i> Aficiones</a></li>
          </ul>
        </div>
      </nav>
        
      <div className="container-fluid p-0">
          
        <section className="resume-section" id="acercade">
          <div className="resume-section-content">
            <h1 className="mb-0">RAFAEL <span className="text-primary">KHISMATULIN</span></h1>
            <div className="subheading mb-5">
              Calle Ochagavia 38, 28039 Madrid · 60 100 58 38 · <a href="mailto:name@email.com">rafakhis14@gmail.com</a>
            </div>
            <p className="lead mb-5">Especializado en el desarrollo de aplicaciones móviles y web. 
              Persona autodidacta con mucha motivación para aprender conocimientos nuevos. Además, muy activo en grupos para prestar ayuda o presentar ideas.
              Fortificado en Java desde 2019. Creador de varias aplicaciones móviles para Android y páginas web en React-Bootstrap.
              En este momento, interesado en masterizar la programación de React.js
            </p>
            <div className="social-icons">
              <a className="social-icon nav-link" href="https://www.linkedin.com/in/rafael-khismatulin-pivnenko-3647a1218/"><i className="fab fa-linkedin-in"></i></a>
              <a className="social-icon nav-link" href="https://github.com/DRAKONNN"><i className="fab fa-github"></i></a>
              <a className="social-icon nav-link disabled" href="#!"><i className="fab fa-twitter"></i></a>
              <a className="social-icon nav-link disabled" href="#!"><i className="fab fa-facebook-f"></i></a>
            </div>
          </div>
        </section>
        <hr className="m-0" />
          
        <section className="resume-section" id="experiencia">
          <div className="resume-section-content">
            <h1 className="mb-5">Experiencia</h1>
            <ExperienceList experiences={state.experiences} />
          </div>
        </section>
        <hr className="m-0" />
          
        <section className="resume-section" id="estudios">
          <div className="resume-section-content">
            <h1 className="mb-5">Estudios</h1>
            <EducationList educations={state.educations} />
          </div>
        </section>
        <hr className="m-0" />
          
        <section className="resume-section" id="habilidades">
          <div className="resume-section-content">
            <h1 className="mb-5">Habilidades</h1>
            <div className="subheading mb-3">Lenguajes de programación y herramientas</div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item"><i className="fab fa-java"></i></li>
              <li className="list-inline-item"><i className="fab fa-android"></i></li>
              <li className="list-inline-item"><i className="fab fa-html5"></i></li>
              <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
              <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
              <li className="list-inline-item"><i className="fab fa-angular"></i></li>
              <li className="list-inline-item"><i className="fab fa-react"></i></li>
              <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
              <li className="list-inline-item"><i className="fab fa-php"></i></li>
              <li className="list-inline-item"><i className="fab fa-wordpress"></i></li>
              <li className="list-inline-item"><i className="fab fa-npm"></i></li>
            </ul>
            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                Mobile-First, Responsive
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                Cross Browser Testing | Debugging
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                Optimización de código
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                Desarrollo ágil de software | Scrum
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                Autodidacta
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />
          
        <section className="resume-section" id="proyectos">
          <div className="resume-section-content">
            <h1 className="mb-5">Proyectos</h1>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                Google Analytics Certified Developer
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                Mobile Web Specialist - Google Certification
              </li>
            </ul>
          </div>
        </section>

        <section className="resume-section" id="aficiones">
          <div className="resume-section-content">
            <h1 className="mb-5">Aficiones</h1>
            <div className="row row-cols-1 gy-5">
              {/* {interests.map((interest, index) => getLayout(index))} */}
              {interests.map((interest, index) => {
                const reverse = index % 2 === 1;
                if (reverse) {
                  return (
                    <>
                      <div className={`col-lg-6 interests-icons ${interest.classAttBackgroundImage} bg-gradient rounded-start`}>
                        <i className={`${interest.image} ${interest.classAttColor}`}></i>
                      </div>
                      <div className={`col-lg-6 flex-row ${interest.classAttBackgroundText} bg-gradient rounded-end`} key={index}>
                        <h3 className={interest.classAttColor}>{interest.title}</h3>
                        <p>{interest.description}</p>
                      </div>
                    </>
                  )
                } else {
                  return (
                    <>
                      <div className={`col-lg-6 flex-row ${interest.classAttBackgroundText} bg-gradient rounded-start`} key={index}>
                        <h3 className={interest.classAttColor}>{interest.title}</h3>
                        <p>{interest.description}</p>
                      </div>
                      <div className={`col-lg-6 interests-icons ${interest.classAttBackgroundImage} bg-gradient rounded-end`}>
                        <i className={`${interest.image} ${interest.classAttColor}`}></i>
                      </div>
                    </>
                  )
                }
              })}
              {/*{ isBreakpoint ? (

                <>
                  <div className="col-lg-6 flex-row" key={index}>
                    <h3>{interest.title}</h3>
                    <p>{interest.description}</p>
                  </div>
                  <div className="col-lg-6">
                    <i className="fab fa-java"></i>
                  </div>
                </>
              ) : (
                const reverse = index % 2 === 1;
                if (reverse) {
                  return (
                    <>
                      <div className={`col-lg-6 interests-icons ${interest.classAttBackgroundImage} bg-gradient rounded-start`}>
                        <i className={`${interest.image} ${interest.classAttColor}`}></i>
                      </div>
                      <div className={`col-lg-6 flex-row ${interest.classAttBackgroundText} bg-gradient rounded-end`} key={index}>
                        <h3 className={interest.classAttColor}>{interest.title}</h3>
                        <p>{interest.description}</p>
                      </div>
                    </>
                  )
                } else {
                  return (
                    <>
                      <div className={`col-lg-6 flex-row ${interest.classAttBackgroundText} bg-gradient rounded-start`} key={index}>
                        <h3 className={interest.classAttColor}>{interest.title}</h3>
                        <p>{interest.description}</p>
                      </div>
                      <div className={`col-lg-6 interests-icons ${interest.classAttBackgroundImage} bg-gradient rounded-end`}>
                        <i className={`${interest.image} ${interest.classAttColor}`}></i>
                      </div>
                    </>
                  )
                }
              )
              )}*/}
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </div>
  );
}

export default App;
