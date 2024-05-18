import React from 'react';
import slideToLeftIcon from '../../style/icons/slideToLeftIcon.png';
export const SlideToLeftButton = ({moviesWrapperOffset,setWrapperOffset}) => {
  return (
    <button
        onClick={() => setWrapperOffset(prev => prev +500) }
        disabled={moviesWrapperOffset === 0} 
        className='slideButton'>
    <img src={slideToLeftIcon} alt='slideToLeft'/>
  </button>
  )
}