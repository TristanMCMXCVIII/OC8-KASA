import './Content.scss';

import Banner from '../Banner'

function Content() {
	
	return(
        <div className='content'>
            <div className='content-container'>
                <Banner/>
                Dans le content 
            </div>
        </div>
    );
};

export default Content;