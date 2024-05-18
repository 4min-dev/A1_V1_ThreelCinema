import React from 'react'

export const VideoClipFrame = ({videoData}) => {
  return (
    <iframe className='videoClipFrame'
        title={`${videoData.name} | ${videoData.site}`}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoData.key}`}
        allowFullScreen
    />
  )
}