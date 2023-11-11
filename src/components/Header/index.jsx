import './Header.scss';
import { Link } from 'react-router-dom'

import logoKasa from '../../assets/kasa-logo.svg';

function Header() {
	
	return(
        <header>
            <div>
                <img src={logoKasa} alt="Logo de l'application Kasa" width="210" height="68" className='header__logo'></img>
                <nav className='header__nav'>
                    <ul>
                        <li><Link to="/" className='link-no-style'>Home</Link></li>
                        <li><Link to="/APropos" className='link-no-style'>A Propos</Link></li>
                    </ul>
                </nav>
            </div> 
        </header>
    );
};

export default Header;