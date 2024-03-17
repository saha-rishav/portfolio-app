import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
      <div className='contactFormContent'>
          <form action="">
              <div className="nameContainer">
                  <input type="text" name='firstname' placeholder='First Name' />
                  <input type="text" name='lastname' placeholder='Last Name' />
              </div>
              <input type="text" name='email' placeholder='Email Address' />
              <textarea type="text" name="message" placeholder='Message' rows="3"></textarea>
              <button>Send</button>
          </form>
    </div>
  )
}

export default ContactForm