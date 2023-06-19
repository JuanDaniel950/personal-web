import React from 'react'
import "./contact.css"
export const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contacto</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Vamos a hablar sobre todo!</h3>
          <h3 className="contact__details">Envíame un mensaje 👋</h3>
        </div>
        <form className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Nombre' />
            </div>
            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder='Email' />
            </div>
          </div>
          <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder='Asunto' />
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea name='' id='' cols='30' rows='10' className="contact__form-input" placeholder='Describe tu asunto' />

            </div>
          <button className="btn">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
