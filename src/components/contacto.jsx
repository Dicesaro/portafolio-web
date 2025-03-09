import '../styles/contacto.css'

export default function Contacto() {
  return (
    <section id="contacto" class="contacto">
      <h2>Contacto</h2>
      <form action="https://formspree.io/f/xjkybwwj" method="post">
        <label for="email">Your Email</label>
        <input name="Email" id="email" type="email" />
        <label for="name">Your Name</label>
        <input name="Name" id="name" type="text" />
        <label for="message">Your Message</label>
        <textarea
          name="Message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
