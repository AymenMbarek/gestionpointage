import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_CHANTIERS,
  ADD_NEW_CHANTIER,
  UPDATE_CHANTIER,
  DELETE_CHANTIER,
  GET_CHANTIER
} from "./actionTypes"
import {
  getChantiersFail,
  getChantiersSuccess,
  addChantierFail,
  addChantierSuccess,
  updateChantierFail,
  updateChantierSuccess,
  deleteChantierSuccess,
  deleteChantierFail, getChantierSuccess
} from "./actions"

//Include Both Helper File with needed methods
import {
  getChantiers,
  addNewChantier,
  updateChantier,
  deleteChantier, getChantier
} from "../../../helpers/fakebackend_helper"


function* fetchChantiers() {
  console.log("fetch saga")
  try {
    const response = yield call(getChantiers)
    console.log("res",response)
    yield put(getChantiersSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getChantiersFail(error))
  }
}
function* onAddNewChantier({ payload: event }) {
  try {
    const response = yield call(addNewChantier, event)
     console.log("new saga",response)
    yield put(addChantierSuccess(response))
  } catch (error) {
    yield put(addChantierFail(error))
  }
}

function* fetchChantier({ payload: chantier }) {
  try {
    console.log("kkk",chantier)
    const response = yield call(getChantier, chantier)
    console.log("gettttt saga",response)
    yield put(getChantierSuccess(response))
  } catch (error) {
  // yield put(updateChantierFail(error))
  }
}

function* onUpdateChantier({ payload: chantier }) {
  try {
    const response = yield call(updateChantier, chantier)
    console.log("update saga",response)
    yield put(updateChantierSuccess(response))
  } catch (error) {
    yield put(updateChantierFail(error))
  }
}

function* onDeleteChantier({ payload: chantier }) {
  try {
    
    const response = yield call(deleteChantier, chantier)
    yield put(deleteChantierSuccess(response))
  } catch (error) {
    yield put(deleteChantierFail(error))
  }
}

function* banqueSaga() {

  yield takeEvery(GET_CHANTIERS, fetchChantiers)
  yield takeEvery(GET_CHANTIER, fetchChantier)
  yield takeEvery(ADD_NEW_CHANTIER, onAddNewChantier)
  yield takeEvery(UPDATE_CHANTIER, onUpdateChantier)
  yield takeEvery(DELETE_CHANTIER,onDeleteChantier )

}

export default banqueSaga
