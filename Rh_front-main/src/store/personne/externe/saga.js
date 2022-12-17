import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_XPERSONNES,
  ADD_NEW_XPERSONNE,
  UPDATE_XPERSONNE,
  DELETE_XPERSONNE
} from "./actionTypes"
import {
  getXpersonnesFail,
  getXpersonnesSuccess,
  addXpersonneFail,
  addXpersonneSuccess,
  updateXpersonneFail,
  updateXpersonneSuccess,
  deleteXpersonneSuccess,
  deleteXpersonneFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getXpersonnes,
  addNewXpersonne,
  updateXpersonne,
  deleteXpersonne
} from "../../../helpers/fakebackend_helper"


function* fetchXpersonnes() {
  console.log("fetch personne externe")
  try {
    const response = yield call(getXpersonnes)
    console.log("res",response)
    yield put(getXpersonnesSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getXpersonnesFail(error))
  }
}
function* onAddNewXpersonne({ payload: event }) {
  try {
    console.log("start saga")
    const response = yield call(addNewXpersonne, event)
     console.log("add saga",response)
    yield put(addXpersonneSuccess(response))
  } catch (error) {
    yield put(addXpersonneFail(error))
  }
}

function* onUpdateXpersonne({ payload: xpersonne }) {
  try {
    const response = yield call(updateXpersonne, xpersonne)
    console.log("update saga",response)
    yield put(updateXpersonneSuccess(response))
  } catch (error) {
    yield put(updateXpersonneFail(error))
  }
}

function* onDeleteXpersonne({ payload: xpersonne }) {
  try {
    const response = yield call(deleteXpersonne, xpersonne)
    yield put(deleteXpersonneSuccess(response))
  } catch (error) {
    yield put(deleteXpersonneFail(error))
  }
}

function* xpersonneSaga() {

  yield takeEvery(GET_XPERSONNES, fetchXpersonnes)
  yield takeEvery(ADD_NEW_XPERSONNE, onAddNewXpersonne)
  yield takeEvery(UPDATE_XPERSONNE, onUpdateXpersonne)
  yield takeEvery(DELETE_XPERSONNE,onDeleteXpersonne )

}

export default xpersonneSaga
