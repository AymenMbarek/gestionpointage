import objet from "pages/Personne/object"
import {
  GET_OBJETS,
  GET_OBJETS_FAIL,
  GET_OBJETS_SUCCESS,
  ADD_OBJET_SUCCESS,
  ADD_OBJET_FAIL,
  UPDATE_OBJET_SUCCESS,
  UPDATE_OBJET_FAIL,
  DELETE_OBJET_FAIL,
  DELETE_OBJET_SUCCESS

} from "./actionTypes"

const initialState = {
  objets: [],
  objet: {},
  loading: false,
  error: null,
}

const Objet = (state = initialState, action) => {
  switch (action.type) {
    case GET_OBJETS:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_OBJETS_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        objets: action.payload,
      }
      break
    case GET_OBJETS_FAIL:
      return {
        ...state,
        error: action.payload,
      }
      case ADD_OBJET_SUCCESS:
        return {
          ...state,
          objets: [...state.objets, action.payload],
        }
  
      case ADD_OBJET_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_OBJET_SUCCESS:
          console.log("bank update",action.payload)
          return {
            ...state,
            objets: state.objets.map(objet =>
              objet.objecttId.toString() === action.payload.objecttId.toString()
                ? { objet, ...action.payload }
                : objet
            ),
          }
          case DELETE_OBJET_SUCCESS:
            return {
              ...state,
              objets: state.objets.filter(
                objet => objet.objecttId.toString() !== action.payload.objecttId.toString()
              ),
            }
      
          case DELETE_OBJET_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_OBJET_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Objet
