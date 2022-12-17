import inpersonne from "pages/Personne/externe"
import {

  GET_INPERSONNES,
  GET_INPERSONNES_FAIL,
  GET_INPERSONNES_SUCCESS,



} from "./actionTypes"



export const getInpersonnes = () => ({
  type: GET_INPERSONNES,
})


export const getInpersonnesSuccess = inpersonnes => ({
  type: GET_INPERSONNES_SUCCESS,
  payload: inpersonnes,
})

export const getInpersonnesFail = error => ({
  type: GET_INPERSONNES_FAIL,
  payload: error,
})









