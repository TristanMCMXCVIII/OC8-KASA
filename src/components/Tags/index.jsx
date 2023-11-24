
import './Tags.scss';

function Tags({logement}) {

    const tags = logement.tags;

	return( 
        <ul className='tag-element'>
            {tags.map( (tag) => (
                <li key={`${logement.id}-${tag}`}>
                    {tag}
                </li>
            ))} 
        </ul>
    );
};

export default Tags;