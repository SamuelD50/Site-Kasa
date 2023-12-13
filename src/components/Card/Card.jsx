import './Card.scss'
import { NavLink} from 'react-router-dom'

function Card({ id, cover, cardTitle }) {

    return (
        <NavLink to={`/hosting/${id}`}>
            <li key={id} className='card'>            
                <img src={cover} alt='Photographie de couverture des hébergements' className='card__image'/>
                <span className='card__title'>
                    {cardTitle}
                </span>            
            </li>
        </NavLink>
    )
}

export default Card;