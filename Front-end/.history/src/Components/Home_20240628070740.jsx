import React from 'react'

const Home = () => {
    return (
        <div className='homeContainer'>
            <div className="navBar">
                {/* <div className="left"> */}
                <a href="">PORTFOLIO</a>
                {/* </div> */}
                {/* <div className="right"> */}
                <div className="menuBtn">
                    <span id='line1'></span>
                    <span id='line2'></span>
                    <span id='line3'></span>
                    {/* </div> */}
                </div>
            </div>
            <div className="heroContainer">
                <h2 className='strokeText1'>ALI HASSAN</h2>
                <h2 className='nonStroke'>ALI HASSAN</h2>
                <h2 className='strokeText2'>ALI HASSAN</h2>
            </div>
        </div>
    )
}

export default Home