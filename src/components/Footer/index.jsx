import './Footer.scss';

import logoKasaWhite from '../../assets/kasa-logo-white.svg';

function Footer() {
	
	return(
        <footer>
            <img src={logoKasaWhite} alt="Logo de l'application Kasa version blanche"></img>
            <span className='footer__legal'>© 2023 Kasa. All rights reserved</span>
        </footer>
    );
};

export default Footer;