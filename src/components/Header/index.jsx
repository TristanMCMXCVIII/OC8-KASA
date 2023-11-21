import './Header.scss';
import { Link } from 'react-router-dom'

import logoKasa from '../../assets/kasa-logo.svg';

function Header() {
	
	return(
        <header>
            <div>
                <Link to="/" className='link-no-style'>
                    <img src={logoKasa} alt="Logo de l'application Kasa" width="210" height="68" className='header__logo'></img>
                </Link>
                <nav className='header__nav'>
                    <ul>
                        <li><Link to="/" className='link-no-style'>Accueil</Link></li>
                        <li><Link to="/APropos" className='link-no-style'>A Propos</Link></li>
                    </ul>
                </nav>
            </div> 
        </header>
    );
};

export default Header;