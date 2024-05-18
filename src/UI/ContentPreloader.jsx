import React from 'react';
import contentPreloader from '../style/gif/contentPreloader.gif';
export const ContentPreloader = () => {
  return (
    <div className='contentPreloader'>
        <img src={contentPreloader} alt='contentPreloader'/>
    </div>
  )
}