import personne from "pages/Personne/interne"
import {
  GET_PERSONNES,
  GET_PERSONNES_FAIL,
  GET_PERSONNES_SUCCESS,
  GET_IPERSONNES,
  GET_IPERSONNES_FAIL,
  GET_IPERSONNES_SUCCESS,
  ADD_PERSONNE_SUCCESS,
  ADD_PERSONNE_FAIL,
  UPDATE_PERSONNE_SUCCESS,
  UPDATE_PERSONNE_FAIL,
  DELETE_PERSONNE_FAIL,
  DELETE_PERSONNE_SUCCESS

} from "./actionTypes"

const initialState = {
  personnes: [],
  personne: {},
  loading: false,
  error: null,
}

const Personne = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONNES:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_PERSONNES_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        personnes: action.payload,
      }
      break
    case GET_PERSONNES_FAIL:
      return {
        ...state,
        error: action.payload,
      }
      case GET_IPERSONNES:
    state = {
      ...state,
      loading: true,
      error: null,
    }
    break
  case GET_IPERSONNES_SUCCESS:
    console.log("payload",action)
    return {
      ...state,
      personnes: action.payload,
    }
    break
  case GET_IPERSONNES_FAIL:
    return {
      ...state,
      error: action.payload,
    }
      case ADD_PERSONNE_SUCCESS:
        return {
          ...state,
          personnes: [...state.personnes, action.payload],
        }
  
      case ADD_PERSONNE_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_PERSONNE_SUCCESS:
          console.log("bank update",action.payload)
          return {
            ...state,
            personnes: state.personnes.map(personne =>
              personne.personneId.toString() === action.payload.personneId.toString()
                ? { personne, ...action.payload }
                : personne
            ),
          }
          case DELETE_PERSONNE_SUCCESS:
            return {
              ...state,
              personnes: state.personnes.filter(
                personne => personne.personneId.toString() !== action.payload.personneId.toString()
              ),
            }
      
          case DELETE_PERSONNE_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_PERSONNE_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Personne
