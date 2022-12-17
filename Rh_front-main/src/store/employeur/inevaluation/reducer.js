import inevaluation from "pages/Employeur/Evaluation/interne"
import {
  GET_INEVALUATIONS,
  GET_INEVALUATIONS_FAIL,
  GET_INEVALUATIONS_SUCCESS,
  ADD_INEVALUATION_SUCCESS,
  ADD_INEVALUATION_FAIL,
  UPDATE_INEVALUATION_SUCCESS,
  UPDATE_INEVALUATION_FAIL,
  DELETE_INEVALUATION_FAIL,
  DELETE_INEVALUATION_SUCCESS

} from "./actionTypes"

const initialState = {
  inevaluations: [],
  inevaluation: {},
  loading: false,
  error: null,
}

const Inevaluation = (state = initialState, action) => {
  switch (action.type) {
    case GET_INEVALUATIONS:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_INEVALUATIONS_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        inevaluations: action.payload,
      }
      break
    case GET_INEVALUATIONS_FAIL:
      return {
        ...state,
        error: action.payload,
      }
      case ADD_INEVALUATION_SUCCESS:
        return {
          ...state,
          inevaluations: [...state.inevaluations, action.payload],
        }
  
      case ADD_INEVALUATION_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_INEVALUATION_SUCCESS:
          console.log("bank update",action.payload)
          return {
            ...state,
            inevaluations: state.inevaluations.map(inevaluation =>
              inevaluation.inevaluationionId.toString() === action.payload.inevaluationionId.toString()
                ? { inevaluation, ...action.payload }
                : inevaluation
            ),
          }
          case DELETE_INEVALUATION_SUCCESS:
            return {
              ...state,
              inevaluations: state.inevaluations.filter(
                inevaluation => inevaluation.inevaluationionId.toString() !== action.payload.inevaluationionId.toString()
              ),
            }
      
          case DELETE_INEVALUATION_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_INEVALUATION_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Inevaluation
