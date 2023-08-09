import IdeaBoard from '../assets/IdeaBoard.jpg';

function ProjectCard({ img, title, description }) {
  return (
    <div className='project-card'>
      <img src={img} alt={title} />
      <div className='card-text'>
        <h2>{title}</h2>
        <p>{description}</p>
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
          />
        </div>
      </div>
    </section>
  );
}
