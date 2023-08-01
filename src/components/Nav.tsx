export default function Nav() {
  return (
    <header>
      <a href='#' className='logo'>
        <i className='bx bxs-home-heart'></i>
        <span>Nate Mueller</span>
      </a>

      <ul className='navbar'>
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
        <div className='bx bx-menu' id='menu-icon'></div>
      </div>
    </header>
  );
}
