import '../styles/tecnologias.css'
import tec from '../assets/icon-tech.svg'
import html from '../assets/tecnologias/logo-html.svg'
import css from '../assets/tecnologias/logo-css.svg'
import mark from '../assets/tecnologias/logo-markdown.svg'
import js from '../assets/tecnologias/logo-js.svg'
import ts from '../assets/tecnologias/logo-ts.svg'
import node from '../assets/tecnologias/logo-node.svg'
import python from '../assets/tecnologias/logo-python.svg'
import tw from '../assets/tecnologias/logo-tw.svg'
import bt from '../assets/tecnologias/logo-bt.svg'
import next from '../assets/tecnologias/logo-next.svg'
import react from '../assets/tecnologias/logo-react.svg'
import ex from '../assets/tecnologias/logo-ex.svg'
import mysql from '../assets/tecnologias/logo-mysql.svg'
import psq from '../assets/tecnologias/logo-postgres.svg'
import sql from '../assets/tecnologias/logo-sql.svg'
import github from '../assets/tecnologias/logo-github-dark.svg'
import git from '../assets/tecnologias/logo-git.svg'
import npm from '../assets/tecnologias/npm-icon.svg'

export default function Tecnologias() {
  return (
    <>
      <div id="tecnologias" class="tecnologias-title">
        <img src={tec} alt="Tecnologías" />
        <h2>Tecnologías</h2>
      </div>
      <p class="tecnologias-description">
        Estas son algunas de las tecnologías con las que he trabajado
        y que he aprendido a lo largo de mi carrera.
      </p>
      <section class="tecnologias">
        <div class="tecnologias-container">
          <img src={html} alt="HTML" />
          <img src={css} alt="CSS" />
          <img src={mark} alt="Markdown" />
          <img src={js} alt="JavaScript" />
          <img src={ts} alt="TypeScript" />
          <img src={node} alt="Node.js" />
          <img src={python} alt="Python" />
          <img src={tw} alt="Tailwind" />
          <img src={bt} alt="Bootstrap" />
          <img src={next} alt="Next.js" />
          <img src={react} alt="React" />
          <img src={ex} alt="Express" />
          <img src={mysql} alt="MySQL" />
          <img src={psq} alt="PostgreSQL" />
          <img src={sql} alt="SQL" />
          <img src={github} alt="GitHub" />
          <img src={git} alt="Git" />
          <img src={npm} alt="npm" />
        </div>
      </section>
    </>
  )
}
