import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const About = () => {

    // useGSAP(() => {
    //     // ABOUT SECTION ANIMATIONS

    //     let tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '.aboutContainer',
    //             scoller: 'body',
    //             markers: true,
    //             start: 'top 0%',
    //             end: 'top -60%',
    //             scrub: 2,
    //             pin: true,
    //         }
    //     })

    //     tl.from('.aboutContainer .left h2', {
    //         x: -300,
    //         opacity: 0,
    //         duration: 0.3,
    //     }, 'aboutHdg')
    //     tl.from('.aboutContainer .left p', {
    //         x: -200,
    //         opacity: 0,
    //         duration: 0.5,
    //     }, 'aboutPara')
    //     tl.from('.aboutContainer .left .imageBox', {
    //         scaleY: 0.1,
    //         opacity: 0,
    //         duration: 0.8,
    //     }, 'clipImgages')

    //     tl.from('.aboutContainer .right h2', {
    //         x: 300,
    //         opacity: 0,
    //         duration: 0.3,
    //     }, 'aboutHdg')
    //     tl.from('.aboutContainer .right p', {
    //         x: 200,
    //         opacity: 0,
    //         duration: 0.5,
    //     }, 'aboutPara')
    //     tl.from('.aboutContainer .right .circleImg', {
    //         x: 200,
    //         opacity: 0,
    //         duration: 0.5,
    //     }, 'clipImgages')
    //     gsap.to('.aboutContainer .right .circleImg', {
    //         rotate: 360,
    //         duration: 10,
    //         repeat: -1
    //     })
    // })

    return (
        <div className='aboutContainer containers'>
            <div className="left">
                <h2 id='aboutAni'>ABOUT ME</h2>
                <p id='aboutAni'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, neque in faucibus pellentesque, augue tellus laoreet massa, vel pharetra lectus tortor vel turpis. Maecenas pharetra purus dolor,
                </p>
                <div className="imageBox"></div>
            </div>
            <div className="right">
                <div className="circleImg"></div>
                <h2>Web Developer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, neque in faucibus pellentesque, augue tellus laoreet massa, vel pharetra lectus tortor vel turpis. Maecenas pharetra purus dolor, interdum aliquam sapien varius non. Nam placerat faucibus augue, sit amet efficitur nisi maximus ut. Nunc sit amet consectetur ante, sit amet vehicula velit. Vestibulum tempor cursus urna, in suscipit ipsum gravida ac. Aenean eu convallis leo.
                </p>
            </div>
        </div>
    )
}

export default About