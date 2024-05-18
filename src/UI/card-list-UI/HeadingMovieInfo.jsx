import React from 'react'
import { FavButton } from '../buttons/FavButton'
import { MovieRating } from './MovieRating'
export const HeadingMovieInfo = ({movieData,favMovies,toFav}) => {
  return (
    <div className='headingMovieInfo'>
       <MovieRating movieData={movieData}/>
        <FavButton favMovies={favMovies} movieData={movieData} toFav={toFav}/>
    </div>
  )
}