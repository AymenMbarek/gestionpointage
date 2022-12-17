import smartphone from "pages/Parametrage/smartphone/index"
import {

  GET_SMARTPHONES,
  GET_SMARTPHONES_FAIL,
  GET_SMARTPHONES_SUCCESS,
  ADD_NEW_SMARTPHONE,
  ADD_SMARTPHONE_SUCCESS,
  ADD_SMARTPHONE_FAIL,
  UPDATE_SMARTPHONE,
  UPDATE_SMARTPHONE_SUCCESS,
  UPDATE_SMARTPHONE_FAIL,
  DELETE_SMARTPHONE_FAIL,
  DELETE_SMARTPHONE_SUCCESS,
  DELETE_SMARTPHONE,
GET_SMARTPHONE,
  GET_SMARTPHONE_SUCCESS


} from "./actionTypes"



export const getSmartphones = () => ({
  type: GET_SMARTPHONES,
})

export const getSmartphone = (smartphone) => ({
  type: GET_SMARTPHONE,
  payload: smartphone,
})


export const getSmartphonesSuccess = smartphones => ({ 
  type: GET_SMARTPHONES_SUCCESS,
  payload: smartphones,
})

export const getSmartphoneSuccess = smartphone => ({
  type: GET_SMARTPHONE_SUCCESS,
  payload: smartphone,
})

export const getSmartphonesFail = error => ({
  type: GET_SMARTPHONES_FAIL,
  payload: error,
})

//add
export const addNewSmartphone = smartphone => ({
  type: ADD_NEW_SMARTPHONE,
  payload: smartphone,
})
export const addSmartphoneSuccess = event => ({
  type: ADD_SMARTPHONE_SUCCESS,
  payload: event,
})

export const addSmartphoneFail = error => ({
  type: ADD_SMARTPHONE_FAIL,
  payload: error,
})

//update
export const updateSmartphone = smartphone => ({
  type: UPDATE_SMARTPHONE,
  payload: smartphone,
})

export const updateSmartphoneSuccess = smartphone => ({
  type: UPDATE_SMARTPHONE_SUCCESS,
  payload: smartphone,
})

export const updateSmartphoneFail = error => ({
  type: UPDATE_SMARTPHONE_FAIL,
  payload: error,
})


//delete
export const deleteSmartphone = smartphone => ({
  type: DELETE_SMARTPHONE,
  payload: smartphone,
})

export const deleteSmartphoneSuccess = smartphone => ({
  type: DELETE_SMARTPHONE_SUCCESS,
  payload: smartphone,
})

export const deleteSmartphoneFail = error => ({
  type: DELETE_SMARTPHONE_FAIL,
  payload: error,
})


