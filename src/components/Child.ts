import React from 'react'
import { useAppSelector } from '../store'

const Child = () => {
const movies = useAppSelector((state) => state.movies.movies);
console.log(movies);
  return (
    
  )
}

export default Child
