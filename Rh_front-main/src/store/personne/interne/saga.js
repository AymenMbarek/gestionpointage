import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_PERSONNES,
  GET_IPERSONNES,
  ADD_NEW_PERSONNE,
  UPDATE_PERSONNE,
  DELETE_PERSONNE
} from "./actionTypes"
import {
  getIpersonnesFail,
  getIpersonnesSuccess,
  getPersonnesFail,
  getPersonnesSuccess,
  addPersonneFail,
  addPersonneSuccess,
  updatePersonneFail,
  updatePersonneSuccess,
  deletePersonneSuccess,
  deletePersonneFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getIpersonnes,
  getPersonnes,
  addNewPersonne,
  updatePersonne,
  deletePersonne
} from "../../../helpers/fakebackend_helper"

function* fetchIpersonnes() {
  console.log("fetch personne interne")
  try {
    const response = yield call(getIpersonnes)
    console.log("personne interne",response)
    yield put(getIpersonnesSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getIpersonnesFail(error))
  }
}

function* fetchPersonnes() {
  console.log("fetch personne")
  try {
    const response = yield call(getPersonnes)
    console.log("personne ",response)
    yield put(getPersonnesSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getPersonnesFail(error))
  }
}
function* onAddNewPersonne({ payload: event }) {
  try {
    const response = yield call(addNewPersonne, event)
     console.log("add saga int",response)
    yield put(addPersonneSuccess(response))
  } catch (error) {
    yield put(addPersonneFail(error))
  }
}

function* onUpdatePersonne({ payload: personne }) {
  try {
    const response = yield call(updatePersonne, personne)
    console.log("update saga",response)
    yield put(updatePersonneSuccess(response))
  } catch (error) {
    yield put(updatePersonneFail(error))
  }
}

function* onDeletePersonne({ payload: personne }) {
  try {
    
    const response = yield call(deletePersonne, personne)
    yield put(deletePersonneSuccess(response))
  } catch (error) {
    yield put(deletePersonneFail(error))
  }
}

function* personneSaga() {
  yield takeEvery(GET_IPERSONNES, fetchIpersonnes)
  yield takeEvery(GET_PERSONNES, fetchPersonnes)
  yield takeEvery(ADD_NEW_PERSONNE, onAddNewPersonne)
  yield takeEvery(UPDATE_PERSONNE, onUpdatePersonne)
  yield takeEvery(DELETE_PERSONNE,onDeletePersonne )

}

export default personneSaga
