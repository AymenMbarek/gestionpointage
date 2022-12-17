import entreprise from "pages/Employeur/Entreprise/add"
import {

  GET_ENTREPRISES,
  GET_ENTREPRISES_FAIL,
  GET_ENTREPRISES_SUCCESS,
  ADD_NEW_ENTREPRISE,
  ADD_ENTREPRISE_SUCCESS,
  ADD_ENTREPRISE_FAIL,
  UPDATE_ENTREPRISE,
  UPDATE_ENTREPRISE_SUCCESS,
  UPDATE_ENTREPRISE_FAIL,
  DELETE_ENTREPRISE_FAIL,
  DELETE_ENTREPRISE_SUCCESS,
  DELETE_ENTREPRISE,
GET_ENTREPRISE,
  GET_ENTREPRISE_SUCCESS


} from "./actionTypes"



export const getEntreprises = () => ({
  type: GET_ENTREPRISES,
})

export const getEntreprise = (entreprise) => ({
  type: GET_ENTREPRISE,
  payload: entreprise,
})


export const getEntreprisesSuccess = entreprises => ({ 
  type: GET_ENTREPRISES_SUCCESS,
  payload: entreprises,
})

export const getEntrepriseSuccess = entreprise => ({
  type: GET_ENTREPRISE_SUCCESS,
  payload: entreprise,
})

export const getEntreprisesFail = error => ({
  type: GET_ENTREPRISES_FAIL,
  payload: error,
})

//add
export const addNewEntreprise = entreprise => ({
  type: ADD_NEW_ENTREPRISE,
  payload: entreprise,
})
export const addEntrepriseSuccess = event => ({
  type: ADD_ENTREPRISE_SUCCESS,
  payload: event,
})

export const addEntrepriseFail = error => ({
  type: ADD_ENTREPRISE_FAIL,
  payload: error,
})

//update
export const updateEntreprise = entreprise => ({
  type: UPDATE_ENTREPRISE,
  payload: entreprise,
})

export const updateEntrepriseSuccess = entreprise => ({
  type: UPDATE_ENTREPRISE_SUCCESS,
  payload: entreprise,
})

export const updateEntrepriseFail = error => ({
  type: UPDATE_ENTREPRISE_FAIL,
  payload: error,
})


//delete
export const deleteEntreprise = entreprise => ({
  type: DELETE_ENTREPRISE,
  payload: entreprise,
})

export const deleteEntrepriseSuccess = entreprise => ({
  type: DELETE_ENTREPRISE_SUCCESS,
  payload: entreprise,
})

export const deleteEntrepriseFail = error => ({
  type: DELETE_ENTREPRISE_FAIL,
  payload: error,
})


