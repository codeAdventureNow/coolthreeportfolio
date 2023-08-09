import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div className='wrapper'>
        <Nav />
        <Hero />
        <Projects />
      </div>
    </>
  );
}

export default App;
