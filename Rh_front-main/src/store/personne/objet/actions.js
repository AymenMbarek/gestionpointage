import objet from "pages/Personne/object"
import {

  GET_OBJETS,
  GET_OBJETS_FAIL,
  GET_OBJETS_SUCCESS,
  ADD_NEW_OBJET,
  ADD_OBJET_SUCCESS,
  ADD_OBJET_FAIL,
  UPDATE_OBJET,
  UPDATE_OBJET_SUCCESS,
  UPDATE_OBJET_FAIL,
  DELETE_OBJET_FAIL,
  DELETE_OBJET_SUCCESS,
  DELETE_OBJET


} from "./actionTypes"



export const getObjets = () => ({
  type: GET_OBJETS,
})


export const getObjetsSuccess = objets => ({ 
  type: GET_OBJETS_SUCCESS,
  payload: objets,
})

export const getObjetsFail = error => ({
  type: GET_OBJETS_FAIL,
  payload: error,
})

//add
export const addNewObjet = objet => ({
  type: ADD_NEW_OBJET,
  payload: objet,
})
export const addObjetSuccess = event => ({
  type: ADD_OBJET_SUCCESS,
  payload: event,
})

export const addObjetFail = error => ({
  type: ADD_OBJET_FAIL,
  payload: error,
})

//update
export const updateObjet = objet => ({
  type: UPDATE_OBJET,
  payload: objet,
})

export const updateObjetSuccess = objet => ({
  type: UPDATE_OBJET_SUCCESS,
  payload: objet,
})

export const updateObjetFail = error => ({
  type: UPDATE_OBJET_FAIL,
  payload: error,
})


//delete
export const deleteObjet = objet => ({
  type: DELETE_OBJET,
  payload: objet,
})

export const deleteObjetSuccess = objet => ({
  type: DELETE_OBJET_SUCCESS,
  payload: objet,
})

export const deleteObjetFail = error => ({
  type: DELETE_OBJET_FAIL,
  payload: error,
})


