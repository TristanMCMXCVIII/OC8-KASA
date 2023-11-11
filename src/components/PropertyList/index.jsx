

import './PropertyList.scss';
import PropertyCard from '../PropertyCard';

function PropertyList({logements}){
	
	return(
        <div className="propertyList__container">
            {logements.map( (logement) => (
                <PropertyCard key={logement.id} id={logement.id} name={logement.title} picture={logement.pictures[0]}/>
            ))}
        </div>
    );
};

export default PropertyList;