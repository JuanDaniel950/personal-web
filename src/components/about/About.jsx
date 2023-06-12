//import React from 'react'
import "./about.css";
import ImgMe from "../../assets/avatar-2.svg";

export const About = () => {
	return (
		<section className="about container section" id="about">
			<h2 className="section__title">Sobre Mí</h2>
			<div className="about__container grid">
				<img src={ImgMe} alt="avatar" className="about__img" />
				<div className="about__data grid">
					<div className="about__inf">
						<p className="about__description">
							Soy Juan Daniel Pérez Báez y me apasiona desarrollar, diseñar y
							liderar proyectos tecnológicos de todo tipo. En mi experiencia, he
							utilizado una amplia gama de tecnologías, incluyendo HTML 5, CSS,
							JS, Java, GIT, Docker y AWS. Además, he trabajado con frameworks
							como Angular, Ionic, Flutter y Springboot en diferentes proyectos.
							Siempre estoy al tanto de las últimas tendencias y nuevas
							tecnologías, lo que me permite estar en constante aprendizaje y
							evolución. Poseo habilidades para trabajar en equipo, un fuerte
							sentido de la responsabilidad y el orden en el trabajo, así como
							habilidades de liderazgo.
						</p>
						<a href="#" className="btn">
							Descargar CV
						</a>
					</div>
					<div className="about__skills grid">
						<div className="skills__data">
							<div className="skills__titles">
								<div className="skills_name">
									<div className="skills_number"></div>
								</div>
							</div>

							<div className="skills__bar">
								<span className="skills_percentage">90%</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
