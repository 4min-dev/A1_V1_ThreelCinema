import React from 'react'
import { MoviesList } from './card-list/MoviesList'
import { NotFound } from './NotFound'

export const FavPopupWindow = ({favData,setFavPopup}) => {
  return (
    <div className='favPopupWindowContainer' onClick={() => setFavPopup(false)}>
      <div className="favPopupWindowContent">
        <div className="favPopup" onClick={(e) => e.stopPropagation()}>
            {!favData.length > 0
              ? <NotFound errorMessage='No favourite content found'/>
              : favData.map((favItem) => <MoviesList movie={favItem}/>)
            }
        </div>
      </div>
    </div>
  )
}