import './Card.scss'
import datas from '../../datas/datas.json'
import { Link } from 'react-router-dom'


function Card() {

    const handleClick = (hostingsId) => {
        console.log(hostingsId)
    }

    return (
        <ul className='gallery'>
            {datas.map((hostings) => (
                <Link to={`/hosting/${hostings.id}`}>
                    <li key={hostings.id} className='card' onClick={() => handleClick(hostings.id)}>
                        <img src={hostings.cover} alt='Photographie de couverture des hébergements' className='card__image'/>
                        <span className='card__title'>
                            {hostings.title}
                        </span>
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default Card;