import React from 'react'
import { VideoClipFrame } from '../card-list/VideoClipFrame'

export const MoviePageMainInfoAboutMovie = ({trailerData,fullMovieData}) => {
  return (
    <div className="moviePageMainInfoAboutMovie">
        <div className="moviePageMainInfoAboutMovieTrailers">
          {trailerData.length > 0 && trailerData.map((trailerData) => <VideoClipFrame key={trailerData.id} videoData={trailerData}/>)}
        </div>
        <h3>{fullMovieData.overview}</h3>
    </div>
  )
}