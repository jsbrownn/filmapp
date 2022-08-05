import React from 'react'

const Poster = ({path,title}) => {
  return (
    <div className ="w-50 h-auto">
      <img className="" src={`https://image.tmdb.org/t/p/w500/${path}`} alt={title} />
    </div>
  )
}

export default Poster
