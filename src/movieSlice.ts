// type 
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [],
}

export const fetchMovies = createAsyncThunk("movies/fetch", 
    async() => {
        const response = await fetch("https://api.themoviedb.org/3/movie/550?api_key=48effb87d59d70b59702173174665147");
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
            state.movies = action.payload
        })
    }

})

export default movieSlice.reducer;
// export const {fetch}