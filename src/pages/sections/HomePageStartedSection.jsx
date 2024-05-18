import React, { useState } from 'react'
import { PopularMovies } from '../../UI/home-page/home-page-started-section-UI/PopularMovies'
export const HomePageStartedSection = ({popularMovies,popularMoviesError,isPopularMoviesLoading}) => {

let [moviesWrapperOffset,setWrapperOffset] = useState(0)
let [backgroundImg,setBackgroundImg] = useState('')
let [hasMovieHovered,setHasMoviesHovered] = useState('backgroundMovieDidNotHovered')

  return (
    <div className="homePageStartedSectionContainer" id='startedSection'>

        <img src={backgroundImg} 
          alt={'backgroundImg'} 
          className='homePageStartedSectionBackgroundMovie' 
          id={hasMovieHovered}/>

        <PopularMovies 
          popularMovies={popularMovies}
          moviesWrapperOffset={moviesWrapperOffset} 
          setWrapperOffset={setWrapperOffset} 
          setBackgroundImg={setBackgroundImg}
          setHasMoviesHovered={setHasMoviesHovered}
          popularMoviesError={popularMoviesError}
          isPopularMoviesLoading={isPopularMoviesLoading}
        />

      </div>
  )
}