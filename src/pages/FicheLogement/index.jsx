import { useParams  } from 'react-router-dom';

import '../../utils/Layout.scss';

import logements from '../../datas/logements.json';

import Carousel from '../../components/Carousel';
import Informations from '../../components/Informations';

function FicheLogement() {

  const { logementId } = useParams();

  const logementDetails = logements.find( logement => logement.id === logementId )

	return (
		<div className='layout'>
			<div className='layout__container'>
				<Carousel pictures={logementDetails.pictures}/>
				<Informations logement={logementDetails}/>
			</div>
		</div>
	);
};

export default FicheLogement;