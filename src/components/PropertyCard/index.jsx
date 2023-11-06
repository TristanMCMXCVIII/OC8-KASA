import { Link } from 'react-router-dom'

import './PropertyCard.scss';

function PropertyCard({id, name, picture}) {
	
	return(
        <Link to={`/FicheLogement/${id}`} className='link-no-style'>
            <div className='property-card'>
                <img className='property-card__image' src={picture} alt={name}/>
                <div className='property-card__mask'></div>
                <div className='property-card__title'>{name}</div>
            </div>
        </Link>
    );
};

export default PropertyCard;