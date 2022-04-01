import React ,{useRef,useEffect} from 'react'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../assets/css/project-section.css'
gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
    const detailSection = useRef();

    const scrollRef = useRef()

    useEffect(()=>{
        gsap.to(detailSection.current,{
            duration:5,
            delay:1,
            scrollTrigger:{
                trigger:detailSection.current,
                start:'top 40%',
                end:'bottom 0%',
                pin:true
            },
        })

        

        gsap.utils.toArray('.details-section').forEach((panel, i) => {
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger:`.details-section-${i+1}`,
                    start:'top 20%',
                    end:'top 39%',
                    scrub:true
                }
            })

            const t2 = gsap.timeline({
                scrollTrigger:{
                    trigger:`.details-section-${i+1}`,
                    start:'top 61%',
                    end:'top 100%',
                    scrub:true
                }
            })

            const t3 = gsap.timeline({
                scrollTrigger:{
                    trigger:`.details-section-${i+1}`,
                    start:'top 60%',
                    end:'top 30%',
                    scrub:true
                }
            })
           tl.to(`.details-section-${i+1}`,{opacity:0.5 });
           t2.to(`.details-section-${i+1}`,{opacity:0.5});
           t3.to(`.details-section-${i+1}`,{opacity:1 , borderLeft:'2px solid white'});
        });

       
    },[])

    
      
   
  
  return (
    <div className="container-fluid panel" ref={scrollRef}>
        <div className="row g-0" id='project-section-container'>
            <div className="col-2"></div>
            <div className="col-5 details-section-container">
                <div className="details-section details-section-1">
                    <h1>Build for Global Section</h1>
                    <p>Provide people across the globe easy access to financial services worldwide. Send money globally for near-zero transaction fees.</p>
                </div>
                <div className="details-section details-section-2">
                    <h1>Corporate Settlement</h1>
                    <p>Provide people across the globe easy access to financial services worldwide. Send money globally for near-zero transaction fees.</p>
                </div>
                <div className="details-section details-section-3">
                    <h1>Local Business</h1>
                    <p>Provide people across the globe easy access to financial services worldwide. Send money globally for near-zero transaction fees.</p>
                </div>
                <div className="details-section details-section-4">
                    <h1>Internet of Money</h1>
                    <p>Provide people across the globe easy access to financial services worldwide. Send money globally for near-zero transaction fees.</p>
                </div>
                
                
            </div>
            <div className="col-5" ref={detailSection}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem repellat nostrum commodi blanditiis, delectus quam possimus illum quis officia saepe modi officiis dolores labore consequatur cupiditate, mollitia eum. Reiciendis perspiciatis dolorum maiores quisquam iusto fuga, eum non laboriosam error cupiditate facere quo, dignissimos impedit earum laborum! Quisquam sit fugit aspernatur?</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectSection