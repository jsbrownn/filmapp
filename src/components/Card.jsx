import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({ card }) => {
  const { release_date, backdrop_path, title, vote_average, id } = card
  let navigate = useNavigate();
  return (
    <div className="m-1.5" onClick={() => { navigate(`/movies/${id}`) }} >
      <div className="w-239 h-135 bg-gray-500 ">
        <img className='image' src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />
      </div>
      <h1 className="font-medium text-gray-500 hover:text-gray-900">{title}</h1>
      <div className='text-slate-700 dark:text-slate-500'>{`release:${release_date || ""}`}</div>
      <div>{`rating:${vote_average || ""}`}</div>
    </div>



  )
}

export default Card
