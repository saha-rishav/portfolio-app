import React, { useEffect } from 'react';
import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import WorkExperience from './components/Experience/WorkExperience';
import Footer from './components/Footer/Footer';
import Hero from './components/HeroSection/Hero';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
import useLocalStorage from './customHooks/useLocalStorage';

function App() {

  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    // Update body background color based on the selected theme
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className={`${theme}`} data-theme={theme}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <Project />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
