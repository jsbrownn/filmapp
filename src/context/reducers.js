import {initialState} from './AppContext'
import {
  CHANGE_LANGUAGE,
  START_REQUEST,
  REQUEST_ERROR,
  GET_MOVIES,
  GET_TRAILERS,
  FIND_MOVIE,
  NEXT_PAGE,
  GET_RECOMMENDATIONS
} from './actions'

const reducer =(state,action)=>{
  if(action.type === START_REQUEST){
    return {
      ...state,
      isLoading: true,
    }
  }
  if(action.type === CHANGE_LANGUAGE) {
    return {
      ...state, 
      language:action.payload.language,
      isLoading: false,
      error: null
    }
  }
    if(action.type === GET_MOVIES){
      const collection = action.payload.collection_name
      if(state[collection]){
        return {
          ...state, 
          [collection]:[...state[collection],...action.payload[collection]], 
          isLoading:false,
        }
      }
      return {
        ...state,
        [collection]:action.payload[collection],
        isLoading: false
      }
    }
    if(action.type === FIND_MOVIE){
      const movie = action.payload.movie
      return {
        ...state, 
        isLoading: false,
        currentMovie: movie
      }
    }

    if(action.type === GET_TRAILERS){
      const trailers = action.payload.trailersPath
      return {
        ...state, 
        isLoading: false,
        trailersPath: trailers
      }
    }

  if(action.type === REQUEST_ERROR){ 
    return { 
      ...state,
      isLoading: false, 
      error: action.payload.error.msg
    }
  }
    if(action.type === NEXT_PAGE){ 
      return { 
        ...state,
        isLoading: false, 
        page: state.page += 1
      }
    
  }
  if(action.type === GET_RECOMMENDATIONS){
    return { 
      ...state, 
      isLoading:false, 
      recommendations: action.payload.recommendations
    }
  }
  

  throw new Error(`no such action ${action.type}`);
}

export default reducer;