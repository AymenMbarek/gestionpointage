import autpersonne from "pages/Personne/externe"
import {

  GET_AUTPERSONNES,
  GET_AUTPERSONNES_FAIL,
  GET_AUTPERSONNES_SUCCESS,



} from "./actionTypes"



export const getAutpersonnes = () => ({
  type: GET_AUTPERSONNES,
})


export const getAutpersonnesSuccess = autpersonnes => ({
  type: GET_AUTPERSONNES_SUCCESS,
  payload: autpersonnes,
})

export const getAutpersonnesFail = error => ({
  type: GET_AUTPERSONNES_FAIL,
  payload: error,
})









