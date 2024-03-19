/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './Project.css'
import { projects } from '../../utils/data'

const Project = () => {
  return (
    <section className='projectsContainer' id='projects'>
      <h5>Projects</h5>
      <div className="projectsContent">
        <div className="projects">
          {projects.map((item, index) => (
            <div className="projectsCard" key={index}>
              <img src={item.image} alt={item.image} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="projectsBtn">
                <a href={item.liveView} target='_blank' className='btn'>Live Demo</a>
                {/* <a href={item.sourceCode} target='_blank' className='btn'>Source</a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project