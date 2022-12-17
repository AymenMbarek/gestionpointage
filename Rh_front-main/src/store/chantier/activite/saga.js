import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_ACTIVITES,
  ADD_NEW_ACTIVITE,
  UPDATE_ACTIVITE,
  DELETE_ACTIVITE
} from "./actionTypes"
import {
  getActivitesFail,
  getActivitesSuccess,
  addActiviteFail,
  addActiviteSuccess,
  updateActiviteFail,
  updateActiviteSuccess,
  deleteActiviteSuccess,
  deleteActiviteFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getActivites,
  addNewActivite,
  updateActivite,
  deleteActivite
} from "../../../helpers/fakebackend_helper"


function* fetchActivites() {
  console.log("fetch saga")
  try {
    const response = yield call(getActivites)
    console.log("res",response)
    yield put(getActivitesSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getActivitesFail(error))
  }
}
function* onAddNewActivite({ payload: event }) {
  console.log("ch",event)
  try {
    const response = yield call(addNewActivite, event)
     console.log("new saga",response)
    yield put(addActiviteSuccess(response))
  } catch (error) {
    yield put(addActiviteFail(error))
  }
}

function* onUpdateActivite({ payload: activite }) {
  try {
    const response = yield call(updateActivite, activite)
    console.log("update saga",response)
    yield put(updateActiviteSuccess(response))
  } catch (error) {
    yield put(updateActiviteFail(error))
  }
}

function* onDeleteActivite({ payload: activite }) {
  try {
    
    const response = yield call(deleteActivite, activite)
    yield put(deleteActiviteSuccess(response))
  } catch (error) {
    yield put(deleteActiviteFail(error))
  }
}

function* banqueSaga() {

  yield takeEvery(GET_ACTIVITES, fetchActivites)
  yield takeEvery(ADD_NEW_ACTIVITE, onAddNewActivite)
  yield takeEvery(UPDATE_ACTIVITE, onUpdateActivite)
  yield takeEvery(DELETE_ACTIVITE,onDeleteActivite )

}

export default banqueSaga
