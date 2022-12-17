import { call, put, takeEvery } from "redux-saga/effects"

// Bnaque Redux States
import {
  GET_EXEVALUATIONS,
  ADD_NEW_EXEVALUATION,
  UPDATE_EXEVALUATION,
  DELETE_EXEVALUATION
} from "./actionTypes"
import {
  getExevaluationsFail,
  getExevaluationsSuccess,
  addExevaluationFail,
  addExevaluationSuccess,
  updateExevaluationFail,
  updateExevaluationSuccess,
  deleteExevaluationSuccess,
  deleteExevaluationFail
} from "./actions"

//Include Both Helper File with needed methods
import {
  getExevaluations,
  addNewExevaluation,
  updateExevaluation,
  deleteExevaluation
} from "../../../helpers/fakebackend_helper"


function* fetchExevaluations() {
  console.log("fetch evaluations")
  try {
    const response = yield call(getExevaluations)
    console.log("res",response)
    yield put(getExevaluationsSuccess(response))
  yield takeEvery(GET_EXEVALUATIONS, fetchExevaluations)
  } catch (error) {
    yield put(getExevaluationsFail(error))
  }
}
function* onAddNewExevaluation({ payload: event }) {
  try {
    const response = yield call(addNewExevaluation, event)
     console.log("saga new evaluation",response)
    yield put(addExevaluationSuccess(response))
  } catch (error) {
    yield put(addExevaluationFail(error))
  }
}

function* onUpdateExevaluation({ payload: exevaluation }) {
  try {
    const response = yield call(updateExevaluation, exevaluation)
    console.log("saga edit",response)
    yield put(updateExevaluationSuccess(response))
  } catch (error) {
    yield put(updateExevaluationFail(error))
  }
}

function* onDeleteExevaluation({ payload: exevaluation }) {
  try {
    const response = yield call(deleteExevaluation, exevaluation)
    yield put(deleteExevaluationSuccess(response))
  } catch (error) {
    yield put(deleteExevaluationFail(error))
  }
}

function* exevaluationSaga() {

  yield takeEvery(GET_EXEVALUATIONS, fetchExevaluations)
  yield takeEvery(ADD_NEW_EXEVALUATION, onAddNewExevaluation)
  yield takeEvery(UPDATE_EXEVALUATION, onUpdateExevaluation)
  yield takeEvery(DELETE_EXEVALUATION,onDeleteExevaluation )

}

export default exevaluationSaga
