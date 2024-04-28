import React, { useEffect, useState } from 'react'
import "./ScrollUpButton.css"
import Arrow from '../../assets/Icons/Arrow';


const ScrollUpButton = () => {
    const desktop = 200
    const mobile = 4500

    const [isVisible, setIsVisible] = useState(false)
    function ScrollUp(){
        document.getElementById("landing")?.scrollIntoView({ behavior: "smooth" });
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
          
            let appearPoint = window.innerWidth > 600 ? desktop : mobile
            setIsVisible(window.scrollY > appearPoint);
        });

        return () => {
            window.removeEventListener("scroll", () => {
                setIsVisible(window.scrollY > 200);
            });
        };
    }, []);

  return (
    <button className={isVisible?"scroll-up-btn":"scroll-up-btn-hidden"} onClick={ScrollUp}><Arrow/></button>
  )
}

export default ScrollUpButton