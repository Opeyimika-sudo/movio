import {useEffect} from 'react'
import './App.css'
import { fetchMovies } from './movieSlice'
import { useAppDispatch, useAppSelector } from './store'
// import Child from './components/Child'

function App() {
  const movies = useAppSelector((state) => state.movies.movies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])
  return (
    <>
      {/* {movies.map((movie) => (
        <h1>{movie.original_title}</h1>
      ))} */}
    </>
  )
}

export default App
