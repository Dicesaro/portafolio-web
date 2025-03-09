import '../styles/proyectos.css'
import proyect from '../assets/icon-proy.svg'
import proy1 from '../assets/proj-1.png'
import proy2 from '../assets/proj-2.png'
import react from '../assets/tecnologias/logo-react.svg'
import css from '../assets/tecnologias/logo-css.svg'
import github from '../assets/tecnologias/logo-github.svg'
import web from '../assets/tecnologias/logo-web.svg'
import ruby from '../assets/tecnologias/logo-ruby.svg'
import postgre from '../assets/tecnologias/logo-postgres.svg'

export default function Proyectos() {
  return (
    <section id="projects" class="projects">
      <div class="projects-title">
        <img src={proyect} alt="Proyectos" />
        <h2>Proyectos</h2>
      </div>
      <div class="projects-container">
        <div class="project">
          <img class="preview" src={proy1} alt="Buscador de países" />
          <div class="project-info">
            <h3>Buscador de países</h3>
            <div class="project-tech">
              <img src={react} alt="React" />
              <img src={css} alt="CSS" />
            </div>
            <p>
              Aplicación web que permite a los usuarios explorar
              información detallada sobre diferentes países.
            </p>
            <div class="project-buttons">
              <button>
                <img src={github} alt="GitHub" />
                <a
                  href="https://github.com/Dicesaro/paises.git"
                  target="_blank"
                >
                  Código
                </a>
              </button>
              <button>
                <img src={web} alt="Vista" />
                <a
                  href="https://dicesaro.github.io/paises/"
                  target="_blank"
                >
                  Vista
                </a>
              </button>
            </div>
          </div>
        </div>
        <div class="project">
          <img class="preview" src={proy2} alt="Crud de ventas" />
          <div class="project-info">
            <h3>Crud de ventas</h3>
            <div class="project-tech">
              <img src={ruby} alt="ruby" />
              <img src={css} alt="css" />
              <img src={postgre} alt="postgresql" />
            </div>
            <p>
              Aplicación web que permite a los usuarios gestionar
              información sobre ventas y productos.
            </p>
            <div class="project-buttons">
              <button>
                <img src={github} alt="GitHub" />
                <a
                  href="https://github.com/Dicesaro/crud_ventas_proyect"
                  target="_blank"
                >
                  Código
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
