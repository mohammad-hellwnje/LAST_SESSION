import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import HeroComoponent from '../components/HeroComoponent/HeroComoponent'
import HeroImg from '../assets/image/HeroImg.jpg'
import AboutSrc from '../components/AboutSrc/AboutSrc'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'
function About() {
  return (
    <div>
     <NavBar/>
     <HeroComoponent 
                        title={'Branding | Image making'}
                        name={'My awesome portfolio'}
                        desc={'And I made it myself! Yes. In Figma with Anima'}
                        img={HeroImg}
                        myclass={true}
            />
            <AboutSrc/>
            <ContactUs/>
            <Footer/>
    </div>
  )
}

export default About