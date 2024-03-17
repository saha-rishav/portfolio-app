import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCar = ({ iconUrl, text }) => {
    return (
        <div className='contactDetailsCard'>
            <div className="icon">
                <img src={iconUrl} alt={text} />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default ContactInfoCar