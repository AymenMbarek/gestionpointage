//import personne from "pages/Personne/interne"
import {

  GET_PERSONNES,
  GET_PERSONNES_FAIL,
  GET_PERSONNES_SUCCESS,
  GET_IPERSONNES,
  GET_IPERSONNES_FAIL,
  GET_IPERSONNES_SUCCESS,
  ADD_NEW_PERSONNE,
  ADD_PERSONNE_SUCCESS,
  ADD_PERSONNE_FAIL,
  UPDATE_PERSONNE,
  UPDATE_PERSONNE_SUCCESS,
  UPDATE_PERSONNE_FAIL,
  DELETE_PERSONNE_FAIL,
  DELETE_PERSONNE_SUCCESS,
  DELETE_PERSONNE


} from "./actionTypes"



export const getPersonnes = () => ({
  type: GET_PERSONNES,
})


export const getPersonnesSuccess = banques => ({ 
  type: GET_PERSONNES_SUCCESS,
  payload: banques,
})

export const getPersonnesFail = error => ({
  type: GET_PERSONNES_FAIL,
  payload: error,
})

//interne
export const getIpersonnes = () => ({
  type: GET_IPERSONNES,
})


export const getIpersonnesSuccess = banques => ({ 
  type: GET_IPERSONNES_SUCCESS,
  payload: banques,
})

export const getIpersonnesFail = error => ({
  type: GET_IPERSONNES_FAIL,
  payload: error,
})
//add
export const addNewPersonne = personne => ({
  type: ADD_NEW_PERSONNE,
  payload: personne,
})
export const addPersonneSuccess = event => ({
  type: ADD_PERSONNE_SUCCESS,
  payload: event,
})

export const addPersonneFail = error => ({
  type: ADD_PERSONNE_FAIL,
  payload: error,
})

//update
export const updatePersonne = personne => ({
  type: UPDATE_PERSONNE,
  payload: personne,
})

export const updatePersonneSuccess = personne => ({
  type: UPDATE_PERSONNE_SUCCESS,
  payload: personne,
})

export const updatePersonneFail = error => ({
  type: UPDATE_PERSONNE_FAIL,
  payload: error,
})


//delete
export const deletePersonne = personne => ({
  type: DELETE_PERSONNE,
  payload: personne,
})

export const deletePersonneSuccess = personne => ({
  type: DELETE_PERSONNE_SUCCESS,
  payload: personne,
})

export const deletePersonneFail = error => ({
  type: DELETE_PERSONNE_FAIL,
  payload: error,
})


