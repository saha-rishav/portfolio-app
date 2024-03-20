/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './MobileNav.css'
import resume from '../../../assets/resume/RishavSaha.pdf'

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div
                className={`mobileMenu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}>
                <div className="mobileMenuContainer">
                    <a href='#'>
                        <h1>Portfolio.</h1>
                    </a>
                    <ul>
                        <li>
                            <a href='#' className='menu_item'>Home</a>
                        </li>
                        <li>
                            <a href='#skills' className='menu_item'>Skills</a>
                        </li>
                        <li>
                            <a href='#experience' className='menu_item'>Work Experience</a>
                        </li>
                        <li>
                            <a href='#projects' className='menu_item'>Projects</a>
                        </li>
                        <li>
                            <a href='#contact' className='menu_item'>Contact Me</a>
                        </li>
                        <a href={resume} target='_blank' rel="noreferrer" className="contactBtn" >Resume</a>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav