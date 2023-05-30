import {useEffect} from 'react'
import './App.css'
import { fetchMovies } from './movieSlice'
import { useAppDispatch, useAppSelector } from './store'
import { Header } from './components/Header'

function App() {
  const movies = useAppSelector((state) => state.movies.movies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])
  return (
    <>
      <Header/>
    </>
  )
}

export default App
