import React from 'react';
import redStar from '../../assets/red-star.svg';
import greyStar from '../../assets/grey-star.svg';
import './Rating.scss';

/* This component is used to create the rating by stars in hosting page */

function Rating({ rating }) {

    const ratingScore = parseInt(rating);
    const totalRating = 5;
    const unratingScore = totalRating - ratingScore;

    const ratingStars = [];
    for (let i = 0; i < ratingScore; i++) {
        ratingStars.push(
            <li key={i} className='rating__star'>
                <img src={redStar} alt={ratingScore}/>
            </li>
        )
    }

    const unratingStars = [];
    for (let i = 0; i < unratingScore; i++) {
        unratingStars.push(
            <li key={i} className='unrating__star'>
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
