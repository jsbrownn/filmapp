import React from 'react'

const Poster = ({path,title}) => {
  return (
    <div className ="poster">
      <img src={`https://image.tmdb.org/t/p/w500/${path}`} alt={title} />
    </div>
  )
}

export default Poster
