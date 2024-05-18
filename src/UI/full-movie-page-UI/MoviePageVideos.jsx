import React from 'react'
import { VideoClipFrame } from '../card-list/VideoClipFrame'

export const MoviePageVideos = ({paginatedMovies}) => {
  return (
    <div className="moviePageVideosSectionVideosContent">
        {paginatedMovies.map((videoData) => 
        <VideoClipFrame key={videoData.id} videoData={videoData}/>)}
    </div>
  )
}