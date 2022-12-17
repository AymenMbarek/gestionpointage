import groupe from "pages/Employeur/Groupe/index"
import {
  GET_GROUPES,
  GET_GROUPES_FAIL,
  GET_GROUPES_SUCCESS,
  ADD_GROUPE_SUCCESS,
  ADD_GROUPE_FAIL,
  UPDATE_GROUPE_SUCCESS,
  UPDATE_GROUPE_FAIL,
  DELETE_GROUPE_FAIL,
  DELETE_GROUPE_SUCCESS

} from "./actionTypes"

const initialState = {
  groupes: [],
  groupe: {},
  loading: false,
  error: null,
}

const Groupe = (state = initialState, action) => {
  switch (action.type) {
    case GET_GROUPES:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_GROUPES_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        groupes: action.payload,
      }
      break
    case GET_GROUPES_FAIL:
      console.log("failed",action)
      return {
        ...state,
        error: action.payload,
      }
      case ADD_GROUPE_SUCCESS:
        return {
          ...state,
          groupes: [...state.groupes, action.payload],
        }
  
      case ADD_GROUPE_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_GROUPE_SUCCESS:
          console.log("groupe update",action.payload)
          return {
            ...state,
            groupes: state.groupes.map(groupe =>
              groupe.banqueId.toString() === action.payload.banqueId.toString()
                ? { groupe, ...action.payload }
                : groupe
            ),
          }
          case DELETE_GROUPE_SUCCESS:
            return {
              ...state,
              groupes: state.groupes.filter(
                groupe => groupe.banqueId.toString() !== action.payload.banqueId.toString()
              ),
            }
      
          case DELETE_GROUPE_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_GROUPE_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Groupe
