import inevaluation from "pages/Employeur/Evaluation/interne"
import {

  GET_INEVALUATIONS,
  GET_INEVALUATIONS_FAIL,
  GET_INEVALUATIONS_SUCCESS,
  ADD_NEW_INEVALUATION,
  ADD_INEVALUATION_SUCCESS,
  ADD_INEVALUATION_FAIL,
  UPDATE_INEVALUATION,
  UPDATE_INEVALUATION_SUCCESS,
  UPDATE_INEVALUATION_FAIL,
  DELETE_INEVALUATION_FAIL,
  DELETE_INEVALUATION_SUCCESS,
  DELETE_INEVALUATION


} from "./actionTypes"



export const getInevaluations = () => ({
  type: GET_INEVALUATIONS,
})


export const getInevaluationsSuccess = inevaluations => ({ 
  type: GET_INEVALUATIONS_SUCCESS,
  payload: inevaluations,
})

export const getInevaluationsFail = error => ({
  type: GET_INEVALUATIONS_FAIL,
  payload: error,
})

//add
export const addNewInevaluation = inevaluation => ({
  type: ADD_NEW_INEVALUATION,
  payload: inevaluation,
})
export const addInevaluationSuccess = event => ({
  type: ADD_INEVALUATION_SUCCESS,
  payload: event,
})

export const addInevaluationFail = error => ({
  type: ADD_INEVALUATION_FAIL,
  payload: error,
})

//update
export const updateInevaluation = inevaluation => ({
  type: UPDATE_INEVALUATION,
  payload: inevaluation,
})

export const updateInevaluationSuccess = inevaluation => ({
  type: UPDATE_INEVALUATION_SUCCESS,
  payload: inevaluation,
})

export const updateInevaluationFail = error => ({
  type: UPDATE_INEVALUATION_FAIL,
  payload: error,
})


//delete
export const deleteInevaluation = inevaluation => ({
  type: DELETE_INEVALUATION,
  payload: inevaluation,
})

export const deleteInevaluationSuccess = inevaluation => ({
  type: DELETE_INEVALUATION_SUCCESS,
  payload: inevaluation,
})

export const deleteInevaluationFail = error => ({
  type: DELETE_INEVALUATION_FAIL,
  payload: error,
})


