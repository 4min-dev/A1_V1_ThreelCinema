import React from 'react'

export const PrevPagePaginateButton = ({disabled,setPaginateFilters,globalPaginateFilters}) => {
  return (
    <button disabled={disabled} 
      className='paginateButton' 
      id='prevPagePaginateButton' 
      onClick={() => setPaginateFilters({...globalPaginateFilters,currPage:globalPaginateFilters.currPage - 1})}>
        Prev 
    </button>
  )
}

export default PrevPagePaginateButton
