import axios from "axios";
export const GetFullMovieInfo = async(setLoading,setErrorMessage,setMovieData,setVideosData,setTrailerData,movieId) => {
    setLoading(true)
    try {
        const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2ZiMjcwYTI5OGU3MmE4OTI1OTczNjZjZjI5ZTQ3NCIsInN1YiI6IjY2MjY3YWFlMmRkYTg5MDE2NGUxYzcwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KckPitte2jI8vu047VFPss5nPi2fYuJxMYFlHdNp0_w'
              }
        })
        const movieVideosResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2ZiMjcwYTI5OGU3MmE4OTI1OTczNjZjZjI5ZTQ3NCIsInN1YiI6IjY2MjY3YWFlMmRkYTg5MDE2NGUxYzcwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KckPitte2jI8vu047VFPss5nPi2fYuJxMYFlHdNp0_w'
              }
        })
        setTrailerData(movieVideosResponse.data.results.filter((el) => el.type === "Trailer"))
        setMovieData(movieResponse.data)
        setVideosData(movieVideosResponse.data.results)
    } catch(e) {
        setErrorMessage(e.message)
    } finally {
        setLoading(false)
    }

}