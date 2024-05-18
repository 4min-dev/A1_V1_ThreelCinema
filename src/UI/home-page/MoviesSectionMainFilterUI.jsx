import React from 'react';
import moreFiltersValues from '../../style/icons/moreFiltersValues.png';
import { MoreFilters } from './MoreFilters';
import { moviesSortOptionsData } from '../../assets/moviesSortOptionsData'
export const MoviesSectionMainFilterUI = ({moreFilters,setMoreFilters,filter,setFilter,globalSortQuery,setGlobalSortQuery,hasSortPanIsOpen,setSortPanIsOpen}) => {
  return (
    <form className='filterContentForm'>
        {
         !filter.searchQuery && 
      <button className={!moreFilters ? 'filterContentMoreFiltersButton' : 'filterContentMoreFiltersButton moreFiltersButtonActive'} type='button' onClick={() => setMoreFilters(!moreFilters)}>
         <img src={moreFiltersValues} alt='moreFiltersValues'/>
     </button>
        }
        <input 
          defaultValue={''}
          type='text' 
          placeholder='Search' 
          onChange={(e) => setFilter({...filter,searchQuery:e.target.value})} 
          className={!filter.searchQuery ? 'searchMoviesInputWithFilters' : 'searchMoviesInputWithoutFilteres'}>
        </input>
        {(moreFilters && !filter.searchQuery) && 
        <MoreFilters 
          filter={filter} 
          setFilter={setFilter} 
          globalSortQuery={globalSortQuery}
          setGlobalSortQuery={setGlobalSortQuery}
          moviesSortOptionsData={moviesSortOptionsData}
          hasSortPanIsOpen={hasSortPanIsOpen}
          setSortPanIsOpen={setSortPanIsOpen}/>}
    </form>
  )
}