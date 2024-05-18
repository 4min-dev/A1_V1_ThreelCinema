import React from 'react';
import somethingError from '../style/icons/somethingError.png';
export const ErrorMessage = ({errorMessage}) => {
  return (
    <div className='errorMessage'>
      <img src={somethingError} alt={errorMessage}/>
      <h2>{errorMessage}</h2>
    </div>
  )
}