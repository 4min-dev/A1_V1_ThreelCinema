import React from 'react'
import { MoviePageVideos } from '../../UI/full-movie-page-UI/MoviePageVideos'
import { MoreContentButton } from '../../UI/buttons/MoreContentButton'
import { NotFound } from '../../UI/NotFound'
export const MoviePageVideosSection = ({fullMovieVideos,paginatedMovies,limitMovieVideos,setLimitMovieVideos}) => {

const setVideoLimit = () => {
  setLimitMovieVideos(prev => prev + 4)
}

  return (
    <div className="moviePageVideosSection">
        <h1>{`Videos (${fullMovieVideos.length})`}</h1>

        {paginatedMovies.length > 0 
        ? <MoviePageVideos paginatedMovies={paginatedMovies}/>
        : <NotFound errorMessage='No videos found'/>
        }   
        {fullMovieVideos.length > limitMovieVideos && 
            <MoreContentButton moreFn={setVideoLimit} buttonText='More..'/>}
    </div>
  )
}