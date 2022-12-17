import qualification from "pages/Personne/qualification"
import {
  GET_QUALIFICATIONS,
  GET_QUALIFICATIONS_FAIL,
  GET_QUALIFICATIONS_SUCCESS,
  ADD_QUALIFICATION_SUCCESS,
  ADD_QUALIFICATION_FAIL,
  UPDATE_QUALIFICATION_SUCCESS,
  UPDATE_QUALIFICATION_FAIL,
  DELETE_QUALIFICATION_FAIL,
  DELETE_QUALIFICATION_SUCCESS

} from "./actionTypes"

const initialState = {
  qualifications: [],
  qualification: {},
  loading: false,
  error: null,
}

const Qualification = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUALIFICATIONS:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_QUALIFICATIONS_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        qualifications: action.payload,
      }
      break
    case GET_QUALIFICATIONS_FAIL:
      console.log("failed",action)
      return {
        ...state,
        error: action.payload,
      }
      case ADD_QUALIFICATION_SUCCESS:
        return {
          ...state,
          qualifications: [...state.qualifications, action.payload],
        }
  
      case ADD_QUALIFICATION_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_QUALIFICATION_SUCCESS:
          console.log("qualification update",action.payload)
          return {
            ...state,
            qualifications: state.qualifications.map(qualification =>
              qualification.banqueId.toString() === action.payload.banqueId.toString()
                ? { qualification, ...action.payload }
                : qualification
            ),
          }
          case DELETE_QUALIFICATION_SUCCESS:
            return {
              ...state,
              qualifications: state.qualifications.filter(
                qualification => qualification.banqueId.toString() !== action.payload.banqueId.toString()
              ),
            }
      
          case DELETE_QUALIFICATION_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_QUALIFICATION_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Qualification
