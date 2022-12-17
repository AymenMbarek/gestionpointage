import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_OBJETS,
  ADD_NEW_OBJET,
  UPDATE_OBJET,
  DELETE_OBJET
} from "./actionTypes"
import {
  getObjetsFail,
  getObjetsSuccess,
  addObjetFail,
  addObjetSuccess,
  updateObjetFail,
  updateObjetSuccess,
  deleteObjetSuccess,
  deleteObjetFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getObjets,
  addNewObjet,
  updateObjet,
  deleteObjet
} from "../../../helpers/fakebackend_helper"


function* fetchObjets() {
  console.log("fetch b")
  try {
    const response = yield call(getObjets)
    console.log("res",response)
    yield put(getObjetsSuccess(response))
     yield takeEvery(GET_CUSTOMERS, fetchCustomers)
  } catch (error) {
    yield put(getObjetsFail(error))
  }
}
function* onAddNewObjet({ payload: event }) {
  try {
    const response = yield call(addNewObjet, event)
     console.log("sssss",response)
    yield put(addObjetSuccess(response))
  } catch (error) {
    yield put(addObjetFail(error))
  }
}

function* onUpdateObjet({ payload: objet }) {
  try {
    const response = yield call(updateObjet, objet)
    console.log("qqq",response)
    yield put(updateObjetSuccess(response))
  } catch (error) {
    yield put(updateObjetFail(error))
  }
}

function* onDeleteObjet({ payload: objet }) {
  try {
    
    const response = yield call(deleteObjet, objet)
    yield put(deleteObjetSuccess(response))
  } catch (error) {
    yield put(deleteObjetFail(error))
  }
}

function* banqueSaga() {

  yield takeEvery(GET_OBJETS, fetchObjets)
  yield takeEvery(ADD_NEW_OBJET, onAddNewObjet)
  yield takeEvery(UPDATE_OBJET, onUpdateObjet)
  yield takeEvery(DELETE_OBJET,onDeleteObjet )

}

export default banqueSaga
