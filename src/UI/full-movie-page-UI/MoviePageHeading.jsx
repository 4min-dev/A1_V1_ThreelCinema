import React from 'react'
import { AsidePan } from '../AsidePan'
import { BackButton } from '../buttons/BackButton'
import { MoviesList } from '../card-list/MoviesList'
import { MoviePageMainInfoAboutMovie } from './MoviePageMainInfoAboutMovie'
export const MoviePageHeading = ({fullMovieData,trailerData}) => {
  return (
    <div className="moviePageHeadingContent">
        <AsidePan className={'leftAsidePanMoviePage'}>
            <BackButton/>
            <MoviesList movie={fullMovieData}/>
        </AsidePan>
        <MoviePageMainInfoAboutMovie trailerData={trailerData} fullMovieData={fullMovieData}/>
    </div>
  )
}