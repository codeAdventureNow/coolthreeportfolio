import IdeaBoard from '../assets/IdeaBoard.jpg';
import Magnetic from '../assets/magnetic-speaking.png';
import Calculator from '../assets/Calculator.png';
import TicTacToe from '../assets/TicTacToe.jpg';
import MarkdownPreviewer from '../assets/Markdown.jpg';
import PomodoroTimer from '../assets/pomodoro.jpg';

type projectCardProps = {
  img: string;
  title: string;
  description: string;
  hrefApp: string;
  hrefSource: string;
  skillOne?: string;
  skillTwo?: string;
  skillThree?: string;
};

const ProjectCard = (props: projectCardProps) => {
  const { img, title, description, hrefApp, hrefSource, skillOne, skillTwo } =
    props;
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
};

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
            img={PomodoroTimer}
            title={'Pomodoro Timer'}
            description={`I incorporated a feature where the UI of the timer would dynamically toggle colors based on whether the user was in a 'session' or 'break' mode.`}
            skillOne={'TypeScript'}
            skillTwo={'React'}
            hrefApp={'https://pomodoro-ts-one.vercel.app/'}
            hrefSource={'https://github.com/codeAdventureNow/Pomodoro_TS'}
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
            description={`After completing the calculator in vanilla JS, I didn't stop there. I refactored it into React to improve functionality and maintainability.`}
            skillOne={'React'}
            skillTwo={'Grid'}
            hrefApp={'https://calculator-react-ashen.vercel.app/'}
            hrefSource={'https://github.com/codeAdventureNow/Calculator_React/'}
          />
          <ProjectCard
            img={TicTacToe}
            title={'Tic Tac Toe'}
            description={`It was a valuable learning experience that enhanced my problem-solving skills and provided insights into state management.`}
            skillOne={'React'}
            skillTwo={'Grid'}
            hrefApp={'https://tic-tac-toe-lint.vercel.app/'}
            hrefSource={'https://github.com/codeAdventureNow/TicTacToeLint'}
          />
          <ProjectCard
            img={MarkdownPreviewer}
            title={'Markdown Previewer'}
            description={`This experience emphasized the value of selecting appropriate tools, exploring documentation thoroughly, and embracing simplicity and efficiency in development.`}
            skillOne={'React'}
            skillTwo={'NPM'}
            hrefApp={'https://tic-tac-toe-lint.vercel.app/'}
            hrefSource={'https://github.com/codeAdventureNow/TicTacToeLint'}
          />
        </div>
      </div>
    </section>
  );
}
