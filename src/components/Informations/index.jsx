import Dropdown from '../Dropdown';
import Rating from '../Rating';
import './Informations.scss';

function Informations({logement}) {

    const tags = logement.tags;

	
	return(
        <div>        
            <div className='informations'>
                <div className='informations__left'>
                    <h1 className='informations__title'>{logement.title}</h1>
                    <p className='informations__location'>{logement.location}</p>
                    <ul>
                    {tags.map( (tag) => (
                        <li key={`${logement.id}-${tag}`}>
                            {tag}
                        </li>
                    ))}
                    </ul>
                    
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