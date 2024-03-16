/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div
                className={`mobileMenu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}>
                <div className="mobileMenuContainer">
                    <h3>Portfolio</h3>
                    <ul>
                        <li>
                            <a className='menu_item'>Home</a>
                        </li>
                        <li>
                            <a className='menu_item'>Skills</a>
                        </li>
                        <li>
                            <a className='menu_item'>Experience</a>
                        </li>
                        <li>
                            <a className='menu_item'>Contact Me</a>
                        </li>
                        <button className="contactBtn" onClick={() => { }}>Hire Me</button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav