import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_QUALIFICATIONS,
  ADD_NEW_QUALIFICATION,
  UPDATE_QUALIFICATION,
  DELETE_QUALIFICATION
} from "./actionTypes"
import {
  getQualificationsFail,
  getQualificationsSuccess,
  addQualificationFail,
  addQualificationSuccess,
  updateQualificationFail,
  updateQualificationSuccess,
  deleteQualificationSuccess,
  deleteQualificationFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getQualifications,
  addNewQualification,
  updateQualification,
  deleteQualification
} from "../../../helpers/fakebackend_helper"


function* fetchQualifications() {
  console.log("fetch b")
  try {
    const response = yield call(getQualifications)
    console.log("res",response)
    yield put(getQualificationsSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getQualificationsFail(error))
  }
}
function* onAddNewQualification({ payload: event }) {
  try {
    const response = yield call(addNewQualification, event)
     console.log("sssss",response)
    yield put(addQualificationSuccess(response))
  } catch (error) {
    yield put(addQualificationFail(error))
  }
}

function* onUpdateQualification({ payload: qualification }) {
  try {
    const response = yield call(updateQualification, qualification)
    console.log("qqq",response)
    yield put(updateQualificationSuccess(response))
  } catch (error) {
    yield put(updateQualificationFail(error))
  }
}

function* onDeleteQualification({ payload: qualification }) {
  try {
    
    const response = yield call(deleteQualification, qualification)
    yield put(deleteQualificationSuccess(response))
  } catch (error) {
    yield put(deleteQualificationFail(error))
  }
}

function* banqueSaga() {

  yield takeEvery(GET_QUALIFICATIONS, fetchQualifications)
  yield takeEvery(ADD_NEW_QUALIFICATION, onAddNewQualification)
  yield takeEvery(UPDATE_QUALIFICATION, onUpdateQualification)
  yield takeEvery(DELETE_QUALIFICATION,onDeleteQualification )

}

export default banqueSaga
