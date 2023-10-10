import { useState } from 'react';
import Resume from '../assets/Nate-Mueller-Front-End-Developer-2023.pdf';
import { Link } from 'react-scroll';

export default function Nav() {
  const [isActive, setActive] = useState(true);
  const [activeLink, setActiveLink] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);
  };

  const toggleBurgerMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
    setActive(!isActive);
  };

  return (
    <header>
      <a href='#home' className='logo'>
        <i className='bx bxs-home-heart'></i>
        <span>Nate Mueller</span>
      </a>

      <ul className={isActive ? 'navbar' : 'navbar open'}>
        <li>
          <Link
            to='projects'
            spy={true}
            smooth={true}
            offset={-70}
            duration={200}
            onClick={() => handleLinkClick('')}
            className={activeLink === 'projects' ? 'active' : ''}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to='about'
            spy={true}
            smooth={true}
            offset={-70}
            duration={200}
            onClick={() => handleLinkClick('')}
            className={activeLink === 'about' ? 'active' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={-70}
            duration={200}
            onClick={() => handleLinkClick('')}
            className={activeLink === 'contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className='main'>
        <a className='resume' rel='noreferrer' target='_blank' href={Resume}>
          Resume
        </a>
        <div
          onClick={toggleBurgerMenu}
          className={`nav-icon1 ${isOpen ? 'open' : ''}`}
          id='nav-icon1'
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
