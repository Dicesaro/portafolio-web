import './App.css'
import Description from './components/description'
import Header from './components/header'
import Experiencias from './components/experiencia'
import Proyectos from './components/proyectos'
import Tecnologias from './components/tecnologias'
import Logros from './components/logros'
import Contacto from './components/contacto'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Description />
        <Experiencias />
        <Proyectos />
        <Tecnologias />
        <Logros />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
