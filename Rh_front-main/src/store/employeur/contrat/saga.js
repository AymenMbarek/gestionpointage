import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_CONTRATS,
  ADD_NEW_CONTRAT,
  UPDATE_CONTRAT,
  DELETE_CONTRAT,
  GET_CONTRAT
} from "./actionTypes"
import {
  getContratsFail,
  getContratsSuccess,
  addContratFail,
  addContratSuccess,
  updateContratFail,
  updateContratSuccess,
  deleteContratSuccess,
  deleteContratFail, getContratSuccess
} from "./actions"

//Include Both Helper File with needed methods
import {
  getContrats,
  addNewContrat,
  updateContrat,
  deleteContrat, getContrat
} from "../../../helpers/fakebackend_helper"


function* fetchContrats() {
  console.log("fetch saga")
  try {
    const response = yield call(getContrats)
    console.log("res",response)
    yield put(getContratsSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getContratsFail(error))
  }
}
function* onAddNewContrat({ payload: event }) {
  try {
    const response = yield call(addNewContrat, event)
     console.log("new saga",response)
    yield put(addContratSuccess(response))
  } catch (error) {
    yield put(addContratFail(error))
  }
}

function* fetchContrat({ payload: contrat }) {
  try {
    console.log("kkk",contrat)
    const response = yield call(getContrat, contrat)
    console.log("gettttt saga",response)
    yield put(getContratSuccess(response))
  } catch (error) {
  // yield put(updateContratFail(error))
  }
}

function* onUpdateContrat({ payload: contrat }) {
  try {
    const response = yield call(updateContrat, contrat)
    console.log("update saga",response)
    yield put(updateContratSuccess(response))
  } catch (error) {
    yield put(updateContratFail(error))
  }
}

function* onDeleteContrat({ payload: contrat }) {
  try {
    
    const response = yield call(deleteContrat, contrat)
    yield put(deleteContratSuccess(response))
  } catch (error) {
    yield put(deleteContratFail(error))
  }
}

function* contratSaga() {

  yield takeEvery(GET_CONTRATS, fetchContrats)
  yield takeEvery(GET_CONTRAT, fetchContrat)
  yield takeEvery(ADD_NEW_CONTRAT, onAddNewContrat)
  yield takeEvery(UPDATE_CONTRAT, onUpdateContrat)
  yield takeEvery(DELETE_CONTRAT,onDeleteContrat )

}

export default contratSaga
