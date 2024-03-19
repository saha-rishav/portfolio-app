/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCar = ({ iconUrl, text, href }) => {
    return (
        <div className='contactDetailsCard'>
            <div className="icon">
                <img src={iconUrl} alt={text} />
            </div>
            <a href={href} target='_blank'>{text}</a>
        </div>
    )
}

export default ContactInfoCar