import '../../utils/Layout.scss'
import './Home.scss';

import source1 from '../../assets/kasa-source1.jpg';

import Banner from '../../components/Banner';
import PropertyList from '../../components/PropertyList';

function Home({logements}) {
	return (
		<div className='layout'>
			<div className='layout__container'>
				<Banner image={source1} description={'Chez vous, partout et ailleurs'}/>
				<PropertyList logements={logements}/>
			</div>
		</div>
	);
}

export default Home;
