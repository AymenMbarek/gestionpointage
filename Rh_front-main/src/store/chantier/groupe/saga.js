import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_GROUPES,
  ADD_NEW_GROUPE,
  UPDATE_GROUPE,
  DELETE_GROUPE
} from "./actionTypes"
import {
  getGroupesFail,
  getGroupesSuccess,
  addGroupeFail,
  addGroupeSuccess,
  updateGroupeFail,
  updateGroupeSuccess,
  deleteGroupeSuccess,
  deleteGroupeFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getGroupes,
  addNewGroupe,
  updateGroupe,
  deleteGroupe
} from "../../../helpers/fakebackend_helper"


function* fetchGroupes() {
  console.log("fetch saga")
  try {
    const response = yield call(getGroupes)
    console.log("res",response)
    yield put(getGroupesSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getGroupesFail(error))
  }
}
function* onAddNewGroupe({ payload: event }) {
  console.log("ch",event)
  try {
    const response = yield call(addNewGroupe, event)
     console.log("new saga",response)
    yield put(addGroupeSuccess(response))
  } catch (error) {
    yield put(addGroupeFail(error))
  }
}

function* onUpdateGroupe({ payload: groupe }) {
  try {
    const response = yield call(updateGroupe, groupe)
    console.log("update saga",response)
    yield put(updateGroupeSuccess(response))
  } catch (error) {
    yield put(updateGroupeFail(error))
  }
}

function* onDeleteGroupe({ payload: groupe }) {
  try {
    
    const response = yield call(deleteGroupe, groupe)
    yield put(deleteGroupeSuccess(response))
  } catch (error) {
    yield put(deleteGroupeFail(error))
  }
}

function* banqueSaga() {

  yield takeEvery(GET_GROUPES, fetchGroupes)
  yield takeEvery(ADD_NEW_GROUPE, onAddNewGroupe)
  yield takeEvery(UPDATE_GROUPE, onUpdateGroupe)
  yield takeEvery(DELETE_GROUPE,onDeleteGroupe )

}

export default banqueSaga
