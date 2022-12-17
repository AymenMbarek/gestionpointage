import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_HOLIDAYS,
  ADD_NEW_HOLIDAY,
  UPDATE_HOLIDAY,
  DELETE_HOLIDAY,
  GET_HOLIDAY
} from "./actionTypes"
import {
  getHolidaysFail,
  getHolidaysSuccess,
  addHolidayFail,
  addHolidaySuccess,
  updateHolidayFail,
  updateHolidaySuccess,
  deleteHolidaySuccess,
  deleteHolidayFail, getHolidaySuccess
} from "./actions"

//Include Both Helper File with needed methods
import {
  getHolidays,
  addNewHoliday,
  updateHoliday,
  deleteHoliday, getHoliday
} from "../../../helpers/fakebackend_helper"


function* fetchHolidays() {
  console.log("fetch saga")
  try {
    const response = yield call(getHolidays)
    console.log("res",response)
    yield put(getHolidaysSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getHolidaysFail(error))
  }
}
function* onAddNewHoliday({ payload: event }) {
  try {
    const response = yield call(addNewHoliday, event)
     console.log("new saga",response)
    yield put(addHolidaySuccess(response))
  } catch (error) {
    yield put(addHolidayFail(error))
  }
}

function* fetchHoliday({ payload: holiday }) {
  try {
    console.log("kkk",holiday)
    const response = yield call(getHoliday, holiday)
    console.log("gettttt saga",response)
    yield put(getHolidaySuccess(response))
  } catch (error) {
  // yield put(updateHolidayFail(error))
  }
}

function* onUpdateHoliday({ payload: holiday }) {
  try {
    const response = yield call(updateHoliday, holiday)
    console.log("update saga",response)
    yield put(updateHolidaySuccess(response))
  } catch (error) {
    yield put(updateHolidayFail(error))
  }
}

function* onDeleteHoliday({ payload: holiday }) {
  try {
    
    const response = yield call(deleteHoliday, holiday)
    yield put(deleteHolidaySuccess(response))
  } catch (error) {
    yield put(deleteHolidayFail(error))
  }
}

function* holidaySaga() {

  yield takeEvery(GET_HOLIDAYS, fetchHolidays)
  yield takeEvery(GET_HOLIDAY, fetchHoliday)
  yield takeEvery(ADD_NEW_HOLIDAY, onAddNewHoliday)
  yield takeEvery(UPDATE_HOLIDAY, onUpdateHoliday)
  yield takeEvery(DELETE_HOLIDAY,onDeleteHoliday )

}

export default holidaySaga
