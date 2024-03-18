
import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import WorkExperience from './components/Experience/WorkExperience';
import Footer from './components/Footer/Footer';
import Hero from './components/HeroSection/Hero';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <Project />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
