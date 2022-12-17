import exremarque from "pages/Employeur/Remarque/externe"
import {

  GET_EXREMARQUES,
  GET_EXREMARQUES_FAIL,
  GET_EXREMARQUES_SUCCESS,
  ADD_NEW_EXREMARQUE,
  ADD_EXREMARQUE_SUCCESS,
  ADD_EXREMARQUE_FAIL,
  UPDATE_EXREMARQUE,
  UPDATE_EXREMARQUE_SUCCESS,
  UPDATE_EXREMARQUE_FAIL,
  DELETE_EXREMARQUE_FAIL,
  DELETE_EXREMARQUE_SUCCESS,
  DELETE_EXREMARQUE


} from "./actionTypes"



export const getExremarques = () => ({
  type: GET_EXREMARQUES,
})


export const getExremarquesSuccess = exremarques => ({ 
  type: GET_EXREMARQUES_SUCCESS,
  payload: exremarques,
})

export const getExremarquesFail = error => ({
  type: GET_EXREMARQUES_FAIL,
  payload: error,
})

//add
export const addNewExremarque = exremarque => ({
  type: ADD_NEW_EXREMARQUE,
  payload: exremarque,
})
export const addExremarqueSuccess = event => ({
  type: ADD_EXREMARQUE_SUCCESS,
  payload: event,
})

export const addExremarqueFail = error => ({
  type: ADD_EXREMARQUE_FAIL,
  payload: error,
})

//update
export const updateExremarque = exremarque => ({
  type: UPDATE_EXREMARQUE,
  payload: exremarque,
})

export const updateExremarqueSuccess = exremarque => ({
  type: UPDATE_EXREMARQUE_SUCCESS,
  payload: exremarque,
})

export const updateExremarqueFail = error => ({
  type: UPDATE_EXREMARQUE_FAIL,
  payload: error,
})


//delete
export const deleteExremarque = exremarque => ({
  type: DELETE_EXREMARQUE,
  payload: exremarque,
})

export const deleteExremarqueSuccess = exremarque => ({
  type: DELETE_EXREMARQUE_SUCCESS,
  payload: exremarque,
})

export const deleteExremarqueFail = error => ({
  type: DELETE_EXREMARQUE_FAIL,
  payload: error,
})


