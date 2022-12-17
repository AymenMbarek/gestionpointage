import inremarque from "pages/Employeur/Remarque/interne"
import {
  GET_INREMARQUES,
  GET_INREMARQUES_FAIL,
  GET_INREMARQUES_SUCCESS,
  ADD_INREMARQUE_SUCCESS,
  ADD_INREMARQUE_FAIL,
  UPDATE_INREMARQUE_SUCCESS,
  UPDATE_INREMARQUE_FAIL,
  DELETE_INREMARQUE_FAIL,
  DELETE_INREMARQUE_SUCCESS

} from "./actionTypes"

const initialState = {
  inremarques: [],
  inremarque: {},
  loading: false,
  error: null,
}

const Inremarque = (state = initialState, action) => {
  switch (action.type) {
    case GET_INREMARQUES:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_INREMARQUES_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        inremarques: action.payload,
      }
      break
    case GET_INREMARQUES_FAIL:
      return {
        ...state,
        error: action.payload,
      }
      case ADD_INREMARQUE_SUCCESS:
        return {
          ...state,
          inremarques: [...state.inremarques, action.payload],
        }
  
      case ADD_INREMARQUE_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_INREMARQUE_SUCCESS:
          console.log("bank update",action.payload)
          return {
            ...state,
            inremarques: state.inremarques.map(inremarque =>
              inremarque.inremarqueionId.toString() === action.payload.inremarqueionId.toString()
                ? { inremarque, ...action.payload }
                : inremarque
            ),
          }
          case DELETE_INREMARQUE_SUCCESS:
            return {
              ...state,
              inremarques: state.inremarques.filter(
                inremarque => inremarque.inremarqueionId.toString() !== action.payload.inremarqueionId.toString()
              ),
            }
      
          case DELETE_INREMARQUE_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_INREMARQUE_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Inremarque
