import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_PERSONNELS,
  ADD_NEW_PERSONNEL,
  UPDATE_PERSONNEL,
  DELETE_PERSONNEL
} from "./actionTypes"
import {
  getPersonnelsFail,
  getPersonnelsSuccess,
  addPersonnelFail,
  addPersonnelSuccess,
  updatePersonnelFail,
  updatePersonnelSuccess,
  deletePersonnelSuccess,
  deletePersonnelFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getPersonnels,
  addNewPersonnel,
  updatePersonnel,
  deletePersonnel
} from "../../../helpers/fakebackend_helper"


function* fetchPersonnels() {
  console.log("fetch certif")
  try {
    const response = yield call(getPersonnels)
    console.log("res",response)
    yield put(getPersonnelsSuccess(response))
  yield takeEvery(GET_PERSONNELS, fetchPersonnels)
  } catch (error) {
    yield put(getPersonnelsFail(error))
  }
}
function* onAddNewPersonnel({ payload: event }) {
  try {
    const response = yield call(addNewPersonnel, event)
     console.log("saga new",response)
    yield put(addPersonnelSuccess(response))
  } catch (error) {
    yield put(addPersonnelFail(error))
  }
}

function* onUpdatePersonnel({ payload: personnel }) {
  try {
    const response = yield call(updatePersonnel, personnel)
    console.log("saga certif",response)
    yield put(updatePersonnelSuccess(response))
  } catch (error) {
    yield put(updatePersonnelFail(error))
  }
}

function* onDeletePersonnel({ payload: personnel }) {
  try {
    const response = yield call(deletePersonnel, personnel)
    yield put(deletePersonnelSuccess(response))
  } catch (error) {
    yield put(deletePersonnelFail(error))
  }
}

function* personnelSaga() {

  yield takeEvery(GET_PERSONNELS, fetchPersonnels)
  yield takeEvery(ADD_NEW_PERSONNEL, onAddNewPersonnel)
  yield takeEvery(UPDATE_PERSONNEL, onUpdatePersonnel)
  yield takeEvery(DELETE_PERSONNEL,onDeletePersonnel )

}

export default personnelSaga
