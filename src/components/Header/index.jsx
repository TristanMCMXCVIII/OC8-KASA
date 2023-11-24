import './Header.scss';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom'

import logoKasa from '../../assets/kasa-logo.svg';

function Header() {

    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

    function getNavLinkClass(path) {
        return activePath === path ? 'nav-link--active' : 'nav-link--inactive';
    };
	
	return(
        <header>
            <div>
                <NavLink to="/">
                    <img src={logoKasa} alt="Logo de l'application Kasa" width="210" height="68" className='header__logo'></img>
                </NavLink>
                <nav className='header__nav'>
                    
                        <NavLink to="/" className={getNavLinkClass('/')}>Accueil</NavLink>
                        <NavLink to="/APropos" className={getNavLinkClass('/APropos')}>A Propos</NavLink>
                   
                </nav>
            </div> 
        </header>
    );
};

export default Header;