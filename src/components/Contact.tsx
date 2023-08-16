export default function Contact() {
  return (
    <section id='contact'>
      <div className='contact-content'>
        <h2 className='contact-heading'>Contact</h2>
        <h4>Let's chat and connect!</h4>
        <p>
          I'm eager to grow professionally and contribute to your projects. I'm
          open to on-site work and relocation, valuing collaboration. Let's join
          forces and achieve great things together!
        </p>
        <div className='contact-socials'>
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
