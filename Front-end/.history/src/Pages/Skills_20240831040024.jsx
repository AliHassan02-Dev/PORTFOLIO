import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoWordpress } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";

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

const Skills = () => {

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