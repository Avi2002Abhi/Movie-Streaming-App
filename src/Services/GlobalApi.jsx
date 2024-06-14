import axios from "axios"

const movieBaseUrl="https://api.themoviedb.org/3/"
const api_key='b51c2ae00c6a895e012843839e3b8af5'
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=b51c2ae00c6a895e012843839e3b8af5';

// https://api.themoviedb.org/3/trending/all/day?api_key=b51c2ae00c6a895e012843839e3b8af5
const getTrendingVideos=axios.get(`${movieBaseUrl}trending/all/day?api_key=${api_key}`);
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)
export default{
    getTrendingVideos,
    getMovieByGenreId
}