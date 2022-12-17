import contrat from "pages/Employeur/Contrat/add"
import {
  GET_CONTRATS,
  GET_CONTRATS_FAIL,
  GET_CONTRATS_SUCCESS,
  ADD_CONTRAT_SUCCESS,
  ADD_CONTRAT_FAIL,
  UPDATE_CONTRAT_SUCCESS,
  UPDATE_CONTRAT_FAIL,
  DELETE_CONTRAT_FAIL,
  DELETE_CONTRAT_SUCCESS,
  GET_CONTRAT_SUCCESS

} from "./actionTypes"

const initialState = {
  contrats: [],
  contrat: null,
  loading: false,
  error: null,
}

const Contrat = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTRATS:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_CONTRATS_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        contrats: action.payload,
      }
      break
    case GET_CONTRAT_SUCCESS:
      console.log("payload99999999",action)
      return {
        ...state,
        contrat: action.payload,
      }
      break
    case GET_CONTRATS_FAIL:
      console.log("failed",action)
      return {
        ...state,
        error: action.payload,
      }
      case ADD_CONTRAT_SUCCESS:
        return {
          ...state,
          contrats: [...state.contrats, action.payload],
        }
  
      case ADD_CONTRAT_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_CONTRAT_SUCCESS:
          console.log("contrat update",action.payload)
          return {
            ...state,
            contrats: state.contrats.map(contrat =>
              contrat.banqueId.toString() === action.payload.banqueId.toString()
                ? { contrat, ...action.payload }
                : contrat
            ),
          }
          case DELETE_CONTRAT_SUCCESS:
            return {
              ...state,
              contrats: state.contrats.filter(
                contrat => contrat.banqueId.toString() !== action.payload.banqueId.toString()
              ),
            }
      
          case DELETE_CONTRAT_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_CONTRAT_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Contrat
