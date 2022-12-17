import holiday from "pages/Exploitation/Ferier/index"
import {
  GET_HOLIDAYS,
  GET_HOLIDAYS_FAIL,
  GET_HOLIDAYS_SUCCESS,
  ADD_HOLIDAY_SUCCESS,
  ADD_HOLIDAY_FAIL,
  UPDATE_HOLIDAY_SUCCESS,
  UPDATE_HOLIDAY_FAIL,
  DELETE_HOLIDAY_FAIL,
  DELETE_HOLIDAY_SUCCESS,
  GET_HOLIDAY_SUCCESS

} from "./actionTypes"

const initialState = {
  holidays: [],
  holiday: null,
  loading: false,
  error: null,
}

const Holiday = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOLIDAYS:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_HOLIDAYS_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        holidays: action.payload,
      }
      break
    case GET_HOLIDAY_SUCCESS:
      console.log("payload99999999",action)
      return {
        ...state,
        holiday: action.payload,
      }
      break
    case GET_HOLIDAYS_FAIL:
      console.log("failed",action)
      return {
        ...state,
        error: action.payload,
      }
      case ADD_HOLIDAY_SUCCESS:
        return {
          ...state,
          holidays: [...state.holidays, action.payload],
        }
  
      case ADD_HOLIDAY_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_HOLIDAY_SUCCESS:
          console.log("holiday update",action.payload)
          return {
            ...state,
            holidays: state.holidays.map(holiday =>
              holiday.banqueId.toString() === action.payload.banqueId.toString()
                ? { holiday, ...action.payload }
                : holiday
            ),
          }
          case DELETE_HOLIDAY_SUCCESS:
            return {
              ...state,
              holidays: state.holidays.filter(
                holiday => holiday.banqueId.toString() !== action.payload.banqueId.toString()
              ),
            }
      
          case DELETE_HOLIDAY_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_HOLIDAY_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Holiday
