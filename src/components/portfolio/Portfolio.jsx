import React, { useState } from 'react'
import "./portfolio.css";
import Menu from "./Menu";
export const Portfolio = () => {
  
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState(Menu);
  const filtersItem = (category) => {
    const newItems = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setItems(newItems);
  }
  return (
    <section className="portfolio work container section" id='portfolio'>
    <h2 className="section__title">
      Trabajos Recientes
    </h2>
    <div className="work__filters">
      <span className="work__item" onClick={()=>setItems(Menu)}>Everything</span>
      <span className="work__item" onClick={()=>filtersItem("Creative")} >Creative</span>
      <span className="work__item"  onClick={()=>filtersItem("Art")}>Art</span>
      <span className="work__item" onClick={()=>filtersItem("Design")}>Design</span>
      <span className="work__item" onClick={()=>filtersItem("Branding")} >Branding</span>
    </div>

    <div className="work__container grid">
      {items.map((item) => {
        const {id, image, title, category} = item;
        return(
          <div className="work__card" key={id}>
            <div className="work__thumbnail">
              <img src={image} alt="" className='work__img' />
              <div className="work__mask"></div>
            </div>
            <div className="work__category">{category}</div>
            <h3 className="work__title">{title}</h3>
            <a href="#" className="work__button">
              <i className='icon-link work__button-icon'></i>
            </a>
          </div>
        )
        
      })}
    </div>
    </section>
  )
}

export default Portfolio