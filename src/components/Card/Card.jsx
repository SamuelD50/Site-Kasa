import './Card.scss'
import { NavLink} from 'react-router-dom'

/* This component is used to create a card. The list of cards will be managed in Home.jsx  */

function Card({ id, cover, cardTitle }) {

    return (
        <NavLink to={`/hosting/${id}`}>
            <li className='card'>            
                <img src={cover} alt='Photographie de couverture des hébergements' className='card__image'/>
                <h2 className='card__title'>
                    {cardTitle}
                </h2>
            </li>
        </NavLink>
    )
}

export default Card;