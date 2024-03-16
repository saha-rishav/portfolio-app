import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
      <section className='heroContainer'>
          <div className="heroContent">
              <h2>Building Digital Experiences That Inspire</h2>
              <p>Passionate Frontend Developer | Transforming Ideas into Seamless & Visually Stunning Web Solutions</p>
          </div>
          <div className="heroImg">
              <div>
                  <div className="techIcon">
                      <img src="" alt="" />
                  </div>
                  <img src="" alt="" />
              </div>
              <div>
                  <div className="techIcon">
                      <img src="" alt="" />
                  </div>
                  <div className="techIcon">
                      <img src="" alt="" />
                  </div>
                  <div className="techIcon">
                      <img src="" alt="" />
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Hero