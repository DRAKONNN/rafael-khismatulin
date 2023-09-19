import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import styled, { css } from 'styled-components'
import experiences from './dataexperiences';
import educations from './dataeducations';
import skills from './dataskills';
import projects from './dataprojects';
import interests from './datainterests';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion';

const EXPERIENCES = experiences;
const EDUCATIONS = educations;
const SKILLS = skills;
const PROJECTS = projects;
const INTERESTS = interests;

function Experience(props) {
  const {experience} = props

  return (
    
    <div key={experience.id} className="d-flex flex-column flex-md-row justify-content-between mb-5 timeline-item">
      <TimelineItem>
        <TimelineSeparator className='me-3'>
          <TimelineDot variant="outlined" color="primary" 
            style={{ 
              width: '45px', 
              height: '45px', 
              borderRadius: '10px', // Radio de las esquinas redondeadas 
              background: `url(${experience.logo})`, 
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat', 
              backgroundPosition: 'center'}} />
          <TimelineConnector style={{ background: '#4896FF' }} />
        </TimelineSeparator> 
        <div className="flex-grow-1">
            <h3 className="mb-0">{experience.title}</h3>
            <div className="subheading mb-3">{experience.company}</div>
            <p>{experience.description}</p>
        </div>
      </TimelineItem>
      <div className="flex-shrink-0 timeline-date">
        <span className="text-primary">{experience.commencement} &ndash; {experience.termination}</span>
      </div>
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
    <div key={education.id} className="d-flex flex-column flex-md-row justify-content-between mb-5 timeline-item">
      <TimelineItem>
        <TimelineSeparator className='me-3'>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector style={{ background: '#4896FF' }} />
        </TimelineSeparator> 
        <div className="flex-grow-1">
            <h3 className="mb-0">{education.title}</h3>
            <div className="subheading mb-3">{education.school}</div>
        </div>
      </TimelineItem>
      <div className="flex-shrink-0 timeline-date">
        <span className="text-primary">{education.commencement} &ndash; {education.termination}</span>
      </div>
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

function Skill(props) {
  const {skill} = props;
  const [iconColor, setIconColor] = useState('default'); // Estado para controlar el color del icono

  // Función para cambiar el color del icono al hacer clic
  const handleClick = (e) => {
    e.preventDefault();
    setIconColor(`${skill.classAttColor}`); // Cambia el color del icono a rojo al hacer clic (puedes ajustarlo según tus necesidades)
  };

  return (
    <li className="list-inline-item">
      <a className={`a-skills`} href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title={skill.title} onClick={handleClick}>
        <i className={`${skill.icon} ${iconColor}`}></i>
      </a>
    </li>
  )
}

function SkillList(props) {
  const {skills} = props

  return (
    <>
      {skills.map(skill => (
        <Skill skill={skill} />
      ))}
    </>
  )
}

function Project(props) {
  const {project} = props

  return (
    <div className="col-lg-6">
      <div className="card">
        <div className="img-zoom">
          <a href={project.url}>
            <img src={project.image} className="card-img-top" alt={project.title}/>
          </a>
        </div>
        <div className={`card-body ${project.classAttBackgroundText} bg-gradient`}>
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className={`list-group-item ${project.classAttBackgroundText} bg-gradient`}>{project.development}</li>
          <li className={`list-group-item ${project.classAttBackgroundText} bg-gradient`}>
            <a href={project.urlGitHub} className={`btn ${project.classAttButton} me-2`}><i className="fab fa-github"></i> GitHub</a>
            <a href={project.url} className={`btn btn-light text-dark ${project.classAttButton}`}><i className="fa fa-external-link"></i> URL</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

function ProjectList(props) {
  const {projects} = props

  return (
    <>
      {projects.map(project => (
        <Project project={project} />
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

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

function App() {

  const [state, setState] = useState({
    experiences: EXPERIENCES,
    educations: EDUCATIONS,
    skills: SKILLS,
    projects: PROJECTS,
    interests: INTERESTS
  })

  const isBreakpoint = useMediaQuery(768);

  const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
  `;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <div className="img-zoom img-profile rounded mx-auto mb-2">
          <img className="img-fluid" src="/images/profile.png" alt="Rafael Khismatulin Pivnenko" />
          </div>
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
          
        <section className="resume-section d-flex" id="acercade">
          <Section>
            <div className={`resume-section-content`}>
              <h1>RAFAEL <span className="text-primary">KHISMATULIN</span></h1>
              <div className="subheading mb-5">
                Calle Ochagavia 38, 28039 Madrid · 60 100 58 38 · <a href="mailto:rafakhis14@gmail.com">rafakhis14@gmail.com</a>
              </div>
              <p className="lead mb-5" >Especializado en el desarrollo de aplicaciones móviles y web. 
                Persona autodidacta con mucha motivación para aprender conocimientos nuevos. Además, muy activo en grupos para prestar ayuda o presentar ideas.
                Fortificado en Java desde 2019. Creador de varias aplicaciones móviles para Android y páginas web en React-Bootstrap.
                En este momento, interesado en masterizar la programación de React.js
              </p>
              {isBreakpoint ? (
                <>
                  <div className="social-icons">
                    <a className="social-icon nav-link" href="https://www.linkedin.com/in/rafael-khismatulin-pivnenko-3647a1218/"><i className="fab fa-linkedin-in"></i></a>
                    <a className="social-icon nav-link" href="https://github.com/DRAKONNN"><i className="fab fa-github"></i></a>
                    <a className="social-icon nav-link disabled" href="#!"><i className="fab fa-twitter"></i></a>
                    <a className="social-icon nav-link disabled" href="#!"><i className="fab fa-facebook-f"></i></a>
                  </div>
                  <div class="gap-2 d-md-flex mt-4">
                    <a href="/documents/Curriculum_Rafael_Khismatulin1.pdf" target="_blank">
                      <button class="btn btn-primary" type="button">Descargar CV</button>
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div class="row">
                    <div class="col-8">
                      <div className="social-icons">
                        <a className="social-icon nav-link" href="https://www.linkedin.com/in/rafael-khismatulin-pivnenko-3647a1218/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon nav-link" href="https://github.com/DRAKONNN"><i className="fab fa-github"></i></a>
                        <a className="social-icon nav-link disabled" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="social-icon nav-link disabled" href="#!"><i className="fab fa-facebook-f"></i></a>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="gap-2 d-md-flex justify-content-md-end">
                        <a href="/documents/Curriculum_Rafael_Khismatulin1.pdf" target="_blank">
                          <button class="btn btn-primary" type="button">Descargar CV</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Section>
        </section>
        <hr className="m-0" />
          
        <section className="resume-section" id="experiencia">
          <Section>
            <div className={`resume-section-content`}>
              <h1 className="mb-5">Experiencia</h1>
              <ExperienceList experiences={state.experiences} />
            </div>
          </Section>
        </section>
        <hr className="m-0" />
          
        <section className="resume-section" id="estudios">
          <Section>
            <div className={`resume-section-content`}>
              <h1 className="mb-5">Estudios</h1>
              <EducationList educations={state.educations} />
            </div>
          </Section>
        </section>
        <hr className="m-0" />
          
        <section className="resume-section" id="habilidades">
          <Section>
            <div className="resume-section-content">
              <h1 className="mb-5">Habilidades</h1>
              <div className="subheading mb-3">Lenguajes de programación y herramientas</div>
              <ul className="list-inline dev-icons">
                <SkillList skills={state.skills} />
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
          </Section>
        </section>
        <hr className="m-0" />
          
        <section className="resume-section" id="proyectos">
          <Section>
            <div className="resume-section-content">
              <h1 className="mb-5">Proyectos</h1>
              <div id="row-characters" class="row gy-5">
                <ProjectList projects={state.projects} />
              </div>
            </div>
          </Section>
        </section>

        <section className="resume-section" id="aficiones">
          <Section>
            <div className="resume-section-content">
              <h1 className="mb-5">Aficiones</h1>
              <div className="row row-cols-1 gy-5">
                {interests.map((interest, index) => {
                  const reverse = index % 2 === 1;
                  return (
                    <>
                      {isBreakpoint ? (
                        <>
                          <div className={`col-lg-6 flex-row ${interest.classAttBackgroundText} bg-gradient rounded-start`} key={index}>
                            <h3 className={interest.classAttColor}>{interest.title}</h3>
                            <p>{interest.description}</p>
                          </div>
                          <div className={`col-lg-6 interests-icons ${interest.classAttBackgroundImage} bg-gradient rounded-end`}>
                            <i className={`${interest.image} ${interest.classAttColor}`}></i>
                          </div>
                        </>
                      ) : (
                        <>
                          {reverse ? (
                            <>
                              <div className={`col-lg-6 interests-icons ${interest.classAttBackgroundImage} bg-gradient rounded-start`}>
                                <i className={`${interest.image} ${interest.classAttColor}`}></i>
                              </div>
                              <div className={`col-lg-6 flex-row ${interest.classAttBackgroundText} bg-gradient rounded-end`} key={index}>
                                <h3 className={interest.classAttColor}>{interest.title}</h3>
                                <p>{interest.description}</p>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className={`col-lg-6 flex-row ${interest.classAttBackgroundText} bg-gradient rounded-start`} key={index}>
                                <h3 className={interest.classAttColor}>{interest.title}</h3>
                                <p>{interest.description}</p>
                              </div>
                              <div className={`col-lg-6 interests-icons ${interest.classAttBackgroundImage} bg-gradient rounded-end`}>
                                <i className={`${interest.image} ${interest.classAttColor}`}></i>
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </>
                  )
                })}
              </div>
            </div>
          </Section>
        </section>
        <hr className="m-0" />
      </div>
    </div>
  );
}

export default App;
