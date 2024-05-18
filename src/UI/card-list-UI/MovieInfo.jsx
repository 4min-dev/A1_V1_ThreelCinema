import React, { useContext } from 'react'
import { MainAppContext } from '../../context/mainAppContext'
import { HeadingMovieInfo } from './HeadingMovieInfo'
import { UnderMovieInfo } from './UnderMovieInfo'
export const MovieInfo = ({movieData}) => {

const { favMovies,
        toFav } = useContext(MainAppContext)

  return (
    <div className='movieInfo'>
      <HeadingMovieInfo 
        movieData={movieData} 
        favMovies={favMovies} 
        toFav={toFav}/>

      <img alt={movieData.title} src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} onClick={() => window.location.href = `/movie/${movieData.id}`}/>
  
    <UnderMovieInfo movieData={movieData}/>
    </div>
  )
}