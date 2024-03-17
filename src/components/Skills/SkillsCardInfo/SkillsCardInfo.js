import React from 'react'
import './SkillsCardInfo.css'

const SkillsCardInfo = ({heading, skills}) => {
  return (
      <div className='skillsInfoCard'>
          <h6>{heading}</h6>
          <div className="skillsInfoContent">
              {
                  skills.map((item, index) => (
                      <React.Fragment key={`skill_$(index)`}>
                          <div className="skill_info">
                              <p>{item.skills}</p>
                              <p className='percentage'>{item.percentage}</p>
                          </div>
                          <div className="skillProgress_bg">
                              <div className="skillProgress" style={{width : item.percentage}}></div>
                          </div>
                      </React.Fragment>
                      
                  ))
              }
          </div>
    </div>
  )
}

export default SkillsCardInfo