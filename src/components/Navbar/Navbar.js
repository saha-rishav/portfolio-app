/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
import { FaTimes, FaBars  } from "react-icons/fa";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className='nav_wrapper'>
                <div className="nav_content">
                    {/* <img src="" alt="" /> */}
                    <h3>Portfolio</h3>
                    <ul>
                        <li>
                            <a className='menu_item'>Home</a>
                        </li>
                        <li>
                            <a className='menu_item'>Skills</a>
                        </li>
                        <li>
                            <a className='menu_item'>Work Experience</a>
                        </li>
                        <li>
                            <a className='menu_item'>Contact Me</a>
                        </li>
                        <button className="contactBtn" onClick={() => { }}>Resume</button>
                    </ul>
                    <button className="menuBtn" onClick={toggleMenu}>
                        <span
                            className={"material-symbols-outlined"} style={{ fontSize: "1.8rem" }}>{openMenu ? (
                                <FaTimes size={20} style={{ color: "white" }} />
                            ) : (
                                <FaBars size={20} style={{ color: "white" }} />
                            )} </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar