import '../styles/description.css'
import perfil from '../assets/foto-perfil.png'
import linkedin from '../assets/redes/logo-in.svg'
import gmail from '../assets/redes/logo-gmail.svg'

export default function Description() {
  return (
    <section id="profile" class="profile">
      <div class="profile-image">
        <img
          src={perfil}
          alt="Foto de perfil de Cesar"
          class="profile-img"
        />
      </div>
      <div class="profile-info">
        <h1>Hey, soy Cesar</h1>
        <div>
          <p>
            +3 años de experiencia como
            <strong>Diseñador y Desarrollador Web.</strong>
          </p>
          <p>
            Especializado en la creación de páginas web atractivas y
            funcionales.
          </p>
          <p>
            Actualmente me encuentro estudiando en
            <strong>Senati</strong>, <br />
            donde estoy adquiriendo diversos conocimientos del
            Desarrollo Web.
          </p>
          <p>
            He realizado diversos proyectos, tanto grupales como
            individuales.
          </p>
          <p>
            Siempre estoy en busca de nuevos retos y oportunidades
            para <br />
            seguir aprendiendo y mejorando.
          </p>
        </div>
        <div class="profile-contact">
          <span>Contáctame:</span>
          <div class="profile-redes">
            <a href="#">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="#">
              <img src={gmail} alt="Gmail" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
