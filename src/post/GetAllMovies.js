import axios from "axios";

export const GetAllMovies = async (setLoading,setData,setErrorMessage,currPage,sortQuery,filter,globalPaginateFilters,setPaginateFilters) => {
    setLoading(true)
       try {
          if(!filter.searchQuery) {
            const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
              params: {
                include_adult: 'true',
                include_video: 'false',
                language: 'en-US',
                page: currPage,
                sort_by: sortQuery,
                with_genres:filter.sortQuery,
                'vote_average.gte': filter.minRateQuery,
                'vote_average.lte': filter.maxRateQuery,
              },
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2ZiMjcwYTI5OGU3MmE4OTI1OTczNjZjZjI5ZTQ3NCIsInN1YiI6IjY2MjY3YWFlMmRkYTg5MDE2NGUxYzcwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KckPitte2jI8vu047VFPss5nPi2fYuJxMYFlHdNp0_w'
              }
          })
          
          setPaginateFilters({...globalPaginateFilters,totalPages:500,totalResults:response.data.total_results})
          setData(response.data.results)
          } else {
            const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
              params: {
                query:filter.searchQuery,
                include_adult: 'true', 
                language: 'en-US'
              },
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2ZiMjcwYTI5OGU3MmE4OTI1OTczNjZjZjI5ZTQ3NCIsInN1YiI6IjY2MjY3YWFlMmRkYTg5MDE2NGUxYzcwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KckPitte2jI8vu047VFPss5nPi2fYuJxMYFlHdNp0_w'
              }
            }
          )
          setPaginateFilters({...globalPaginateFilters,totalPages:response.data.total_pages,totalResults:response.data.total_results})
          setData(response.data.results)
          }
       } catch(e) {
        setErrorMessage(e.message)
      }  finally {
        setLoading(false)
      }
} 