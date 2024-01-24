import React, { useState } from 'react';
import gsap from 'gsap';
import arrow from './Media/Arrow.svg'
import './App.css'

/* pass image to ImageSlide function as a prop */
const BgComponent = ({ bagName, bgColor, children }) => {
    const [isHovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(true);
        gsap.to(`.${bgColor}-img`, { right: '5%', duration: 0.3, ease: 'power2.inOut' });
    };

    const handleLeave = () => {
        setHovered(false);
        gsap.to(`.${bgColor}-img`, { right: '-125%', duration: 0.3, ease: 'power2.inOut'});
    };

    return (
        <div className="Product-row">
            <div className="prod-col1">
                {children}
            </div>
            <div className="prod-col2">
                <div className={`bg ${bgColor}`} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                <h2>{bagName}</h2>
                </div>
            </div>
            <div className="prod-col3">
                <div className={`${bgColor}-img`}></div>
                <img
                className="arrow"
                src={arrow}>
              </img>
            </div>
        </div>
    );
};

export default BgComponent;