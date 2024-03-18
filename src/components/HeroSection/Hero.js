import React from 'react'
import './Hero.css';
import ReactImg from '../../assets/React.png';
import HTMLImg from '../../assets/HTML.png'
import CSSImg from '../../assets/CSS.png'
import JSImg from '../../assets/JavaScript.png'
import heroImg from '../../assets/heroImg.jpg'

const Hero = () => {
  return (
      <section className='heroContainer' id='home'>
          <div className="heroContent">
              <h2>Building Digital Experiences That Inspire</h2>
              <p>Passionate Frontend Developer | Transforming Ideas into Seamless & Visually Stunning Web Solutions</p>
          </div>
          <div className="heroImg">
              <div>
                  <div className="techIcon">
                      <img src={ReactImg} alt={ReactImg} />
                  </div>
                  <img src={heroImg} alt={heroImg} />
              </div>
              <div>
                  <div className="techIcon">
                      <img src={HTMLImg} alt={HTMLImg} />
                  </div>
                  <div className="techIcon">
                      <img src={CSSImg} alt={CSSImg} />
                  </div>
                  <div className="techIcon">
                      <img src={JSImg} alt={JSImg} />
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Hero