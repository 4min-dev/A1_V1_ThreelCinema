export const NextPagePaginateButton = ({disabled,setPaginateFilters,globalPaginateFilters}) => {
    return(
        <button 
          disabled={disabled} 
          className='paginateButton' 
          id='nextPagePaginateButton' 
          onClick={() => setPaginateFilters({...globalPaginateFilters,currPage:globalPaginateFilters.currPage + 1})}>
            Next
        </button>
    )
}