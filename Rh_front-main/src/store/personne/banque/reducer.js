import banque from "pages/Personne/banque"
import {
  GET_BANQUES,
  GET_BANQUES_FAIL,
  GET_BANQUES_SUCCESS,
  ADD_BANQUE_SUCCESS,
  ADD_BANQUE_FAIL,
  UPDATE_BANQUE_SUCCESS,
  UPDATE_BANQUE_FAIL,
  DELETE_BANQUE_FAIL,
  DELETE_BANQUE_SUCCESS

} from "./actionTypes"

const initialState = {
  banques: [],
  banque: {},
  loading: false,
  error: null,
}

const Banque = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANQUES:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_BANQUES_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        banques: action.payload,
      }
      break
    case GET_BANQUES_FAIL:
      return {
        ...state,
        error: action.payload,
      }
      case ADD_BANQUE_SUCCESS:
        return {
          ...state,
          banques: [...state.banques, action.payload],
        }
  
      case ADD_BANQUE_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_BANQUE_SUCCESS:
          console.log("bank update",action.payload)
          return {
            ...state,
            banques: state.banques.map(banque =>
              banque.banqueId.toString() === action.payload.banqueId.toString()
                ? { banque, ...action.payload }
                : banque
            ),
          }
          case DELETE_BANQUE_SUCCESS:
            return {
              ...state,
              banques: state.banques.filter(
                banque => banque.banqueId.toString() !== action.payload.banqueId.toString()
              ),
            }
      
          case DELETE_BANQUE_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_BANQUE_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Banque
