import React,{ useContext,useReducer } from "react";
import reducer from './reducers'
import TMDbFetch from '../axios'
import navigation from "../utils/constants";
import axios from 'axios'
import { 
  START_REQUEST,
  REQUEST_ERROR,
  CHANGE_LANGUAGE,
  GET_MOVIES,
  GET_TRAILERS,
  FIND_MOVIE,
  NEXT_PAGE
} from "./actions";


const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  error: null,
  currentMovie:"",
  trailersPath:{},
  language:'ru-RU'
}

const AppContext = React.createContext()


const AppProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const {trending} = navigation

  

  const getMovies = async (collection,page = 1)=> {
    dispatch({type:START_REQUEST})
    try {
      const response = await TMDbFetch(`${collection}`,{
          params:{
                  language:state.language,
                  page:page
                  } 
                })
      console.warn(response.data)
      const {data} = response
      const{total_pages} = data

      //проверка на количество страниц

      if (state[collection] && page === 1 || page >= total_pages ){
        return
      }
      dispatch({
        type:GET_MOVIES,
        payload: {
          collection_name: collection,
          [collection]:data.results,
        }
      })
    } catch (error) {
      console.warn('ошибка при получении коллекции!',error.message)
      dispatch({
        type:REQUEST_ERROR,
        payload: {error:error.message}
      })
    }
  }

  const findMovieById = async (movie_id) =>{
    dispatch({type:START_REQUEST})
    try {
      const {data} = await TMDbFetch(movie_id)
      dispatch({
        type:FIND_MOVIE,
        payload: {
          movie:data
        }
      })
      
    } catch (error) {
      dispatch({
        type:REQUEST_ERROR,
        payload: {error:error.message}
    })
  }
}

  const getTrailersPath = async (movie_id) =>{
    dispatch({type:START_REQUEST})
    try {
      const response = await TMDbFetch(`${movie_id}/videos?`,{
        params: {
          language:state.language,
        }
      })
      console.trace(response)
      dispatch({
        type:GET_TRAILERS,
        payload: {
          trailersPath:response.data
        }
      })
      
    } catch (error) {
      dispatch({
        type:REQUEST_ERROR,
        payload: {error:error.message}
    })
  }
  
  }
  

  return(
    <AppContext.Provider value ={{
      ...state,
      getMovies,
      findMovieById,
      getTrailersPath,
    }}>
      {children}
    </AppContext.Provider>
  )
}



const useAppContext = () => {
  return useContext(AppContext)
}

export {AppProvider,initialState,useAppContext}