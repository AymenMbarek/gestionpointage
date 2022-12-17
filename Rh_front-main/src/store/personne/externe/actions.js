import xpersonne from "pages/Personne/externe"
import {

  GET_XPERSONNES,
  GET_XPERSONNES_FAIL,
  GET_XPERSONNES_SUCCESS,
  ADD_NEW_XPERSONNE,
  ADD_XPERSONNE_SUCCESS,
  ADD_XPERSONNE_FAIL,
  UPDATE_XPERSONNE,
  UPDATE_XPERSONNE_SUCCESS,
  UPDATE_XPERSONNE_FAIL,
  DELETE_XPERSONNE_FAIL,
  DELETE_XPERSONNE_SUCCESS,
  DELETE_XPERSONNE


} from "./actionTypes"



export const getXpersonnes = () => ({
  type: GET_XPERSONNES,
})


export const getXpersonnesSuccess = xpersonnes => ({ 
  type: GET_XPERSONNES_SUCCESS,
  payload: xpersonnes,
})

export const getXpersonnesFail = error => ({
  type: GET_XPERSONNES_FAIL,
  payload: error,
})

//add
export const addNewXpersonne = xpersonne => ({
  type: ADD_NEW_XPERSONNE,
  payload: xpersonne,
})
export const addXpersonneSuccess = event => ({
  type: ADD_XPERSONNE_SUCCESS,
  payload: event,
})

export const addXpersonneFail = error => ({
  type: ADD_XPERSONNE_FAIL,
  payload: error,
})

//update
export const updateXpersonne = xpersonne => ({
  type: UPDATE_XPERSONNE,
  payload: xpersonne,
})

export const updateXpersonneSuccess = xpersonne => ({
  type: UPDATE_XPERSONNE_SUCCESS,
  payload: xpersonne,
})

export const updateXpersonneFail = error => ({
  type: UPDATE_XPERSONNE_FAIL,
  payload: error,
})


//delete
export const deleteXpersonne = xpersonne => ({
  type: DELETE_XPERSONNE,
  payload: xpersonne,
})

export const deleteXpersonneSuccess = xpersonne => ({
  type: DELETE_XPERSONNE_SUCCESS,
  payload: xpersonne,
})

export const deleteXpersonneFail = error => ({
  type: DELETE_XPERSONNE_FAIL,
  payload: error,
})


