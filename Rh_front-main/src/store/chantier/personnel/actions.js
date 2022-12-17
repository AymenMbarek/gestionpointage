import personnel from "pages/Employeur/Chantier/edit"
import {

  GET_PERSONNELS,
  GET_PERSONNELS_FAIL,
  GET_PERSONNELS_SUCCESS,
  ADD_NEW_PERSONNEL,
  ADD_PERSONNEL_SUCCESS,
  ADD_PERSONNEL_FAIL,
  UPDATE_PERSONNEL,
  UPDATE_PERSONNEL_SUCCESS,
  UPDATE_PERSONNEL_FAIL,
  DELETE_PERSONNEL_FAIL,
  DELETE_PERSONNEL_SUCCESS,
  DELETE_PERSONNEL


} from "./actionTypes"



export const getPersonnels = () => ({
  type: GET_PERSONNELS,
})


export const getPersonnelsSuccess = personnels => ({ 
  type: GET_PERSONNELS_SUCCESS,
  payload: personnels,
})

export const getPersonnelsFail = error => ({
  type: GET_PERSONNELS_FAIL,
  payload: error,
})

//add
export const addNewPersonnel = personnel => ({
  type: ADD_NEW_PERSONNEL,
  payload: personnel,
})
export const addPersonnelSuccess = event => ({
  type: ADD_PERSONNEL_SUCCESS,
  payload: event,
})

export const addPersonnelFail = error => ({
  type: ADD_PERSONNEL_FAIL,
  payload: error,
})

//update
export const updatePersonnel = personnel => ({
  type: UPDATE_PERSONNEL,
  payload: personnel,
})

export const updatePersonnelSuccess = personnel => ({
  type: UPDATE_PERSONNEL_SUCCESS,
  payload: personnel,
})

export const updatePersonnelFail = error => ({
  type: UPDATE_PERSONNEL_FAIL,
  payload: error,
})


//delete
export const deletePersonnel = personnel => ({
  type: DELETE_PERSONNEL,
  payload: personnel,
})

export const deletePersonnelSuccess = personnel => ({
  type: DELETE_PERSONNEL_SUCCESS,
  payload: personnel,
})

export const deletePersonnelFail = error => ({
  type: DELETE_PERSONNEL_FAIL,
  payload: error,
})


