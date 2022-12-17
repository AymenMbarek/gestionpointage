import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_EXREMARQUES,
  ADD_NEW_EXREMARQUE,
  UPDATE_EXREMARQUE,
  DELETE_EXREMARQUE
} from "./actionTypes"
import {
  getExremarquesFail,
  getExremarquesSuccess,
  addExremarqueFail,
  addExremarqueSuccess,
  updateExremarqueFail,
  updateExremarqueSuccess,
  deleteExremarqueSuccess,
  deleteExremarqueFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getExremarques,
  addNewExremarque,
  updateExremarque,
  deleteExremarque
} from "../../../helpers/fakebackend_helper"


function* fetchExremarques() {
  console.log("fetch remarques")
  try {
    const response = yield call(getExremarques)
    console.log("res",response)
    yield put(getExremarquesSuccess(response))
  yield takeEvery(GET_EXREMARQUES, fetchExremarques)
  } catch (error) {
    yield put(getExremarquesFail(error))
  }
}
function* onAddNewExremarque({ payload: event }) {
  try {
    const response = yield call(addNewExremarque, event)
     console.log("saga new remarque",response)
    yield put(addExremarqueSuccess(response))
  } catch (error) {
    yield put(addExremarqueFail(error))
  }
}

function* onUpdateExremarque({ payload: exremarque }) {
  try {
    const response = yield call(updateExremarque, exremarque)
    console.log("saga edit",response)
    yield put(updateExremarqueSuccess(response))
  } catch (error) {
    yield put(updateExremarqueFail(error))
  }
}

function* onDeleteExremarque({ payload: exremarque }) {
  try {
    const response = yield call(deleteExremarque, exremarque)
    yield put(deleteExremarqueSuccess(response))
  } catch (error) {
    yield put(deleteExremarqueFail(error))
  }
}

function* exremarqueSaga() {

  yield takeEvery(GET_EXREMARQUES, fetchExremarques)
  yield takeEvery(ADD_NEW_EXREMARQUE, onAddNewExremarque)
  yield takeEvery(UPDATE_EXREMARQUE, onUpdateExremarque)
  yield takeEvery(DELETE_EXREMARQUE,onDeleteExremarque )

}

export default exremarqueSaga
