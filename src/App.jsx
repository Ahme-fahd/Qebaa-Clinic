import React, { useEffect, useState } from 'react'
import Header from './components/1-Header/Header'
import Hero from './components/2-Hero/Hero'
import About from './components/3-About/About'
import Services from './components/4-Services/Services'
import DoctorCarousel from './components/5-DoctorCarousel/DoctorCarousel'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Opinions from './components/6-Opinions/Opinions'
import Reservation from './components/7-Reservation/Reservation'
import FAQSection from './components/8-FAQSection/FAQSection'
import VisitUs from './components/9-Visit-us/VisitUs'
import Footer from './components/10-Footer/Footer'


export default function App() {
  library.add(faChevronUp, faWhatsapp)
 const[scrollbutn,setScrollButn] = useState(false)


useEffect(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      setScrollButn(true);
    } else {
      setScrollButn(false);
    }
  });
}, []);
  return (
    
    <div id='up'>
      <Header/>
      <Hero/>
     <About/>
      <Services/>
     <DoctorCarousel/>
     <Opinions/>
     <Reservation/>
     <FAQSection/>
   <VisitUs/>
   <Footer/>

     <a style={{opacity: scrollbutn ? 1 : 0, transition: "0.5s"}} href="#up">
  <button className="scroll2top">
    <FontAwesomeIcon icon="chevron-up" />
  </button>
</a>
<a href="https://wa.me/+966550075591">
  <button className="icon-whatsapp1">
    <FontAwesomeIcon icon={['fab', 'whatsapp']} />
  </button>
</a>
    </div>

    
  )
} 

