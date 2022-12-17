import chantier from "pages/Employeur/Chantier/add"
import {

  GET_CHANTIERS,
  GET_CHANTIERS_FAIL,
  GET_CHANTIERS_SUCCESS,
  ADD_NEW_CHANTIER,
  ADD_CHANTIER_SUCCESS,
  ADD_CHANTIER_FAIL,
  UPDATE_CHANTIER,
  UPDATE_CHANTIER_SUCCESS,
  UPDATE_CHANTIER_FAIL,
  DELETE_CHANTIER_FAIL,
  DELETE_CHANTIER_SUCCESS,
  DELETE_CHANTIER,
GET_CHANTIER,
  GET_CHANTIER_SUCCESS


} from "./actionTypes"



export const getChantiers = () => ({
  type: GET_CHANTIERS,
})

export const getChantier = (chantier) => ({
  type: GET_CHANTIER,
  payload: chantier,
})


export const getChantiersSuccess = entreprises => ({ 
  type: GET_CHANTIERS_SUCCESS,
  payload: entreprises,
})

export const getChantierSuccess = chantier => ({
  type: GET_CHANTIER_SUCCESS,
  payload: chantier,
})

export const getChantiersFail = error => ({
  type: GET_CHANTIERS_FAIL,
  payload: error,
})

//add
export const addNewChantier = chantier => ({
  type: ADD_NEW_CHANTIER,
  payload: chantier,
})
export const addChantierSuccess = event => ({
  type: ADD_CHANTIER_SUCCESS,
  payload: event,
})

export const addChantierFail = error => ({
  type: ADD_CHANTIER_FAIL,
  payload: error,
})

//update
export const updateChantier = chantier => ({
  type: UPDATE_CHANTIER,
  payload: chantier,
})

export const updateChantierSuccess = chantier => ({
  type: UPDATE_CHANTIER_SUCCESS,
  payload: chantier,
})

export const updateChantierFail = error => ({
  type: UPDATE_CHANTIER_FAIL,
  payload: error,
})


//delete
export const deleteChantier = chantier => ({
  type: DELETE_CHANTIER,
  payload: chantier,
})

export const deleteChantierSuccess = chantier => ({
  type: DELETE_CHANTIER_SUCCESS,
  payload: chantier,
})

export const deleteChantierFail = error => ({
  type: DELETE_CHANTIER_FAIL,
  payload: error,
})


