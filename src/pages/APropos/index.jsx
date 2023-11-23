import Dropdown from '../../components/Dropdown';
import Banner from '../../components/Banner';

import source2 from '../../assets/kasa-source2.jpg';


import '../../utils/Layout.scss'
import './APropos.scss';


function APropos() {
	return (
		<div className='layout'>
			<div className='layout__container'>
				<Banner image={source2}/>
				<div className='apropos'>
					<Dropdown title='Fiabilité' points={['Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.']} />
					<Dropdown title='Respect' points={['La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.']} />
					<Dropdown title='Service' points={['La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.']} />
					<Dropdown title='Sécurité' points={['La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.']} />
				</div>
			</div>
		</div>
	);
}

export default APropos;