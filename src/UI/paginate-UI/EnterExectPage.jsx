import React from 'react'

export const EnterExectPage = ({setPaginateFilters,globalPaginateFilters}) => {

const inputKeyDown = (key,target) => {
  if(key !== 'Enter') {
    return
  }
  setPaginateFilters({...globalPaginateFilters,currPage:Number(target)})
}

const inputChangeValue = (e) => {

  if(e.target.value > globalPaginateFilters.totalPages) {
    e.target.value = globalPaginateFilters.totalPages
  }

  if(e.target.value <= 1) {
    e.target.value = 1
  }

}

  return (
    <input className='exectPagePaginateButton'
      max={globalPaginateFilters.totalPages} type='number' 
      placeholder='...' 
      onKeyDown={(e) => inputKeyDown(e.key,e.target.value)}
      onChange={(e) => inputChangeValue(e)}
    />
  )
}