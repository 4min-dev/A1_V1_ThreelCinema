import React from 'react';
import favNotSelected from '../../style/icons/favNotSelected.png';
import favSelected from '../../style/icons/favSelected.png';
export const FavButton = ({favMovies,movieData,toFav}) => {
  return (
    <button className='favButton' onClick={() => toFav(movieData)}>
        <img src={!favMovies.some((el) => el.id === movieData.id) ? favNotSelected : favSelected} alt='favButton'/>
    </button>
  )
}