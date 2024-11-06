import React from 'react'
import './ContactTitle.css'
import {FooterLinks} from './../../Data/FooterLinks'
import { Link } from 'react-router-dom'
function ContactTitle() {
  return (
    <div className='MH-contacttitle'>
        <h2>Let’s work together</h2>
        <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        {
            FooterLinks.map((item,index)=>{
                return(
                    <Link key={index} >
                        <img src={item.img} className='MH-links-icon'/>
                    </Link>
                )
            })
        }
   </div>
  )
}

export default ContactTitle