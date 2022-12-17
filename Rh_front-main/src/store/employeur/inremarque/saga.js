import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_INREMARQUES,
  ADD_NEW_INREMARQUE,
  UPDATE_INREMARQUE,
  DELETE_INREMARQUE
} from "./actionTypes"
import {
  getInremarquesFail,
  getInremarquesSuccess,
  addInremarqueFail,
  addInremarqueSuccess,
  updateInremarqueFail,
  updateInremarqueSuccess,
  deleteInremarqueSuccess,
  deleteInremarqueFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getInremarques,
  addNewInremarque,
  updateInremarque,
  deleteInremarque
} from "../../../helpers/fakebackend_helper"


function* fetchInremarques() {
  console.log("fetch remarques interne")
  try {
    const response = yield call(getInremarques)
    console.log("res",response)
    yield put(getInremarquesSuccess(response))
  yield takeEvery(GET_INREMARQUES, fetchInremarques)
  } catch (error) {
    yield put(getInremarquesFail(error))
  }
}
function* onAddNewInremarque({ payload: event }) {
  try {
    const response = yield call(addNewInremarque, event)
     console.log("saga new remarque int",response)
    yield put(addInremarqueSuccess(response))
  } catch (error) {
    yield put(addInremarqueFail(error))
  }
}

function* onUpdateInremarque({ payload: inremarque }) {
  try {
    const response = yield call(updateInremarque, inremarque)
    console.log("saga update",response)
    yield put(updateInremarqueSuccess(response))
  } catch (error) {
    yield put(updateInremarqueFail(error))
  }
}

function* onDeleteInremarque({ payload: inremarque }) {
  try {
    const response = yield call(deleteInremarque, inremarque)
    yield put(deleteInremarqueSuccess(response))
  } catch (error) {
    yield put(deleteInremarqueFail(error))
  }
}

function* inremarqueSaga() {

  yield takeEvery(GET_INREMARQUES, fetchInremarques)
  yield takeEvery(ADD_NEW_INREMARQUE, onAddNewInremarque)
  yield takeEvery(UPDATE_INREMARQUE, onUpdateInremarque)
  yield takeEvery(DELETE_INREMARQUE,onDeleteInremarque )

}

export default inremarqueSaga
