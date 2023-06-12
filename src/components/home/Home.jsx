//import React from 'react'
import "./home.css"
import Me from "../../assets/avatar-1.svg";
import HeaderSocial from "./HeaderSocial";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
export const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
      <img src={Me}  alt="" className="home__img"/>
      <h1 className="home__name">
        Juan Daniel
      </h1>
      <span className="home__education">Desarrollador Frontend</span>
      <HeaderSocial />
      <a href="#contact" className="btn"> Sobre Mí</a>

      <ScrollDown />
      </div>
      <Shapes/>
    </section>
  )
}

export default Home