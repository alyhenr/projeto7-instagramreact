import React from 'react';

import nGag from '../assets/img/9gag.svg';
import meowed from '../assets/img/meowed.svg';
import barked from '../assets/img/barked.svg';
import nathanwpyl from '../assets/img/nathanwpylestrangeplanet.svg';
import wawawi from '../assets/img/wawawicomics.svg';
import respondeai from '../assets/img/respondeai.svg';
import filomoderna from '../assets/img/filomoderna.svg';
import memeg from '../assets/img/memeriagourmet.svg';
import arrow from '../assets/img/chevron-forward-circle 1.png';


const Stories = () => {

    const handleClick = (ev, direction) => {
        if (direction === "right") {
            ev.target.parentNode.scrollLeft += 20;
        } else {
            ev.target.parentNode.scrollLeft -= 20;
        }

    };

    const stories = [nGag, meowed, barked, nathanwpyl, wawawi, respondeai, filomoderna, memeg];
    return (
        <div className='stories'>
            <img src={arrow} alt="arrowLeft" className='ion-icon' id="arrow-left" onClick={(ev) => handleClick(ev, 'left')} />
            {[...stories, ...stories].map((storie, index) => (
                <div className="storie" key={index}>
                    <img src={storie} alt="storie" />
                </div>
            ))}
            <img src={arrow} alt="arrowRight" className='ion-icon' id="arrow-right" onClick={(ev) => handleClick(ev, 'right')} />
        </div>
    )
}

export default Stories