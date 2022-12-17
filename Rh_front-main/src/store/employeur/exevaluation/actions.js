import exevaluation from "pages/Employeur/Evaluation/externe"
import {

  GET_EXEVALUATIONS,
  GET_EXEVALUATIONS_FAIL,
  GET_EXEVALUATIONS_SUCCESS,
  ADD_NEW_EXEVALUATION,
  ADD_EXEVALUATION_SUCCESS,
  ADD_EXEVALUATION_FAIL,
  UPDATE_EXEVALUATION,
  UPDATE_EXEVALUATION_SUCCESS,
  UPDATE_EXEVALUATION_FAIL,
  DELETE_EXEVALUATION_FAIL,
  DELETE_EXEVALUATION_SUCCESS,
  DELETE_EXEVALUATION


} from "./actionTypes"



export const getExevaluations = () => ({
  type: GET_EXEVALUATIONS,
})


export const getExevaluationsSuccess = exevaluations => ({ 
  type: GET_EXEVALUATIONS_SUCCESS,
  payload: exevaluations,
})

export const getExevaluationsFail = error => ({
  type: GET_EXEVALUATIONS_FAIL,
  payload: error,
})

//add
export const addNewExevaluation = exevaluation => ({
  type: ADD_NEW_EXEVALUATION,
  payload: exevaluation,
})
export const addExevaluationSuccess = event => ({
  type: ADD_EXEVALUATION_SUCCESS,
  payload: event,
})

export const addExevaluationFail = error => ({
  type: ADD_EXEVALUATION_FAIL,
  payload: error,
})

//update
export const updateExevaluation = exevaluation => ({
  type: UPDATE_EXEVALUATION,
  payload: exevaluation,
})

export const updateExevaluationSuccess = exevaluation => ({
  type: UPDATE_EXEVALUATION_SUCCESS,
  payload: exevaluation,
})

export const updateExevaluationFail = error => ({
  type: UPDATE_EXEVALUATION_FAIL,
  payload: error,
})


//delete
export const deleteExevaluation = exevaluation => ({
  type: DELETE_EXEVALUATION,
  payload: exevaluation,
})

export const deleteExevaluationSuccess = exevaluation => ({
  type: DELETE_EXEVALUATION_SUCCESS,
  payload: exevaluation,
})

export const deleteExevaluationFail = error => ({
  type: DELETE_EXEVALUATION_FAIL,
  payload: error,
})


