
import './App.css';
import WorkExperience from './components/Experience/WorkExperience';
import Hero from './components/HeroSection/Hero';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
      </div>
    </>
  );
}

export default App;
