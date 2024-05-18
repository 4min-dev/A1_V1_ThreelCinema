import React from 'react';
export const SortPanFilters = ({sortOptions,setFilter,setSortPanIsOpen}) => {
  return (
    <div className='sortPanFilters'>
            {sortOptions.map((el) => <button key={el.value} type='button' onClick={() => {
              setFilter({sortQuery:el.value,sortName:el.name})
              setSortPanIsOpen(false)
              }}>{el.name}</button>)}
    </div>
  )
}