import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import styled, { css } from 'styled-components'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Tooltip from 'react-bootstrap/Tooltip';

import experiences from './dataexperiences';
import educations from './dataeducations';
import skills from './dataskills';
import projects from './dataprojects';
import interests from './datainterests';
import DocumentPdf from './documentpdf';

import { ReactToPrint, useReactToPrint } from "react-to-print";

import Modal from 'react-bootstrap/Modal';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import ReactTyped from "react-typed";
import { useState, useCallback, useEffect, useRef } from 'react';
import { useInView, motion, useTransform, useScroll } from 'framer-motion';

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
              borderRadius: '10px',
              background: `url(${experience.logo})`, 
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat', 
              backgroundPosition: 'center'}} />
          <TimelineConnector style={{ background: '#4896FF' }} />
        </TimelineSeparator> 
        <div className="flex-grow-1">
            <h3 className="mb-0">{experience.title}</h3>
            <div className="subheading text-primary mb-3">{experience.company}</div>
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
            <div className="subheading text-primary mb-3">{education.school}</div>
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
  const { skill } = props;
  const [iconColor, setIconColor] = useState('default');
  const [activePopover, setActivePopover] = useState(null);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h4" className={`bg-dark text-white`}>{skill.title}</Popover.Header>
      <Popover.Body>
        <ul class="list-group">
          {skill.appearances.map((appearance, index) => (
            <li class="list-group-item">{appearance}</li>
          ))}
        </ul>
      </Popover.Body>
    </Popover>
  );

  const handleIconClick = () => {
    if (activePopover === skill.title) {
      setActivePopover(null);
    } else {
      setActivePopover(skill.title);
      setIconColor(`${skill.classAttColor}`);
    }
  };

  return (
    <li className="list-inline-item">
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        show={activePopover === skill.title}
        overlay={popover}
      >
        <a className={`a-skills`} href="#" onClick={(e) => {
          e.preventDefault();
          handleIconClick();
        }}>
          <i className={`${skill.icon} ${activePopover === skill.title ? 'active' : ''} ${iconColor}`} data-bs-content={skill.description}></i>
        </a>
      </OverlayTrigger>
    </li>
  );
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
      <div className={`card shadow-box ${project.classAttBackgroundText}`}>
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

function Interest(props) {
  const {interest} = props

  return (
    <div className='col-md-6'>
      <Section>
      <div className={`card bg-white text-white shadow-hard hover-zoom-interest`}>
        <img src={interest.image} className="card-img monochrome-image" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">{interest.title}</h5>
          <p className="card-text">{interest.description}</p>
        </div>
      </div>
      </Section>
    </div>
  )
}

function InterestList(props) {
  const {interests} = props

  return (
    <>
      {interests.map(interest => (
        <Interest interest={interest} />
      ))}
    </>
  )
}

{/* Texto superpuesto
function InterestV3(props) {
  const {interest} = props

  return (
    <>
      <div className={` bg-white text-white shadow-hard`}>
        <img src={interest.image} className="card-img monochrome-image" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">{interest.title}</h5>
          <p className="card-text">{interest.description}</p>
        </div>
      </div>
      </>
  )
}*/}

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

  const componentPdf= useRef();
  const generatePDF= useReactToPrint({
    content: ()=>componentPdf.current,
    documentTitle:"Userdata",
  });

  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

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
            <li className="nav-item"><a className="nav-link js-scroll-trigger glow" href="#acercade"><i className="fas fa-user-circle"></i> Acerca de</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger glow" href="#experiencia"><i className="fas fa-briefcase"></i> Experiencia</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger glow" href="#estudios"><i className="	fas fa-user-graduate"></i> Estudios</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger glow" href="#habilidades"><i className="fas fa-code"></i> Habilidades</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger glow" href="#proyectos"><i className="fab fa-react"></i> Proyectos</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger glow" href="#aficiones"><i className="	fas fa-heart"></i> Aficiones</a></li>
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
              <p className="lead mb-5 p-1 hover-zoom shadow-box fst-italic" >
                <i class='fas fa-code'></i>{" "}
                <ReactTyped strings={["Desarrollador Web y Mobile Apps"]} typeSpeed={100} loop/>
              </p>
              {isBreakpoint ? (
                <>
                  <div className="social-icons">
                    <a className="social-icon nav-link shadow-item" href="https://www.linkedin.com/in/rafael-khismatulin-pivnenko-3647a1218/"><i className="fab fa-linkedin-in"></i></a>
                    <a className="social-icon nav-link shadow-item" href="https://github.com/DRAKONNN"><i className="fab fa-github"></i></a>
                    <a className="social-icon nav-link shadow-item disabled" href="#!"><i className="fab fa-twitter"></i></a>
                    <a className="social-icon nav-link shadow-item disabled" href="#!"><i className="fab fa-facebook-f"></i></a>
                  </div>
                  <div class="gap-2 d-md-flex mt-4">
                    <button class="btn btn-primary shadow-item" type="button" onClick={() => handleShow(true)}>Generar CV</button>
                  </div>
                </>
              ) : (
                <>
                  <div class="row">
                    <div class="col-8">
                      <div className="social-icons">
                        <a className="social-icon nav-link shadow-item" href="https://www.linkedin.com/in/rafael-khismatulin-pivnenko-3647a1218/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon nav-link shadow-item" href="https://github.com/DRAKONNN"><i className="fab fa-github"></i></a>
                        <a className="social-icon nav-link shadow-item disabled" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="social-icon nav-link shadow-item disabled" href="#!"><i className="fab fa-facebook-f"></i></a>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary shadow-item" type="button" onClick={() => handleShow(true)}>Generar CV</button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Section>
        </section>
        <hr className="m-0" />
        
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body ref={componentPdf}>
            Modal body content
            <DocumentPdf />
            <button class="btn btn-primary shadow-item" type="button" onClick={generatePDF}>Generar CV</button>
          </Modal.Body>
        </Modal>

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
              <div className="subheading text-primary mb-3">Lenguajes de programación y herramientas</div>
              <ul className="list-inline dev-icons">
                <SkillList skills={state.skills} />
              </ul>
              <div className="subheading text-primary mb-3">Workflow</div>
              <ul className="fa-ul mb-0 col-8 hover-zoom border border-primary border-1 rounded-3 p-1 ms-0 shadow-box">
                <li>
                  <i className="fas fa-check text-success"></i> Mobile-First, Responsive
                </li>
                <li>
                  <i className="fas fa-check text-success"></i> Cross Browser Testing | Debugging
                </li>
                <li>
                  <i className="fas fa-check text-success"></i>  Optimización de código
                </li>
                <li>
                  <i className="fas fa-check text-success"></i> Desarrollo ágil de software | Scrum
                </li>
                <li>
                  <i className="fas fa-check text-success"></i>  Autodidacta
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
                <InterestList interests={state.interests} />
                {/*{interests.map((interest, index) => {
                  const reverse = index % 2 === 1;
                  return (
                    <>
                      {isBreakpoint ? (
                        <div className='col-md-6 img-zoom'>
                          <div className={`card bg-white text-white`}>
                            <img src={interest.image} className="card-img monochrome-image" alt="..." />
                            <div className="card-img-overlay">
                              <h5 className="card-title">{interest.title}</h5>
                              <p className="card-text">{interest.description}</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                        {reverse ? (
                            <div class="card mb-3">
                              <div class="row g-0">
                                <div class="col-md-4">
                                  <img src={interest.image} class="img-fluid rounded-start" alt={interest.title}/>
                                </div>
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <h5 class="card-title">{interest.title}</h5>
                                    <p class="card-text">{interest.description}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div class="card mb-3">
                              <div class="row g-0">
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <h5 class="card-title">{interest.title}</h5>
                                    <p class="card-text">{interest.description}</p>
                                  </div>
                                </div>
                                <div class="col-md-4">
                                  <img src={interest.image} class="img-fluid rounded-end" alt={interest.title}/>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </>
                  )
                })}*/}
              </div>
            </div>
          </Section>
        </section>
        <hr className="m-0" />

        <footer className="bg-dark text-center text-white">
          <div className="container p-4 pb-0">
            <section className="mb-4">
              <a className="btn btn-outline-light btn-floating m-1 disabled" href="#!" role="button">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-floating m-1 disabled" href="#!" role="button">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-floating m-1 disabled" href="#!" role="button">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/rafael-khismatulin-pivnenko-3647a1218/" role="button">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/DRAKONNN" role="button">
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
