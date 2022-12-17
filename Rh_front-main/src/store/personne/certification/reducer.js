import certificat from "pages/Personne/certificat/list"
import {
  GET_CERTIFICATS,
  GET_CERTIFICATS_FAIL,
  GET_CERTIFICATS_SUCCESS,
  ADD_CERTIFICAT_SUCCESS,
  ADD_CERTIFICAT_FAIL,
  UPDATE_CERTIFICAT_SUCCESS,
  UPDATE_CERTIFICAT_FAIL,
  DELETE_CERTIFICAT_FAIL,
  DELETE_CERTIFICAT_SUCCESS

} from "./actionTypes"

const initialState = {
  certificats: [],
  certificat: {},
  loading: false,
  error: null,
}

const Certificat = (state = initialState, action) => {
  switch (action.type) {
    case GET_CERTIFICATS:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_CERTIFICATS_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        certificats: action.payload,
      }
      break
    case GET_CERTIFICATS_FAIL:
      return {
        ...state,
        error: action.payload,
      }
      case ADD_CERTIFICAT_SUCCESS:
        return {
          ...state,
          certificats: [...state.certificats, action.payload],
        }
  
      case ADD_CERTIFICAT_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_CERTIFICAT_SUCCESS:
          console.log("bank update",action.payload)
          return {
            ...state,
            certificats: state.certificats.map(certificat =>
              certificat.certificationId.toString() === action.payload.certificationId.toString()
                ? { certificat, ...action.payload }
                : certificat
            ),
          }
          case DELETE_CERTIFICAT_SUCCESS:
            return {
              ...state,
              certificats: state.certificats.filter(
                certificat => certificat.certificationId.toString() !== action.payload.certificationId.toString()
              ),
            }
      
          case DELETE_CERTIFICAT_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_CERTIFICAT_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Certificat
