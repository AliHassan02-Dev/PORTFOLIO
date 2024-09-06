import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {

    const projectData = [
        {
            id: '01',
            projectName: 'Custom Website',
            redirectTo: '/CustomWebsite'
        },
        {
            id: '02',
            projectName: 'WordPress',
            redirectTo: '/WordPress'
        },
        {
            id: '03',
            projectName: 'Website Design',
            redirectTo: '/websiteDesign'
        }
    ]

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