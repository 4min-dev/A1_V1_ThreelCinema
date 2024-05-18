import axios from "axios";

export const GetPopularMovies = async (setLoading,setData,setErrorMessage) => {
    setLoading(true)
    try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {language: 'en-US', page: '1'},
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2ZiMjcwYTI5OGU3MmE4OTI1OTczNjZjZjI5ZTQ3NCIsInN1YiI6IjY2MjY3YWFlMmRkYTg5MDE2NGUxYzcwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KckPitte2jI8vu047VFPss5nPi2fYuJxMYFlHdNp0_w'
        }
  })
  setData(response.data.results)
    } catch(e) {
        setErrorMessage(e.message)
    } finally {
        setLoading(false)
    }
}