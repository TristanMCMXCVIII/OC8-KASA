import React from 'react';
import './Rating.scss'; // Assurez-vous de créer ce fichier CSS

import star from '../../assets/kasa-star.svg';
import starActive from '../../assets/kasa-star-active.svg';

const Rating = ({ rating }) => {

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push( i<= rating ?
      <img src={starActive} alt='star active'/>
      :
      <img src={star} alt='star'/>
    );
  }

  return <div className='rating'>{stars}</div>;
};

export default Rating;