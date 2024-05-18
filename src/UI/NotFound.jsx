import React from 'react';
import notFoundLogo from '../style/logo/notFoundLogo.png'
export const NotFound = ({errorMessage}) => {
  return (
    <div className="notFound">
        <img src={notFoundLogo} alt='notFoundLogo'/>
        <h2>{errorMessage}</h2>
    </div>
  )
}
