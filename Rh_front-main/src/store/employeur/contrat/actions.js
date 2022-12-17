import contrat from "pages/Employeur/Contrat/add"
import {

  GET_CONTRATS,
  GET_CONTRATS_FAIL,
  GET_CONTRATS_SUCCESS,
  ADD_NEW_CONTRAT,
  ADD_CONTRAT_SUCCESS,
  ADD_CONTRAT_FAIL,
  UPDATE_CONTRAT,
  UPDATE_CONTRAT_SUCCESS,
  UPDATE_CONTRAT_FAIL,
  DELETE_CONTRAT_FAIL,
  DELETE_CONTRAT_SUCCESS,
  DELETE_CONTRAT,
GET_CONTRAT,
  GET_CONTRAT_SUCCESS


} from "./actionTypes"



export const getContrats = () => ({
  type: GET_CONTRATS,
})

export const getContrat = (contrat) => ({
  type: GET_CONTRAT,
  payload: contrat,
})


export const getContratsSuccess = contrats => ({ 
  type: GET_CONTRATS_SUCCESS,
  payload: contrats,
})

export const getContratSuccess = contrat => ({
  type: GET_CONTRAT_SUCCESS,
  payload: contrat,
})

export const getContratsFail = error => ({
  type: GET_CONTRATS_FAIL,
  payload: error,
})

//add
export const addNewContrat = contrat => ({
  type: ADD_NEW_CONTRAT,
  payload: contrat,
})
export const addContratSuccess = event => ({
  type: ADD_CONTRAT_SUCCESS,
  payload: event,
})

export const addContratFail = error => ({
  type: ADD_CONTRAT_FAIL,
  payload: error,
})

//update
export const updateContrat = contrat => ({
  type: UPDATE_CONTRAT,
  payload: contrat,
})

export const updateContratSuccess = contrat => ({
  type: UPDATE_CONTRAT_SUCCESS,
  payload: contrat,
})

export const updateContratFail = error => ({
  type: UPDATE_CONTRAT_FAIL,
  payload: error,
})


//delete
export const deleteContrat = contrat => ({
  type: DELETE_CONTRAT,
  payload: contrat,
})

export const deleteContratSuccess = contrat => ({
  type: DELETE_CONTRAT_SUCCESS,
  payload: contrat,
})

export const deleteContratFail = error => ({
  type: DELETE_CONTRAT_FAIL,
  payload: error,
})


