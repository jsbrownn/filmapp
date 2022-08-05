import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { CardList } from '../components'

const Dashboard = () => {

  const { getMovies, popular,latest,top_rated } = useAppContext()

  useEffect(() => {
    getMovies('popular')
    // getMovies('top_rated')

    // getMovies('upcoming')

  }, [])

  return (
    <>
    <CardList cards={popular}
        title="Popular" /> 
    <CardList cards={top_rated} title="Top rated" /> 
    {/* <CardList cards={latest} title="Latest" />  */}
    </>




  )
}

export default Dashboard
