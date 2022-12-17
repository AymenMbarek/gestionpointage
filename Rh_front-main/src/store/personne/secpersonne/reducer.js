import secpersonne from "pages/Personne/externe"
import {
  GET_SECPERSONNES,
  GET_SECPERSONNES_FAIL,
  GET_SECPERSONNES_SUCCESS,
 

} from "./actionTypes"

const initialState = {
  secpersonnes: [],
  secpersonne: {},
  loading: false,
  error: null,
}

const Secpersonne = (state = initialState, action) => {
  switch (action.type) {
    case GET_SECPERSONNES:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_SECPERSONNES_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        secpersonnes: action.payload,
      }
      break
    case GET_SECPERSONNES_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    
  }
  return state
}

export default Secpersonne
