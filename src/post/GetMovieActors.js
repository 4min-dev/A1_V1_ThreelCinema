import axios from "axios";
export const GetMovieActors = async(setLoading,setErrorMessage,setActorsData,movieId) => {
    setLoading(true)
    try {
        const actorsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
            params: {language: 'en-US'},
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2ZiMjcwYTI5OGU3MmE4OTI1OTczNjZjZjI5ZTQ3NCIsInN1YiI6IjY2MjY3YWFlMmRkYTg5MDE2NGUxYzcwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KckPitte2jI8vu047VFPss5nPi2fYuJxMYFlHdNp0_w'
            }
        })
        setActorsData(actorsResponse.data.cast)
    } catch(e) {
        setErrorMessage(e.message)
    } finally {
        setLoading(false)
    }
}