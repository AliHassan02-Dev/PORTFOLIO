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
        aniClassName: 'leftSide',
        logo: <TiHtml5 className='skillLogo' />,
    },
    {
        id: '2',
        skill: 'CSS',
        aniClassName: 'rightSide',
        logo: <IoLogoCss3 className='skillLogo' />,
    },
    {
        id: '3',
        skill: 'JavaScript',
        aniClassName: 'leftSide',
        logo: <SiJavascript className='skillLogo' />,
    },
    {
        id: '4',
        skill: 'BootStrap',
        aniClassName: 'rightSide',
        logo: <FaBootstrap className='skillLogo' />,
    },
    {
        id: '5',
        skill: 'WordPess',
        aniClassName: 'leftSide',
        logo: <IoLogoWordpress className='skillLogo' />,
    },
    {
        id: '6',
        skill: 'ReactJs | ViteJs',
        aniClassName: 'rightSide',
        logo: <FaNode className='skillLogo' />,
    },
    {
        id: '7',
        skill: 'NodeJs',
        aniClassName: 'leftSide',
        logo: <IoLogoReact className='skillLogo' />,
    },
    {
        id: '8',
        skill: 'MongoDB',
        aniClassName: 'rightSide',
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

    //     tl2.from('.skillsContainer .bottom .skillBar.leftSide .line', {
    //         transform: 'translateX(-50%)',
    //         opacity: 0,
    //         duration: 0.1,
    //     }, 'skillBarLineAnim')

    //     tl2.from('.skillsContainer .bottom .skillBar.rightSide .line', {
    //         transform: 'translateX(50%)',
    //         opacity: 0,
    //         duration: 0.1,
    //     }, 'skillBarLineAnim')

    //     tl2.from('.skillsContainer .bottom .skillBar.leftSide .left p, .skillBar.leftSide .left h2', {
    //         transform: 'translateX(-50%)',
    //         opacity: 0,
    //         duration: 0.5,
    //     }, 'skillBarPara')

    //     tl2.from('.skillsContainer .bottom .skillBar.rightSide .left p, .skillBar.rightSide .left h2', {
    //         transform: 'translateX(50%)',
    //         opacity: 0,
    //         duration: 0.5,
    //     }, 'skillBarPara')

    //     tl2.from('.skillBar.leftSide .right .skillLogo', {
    //         transform: 'scale(0)',
    //         opacity: 0,
    //         duration: 0.5,
    //     }, 'skillLogo')

    //     tl2.from('.skillBar.rightSide .right .skillLogo', {
    //         transform: 'scale(0)',
    //         opacity: 0,
    //         duration: 0.5,
    //     }, 'skillLogo')
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
                        <div className={`skillBar ${elem.aniClassName}`}>
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