import '../../utils/Layout.scss'
import './Home.scss';

import Banner from '../../components/Banner';
import PropertyList from '../../components/PropertyList';

function Home() {
	return (
		<div className='layout'>
			<div className='layout__container'>
				<Banner/>
				<PropertyList/>
			</div>
		</div>
	);
}

export default Home;
