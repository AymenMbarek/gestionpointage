import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_LISTACTIVITES,
  ADD_NEW_LISTACTIVITE,
  UPDATE_LISTACTIVITE,
  DELETE_LISTACTIVITE
} from "./actionTypes"
import {
  getListactivitesFail,
  getListactivitesSuccess,
  addListactiviteFail,
  addListactiviteSuccess,
  updateListactiviteFail,
  updateListactiviteSuccess,
  deleteListactiviteSuccess,
  deleteListactiviteFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getListactivites,
  addNewListactivite,
  updateListactivite,
  deleteListactivite
} from "../../../helpers/fakebackend_helper"


function* fetchListactivites() {
  console.log("fetch certif")
  try {
    const response = yield call(getListactivites)
    console.log("res",response)
    yield put(getListactivitesSuccess(response))
  yield takeEvery(GET_LISTACTIVITES, fetchListactivites)
  } catch (error) {
    yield put(getListactivitesFail(error))
  }
}
function* onAddNewListactivite({ payload: event }) {
  try {
    const response = yield call(addNewListactivite, event)
     console.log("saga new",response)
    yield put(addListactiviteSuccess(response))
  } catch (error) {
    yield put(addListactiviteFail(error))
  }
}

function* onUpdateListactivite({ payload: listactivite }) {
  try {
    const response = yield call(updateListactivite, listactivite)
    console.log("saga certif",response)
    yield put(updateListactiviteSuccess(response))
  } catch (error) {
    yield put(updateListactiviteFail(error))
  }
}

function* onDeleteListactivite({ payload: listactivite }) {
  try {
    const response = yield call(deleteListactivite, listactivite)
    yield put(deleteListactiviteSuccess(response))
  } catch (error) {
    yield put(deleteListactiviteFail(error))
  }
}

function* listactiviteSaga() {

  yield takeEvery(GET_LISTACTIVITES, fetchListactivites)
  yield takeEvery(ADD_NEW_LISTACTIVITE, onAddNewListactivite)
  yield takeEvery(UPDATE_LISTACTIVITE, onUpdateListactivite)
  yield takeEvery(DELETE_LISTACTIVITE,onDeleteListactivite )

}

export default listactiviteSaga
