import React from 'react'

export const UnderMovieInfo = ({movieData}) => {
  return (
    <div className="underMovieInfo">
        <span className='movieTitle'>
            {movieData.title}
        </span>
        <span className='movieDescription'>
            {movieData.overview}
        </span>
    </div>
  )
}