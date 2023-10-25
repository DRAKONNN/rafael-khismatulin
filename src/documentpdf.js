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

const DocumentPdf = () => {

  const [state, setState] = useState({
    experiences: EXPERIENCES,
    educations: EDUCATIONS,
    skills: SKILLS,
    projects: PROJECTS,
    interests: INTERESTS
  })

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

  const styles = {
    page: {
      fontSize: "12px",
      maxWidth: "461px",
      marginLeft: "5rem",
      marginRight: "5rem",
      "page-break-after": "always"
    },

    columnLayout: {
      display: "flex",
      justifyContent: "space-between",
      margin: "3rem 0 5rem 0",
      gap: "2rem"
    },

    column: {
      display: "flex",
      flexDirection: "column"
    },

    spacer2: {
      height: "2rem"
    },

    fullWidth: {
      width: "100%"
    },

    marginb0: {
      marginBottom: 0
    }
  };

  return (
      
        <>
      <div style={styles.page}>
        <div>
          <h1 style={styles.introText}>
            Report Heading That Spans More Than Just One Line
          </h1>
        </div>

        <img style={styles.fullWidth} src="photo-2.png" />
      </div>

      <div style={styles.page}>
        <div>
          <h2 style={styles.introText}>
            Report Heading That Spans More Than Just One Line
          </h2>
        </div>

        <div style={styles.columnLayout}>
          <div style={styles.column}>
            <img style={styles.fullWidth} src="photo-2.png" />
            <h4 style={styles.marginb0}>Subtitle One</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div style={styles.column}>
            <img style={styles.fullWidth} src="photo-1.png" />
            <h4 style={styles.marginb0}>Subtitle Two</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div style={styles.columnLayout}>
          <div style={styles.column}>
            <img style={styles.fullWidth} src="photo-3.png" />
            <h4 style={styles.marginb0}>Subtitle One</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div style={styles.column}>
            <img style={styles.fullWidth} src="photo-4.png" />
            <h4 style={styles.marginb0}>Subtitle Two</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
       
  );
}

export default DocumentPdf;
