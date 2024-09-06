import React, { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Navbar = ({ setClickedOnOpen, clickedOnOpen }) => {

    const handleClick = () => {
        setClickedOnOpen(!clickedOnOpen)
    }
    // useGSAP(() => {
    //     gsap.from('.navBar a', {
    //         transform: 'translateY(-10px)',
    //         opacity: 0,
    //         duration: 0.5,
    //         delay: 0.5
    //     })
    //     gsap.from('.navBar .menuBtn, .navBar .menuBtn-active', {
    //         transform: 'translateY(-10px)',
    //         opacity: 0,
    //         duration: 0.5,
    //         delay: 0.8
    //     })
    //     gsap.from('.navBar .menuBtn span, .navBar .menuBtn-active span', {
    //         transform: 'translateX(200px)',
    //         opacity: 0,
    //         duration: 0.5,
    //         delay: 1,
    //         stagger: 0.3
    //     })
    // })
    return (
        <div className='navBar'>
            {/* <div className="left"> */}
            <a href="">PORTFOLIO</a>
            {/* </div> */}
            {/* <div className="right"> */}
            <div className={`${clickedOnOpen ? 'menuBtn-active' : 'menuBtn'}`} onClick={handleClick}>
                <span id='line1'></span>
                <span id='line2'></span>
                <span id='line3'></span>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Navbar