// import axios from 'axios'

// export const fetchSearchMovie = (searchValue) => async (dispatch) => {
//     console.log(searchValue);
//     try {
//         dispatch(setLoad(true))
//         const response = await axios.get(`http://www.omdbapi.com/?t=${searchValue}&apikey=4fff3540&plot=full`);
//         if (response.data.Title) {
//             dispatch(searchMovie(response.data))
//             sessionStorage.setItem('imdbID', response.data.imdbID);
//         } else {
//             dispatch(searchMovie(null))
//         }
//     } catch (e) {
//         alert(e)
//     } finally {
//         dispatch(setLoad(false))
//     }
// };

// export const fetchSearchMovieById = (imdbID) => async (dispatch) => {
//     try {
//         const response = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=4fff3540&plot=full`);
//         if (response.data.Title) {
//             dispatch(searchMovie(response.data))
//         } else {
//             dispatch(searchMovie(null))
//         }
//     } catch (e) {
//         alert(e)
//     }
// };

// export const searchMovie = (movie) => ({ type: 'SEARCH_MOVIE', payload: movie })
// export const setLoad = (bool) => ({ type: 'SET_LOAD', payload: bool })
