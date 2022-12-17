import tarif from "pages/Employeur/Tarifs/index"
import {
  GET_TARIFS,
  GET_TARIFS_FAIL,
  GET_TARIFS_SUCCESS,
  ADD_TARIF_SUCCESS,
  ADD_TARIF_FAIL,
  UPDATE_TARIF_SUCCESS,
  UPDATE_TARIF_FAIL,
  DELETE_TARIF_FAIL,
  DELETE_TARIF_SUCCESS,
  GET_TARIF_SUCCESS

} from "./actionTypes"

const initialState = {
  tarifs: [],
  tarif: null,
  loading: false,
  error: null,
}

const Tarif = (state = initialState, action) => {
  switch (action.type) {
    case GET_TARIFS:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_TARIFS_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        tarifs: action.payload,
      }
      break
    case GET_TARIF_SUCCESS:
      console.log("payload99999999",action)
      return {
        ...state,
        tarif: action.payload,
      }
      break
    case GET_TARIFS_FAIL:
      console.log("failed",action)
      return {
        ...state,
        error: action.payload,
      }
      case ADD_TARIF_SUCCESS:
        return {
          ...state,
          tarifs: [...state.tarifs, action.payload],
        }
  
      case ADD_TARIF_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_TARIF_SUCCESS:
          console.log("tarif update",action.payload)
          return {
            ...state,
            tarifs: state.tarifs.map(tarif =>
              tarif.id.toString() === action.payload.id.toString()
                ? { tarif, ...action.payload }
                : tarif
            ),
          }
          case DELETE_TARIF_SUCCESS:
            return {
              ...state,
              tarifs: state.tarifs.filter(
                tarif => tarif.id.toString() !== action.payload.id.toString()
              ),
            }
      
          case DELETE_TARIF_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_TARIF_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Tarif
