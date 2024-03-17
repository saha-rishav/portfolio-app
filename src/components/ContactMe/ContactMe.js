import React from 'react'
import './ContactMe.css'
import ContactInfoCar from './ContactInfoCard/ContactInfoCar';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <section className='contactContainer'>
      <h5>Contact Me</h5>
      <div className="contactContent">
        <div style={{ flex: 1 }}>
          <ContactInfoCar iconUrl="./assets/images/email-icon.svg" text="rishavsaha199@gmail.com"/>
          <ContactInfoCar iconUrl="./assets/images/github-icon.svg" text="rishavsaha199@gmail.com"/>
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactMe;