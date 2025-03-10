import '../styles/contacto.css'

export default function Contacto() {
  return (
    <section id="contacto" class="contacto">
      <h2>Contacto</h2>
      <form action="https://formspree.io/f/xjkybwwj" method="post">
        <label for="email">Email</label>
        <input
          name="Email"
          id="email"
          type="email"
          placeholder="@gmail, @outlook, ..."
        />
        <label for="name">Nombre</label>
        <input
          name="Name"
          id="name"
          type="text"
          placeholder="Ingresa tu nombre ..."
        />
        <label for="message">Asunto</label>
        <textarea
          name="Message"
          id="message"
          cols="30"
          rows="10"
          placeholder=" ... "
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}
