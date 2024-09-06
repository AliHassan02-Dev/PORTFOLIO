import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

    const projectData = [
        {
            id: '01',
            projectName: 'Custom Website'
        },
        {
            id: '02',
            projectName: 'WordPress'
        },
        {
            id: '03',
            projectName: 'Website Design'
        }
    ]

    return (
        <div className="projectContainer containers">
            <div className="top">
                <div className="left">
                    <h2>Projects</h2>
                </div>
                <div className="right">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, neque in faucibus pellentesque, augue
                    </p>
                </div>
            </div>
            <div className="bottom">
                {projectData.map((elem, idx) => {
                    return (
                        <div className="projectBar">
                            <div className="projectLine"></div>
                            <div className="left">
                                <p>{elem.id}</p>
                                <h2>{elem.projectName}</h2>
                            </div>
                            <div className="right">
                                <FaArrowRight className='arrow' />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects