import qualification from "pages/Personne/qualification"
import {

  GET_QUALIFICATIONS,
  GET_QUALIFICATIONS_FAIL,
  GET_QUALIFICATIONS_SUCCESS,
  ADD_NEW_QUALIFICATION,
  ADD_QUALIFICATION_SUCCESS,
  ADD_QUALIFICATION_FAIL,
  UPDATE_QUALIFICATION,
  UPDATE_QUALIFICATION_SUCCESS,
  UPDATE_QUALIFICATION_FAIL,
  DELETE_QUALIFICATION_FAIL,
  DELETE_QUALIFICATION_SUCCESS,
  DELETE_QUALIFICATION


} from "./actionTypes"



export const getQualifications = () => ({
  type: GET_QUALIFICATIONS,
})


export const getQualificationsSuccess = qualifications => ({ 
  type: GET_QUALIFICATIONS_SUCCESS,
  payload: qualifications,
})

export const getQualificationsFail = error => ({
  type: GET_QUALIFICATIONS_FAIL,
  payload: error,
})

//add
export const addNewQualification = qualification => ({
  type: ADD_NEW_QUALIFICATION,
  payload: qualification,
})
export const addQualificationSuccess = event => ({
  type: ADD_QUALIFICATION_SUCCESS,
  payload: event,
})

export const addQualificationFail = error => ({
  type: ADD_QUALIFICATION_FAIL,
  payload: error,
})

//update
export const updateQualification = qualification => ({
  type: UPDATE_QUALIFICATION,
  payload: qualification,
})

export const updateQualificationSuccess = qualification => ({
  type: UPDATE_QUALIFICATION_SUCCESS,
  payload: qualification,
})

export const updateQualificationFail = error => ({
  type: UPDATE_QUALIFICATION_FAIL,
  payload: error,
})


//delete
export const deleteQualification = qualification => ({
  type: DELETE_QUALIFICATION,
  payload: qualification,
})

export const deleteQualificationSuccess = qualification => ({
  type: DELETE_QUALIFICATION_SUCCESS,
  payload: qualification,
})

export const deleteQualificationFail = error => ({
  type: DELETE_QUALIFICATION_FAIL,
  payload: error,
})


