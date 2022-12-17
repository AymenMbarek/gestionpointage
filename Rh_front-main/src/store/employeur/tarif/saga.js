import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_TARIFS,
  ADD_NEW_TARIF,
  UPDATE_TARIF,
  DELETE_TARIF,
  GET_TARIF
} from "./actionTypes"
import {
  getTarifsFail,
  getTarifsSuccess,
  addTarifFail,
  addTarifSuccess,
  updateTarifFail,
  updateTarifSuccess,
  deleteTarifSuccess,
  deleteTarifFail, getTarifSuccess
} from "./actions"

//Include Both Helper File with needed methods
import {
  getTarifs,
  addNewTarif,
  updateTarif,
  deleteTarif, getTarif
} from "../../../helpers/fakebackend_helper"


function* fetchTarifs() {
  console.log("fetch saga")
  try {
    const response = yield call(getTarifs)
    console.log("res",response)
    yield put(getTarifsSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getTarifsFail(error))
  }
}
function* onAddNewTarif({ payload: event }) {
  try {
    const response = yield call(addNewTarif, event)
     console.log("new saga",response)
    yield put(addTarifSuccess(response))
  } catch (error) {
    yield put(addTarifFail(error))
  }
}

function* fetchTarif({ payload: tarif }) {
  try {
    console.log("kkk",tarif)
    const response = yield call(getTarif, tarif)
    console.log("gettttt saga",response)
    yield put(getTarifSuccess(response))
  } catch (error) {
  // yield put(updateTarifFail(error))
  }
}

function* onUpdateTarif({ payload: tarif }) {
  try {
    const response = yield call(updateTarif, tarif)
    console.log("update saga",response)
    yield put(updateTarifSuccess(response))
  } catch (error) {
    yield put(updateTarifFail(error))
  }
}

function* onDeleteTarif({ payload: tarif }) {
  try {
    
    const response = yield call(deleteTarif, tarif)
    yield put(deleteTarifSuccess(response))
  } catch (error) {
    yield put(deleteTarifFail(error))
  }
}

function* tarifSaga() {

  yield takeEvery(GET_TARIFS, fetchTarifs)
  yield takeEvery(GET_TARIF, fetchTarif)
  yield takeEvery(ADD_NEW_TARIF, onAddNewTarif)
  yield takeEvery(UPDATE_TARIF, onUpdateTarif)
  yield takeEvery(DELETE_TARIF,onDeleteTarif )

}

export default tarifSaga
