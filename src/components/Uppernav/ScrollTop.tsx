import React , { useState  , useEffect } from 'react'
import scrollbn from '../../scrollbn.svg' ;
import AOS from "aos";
import "aos/dist/aos.css";

export default function ScrollToTop() {

    //useEffect
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

  const [visible, setVisible] = useState(false) ;

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <>
        <div
         onClick={scrollToTop} 
         style={{
         display: visible ? 'inline' : 'none',
         }} 
         className='fixed text-white px-2 py-2 text-right ' id='scrollToTopBtn'
         data-aos="zoom-out"
         >
          <img src='https://cdn3.iconfinder.com/data/icons/common-4/24/ui-12-512.png' alt='/' />
        </div>  
    </>
  )
}
