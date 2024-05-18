import React, { useEffect, useState } from 'react'
import { MoviesSectionMainFilterUI } from '../../UI/home-page/MoviesSectionMainFilterUI'
import { GetAllMovies } from '../../post/GetAllMovies';
import { NotFound } from '../../UI/NotFound';
import { MoviesList } from '../../UI/card-list/MoviesList';
import { ContentPreloader } from '../../UI/ContentPreloader';
import { ErrorMessage } from '../../UI/ErrorMessage';
import { PaginateButtons } from '../../UI/paginate-UI/PaginateButtons';
import { Footer } from '../../UI/Footer';

export const HomePageMoviesSection = () => {
  let [moviesIsLoading,setIsLoading] = useState(true)
  let [moviesData,setMoviesData] = useState([])
  let [moviesDataError,setMovieDataError] = useState('')
  let [moreFilters,setMoreFilters] = useState(false)
  let [filter,setFilter] = useState({searchQuery:'',minRateQuery:null,maxRateQuery:null,sortQuery:'',sortName:''})
  let [globalPaginateFilters,setPaginateFilters] = useState({currPage:1,totalPages:null})
  let [globalSortQuery,setGlobalSortQuery] = useState({sortQuery:'',sortName:''})
  let [hasSortPanIsOpen,setSortPanIsOpen] = useState(false)

  useEffect(() => {
    if(document.querySelector('.moviesSectionContainer')) {

      window.addEventListener('scroll', () => {
        const moviesSectionContainer = document.querySelector('.moviesSectionContainer');
        const scrollPosition = window.scrollY;
    
        if (scrollPosition > 160) {
          moviesSectionContainer.classList.add('moviesSectionContainer-show');
        } else {
          moviesSectionContainer.classList.remove('moviesSectionContainer-show');
        }
    
      });
    
    GetAllMovies(
      setIsLoading,
      setMoviesData,
      setMovieDataError,
      globalPaginateFilters.currPage,
      globalSortQuery.sortQuery,
      filter,
      globalPaginateFilters,
      setPaginateFilters
    )

}
  },[globalPaginateFilters.currPage,globalSortQuery,filter])

  return (
    <div className='moviesSectionContainer' id='moviesSection'>
        <div className="moviesSectionContent">
            <h1>Movies</h1>
            <MoviesSectionMainFilterUI 
              moreFilters={moreFilters} 
              setMoreFilters={setMoreFilters} 
              filter={filter} 
              setFilter={setFilter}
              globalSortQuery={globalSortQuery}
              setGlobalSortQuery={setGlobalSortQuery}
              hasSortPanIsOpen={hasSortPanIsOpen}
              setSortPanIsOpen={setSortPanIsOpen}
              />
        </div>

       { moviesIsLoading 
       ? <ContentPreloader/> 
       :  moviesDataError 
          ? <ErrorMessage errorMessage={moviesDataError}/> 
          : moviesData.length > 0 
              ? <div className='movieListContainer'>
                {moviesData.map((movie) => <MoviesList movie={movie} key={movie.id}/>)}
                {!filter.searchQuery && <PaginateButtons globalPaginateFilters={globalPaginateFilters} setPaginateFilters={setPaginateFilters} moviesData={moviesData}/>}
              </div>
              : <NotFound errorMessage={'Nothing was found for your request'}/>}
        {!moviesIsLoading && <Footer/>}
    </div>
  )
}

