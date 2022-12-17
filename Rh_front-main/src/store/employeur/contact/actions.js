import contact from "pages/Employeur/Entreprise/edit"
import {

  GET_CONTACTS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
  ADD_NEW_CONTACT,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
  UPDATE_CONTACT,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAIL,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT


} from "./actionTypes"



export const getContacts = () => ({
  type: GET_CONTACTS,
})


export const getContactsSuccess = contacts => ({ 
  type: GET_CONTACTS_SUCCESS,
  payload: contacts,
})

export const getContactsFail = error => ({
  type: GET_CONTACTS_FAIL,
  payload: error,
})

//add
export const addNewContact = contact => ({
  type: ADD_NEW_CONTACT,
  payload: contact,
})
export const addContactSuccess = event => ({
  type: ADD_CONTACT_SUCCESS,
  payload: event,
})

export const addContactFail = error => ({
  type: ADD_CONTACT_FAIL,
  payload: error,
})

//update
export const updateContact = contact => ({
  type: UPDATE_CONTACT,
  payload: contact,
})

export const updateContactSuccess = contact => ({
  type: UPDATE_CONTACT_SUCCESS,
  payload: contact,
})

export const updateContactFail = error => ({
  type: UPDATE_CONTACT_FAIL,
  payload: error,
})


//delete
export const deleteContact = contact => ({
  type: DELETE_CONTACT,
  payload: contact,
})

export const deleteContactSuccess = contact => ({
  type: DELETE_CONTACT_SUCCESS,
  payload: contact,
})

export const deleteContactFail = error => ({
  type: DELETE_CONTACT_FAIL,
  payload: error,
})


