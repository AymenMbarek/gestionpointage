import inremarque from "pages/Employeur/Remarque/interne"
import {

  GET_INREMARQUES,
  GET_INREMARQUES_FAIL,
  GET_INREMARQUES_SUCCESS,
  ADD_NEW_INREMARQUE,
  ADD_INREMARQUE_SUCCESS,
  ADD_INREMARQUE_FAIL,
  UPDATE_INREMARQUE,
  UPDATE_INREMARQUE_SUCCESS,
  UPDATE_INREMARQUE_FAIL,
  DELETE_INREMARQUE_FAIL,
  DELETE_INREMARQUE_SUCCESS,
  DELETE_INREMARQUE


} from "./actionTypes"



export const getInremarques = () => ({
  type: GET_INREMARQUES,
})


export const getInremarquesSuccess = inremarques => ({ 
  type: GET_INREMARQUES_SUCCESS,
  payload: inremarques,
})

export const getInremarquesFail = error => ({
  type: GET_INREMARQUES_FAIL,
  payload: error,
})

//add
export const addNewInremarque = inremarque => ({
  type: ADD_NEW_INREMARQUE,
  payload: inremarque,
})
export const addInremarqueSuccess = event => ({
  type: ADD_INREMARQUE_SUCCESS,
  payload: event,
})

export const addInremarqueFail = error => ({
  type: ADD_INREMARQUE_FAIL,
  payload: error,
})

//update
export const updateInremarque = inremarque => ({
  type: UPDATE_INREMARQUE,
  payload: inremarque,
})

export const updateInremarqueSuccess = inremarque => ({
  type: UPDATE_INREMARQUE_SUCCESS,
  payload: inremarque,
})

export const updateInremarqueFail = error => ({
  type: UPDATE_INREMARQUE_FAIL,
  payload: error,
})


//delete
export const deleteInremarque = inremarque => ({
  type: DELETE_INREMARQUE,
  payload: inremarque,
})

export const deleteInremarqueSuccess = inremarque => ({
  type: DELETE_INREMARQUE_SUCCESS,
  payload: inremarque,
})

export const deleteInremarqueFail = error => ({
  type: DELETE_INREMARQUE_FAIL,
  payload: error,
})


