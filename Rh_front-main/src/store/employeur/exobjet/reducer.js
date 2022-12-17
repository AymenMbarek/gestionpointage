import exobjet from "pages/Employeur/Objet/externe"
import {
  GET_EXOBJETS,
  GET_EXOBJETS_FAIL,
  GET_EXOBJETS_SUCCESS,
  ADD_EXOBJET_SUCCESS,
  ADD_EXOBJET_FAIL,
  UPDATE_EXOBJET_SUCCESS,
  UPDATE_EXOBJET_FAIL,
  DELETE_EXOBJET_FAIL,
  DELETE_EXOBJET_SUCCESS

} from "./actionTypes"

const initialState = {
  exobjets: [],
  exobjet: {},
  loading: false,
  error: null,
}

const Exobjet = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXOBJETS:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_EXOBJETS_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        exobjets: action.payload,
      }
      break
    case GET_EXOBJETS_FAIL:
      return {
        ...state,
        error: action.payload,
      }
      case ADD_EXOBJET_SUCCESS:
        return {
          ...state,
          exobjets: [...state.exobjets, action.payload],
        }
  
      case ADD_EXOBJET_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_EXOBJET_SUCCESS:
          console.log("bank update",action.payload)
          return {
            ...state,
            exobjets: state.exobjets.map(exobjet =>
              exobjet.exobjetionId.toString() === action.payload.exobjetionId.toString()
                ? { exobjet, ...action.payload }
                : exobjet
            ),
          }
          case DELETE_EXOBJET_SUCCESS:
            return {
              ...state,
              exobjets: state.exobjets.filter(
                exobjet => exobjet.exobjetionId.toString() !== action.payload.exobjetionId.toString()
              ),
            }
      
          case DELETE_EXOBJET_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_EXOBJET_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Exobjet
