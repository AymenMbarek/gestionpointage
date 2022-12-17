import listactivite from "pages/Employeur/Chantier/edit"
import {

  GET_LISTACTIVITES,
  GET_LISTACTIVITES_FAIL,
  GET_LISTACTIVITES_SUCCESS,
  ADD_NEW_LISTACTIVITE,
  ADD_LISTACTIVITE_SUCCESS,
  ADD_LISTACTIVITE_FAIL,
  UPDATE_LISTACTIVITE,
  UPDATE_LISTACTIVITE_SUCCESS,
  UPDATE_LISTACTIVITE_FAIL,
  DELETE_LISTACTIVITE_FAIL,
  DELETE_LISTACTIVITE_SUCCESS,
  DELETE_LISTACTIVITE


} from "./actionTypes"



export const getListactivites = () => ({
  type: GET_LISTACTIVITES,
})


export const getListactivitesSuccess = listactivites => ({ 
  type: GET_LISTACTIVITES_SUCCESS,
  payload: listactivites,
})

export const getListactivitesFail = error => ({
  type: GET_LISTACTIVITES_FAIL,
  payload: error,
})

//add
export const addNewListactivite = listactivite => ({
  type: ADD_NEW_LISTACTIVITE,
  payload: listactivite,
})
export const addListactiviteSuccess = event => ({
  type: ADD_LISTACTIVITE_SUCCESS,
  payload: event,
})

export const addListactiviteFail = error => ({
  type: ADD_LISTACTIVITE_FAIL,
  payload: error,
})

//update
export const updateListactivite = listactivite => ({
  type: UPDATE_LISTACTIVITE,
  payload: listactivite,
})

export const updateListactiviteSuccess = listactivite => ({
  type: UPDATE_LISTACTIVITE_SUCCESS,
  payload: listactivite,
})

export const updateListactiviteFail = error => ({
  type: UPDATE_LISTACTIVITE_FAIL,
  payload: error,
})


//delete
export const deleteListactivite = listactivite => ({
  type: DELETE_LISTACTIVITE,
  payload: listactivite,
})

export const deleteListactiviteSuccess = listactivite => ({
  type: DELETE_LISTACTIVITE_SUCCESS,
  payload: listactivite,
})

export const deleteListactiviteFail = error => ({
  type: DELETE_LISTACTIVITE_FAIL,
  payload: error,
})


