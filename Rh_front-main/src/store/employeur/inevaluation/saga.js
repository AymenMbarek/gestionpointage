import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_INEVALUATIONS,
  ADD_NEW_INEVALUATION,
  UPDATE_INEVALUATION,
  DELETE_INEVALUATION
} from "./actionTypes"
import {
  getInevaluationsFail,
  getInevaluationsSuccess,
  addInevaluationFail,
  addInevaluationSuccess,
  updateInevaluationFail,
  updateInevaluationSuccess,
  deleteInevaluationSuccess,
  deleteInevaluationFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getInevaluations,
  addNewInevaluation,
  updateInevaluation,
  deleteInevaluation
} from "../../../helpers/fakebackend_helper"


function* fetchInevaluations() {
  console.log("fetch evaluations interne")
  try {
    const response = yield call(getInevaluations)
    console.log("res",response)
    yield put(getInevaluationsSuccess(response))
  yield takeEvery(GET_INEVALUATIONS, fetchInevaluations)
  } catch (error) {
    yield put(getInevaluationsFail(error))
  }
}
function* onAddNewInevaluation({ payload: event }) {
  try {
    const response = yield call(addNewInevaluation, event)
     console.log("saga new evaluation int",response)
    yield put(addInevaluationSuccess(response))
  } catch (error) {
    yield put(addInevaluationFail(error))
  }
}

function* onUpdateInevaluation({ payload: inevaluation }) {
  try {
    const response = yield call(updateInevaluation, inevaluation)
    console.log("saga update",response)
    yield put(updateInevaluationSuccess(response))
  } catch (error) {
    yield put(updateInevaluationFail(error))
  }
}

function* onDeleteInevaluation({ payload: inevaluation }) {
  try {
    const response = yield call(deleteInevaluation, inevaluation)
    yield put(deleteInevaluationSuccess(response))
  } catch (error) {
    yield put(deleteInevaluationFail(error))
  }
}

function* inevaluationSaga() {

  yield takeEvery(GET_INEVALUATIONS, fetchInevaluations)
  yield takeEvery(ADD_NEW_INEVALUATION, onAddNewInevaluation)
  yield takeEvery(UPDATE_INEVALUATION, onUpdateInevaluation)
  yield takeEvery(DELETE_INEVALUATION,onDeleteInevaluation )

}

export default inevaluationSaga
