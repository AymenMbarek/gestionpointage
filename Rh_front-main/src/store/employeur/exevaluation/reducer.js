import exevaluation from "pages/Employeur/Evaluation/externe"
import {
  GET_EXEVALUATIONS,
  GET_EXEVALUATIONS_FAIL,
  GET_EXEVALUATIONS_SUCCESS,
  ADD_EXEVALUATION_SUCCESS,
  ADD_EXEVALUATION_FAIL,
  UPDATE_EXEVALUATION_SUCCESS,
  UPDATE_EXEVALUATION_FAIL,
  DELETE_EXEVALUATION_FAIL,
  DELETE_EXEVALUATION_SUCCESS

} from "./actionTypes"

const initialState = {
  exevaluations: [],
  exevaluation: {},
  loading: false,
  error: null,
}

const Exevaluation = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXEVALUATIONS:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_EXEVALUATIONS_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        exevaluations: action.payload,
      }
      break
    case GET_EXEVALUATIONS_FAIL:
      return {
        ...state,
        error: action.payload,
      }
      case ADD_EXEVALUATION_SUCCESS:
        return {
          ...state,
          exevaluations: [...state.exevaluations, action.payload],
        }
  
      case ADD_EXEVALUATION_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_EXEVALUATION_SUCCESS:
          console.log("bank update",action.payload)
          return {
            ...state,
            exevaluations: state.exevaluations.map(exevaluation =>
              exevaluation.exevaluationionId.toString() === action.payload.exevaluationionId.toString()
                ? { exevaluation, ...action.payload }
                : exevaluation
            ),
          }
          case DELETE_EXEVALUATION_SUCCESS:
            return {
              ...state,
              exevaluations: state.exevaluations.filter(
                exevaluation => exevaluation.exevaluationionId.toString() !== action.payload.exevaluationionId.toString()
              ),
            }
      
          case DELETE_EXEVALUATION_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_EXEVALUATION_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Exevaluation
