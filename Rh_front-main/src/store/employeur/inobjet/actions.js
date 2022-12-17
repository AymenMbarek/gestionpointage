import inobjet from "pages/Employeur/Objet/interne"
import {

  GET_INOBJETS,
  GET_INOBJETS_FAIL,
  GET_INOBJETS_SUCCESS,
  ADD_NEW_INOBJET,
  ADD_INOBJET_SUCCESS,
  ADD_INOBJET_FAIL,
  UPDATE_INOBJET,
  UPDATE_INOBJET_SUCCESS,
  UPDATE_INOBJET_FAIL,
  DELETE_INOBJET_FAIL,
  DELETE_INOBJET_SUCCESS,
  DELETE_INOBJET


} from "./actionTypes"



export const getInobjets = () => ({
  type: GET_INOBJETS,
})


export const getInobjetsSuccess = inobjets => ({ 
  type: GET_INOBJETS_SUCCESS,
  payload: inobjets,
})

export const getInobjetsFail = error => ({
  type: GET_INOBJETS_FAIL,
  payload: error,
})

//add
export const addNewInobjet = inobjet => ({
  type: ADD_NEW_INOBJET,
  payload: inobjet,
})
export const addInobjetSuccess = event => ({
  type: ADD_INOBJET_SUCCESS,
  payload: event,
})

export const addInobjetFail = error => ({
  type: ADD_INOBJET_FAIL,
  payload: error,
})

//update
export const updateInobjet = inobjet => ({
  type: UPDATE_INOBJET,
  payload: inobjet,
})

export const updateInobjetSuccess = inobjet => ({
  type: UPDATE_INOBJET_SUCCESS,
  payload: inobjet,
})

export const updateInobjetFail = error => ({
  type: UPDATE_INOBJET_FAIL,
  payload: error,
})


//delete
export const deleteInobjet = inobjet => ({
  type: DELETE_INOBJET,
  payload: inobjet,
})

export const deleteInobjetSuccess = inobjet => ({
  type: DELETE_INOBJET_SUCCESS,
  payload: inobjet,
})

export const deleteInobjetFail = error => ({
  type: DELETE_INOBJET_FAIL,
  payload: error,
})


