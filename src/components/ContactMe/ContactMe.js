import React from 'react'
import './ContactMe.css'
import ContactInfoCar from './ContactInfoCard/ContactInfoCar';
import ContactForm from './ContactForm/ContactForm';
import MailImg from '../../assets/mail_white.png'
import LinkedInIcon from '../../assets/linkedin-white.png'


const ContactMe = () => {
  return (
    <section className='contactContainer' id='contact'>
      <h5>Contact Me</h5>
      <div className="contactContent">
        <div style={{ flex: 1 }}>
          <ContactInfoCar iconUrl={MailImg} text="Email: rishavsaha199@gmail.com" href="mailto:rishavsaha199@gmail.com"/>
          <ContactInfoCar iconUrl={LinkedInIcon} text="Linkedin : linkedin.com/in/rishav--saha" href="https://www.linkedin.com/in/rishav--saha/"/>
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactMe;