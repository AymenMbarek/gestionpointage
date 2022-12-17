import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_INOBJETS,
  ADD_NEW_INOBJET,
  UPDATE_INOBJET,
  DELETE_INOBJET
} from "./actionTypes"
import {
  getInobjetsFail,
  getInobjetsSuccess,
  addInobjetFail,
  addInobjetSuccess,
  updateInobjetFail,
  updateInobjetSuccess,
  deleteInobjetSuccess,
  deleteInobjetFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getInobjets,
  addNewInobjet,
  updateInobjet,
  deleteInobjet
} from "../../../helpers/fakebackend_helper"


function* fetchInobjets() {
  console.log("fetch objets interne")
  try {
    const response = yield call(getInobjets)
    console.log("res",response)
    yield put(getInobjetsSuccess(response))
  yield takeEvery(GET_INOBJETS, fetchInobjets)
  } catch (error) {
    yield put(getInobjetsFail(error))
  }
}
function* onAddNewInobjet({ payload: event }) {
  try {
    const response = yield call(addNewInobjet, event)
     console.log("saga new objet int",response)
    yield put(addInobjetSuccess(response))
  } catch (error) {
    yield put(addInobjetFail(error))
  }
}

function* onUpdateInobjet({ payload: inobjet }) {
  try {
    const response = yield call(updateInobjet, inobjet)
    console.log("saga update",response)
    yield put(updateInobjetSuccess(response))
  } catch (error) {
    yield put(updateInobjetFail(error))
  }
}

function* onDeleteInobjet({ payload: inobjet }) {
  try {
    const response = yield call(deleteInobjet, inobjet)
    yield put(deleteInobjetSuccess(response))
  } catch (error) {
    yield put(deleteInobjetFail(error))
  }
}

function* inobjetSaga() {

  yield takeEvery(GET_INOBJETS, fetchInobjets)
  yield takeEvery(ADD_NEW_INOBJET, onAddNewInobjet)
  yield takeEvery(UPDATE_INOBJET, onUpdateInobjet)
  yield takeEvery(DELETE_INOBJET,onDeleteInobjet )

}

export default inobjetSaga
