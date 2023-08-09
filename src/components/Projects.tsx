import IdeaBoard from '../assets/IdeaBoard.jpg';

function ProjectCard({ img, title, description, hrefApp, hrefSource }) {
  return (
    <div className='project-card'>
      <img src={img} alt={title} />
      <div className='card-text'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className='card-buttons'>
          <a
            rel='noreferrer'
            className='cta-btn'
            target='_blank'
            href={hrefApp}
          >
            See Live
          </a>
          <a
            rel='noreferrer'
            target='_blank'
            className='cta-btn'
            href={hrefSource}
          >
            Source Code
          </a>
        </div>
      </div>

      <div className='project-text'></div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id='projects'>
      <div className='projects-content'>
        <h2 className='projects-heading'>Projects</h2>
        <div className='projects-cards-container'>
          <ProjectCard
            img={IdeaBoard}
            title={'Idea Board'}
            description={
              'A CRUD app for storing ideas and sorting them by date or alphabetically.'
            }
            hrefApp={'https://idea-board-2-0.vercel.app/'}
            hrefSource={'https://github.com/codeAdventureNow/Idea-Board-2.0'}
          />
        </div>
      </div>
    </section>
  );
}
