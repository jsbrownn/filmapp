
import axios from "axios";

const TMDbFetch = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  method: 'GET',
  params: {
    "api_key": process.env.REACT_APP_API_KEY
  },
})
export default TMDbFetch
// request


// response

