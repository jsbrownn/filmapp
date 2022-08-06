import React from 'react'
import { useNavigate } from 'react-router-dom';

const getStars = num =>{
  
  let arr = new Array(Math.floor(+num))
  arr.fill("⭐")

  return arr.join("")
}

const Card = ({ card }) => {
  const { release_date, poster_path, title, vote_average, id, backdrop_path } = card
  let navigate = useNavigate();
  return (
    <div className="m-1.5 hover:scale-105 transition duration-300 delay-0 hover:delay-150 " onClick={() => { navigate(`/movies/${id}`) }} >
      <div className="w-239 h-340 rounded-lg bg-gray-500 ">
        <img loading="lazy" className='rounded-lg' src={`https://image.tmdb.org/t/p/w500/${poster_path || backdrop_path}`} />
      </div>
      <div className="flex justify-between mt-1">
      <div>{ getStars(vote_average) }</div> <div className="">{vote_average}</div>
      </div>
      <h3 className="font-bold text-gray-600 hover:text-gray-900">{title}</h3>
      
    </div>



  )
}

export default Card
