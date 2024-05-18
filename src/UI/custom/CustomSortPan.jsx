import React from 'react';
import { SortPanFilters } from './SortPanFilters';

export const CustomSortPan = ({filter,setFilter,sortOptions,hasSortPanIsOpen,setSortPanIsOpen}) => {
  return (
    <div className='sortPan'>
        <span className="sortPanTitle" onClick={() => setSortPanIsOpen(!hasSortPanIsOpen)}>
            {filter.sortName ? filter.sortName : sortOptions[0].name}
        </span>
        {hasSortPanIsOpen && <SortPanFilters sortOptions={sortOptions} setFilter={setFilter} setSortPanIsOpen={setSortPanIsOpen}/>}
    </div>
  )
}