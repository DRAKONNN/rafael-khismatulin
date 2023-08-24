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
          <figure className="figure float-end">
            <img src="images/Gurramaches_Vaquilla.jpg" className="mx-auto d-block rounded" alt="Gurramaches con la Vaquilla" />
            <figcaption className="figure-caption text-end">Gurramaches con La Vaquilla</figcaption>
          </figure>
          <p>Es una de las fiestas más interesantes de la Comunidad de Madrid, claro rito de iniciación masculina que simboliza el paso de niño a hombre, donde los gurramaches tienen que correr por el pueblo haciendo sonar los cencerros que llevan en su cintura y así poder ahuyentar los malos espíritus que se hayan podido establecer en el pueblo desde el 1 de noviembre, noche de todos los Santos. En la actualidad, tras la suspensión de la obligatoriedad del servicio militar, no hay quintas, por lo que, para seguir con esta antigua tradición, se decidió que los jóvenes que cumplen 18 años sean los encargados de protagonizar la Fiesta de la Vaquilla, siendo sus acompañantes los que tienen un año menos.</p>
          <p>Las actividades relacionadas con la fiesta comienzan unas semanas antes del 20 de enero, reuniéndose los quintos del año con los del siguiente para repartirse, mediante sorteo los personajes que lucirán durante el evento: una vaquilla, dos vaqueros y el resto gurramaches (o curramaches).</p>
          <figure className="figure float-start">
            <img src="images/Vaquilla2018.JPG" className="mx-auto d-block rounded" alt="Fiesta de la Vaquilla de 2018" />
            <figcaption className="figure-caption text-start">Fiesta de la Vaquilla de 2018</figcaption>
          </figure>
          <p>A las cinco de la tarde del 20 de enero, acuden todos los quintos a la casa de donde ha de salir la vaquilla, y formando dos filas de gurramaches con un vaquero al frente y otro detrás y la vaquilla en el centro del grupo, se dirigen a la plaza del pueblo produciendo un ensordecedor ruido de cencerros, mientras los vaqueros hacen chasquear su honda. En la Plaza de la Constitución esperan todos los vecinos; las mozas se divierten jugando al corro y se bebe vino de una bota. Al llegar los quintos, la vaquilla arremete contra las mozas que estaban jugando al corro, las cuales deben encaramarse al carro de madera que allí se encuentra en el centro de la plaza para poder escapar de ella. Acude a su auxilio un vaquero, que la domina y devuelve al centro de los gurramaches para seguir con su recorrido. Seguirán yendo y viniendo a la plaza cuatro o cinco veces más, hasta que se da muerte ficticia a la vaquilla mediante dos disparos al aire, momento en el que finaliza la escenificación.</p>
          <p>En ese momento los quintos y acompañantes se dispersan, desaparecen de la plaza, volviéndose a vestir de paisanos y acompañando al resto del pueblo a la merienda y baile que el consistorio ofrece, lo cual tiene lugar una vez el Ayuntamiento termina de repartir los panes de anises.</p>

          <h2 id="section-2" className="mt-5">VESTIMENTA</h2>
          <p>La familia y amistades de los quintos eran, y siguen siendo, las encargadas de adornar la vaquilla y ayudar a vestirse a los protagonistas de la fiesta.</p>
          <p>La <strong>vaquilla</strong> consiste en un armazón de madera en forma de cilindro hueco partido a la mitad, decorado externamente de almohadones y cojines para configurar el lomo del animal, y vistiéndolo posteriormente a base de mantones de Manila, sábanas encajadas y lazos de vivos colores. La testuz del animal es de terciopelo negro o rojo y se adorna con espejos a modo de ojos, collares de perlas y diversos colgantes, además de dos agraciados cuernos. En su parte trasera se coloca un rabo de vaca. Debajo se coloca un cojín para que el quinto correspondiente lo pueda llevar sobre su cabeza.</p>
          <p>Cabe destacar, que cada año la vaca es diferente, tiene una personalidad propia ya que cada uno la decora con los recuerdos de sus familias.</p>

          <p>Los <strong>gurramaches o curramaches</strong> son los de vestimenta más original: llevan dos mantones de Manila doblados en pico sobre los hombros y cruzados sobre el cuerpo hasta juntar sus puntas en la cintura; pantalones floreados, un sombrero cordobés tapado con un amplio pañuelo que cae sobre los hombros, sujeto con una cinta roja; unos grandes cencerros atados atrás de la cintura con y una larga vara de fresno adornada con un lazo rojo en su punta superior.</p>
          <figure className="figure figure-middle text-center">
            <img src="images/Gurramaches.jpg" className="mx-auto d-block rounded" alt="Vestimenta de los gurramaches" />
            <figcaption className="figure-caption">Vestimenta de los gurramaches</figcaption>
          </figure>

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
