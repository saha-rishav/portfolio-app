
import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
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
        <ContactMe />
      </div>
    </>
  );
}

export default App;
