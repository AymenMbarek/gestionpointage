import holiday from "pages/Exploitation/Ferier/index"
import {

  GET_HOLIDAYS,
  GET_HOLIDAYS_FAIL,
  GET_HOLIDAYS_SUCCESS,
  ADD_NEW_HOLIDAY,
  ADD_HOLIDAY_SUCCESS,
  ADD_HOLIDAY_FAIL,
  UPDATE_HOLIDAY,
  UPDATE_HOLIDAY_SUCCESS,
  UPDATE_HOLIDAY_FAIL,
  DELETE_HOLIDAY_FAIL,
  DELETE_HOLIDAY_SUCCESS,
  DELETE_HOLIDAY,
GET_HOLIDAY,
  GET_HOLIDAY_SUCCESS


} from "./actionTypes"



export const getHolidays = () => ({
  type: GET_HOLIDAYS,
})

export const getHoliday = (holiday) => ({
  type: GET_HOLIDAY,
  payload: holiday,
})


export const getHolidaysSuccess = holidays => ({ 
  type: GET_HOLIDAYS_SUCCESS,
  payload: holidays,
})

export const getHolidaySuccess = holiday => ({
  type: GET_HOLIDAY_SUCCESS,
  payload: holiday,
})

export const getHolidaysFail = error => ({
  type: GET_HOLIDAYS_FAIL,
  payload: error,
})

//add
export const addNewHoliday = holiday => ({
  type: ADD_NEW_HOLIDAY,
  payload: holiday,
})
export const addHolidaySuccess = event => ({
  type: ADD_HOLIDAY_SUCCESS,
  payload: event,
})

export const addHolidayFail = error => ({
  type: ADD_HOLIDAY_FAIL,
  payload: error,
})

//update
export const updateHoliday = holiday => ({
  type: UPDATE_HOLIDAY,
  payload: holiday,
})

export const updateHolidaySuccess = holiday => ({
  type: UPDATE_HOLIDAY_SUCCESS,
  payload: holiday,
})

export const updateHolidayFail = error => ({
  type: UPDATE_HOLIDAY_FAIL,
  payload: error,
})


//delete
export const deleteHoliday = holiday => ({
  type: DELETE_HOLIDAY,
  payload: holiday,
})

export const deleteHolidaySuccess = holiday => ({
  type: DELETE_HOLIDAY_SUCCESS,
  payload: holiday,
})

export const deleteHolidayFail = error => ({
  type: DELETE_HOLIDAY_FAIL,
  payload: error,
})


