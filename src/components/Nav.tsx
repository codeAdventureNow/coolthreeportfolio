import { useState } from 'react';

export default function Nav() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <a href='#' className='logo'>
        <i className='bx bxs-home-heart'></i>
        <span>Nate Mueller</span>
      </a>

      <ul className={isActive ? 'navbar' : 'navbar open'}>
        <li>
          <a href='#' className='active'>
            Projects
          </a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>

      <div className='main'>
        <a href='#'>Resume</a>
        <div
          onClick={toggleClass}
          className={isActive ? 'bx bx-menu' : 'bx-x bx-menu'}
          id='menu-icon'
        ></div>
      </div>
    </header>
  );
}
