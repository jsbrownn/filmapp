import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube'
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext'
import { Poster } from '../components'
import { Select, SelectTailwind } from '../components/UI'


const Movie = () => {
  let { id } = useParams();

  const {
    findMovieById,
    getTrailersPath,
    currentMovie,
    trailersPath
  } = useAppContext()

  const {
    tagline,
    poster_path,
    title,
    overview,
    popularity,
    budget,
    production_companies,
    release_date,
    genres
  } = currentMovie

  const [youtubeId, setYouTubeId] = useState()
  const changeSrc = (src) => {
    console.log(src)
    setYouTubeId(src)
  }

  useEffect(() => {
    async function fetchMovie(id) {
      await findMovieById(id)
      await getTrailersPath(id)
    }
    fetchMovie(id)
    return () => fetchMovie(id)
  }
    , [id])
  console.log(currentMovie)
  return (
    <>
      {
        currentMovie && trailersPath
          ?
          <>
            <div className="flex-column">
              <div className="mb-20 flex-column sm:flex ">
                <div className="flex">
                  <Poster path={poster_path} title={title} />
                </div>

                <div className="sm:ml-10 flex flex-col justify-between">
                  <div className="">
                    <h2 className="font-bold text-3xl text-center tracking-widest">{title}</h2>
                    <h3 className="font-medium text-gray-600 italic text-lg text-center">{tagline}</h3>
                  </div>
                  <div className="">
                    <div className="popularity">popularity: {popularity}</div>
                    <div className="">release date: {release_date}</div>
                    <div className="">budget:{budget}$</div>
                    <div className="">genres: {genres.map(item => <span>{item.name}, </span>)}</div>
                    <div className="">
                      productions:{
                        production_companies.map(company => {
                          return (
                            <div className="flex" key={company.id}>
                              <img className="w-16 h-auto mr-10"
                                src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`} />
                              <div className="">{company.name}</div>
                            </div>
                          )
                        })
                      }
                    </div>

                    <p className="my-10">{overview}</p>
                    {
                      trailersPath.results
                      &&
                      <SelectTailwind options={trailersPath.results}
                        handleChange={changeSrc}
                        setYouTubeId={setYouTubeId} />
                    }
                  </div>

                </div>
              </div>
              {/*plaeyer*/}
              {
                trailersPath.results
                &&
                <div className="flex justify-center w-full h-auto h-max-360px rounded overflow-hidden shadow-lg">
                  <ReactPlayer controls url={`https://www.youtube.com/watch?v=${youtubeId}`} className="" />
                </div>

              }


            </div>
          </>

          :
          <div>Loading...</div>
      }
    </>
  )
}

export default Movie
