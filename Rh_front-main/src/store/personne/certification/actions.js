import certificat from "pages/Personne/certificat/list"
import {

  GET_CERTIFICATS,
  GET_CERTIFICATS_FAIL,
  GET_CERTIFICATS_SUCCESS,
  ADD_NEW_CERTIFICAT,
  ADD_CERTIFICAT_SUCCESS,
  ADD_CERTIFICAT_FAIL,
  UPDATE_CERTIFICAT,
  UPDATE_CERTIFICAT_SUCCESS,
  UPDATE_CERTIFICAT_FAIL,
  DELETE_CERTIFICAT_FAIL,
  DELETE_CERTIFICAT_SUCCESS,
  DELETE_CERTIFICAT


} from "./actionTypes"



export const getCertificats = () => ({
  type: GET_CERTIFICATS,
})


export const getCertificatsSuccess = certificats => ({ 
  type: GET_CERTIFICATS_SUCCESS,
  payload: certificats,
})

export const getCertificatsFail = error => ({
  type: GET_CERTIFICATS_FAIL,
  payload: error,
})

//add
export const addNewCertificat = certificat => ({
  type: ADD_NEW_CERTIFICAT,
  payload: certificat,
})
export const addCertificatSuccess = event => ({
  type: ADD_CERTIFICAT_SUCCESS,
  payload: event,
})

export const addCertificatFail = error => ({
  type: ADD_CERTIFICAT_FAIL,
  payload: error,
})

//update
export const updateCertificat = certificat => ({
  type: UPDATE_CERTIFICAT,
  payload: certificat,
})

export const updateCertificatSuccess = certificat => ({
  type: UPDATE_CERTIFICAT_SUCCESS,
  payload: certificat,
})

export const updateCertificatFail = error => ({
  type: UPDATE_CERTIFICAT_FAIL,
  payload: error,
})


//delete
export const deleteCertificat = certificat => ({
  type: DELETE_CERTIFICAT,
  payload: certificat,
})

export const deleteCertificatSuccess = certificat => ({
  type: DELETE_CERTIFICAT_SUCCESS,
  payload: certificat,
})

export const deleteCertificatFail = error => ({
  type: DELETE_CERTIFICAT_FAIL,
  payload: error,
})


