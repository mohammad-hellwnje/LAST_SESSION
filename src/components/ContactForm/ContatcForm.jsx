import React from 'react'
import './ContactForm.css'
function ContatcForm() {
  return (
    <form className='MH-form'>
      <input type="text" placeholder='Name' />
      <input type="email" placeholder='Email' />
      <textarea placeholder='Type your message here'></textarea>
      <button>Submit</button>
    </form>
  )
}

export default ContatcForm