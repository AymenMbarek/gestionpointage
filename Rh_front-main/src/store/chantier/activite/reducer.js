import activite from "pages/Employeur/Chantier/edit"
import {
  GET_ACTIVITES,
  GET_ACTIVITES_FAIL,
  GET_ACTIVITES_SUCCESS,
  ADD_ACTIVITE_SUCCESS,
  ADD_ACTIVITE_FAIL,
  UPDATE_ACTIVITE_SUCCESS,
  UPDATE_ACTIVITE_FAIL,
  DELETE_ACTIVITE_FAIL,
  DELETE_ACTIVITE_SUCCESS

} from "./actionTypes"

const initialState = {
  activites: [],
  activite: {},
  loading: false,
  error: null,
}

const Activite = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVITES:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_ACTIVITES_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        activites: action.payload,
      }
      break
    case GET_ACTIVITES_FAIL:
      console.log("failed",action)
      return {
        ...state,
        error: action.payload,
      }
      case ADD_ACTIVITE_SUCCESS:
        return {
          ...state,
          activites: [...state.activites, action.payload],
        }
  
      case ADD_ACTIVITE_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_ACTIVITE_SUCCESS:
          console.log("activite update",action.payload)
          return {
            ...state,
            activites: state.activites.map(activite =>
              activite.banqueId.toString() === action.payload.banqueId.toString()
                ? { activite, ...action.payload }
                : activite
            ),
          }
          case DELETE_ACTIVITE_SUCCESS:
            return {
              ...state,
              activites: state.activites.filter(
                activite => activite.banqueId.toString() !== action.payload.banqueId.toString()
              ),
            }
      
          case DELETE_ACTIVITE_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_ACTIVITE_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Activite
