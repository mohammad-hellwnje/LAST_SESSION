import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import HeroComoponent from '../components/HeroComoponent/HeroComoponent'
import HeroImg from '../assets/image/HeroImg.jpg'
import Logo from '../components/Logo/Logo'
import Skills from '../components/Skills/Skills'
import LatestWork from '../components/LatestWork/LatestWork'
import ClientsSec from '../components/ClientsSec/ClientsSec'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'


function Home() {
  return (
    <div>
         <NavBar/>
         <HeroComoponent 
                        title={'Branding | Image making'}
                        name={'My awesome portfolio'}
                        desc={'And I made it myself! Yes. In Figma with Anima'}
                        img={HeroImg}
                        myclass={false}
            />
          <Logo/>
          <Skills/>
          <LatestWork/>
          <ClientsSec/>
          <ContactUs/>
          <Footer/>
    </div>
  )
}

export default Home