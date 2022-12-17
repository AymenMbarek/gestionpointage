import dashbored from "pages/Personne/externe"
import {
  GET_DASHBOREDS,
  GET_DASHBOREDS_FAIL,
  GET_DASHBOREDS_SUCCESS,
 

} from "./actionTypes"

const initialState = {
  dashboreds: [],
  dashbored: {},
  loading: false,
  error: null,
}

const Dashbored = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOREDS:
      state = {
        ...state,
        loading: true,
        error: null,
      }
      break
    case GET_DASHBOREDS_SUCCESS:
      console.log("payload",action)
      return {
        ...state,
        dashboreds: action.payload,
      }
      break
    case GET_DASHBOREDS_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    
  }
  return state
}

export default Dashbored
