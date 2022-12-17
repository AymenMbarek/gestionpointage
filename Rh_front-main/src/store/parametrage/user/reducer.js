import user from "pages/Parametrage/usermobile/index"
import {
  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  GET_USER_SUCCESS

} from "./actionTypes"

const initialState = {
  users: [],
  user: null,
  loading: false,
  error: null,
}

const User = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_USERS_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        users: action.payload,
      }
      break
    case GET_USER_SUCCESS:
      console.log("payload99999999",action)
      return {
        ...state,
        user: action.payload,
      }
      break
    case GET_USERS_FAIL:
      console.log("failed",action)
      return {
        ...state,
        error: action.payload,
      }
      case ADD_USER_SUCCESS:
        return {
          ...state,
          users: [...state.users, action.payload],
        }
  
      case ADD_USER_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_USER_SUCCESS:
          console.log("user update",action.payload)
          return {
            ...state,
            users: state.users.map(user =>
              user.banqueId.toString() === action.payload.banqueId.toString()
                ? { user, ...action.payload }
                : user
            ),
          }
          case DELETE_USER_SUCCESS:
            return {
              ...state,
              users: state.users.filter(
                user => user.banqueId.toString() !== action.payload.banqueId.toString()
              ),
            }
      
          case DELETE_USER_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_USER_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default User
