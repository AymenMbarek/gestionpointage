import xpersonne from "pages/Personne/externe"
import {
  GET_XPERSONNES,
  GET_XPERSONNES_FAIL,
  GET_XPERSONNES_SUCCESS,
  ADD_XPERSONNE_SUCCESS,
  ADD_XPERSONNE_FAIL,
  UPDATE_XPERSONNE_SUCCESS,
  UPDATE_XPERSONNE_FAIL,
  DELETE_XPERSONNE_FAIL,
  DELETE_XPERSONNE_SUCCESS

} from "./actionTypes"

const initialState = {
  xpersonnes: [],
  xpersonne: {},
  loading: false,
  error: null,
}

const Xpersonne = (state = initialState, action) => {
  switch (action.type) {
    case GET_XPERSONNES:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_XPERSONNES_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        xpersonnes: action.payload,
      }
      break
    case GET_XPERSONNES_FAIL:
      return {
        ...state,
        error: action.payload,
      }
      case ADD_XPERSONNE_SUCCESS:
        return {
          ...state,
          xpersonnes: [...state.xpersonnes, action.payload],
        }
  
      case ADD_XPERSONNE_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_XPERSONNE_SUCCESS:
          console.log("bank update",action.payload)
          return {
            ...state,
            xpersonnes: state.xpersonnes.map(xpersonne =>
              xpersonne.xpersonneId.toString() === action.payload.xpersonneId.toString()
                ? { xpersonne, ...action.payload }
                : xpersonne
            ),
          }
          case DELETE_XPERSONNE_SUCCESS:
            return {
              ...state,
              xpersonnes: state.xpersonnes.filter(
                xpersonne => xpersonne.xpersonneId.toString() !== action.payload.xpersonneId.toString()
              ),
            }
      
          case DELETE_XPERSONNE_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_XPERSONNE_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Xpersonne
