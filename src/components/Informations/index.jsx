import Dropdown from '../Dropdown';
import Rating from '../Rating';
import Tags from '../Tags';
import './Informations.scss';

function Informations({logement}) {

	
	return(
        <div>        
            <div className='informations'>
                <div className='informations__left'>
                    <h1 className='informations__title'>{logement.title}</h1>
                    <p className='informations__location'>{logement.location}</p>

                    <Tags logement={logement}/>
                    
                </div>
                <div className='informations__right'>
                    <div className='information__profil'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt={logement.host.name}/>
                    </div>
                    <Rating rating={logement.rating} className='information__rating'/>
                    
                </div>
            </div>
            <div className='dropdowns'>
                <Dropdown title='Description' points={Array(logement.description)}/>
                <Dropdown title='Équipements' points={logement.equipments}/>
            </div>
        </div>
    );
};

export default Informations;