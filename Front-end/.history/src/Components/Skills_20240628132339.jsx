import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoWordpress } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
{/* <TiHtml5 />
<IoLogoCss3 />
<SiJavascript />
<FaBootstrap />
<IoLogoWordpress />
<FaNode />
<IoLogoReact />
<SiMongodb />

const skillsData = [

] */}

const Skills = () => {
    // useGSAP(() => {
    //     // SKILLS SECTION ANIMATIONS
    //     let tl2 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.skillsContainer',
    //             scoller: 'body',
    //             markers: true,
    //             start: 'top 0%',
    //             end: 'top -60%',
    //             scrub: 1,
    //             pin: true,
    //         }
    //     })

    //     tl2.from('.skillsContainer .top .left h2', {
    //         transform: 'translateX(-50%)',
    //         opacity: 0,
    //         duration: 0.3,
    //     }, 'topBarAnim')

    //     tl2.from('.skillsContainer .top .right p', {
    //         transform: 'translateX(50%)',
    //         opacity: 0,
    //         duration: 0.5,
    //     }, 'topBarAnim')

    //     tl2.from('.skillsContainer .bottom .leftSide .skillBar .line', {
    //         transform: 'translateX(-50%)',
    //         opacity: 0,
    //         duration: 0.1,
    //     }, 'skillBarLineAnim')

    //     tl2.from('.skillsContainer .bottom .rightSide .skillBar .line', {
    //         transform: 'translateX(50%)',
    //         opacity: 0,
    //         duration: 0.1,
    //     }, 'skillBarLineAnim')

    //     tl2.from('.skillsContainer .bottom .leftSide .skillBar .left p, .leftSide .skillBar .left h2, .leftSide .skillBar .right .arrow', {
    //         transform: 'translateX(-50%)',
    //         opacity: 0,
    //         duration: 0.5,
    //     }, 'skillBarPara')

    //     tl2.from('.skillsContainer .bottom .rightSide .skillBar .left p, .rightSide .skillBar .left h2, .rightSide .skillBar .right .arrow', {
    //         transform: 'translateX(50%)',
    //         opacity: 0,
    //         duration: 0.5,
    //     }, 'skillBarPara')
    // })

    return (
        <div className="skillsContainer containers">
            <div className="top">
                <div className="left">
                    <h2>MY SKILLS</h2>
                </div>
                <div className="right">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, neque in faucibus pellentesque, augue </p>
                </div>
            </div>
            {/* <div className="bottom">
                <div className="leftSide">
                    <div className="skillBar">
                        <div className="line"></div>
                        <div className="left">
                            <p>01</p>
                            <h2>HTML</h2>
                        </div>
                        <div className="right">
                            <FaArrowRight className='arrow' />
                        </div>
                    </div>
                    <div className="skillBar">
                        <div className="line"></div>
                        <div className="left">
                            <p>02</p>
                            <h2>CSS</h2>
                        </div>
                        <div className="right">
                            <FaArrowRight className='arrow' />
                        </div>
                    </div>
                    <div className="skillBar">
                        <div className="line"></div>
                        <div className="left">
                            <p>03</p>
                            <h2>JavaScript</h2>
                        </div>
                        <div className="right">
                            <FaArrowRight className='arrow' />
                        </div>
                    </div>
                    <div className="skillBar">
                        <div className="line"></div>
                        <div className="left">
                            <p>04</p>
                            <h2>Boot Strap</h2>
                        </div>
                        <div className="right">
                            <FaArrowRight className='arrow' />
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="skillBar">
                        <div className="line"></div>
                        <div className="left">
                            <p>05</p>
                            <h2>WordPress</h2>
                        </div>
                        <div className="right">
                            <FaArrowRight className='arrow' />
                        </div>
                    </div>
                    <div className="skillBar">
                        <div className="line"></div>
                        <div className="left">
                            <p>06</p>
                            <h2>React Js | Vite Js</h2>
                        </div>
                        <div className="right">
                            <FaArrowRight className='arrow' />
                        </div>
                    </div>
                    <div className="skillBar">
                        <div className="line"></div>
                        <div className="left">
                            <p>07</p>
                            <h2>MongoDB</h2>
                        </div>
                        <div className="right">
                            <FaArrowRight className='arrow' />
                        </div>
                    </div>
                    <div className="skillBar">
                        <div className="line"></div>
                        <div className="left">
                            <p>08</p>
                            <h2>Node Js</h2>
                        </div>
                        <div className="right">
                            <FaArrowRight className='arrow' />
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="bottom">
                <div className="skillBar">
                    <div className="line"></div>
                    <div className="left">
                        <p>01</p>
                        <h2>HTML</h2>
                    </div>
                    <div className="right">
                        <FaArrowRight className='arrow' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills