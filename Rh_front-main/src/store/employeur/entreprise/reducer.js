import entreprise from "pages/Employeur/Entreprise/add"
import {
  GET_ENTREPRISES,
  GET_ENTREPRISES_FAIL,
  GET_ENTREPRISES_SUCCESS,
  ADD_ENTREPRISE_SUCCESS,
  ADD_ENTREPRISE_FAIL,
  UPDATE_ENTREPRISE_SUCCESS,
  UPDATE_ENTREPRISE_FAIL,
  DELETE_ENTREPRISE_FAIL,
  DELETE_ENTREPRISE_SUCCESS,
  GET_ENTREPRISE_SUCCESS

} from "./actionTypes"

const initialState = {
  entreprises: [],
  company: null,
  loading: false,
  error: null,
}

const Entreprise = (state = initialState, action) => {
  switch (action.type) {
    case GET_ENTREPRISES:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_ENTREPRISES_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        entreprises: action.payload,
      }
      break
    case GET_ENTREPRISE_SUCCESS:
      console.log("payload99999999",action)
      return {
        ...state,
        company: action.payload,
      }
      break
    case GET_ENTREPRISES_FAIL:
      console.log("failed",action)
      return {
        ...state,
        error: action.payload,
      }
      case ADD_ENTREPRISE_SUCCESS:
        return {
          ...state,
          entreprises: [...state.entreprises, action.payload],
        }
  
      case ADD_ENTREPRISE_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_ENTREPRISE_SUCCESS:
          console.log("entreprise update",action.payload)
          return {
            ...state,
            entreprises: state.entreprises.map(entreprise =>
              entreprise.banqueId.toString() === action.payload.banqueId.toString()
                ? { entreprise, ...action.payload }
                : entreprise
            ),
          }
          case DELETE_ENTREPRISE_SUCCESS:
            return {
              ...state,
              entreprises: state.entreprises.filter(
                entreprise => entreprise.banqueId.toString() !== action.payload.banqueId.toString()
              ),
            }
      
          case DELETE_ENTREPRISE_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_ENTREPRISE_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Entreprise
