/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Skills.css'
// import SkillCard from './SkillsCard/SkillCard'
import { skills } from '../../utils/data'
// import SkillsCardInfo from './SkillsCardInfo/SkillsCardInfo'

const Skills = () => {

    // const [selectedSkill, setSelectedSkill] = useState(SkillData[0]);

    // const handleSelectSkill = (data) => {
    //     setSelectedSkill(data);
    // }

    return (
        <section className='skillsContainer'>
            <h5>Technical Skills</h5>
            <div className="skillsContent">
                <div className="skills">
                    {skills.map((item) => (
                            <div className="skillsCard">
                                <h3>{item.title}</h3>
                                <div className="skillsInfo">
                                    {item.skills.map((skill) => (
                                        <div className="skillItem">
                                            <img src={skill.image} alt='' />
                                            <h4>{skill.name}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* <div className="skills">
                    {
                        SkillData.map((item) => (
                            <SkillCard
                                key={item.title}
                                iconUrl={item.icon}
                                title={item.title}
                                isActive={selectedSkill.title === item.title}
                                onClick={() => handleSelectSkill(item)}
                            />
                        ))
                    }
                </div>
                <div className="skillsInfo">
                    <SkillsCardInfo
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </div> */}

            </div>
        </section>
    )
}

export default Skills