import React from 'react'

export const MoreContentButton = ({moreFn,buttonText,id}) => {
  return (
    <button type='button' className='moreContentButton' onClick={() => moreFn()} id={id}>
        {buttonText}
    </button>
  )
}