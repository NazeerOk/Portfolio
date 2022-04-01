import React, { useEffect,useRef } from 'react'
import '../assets/css/homepage.css'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProjectSection from './ProjectSection';
import { ReactSVG } from 'react-svg'

gsap.registerPlugin(ScrollTrigger);



const HomePage = () => {
  const panel = useRef();
  useEffect(()=>{
    // gsap.utils.toArray(panel.current).forEach((panel, i) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: "top", 
    //     pin: true, 
    //     pinSpacing: false 
    //   });
    // });
    const checkActiveTab = () => {
      document.title = document.hidden ? "Change to this tab" : "Nazeer's Portfolio";
    }
    document.addEventListener("visibilitychange", checkActiveTab);

    // return ()=>{
    //   document.removeEventListener('visibilitychange')
    // }

   
    
    
  },[]);

  return (
    <div >
    <div className="section" ref={panel} style={{backgroundColor:'brown'}}>
    <ReactSVG src='Fluid.svg' evalScripts={'always'} className='fluid-svg'/>
      <div className="h1">Hello</div>
    </div>
   <ProjectSection />
   
    </div>
  )
}

export default HomePage