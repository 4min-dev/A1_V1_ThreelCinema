import axios from "axios";
export const GetMovieReviews = async(setLoading,setErrorMessage,setReviewsData,setPaginateFilters,paginateFilters,movieId) => {
    setLoading(true)
    try {
        const reviewsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
            params: {language: 'en-US', page: paginateFilters.currPage},
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2ZiMjcwYTI5OGU3MmE4OTI1OTczNjZjZjI5ZTQ3NCIsInN1YiI6IjY2MjY3YWFlMmRkYTg5MDE2NGUxYzcwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KckPitte2jI8vu047VFPss5nPi2fYuJxMYFlHdNp0_w'
            }
        })
      setReviewsData(reviewsResponse.data.results)
      setPaginateFilters({...paginateFilters,totalPages:reviewsResponse.data.total_pages})
    } catch(e) {
        setErrorMessage(e.message)
    } finally {
        setLoading(false)
    }

}