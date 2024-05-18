import React from 'react'

export const MovieRating = ({movieData}) => {
  return (
    <div className={`rate ${movieData.vote_average >= 7 
                    ? 'highRate' 
                    : movieData.vote_average < 4 && 'lowRate'}`}>
    {`${movieData.vote_average} / 10`}
    </div>
  )
}