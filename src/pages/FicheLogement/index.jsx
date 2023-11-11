import { useParams, Navigate } from 'react-router-dom';

import '../../utils/Layout.scss';

import Carousel from '../../components/Carousel';
import Informations from '../../components/Informations';

function FicheLogement({logements}) {

	const { logementId } = useParams();

	const logement = logements.find( l => l.id === logementId )

	if (!logement) {
		return <Navigate to="/404" />;
  	}

	return (
		<div className='layout'>
			<div className='layout__container'>
				<Carousel pictures={logement.pictures}/>
				<Informations logement={logement}/>
			</div>
		</div>
	);
};

export default FicheLogement;