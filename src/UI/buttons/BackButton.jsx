import React from 'react'
import { useNavigate } from 'react-router-dom'

export const BackButton = () => {

const goBack = useNavigate()

  return (
    <button className='backButton' type='button' onClick={() => goBack(-1)}>
       <h3>Back</h3>
    </button>
  )
}