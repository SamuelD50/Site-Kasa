import './Card.scss'
import { Link } from 'react-router-dom'


function Card({ id, cover, cardTitle }) {

    const handleClick = (hostingsId) => {
        console.log(hostingsId)
    }

    return (
        <Link to={`/hosting/${id}`}>
            <li key={id} className='card' onClick={() => handleClick(id)}>            
                <img src={cover} alt='Photographie de couverture des hébergements' className='card__image'/>
                <span className='card__title'>
                    {cardTitle}
                </span>            
            </li>
        </Link>
    )
}

export default Card;