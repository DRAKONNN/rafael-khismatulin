import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import styled, { css } from 'styled-components'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Tooltip from 'react-bootstrap/Tooltip';
import ListGroup from 'react-bootstrap/ListGroup';

import experiences from './dataexperiences';
import educations from './dataeducations';
import skills from './dataskills';
import projects from './dataprojects';
import interests from './datainterests';

import jsPDF from 'jspdf';
import { useReactToPrint } from "react-to-print";
import { Document, Page, pdfjs, Text, View, Image} from "@react-pdf/renderer";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import ReactTyped from "react-typed";
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useInView, motion, useTransform, useScroll } from 'framer-motion';



const EXPERIENCES = experiences;
const EDUCATIONS = educations;
const SKILLS = skills;
const PROJECTS = projects;
const INTERESTS = interests;

function Experience(props) {
  const {experience} = props

  return (
    
    <div key={experience.id} className="d-flex flex-column flex-md-row justify-content-between timeline-item mb-1">
      <TimelineItem className="mt-0">
        <TimelineSeparator className='me-3 ms-1'>
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
          <div class="d-flex justify-content-between">
            <div class="flex-fill">
              <h6 class="mb-0">{experience.title}</h6>
              <h6 class="text-primary mb-1">{experience.company}</h6>
            </div>
            <div class="flex-fill">
              <div class="text-end">
                <p class="text-primary">{experience.commencement} &ndash; {experience.termination}</p>
              </div>
            </div>
          </div>
          <p className="align-self-end">{experience.description}</p>
        </div>
      </TimelineItem>
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
    <div key={education.id} className="d-flex flex-column flex-md-row justify-content-between mb-0 ms-3 timeline-item">
      <TimelineItem>
        <TimelineSeparator className='me-3'>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector style={{ background: '#4896FF' }} />
        </TimelineSeparator> 
        <div>
          <h6 class="mb-0">{education.title}</h6>
          <p class="text-primary">{education.commencement} &ndash; {education.termination}</p>
        </div>
      </TimelineItem>
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

const DocumentPdf = React.forwardRef((props, ref) => {

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
      <div className="container-fluid p-3 mt-1">
        <div class="row">
          <div class="col-4 bg-dark text-white rounded">
            <div className="img-zoom img-profile rounded mx-auto mt-2 mb-2">
              <img className="img-fluid" src="/images/profile.png" alt="Rafael Khismatulin Pivnenko" />
            </div>
            <h1>RAFAEL <span className="text-primary">KHISMATULIN PIVNENKO</span></h1>
            <div className="subheading mb-3">
              · Madrid, 28039 Madrid · 60 100 58 38 <a href="mailto:rafakhis14@gmail.com">rafakhis14@gmail.com</a>
            </div>
            <div className="mb-3">
              <h3>Idiomas</h3>
              <ul>
                <li class="list-group-item"><b>- Español:</b> nativo</li>
                <li class="list-group-item"><b>- Inglés:</b> conversación</li>
              </ul>
            </div>
            <div className="mb-3">
              <h3>Habilidades</h3>
              <div className="row row-cols-2 ms-1">
                <div class="col"><b><i className="fab fa-java"></i> Java</b></div>
                <div class="col"><b><i className="fab fa-android"></i> Android</b></div>
                <div class="col"><b><i className="fab fa-html5"></i> HTML</b></div>
                <div class="col"><b><i className="fab fa-css3-alt"></i> CSS</b></div>
                <div class="col"><b><i className="fab fa-js-square"></i> Javascript</b></div>
                <div class="col"><b><i className="fab fa-react"></i> React</b></div>
                <div class="col"><b><i className="	fas fa-code"></i> Bootstrap</b></div>
                <div class="col"><b><i className="fab fa-php"></i> PHP</b></div>
              </div>
            </div>
            <div className="mb-3">
              <h3>Proyectos</h3>
                <div><b>· Portfolio web:</b> https://rafael-khismatulin.netlify.app/</div>
                <div><b>· STACK'O:</b> https://stack-o.netlify.app/</div>
                <div><b>· Mystery-Tales:</b> https://mysterytales.netlify.app/</div>
              
            </div>
          </div>

          <div class="col-8">
            <div className={`resume-section-content`}>
              <h3 className="mb-2">Experiencia</h3>
              <ExperienceList experiences={state.experiences} />
            </div>
            <hr className="m-1" />

            <div className={`resume-section-content`}>
              <h3 className="mb-2">Estudios</h3>
              <EducationList educations={state.educations} />
            </div>
            <hr className="m-1" />
          </div>
        </div>
      </div>
    </div>
  );
})

export default DocumentPdf;
