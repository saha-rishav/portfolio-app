/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Hero.css';
import ReactImg from '../../assets/React.png';
import HTMLImg from '../../assets/HTML.png'
import CSSImg from '../../assets/CSS.png'
import JSImg from '../../assets/JavaScript.png'
// import heroImg from '../../assets/heroImg.jpg'
import heroImg2 from '../../assets/heroImg2.jpg'
import githubIcon from '../../assets/github.png'
import TypewriterComponent from 'typewriter-effect';

const Hero = () => {
    
    return (
        <section className='heroContainer' id='home'>
            <div className="heroContent">
                <h2>Hi, I am <br /> Rishav Saha</h2>
                <h4>
                    <span className='typewriter'>
                        <TypewriterComponent
                            options={{
                                strings: ["A Frontend Developer"],
                                autoStart: true,
                                loop: true
                            }}>
                        </TypewriterComponent>
                    </span>
                </h4>
                <p>With over 2+ years of experience in designing, developing, and maintaining frontend web applications using modern frameworks like <b>React JS</b>. Passionate about pushing boundaries and creating impactful digital experiences that captivate and inspire.</p>
                <a href="https://github.com/saha-rishav" target='_blank' className='gitProfileBtn'>
                    <img src={githubIcon} alt="" />
                    <h3>Github Profile</h3>
                </a>
            </div>
            <div className="heroImg">
                <div>
                    <div className="techIcon">
                        <img src={ReactImg} alt={ReactImg} />
                    </div>
                    <img src={heroImg2} alt={heroImg2} />
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