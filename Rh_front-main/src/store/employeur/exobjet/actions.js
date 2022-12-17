import exobjet from "pages/Employeur/Objet/externe"
import {

  GET_EXOBJETS,
  GET_EXOBJETS_FAIL,
  GET_EXOBJETS_SUCCESS,
  ADD_NEW_EXOBJET,
  ADD_EXOBJET_SUCCESS,
  ADD_EXOBJET_FAIL,
  UPDATE_EXOBJET,
  UPDATE_EXOBJET_SUCCESS,
  UPDATE_EXOBJET_FAIL,
  DELETE_EXOBJET_FAIL,
  DELETE_EXOBJET_SUCCESS,
  DELETE_EXOBJET


} from "./actionTypes"



export const getExobjets = () => ({
  type: GET_EXOBJETS,
})


export const getExobjetsSuccess = exobjets => ({ 
  type: GET_EXOBJETS_SUCCESS,
  payload: exobjets,
})

export const getExobjetsFail = error => ({
  type: GET_EXOBJETS_FAIL,
  payload: error,
})

//add
export const addNewExobjet = exobjet => ({
  type: ADD_NEW_EXOBJET,
  payload: exobjet,
})
export const addExobjetSuccess = event => ({
  type: ADD_EXOBJET_SUCCESS,
  payload: event,
})

export const addExobjetFail = error => ({
  type: ADD_EXOBJET_FAIL,
  payload: error,
})

//update
export const updateExobjet = exobjet => ({
  type: UPDATE_EXOBJET,
  payload: exobjet,
})

export const updateExobjetSuccess = exobjet => ({
  type: UPDATE_EXOBJET_SUCCESS,
  payload: exobjet,
})

export const updateExobjetFail = error => ({
  type: UPDATE_EXOBJET_FAIL,
  payload: error,
})


//delete
export const deleteExobjet = exobjet => ({
  type: DELETE_EXOBJET,
  payload: exobjet,
})

export const deleteExobjetSuccess = exobjet => ({
  type: DELETE_EXOBJET_SUCCESS,
  payload: exobjet,
})

export const deleteExobjetFail = error => ({
  type: DELETE_EXOBJET_FAIL,
  payload: error,
})


