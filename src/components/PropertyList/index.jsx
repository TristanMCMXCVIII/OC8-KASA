import logementsData from '../../datas/logements.json';

import './PropertyList.scss';
import PropertyCard from '../PropertyCard';

function PropertyList(){
	
	return(
        <div className="propertyList__container">
            {logementsData.map( (logement) => (
                <PropertyCard key={logement.id} id={logement.id} name={logement.title} picture={logement.pictures[0]}/>
            ))}
        </div>
    );
};

export default PropertyList;