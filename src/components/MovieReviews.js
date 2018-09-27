import React from 'react'

const MovieReviews = ({ reviews }) => (
  <ul className='review-list'>
    {reviews.map(review => <li>review.title</li>)}
  </ul>
)

export default MovieReviews
