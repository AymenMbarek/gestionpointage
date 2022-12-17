import autpersonne from "pages/Personne/externe"
import {
  GET_AUTPERSONNES,
  GET_AUTPERSONNES_FAIL,
  GET_AUTPERSONNES_SUCCESS,
 

} from "./actionTypes"

const initialState = {
  autpersonnes: [],
  autpersonne: {},
  loading: false,
  error: null,
}

const Autpersonne = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTPERSONNES:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_AUTPERSONNES_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        autpersonnes: action.payload,
      }
      break
    case GET_AUTPERSONNES_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    
  }
  return state
}

export default Autpersonne
