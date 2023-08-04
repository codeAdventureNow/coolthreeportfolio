import Profile from '../assets/profilepic.jpg';

export default function Hero() {
  return (
    <section id='hero'>
      <img src={Profile} alt='profilepic' id='hero-pic' />
      <h1 className='hero-elements'>Front End Developer</h1>
      <p className='hero-elements'>
        I am a Front End Web Developer with over a year and a half of coding
        experience, specializing in crafting modern web applications using
        React, TypeScript, JavaScript, HTML, and CSS.
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
      <div className='techstack hero-elements'>
        <p>
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
            src='https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg'
            alt='webpack'
            width='40'
            height='40'
          />
        </p>
      </div>
    </section>
  );
}
