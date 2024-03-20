/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react'
import './Project.css'
import { projects } from '../../utils/data'

const Project = () => {
  const [displayedProjects, setDisplayedProjects] = useState(3); // Initial number of projects to display

  const loadMoreProjects = () => {
    setDisplayedProjects(displayedProjects + 3); // Increase the number of displayed projects by 3 on each load
  };

  return (
    <section className='projectsContainer' id='projects'>
      <h5>Projects</h5>
      <div className="projectsContent">
        <div className="projects">
          {projects.slice(0, displayedProjects).map((item, index) => (
            <div className="projectsCard" key={index}>
              <img src={item.image} alt={item.image} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="projectsBtn">
                <a href={item.liveView} target='_blank' rel='noopener noreferrer' className='btn'>Live Demo</a>
                {/* <a href={item.sourceCode} target='_blank' rel='noopener noreferrer' className='btn'>Source</a> */}
              </div>
            </div>
          ))}
        </div>
        {displayedProjects < projects.length && ( // Render the "Load More" button if there are more projects to display
          <div className="loadMoreBtnContainer">
            <button onClick={loadMoreProjects} className="loadMoreBtn">Show More</button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Project

