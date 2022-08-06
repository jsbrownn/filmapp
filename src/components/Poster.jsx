import React from 'react'

const Poster = ({path,title}) => {
  return (
      <img className="flex justify-center m-auto w-full h-auto " src={`https://image.tmdb.org/t/p/w500/${path}`} alt={title} />
  )
}

export default Poster
  