import React from 'react'
import './ContactMe.css'
import ContactInfoCar from './ContactInfoCard/ContactInfoCar';
import ContactForm from './ContactForm/ContactForm';
import MailImg from '../../assets/mail_white.png'
import GitImg from '../../assets/github.png'


const ContactMe = () => {
  return (
    <section className='contactContainer' id='contact'>
      <h5>Contact Me</h5>
      <div className="contactContent">
        <div style={{ flex: 1 }}>
          <ContactInfoCar iconUrl={MailImg} text="rishavsaha199@gmail.com" />
          <ContactInfoCar iconUrl={GitImg} text="https://github.com/saha-rishav"/>
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactMe;