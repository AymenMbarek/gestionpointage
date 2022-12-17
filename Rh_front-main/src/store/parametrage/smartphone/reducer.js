import smartphone from "pages/Parametrage/smartphone/index"
import {
  GET_SMARTPHONES,
  GET_SMARTPHONES_FAIL,
  GET_SMARTPHONES_SUCCESS,
  ADD_SMARTPHONE_SUCCESS,
  ADD_SMARTPHONE_FAIL,
  UPDATE_SMARTPHONE_SUCCESS,
  UPDATE_SMARTPHONE_FAIL,
  DELETE_SMARTPHONE_FAIL,
  DELETE_SMARTPHONE_SUCCESS,
  GET_SMARTPHONE_SUCCESS

} from "./actionTypes"

const initialState = {
  smartphones: [],
  smartphone: null,
  loading: false,
  error: null,
}

const Smartphone = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMARTPHONES:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_SMARTPHONES_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        smartphones: action.payload,
      }
      break
    case GET_SMARTPHONE_SUCCESS:
      console.log("payload99999999",action)
      return {
        ...state,
        smartphone: action.payload,
      }
      break
    case GET_SMARTPHONES_FAIL:
      console.log("failed",action)
      return {
        ...state,
        error: action.payload,
      }
      case ADD_SMARTPHONE_SUCCESS:
        return {
          ...state,
          smartphones: [...state.smartphones, action.payload],
        }
  
      case ADD_SMARTPHONE_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_SMARTPHONE_SUCCESS:
          console.log("smartphone update",action.payload)
          return {
            ...state,
            smartphones: state.smartphones.map(smartphone =>
              smartphone.banqueId.toString() === action.payload.banqueId.toString()
                ? { smartphone, ...action.payload }
                : smartphone
            ),
          }
          case DELETE_SMARTPHONE_SUCCESS:
            return {
              ...state,
              smartphones: state.smartphones.filter(
                smartphone => smartphone.banqueId.toString() !== action.payload.banqueId.toString()
              ),
            }
      
          case DELETE_SMARTPHONE_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_SMARTPHONE_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Smartphone
