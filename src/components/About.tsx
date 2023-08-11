import ProfilePrague from '../assets/profile-photo-1.jpg';

export default function About() {
  return (
    <section id='about'>
      <div className='about-content'>
        <h2 className='about-heading'>About</h2>
        <div className='about-container'>
          <div className='about-img'>
            {' '}
            <img src={ProfilePrague} alt='Nate Mueller profile pic Prague' />
          </div>
          <p>
            Although born and raised in Silicon Valley, my coding journey took
            flight in a vibrant co-work space in Sofia, Bulgaria. Mesmerized by
            the dance of my friend's espresso-fueled fingers on the keyboard,
            accompanied by the tunes of Pink Floyd, I sensed a harmonious fusion
            of artistry and logic that left me captivated. It was in that
            revelatory moment that I yearned to expand my creative horizons and
            embarked on a new chapter, influenced by the innovative spirit that
            shaped my upbringing.
          </p>
        </div>
      </div>
    </section>
  );
}

{
  /* <section id='projects'>
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
    </section> */
}
