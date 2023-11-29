import React from 'react';
import redStar from '../../assets/red-star.svg';
import greyStar from '../../assets/grey-star.svg';
import datas from '../../datas/datas.json';
import { useParams } from 'react-router-dom';
import './Rating.scss';


function Rating() {

    const { id } = useParams();
    const hostings = datas.find((hostings) => hostings.id === id)

    const ratingScore = hostings.rating;
    const totalRating = 5;
    const unratingScore = totalRating - ratingScore;
    console.log(unratingScore)

    const ratingStars = [];
    for (let i = 0; i < ratingScore; i++) {
        ratingStars.push(
            <li key={ratingScore} className='rating-star'>
                <img src={redStar} alt={ratingScore}/>
            </li>
        )
    }

    const unratingStars = [];
    for (let i = 0; i < unratingScore; i++) {
        unratingStars.push(
            <li key={unratingScore} className='unrating-star'>
                <img src={greyStar} alt={unratingScore}/>
            </li>
        )
    }

    return (
        <ul className='rating__list'>
            {ratingStars}
            {unratingStars}
        </ul>
    )
}

export default Rating
