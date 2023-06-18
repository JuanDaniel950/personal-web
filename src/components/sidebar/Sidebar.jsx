import React,{useState, useEffect} from 'react';
import "./sidebar.css";
import logo from "../../assets/logo.svg";

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('');
  const [activeSection, setActiveSection] = useState('');

  const handleItemClick = (item) => {
    setActiveItem(item);
  }


  const handleScroll = () => {
    const sections = document.querySelectorAll('section'); // Cambia 'section' por el selector que identifica tus secciones
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 2) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
    setActiveItem('');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <aside className='aside'>
      <a href='#home' className='nav__logo'>
        <img src={logo} alt='' />
      </a>
      <nav className='nav'>
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li  className={`nav__item ${activeItem === 'home' || activeSection === 'home' ? 'active' : ''}`}>
              <a href='#home' className='nav__link'  onClick={() => handleItemClick('home')}>
               <i className="icon-home"></i>
              </a>
            </li>
            <li  className={`nav__item ${activeItem === 'about'  || activeSection === 'about' ? 'active' : ''}`}>
              <a href='#about' className='nav__link' onClick={() => handleItemClick('about')}>
                <i className="icon-user-following"></i>
              </a>
            </li>
            <li className={`nav__item ${activeItem === 'services'   || activeSection === 'services' ? 'active' : ''}`}>
              <a href='#services' className='nav__link' onClick={() => handleItemClick('services')}>
               <i className="icon-briefcase"></i>
              </a>
            </li>
            <li className={`nav__item ${activeItem === 'resume' || activeSection === 'resume' ? 'active' : ''}`}>
              <a href='#resume' className='nav__link' onClick={() => handleItemClick('resume')}>
                <i className="icon-graduation"></i>
              </a>
            </li>
            <li className={`nav__item ${activeItem === 'portfolio' || activeSection === 'portfolio' ? 'active' : ''}`}>
              <a href='#portfolio' className='nav__link' onClick={() => handleItemClick('portfolio')}>
                <i className="icon-layers"></i>
              </a>
            </li>
            <li className={`nav__item ${activeItem === 'blog' || activeSection === 'blog' ? 'active' : ''}`}>
              <a href='#blog' className='nav__link' onClick={() => handleItemClick('blog')}>
                <i className="icon-note"></i>
              </a>
            </li>
            <li className={`nav__item ${activeItem === 'contact' || activeSection === 'contact' ? 'active' : ''}`}>
              <a href='#contact' className='nav__link'  onClick={() => handleItemClick('contact')}>
                <i className="icon-bubble" ></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright"> © 2023</span>
      </div>
    </aside>
  )
}

export default Sidebar;
