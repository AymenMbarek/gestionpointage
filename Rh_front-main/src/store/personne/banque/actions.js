import banque from "pages/Personne/banque"
import {

  GET_BANQUES,
  GET_BANQUES_FAIL,
  GET_BANQUES_SUCCESS,
  ADD_NEW_BANQUE,
  ADD_BANQUE_SUCCESS,
  ADD_BANQUE_FAIL,
  UPDATE_BANQUE,
  UPDATE_BANQUE_SUCCESS,
  UPDATE_BANQUE_FAIL,
  DELETE_BANQUE_FAIL,
  DELETE_BANQUE_SUCCESS,
  DELETE_BANQUE


} from "./actionTypes"



export const getBanques = () => ({
  type: GET_BANQUES,
})


export const getBanquesSuccess = banques => ({ 
  type: GET_BANQUES_SUCCESS,
  payload: banques,
})

export const getBanquesFail = error => ({
  type: GET_BANQUES_FAIL,
  payload: error,
})

//add
export const addNewBanque = banque => ({
  type: ADD_NEW_BANQUE,
  payload: banque,
})
export const addBanqueSuccess = event => ({
  type: ADD_BANQUE_SUCCESS,
  payload: event,
})

export const addBanqueFail = error => ({
  type: ADD_BANQUE_FAIL,
  payload: error,
})

//update
export const updateBanque = banque => ({
  type: UPDATE_BANQUE,
  payload: banque,
})

export const updateBanqueSuccess = banque => ({
  type: UPDATE_BANQUE_SUCCESS,
  payload: banque,
})

export const updateBanqueFail = error => ({
  type: UPDATE_BANQUE_FAIL,
  payload: error,
})


//delete
export const deleteBanque = banque => ({
  type: DELETE_BANQUE,
  payload: banque,
})

export const deleteBanqueSuccess = banque => ({
  type: DELETE_BANQUE_SUCCESS,
  payload: banque,
})

export const deleteBanqueFail = error => ({
  type: DELETE_BANQUE_FAIL,
  payload: error,
})


