import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
    useGSAP(() => {
        // PROJECTS SECTION ANIMATION
        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '.projectContainer',
                scoller: 'body',
                markers: true,
                start: 'top 0%',
                end: 'top -60%',
                scrub: 1,
                pin: true,
            }
        })
        tl3.from('.projectContainer .top .left h2', {
            transform: 'translateX(-50%)',
            opacity: 0,
            duration: 0.3,
        }, 'topBarAnim')

        tl3.from('.projectContainer .top .right p', {
            transform: 'translateX(50%)',
            opacity: 0,
            duration: 0.5,
        }, 'topBarAnim')

        tl3.from('.projectContainer .bottom .projectBar .projectLine', {
            transform: 'translateX(-50%)',
            opacity: 0,
            duration: 0.1,
        }, 'projectBarLineAnim')

        tl3.from('.projectContainer .bottom .projectBar .left p, .projectBar .left h2, .projectBar .right .arrow', {
            transform: 'translateX(-50%)',
            opacity: 0,
            duration: 0.5,
        })
    })

    return (
        <div className="projectContainer containers">
            <div className="top">
                <div className="left">
                    <h2 id='projectsAni'>Projects</h2>
                </div>
                <div className="right">
                    <p id='projectsAni'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, neque in faucibus pellentesque, augue
                    </p>
                </div>
            </div>
            <div className="bottom">
                <div className="projectBar">
                    <div className="projectLine" id='projectsAni'></div>
                    <div className="left">
                        <p id='projectsAni'>01</p>
                        <h2 id='projectsAni'>Custom Website</h2>
                    </div>
                    <div className="right">
                        <FaArrowRight className='arrow' id='projectsAni' />
                    </div>
                </div>
                <div className="projectBar">
                    <div className="projectLine" id='projectsAni'></div>
                    <div className="left">
                        <p id='projectsAni'>02</p>
                        <h2 id='projectsAni'>Wordpress</h2>
                    </div>
                    <div className="right">
                        <FaArrowRight className='arrow' id='projectsAni' />
                    </div>
                </div>
                <div className="projectBar">
                    <div className="projectLine" id='projectsAni'></div>
                    <div className="left">
                        <p id='projectsAni'>03</p>
                        <h2 id='projectsAni'>Website Design</h2>
                    </div>
                    <div className="right">
                        <FaArrowRight className='arrow' id='projectsAni' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects