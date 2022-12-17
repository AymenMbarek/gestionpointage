import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_BANQUES,
  ADD_NEW_BANQUE,
  UPDATE_BANQUE,
  DELETE_BANQUE
} from "./actionTypes"
import {
  getBanquesFail,
  getBanquesSuccess,
  addBanqueFail,
  addBanqueSuccess,
  updateBanqueFail,
  updateBanqueSuccess,
  deleteBanqueSuccess,
  deleteBanqueFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getBanques,
  addNewBanque,
  updateBanque,
  deleteBanque
} from "../../../helpers/fakebackend_helper"


function* fetchBanques() {
  console.log("fetch b")
  try {
    const response = yield call(getBanques)
    console.log("res",response)
    yield put(getBanquesSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getBanquesFail(error))
  }
}
function* onAddNewBanque({ payload: event }) {
  try {
    const response = yield call(addNewBanque, event)
     console.log("add saga",response)
    yield put(addBanqueSuccess(response))
  } catch (error) {
    yield put(addBanqueFail(error))
  }
}

function* onUpdateBanque({ payload: banque }) {
  try {
    const response = yield call(updateBanque, banque)
    console.log("update saga",response)
    yield put(updateBanqueSuccess(response))
  } catch (error) {
    yield put(updateBanqueFail(error))
  }
}

function* onDeleteBanque({ payload: banque }) {
  try {
    
    const response = yield call(deleteBanque, banque)
    yield put(deleteBanqueSuccess(response))
  } catch (error) {
    yield put(deleteBanqueFail(error))
  }
}

function* banqueSaga() {

  yield takeEvery(GET_BANQUES, fetchBanques)
  yield takeEvery(ADD_NEW_BANQUE, onAddNewBanque)
  yield takeEvery(UPDATE_BANQUE, onUpdateBanque)
  yield takeEvery(DELETE_BANQUE,onDeleteBanque )

}

export default banqueSaga
