import exremarque from "pages/Employeur/Remarque/externe"
import {
  GET_EXREMARQUES,
  GET_EXREMARQUES_FAIL,
  GET_EXREMARQUES_SUCCESS,
  ADD_EXREMARQUE_SUCCESS,
  ADD_EXREMARQUE_FAIL,
  UPDATE_EXREMARQUE_SUCCESS,
  UPDATE_EXREMARQUE_FAIL,
  DELETE_EXREMARQUE_FAIL,
  DELETE_EXREMARQUE_SUCCESS

} from "./actionTypes"

const initialState = {
  exremarques: [],
  exremarque: {},
  loading: false,
  error: null,
}

const Exremarque = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXREMARQUES:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_EXREMARQUES_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        exremarques: action.payload,
      }
      break
    case GET_EXREMARQUES_FAIL:
      return {
        ...state,
        error: action.payload,
      }
      case ADD_EXREMARQUE_SUCCESS:
        return {
          ...state,
          exremarques: [...state.exremarques, action.payload],
        }
  
      case ADD_EXREMARQUE_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_EXREMARQUE_SUCCESS:
          console.log("bank update",action.payload)
          return {
            ...state,
            exremarques: state.exremarques.map(exremarque =>
              exremarque.exremarqueionId.toString() === action.payload.exremarqueionId.toString()
                ? { exremarque, ...action.payload }
                : exremarque
            ),
          }
          case DELETE_EXREMARQUE_SUCCESS:
            return {
              ...state,
              exremarques: state.exremarques.filter(
                exremarque => exremarque.exremarqueionId.toString() !== action.payload.exremarqueionId.toString()
              ),
            }
      
          case DELETE_EXREMARQUE_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_EXREMARQUE_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Exremarque
