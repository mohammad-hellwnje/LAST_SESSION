import React from 'react'
import './ContactUs.css'
import ContactTitle from '../ContactTitle/ContactTitle'
import ContatcForm from '../ContactForm/ContatcForm'
function ContactUs() {
  return (
    <div className='MH-contactus'>
        <ContactTitle/>
        <ContatcForm/>
    </div>
  )
}

export default ContactUs