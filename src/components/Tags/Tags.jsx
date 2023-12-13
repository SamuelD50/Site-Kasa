import './Tags.scss';

function Tags({ tagsKeyword, id }) {

    return (
        <ul key={id} className='tags__container'>            
            {tagsKeyword}          
        </ul>
    )
}

export default Tags;