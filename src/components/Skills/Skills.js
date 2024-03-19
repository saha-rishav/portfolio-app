/* eslint-disable no-unused-vars */
import React from 'react'
import './Skills.css'
import { skills } from '../../utils/data'

const Skills = () => {
    return (
        <section className='skillsContainer' id='skills'>
            <h5>Technical Skills</h5>
            <div className="skillsContent">
                <div className="skills">
                    {skills.map((item, index) => (
                        <div className="skillsCard" key={index}>
                            <h3>{item.title}</h3>
                            <div className="skillsInfo">
                                {item.skills.map((skill, skillIndex) => (
                                    <div className="skillItem" key={skillIndex}>
                                        <img src={skill.image} alt='' />
                                        <h4>{skill.name}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills