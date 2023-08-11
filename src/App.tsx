import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <>
      <div className='wrapper'>
        <Nav />
        <Hero />
        <Projects />
        <About />
      </div>
    </>
  );
}

export default App;
