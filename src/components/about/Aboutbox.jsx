//import React from 'react'

const Aboutbox = () => {
  return (
   <div className="about__boxes grid">
    <div className="about__box">
        <i className=" about__icon icon-fire"></i>
        <div>
            <h3 className='about__title'>5+</h3>
            <span className='about__subtitle'>Proyectos completados</span>
        </div>
    </div>
    <div className="about__box">
        <i className=" about__icon icon-cup"></i>
        <div>
            <h3 className='about__title'>5483</h3>
            <span className='about__subtitle'>Tazas de Café</span>
        </div>
    </div>
    <div className="about__box">
        <i className=" about__icon icon-people"></i>
        <div>
            <h3 className='about__title'>40+</h3>
            <span className='about__subtitle'>Clientes Satisfechos</span>
        </div>
    </div>
   </div>
  )
}

export default Aboutbox