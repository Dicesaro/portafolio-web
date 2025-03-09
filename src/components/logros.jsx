import '../styles/logros.css'
import logros from '../assets/icon-logros.svg'
import cert1 from '../assets/cert-1.png'
import cert2 from '../assets/cert-2.png'
import cert3 from '../assets/cert-3.png'

export default function Logros() {
  return (
    <section id="logros" class="logros">
      <div class="logros-title">
        <img src={logros} alt="Logros" />
        <h2>Logros</h2>
      </div>
      <p>
        Estos son algunos de los certificados que he conseguido a lo
        largo de estos 3 años
      </p>
      <div class="certificados-content">
        <div class="certificado">
          <img src={cert1} alt="Certificado de Python" />
          <h3>Fundamentos de Python</h3>
        </div>

        <div class="certificado">
          <img src={cert2} alt="Certificado de Ciberseguridad" />
          <h3>Fundamentos de ciberseguridad</h3>
        </div>

        <div class="certificado">
          <img src={cert3} alt="Certificado de IA" />
          <h3>Introd. a la Inteligencia Artificial</h3>
        </div>
      </div>
    </section>
  )
}
