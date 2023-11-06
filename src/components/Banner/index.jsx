import './Banner.scss';

import source1 from '../../assets/kasa-source1.jpg';

function Banner() {
	
	return(
        <div className='image-container'>
            <img src={source1} alt="Bannière de l'app" className='background-image'></img>
            <div className='overlay-text'>Chez vous, partout et ailleurs</div>
        </div>
    );
};

export default Banner;