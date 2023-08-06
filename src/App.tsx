import './App.css';
import Nav from './components/Nav';
// import Hero from './components/Hero';
import NewHero from './components/NewHero';

function App() {
  return (
    <>
      <div className='wrapper'>
        <Nav />
        <NewHero />
      </div>
    </>
  );
}

export default App;
