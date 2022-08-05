import React,{useEffect,useState} from 'react'

import {useAppContext} from '../context/AppContext'
import {Card} from '../components'

function Movies() {
  const path = window.location.pathname.split('/')[1]
  const context = useAppContext()
  const {getMovies} = context
  const films = context[path]
  const [fetching,setFetching] = useState(false)
  const [page,setPage] = useState(1)

  const scrollHandler = (event)=>{
    
    let scrollHeight = event.target.documentElement.scrollHeight
    let scrollTop = event.target.documentElement.scrollTop
    let innerHeight = window.innerHeight

    if( (scrollHeight - (innerHeight + scrollTop) ) < 90){
      setFetching(true)
    }
    
  }

  useEffect(
    () => {
      if(fetching || page === 1) {
        getMovies(path, page)
        setPage(prev=>prev + 1)
      }
      setFetching(false)
    },
    [fetching,path])

  useEffect(()=>{
      document.addEventListener('scroll', scrollHandler)
    return()=>{
      document.removeEventListener('scroll',scrollHandler)
    }
  },[])
  console.log(page,fetching)

  return (
    <div>
      <h1 className='text-slate-900 mb-2 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight '>{path.toUpperCase()}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
        films &&
        films.map( (card) => (
            <Card key={card.id + Date.now()} card={card}/>
        ))
      }
      </div>
      
    </div>
  )
}

export default Movies;
