import inpersonne from "pages/Personne/externe"
import {
  GET_INPERSONNES,
  GET_INPERSONNES_FAIL,
  GET_INPERSONNES_SUCCESS,
 

} from "./actionTypes"

const initialState = {
  inpersonnes: [],
  inpersonne: {},
  loading: false,
  error: null,
}

const Inpersonne = (state = initialState, action) => {
  switch (action.type) {
    case GET_INPERSONNES:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_INPERSONNES_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        inpersonnes: action.payload,
      }
      break
    case GET_INPERSONNES_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    
  }
  return state
}

export default Inpersonne
