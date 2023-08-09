import IdeaBoard from '../assets/IdeaBoard.jpg';

function ProjectCard({ img, alt }) {
  return (
    <div className='project-card'>
      <img src={img} alt={alt} />
      <div className='project-text'></div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id='projects'>
      <div className='container'>
        <div className='projects-content'>
          <h2>Projects</h2>
          <div className='projects-main'>
            <ProjectCard img={IdeaBoard} alt={'Idea-Board'} />
          </div>
        </div>
      </div>
    </section>
  );
}
