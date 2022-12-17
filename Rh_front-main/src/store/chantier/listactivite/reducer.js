import listactivite from "pages/Employeur/Chantier/edit"
import {
  GET_LISTACTIVITES,
  GET_LISTACTIVITES_FAIL,
  GET_LISTACTIVITES_SUCCESS,
  ADD_LISTACTIVITE_SUCCESS,
  ADD_LISTACTIVITE_FAIL,
  UPDATE_LISTACTIVITE_SUCCESS,
  UPDATE_LISTACTIVITE_FAIL,
  DELETE_LISTACTIVITE_FAIL,
  DELETE_LISTACTIVITE_SUCCESS

} from "./actionTypes"

const initialState = {
  listactivites: [],
  listactivite: {},
  loading: false,
  error: null,
}

const Listactivite = (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTACTIVITES:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_LISTACTIVITES_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        listactivites: action.payload,
      }
      break
    case GET_LISTACTIVITES_FAIL:
      return {
        ...state,
        error: action.payload,
      }
      case ADD_LISTACTIVITE_SUCCESS:
        return {
          ...state,
          listactivites: [...state.listactivites, action.payload],
        }
  
      case ADD_LISTACTIVITE_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_LISTACTIVITE_SUCCESS:
          console.log("bank update",action.payload)
          return {
            ...state,
            listactivites: state.listactivites.map(listactivite =>
              listactivite.listactiviteionId.toString() === action.payload.listactiviteionId.toString()
                ? { listactivite, ...action.payload }
                : listactivite
            ),
          }
          case DELETE_LISTACTIVITE_SUCCESS:
            return {
              ...state,
              listactivites: state.listactivites.filter(
                listactivite => listactivite.listactiviteionId.toString() !== action.payload.listactiviteionId.toString()
              ),
            }
      
          case DELETE_LISTACTIVITE_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_LISTACTIVITE_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Listactivite
