import secpersonne from "pages/Personne/externe"
import {

  GET_SECPERSONNES,
  GET_SECPERSONNES_FAIL,
  GET_SECPERSONNES_SUCCESS,
  


} from "./actionTypes"



export const getSecpersonnes = () => ({
  type: GET_SECPERSONNES,
})


export const getSecpersonnesSuccess = secpersonnes => ({ 
  type: GET_SECPERSONNES_SUCCESS,
  payload: secpersonnes,
})

export const getSecpersonnesFail = error => ({
  type: GET_SECPERSONNES_FAIL,
  payload: error,
})









