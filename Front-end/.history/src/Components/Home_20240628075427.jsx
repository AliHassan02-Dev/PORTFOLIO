import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    useGSAP(() => {
        // HOME SECTION ANIMATIONS

        let tlHome = gsap.timeline({
            scrollTrigger: {
                trigger: '.homeContainer',
                scoller: 'body',
                markers: true,
                start: 'top 0%',
                end: 'top -80%',
                scrub: 1,
                pin: true,
            }
        })

        tlHome.from('.homeContainer .heroContainer .nonStroke', {
            duration: 1,
        })
        tlHome.to('.homeContainer .heroContainer .strokeText1', {
            transform: 'translateY(-80%)',
            opacity: 1,
            duration: 1,
        })
        tlHome.to('.homeContainer .heroContainer .strokeText2', {
            transform: 'translateY(80%)',
            opacity: 1,
            duration: 1,
        })
        gsap.to('.homeContainer .heroContainer .strokeText1', {
            transform: 'translateY(-80%) translateX(100%)',
            duration: 1,
            repeat: -1
        })
    })

    return (
        <div className='homeContainer'>
            <Navbar />
            <div className="heroContainer">
                <h2 className='strokeText1'>WEB DEVELOPER</h2>
                <h2 className='nonStroke'>ALI HASSAN</h2>
                <h2 className='strokeText2'>WEB DESIGNER</h2>
            </div>
        </div>
    )
}

export default Home