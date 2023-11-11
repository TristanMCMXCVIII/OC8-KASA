import './Banner.scss';

function Banner({image, description=''}) {
	
	return(
        <div className='banner__container'>
            <img src={image} alt="Bannière de l'app" className='banner__image'></img>
            <div className='banner__mask'></div>
            <div className='banner__text'>{description}</div>
        </div>
    );
};

export default Banner;