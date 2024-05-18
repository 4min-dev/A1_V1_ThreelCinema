import React from 'react';
import { SlideToLeftButton } from '../../slider/SlideToLeftButton';
import { SlideToRightButton } from '../../slider/SlideToRightButton';
import { PopularMoviesList } from '../../card-list/PopularMoviesList';
import { ErrorMessage } from '../../ErrorMessage';
import { ContentPreloader } from '../../ContentPreloader';
import { NotFound } from '../../NotFound';
export const PopularMovies = ({popularMovies,moviesWrapperOffset,setWrapperOffset,setBackgroundImg,
                              setHasMoviesHovered,popularMoviesError,isPopularMoviesLoading}) => {
  return (
    <div className="homePageStartedSectionContent homePageStartedSectionContent-show">

    <h1>Most Popular</h1>

      <div className="popularMoviesMainContainer">
      {popularMovies.length > 0 && <SlideToLeftButton moviesWrapperOffset={moviesWrapperOffset} setWrapperOffset={setWrapperOffset}/>}

        <div className="popularMoviesWindow">
          {isPopularMoviesLoading 
          ? <ContentPreloader/> 
          : popularMoviesError ? <ErrorMessage errorMessage={popularMoviesError}/> 
          :  popularMovies.length 
           ? popularMovies.map((el) => 
               <PopularMoviesList 
                 key={el.id}
                 movieData={el} 
                 moviesWrapperOffset={moviesWrapperOffset}
                 setBackgroundImg={setBackgroundImg}
                 setHasMoviesHovered={setHasMoviesHovered}/>)
           : <NotFound/>}
        </div>

       {popularMovies.length > 0 && <SlideToRightButton moviesWrapperOffset={moviesWrapperOffset} setWrapperOffset={setWrapperOffset} popularMoviesLength={popularMovies.length - 1}/>}
      </div>
  </div>
  )
}