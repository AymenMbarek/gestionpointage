import dashbored from "pages/Personne/externe"
import {

  GET_DASHBOREDS,
  GET_DASHBOREDS_FAIL,
  GET_DASHBOREDS_SUCCESS,



} from "./actionTypes"



export const getDashboreds = () => ({
  type: GET_DASHBOREDS,
})


export const getDashboredsSuccess = dashboreds => ({
  type: GET_DASHBOREDS_SUCCESS,
  payload: dashboreds,
})

export const getDashboredsFail = error => ({
  type: GET_DASHBOREDS_FAIL,
  payload: error,
})









