import personnel from "pages/Employeur/Chantier/edit"
import {
  GET_PERSONNELS,
  GET_PERSONNELS_FAIL,
  GET_PERSONNELS_SUCCESS,
  ADD_PERSONNEL_SUCCESS,
  ADD_PERSONNEL_FAIL,
  UPDATE_PERSONNEL_SUCCESS,
  UPDATE_PERSONNEL_FAIL,
  DELETE_PERSONNEL_FAIL,
  DELETE_PERSONNEL_SUCCESS

} from "./actionTypes"

const initialState = {
  personnels: [],
  personnel: {},
  loading: false,
  error: null,
}

const Personnel = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONNELS:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_PERSONNELS_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        personnels: action.payload,
      }
      break
    case GET_PERSONNELS_FAIL:
      return {
        ...state,
        error: action.payload,
      }
      case ADD_PERSONNEL_SUCCESS:
        return {
          ...state,
          personnels: [...state.personnels, action.payload],
        }
  
      case ADD_PERSONNEL_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_PERSONNEL_SUCCESS:
          console.log("bank update",action.payload)
          return {
            ...state,
            personnels: state.personnels.map(personnel =>
              personnel.personnelionId.toString() === action.payload.personnelionId.toString()
                ? { personnel, ...action.payload }
                : personnel
            ),
          }
          case DELETE_PERSONNEL_SUCCESS:
            return {
              ...state,
              personnels: state.personnels.filter(
                personnel => personnel.personnelionId.toString() !== action.payload.personnelionId.toString()
              ),
            }
      
          case DELETE_PERSONNEL_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_PERSONNEL_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Personnel
