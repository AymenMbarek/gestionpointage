import user from "pages/Parametrage/usermobile/index"
import {

  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  ADD_NEW_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER,
GET_USER,
  GET_USER_SUCCESS


} from "./actionTypes"



export const getUsers = () => ({
  type: GET_USERS,
})

export const getUser = (user) => ({
  type: GET_USER,
  payload: user,
})


export const getUsersSuccess = users => ({ 
  type: GET_USERS_SUCCESS,
  payload: users,
})

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  payload: user,
})

export const getUsersFail = error => ({
  type: GET_USERS_FAIL,
  payload: error,
})

//add
export const addNewUser = user => ({
  type: ADD_NEW_USER,
  payload: user,
})
export const addUserSuccess = event => ({
  type: ADD_USER_SUCCESS,
  payload: event,
})

export const addUserFail = error => ({
  type: ADD_USER_FAIL,
  payload: error,
})

//update
export const updateUser = user => ({
  type: UPDATE_USER,
  payload: user,
})

export const updateUserSuccess = user => ({
  type: UPDATE_USER_SUCCESS,
  payload: user,
})

export const updateUserFail = error => ({
  type: UPDATE_USER_FAIL,
  payload: error,
})


//delete
export const deleteUser = user => ({
  type: DELETE_USER,
  payload: user,
})

export const deleteUserSuccess = user => ({
  type: DELETE_USER_SUCCESS,
  payload: user,
})

export const deleteUserFail = error => ({
  type: DELETE_USER_FAIL,
  payload: error,
})


