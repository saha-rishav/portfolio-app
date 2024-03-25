import React, { useRef, useState } from 'react'
import './ContactForm.css'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState();
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

    if (validateForm()) {
      setSubmitting(true);

      emailjs
        .sendForm('service_wh483dc', 'template_oy7snzi',
          form.current, {
          publicKey: 'RI1LfY32cpltQuV4O',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setFormData(prevState => ({
              ...prevState,
              firstname: "",
              lastname: "",
              email: "",
              message: "",
            }));
            setSubmitSuccess(true);
            setSubmitting(false);
            setTimeout(() => {
              setSubmitSuccess(false);
            }, 2500);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        )
        .finally(() => {
          const isValid = validateForm();
          if (!isValid) {
            console.log("Form validation has failed");
          }
        });;

      // const isValid = validateForm();
      // if (isValid) {
      //   console.log("Form has been submitted", formData)
      // } else {
      //   console.log("Form validation has been failed")
      // }
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
      <form onSubmit={handleFormSubmit} ref={form}>
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
        <button type='submit' disabled={submitting}>{submitting ? 'Sending...' : 'Send'}</button>
      </form>
      {submitSuccess &&
        <div className="successMessage">Email sent successfully!</div>
      }
    </div>
  )
}

export default ContactForm