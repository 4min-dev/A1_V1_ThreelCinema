import React from 'react'

export const ReviewsStat = ({reviewsData}) => {
  return (
        <ul className='moviePageReviewsStat'>
                <li>
                    <h2>Total:</h2> 
                    <h3>{reviewsData.length}</h3>
                </li>
                <li>
                    <h2>Neutral:</h2> 
                    <h3 className='rate'>
                        {reviewsData.filter((el) => el.author_details.rating !== null && el.author_details.rating >= 4 && el.author_details.rating <= 6.5).length}</h3>
                </li>
                <li>
                    <h2>Positive:</h2> 
                    <h3 className='highRate'>
                        {reviewsData.filter((el) => el.author_details.rating !== null && el.author_details.rating >= 6.6).length}</h3>
                </li>
                <li>
                    <h2>Negative:</h2> 
                    <h3 className='lowRate'>
                        {reviewsData.filter((el) => el.author_details.rating !== null && el.author_details.rating <= 3.9).length}</h3>
                </li>
        </ul>
  )
}