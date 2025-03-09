import '../styles/footer.css'
import x from '../assets/logo-x.svg'
import github from '../assets/tecnologias/logo-github.svg'
import linkedin from '../assets/logo-in-light.svg'

export default function Footer() {
  return (
    <footer class="footer">
      <p>Sígueme en :</p>
      <div class="social-icons">
        <a href="https://x.com/Cesar160804" target="_blank">
          <img src={x} alt="X" />
        </a>
        <a href="https://github.com/Dicesaro" target="_blank">
          <img src={github} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/cesar-ortega-dev/"
          target="_blank"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
      <p>© Cesar Ortega - Diseñador & Desarrollador Web</p>
    </footer>
  )
}
