import React from 'react'

const MovieReviews = ({ reviews }) => (
  <ul className='review-list'>
    {reviews.map(review => <li class='review'>boop</li>)}
  </ul>
)

export default MovieReviews
