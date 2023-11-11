import Dropdown from '../../components/Dropdown';
import Banner from '../../components/Banner';


import '../../utils/Layout.scss'
import './APropos.scss';


function APropos() {
	return (
		<div className='layout'>
			<div className='layout__container'>
				<Banner/>
				<div className='apropos'>
					<Dropdown title='Fiabilité' points={['fruit','deux']} />
					<Dropdown title='Respect' points={['fruit','deux']} />
					<Dropdown title='Service' points={['fruit','deux']} />
					<Dropdown title='Sécurité' points={['fruit','deux']} />
				</div>
			</div>
		</div>
	);
}

export default APropos;