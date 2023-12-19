import './Tags.scss';

/* This component is used to create a list of keywords/tags in hosting page which is running with Hosting.jsx */

function Tags({ tagsKeyword }) {

    return (
        <ul className='tags__list'>            
            {tagsKeyword}          
        </ul>
    )
}

export default Tags;