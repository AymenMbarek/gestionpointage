import activite from "pages/Employeur/Chantier/edit"
import {

  GET_ACTIVITES,
  GET_ACTIVITES_FAIL,
  GET_ACTIVITES_SUCCESS,
  ADD_NEW_ACTIVITE,
  ADD_ACTIVITE_SUCCESS,
  ADD_ACTIVITE_FAIL,
  UPDATE_ACTIVITE,
  UPDATE_ACTIVITE_SUCCESS,
  UPDATE_ACTIVITE_FAIL,
  DELETE_ACTIVITE_FAIL,
  DELETE_ACTIVITE_SUCCESS,
  DELETE_ACTIVITE


} from "./actionTypes"



export const getActivites = () => ({
  type: GET_ACTIVITES,
})


export const getActivitesSuccess = activites => ({ 
  type: GET_ACTIVITES_SUCCESS,
  payload: activites,
})

export const getActivitesFail = error => ({
  type: GET_ACTIVITES_FAIL,
  payload: error,
})

//add
export const addNewActivite = activite => ({
  type: ADD_NEW_ACTIVITE,
  payload: activite,
})
export const addActiviteSuccess = event => ({
  type: ADD_ACTIVITE_SUCCESS,
  payload: event,
})

export const addActiviteFail = error => ({
  type: ADD_ACTIVITE_FAIL,
  payload: error,
})

//update
export const updateActivite = activite => ({
  type: UPDATE_ACTIVITE,
  payload: activite,
})

export const updateActiviteSuccess = activite => ({
  type: UPDATE_ACTIVITE_SUCCESS,
  payload: activite,
})

export const updateActiviteFail = error => ({
  type: UPDATE_ACTIVITE_FAIL,
  payload: error,
})


//delete
export const deleteActivite = activite => ({
  type: DELETE_ACTIVITE,
  payload: activite,
})

export const deleteActiviteSuccess = activite => ({
  type: DELETE_ACTIVITE_SUCCESS,
  payload: activite,
})

export const deleteActiviteFail = error => ({
  type: DELETE_ACTIVITE_FAIL,
  payload: error,
})


