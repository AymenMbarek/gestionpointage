import chantier from "pages/Employeur/Chantier/add"
import {
  GET_CHANTIERS,
  GET_CHANTIERS_FAIL,
  GET_CHANTIERS_SUCCESS,
  ADD_CHANTIER_SUCCESS,
  ADD_CHANTIER_FAIL,
  UPDATE_CHANTIER_SUCCESS,
  UPDATE_CHANTIER_FAIL,
  DELETE_CHANTIER_FAIL,
  DELETE_CHANTIER_SUCCESS,
  GET_CHANTIER_SUCCESS

} from "./actionTypes"

const initialState = {
  chantiers: [],
  chantier: null,
  loading: false,
  error: null,
}

const Chantier = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHANTIERS:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_CHANTIERS_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        chantiers: action.payload,
      }
      break
    case GET_CHANTIER_SUCCESS:
      console.log("payload11111",action)
      return {
        ...state,
        chantier: action.payload,
      }
      break
    case GET_CHANTIERS_FAIL:
      console.log("failed",action)
      return {
        ...state,
        error: action.payload,
      }
      case ADD_CHANTIER_SUCCESS:
        return {
          ...state,
          chantiers: [...state.chantiers, action.payload],
        }
  
      case ADD_CHANTIER_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_CHANTIER_SUCCESS:
          console.log("chantier update",action.payload)
          return {
            ...state,
            chantiers: state.chantiers.map(chantier =>
              chantier.id.toString() === action.payload.id.toString()
                ? { chantier, ...action.payload }
                : chantier
            ),
          }
          case DELETE_CHANTIER_SUCCESS:
            return {
              ...state,
              chantiers: state.chantiers.filter(
                chantier => chantier.banqueId.toString() !== action.payload.id.toString()
              ),
            }
      
          case DELETE_CHANTIER_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_CHANTIER_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Chantier
