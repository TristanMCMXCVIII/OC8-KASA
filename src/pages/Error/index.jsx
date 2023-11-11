import { Link } from 'react-router-dom'

import '../../utils/Layout.scss';
import './Error.scss'


function Error() {

    return (
        <div className='layout'>
            <div className='layout__container'>
                <div className='error'>
                    <p className='error__404'>404</p>
                    <p className='error__oups'>Oups! La page que vous demandez n'existe pas</p>
                    <p className='error__link'><Link to="/" className='link-no-style'>Retourner sur la page d'accueil</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Error;