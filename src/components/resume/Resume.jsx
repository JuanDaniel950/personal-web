import React from 'react'
import './resume.css';
import Data from './Data';
import Card from './Card';

export const Resume = () => {
  return (
    <section className="resume container section" id='resume'>
      <h2 className="section__title">
        Experiencia
      </h2>
      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((item, id) => {
            if (item.category === 'education') {
              return (
                <Card key={id} icon={item.icon} title={item.title} year={item.year} desc={item.desc} />
              )
            }
          }
          )
          }
        </div>
        <div className="timeline grid">
          {Data.map((item, id) => {
            if (item.category === 'experience') {
              return (
                <Card key={id} icon={item.icon} title={item.title} year={item.year} desc={item.desc} />
              )
            }
          })}        </div>

      </div>
    </section>
  )
}

export default Resume