import contact from "pages/Employeur/Entreprise/edit"
import {
  GET_CONTACTS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAIL,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_SUCCESS

} from "./actionTypes"

const initialState = {
  contacts: [],
  contact: {},
  loading: false,
  error: null,
}

const Contact = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_CONTACTS_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        contacts: action.payload,
      }
      break
    case GET_CONTACTS_FAIL:
      console.log("failed",action)
      return {
        ...state,
        error: action.payload,
      }
      case ADD_CONTACT_SUCCESS:
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        }
  
      case ADD_CONTACT_FAIL:
        return {
          ...state,
          error: action.payload,
        }
        case UPDATE_CONTACT_SUCCESS:
          console.log("contact update",action.payload)
          return {
            ...state,
            contacts: state.contacts.map(contact =>
              contact.banqueId.toString() === action.payload.banqueId.toString()
                ? { contact, ...action.payload }
                : contact
            ),
          }
          case DELETE_CONTACT_SUCCESS:
            return {
              ...state,
              contacts: state.contacts.filter(
                contact => contact.banqueId.toString() !== action.payload.banqueId.toString()
              ),
            }
      
          case DELETE_CONTACT_FAIL:
            return {
              ...state,
              error: action.payload,
            }
    
        case UPDATE_CONTACT_FAIL:
          return {
            ...state,
            error: action.payload,
          }
  }
  return state
}

export default Contact
