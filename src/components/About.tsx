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
