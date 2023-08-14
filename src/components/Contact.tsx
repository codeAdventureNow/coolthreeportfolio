export default function Contact() {
  return (
    <section id='contact'>
      <div className='contact-content'>
        <h2 className='contact-heading'>Contact</h2>
        <p>Let's chat and connect!</p>
        {/* <div className='contact-buttons'></div> */}
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
          <a
            rel='noreferrer'
            target='_blank'
            href='mailto:nmueller855@gmail.com'
          >
            <i className='fa fa-thin fa-envelope'></i>
          </a>
        </div>
      </div>
    </section>
  );
}
