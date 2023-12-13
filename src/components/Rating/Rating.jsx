import React from 'react';
import redStar from '../../assets/red-star.svg';
import greyStar from '../../assets/grey-star.svg';
import './Rating.scss';


function Rating({ rating, id }) {

    const ratingScore = parseInt(rating);
    const totalRating = 5;
    const unratingScore = totalRating - ratingScore;

    const ratingStars = [];
    for (let i = 0; i < ratingScore; i++) {
        ratingStars.push(
            <li key={id} className='rating-star'>
                <img src={redStar} alt={ratingScore}/>
            </li>
        )
    }

    const unratingStars = [];
    for (let i = 0; i < unratingScore; i++) {
        unratingStars.push(
            <li key={id} className='unrating-star'>
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
