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
<SiMongodb /> */}

const skillsData = [
    {
        id: '1',
        skill: 'HTML',
        logo: <TiHtml5 className='skillLogo' />,
    },
    {
        id: '2',
        skill: 'CSS',
        logo: <IoLogoCss3 className='skillLogo' />,
    },
    {
        id: '3',
        skill: 'JavaScript',
        logo: <SiJavascript className='skillLogo' />,
    },
    {
        id: '4',
        skill: 'BootStrap',
        logo: <FaBootstrap className='skillLogo' />,
    },
    {
        id: '5',
        skill: 'WordPess',
        logo: <IoLogoWordpress className='skillLogo' />,
    },
    {
        id: '6',
        skill: 'ReactJs | ViteJs',
        logo: <FaNode className='skillLogo' />,
    },
    {
        id: '7',
        skill: 'NodeJs',
        logo: <IoLogoReact className='skillLogo' />,
    },
    {
        id: '8',
        skill: 'MongoDB',
        logo: <SiMongodb className='skillLogo' />,
    }
]
console.log('data', skillsData)

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
            <div className="bottom">
                {skillsData.map((elem, idx) => {
                    return (
                        <div className="skillBar">
                            <div className="line"></div>
                            <div className="left">
                                <p>{elem.id}</p>
                                <h2>{elem.skill}</h2>
                            </div>
                            <div className="right">
                                {elem.logo}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills