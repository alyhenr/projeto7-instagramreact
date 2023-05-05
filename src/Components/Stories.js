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

class StorieInfo {
    constructor(imgSrc, user) {
        this.imgSrc = imgSrc;
        this.user = user;
    }

    get storieObj() {
        return this.storieForm();
    }

    storieForm() {
        return {
            url: this.imgSrc,
            name: this.user,
        }
    }
}

const storiesData = [
    [nGag, '9gag'], [meowed, 'meowed'], [barked, 'barked'],
    [nathanwpyl, 'nathanwpylestrangeplanet'], [wawawi, 'wawawicomics'],
    [respondeai, 'respondeai'], [filomoderna, 'filomoderna'], [memeg, 'memeriagourmet']
];

const stories = storiesData.map(data => {
    const dataObj = new StorieInfo(data[0], data[1]);
    return dataObj.storieObj;
});

const Storie = ({ storieImg, storieAuthor }) => {
    return (
        <div className="storie">
            <img src={storieImg} alt="storie" />
            <h3>
                {storieAuthor.length > 7
                    ? storieAuthor.slice(0, 8) + "..."
                    : storieAuthor}
            </h3>
        </div>
    );
};

const Stories = () => {

    const handleClick = (ev, direction) => {
        if (direction === "right") {
            ev.target.parentNode.scrollLeft += 20;
        } else {
            ev.target.parentNode.scrollLeft -= 20;
        }

    };

    return (
        <div className='stories'>
            <img src={arrow} alt="arrowLeft" className='ion-icon' id="arrow-left" onClick={(ev) => handleClick(ev, 'left')} />
            {[...stories, ...stories].map((storie, index) => (
                <Storie
                    storieImg={storie.url}
                    storieAuthor={storie.name}
                    key={`storie-${index}`}
                />
            )
            )}
            <img
                src={arrow}
                alt="arrowRight"
                className='ion-icon'
                id="arrow-right"
                onClick={(ev) => handleClick(ev, 'right')}
            />
        </div>
    );
};

export default Stories;