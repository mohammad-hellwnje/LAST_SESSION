import React from 'react'
import './AboutSrc.css'
import {AboutData} from './../../Data/AboutData'
function AboutSrc() {
  return (
    <section className='MH-AboutSrc'>
        <p className='MH-p '>When I was 5, I got adbucted by a unicorn family. When they returned me to earth, I joined a designer school. But, fo’ real, what I learned with my kidnaptive family really gave an edge to my creative language.</p>
        {
            AboutData.map((item , index)=>{
                return (
                    <p key={index} className={`MH-sp ${item.green ? "green" : ""}`}>{item.desc}</p>
                )
            } )
        }
    </section>
  )
}

export default AboutSrc