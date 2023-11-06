import React, { useState } from 'react';

import './Carousel.scss';

import arrowBackward from '../../assets/kasa-arrow-backward.svg';
import arrowForward from '../../assets/kasa-arrow-forward.svg';

function Carousels({pictures}) {

    const [currentIndex, setCurrentIndex] = useState(0);

	const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length); // prev index = 2 -> 2-1+4%4 = 1   ||  prevIndex = 0 -> 0-1+4%4 = 3
    };

	return(
        <div className="carousel">
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className='carousel__picture'/>
            <div className='carousel__arrows'>
                <img src={arrowBackward} alt='arrow-backward' onClick={prevImage} className='carousel__arrow-backward'/>
                <img src={arrowForward} alt='arrow-backward' onClick={nextImage} className='carousel__arrow-forward'/>
            </div>
            <div className="carousel__indicator">
                {currentIndex + 1} / {pictures.length}
            </div>
        </div>
    );
};

export default Carousels;