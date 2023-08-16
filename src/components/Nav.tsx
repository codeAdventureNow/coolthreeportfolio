import { useState } from 'react';
import Resume from '../assets/Nate-Mueller-Front-End-Web-Dev.pdf';
import { Link } from 'react-scroll';

export default function Nav() {
  const [isActive, setActive] = useState(true);
  const [activeLink, setActiveLink] = useState('');

  const toggleClass = () => {
    setActive(!isActive);
  };

  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);
  };

  return (
    <header>
      <a href='#' className='logo'>
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
            onClick={() => handleLinkClick('section1')}
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
            onClick={() => handleLinkClick('about')}
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
            onClick={() => handleLinkClick('contact')}
            className={activeLink === 'contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className='main'>
        <a rel='noreferrer' target='_blank' href={Resume}>
          Resume
        </a>
        <div
          onClick={toggleClass}
          className={isActive ? 'bx bx-menu' : 'bx-x bx-menu'}
          id='menu-icon'
        ></div>
      </div>
    </header>
  );
}
