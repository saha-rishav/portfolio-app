import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState();

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }

  // const isValidPhoneNumber = (phoneNumber) => {
  //   const phoneRegex = /^\d{10}$/;
  //   return phoneRegex.test(phoneNumber)
  // }

  // Function to handle form data on
  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstname) {
      newErrors.firstname = "First name is required.";
    }
    if (!formData.lastname) {
      newErrors.lastname = "Last name is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format"
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  console.log(errors);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      console.log("Form has been submitted", formData)
    } else {
      console.log("Form validation has been failed")
    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value, //If we have to keep the name as key hen it should be put inside  [] otherwise not required.
    })
  };

  return (
    <div className='contactFormContent'>
      <form onSubmit={handleFormSubmit}>
        <div className="nameContainer">
          <div>
            <input
              type="text"
              name='firstname'
              value={formData.firstname}
              placeholder='First Name'
              onChange={handleChange}              
              />
            {errors && errors.firstname &&
              <div className='errors'>{errors.firstname}</div>
            }
          </div>
          <div>
            <input
              type="text"
              name='lastname'
              value={formData.lastname}
              placeholder='Last Name'
              onChange={handleChange}
              />
            {errors && errors.lastname &&
              <div className='errors'>{errors.lastname}</div>
            }
          </div>
        </div>
        <div>
          <input
            type="email"
            name='email'
            value={formData.email}
            placeholder='Email Address'
            onChange={handleChange}
            />
          {errors && errors.email &&
            <div className='errors'>{errors.email}</div>
          }
        </div>
        <div>
          <textarea
            type="text"
            name="message"
            value={formData.message}
            placeholder='Message'
            onChange={handleChange}
            rows="3"></textarea>
          {errors && errors.message &&
            <div className='errors'>{errors.message}</div>
          }
        </div>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default ContactForm