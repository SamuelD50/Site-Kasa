import React from 'react';
import redStar from '../../assets/red-star.svg';
import greyStar from '../../assets/grey-star.svg';
import './Rating.scss';

/* This component is used to create the rating by stars in hosting page */

function Rating({ rating }) {

    const ratingScore = parseInt(rating)
    const totalRating = 5
    const unratingScore = totalRating - ratingScore

    const ratingStars = Array.from({ length: ratingScore }, (_, index) => (
        <li key={`ratingStars-${index}`} className='rating__star'>
            <img src={redStar} alt={`Star rated N°${index + 1}`} />
        </li>
    ))

    const unratingStars = Array.from({ length: unratingScore }, (_, index) => (
        <li key={`unratingStars-${index}`} className='unrating__star'>
            <img src={greyStar} alt={`Star not rated N°${index + 1}`} />
        </li>
    ))

    return (
        <ul className='rating__list'>
            {[...ratingStars, ...unratingStars]}
        </ul>
    )
}

export default Rating
