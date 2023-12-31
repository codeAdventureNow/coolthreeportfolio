import Profile from '../assets/profilepicsquare.jpg';

export default function NewHero() {
  return (
    <section id='home' className='hero'>
      <div className='container'>
        <div className='hero-content'>
          <div className='hero-main'>
            <div className='hero-text'>
              <h1 className='hero-elements'>Front End Developer</h1>
              <p className='hero-elements'>
                As of August 2023 I have been employed as a Front End Web
                Developer at Musicians Mobile. I possess over two years of
                coding experience, specializing in crafting modern web
                applications using
                <span> React</span>, <span>TypeScript</span>,{' '}
                <span>JavaScript</span>, <span>Next JS</span>, HTML, and CSS.
              </p>
              <div className='social-profile hero-elements'>
                <a
                  rel='noreferrer'
                  href='https://www.linkedin.com/in/nate-mueller-b50317/'
                  target='_blank'
                >
                  <i className='fa fa-linkedin fa-inverse'></i>
                </a>
                <a
                  rel='noreferrer'
                  href='https://github.com/codeAdventureNow'
                  target='_blank'
                >
                  <i className='fa fa-github fa-inverse'></i>
                </a>
              </div>
              <div className='hero-skills'>
                {' '}
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
                  alt='react'
                  width='40'
                  height='40'
                />
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
                  alt='typescript'
                  width='40'
                  height='40'
                />
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
                  alt='javascript'
                  width='40'
                  height='40'
                />
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
                  alt='html5'
                  width='40'
                  height='40'
                />
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
                  alt='css3'
                  width='40'
                  height='40'
                />
                <img
                  src='https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
                  alt='git'
                  width='40'
                  height='40'
                />
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg'
                  alt='redux'
                  width='40'
                  height='40'
                />
                <img
                  src='https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg'
                  alt='sass'
                  width='40'
                  height='40'
                />
                <img
                  src='https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
                  alt='tailwind'
                  width='40'
                  height='40'
                />
                <img
                  src='https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg'
                  alt='jest'
                  width='40'
                  height='40'
                />
                <img
                  src='https://www.vectorlogo.zone/logos/figma/figma-icon.svg'
                  alt='figma'
                  width='40'
                  height='40'
                />
              </div>
            </div>
            <div className='hero-img'>
              <img src={Profile} alt='profilepic' id='hero-pic' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
