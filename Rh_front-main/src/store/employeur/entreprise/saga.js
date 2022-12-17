import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_ENTREPRISES,
  ADD_NEW_ENTREPRISE,
  UPDATE_ENTREPRISE,
  DELETE_ENTREPRISE,
  GET_ENTREPRISE
} from "./actionTypes"
import {
  getEntreprisesFail,
  getEntreprisesSuccess,
  addEntrepriseFail,
  addEntrepriseSuccess,
  updateEntrepriseFail,
  updateEntrepriseSuccess,
  deleteEntrepriseSuccess,
  deleteEntrepriseFail, getEntrepriseSuccess
} from "./actions"

//Include Both Helper File with needed methods
import {
  getEntreprises,
  addNewEntreprise,
  updateEntreprise,
  deleteEntreprise, getEntreprise
} from "../../../helpers/fakebackend_helper"


function* fetchEntreprises() {
  console.log("fetch saga")
  try {
    const response = yield call(getEntreprises)
    console.log("res",response)
    yield put(getEntreprisesSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getEntreprisesFail(error))
  }
}
function* onAddNewEntreprise({ payload: event }) {
  try {
    const response = yield call(addNewEntreprise, event)
     console.log("new saga",response)
    yield put(addEntrepriseSuccess(response))
  } catch (error) {
    yield put(addEntrepriseFail(error))
  }
}

function* fetchEntreprise({ payload: entreprise }) {
  try {
    console.log("kkk",entreprise)
    const response = yield call(getEntreprise, entreprise)
    console.log("gettttt saga",response)
    yield put(getEntrepriseSuccess(response))
  } catch (error) {
  // yield put(updateEntrepriseFail(error))
  }
}

function* onUpdateEntreprise({ payload: entreprise }) {
  try {
    const response = yield call(updateEntreprise, entreprise)
    console.log("update saga",response)
    yield put(updateEntrepriseSuccess(response))
  } catch (error) {
    yield put(updateEntrepriseFail(error))
  }
}

function* onDeleteEntreprise({ payload: entreprise }) {
  try {
    
    const response = yield call(deleteEntreprise, entreprise)
    yield put(deleteEntrepriseSuccess(response))
  } catch (error) {
    yield put(deleteEntrepriseFail(error))
  }
}

function* banqueSaga() {

  yield takeEvery(GET_ENTREPRISES, fetchEntreprises)
  yield takeEvery(GET_ENTREPRISE, fetchEntreprise)
  yield takeEvery(ADD_NEW_ENTREPRISE, onAddNewEntreprise)
  yield takeEvery(UPDATE_ENTREPRISE, onUpdateEntreprise)
  yield takeEvery(DELETE_ENTREPRISE,onDeleteEntreprise )

}

export default banqueSaga
