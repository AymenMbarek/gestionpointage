import tarif from "pages/Employeur/Tarifs/index"
import {

  GET_TARIFS,
  GET_TARIFS_FAIL,
  GET_TARIFS_SUCCESS,
  ADD_NEW_TARIF,
  ADD_TARIF_SUCCESS,
  ADD_TARIF_FAIL,
  UPDATE_TARIF,
  UPDATE_TARIF_SUCCESS,
  UPDATE_TARIF_FAIL,
  DELETE_TARIF_FAIL,
  DELETE_TARIF_SUCCESS,
  DELETE_TARIF,
GET_TARIF,
  GET_TARIF_SUCCESS


} from "./actionTypes"



export const getTarifs = () => ({
  type: GET_TARIFS,
})

export const getTarif = (tarif) => ({
  type: GET_TARIF,
  payload: tarif,
})


export const getTarifsSuccess = tarifs => ({ 
  type: GET_TARIFS_SUCCESS,
  payload: tarifs,
})

export const getTarifSuccess = tarif => ({
  type: GET_TARIF_SUCCESS,
  payload: tarif,
})

export const getTarifsFail = error => ({
  type: GET_TARIFS_FAIL,
  payload: error,
})

//add
export const addNewTarif = tarif => ({
  type: ADD_NEW_TARIF,
  payload: tarif,
})
export const addTarifSuccess = event => ({
  type: ADD_TARIF_SUCCESS,
  payload: event,
})

export const addTarifFail = error => ({
  type: ADD_TARIF_FAIL,
  payload: error,
})

//update
export const updateTarif = tarif => ({
  type: UPDATE_TARIF,
  payload: tarif,
})

export const updateTarifSuccess = tarif => ({
  type: UPDATE_TARIF_SUCCESS,
  payload: tarif,
})

export const updateTarifFail = error => ({
  type: UPDATE_TARIF_FAIL,
  payload: error,
})


//delete
export const deleteTarif = tarif => ({
  type: DELETE_TARIF,
  payload: tarif,
})

export const deleteTarifSuccess = tarif => ({
  type: DELETE_TARIF_SUCCESS,
  payload: tarif,
})

export const deleteTarifFail = error => ({
  type: DELETE_TARIF_FAIL,
  payload: error,
})


