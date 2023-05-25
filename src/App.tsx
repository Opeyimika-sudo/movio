import {useEffect} from 'react'
import './App.css'
import { fetchMovies } from './movieSlice'
import { useAppDispatch } from './store'
import Child from './Child'

function App() {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])
  return (
    <>
      <Child />
    </>
  )
}

export default App
