import React, { useEffect,useState} from 'react';
import ReactPlayer from 'react-player/youtube'
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext'
import {Poster} from '../components'
import {Select,SelectTailwind} from '../components/UI'


const Movie = () => {
  let { id } = useParams();
  
  const {
    findMovieById,
    getTrailersPath,
    currentMovie,
    trailersPath
  } = useAppContext()
  
  const { 
    poster_path,
    title,
    overview,
    popularity
  } = currentMovie

  const [youtubeId,setYouTubeId] = useState()
  const changeSrc =(src)=>{
    console.log(src)
    setYouTubeId(src)
  }

  useEffect(() => {
    async function fetchMovie(id) {
      await findMovieById(id)
      await getTrailersPath(id)
    }
    fetchMovie(id)
    return ()=>fetchMovie(id)
  }
  , [id])
  console.log(currentMovie)
  return (
    <>
    {
      currentMovie && trailersPath
      ?
      <>
      <div className="">
        <Poster path={poster_path} title={title}/>
        <div className="info">
          <h2>{title}</h2>
          <div className="popularity">popularity: {popularity}</div>
          <p>{overview}</p>
        </div>
        {trailersPath.results && <SelectTailwind options={trailersPath.results} 
                        handleChange={changeSrc} 
                        setYouTubeId={setYouTubeId}
                        />}
        <ReactPlayer controls url={`https://www.youtube.com/watch?v=${youtubeId}`}/>
      </div>
      </>
      
      :
      <div>no</div>
    }
    </>
  )
}

export default Movie
