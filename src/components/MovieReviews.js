import React from 'react'

const Review = ( { link, headline, summary_short, multimedia, publication_date, title }) => {
    return(
      <li className='review'>
        <h2><a href={link.url}>{headline}</a></h2>
        <p>{summary_short}</p>
        <img src={multimedia.src} alt={title}/>
        <p>{publication_date}</p>
      </li>
    )
}

const MovieReviews = ({ reviews }) => (
  <ul className='review-list'>
    {reviews.map(Review)}
  </ul>
)

export default MovieReviews
