import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_EXOBJETS,
  ADD_NEW_EXOBJET,
  UPDATE_EXOBJET,
  DELETE_EXOBJET
} from "./actionTypes"
import {
  getExobjetsFail,
  getExobjetsSuccess,
  addExobjetFail,
  addExobjetSuccess,
  updateExobjetFail,
  updateExobjetSuccess,
  deleteExobjetSuccess,
  deleteExobjetFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getExobjets,
  addNewExobjet,
  updateExobjet,
  deleteExobjet
} from "../../../helpers/fakebackend_helper"


function* fetchExobjets() {
  console.log("fetch objets")
  try {
    const response = yield call(getExobjets)
    console.log("res",response)
    yield put(getExobjetsSuccess(response))
  yield takeEvery(GET_EXOBJETS, fetchExobjets)
  } catch (error) {
    yield put(getExobjetsFail(error))
  }
}
function* onAddNewExobjet({ payload: event }) {
  try {
    const response = yield call(addNewExobjet, event)
     console.log("saga new objet",response)
    yield put(addExobjetSuccess(response))
  } catch (error) {
    yield put(addExobjetFail(error))
  }
}

function* onUpdateExobjet({ payload: exobjet }) {
  try {
    const response = yield call(updateExobjet, exobjet)
    console.log("saga edit",response)
    yield put(updateExobjetSuccess(response))
  } catch (error) {
    yield put(updateExobjetFail(error))
  }
}

function* onDeleteExobjet({ payload: exobjet }) {
  try {
    const response = yield call(deleteExobjet, exobjet)
    yield put(deleteExobjetSuccess(response))
  } catch (error) {
    yield put(deleteExobjetFail(error))
  }
}

function* exobjetSaga() {

  yield takeEvery(GET_EXOBJETS, fetchExobjets)
  yield takeEvery(ADD_NEW_EXOBJET, onAddNewExobjet)
  yield takeEvery(UPDATE_EXOBJET, onUpdateExobjet)
  yield takeEvery(DELETE_EXOBJET,onDeleteExobjet )

}

export default exobjetSaga
