import groupe from "pages/Employeur/Groupe/index"
import {

  GET_GROUPES,
  GET_GROUPES_FAIL,
  GET_GROUPES_SUCCESS,
  ADD_NEW_GROUPE,
  ADD_GROUPE_SUCCESS,
  ADD_GROUPE_FAIL,
  UPDATE_GROUPE,
  UPDATE_GROUPE_SUCCESS,
  UPDATE_GROUPE_FAIL,
  DELETE_GROUPE_FAIL,
  DELETE_GROUPE_SUCCESS,
  DELETE_GROUPE


} from "./actionTypes"



export const getGroupes = () => ({
  type: GET_GROUPES,
})


export const getGroupesSuccess = groupes => ({ 
  type: GET_GROUPES_SUCCESS,
  payload: groupes,
})

export const getGroupesFail = error => ({
  type: GET_GROUPES_FAIL,
  payload: error,
})

//add
export const addNewGroupe = groupe => ({
  type: ADD_NEW_GROUPE,
  payload: groupe,
})
export const addGroupeSuccess = event => ({
  type: ADD_GROUPE_SUCCESS,
  payload: event,
})

export const addGroupeFail = error => ({
  type: ADD_GROUPE_FAIL,
  payload: error,
})

//update
export const updateGroupe = groupe => ({
  type: UPDATE_GROUPE,
  payload: groupe,
})

export const updateGroupeSuccess = groupe => ({
  type: UPDATE_GROUPE_SUCCESS,
  payload: groupe,
})

export const updateGroupeFail = error => ({
  type: UPDATE_GROUPE_FAIL,
  payload: error,
})


//delete
export const deleteGroupe = groupe => ({
  type: DELETE_GROUPE,
  payload: groupe,
})

export const deleteGroupeSuccess = groupe => ({
  type: DELETE_GROUPE_SUCCESS,
  payload: groupe,
})

export const deleteGroupeFail = error => ({
  type: DELETE_GROUPE_FAIL,
  payload: error,
})


