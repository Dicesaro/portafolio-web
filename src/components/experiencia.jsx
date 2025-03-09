import '../styles/experiencia.css'
import exp from '../assets/icon-exp.svg'
import icsm from '../assets/logo-icsm.png'
import easy from '../assets/logo-easy.png'

export default function Experiencias() {
  return (
    <>
      <div id="experiencias" class="experiencias-title">
        <img src={exp} alt="Icono experiencia" />
        <h2>Experiencia laboral</h2>
      </div>
      <section class="experiencias">
        <div class="experiencia-progreso">
          <div class="linea"></div>
          <div class="circulo"></div>
          <div class="linea-medio"></div>
          <div class="circulo"></div>
          <div class="linea"></div>
        </div>
        <div class="experiencias-container">
          <div class="experiencia">
            <img src={icsm} alt="ICSM" />
            <div class="experiencia-info">
              <h3>ICSM</h3>
              <p class="experiencia-time">Ago 2024 - Dic 2024</p>
              <p class="experiencia-description">
                Colaboré en el diseño de interfaces gráficas.
                <br />
                Además, implementé funcionalidades clave, incluyendo
                una sección interactiva para servicios, asegurando un
                diseño responsivo y una experiencia de usuario óptima.
              </p>
            </div>
          </div>

          <div class="experiencia">
            <img src={easy} alt="EasyHotel" />
            <div class="experiencia-info">
              <h3>EasyHotel</h3>
              <p class="experiencia-time">Feb 2024 - Jul 2024</p>
              <p class="experiencia-description">
                Desarrollé soluciones propuestas por los encargados de
                la startup, enfocándome en la creación de interfaces
                intuitivas y funcionales utilizando tecnologías
                modernas.
                <br />
                Aprendí y apliqué nuevos conocimientos técnicos y
                metodologías, lo que me permitió fortalecer mis
                habilidades de desarrollo y trabajo en equipo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
