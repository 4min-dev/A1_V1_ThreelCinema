import React from 'react'
import emptyImg from '../../style/icons/emptyImg.jpg'
export const ActorList = ({actorData}) => {
  return (
    <div className='actorList'>
      <img src={actorData.profile_path 
            ? `https://image.tmdb.org/t/p/w300` + `${ actorData.profile_path}` 
            : emptyImg}
      />
      <h3>{actorData.character}</h3>
      <h4>{actorData.original_name}</h4>
      <h4>{actorData.known_for_department}</h4>
    </div>
  )
}