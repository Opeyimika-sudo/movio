
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [],
}

// for trending movies
// https://api.themoviedb.org/3/discover/movie?api_key=48effb87d59d70b59702173174665147"

// for trending series
// https://api.themoviedb.org/3/discover/tv?api_key=48effb87d59d70b59702173174665147

// for movie genres - returns an array of objects with {id: 1, name: "Action"}
// https://api.themoviedb.org/3/genre/movie/list?api_key=48effb87d59d70b59702173174665147

// for series genres
// https://api.themoviedb.org/3/genre/tv/list?api_key=48effb87d59d70b59702173174665147

// for search movies - returns {page: 1, results: [20 objects], total_pages: number, total_results: number}
// https://api.themoviedb.org/3/search/movie?query=fast&include_adult=false&language=en-US&page=1&api_key=48effb87d59d70b59702173174665147

// for search series - returns {page: 1, results: [20 objects], total_pages: number, total_results: number}
// https://api.themoviedb.org/3/search/tv?query=vampire&include_adult=false&language=en-US&page=1&api_key=48effb87d59d70b59702173174665147

// for trending 
// https://api.themoviedb.org/3/trending/all/day?language=en-US&page=10&api_key=48effb87d59d70b59702173174665147


export const fetchMovies = createAsyncThunk("movies/fetch", 
    async() => {
        const response = await fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US&page=10&api_key=48effb87d59d70b59702173174665147", {
            method: "GET"
        });
        const data = await response.json();
        return data;
    }
)

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            console.log(action.payload)
            state.movies = action.payload.results;
        })
    }

})

export default movieSlice.reducer;
// export const {fetch}