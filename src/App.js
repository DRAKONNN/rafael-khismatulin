import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <section id="hero">
    <div className="hero-container">
      <h1 className="text-white display-3">Fiesta de La Vaquilla</h1>
    </div>
  </section>
  
  <nav id="navbar-sections" className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
    <div id="navbar-container" className="container">
      <a className="navbar-brand" href="#"><img id="Logo"
        src="images/Logo_Ayuntamiento.png" alt="Logotipo del Ayuntamiento de Pedrezuela"
        draggable="false"/></a>
      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsible-navbar" aria-controls="collapsible-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsible-navbar">
        <ul className="navbar-nav mr-auto text-center">
          <li className="nav-item active">
            <a className="nav-link px-3" href="#section-1">Historia</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="#section-2">Vestimenta</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="#section-3">Experiencias personales</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="#section-4">Cronograma</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="#section-5">La Vaquilla en los medios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="#section-6">Archivo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="#section-7">Monumento a la Vaquilla</a>
          </li>
        </ul>
  
        <ul className="navbar-nav flex-row">
          <li className="nav-item">
            <a className="nav-link pe-3 disabled" href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="https://www.facebook.com/profile.php?id=100094225480728" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link ps-3" href="https://www.instagram.com/vaquillapedrezuela/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <div id="container-sections" className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div data-bs-spy="scroll" data-bs-target="#navbar-sections" data-bs-offset="0" className="scrollspy-example" tabindex="0">
          <h2 id="section-1" className="mt-5">HISTORIA</h2>
          <p>La Fiesta de la Vaquilla, celebrada cada año el 20 de enero y coincidiendo con la festividad de San Sebastián, está protagonizada por los jóvenes de 17 años llamados acompañantes y los de 18 años llamados Quintos. Se trata de una tradición de carácter laico y muy arraigado en el municipio, razón por la cual los quintos con honor, se encargan de mantener año tras año.</p>
          <p>Es una de las fiestas más interesantes de la Comunidad de Madrid, claro rito de iniciación masculina que simboliza el paso de niño a hombre, donde los gurramaches tienen que correr por el pueblo haciendo sonar los cencerros que llevan en su cintura y así poder ahuyentar los malos espíritus que se hayan podido establecer en el pueblo desde el 1 de noviembre, noche de todos los Santos. En la actualidad, tras la suspensión de la obligatoriedad del servicio militar, no hay quintas, por lo que, para seguir con esta antigua tradición, se decidió que los jóvenes que cumplen 18 años sean los encargados de protagonizar la Fiesta de la Vaquilla, siendo sus acompañantes los que tienen un año menos.</p>
          <p>Las actividades relacionadas con la fiesta comienzan unas semanas antes del 20 de enero, reuniéndose los quintos del año con los del siguiente para repartirse, mediante sorteo los personajes que lucirán durante el evento: una vaquilla, dos vaqueros y el resto gurramaches (o curramaches).</p>

          <h2 id="section-7" className="mt-5">MONUMENTO A LA VAQUILLA</h2>
          <p>El pueblo de Pedrezuela ha inmortalizado la fiesta dedicándole un mural de bajo relieve de bronce en el que plasma tanto la imagen de los quintos (vaquero, vaquilla y gurramaches) como la descripción de la vestimenta de los mismos. La autora de dicho mural es la escultora Ana Hernando, y fue inaugurado el 20 de enero de 2009 por la alcaldesa del Ayuntamiento de Pedrezuela, Dña. Sagrario de la Fuente Herranz, y el Director General de Cooperación Local de la Comunidad de Madrid, D. Jaime González Taboada.</p>
          <p>Tal es la importancia de esta tradicional fiesta que en el año 2011 la Comunidad de Madrid declaró la Vaquilla de Pedrezuela Fiesta de Interés Turístico Regional.</p>
          <figure className="figure figure-middle text-center" >
            <img src="images/Mural_homenaje.png" className="mx-auto d-block rounded" alt="Mural que homenajea la Fiesta de la Vaquilla de Pedrezuela, inaugurada en 2009" />
            <figcaption className="figure-caption">Mural que homenajea la Fiesta de la Vaquilla de Pedrezuela, inaugurada en 2009</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
  
  <div className="mt-5 p-4 bg-dark text-white text-center">
    <a className="navbar-brand" href="#"><img id="Logo"
      src="images/Logo_Ayuntamiento.png" alt="Logotipo del Ayuntamiento de Pedrezuela"
      draggable="false"/></a>
  </div>
    </div>
  );
}

export default App;
