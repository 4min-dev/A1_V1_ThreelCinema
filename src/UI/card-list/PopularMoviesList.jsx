import React from 'react'
import { MovieInfo } from '../card-list-UI/MovieInfo'

export const PopularMoviesList = ({movieData,moviesWrapperOffset,setBackgroundImg,setHasMoviesHovered}) => {

  return (

<div 
    className='popularMovieButton'
    key={movieData.id} 
    type='button' 
    style={{transform:`translateX(${moviesWrapperOffset}px)`}} 
    onMouseOver={() => {
        setBackgroundImg(`https://image.tmdb.org/t/p/w500${movieData.poster_path}`)
        setHasMoviesHovered('backgroundMovieIsHovered')
    }} 
    onMouseOut={() => {
        setHasMoviesHovered('backgroundMovieDidNotHovered')
    }}>

        <MovieInfo movieData={movieData}/>

</div>)

}