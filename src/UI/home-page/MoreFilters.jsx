import React, { useState } from 'react';
import { CustomSortPan } from '../custom/CustomSortPan';
import { genresData } from '../../assets/genresData';
export const MoreFilters = ({
              filter,
              setFilter,
              globalSortQuery,
              setGlobalSortQuery,
              moviesSortOptionsData,
              hasSortPanIsOpen,
              setSortPanIsOpen
            }) => {
  let [jenresSortPan,setJenresSortPan] = useState(false)

  const rateChangeValue = (e) => {

    if(e.target.value > 10) {
      e.target.value = 10
    }
  
    if(e.target.value <= 0) {
      e.target.value = 0
    }
  
  }

  return (

        <div className="moreFilters">
            <input type='number' placeholder='Min rating' onChange={(e) => {
              rateChangeValue(e)
              setFilter({...filter,minRateQuery:e.target.value})
            }}/>
            <input type='number' placeholder='Max rating' onChange={(e) => {
              rateChangeValue(e)
              setFilter({...filter,maxRateQuery:e.target.value})
            }}/>

            <CustomSortPan 
              filter={filter} 
              setFilter={setFilter}
              sortOptions={genresData} 
              hasSortPanIsOpen={jenresSortPan} 
              setSortPanIsOpen={setJenresSortPan}/>

            <CustomSortPan 
              filter={globalSortQuery}
              setFilter={setGlobalSortQuery}
              sortOptions={moviesSortOptionsData}
              hasSortPanIsOpen={hasSortPanIsOpen}
              setSortPanIsOpen={setSortPanIsOpen}/>
        </div>
  )
}