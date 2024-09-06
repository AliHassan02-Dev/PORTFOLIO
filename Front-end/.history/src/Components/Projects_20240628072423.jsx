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
        <div className="skillsContainer containers">
            <div className="top">
                <div className="left">
                    <h2 id='skillsAni'>MY SKILLS</h2>
                </div>
                <div className="right">
                    <p id='skillsAni'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, neque in faucibus pellentesque, augue </p>
                </div>
            </div>
            <div className="bottom">
                <div className="leftSide">
                    <div className="skillBar">
                        <div className="line" id='skillsAni'></div>
                        <div className="left">
                            <p id='skillsAni'>01</p>
                            <h2 id='skillsAni'>HTML</h2>
                        </div>
                        <div className="right">
                            <FaArrowRight className='arrow' id='skillsAni' />
                        </div>
                    </div>
                    <div className="skillBar">
                        <div className="line" id='skillsAni'></div>
                        <div className="left">
                            <p id='skillsAni'>02</p>
                            <h2 id='skillsAni'>CSS</h2>
                        </div>
                        <div className="right">
                            <FaArrowRight className='arrow' id='skillsAni' />
                        </div>
                    </div>
                    <div className="skillBar">
                        <div className="line" id='skillsAni'></div>
                        <div className="left">
                            <p id='skillsAni'>03</p>
                            <h2 id='skillsAni'>JavaScript</h2>
                        </div>
                        <div className="right">
                            <FaArrowRight className='arrow' id='skillsAni' />
                        </div>
                    </div>
                    <div className="skillBar">
                        <div className="line" id='skillsAni'></div>
                        <div className="left">
                            <p id='skillsAni'>04</p>
                            <h2 id='skillsAni'>Boot Strap</h2>
                        </div>
                        <div className="right">
                            <FaArrowRight className='arrow' id='skillsAni' />
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="skillBar">
                        <div className="line" id='skillsAni'></div>
                        <div className="left">
                            <p id='skillsAni'>05</p>
                            <h2 id='skillsAni'>WordPress</h2>
                        </div>
                        <div className="right">
                            <FaArrowRight className='arrow' id='skillsAni' />
                        </div>
                    </div>
                    <div className="skillBar">
                        <div className="line" id='skillsAni'></div>
                        <div className="left">
                            <p id='skillsAni'>06</p>
                            <h2 id='skillsAni'>React Js | Vite Js</h2>
                        </div>
                        <div className="right">
                            <FaArrowRight className='arrow' id='skillsAni' />
                        </div>
                    </div>
                    <div className="skillBar">
                        <div className="line" id='skillsAni'></div>
                        <div className="left">
                            <p id='skillsAni'>07</p>
                            <h2 id='skillsAni'>MongoDB</h2>
                        </div>
                        <div className="right">
                            <FaArrowRight className='arrow' id='skillsAni' />
                        </div>
                    </div>
                    <div className="skillBar">
                        <div className="line" id='skillsAni'></div>
                        <div className="left">
                            <p id='skillsAni'>08</p>
                            <h2 id='skillsAni'>Node Js</h2>
                        </div>
                        <div className="right">
                            <FaArrowRight className='arrow' id='skillsAni' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects