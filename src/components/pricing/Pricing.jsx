import React from 'react'
import './pricing.css'
import ImgPrice1 from '../../assets/price-1.svg'
import ImgPrice2 from '../../assets/price-2.svg'
import ImgPrice3 from '../../assets/price-3.svg'
export const Pricing = () => {
  return (
    <section className="pricing container section">
      <h2 className="section__title">Precios</h2>

    <div className="pricing__container grid">
      <div className="price__item">
        <img src={ImgPrice1} alt="" className="pricing__img" />
        <h3 className="pricing__plan">Basic</h3>
        <p className="pricing_title">A Simple option but powerful to manage your business</p>
        <p className="pricing__support">Email support</p>
        <h3 className="price">
          <em className=''>$</em> 9 <span>Mes</span>
        </h3>
      <a href="" className="btn">Iniciar</a>
      </div>

      <div className="price__item best">
        <span className='badge'> Recommended</span>
        <img src={ImgPrice2} alt="" className="pricing__img" />
        <h3 className="pricing__plan">Premium</h3>
        <p className="pricing_title">Unlimited product including app integration and more features</p>
        <p className="pricing__support">Mon-Fri support</p>
        <h3 className="price">
          <em className=''>$</em> 11 <span>Mes</span>
        </h3>
      <a href="" className="btn">Iniciar</a>
      </div>
      <div className="price__item">
        <img src={ImgPrice3} alt="" className="pricing__img" />
        <h3 className="pricing__plan">Ultimate</h3>
        <p className="pricing_title">A wise option for large companies and individuals</p>
        <p className="pricing__support">24/7 support</p>
        <h3 className="price">
          <em className=''>$</em> 19 <span>Mes</span>
        </h3>
      <a href="" className="btn">Iniciar</a>
      </div>
    </div>


    </section>
  )
}

export default Pricing