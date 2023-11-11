import React, { useState } from 'react';
import './Dropdown.scss';

import arrowUp from '../../assets/kasa-arrow-up.svg';


const Dropdown = ({title, points}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    
    // Fonction pour obtenir la classe de la flèche
    const getArrowClass = () => {
        if (isOpen === null) { // ou undefined ? 
        return ''; // pas d'animation avant le premier clic
        }
        return isOpen ? 'dropdown__openArrow' : 'dropdown__closeArrow';
    };

    // Fonction pour obtenir la classe du conteneur de texte
    const getTextContainerClass = () => {
        if (isOpen === null) {
        return '';
        }
        return isOpen ? 'dropdown__openTextContainer' : 'dropdown__closeTextContainer';
    };



    return (
        <div className='dropdown__container' onClick={toggleDropdown}>
            <div className='dropdown__container--orange'>
                <h2>{title}</h2>
                <img src={arrowUp} alt='arrow-up' className={`dropdown__arrow ${getArrowClass()}`}/>
            </div>
            
            <div className={`dropdown__textContainer ${getTextContainerClass()}`}>
            
                <ul>
                    {points.map((point, index) => (
                        <li key={`${point}-${index}`}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
