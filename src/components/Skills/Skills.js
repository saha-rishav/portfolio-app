import React, { useState } from 'react'
import './Skills.css'
import SkillCard from './SkillsCard/SkillCard'
import { SkillData } from '../../utils/data'
import SkillsCardInfo from './SkillsCardInfo/SkillsCardInfo'

const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SkillData[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    }

    return (
        <section className='skillsContainer'>
            <h5>Technical Proficiency</h5>
            <div className="skillsContent">
                <div className="skills">
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
                </div>
            </div>
        </section>
    )
}

export default Skills