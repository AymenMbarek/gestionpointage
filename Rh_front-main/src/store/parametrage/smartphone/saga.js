import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_SMARTPHONES,
  ADD_NEW_SMARTPHONE,
  UPDATE_SMARTPHONE,
  DELETE_SMARTPHONE,
  GET_SMARTPHONE
} from "./actionTypes"
import {
  getSmartphonesFail,
  getSmartphonesSuccess,
  addSmartphoneFail,
  addSmartphoneSuccess,
  updateSmartphoneFail,
  updateSmartphoneSuccess,
  deleteSmartphoneSuccess,
  deleteSmartphoneFail, getSmartphoneSuccess
} from "./actions"

//Include Both Helper File with needed methods
import {
  getSmartphones,
  addNewSmartphone,
  updateSmartphone,
  deleteSmartphone, getSmartphone
} from "../../../helpers/fakebackend_helper"


function* fetchSmartphones() {
  console.log("fetch saga")
  try {
    const response = yield call(getSmartphones)
    console.log("res",response)
    yield put(getSmartphonesSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getSmartphonesFail(error))
  }
}
function* onAddNewSmartphone({ payload: event }) {
  try {
    const response = yield call(addNewSmartphone, event)
     console.log("new saga",response)
    yield put(addSmartphoneSuccess(response))
  } catch (error) {
    yield put(addSmartphoneFail(error))
  }
}

function* fetchSmartphone({ payload: smartphone }) {
  try {
    console.log("kkk",smartphone)
    const response = yield call(getSmartphone, smartphone)
    console.log("gettttt saga",response)
    yield put(getSmartphoneSuccess(response))
  } catch (error) {
  // yield put(updateSmartphoneFail(error))
  }
}

function* onUpdateSmartphone({ payload: smartphone }) {
  try {
    const response = yield call(updateSmartphone, smartphone)
    console.log("update saga",response)
    yield put(updateSmartphoneSuccess(response))
  } catch (error) {
    yield put(updateSmartphoneFail(error))
  }
}

function* onDeleteSmartphone({ payload: smartphone }) {
  try {
    
    const response = yield call(deleteSmartphone, smartphone)
    yield put(deleteSmartphoneSuccess(response))
  } catch (error) {
    yield put(deleteSmartphoneFail(error))
  }
}

function* smartphoneSaga() {

  yield takeEvery(GET_SMARTPHONES, fetchSmartphones)
  yield takeEvery(GET_SMARTPHONE, fetchSmartphone)
  yield takeEvery(ADD_NEW_SMARTPHONE, onAddNewSmartphone)
  yield takeEvery(UPDATE_SMARTPHONE, onUpdateSmartphone)
  yield takeEvery(DELETE_SMARTPHONE,onDeleteSmartphone )

}

export default smartphoneSaga
