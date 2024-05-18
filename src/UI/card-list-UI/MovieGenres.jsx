import React from 'react'

export const MovieGenres = ({genreData}) => {
  return (
    <div className='movieGenre'>
      <h4>{genreData.name}</h4>
    </div>
  )
}