import IdeaBoard from '../assets/IdeaBoard.jpg';
import Magnetic from '../assets/magnetic-speaking.png';
import Calculator from '../assets/Calculator.png';

function ProjectCard({
  img,
  title,
  description,
  hrefApp,
  hrefSource,
  skillOne,
  skillTwo,
  skillThree,
}) {
  return (
    <div className='project-card'>
      <img src={img} alt={title} />
      <div className='card-text'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className='card-skills'>
          <p>{skillOne}</p>
          <p>{skillTwo}</p>
        </div>
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
            skillOne={'React'}
            skillTwo={'JavaScript'}
            hrefApp={'https://idea-board-2-0.vercel.app/'}
            hrefSource={'https://github.com/codeAdventureNow/Idea-Board-2.0'}
          />
          <ProjectCard
            img={Magnetic}
            title={'Magnetic Speaking'}
            description={`The implementation of Google Ads alongside the landing page resulted in a substantial surge in lead generation for the company.`}
            skillOne={'Flexbox'}
            skillTwo={'CSS3'}
            hrefApp={'https://magneticspeaking.com/executivecommunication/'}
            hrefSource={
              'https://github.com/codeAdventureNow/Magnetic-Speaking-Landing'
            }
          />
          <ProjectCard
            img={Calculator}
            title={'Calculator'}
            description={`After completing the calculator in vanilla JS, I didn't stop there. I refactored it into React to improve functionality and maintainability. This decision paid off, giving me a deeper understanding of React's power.`}
            skillOne={'React'}
            skillTwo={'Grid'}
            hrefApp={'https://calculator-react-ashen.vercel.app/'}
            hrefSource={'https://github.com/codeAdventureNow/Calculator_React/'}
          />
        </div>
      </div>
    </section>
  );
}
