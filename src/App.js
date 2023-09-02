import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import experiences from './dataexperience';
import { useState } from 'react';

const EXPERIENCES = experiences;

function Experience(props) {
  const {experience} = props

  return (
    <div key={experience.id} class="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div class="flex-grow-1">
          <h3 class="mb-0">{experience.title}</h3>
          <div class="subheading mb-3">{experience.company}</div>
          <p>{experience.description}</p>
      </div>
      <div class="flex-shrink-0"><span class="text-primary">{experience.commencement} - {experience.termination}</span></div>
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

function App() {

  const [state, setState] = useState({
    experiences: EXPERIENCES
  })

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <img class="img-fluid img-profile rounded mx-auto mb-2" src="/images/profile.png" alt="Rafael Khismatulin Pivnenko" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#acercade">Acerca de</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experiencia">Experiencia</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#estudios">Estudios</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#habilidades">Habilidades</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#proyectos">Proyectos</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#aficiones">Aficiones</a></li>
                </ul>
            </div>
        </nav>
        
        <div class="container-fluid p-0">
            
            <section class="resume-section" id="acercade">
                <div class="resume-section-content">
                    <h1 class="mb-0">RAFAEL <span class="text-danger">KHISMATULIN</span></h1>
                    <div class="subheading mb-5">
                        Calle Ochagavia 38, 28039 Madrid · 60 100 58 38 ·
                        <a href="mailto:name@email.com">rafakhis14@gmail.com</a>
                    </div>
                    <p class="lead mb-5">Especializado en el desarrollo de aplicaciones móviles y web. 
                      Persona autodidacta con mucha motivación para aprender conocimientos nuevos. Además, muy activo en grupos para prestar ayuda o presentar ideas.
                      Fortificado en Java desde 2019. Creador de varias aplicaciones móviles para Android y APIs estableciendo conexiones entre la Base de Datos del servidor y la propia app.
                      Desarrollo y mantenimiento de páginas web oficiales del Ayuntamiento de Pedrezuela con Bootstrap 5.
                      En este momento, interesado en masterizar la programación de React.js
                    </p>
                    <div class="social-icons">
                        <a class="social-icon nav-link" href="https://www.linkedin.com/in/rafael-khismatulin-pivnenko-3647a1218/"><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-icon nav-link" href="https://github.com/DRAKONNN"><i class="fab fa-github"></i></a>
                        <a class="social-icon nav-link disabled" href="#!"><i class="fab fa-twitter"></i></a>
                        <a class="social-icon nav-link disabled" href="#!"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="experiencia">
                <div class="resume-section-content">
                    <h2 class="mb-5">Experiencia</h2>
                    <ExperienceList experiences={state.experiences} />
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="estudios">
                <div class="resume-section-content">
                    <h2 class="mb-5">Estudios</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">University of Colorado Boulder</h3>
                            <div class="subheading mb-3">Bachelor of Science</div>
                            <div>Computer Science - Web Development Track</div>
                            <p>GPA: 3.23</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">August 2006 - May 2010</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">James Buchanan High School</h3>
                            <div class="subheading mb-3">Technology Magnet Program</div>
                            <p>GPA: 3.56</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">August 2002 - May 2006</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="habilidades">
                <div class="resume-section-content">
                    <h2 class="mb-5">Habilidades</h2>
                    <div class="subheading mb-3">Programming Languages & Tools</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                        <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                        <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                        <li class="list-inline-item"><i class="fab fa-angular"></i></li>
                        <li class="list-inline-item"><i class="fab fa-react"></i></li>
                        <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                        <li class="list-inline-item"><i class="fab fa-sass"></i></li>
                        <li class="list-inline-item"><i class="fab fa-less"></i></li>
                        <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
                        <li class="list-inline-item"><i class="fab fa-gulp"></i></li>
                        <li class="list-inline-item"><i class="fab fa-grunt"></i></li>
                        <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                    </ul>
                    <div class="subheading mb-3">Workflow</div>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Mobile-First, Responsive Design
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Cross Browser Testing & Debugging
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Cross Functional Teams
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Agile Development & Scrum
                        </li>
                    </ul>
                </div>
            </section>
            <hr class="m-0" />
            
            <section class="resume-section" id="proyectos">
                <div class="resume-section-content">
                    <h2 class="mb-5">Proyectos</h2>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            Google Analytics Certified Developer
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            Mobile Web Specialist - Google Certification
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            1
                            <sup>st</sup>
                            Place - University of Colorado Boulder - Emerging Tech Competition 2009
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            1
                            <sup>st</sup>
                            Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            2
                            <sup>nd</sup>
                            Place - University of Colorado Boulder - Emerging Tech Competition 2008
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            1
                            <sup>st</sup>
                            Place - James Buchanan High School - Hackathon 2006
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            3
                            <sup>rd</sup>
                            Place - James Buchanan High School - Hackathon 2005
                        </li>
                    </ul>
                </div>
            </section>

            <section class="resume-section" id="aficiones">
                <div class="resume-section-content">
                    <h2 class="mb-5">Aficiones</h2>
                    <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                    <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
                </div>
            </section>
            <hr class="m-0" />

        </div>
    </div>
  );
}

export default App;
