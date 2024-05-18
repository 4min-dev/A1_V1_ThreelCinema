import React from 'react';
import slideToRightIcon from '../../style/icons/slideToRightIcon.png';
export const SlideToRightButton = ({setWrapperOffset, moviesWrapperOffset,popularMoviesLength}) => {
  return (
    <button 
      onClick={() => setWrapperOffset(prev => prev -500) } 
      disabled={moviesWrapperOffset === -500*popularMoviesLength} 
      className='slideButton'>
    <img src={slideToRightIcon} alt='slideToRight'/>
    </button>
  )
}