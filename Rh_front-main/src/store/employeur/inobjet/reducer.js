import inobjet from "pages/Employeur/Objet/interne"
import {
  GET_INOBJETS,
  GET_INOBJETS_FAIL,
  GET_INOBJETS_SUCCESS,
  ADD_INOBJET_SUCCESS,
  ADD_INOBJET_FAIL,
  UPDATE_INOBJET_SUCCESS,
  UPDATE_INOBJET_FAIL,
  DELETE_INOBJET_FAIL,
  DELETE_INOBJET_SUCCESS

} from "./actionTypes"

const initialState = {
  inobjets: [],
  inobjet: {},
  loading: false,
  error: null,
}

const Inobjet = (state = initialState, action) => {
  switch (action.type) {
    case GET_INOBJETS:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_INOBJETS_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        inobjets: action.payload,
      }
      break
    case GET_INOBJETS_FAIL:
      return {
        ...state,
        error: action.payload,
      }
      case ADD_INOBJET_SUCCESS:
        return {
          ...state,
          inobjets: [...state.inobjets, action.payload],
        }
  
      case ADD_INOBJET_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_INOBJET_SUCCESS:
          console.log("bank update",action.payload)
          return {
            ...state,
            inobjets: state.inobjets.map(inobjet =>
              inobjet.inobjetionId.toString() === action.payload.inobjetionId.toString()
                ? { inobjet, ...action.payload }
                : inobjet
            ),
          }
          case DELETE_INOBJET_SUCCESS:
            return {
              ...state,
              inobjets: state.inobjets.filter(
                inobjet => inobjet.inobjetionId.toString() !== action.payload.inobjetionId.toString()
              ),
            }
      
          case DELETE_INOBJET_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_INOBJET_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Inobjet
