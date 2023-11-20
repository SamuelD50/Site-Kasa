import './Card.scss'
import datas from '../../datas/datas.json'


function Card() {
    return (
        <ul className='gallery'>
            <li className="card">
                <img src='' alt='' className='card__image'/>
                <span className='card__title'>
                </span>
            </li>
        </ul>
    )
}

export default Card;