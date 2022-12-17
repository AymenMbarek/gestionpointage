import categorie from "pages/Employeur/Categorie/index"
import {
  GET_CATEGORIES,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_SUCCESS,
  ADD_CATEGORIE_SUCCESS,
  ADD_CATEGORIE_FAIL,
  UPDATE_CATEGORIE_SUCCESS,
  UPDATE_CATEGORIE_FAIL,
  DELETE_CATEGORIE_FAIL,
  DELETE_CATEGORIE_SUCCESS

} from "./actionTypes"

const initialState = {
  categories: [],
  categorie: {},
  loading: false,
  error: null,
}

const Categorie = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_CATEGORIES_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        categories: action.payload,
      }
      break
    case GET_CATEGORIES_FAIL:
      console.log("failed",action)
      return {
        ...state,
        error: action.payload,
      }
      case ADD_CATEGORIE_SUCCESS:
        return {
          ...state,
          categories: [...state.categories, action.payload],
        }
  
      case ADD_CATEGORIE_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_CATEGORIE_SUCCESS:
          console.log("categorie update",action.payload)
          return {
            ...state,
            categories: state.categories.map(categorie =>
              categorie.banqueId.toString() === action.payload.banqueId.toString()
                ? { categorie, ...action.payload }
                : categorie
            ),
          }
          case DELETE_CATEGORIE_SUCCESS:
            return {
              ...state,
              categories: state.categories.filter(
                categorie => categorie.banqueId.toString() !== action.payload.banqueId.toString()
              ),
            }
      
          case DELETE_CATEGORIE_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_CATEGORIE_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Categorie
